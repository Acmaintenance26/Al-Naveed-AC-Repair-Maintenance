import Link from "next/link";
import { MapPin } from "lucide-react";
import { AreaImage } from "@/components/AreaImage";
import { areas, areaPath, areaShortName, featuredAreas } from "@/content/areas";
import { addressOneLine } from "@/lib/site";

export function AreasList() {
  return (
    <section className="section bg-mist" aria-labelledby="areas-heading">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <h2 id="areas-heading" className="t-h2">
              Where we work in Dubai
            </h2>
            <p className="t-lead mt-5 text-slate">
              Every part of the city cools its buildings differently. Old Deira runs on window units
              and splits. The towers of Downtown and the Marina run on chilled water. We work on both.
            </p>
          </div>
          <p className="flex gap-3 text-[0.9375rem] text-ink">
            <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-blue" />
            <span>
              <span className="font-bold text-navy">Our workshop</span>
              <br />
              {addressOneLine}
            </span>
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={areaPath(a.slug)}
                className="group block h-full overflow-hidden rounded-lg border border-line bg-white transition-colors hover:border-blue"
              >
                <div className="aspect-[16/10] overflow-hidden bg-navy">
                  <AreaImage area={a} sizes="(min-width: 1024px) 288px, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <span className="block font-bold text-navy group-hover:text-blue">
                    {areaShortName(a)}
                  </span>
                  <span className="t-small mt-1.5 block text-slate">{a.blurb}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/areas" className="link mt-8 inline-block">
          All {areas.length} service areas
        </Link>
      </div>
    </section>
  );
}
