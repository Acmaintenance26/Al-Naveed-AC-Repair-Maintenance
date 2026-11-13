import { expect, test, type Page } from "@playwright/test";
import { site } from "../src/lib/site";
import { DRAFTS, INDEXABLE, SITE_URL } from "./routes";

test("sitemap lists every indexable page and no drafts", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
  const expected = INDEXABLE.map((p) => `${SITE_URL}${p === "/" ? "" : p}`).sort();
  expect(urls).toEqual(expected);
  for (const draft of DRAFTS) expect(xml).not.toContain(`${SITE_URL}${draft}<`);
});

test("robots.txt allows crawling, hides the API and names the sitemap", async ({ request }) => {
  const text = await (await request.get("/robots.txt")).text();
  expect(text).toContain("Allow: /");
  expect(text).toContain("Disallow: /api/");
  expect(text).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
});

async function schemaItems(page: Page) {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  return blocks.flatMap((b) => {
    const data = JSON.parse(b);
    return (Array.isArray(data) ? data : [data]) as Record<string, unknown>[];
  });
}

test("business markup carries only verified facts and no rating", async ({ page }) => {
  await page.goto("/");
  const items = await schemaItems(page);
  const business = items.find((i) => i["@type"] === "HVACBusiness")!;
  expect(business).toMatchObject({
    name: "Al Naveed AC Repair & Maintenance",
    telephone: "+971502977603",
    email: site.email,
    address: {
      streetAddress: "Shop 2, Ayesha Mohammed Belhool Building, 28C Street, Naif",
      addressLocality: "Dubai",
      addressCountry: "AE",
      postOfficeBoxNumber: "39322",
    },
    openingHoursSpecification: { opens: "00:00", closes: "23:59" },
  });
  expect(business).not.toHaveProperty("aggregateRating");
  expect(business).not.toHaveProperty("review");
  expect(business).not.toHaveProperty("priceRange");
  expect(items.map((i) => i["@type"])).toEqual(expect.arrayContaining(["WebSite", "FAQPage"]));
});

test("service, area and article pages carry the right markup", async ({ page }) => {
  await page.goto("/services/ac-maintenance-dubai");
  let types = (await schemaItems(page)).map((i) => i["@type"]);
  expect(types).toEqual(expect.arrayContaining(["Service", "FAQPage", "BreadcrumbList", "HVACBusiness"]));

  await page.goto("/areas/jlt");
  types = (await schemaItems(page)).map((i) => i["@type"]);
  expect(types).toEqual(expect.arrayContaining(["FAQPage", "BreadcrumbList"]));

  await page.goto("/blog/why-is-my-ac-leaking-water");
  const items = await schemaItems(page);
  const article = items.find((i) => i["@type"] === "Article")!;
  expect(article).toMatchObject({ headline: "Why is my AC leaking water? Causes and what to do first" });
  const crumbs = items.find((i) => i["@type"] === "BreadcrumbList") as { itemListElement: unknown[] };
  expect(crumbs.itemListElement).toHaveLength(3);
});

test("FAQ markup matches the questions shown on the page", async ({ page }) => {
  await page.goto("/services/ac-gas-refilling-dubai");
  const faq = (await schemaItems(page)).find((i) => i["@type"] === "FAQPage") as {
    mainEntity: { name: string }[];
  };
  const shown = await page.locator("main details summary").allInnerTexts();
  expect(faq.mainEntity.map((q) => q.name)).toEqual(shown.map((s) => s.trim()));
});

test("the Google rating is shown with its source and date, never as on-site reviews", async ({ page }) => {
  await page.goto("/");
  const reviews = page.locator("section", {
    has: page.getByRole("heading", { name: "What customers say about us on Google" }),
  });
  await expect(reviews).toContainText("out of 5, from 202 Google reviews");
  await expect(reviews).toContainText("as shown on Google in November 2026");
  await expect(reviews.getByRole("link", { name: "Read our reviews on Google" })).toHaveAttribute(
    "href",
    "https://share.google/Q2daJMiRx7FsRZSfz",
  );
  await expect(page.locator("blockquote")).toHaveCount(0);
});

test("name, address and phone are identical wherever they appear", async ({ page }) => {
  for (const path of ["/", "/contact", "/about", "/areas/naif"]) {
    await page.goto(path);
    const footer = page.locator("footer");
    await expect(footer).toContainText("Shop 2, Ayesha Mohammed Belhool Building");
    await expect(footer).toContainText("28C Street, Naif, Deira");
    await expect(footer).toContainText("+971 50 297 7603");
    await expect(footer).toContainText("Open 24 hours, every day");
  }
});

test("security headers are set and the framework is not advertised", async ({ request }) => {
  const headers = (await request.get("/")).headers();
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["strict-transport-security"]).toContain("max-age=");
  expect(headers["x-powered-by"]).toBeUndefined();
});

test("old addresses redirect permanently", async ({ request }) => {
  const res = await request.get("/contact-us", { maxRedirects: 0 });
  expect(res.status()).toBe(308);
  expect(res.headers().location).toBe("/contact");
});

test("pages are served as complete HTML without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/services/ac-repair-dubai");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("AC Repair in Dubai");
  await expect(page.getByText("Most AC breakdowns in Dubai trace back")).toBeVisible();
  await expect(page.locator("form").getByLabel("Your name")).toBeVisible();
  await page.locator("main details summary").first().click();
  await expect(page.locator("main details").first()).toHaveAttribute("open", "");
  await context.close();
});

test("no secret or server-only text reaches the browser bundle", async ({ page }) => {
  const scripts: string[] = [];
  page.on("response", async (r) => {
    if (r.url().includes("/_next/static/") && r.url().endsWith(".js")) {
      scripts.push(await r.text().catch(() => ""));
    }
  });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Ask the AC Assistant" }).click();
  await expect(page.getByRole("dialog", { name: "Al Naveed AC Assistant" })).toBeVisible();
  await page.waitForLoadState("networkidle");
  const all = scripts.join("\n");
  expect(scripts.length).toBeGreaterThan(3);
  for (const needle of [
    "ANTHROPIC_API_KEY",
    "RESEND_API_KEY",
    "ENQUIRY_WEBHOOK_URL",
    "You are the Al Naveed AC Assistant",
    "sk-ant-",
  ]) {
    expect(all, `found ${needle} in client JavaScript`).not.toContain(needle);
  }
});
