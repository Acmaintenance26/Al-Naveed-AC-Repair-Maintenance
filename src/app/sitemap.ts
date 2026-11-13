import type { MetadataRoute } from "next";
import { areaPath, areas } from "@/content/areas";
import { postPath, publishedPosts } from "@/content/posts";
import { servicePath, services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

/** Draft articles are never listed. The blog index is listed once an article is published. */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({ url: absoluteUrl(path), changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(servicePath(s.slug), 0.9)),
    page("/areas", 0.7),
    ...areas.map((a) => page(areaPath(a.slug), 0.7)),
    page("/book", 0.8),
    page("/contact", 0.8),
    page("/about", 0.6),
    ...(publishedPosts.length > 0 ? [page("/blog", 0.6, "weekly")] : []),
    ...publishedPosts.map((p) => ({
      ...page(postPath(p.slug), 0.5),
      lastModified: p.updatedAt ?? p.publishedAt,
    })),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
