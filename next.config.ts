import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// The site loads no third-party scripts, fonts or frames, so the policy can stay tight.
// Next.js needs inline scripts for hydration data; add a nonce-based policy through
// proxy.ts if a stricter script-src is ever required.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // The largest image container on the site is ~40rem (about 640px). The default
    // deviceSizes go up to 3840, which would upscale our ~800px source photos far
    // past their real resolution for no visual gain and a slower request.
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // "/contact-us" is the one address known from the previous website. Add the rest of
    // the old site's URLs here before launch so existing links and rankings carry over.
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
