import { expect, test } from "@playwright/test";
import { ALL_PAGES, PHONE_HREFS, WHATSAPP_PREFIX } from "./routes";

test("every internal link resolves and every contact link is correct", async ({ page, request }) => {
  test.setTimeout(240_000);
  const internal = new Set<string>();
  const external = new Set<string>();

  for (const path of ALL_PAGES) {
    await page.goto(path, { waitUntil: "domcontentloaded" });
    const hrefs = await page.locator("a[href]").evaluateAll((as) =>
      as.map((a) => a.getAttribute("href") ?? ""),
    );
    for (const href of hrefs) {
      if (href.startsWith("tel:")) {
        expect(PHONE_HREFS, `unexpected phone link ${href} on ${path}`).toContain(href);
      } else if (href.startsWith("https://wa.me/")) {
        expect(href.startsWith(WHATSAPP_PREFIX), `unexpected WhatsApp link ${href} on ${path}`).toBe(true);
        expect(decodeURIComponent(href.slice(WHATSAPP_PREFIX.length)).length).toBeGreaterThan(10);
      } else if (href.startsWith("mailto:")) {
        expect(href).toBe("mailto:info@acmaintenancedubai.ae");
      } else if (href.startsWith("/")) {
        internal.add(href.split("#")[0]);
      } else if (href.startsWith("#")) {
        const id = href.slice(1);
        expect(await page.locator(`[id="${id}"]`).count(), `missing anchor ${href} on ${path}`).toBe(1);
      } else {
        external.add(href);
      }
    }
  }

  expect(internal.size).toBeGreaterThan(30);
  for (const href of internal) {
    const res = await request.get(href);
    expect(res.status(), `broken internal link ${href}`).toBe(200);
  }

  // The only outside destination is the Google Business Profile.
  expect([...external]).toEqual(["https://share.google/Q2daJMiRx7FsRZSfz"]);
});
