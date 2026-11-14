import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/icons";
import { media } from "@/content/media";
import { servicePath, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { mailHref, site, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us | AC Repair Company in Naif, Deira",
  description:
    "Al Naveed AC Repair & Maintenance is an air conditioning company based in Naif, Deira, open 24 hours every day and serving homes and businesses across Dubai.",
  path: "/about",
});

const approach = [
  {
    title: "Find the cause first",
    text: "A warm room has a dozen possible causes. We inspect the indoor unit, the outdoor unit and the controls before recommending anything, so the repair addresses the fault and not only the symptom.",
  },
  {
    title: "Say what we found",
    text: "You are told what is wrong and what we recommend in plain language. If there is a choice between repairing and replacing, you hear both sides.",
  },
  {
    title: "Leave it tested",
    text: "After a repair, service or installation the system is run and checked before the technician leaves.",
  },
];

export default function AboutPage() {
  const facts: [string, React.ReactNode][] = [
    ["Business name", site.name],
    ["What we do", "Air conditioning repair, maintenance, servicing and installation"],
    [
      "Address",
      <>
        {site.address.line1}, {site.address.line2}, {site.address.district}, {site.address.city}
        <br />
        P.O. Box {site.address.poBox}
      </>,
    ],
    ["Opening hours", site.hours.summary],
    [
      "Phone",
      <a key="phone" href={telHref()} className="link tabular">
        {site.phone.primary.display}
      </a>,
    ],
    [
      "Email",
      <a key="email" href={mailHref} className="link break-all">
        {site.email}
      </a>,
    ],
    ["Service area", "Dubai"],
    [
      "Google rating",
      <span key="rating" className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Stars rating={site.google.rating} size={16} />
        <span>
          {site.google.rating} from {site.google.reviewCount} reviews ({site.google.asOf})
        </span>
      </span>,
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[{ name: "About us", path: "/about" }]}
        title="About Al Naveed AC Repair & Maintenance"
        lead="We are an air conditioning repair and maintenance company based in Naif, Deira. We are open 24 hours every day and work in homes and business premises across Dubai."
      />

      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="t-h2">What we do</h2>
            <div className="mt-7 grid max-w-[64ch] gap-5">
              <p>
                Air conditioning is not a luxury in Dubai. For most of the year it is what makes a
                home liveable and a business workable. Our job is to keep it running: repairing
                units that fail, servicing them so they fail less often, and installing new ones
                properly when the old ones are finished.
              </p>
              <p>
                We work on wall-mounted split units, ducted and central systems, window units, and
                the fan coil units found in district-cooled apartment and office towers. Our
                customers are tenants, homeowners, landlords, shops and offices.
              </p>
              <p>
                The workshop is on 28C Street in Naif, in the old commercial heart of Deira. From
                there we travel to the rest of the city.
              </p>
            </div>

            {media.about && (
              <Image
                src={media.about.src}
                alt={media.about.alt}
                width={media.about.width}
                height={media.about.height}
                sizes="(min-width: 1024px) 40rem, 92vw"
                className="mt-10 rounded-lg"
              />
            )}

            <h2 className="t-h2 mt-16">How we approach a job</h2>
            <ol className="mt-8">
              {approach.map((a, i) => (
                <li key={a.title} className="flex gap-6 border-t border-line py-7">
                  <span className="tabular flex size-10 shrink-0 items-center justify-center rounded-full border border-blue/50 font-bold text-blue">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="t-h3">{a.title}</h3>
                    <p className="mt-2 max-w-[58ch] text-slate">{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {media.technician && (
              <Image
                src={media.technician.src}
                alt={media.technician.alt}
                width={media.technician.width}
                height={media.technician.height}
                sizes="(min-width: 1024px) 40rem, 92vw"
                className="mt-10 aspect-[4/3] w-full rounded-lg object-cover object-top"
              />
            )}

            <h2 className="t-h2 mt-16">Our services</h2>
            <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s.slug)} className="link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-mist p-7 lg:p-9">
              <h2 className="text-[1.375rem] leading-tight tracking-[-0.02em]">At a glance</h2>
              <dl className="mt-6">
                {facts.map(([term, value]) => (
                  <div key={term} className="border-t border-line py-4 text-[0.9688rem]">
                    <dt className="t-label text-slate">{term}</dt>
                    <dd className="mt-1 text-navy">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 grid gap-3">
                <ButtonLink href={site.google.profileUrl} variant="outline">
                  View us on Google
                </ButtonLink>
                <ButtonLink href="/contact">Contact us</ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
