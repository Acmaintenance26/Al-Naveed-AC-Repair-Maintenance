import { expect, test } from "@playwright/test";
import { SERVICES } from "./routes";

test.describe("desktop navigation", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("services menu opens, lists every service and navigates", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Services" });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    const menu = page.locator(`#${await trigger.getAttribute("aria-controls")}`);
    await expect(menu.getByRole("link")).toHaveCount(SERVICES.length + 1);

    await menu.getByRole("link", { name: "AC Gas Refilling" }).click();
    await expect(page).toHaveURL(/\/services\/ac-gas-refilling-dubai$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("AC Gas Refilling in Dubai");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("services menu closes with Escape and on outside click", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Services" });
    await trigger.click();
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();
    await page.mouse.click(40, 700);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("main links reach their pages", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    for (const [name, url, heading] of [
      ["About us", "/about", "About Al Naveed AC Repair & Maintenance"],
      ["Guides", "/blog", "AC guides and advice"],
      ["Contact", "/contact", "Contact us"],
    ]) {
      await nav.getByRole("link", { name, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${url}$`));
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    }
    await page.getByRole("link", { name: /Al Naveed.*home page/ }).first().click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("areas menu lists areas and links to all of them", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    const trigger = nav.getByRole("button", { name: "Areas" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await nav.getByRole("link", { name: "Dubai Marina", exact: true }).click();
    await expect(page).toHaveURL(/\/areas\/dubai-marina$/);
    await nav.getByRole("button", { name: "Areas" }).click();
    await nav.getByRole("link", { name: /^All \d+ areas$/ }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Areas we serve in Dubai");
  });

  test("header and hero calls to action point to the right places", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('[data-cta="header-call"]')).toHaveAttribute("href", "tel:+971502977603");
    await expect(page.locator('[data-cta="hero-call"]')).toHaveAttribute("href", "tel:+971502977603");
    await expect(page.locator('[data-cta="band-whatsapp"]')).toHaveAttribute("href", /^https:\/\/wa\.me\/971502977603/);
    await page.locator('[data-cta="hero-book"]').click();
    await expect(page).toHaveURL(/\/book$/);
  });

  test("skip link moves focus to the main content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
  });

  test("homepage FAQ opens one answer at a time", async ({ page }) => {
    await page.goto("/");
    const items = page.locator('details[name="home-faq"]');
    await items.nth(0).locator("summary").click();
    await expect(items.nth(0)).toHaveAttribute("open", "");
    await items.nth(1).locator("summary").click();
    await expect(items.nth(1)).toHaveAttribute("open", "");
    await expect(items.nth(0)).not.toHaveAttribute("open", "");
  });
});

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test("menu opens, navigates and closes", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await toggle.click();
    const menu = page.getByRole("navigation", { name: "Mobile" });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole("link", { name: "AC Repair", exact: true })).toBeVisible();

    await menu.getByRole("link", { name: "Emergency AC Repair" }).click();
    await expect(page).toHaveURL(/\/services\/emergency-ac-repair-dubai$/);
    await expect(menu).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(menu).toBeHidden();
  });

  test("sticky contact bar offers call, WhatsApp and booking", async ({ page }) => {
    await page.goto("/services/ac-repair-dubai");
    const bar = page.getByRole("region", { name: "Quick contact" });
    await expect(bar).toBeVisible();
    await expect(bar.locator('[data-cta="mobile-call"]')).toHaveAttribute("href", "tel:+971502977603");
    await expect(bar.locator('[data-cta="mobile-whatsapp"]')).toHaveAttribute("href", /^https:\/\/wa\.me\/971502977603/);

    for (const cta of ["mobile-call", "mobile-whatsapp", "mobile-book"]) {
      const box = await bar.locator(`[data-cta="${cta}"]`).boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(48);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(bar).toBeInViewport();
    await bar.locator('[data-cta="mobile-book"]').click();
    await expect(page).toHaveURL(/\/book$/);
  });
});

test("unknown addresses show the 404 page with a 404 status", async ({ page }) => {
  for (const path of ["/nothing-here", "/services/not-a-service", "/areas/not-an-area", "/blog/not-a-post"]) {
    const res = await page.goto(path);
    expect(res?.status(), path).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("This page does not exist");
  }
});
