import { expect, test } from "@playwright/test";
import { VIEWPORTS } from "./routes";

const PAGES = [
  "/",
  "/services",
  "/services/ac-repair-dubai",
  "/areas",
  "/areas/palm-jumeirah",
  "/about",
  "/contact",
  "/book",
  "/blog",
  "/blog/ac-gas-refilling-when-is-it-needed",
  "/privacy-policy",
];

for (const vp of VIEWPORTS) {
  test.describe(vp.name, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test("no page scrolls sideways or clips its content", async ({ page }) => {
      test.setTimeout(120_000);
      for (const path of PAGES) {
        await page.goto(path, { waitUntil: "load" });
        const result = await page.evaluate(() => {
          const doc = document.documentElement;
          const vw = doc.clientWidth;
          const offenders: string[] = [];
          for (const el of document.querySelectorAll<HTMLElement>("body *")) {
            if (el.closest("[hidden], svg, .sr-only, [aria-hidden='true']")) continue;
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) continue;
            if (r.right > vw + 1 || r.left < -1) {
              offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 50)}`);
            }
          }
          return { overflow: doc.scrollWidth - vw, offenders: offenders.slice(0, 5) };
        });
        expect(result.overflow, `${path} scrolls sideways at ${vp.width}px`).toBeLessThanOrEqual(0);
        expect(result.offenders, `${path} at ${vp.width}px`).toEqual([]);

        const h1 = await page.locator("h1").boundingBox();
        expect(h1!.width, `${path} heading width`).toBeLessThanOrEqual(vp.width);

        const fontSize = await page
          .locator("main p")
          .first()
          .evaluate((p) => parseFloat(getComputedStyle(p).fontSize));
        expect(fontSize, `${path} body text size`).toBeGreaterThanOrEqual(15);
      }
    });

    test("contact actions are reachable and large enough to tap", async ({ page }) => {
      await page.goto("/");
      const bar = page.getByRole("region", { name: "Quick contact" });
      if (vp.width < 1024) {
        await expect(bar).toBeVisible();
        await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
      } else {
        await expect(bar).toBeHidden();
        await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
        await expect(page.locator('[data-cta="header-call"]')).toBeVisible();
      }
      for (const cta of ["hero-call", "hero-book"]) {
        const box = await page.locator(`[data-cta="${cta}"]`).boundingBox();
        expect(box!.height).toBeGreaterThanOrEqual(48);
      }
      await expect(page.locator('[data-cta="hero-call"]')).toBeInViewport();
    });

    test("form fields are wide and tall enough", async ({ page }) => {
      await page.goto("/book", { waitUntil: "networkidle" });
      const form = page.locator("form");
      for (const label of ["Your name", "Phone number", "Your location"]) {
        await expect(form.getByLabel(label)).toBeVisible();
        const box = await form.getByLabel(label).boundingBox();
        expect(box!.height).toBeGreaterThanOrEqual(48);
        expect(box!.width).toBeGreaterThanOrEqual(Math.min(240, vp.width - 100));
      }
      const fontSize = await form
        .getByLabel("Your name")
        .evaluate((i) => parseFloat(getComputedStyle(i).fontSize));
      expect(fontSize).toBeGreaterThanOrEqual(16); // stops iOS zooming on focus
    });
  });
}
