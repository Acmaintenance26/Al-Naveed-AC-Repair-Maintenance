import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AreasList } from "@/components/sections/AreasList";
import { CtaBand } from "@/components/sections/CtaBand";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Hero } from "@/components/sections/Hero";
import { HomeFaqs } from "@/components/sections/HomeFaqs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Sectors } from "@/components/sections/Sectors";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustBand } from "@/components/sections/TrustBand";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { homeFaqs } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `AC Repair Dubai, Open 24 Hours | ${site.name}`,
  absoluteTitle: true,
  description:
    "AC repair, maintenance, servicing, installation and gas refilling in Dubai. Workshop in Naif, Deira. Open 24 hours, every day. Call +971 50 297 7603.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Sectors />
      <AreasList />
      <GoogleReviews />
      <HomeFaqs />
      <CtaBand />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
