import { NextResponse, type NextRequest } from "next/server";
import { areas } from "@/content/areas";
import { visiblePosts } from "@/content/posts";
import { services } from "@/content/services";

/**
 * Returns a real 404 status for unknown service, area and article addresses.
 * Without this, a mistyped address would stream the 404 page with a 200 status.
 */
const known: Record<string, Set<string>> = {
  services: new Set(services.map((s) => s.slug)),
  areas: new Set(areas.map((a) => a.slug)),
  blog: new Set(visiblePosts.map((p) => p.slug)),
};

export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  if (slug && known[section] && !known[section].has(slug)) {
    return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:slug", "/areas/:slug", "/blog/:slug"],
};
