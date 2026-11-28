import type { Area } from "@/content/areas";
import type { Post } from "@/content/posts";
import type { Faq, Service } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * Local business markup. Only facts confirmed by the business are included.
 * The Google rating is deliberately left out: Google does not accept review markup
 * that a business sources from a third-party site and places on its own pages.
 */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    image: absoluteUrl("/opengraph-image.png"),
    logo: absoluteUrl("/icon.svg"),
    telephone: site.phone.primary.e164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: "Dubai",
      addressCountry: site.address.countryCode,
      postOfficeBoxNumber: site.address.poBox,
    },
    areaServed: { "@type": "City", name: "Dubai" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone.primary.e164,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English"],
      },
    ],
    hasMap: site.google.profileUrl,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "en",
    publisher: { "@id": BUSINESS_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service: Service, areaName = "Dubai") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.name,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: areaName },
  };
}

export function articleSchema(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    articleSection: post.category,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: url,
    url,
    image: absoluteUrl("/opengraph-image.png"),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": BUSINESS_ID },
  };
}

export function areaServiceSchema(area: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    serviceType: "AC repair and maintenance",
    description: area.metaDescription,
    url: absoluteUrl(`/areas/${area.slug}`),
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "Place",
      name: area.name,
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  };
}
