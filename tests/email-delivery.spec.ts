import { expect, test } from "@playwright/test";
import { site } from "../src/lib/site";

// These run against a second server (port 3101, see playwright.config.ts) that has
// RESEND_API_KEY set and no webhook, with Resend's address pointed at the local mock.
// Nothing is sent to a real inbox.
test.use({ baseURL: "http://localhost:3101" });
test.describe.configure({ mode: "serial" });

const MOCK = "http://127.0.0.1:4011";
let counter = 0;
const ip = () => `192.0.2.${(Date.now() + counter++) % 250}`;

const valid = {
  kind: "booking",
  name: "Email Test",
  phone: "+971501234567",
  service: "ac-servicing-dubai",
  location: "Business Bay, Test Tower",
  message: "Two units need servicing.",
  preferredTime: "Morning",
  al_ref: "",
  elapsedMs: 9000,
};

test("a booking request is emailed to the business address through Resend", async ({ request }) => {
  const res = await request.post("/api/enquiry", { data: valid, headers: { "x-forwarded-for": ip() } });
  expect(res.status()).toBe(200);
  expect(await res.json()).toEqual({ ok: true });

  const sent = await (await request.get(`${MOCK}/last-email`)).json();
  expect(sent.authorization).toBe("Bearer re_test_key_not_real");
  expect(sent.body.to).toEqual([site.email]);
  expect(sent.body.to).toEqual(["info@acmaintenancedubai.ae"]);
  expect(sent.body.from).toBe(`Website <website@${site.email.split("@")[1]}>`);
  expect(sent.body.subject).toBe("Booking request: AC Servicing, Business Bay, Test Tower");
  expect(sent.body.text).toContain("Email Test");
  expect(sent.body.text).toContain("+971501234567");
  expect(sent.body.text).toContain("Business Bay, Test Tower");
});

test("when the email provider refuses the message the form does not claim success", async ({ request }) => {
  const res = await request.post("/api/enquiry", {
    data: { ...valid, location: "__refuse__" },
    headers: { "x-forwarded-for": ip() },
  });
  expect(res.status()).toBe(502);
  expect((await res.json()).code).toBe("delivery_failed");
});

test("the booking form on the page reports a real send as confirmed, not booked", async ({ page }) => {
  await page.setExtraHTTPHeaders({ "x-forwarded-for": ip() });
  await page.goto("/book", { waitUntil: "networkidle" }); // let the form hydrate before typing
  const form = page.locator("form");
  await form.getByLabel("Your name").fill("Page Test");
  await form.getByLabel("Phone number").fill("+971 50 123 4567");
  await form.getByLabel("Service required").selectOption("ac-repair-dubai");
  await form.getByLabel("Your location").fill("Deira, Page Test");
  await form.getByLabel("What is the AC doing?").fill("Not cooling.");
  await page.waitForTimeout(2600); // the form refuses submissions faster than a person could type
  await form.getByRole("button", { name: "Send booking request" }).click();
  const result = page.getByRole("status").filter({ hasText: "Request sent" });
  await expect(result).toBeVisible();
  await expect(result).toContainText("This is not a confirmed booking");
  await expect(page.getByText(/was not sent/i)).toHaveCount(0);
});
