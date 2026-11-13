/**
 * Single source of truth for business facts.
 * Every value here comes from the Google Business Profile export supplied by the owner.
 * Do not add anything that has not been confirmed by the business.
 */

export const site = {
  name: "Al Naveed AC Repair & Maintenance",
  shortName: "Al Naveed AC",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alnaveedac.com").replace(/\/$/, ""),
  description:
    "AC repair, maintenance, servicing and installation in Dubai from a workshop in Naif, Deira. Open 24 hours, every day.",

  phone: {
    primary: { display: "+971 50 297 7603", e164: "+971502977603" },
    secondary: { display: "+971 50 912 4500", e164: "+971509124500" },
  },
  // Assumed to be the primary mobile number. Confirm with the business.
  whatsapp: { display: "+971 50 297 7603", number: "971502977603" },
  email: "info@alnaveedac.com",

  address: {
    line1: "Shop 2, Ayesha Mohammed Belhool Building",
    line2: "28C Street, Naif",
    district: "Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    poBox: "39322",
  },

  hours: {
    summary: "Open 24 hours, every day",
    short: "Open 24 hours",
  },

  google: {
    profileUrl: "https://share.google/Q2daJMiRx7FsRZSfz",
    rating: 4.5,
    reviewCount: 202,
    // Month the figures were supplied. Update together with rating and reviewCount.
    asOf: "November 2026",
  },
} as const;

export const telHref = (e164: string = site.phone.primary.e164) => `tel:${e164}`;

export const mailHref = `mailto:${site.email}`;

export function whatsappHref(message?: string) {
  const text = message ?? "Hello Al Naveed AC, I need help with my air conditioner.";
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export const addressOneLine = [
  site.address.line1,
  site.address.line2,
  site.address.district,
  site.address.city,
].join(", ");

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
