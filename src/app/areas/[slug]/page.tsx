import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { AreaImage } from "@/components/AreaImage";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import { areaPath, areas, areaShortName, getArea } from "@/content/areas";
import { areaPhotos } from "@/content/media";
import { getService, servicePath } from "@/content/services";
import { areaOptions, serviceOptions } from "@/lib/form-options";
import { areaServiceSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: areaPath(area.slug),
  });
}

export default async function AreaPage({ params }: PageProps<"/areas/[slug]">) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const short = areaShortName(area);
  const areaServices = area.services
    .map(getService)
    .filter((s) => s !== undefined);
  const nearby = area.nearby.map(getArea).filter((a) => a !== undefined);
  const message = `Hello Al Naveed AC, I need help with my air conditioner in ${short}.`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Areas", path: "/areas" },
          { name: short, path: areaPath(area.slug) },
        ]}
        title={area.title}
        lead={area.lead}
        actions
        whatsappMessage={message}
        bookHref="#book"
      />

      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16">
          <article>
            <figure>
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-navy">
                <AreaImage area={area} priority />
              </div>
              <figcaption className="t-small mt-3 flex gap-2 text-slate">
                <MapPin
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-blue"
                />
                <span>
                  <span className="font-bold text-navy">
                    {areaPhotos[area.slug]?.name ?? area.landmark.name}.
                  </span>{" "}
                  {areaPhotos[area.slug]
                    ? [
                        areaPhotos[area.slug].caption,
                        areaPhotos[area.slug].credit &&
                          `Photo: ${areaPhotos[area.slug].credit}`,
                      ]
                        .filter(Boolean)
                        .join(" ")
                    : area.landmark.caption}
                </span>
              </figcaption>
            </figure>

            <div className="mt-10 rounded-lg border-l-4 border-blue bg-mist p-6 lg:p-8">
              <h2 className="text-[1.25rem] leading-tight tracking-[-0.02em]">
                Quick answer: AC repair in {short}
              </h2>
              <p className="mt-3 max-w-[66ch]">{area.quickAnswer}</p>
              <div className="mt-5 lg:hidden">
                <ButtonLink href="#book">Request a visit in {short}</ButtonLink>
              </div>
            </div>

            <nav aria-label="On this page" className="mt-10">
              <h2 className="text-[1.0625rem]">On this page</h2>
              <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {[
                  ...area.sections,
                  { id: "faq", title: `Questions from ${short}` },
                ].map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="link text-[0.9688rem]">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {area.sections.map((s) => (
              <section key={s.id} id={s.id} className="mt-16 scroll-mt-28">
                <h2 className="t-h2">{s.title}</h2>
                {s.paragraphs && (
                  <div className="mt-6 grid max-w-[66ch] gap-5">
                    {s.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
                {s.items && (
                  <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it.title} className="border-t border-line py-6">
                        <h3 className="text-[1.0625rem] leading-snug">
                          {it.title}
                        </h3>
                        <p className="t-small mt-2 text-slate">{it.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {s.points && (
                  <ul className="mt-6 grid max-w-[66ch] list-disc gap-3 pl-5 marker:text-blue">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {s.closing && (
                  <div className="mt-6 grid max-w-[66ch] gap-5">
                    {s.closing.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section id="faq" className="mt-16 scroll-mt-28">
              <h2 className="t-h2">Questions from {short}</h2>
              <div className="mt-8">
                <FaqList faqs={area.faqs} name={`faq-${area.slug}`} />
              </div>
            </section>
          </article>

          <aside
            id="book"
            className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start"
            aria-labelledby="book-heading"
          >
            <div className="rounded-lg bg-mist p-2">
              <div className="px-5 pt-5 pb-4">
                <h2
                  id="book-heading"
                  className="text-[1.375rem] leading-tight tracking-[-0.02em]"
                >
                  Request a visit in {short}
                </h2>
                <p className="t-small mt-2 text-slate">
                  {site.hours.summary}. For anything urgent, call{" "}
                  <a
                    href={telHref()}
                    className="link tabular whitespace-nowrap"
                  >
                    {site.phone.primary.display}
                  </a>
                  .
                </p>
              </div>
              <EnquiryForm
                kind="booking"
                services={serviceOptions}
                areas={areaOptions}
                defaultLocation={short}
                compact
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <h2 className="t-h2 max-w-[24ch]">
            Services most often needed in {short}
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areaServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={servicePath(s.slug)}
                  className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 transition-colors hover:border-blue"
                >
                  <ServiceIcon name={s.icon} size={28} className="text-blue" />
                  <span className="t-h3 mt-5 block font-bold text-navy group-hover:text-blue">
                    {s.name}
                  </span>
                  <span className="t-small mt-2 block text-slate">
                    {s.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/services" className="link mt-8 inline-block">
            See all services
          </Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <h2 className="t-h2">Nearby areas</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  href={areaPath(n.slug)}
                  className="group block overflow-hidden rounded-lg border border-line transition-colors hover:border-blue"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-navy">
                    <AreaImage
                      area={n}
                      sizes="(min-width: 1024px) 384px, 100vw"
                    />
                  </div>
                  <span className="block p-5 font-bold text-navy group-hover:text-blue">
                    AC repair in {areaShortName(n)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Need AC repair in ${short}?`}
        whatsappMessage={message}
      />
      <JsonLd data={[areaServiceSchema(area), faqSchema(area.faqs)]} />
    </>
  );
}
