// Renders the social sharing image and the Apple touch icon from HTML, using the site's
// own font. Run with: node scripts/generate-brand-assets.mjs
// Requires Playwright (a dev dependency) and its Chromium browser.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { chromium } from "@playwright/test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const font = readFileSync(path.join(root, "src/fonts/manrope-latin-variable.woff2")).toString("base64");

const fontFace = `@font-face{font-family:Manrope;src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:200 800}`;
const mark = (size) => `<svg viewBox="0 0 40 40" width="${size}" height="${size}"><rect width="40" height="40" rx="9" fill="#1769AA"/><g fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M9 13.5c3.7-2.6 7.3-2.6 11 0s7.3 2.6 11 0"/><path d="M9 20.5c3.7-2.6 7.3-2.6 11 0s7.3 2.6 11 0" opacity=".78"/><path d="M9 27.5c3.7-2.6 7.3-2.6 11 0s7.3 2.6 11 0" opacity=".52"/></g></svg>`;
const lines = [0, 1, 2, 3, 4, 5]
  .map((r) => `<path opacity="${0.3 - r * 0.04}" d="M-20 ${40 + r * 44}c150-46 300-46 450 0s300 46 450 0 300-46 360 0"/>`)
  .join("");

const og = `<!doctype html><html><head><style>${fontFace}
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#101C2C;color:#fff;font-family:Manrope;position:relative;overflow:hidden}
.pad{position:absolute;inset:0;padding:72px 80px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:20px}.brand b{font-size:34px;font-weight:800;letter-spacing:-.03em;display:block;line-height:1}
.brand span{font-size:20px;color:rgba(255,255,255,.7);font-weight:600;display:block;margin-top:8px}
h1{font-size:84px;line-height:1.03;letter-spacing:-.035em;font-weight:750;margin-top:74px;max-width:900px}
.foot{margin-top:auto;display:flex;gap:44px;font-size:28px;font-weight:650}.foot span{color:#35A8E8}
svg.air{position:absolute;left:0;right:0;bottom:0;width:1200px;height:330px}
</style></head><body>
<svg class="air" viewBox="0 0 1200 300" preserveAspectRatio="none" fill="none" stroke="#35A8E8" stroke-width="1.5">${lines}</svg>
<div class="pad"><div class="brand">${mark(76)}<div><b>Al Naveed</b><span>AC Repair &amp; Maintenance</span></div></div>
<h1>AC repair and maintenance in Dubai</h1>
<div class="foot"><div>Open 24 hours, every day</div><div><span>+971 50 297 7603</span></div></div></div>
</body></html>`;

const apple = `<!doctype html><html><head><style>*{margin:0}body{width:180px;height:180px;background:#1769AA;display:flex;align-items:center;justify-content:center}</style></head><body>${mark(180)}</body></html>`;

const browser = await chromium.launch();
const shoot = async (html, width, height, out) => {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(root, out) });
  await page.close();
  console.log("wrote", out);
};
await shoot(og, 1200, 630, "src/app/opengraph-image.png");
await shoot(apple, 180, 180, "src/app/apple-icon.png");
await browser.close();
