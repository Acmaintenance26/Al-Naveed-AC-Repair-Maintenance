import Image from "next/image";
import { Check } from "lucide-react";
import { CommercialScene, HomeScene } from "@/components/illustrations/Scenes";
import { ButtonLink } from "@/components/ui/Button";
import { media } from "@/content/media";

const home = [
  "Apartments, villas and townhouses",
  "Split, ducted and window units, and fan coil units in district-cooled towers",
  "Servicing before summer and repairs when something fails",
  "Annual maintenance contracts for the whole home",
];

const business = [
  "Offices, shops and other business premises",
  "Visits outside trading hours, day or night",
  "Annual maintenance contracts with scheduled visits",
  "Duct cleaning after a fit-out or renovation",
];

function List({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-7 grid gap-3.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[1rem] leading-snug">
          <Check
            size={20}
            aria-hidden="true"
            className={`mt-0.5 shrink-0 ${dark ? "text-sky" : "text-blue"}`}
          />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Sectors() {
  return (
    <section className="section bg-white" aria-labelledby="sectors-heading">
      <div className="shell">
        <h2 id="sectors-heading" className="t-h2 max-w-[22ch]">
          Residential and commercial air conditioning
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-mist">
            <div className="relative border-b border-line bg-white">
              {media.residential ? (
                <Image
                  src={media.residential.src}
                  alt={media.residential.alt}
                  width={media.residential.width}
                  height={media.residential.height}
                  sizes="(min-width: 1024px) 36rem, 92vw"
                  className="aspect-[2/1] w-full object-cover"
                />
              ) : (
                <HomeScene className="aspect-[2/1] w-full p-6 lg:p-8" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-7 lg:p-10">
              <h3 className="text-[1.5rem] leading-tight tracking-[-0.02em] lg:text-[1.75rem]">
                Home AC repair and maintenance
              </h3>
              <p className="mt-4 text-slate">
                For the place you sleep. Cooling that works through the summer, air that smells
                clean and a number to call when it does not.
              </p>
              <List items={home} />
              <div className="mt-auto pt-9">
                <ButtonLink href="/book" data-cta="sector-home">
                  Book a home visit
                </ButtonLink>
              </div>
            </div>
          </article>

          <article className="on-dark flex flex-col overflow-hidden rounded-lg bg-navy">
            <div className="relative border-b border-white/10 bg-navy-800">
              {media.commercial ? (
                <Image
                  src={media.commercial.src}
                  alt={media.commercial.alt}
                  width={media.commercial.width}
                  height={media.commercial.height}
                  sizes="(min-width: 1024px) 36rem, 92vw"
                  className="aspect-[2/1] w-full object-cover"
                />
              ) : (
                <CommercialScene className="aspect-[2/1] w-full p-6 lg:p-8" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-7 lg:p-10">
              <h3 className="text-[1.5rem] leading-tight tracking-[-0.02em] lg:text-[1.75rem]">
                Commercial AC repair and maintenance
              </h3>
              <p className="mt-4">
                For the place you work. Planned maintenance that keeps staff and customers
                comfortable, and repairs timed so trading is not interrupted.
              </p>
              <List items={business} dark />
              <div className="mt-auto pt-9">
                <ButtonLink href="/contact" variant="sky" data-cta="sector-business">
                  Discuss your premises
                </ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
