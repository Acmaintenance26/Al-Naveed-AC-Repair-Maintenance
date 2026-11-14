import { expect, test } from "@playwright/test";
import { ALL_PAGES, DRAFTS, INDEXABLE, SITE_URL } from "./routes";

const seenTitles = new Map<string, string>();
const seenDescriptions = new Map<string, string>();

test.describe.configure({ mode: "serial" });

for (const path of ALL_PAGES) {
  test(`page ${path}`, async ({ page }) => {
    const problems: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") problems.push(`console: ${m.text()}`);
    });
    page.on("pageerror", (e) => problems.push(`pageerror: ${e.message}`));
    page.on("response", (r) => {
      if (r.status() >= 400) problems.push(`${r.status()} ${r.url()}`);
    });

    const response = await page.goto(path, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    // One h1, and a sensible heading order.
    await expect(page.locator("h1")).toHaveCount(1);
    const levels = await page.locator("main h1, main h2, main h3, main h4").evaluateAll((els) =>
      els.map((e) => Number(e.tagName[1])),
    );
    for (let i = 1; i < levels.length; i++) {
      expect(levels[i] - levels[i - 1], `heading jump at index ${i} on ${path}`).toBeLessThanOrEqual(1);
    }

    // Title and description: present, unique, sensible length.
    const title = await page.title();
    expect(title.length).toBeGreaterThan(15);
    expect(title.length, `title too long: ${title}`).toBeLessThanOrEqual(70);
    expect(seenTitles.get(title), `duplicate title "${title}"`).toBeUndefined();
    seenTitles.set(title, path);

    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description?.length ?? 0).toBeGreaterThanOrEqual(70);
    expect(description?.length ?? 0, `description too long on ${path}`).toBeLessThanOrEqual(165);
    expect(seenDescriptions.get(description!), `duplicate description on ${path}`).toBeUndefined();
    seenDescriptions.set(description!, path);

    // Canonical points at the production address of this page.
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBe(`${SITE_URL}${path === "/" ? "" : path}`);

    // Social tags.
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);

    // Indexing rules.
    const robotsTag = page.locator('meta[name="robots"]');
    const robots = (await robotsTag.count()) > 0 ? await robotsTag.first().getAttribute("content") : null;
    if (DRAFTS.includes(path)) expect(robots).toContain("noindex");
    if (INDEXABLE.includes(path)) expect(robots ?? "").not.toContain("noindex");

    // Structured data parses.
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocks.length).toBeGreaterThan(0);
    for (const block of blocks) expect(() => JSON.parse(block)).not.toThrow();

    // Images load and carry alt text. Below-the-fold photos are lazy-loaded, so force
    // them to load before checking.
    const images = await page.locator("img").evaluateAll((imgs) =>
      Promise.all(
        (imgs as HTMLImageElement[]).map(async (i) => {
          i.loading = "eager";
          await Promise.race([
            i.decode().catch(() => undefined),
            new Promise((resolve) => setTimeout(resolve, 10_000)),
          ]);
          return {
            src: i.currentSrc || i.src,
            ok: i.complete && i.naturalWidth > 0,
            alt: i.getAttribute("alt"),
          };
        }),
      ),
    );
    for (const img of images) {
      expect(img.ok, `broken image ${img.src}`).toBe(true);
      expect(img.alt, `missing alt on ${img.src}`).not.toBeNull();
    }

    // No sideways scrolling.
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);

    expect(problems, problems.join("\n")).toEqual([]);
  });
}
