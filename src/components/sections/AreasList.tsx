import Link from "next/link";
import { MapPin } from "lucide-react";
import { areas, areaPath, areaShortName } from "@/content/areas";
import { addressOneLine } from "@/lib/site";

export function AreasList() {
  return (
    <section className="section bg-mist" aria-labelledby="areas-heading">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 id="areas-heading" className="t-h2">
            Where we work in Dubai
          </h2>
          <p className="t-lead mt-5 text-slate">
            Every part of the city cools its buildings differently. Old Deira runs on window units
            and splits. The towers of Downtown and the Marina run on chilled water. We work on both.
          </p>
          <p className="mt-8 flex gap-3 text-[0.9375rem] text-ink">
            <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-blue" />
            <span>
              <span className="font-bold text-navy">Our workshop</span>
              <br />
              {addressOneLine}
            </span>
          </p>
          <Link href="/areas" className="link mt-7 inline-block">
            All service areas
          </Link>
        </div>

        <ul className="grid sm:grid-cols-2 sm:gap-x-10">
          {areas.map((a) => (
            <li key={a.slug} className="border-t border-line">
              <Link href={areaPath(a.slug)} className="group block py-5">
                <span className="text-[1.0625rem] font-bold text-navy underline decoration-transparent underline-offset-4 transition-colors group-hover:text-blue group-hover:decoration-blue/40">
                  {areaShortName(a)}
                </span>
                <span className="t-small mt-1 block text-slate">{a.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
