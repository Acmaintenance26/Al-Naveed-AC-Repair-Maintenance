import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMeta = {
  /** Page title without the brand suffix. */
  title: string;
  description: string;
  /** Path beginning with "/". */
  path: string;
  /** Use the title exactly as given, with no brand suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  /** Sharing image for this page; defaults to the site-wide one. */
  image?: { url: string; width: number; height: number; alt: string };
};

/** Consistent title, description, canonical URL and social tags for a page. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
  type = "website",
  publishedTime,
  image: pageImage,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  // Set on every page: page-level Open Graph settings replace the site-wide defaults,
  // which would otherwise drop the sharing image from every page except the homepage.
  const image = pageImage ?? {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: `AC repair and maintenance in Dubai. ${site.name}, open 24 hours, every day.`,
  };
  const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_AE",
      type,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
