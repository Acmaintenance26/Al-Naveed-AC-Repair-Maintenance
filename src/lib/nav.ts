import { areas, areaPath, areaShortName } from "@/content/areas";
import { visiblePosts } from "@/content/posts";
import { servicePath, services } from "@/content/services";
import type { HeaderNav } from "@/components/layout/Header";

/** Slim navigation data, so page content is not shipped to the browser with the header. */
export const headerNav: HeaderNav = {
  services: services.map((s) => ({ href: servicePath(s.slug), name: s.name, icon: s.icon })),
  areas: areas.map((a) => ({ href: areaPath(a.slug), name: areaShortName(a) })),
  showBlog: visiblePosts.length > 0,
};
