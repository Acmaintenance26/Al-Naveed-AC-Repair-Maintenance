import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { areas, areaPath, areaShortName } from "@/content/areas";
import { getService, inSentence, servicePath, services } from "@/content/services";
import { areaOptions, serviceOptions } from "@/lib/form-options";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: servicePath(service.slug),
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter((s) => s !== undefined);
  const name = inSentence(service.name);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path: servicePath(service.slug) },
        ]}
        title={service.title}
        lead={service.lead}
        actions
        whatsappMessage={`Hello Al Naveed AC, I need help with ${name}.`}
      />

      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <div className="grid max-w-[66ch] gap-5 text-[1.0625rem]">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="t-h2 mt-16">{service.signsTitle}</h2>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {service.signs.map((s) => (
                <li key={s.title} className="border-t border-line py-6">
                  <h3 className="text-[1.0625rem] leading-snug">{s.title}</h3>
                  <p className="t-small mt-2 text-slate">{s.text}</p>
                </li>
              ))}
            </ul>

            <h2 className="t-h2 mt-16">{service.includesTitle}</h2>
            <ul className="mt-8 grid gap-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <Check size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start" aria-labelledby="enquire-heading">
            <div className="rounded-lg bg-mist p-2">
              <div className="px-5 pt-5 pb-4">
                <h2 id="enquire-heading" className="text-[1.375rem] leading-tight tracking-[-0.02em]">
                  Ask about {name}
                </h2>
                <p className="t-small mt-2 text-slate">
                  {site.hours.summary}. For anything urgent, call{" "}
                  <a href={telHref()} className="link tabular whitespace-nowrap">
                    {site.phone.primary.display}
                  </a>
                  .
                </p>
              </div>
              <EnquiryForm
                kind="enquiry"
                services={serviceOptions}
                areas={areaOptions}
                defaultService={service.slug}
                compact
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section on-dark bg-navy">
        <div className="shell">
          <h2 className="t-h2">{service.stepsTitle}</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {service.steps.map((s, i) => (
              <li key={s.title}>
                <span className="tabular flex size-11 items-center justify-center rounded-full border border-sky/60 text-[1.0625rem] font-bold text-sky">
                  {i + 1}
                </span>
                <h3 className="t-h3 mt-6">{s.title}</h3>
                <p className="t-small mt-2.5">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="t-h2">{service.note.title}</h2>
          <div className="grid max-w-[66ch] gap-5">
            {service.note.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="t-h2">Questions about {name}</h2>
          <FaqList faqs={service.faqs} name={`faq-${service.slug}`} />
        </div>
      </section>

      <section className="section border-t border-line bg-white">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[1.5rem] leading-tight tracking-[-0.02em]">Related services</h2>
            <ul className="mt-6">
              {related.map((r) => (
                <li key={r.slug} className="border-t border-line last:border-b">
                  <Link href={servicePath(r.slug)} className="group flex items-start gap-4 py-5">
                    <ServiceIcon name={r.icon} size={24} className="mt-0.5 shrink-0 text-blue" />
                    <span>
                      <span className="font-bold text-navy group-hover:text-blue">{r.name}</span>
                      <span className="t-small mt-1 block text-slate">{r.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[1.5rem] leading-tight tracking-[-0.02em]">
              {service.name} across Dubai
            </h2>
            <p className="mt-4 text-slate">
              We travel from our workshop in Naif, Deira. See what is typical for your area:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={areaPath(a.slug)}
                    className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-[0.9375rem] font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
                  >
                    {areaShortName(a)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need ${name} in Dubai?`}
        serviceSlug={service.slug}
        whatsappMessage={`Hello Al Naveed AC, I need help with ${name}.`}
      />
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />
    </>
  );
}
