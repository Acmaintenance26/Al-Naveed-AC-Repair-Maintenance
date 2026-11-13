import { expect, test, type Page } from "@playwright/test";

let counter = 0;
/** Gives each test its own address so the rate limiter treats them separately. */
const uniqueIp = () => `203.0.113.${(Date.now() + counter++) % 250}`;

async function fill(page: Page, form: ReturnType<Page["locator"]>) {
  await form.getByLabel("Your name").fill("Test Customer");
  await form.getByLabel("Phone number").fill("+971 50 123 4567");
  await form.getByLabel("Service required").selectOption("ac-servicing-dubai");
  await form.getByLabel("Your location").fill("Al Barsha 1, Test Building");
  await form.getByLabel("What is the AC doing?").fill("Two split units need a full service before summer.");
}

test.beforeEach(async ({ page }) => {
  await page.setExtraHTTPHeaders({ "x-forwarded-for": uniqueIp() });
});

test("empty form shows a message for every required field and focuses the first", async ({ page }) => {
  await page.goto("/contact");
  const form = page.locator("form");
  await form.getByRole("button", { name: "Send enquiry" }).click();

  await expect(form.getByText("Enter your name.")).toBeVisible();
  await expect(form.getByText(/Enter a phone number/)).toBeVisible();
  await expect(form.getByText("Choose the service you need.")).toBeVisible();
  await expect(form.getByText(/Enter your area and building/)).toBeVisible();
  await expect(form.getByText("Tell us briefly what the AC is doing.")).toBeVisible();
  await expect(form.getByLabel("Your name")).toBeFocused();
  await expect(form.getByLabel("Your name")).toHaveAttribute("aria-invalid", "true");
});

test("rejects a phone number that is too short", async ({ page }) => {
  await page.goto("/contact");
  const form = page.locator("form");
  await fill(page, form);
  await form.getByLabel("Phone number").fill("12345");
  await form.getByRole("button", { name: "Send enquiry" }).click();
  await expect(form.getByText(/Enter a phone number/)).toBeVisible();
  await expect(form.getByLabel("Phone number")).toBeFocused();
});

test("booking request is delivered and confirmed honestly", async ({ page, request }) => {
  await page.goto("/book");
  const form = page.locator("form");
  await fill(page, form);
  await form.getByLabel(/Preferred time/).selectOption("Morning");
  await page.waitForTimeout(2600); // a person takes longer than the spam timer
  await form.getByRole("button", { name: "Send booking request" }).click();

  const result = page.getByRole("status").filter({ hasText: "Request sent" });
  await expect(result).toBeVisible();
  await expect(result).toContainText("This is not a confirmed booking");
  await expect(result).toContainText("+971501234567");

  const delivered = await (await request.get("http://127.0.0.1:4011/last")).json();
  expect(delivered).toMatchObject({
    kind: "booking",
    name: "Test Customer",
    phone: "+971501234567",
    service: "ac-servicing-dubai",
    serviceLabel: "AC Servicing",
    location: "Al Barsha 1, Test Building",
    preferredTime: "Morning",
  });
});

test("when delivery is not set up, the form says so and offers WhatsApp", async ({ page }) => {
  await page.route("**/api/enquiry", (route) =>
    route.fulfill({ status: 503, contentType: "application/json", body: '{"ok":false,"code":"not_configured"}' }),
  );
  await page.goto("/contact");
  const form = page.locator("form");
  await fill(page, form);
  await form.getByRole("button", { name: "Send enquiry" }).click();

  const alert = page.getByRole("alert").filter({ hasText: "Your request was not sent" });
  await expect(alert).toBeVisible();
  const href = await alert.getByRole("link", { name: "Send by WhatsApp" }).getAttribute("href");
  expect(href).toMatch(/^https:\/\/wa\.me\/971502977603\?text=/);
  expect(decodeURIComponent(href!)).toContain("Name: Test Customer");
  expect(decodeURIComponent(href!)).toContain("Service: AC Servicing");

  await alert.getByRole("button", { name: "Go back to the form" }).click();
  await expect(page.locator("form")).toBeVisible();
});

test("a network failure never shows a success message", async ({ page }) => {
  await page.route("**/api/enquiry", (route) => route.abort());
  await page.goto("/contact");
  const form = page.locator("form");
  await fill(page, form);
  await form.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("alert").filter({ hasText: "Your request was not sent" })).toBeVisible();
  await expect(page.getByText("Request sent")).toHaveCount(0);
});

