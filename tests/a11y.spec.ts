import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const PAGES = [
  "/",
  "/services",
  "/services/ac-repair-dubai",
  "/services/emergency-ac-repair-dubai",
  "/areas",
  "/areas/deira",
  "/about",
  "/contact",
  "/book",
  "/blog",
  "/blog/ac-not-cooling-checks-before-calling-technician",
  "/privacy-policy",
  "/terms",
];

async function audit(page: Page, label: string) {
  // The axe package is typed against a slightly different Playwright release.
  const results = await new AxeBuilder({ page: page as never })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
    .analyze();
  const summary = results.violations.map(
    (v) => `${v.impact} ${v.id}: ${v.help} (${v.nodes.length}) e.g. ${v.nodes[0]?.target.join(" ")}`,
  );
  expect(summary, `${label}\n${summary.join("\n")}`).toEqual([]);
}

for (const [name, viewport] of [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
] as const) {
  test.describe(name, () => {
    test.use({ viewport });

    for (const path of PAGES) {
      test(`axe: ${path}`, async ({ page }) => {
        await page.goto(path, { waitUntil: "networkidle" });
        await page.waitForTimeout(3800); // let the hero animation settle
        await audit(page, `${path} (${name})`);
      });
    }
  });
}

test("axe: open services menu", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Services" }).click();
  await audit(page, "services menu");
});

test("axe: open mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await audit(page, "mobile menu");
});

test("axe: assistant open with a conversation", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Ask the AC Assistant" }).click();
  const panel = page.getByRole("dialog", { name: "Al Naveed AC Assistant" });
  await panel.getByRole("button", { name: "My AC is not cooling" }).click();
  await expect(panel.getByRole("log")).toContainText("clogged filter");
  await page.waitForTimeout(400);
  await audit(page, "assistant");
});

test("axe: form with validation errors and with a failed send", async ({ page }) => {
  await page.goto("/contact");
  const form = page.locator("form");
  await form.getByRole("button", { name: "Send enquiry" }).click();
  await audit(page, "form errors");

  await page.route("**/api/enquiry", (route) =>
    route.fulfill({ status: 503, contentType: "application/json", body: '{"ok":false,"code":"not_configured"}' }),
  );
  await form.getByLabel("Your name").fill("Test Customer");
  await form.getByLabel("Phone number").fill("+971501234567");
  await form.getByLabel("Service required").selectOption("other");
  await form.getByLabel("Your location").fill("Deira");
  await form.getByLabel("What is the AC doing?").fill("Not cooling at all.");
  await form.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByText("Your request was not sent")).toBeVisible();
  await audit(page, "form failure state");
});

test("keyboard users can reach the main controls and always see focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const seen: string[] = [];
  for (let i = 0; i < 14; i++) {
    await page.keyboard.press("Tab");
    const info = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      const style = getComputedStyle(el);
      return {
        name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40),
        outlined: style.outlineStyle !== "none" && parseFloat(style.outlineWidth) >= 2,
      };
    });
    seen.push(info.name);
    expect(info.outlined, `no visible focus on "${info.name}"`).toBe(true);
  }
  expect(seen[0]).toBe("Skip to content");
  expect(seen).toContain("Services");
});

test("reduced motion switches the animations off", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  const names = await page.evaluate(() =>
    [".temp-readout", ".airflow path", ".pulse-dot"].map(
      (s) => getComputedStyle(document.querySelector(s)!).animationName,
    ),
  );
  expect(names).toEqual(["none", "none", "none"]);
  await context.close();
});
