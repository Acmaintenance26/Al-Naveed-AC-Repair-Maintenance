import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { areaPath, areas, areaShortName } from "@/content/areas";
import { pageMetadata } from "@/lib/seo";
import { addressOneLine } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Serve in Dubai | AC Repair & Maintenance",
  description:
    "Al Naveed AC Repair & Maintenance serves Dubai from Naif, Deira: Downtown, Business Bay, Jumeirah, Al Barsha, JVC, JLT, Dubai Marina and Palm Jumeirah.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Areas", path: "/areas" }]}
        title="Areas we serve in Dubai"
        lead="We are based in Naif, Deira, and work across the city. Each area page describes the buildings and cooling systems typical there, and what to tell us when you book."
        actions
        bookHref="/book"
      />
      <section className="section bg-white">
        <div className="shell">
          <p className="flex max-w-[60ch] gap-3 rounded-lg bg-mist p-6 text-[0.9688rem]">
            <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-blue" />
            <span>
              <span className="font-bold text-navy">Our workshop: </span>
              {addressOneLine}. If your area is not listed below, call us and ask.
            </span>
          </p>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={areaPath(a.slug)}
                  className="group flex h-full flex-col rounded-lg border border-line p-7 transition-colors hover:border-blue"
                >
                  <span className="t-h3 font-bold text-navy group-hover:text-blue">
                    {areaShortName(a)}
                  </span>
                  <span className="t-small mt-2.5 block text-slate">{a.blurb}</span>
                  <span className="mt-6 block text-[0.9375rem] font-bold text-blue underline decoration-blue/35 underline-offset-4 group-hover:decoration-blue">
                    AC services in {areaShortName(a)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