test("send by WhatsApp opens a chat with the details filled in", async ({ page, context }) => {
  await context.route("https://wa.me/**", (route) => route.fulfill({ status: 200, body: "ok" }));
  await page.goto("/contact");
  const form = page.locator("form");
  await fill(page, form);
  const [popup] = await Promise.all([
    context.waitForEvent("page"),
    form.getByRole("button", { name: "Send by WhatsApp instead" }).click(),
  ]);
  expect(popup.url()).toMatch(/^https:\/\/wa\.me\/971502977603\?text=/);
  expect(decodeURIComponent(popup.url())).toContain("Location: Al Barsha 1, Test Building");
});

test("booking form picks up the service and area from the address", async ({ page }) => {
  await page.goto("/book?service=ac-gas-refilling-dubai&area=JVC");
  const form = page.locator("form");
  await expect(form.getByLabel("Service required")).toHaveValue("ac-gas-refilling-dubai");
  await expect(form.getByLabel("Your location")).toHaveValue("JVC");

  await page.goto("/book?service=<script>alert(1)</script>");
  await expect(page.locator("form").getByLabel("Service required")).toHaveValue("");
});

test("service pages carry an enquiry form with the service preselected", async ({ page }) => {
  await page.goto("/services/hvac-duct-cleaning-dubai");
  await expect(page.locator("form").getByLabel("Service required")).toHaveValue("hvac-duct-cleaning-dubai");
});

test.describe("enquiry API", () => {
  const valid = {
    kind: "enquiry",
    name: "API Test",
    phone: "+971501234567",
    service: "ac-repair-dubai",
    location: "Deira",
    message: "Unit is blowing warm air.",
    al_ref: "",
    elapsedMs: 9000,
  };
  const post = (request: import("@playwright/test").APIRequestContext, data: unknown, headers = {}) =>
    request.post("/api/enquiry", { data, headers: { "x-forwarded-for": uniqueIp(), ...headers } });

  test("rejects invalid input with field errors", async ({ request }) => {
    const res = await post(request, { ...valid, name: "", phone: "abc", service: "made-up" });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.code).toBe("invalid");
    expect(Object.keys(body.errors).sort()).toEqual(["name", "phone", "service"]);
  });

  test("strips control characters and markup stays inert text", async ({ request }) => {
    const res = await post(request, { ...valid, name: "Eve\u0000\u0007 <b>x</b>", message: "line one\n\n\n\nline two" });
    expect(res.status()).toBe(200);
    const delivered = await (await request.get("http://127.0.0.1:4011/last")).json();
    expect(delivered.name).toBe("Eve <b>x</b>");
    expect(delivered.message).toBe("line one\n\nline two");
  });

  test("silently drops submissions that fill the hidden field", async ({ request }) => {
    const before = await (await request.get("http://127.0.0.1:4011/last")).text();
    const res = await post(request, { ...valid, name: "Bot Bot", al_ref: "http://spam.example" });
    expect(res.status()).toBe(200);
    expect(await (await request.get("http://127.0.0.1:4011/last")).text()).toBe(before);
  });

  test("asks for a resend when submitted implausibly fast", async ({ request }) => {
    const res = await post(request, { ...valid, elapsedMs: 300 });
    expect(res.status()).toBe(400);
    expect((await res.json()).code).toBe("too_fast");
  });

  test("refuses cross-site posts, oversized bodies and malformed JSON", async ({ request }) => {
    expect((await post(request, valid, { origin: "https://evil.example" })).status()).toBe(403);
    expect((await post(request, { ...valid, message: "x".repeat(9000) })).status()).toBe(413);
    const bad = await request.post("/api/enquiry", {
      data: "{not json",
      headers: { "content-type": "application/json", "x-forwarded-for": uniqueIp() },
    });
    expect(bad.status()).toBe(400);
  });

  test("limits repeated submissions from one address", async ({ request }) => {
    const ip = "198.51.100.77";
    const statuses: number[] = [];
    for (let i = 0; i < 7; i++) {
      statuses.push((await post(request, { ...valid, elapsedMs: 100 }, { "x-forwarded-for": ip })).status());
    }
    expect(statuses.slice(0, 5)).toEqual([400, 400, 400, 400, 400]);
    expect(statuses.slice(5)).toEqual([429, 429]);
  });
});
