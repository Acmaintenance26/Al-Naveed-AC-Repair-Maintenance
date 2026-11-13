import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import { areaPath, areas, areaShortName, getArea } from "@/content/areas";
import { getService, servicePath } from "@/content/services";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/areas/[slug]">): Promise<Metadata> {
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
  const areaServices = area.services.map(getService).filter((s) => s !== undefined);
  const nearby = area.nearby.map(getArea).filter((a) => a !== undefined);

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
        whatsappMessage={`Hello Al Naveed AC, I need help with my air conditioner in ${short}.`}
        bookHref={`/book?area=${encodeURIComponent(short)}`}
      />

      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="t-h2">{area.context.title}</h2>
            <div className="mt-7 grid max-w-[66ch] gap-5">
              {area.context.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="t-h2 mt-16">{area.commonTitle}</h2>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {area.common.map((c) => (
                <li key={c.title} className="border-t border-line py-6">
                  <h3 className="text-[1.0625rem] leading-snug">{c.title}</h3>
                  <p className="t-small mt-2 text-slate">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-mist p-7 lg:p-9">
              <h2 className="text-[1.375rem] leading-tight tracking-[-0.02em]">
                {area.practical.title}
              </h2>
              <ul className="mt-6 grid gap-4">
                {area.practical.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.9688rem] leading-relaxed">
                    <Check size={20} aria-hidden="true" className="mt-1 shrink-0 text-blue" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <ButtonLink href={`/book?area=${encodeURIComponent(short)}`}>
                  Request a visit in {short}
                </ButtonLink>
                <p className="t-small text-center text-slate">
                  or call{" "}
                  <a href={telHref()} className="link tabular whitespace-nowrap">
                    {site.phone.primary.display}
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <h2 className="t-h2 max-w-[24ch]">Services most often needed in {short}</h2>
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
                  <span className="t-small mt-2 block text-slate">{s.summary}</span>
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
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="t-h2">Questions from {short}</h2>
            <h3 className="mt-12 text-[1.0625rem]">Nearby areas</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={areaPath(n.slug)}
                    className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-[0.9375rem] font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
                  >
                    {areaShortName(n)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <FaqList faqs={area.faqs} name={`faq-${area.slug}`} />
        </div>
      </section>

      <CtaBand
        title={`Need AC repair in ${short}?`}
        whatsappMessage={`Hello Al Naveed AC, I need help with my air conditioner in ${short}.`}
      />
      <JsonLd data={faqSchema(area.faqs)} />
    </>
  );
}
