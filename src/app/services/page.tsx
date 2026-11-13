import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "All AC Services in Dubai | Repair & Maintenance",
  description:
    "All air conditioning services from Al Naveed in Dubai: repair, maintenance contracts, servicing, installation, gas refilling, duct and coil cleaning, thermostats.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        title="AC services in Dubai"
        lead="Nine services covering everything from a single unit that has stopped cooling to year-round maintenance for a whole building. Each page explains what the work includes."
        actions
        bookHref="/book"
      />
      <section className="section bg-mist">
        <div className="shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} heading="h2" />
          ))}
        </div>
      </section>
      <CtaBand
        title="Not sure which service you need?"
        text="Describe what the AC is doing and we will tell you. Open 24 hours, every day."
      />
    </>
  );
}
