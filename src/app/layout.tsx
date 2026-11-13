import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { AssistantLauncher } from "@/components/assistant/AssistantLauncher";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { TopBar } from "@/components/layout/TopBar";
import { headerNav } from "@/lib/nav";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "../fonts/manrope-latin-variable.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `AC Repair Dubai, Open 24 Hours | ${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    siteName: site.name,
    locale: "en_AE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#101C2C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-white px-4 py-3 font-bold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <TopBar />
        <Header nav={headerNav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <AssistantLauncher />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
