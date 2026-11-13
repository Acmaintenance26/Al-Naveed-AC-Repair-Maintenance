export const SERVICES = [
  "ac-repair-dubai",
  "ac-maintenance-dubai",
  "ac-servicing-dubai",
  "ac-installation-dubai",
  "ac-gas-refilling-dubai",
  "hvac-duct-cleaning-dubai",
  "emergency-ac-repair-dubai",
  "ac-coil-cleaning-dubai",
  "thermostat-repair-dubai",
];

export const AREAS = [
  "naif",
  "deira",
  "downtown-dubai",
  "business-bay",
  "jumeirah",
  "al-barsha",
  "jvc",
  "jlt",
  "dubai-marina",
  "palm-jumeirah",
];

export const POSTS = [
  "ac-not-cooling-checks-before-calling-technician",
  "why-is-my-ac-leaking-water",
  "how-often-to-service-ac-in-dubai",
  "ac-gas-refilling-when-is-it-needed",
];

/** Pages that should be indexable. */
export const INDEXABLE = [
  "/",
  "/about",
  "/services",
  ...SERVICES.map((s) => `/services/${s}`),
  "/areas",
  ...AREAS.map((a) => `/areas/${a}`),
  "/contact",
  "/book",
  "/privacy-policy",
  "/terms",
];

/** Draft content: visible in preview, never indexable. */
export const DRAFTS = ["/blog", ...POSTS.map((p) => `/blog/${p}`)];

export const ALL_PAGES = [...INDEXABLE, ...DRAFTS];

export const SITE_URL = "https://www.alnaveedac.com";
export const PHONE_HREFS = ["tel:+971502977603", "tel:+971509124500"];
export const WHATSAPP_PREFIX = "https://wa.me/971502977603?text=";

export const VIEWPORTS = [
  { name: "360 mobile", width: 360, height: 740 },
  { name: "390 mobile", width: 390, height: 844 },
  { name: "430 mobile", width: 430, height: 932 },
  { name: "768 tablet", width: 768, height: 1024 },
  { name: "1024 laptop", width: 1024, height: 768 },
  { name: "1440 desktop", width: 1440, height: 900 },
  { name: "1920 large desktop", width: 1920, height: 1080 },
];
