import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { featuredServices, servicePath, type Service } from "@/content/services";

export function ServiceCard({
  service,
  heading: Heading = "h3",
}: {
  service: Service;
  /** Use "h2" where the cards sit directly under the page title. */
  heading?: "h2" | "h3";
}) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-line bg-white p-7 transition-colors duration-200 hover:border-blue lg:p-8">
      <ServiceIcon name={service.icon} size={30} className="text-blue" />
      <Heading className="t-h3 mt-6">
        <Link href={servicePath(service.slug)} className="after:absolute after:inset-0 after:rounded-lg">
          {service.name}
        </Link>
      </Heading>
      <p className="t-small mt-3 flex-1 text-slate">{service.summary}</p>
      <div className="mt-7 flex items-center justify-between gap-4 border-t border-line pt-5 text-[0.9375rem] font-bold">
        <span className="text-blue underline decoration-blue/35 underline-offset-4 group-hover:decoration-blue" aria-hidden="true">
          Learn more
        </span>
        <Link
          href={`/book?service=${service.slug}`}
          className="relative z-10 rounded-sm text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
        >
          Enquire<span className="sr-only"> about {service.name}</span>
        </Link>
      </div>
    </article>
  );
}

export function ServicesGrid() {
  return (
    <section className="section bg-mist" aria-labelledby="services-heading">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[40rem]">
            <h2 id="services-heading" className="t-h2">
              Air conditioning services for homes and businesses
            </h2>
            <p className="t-lead mt-5 text-slate">
              From a unit that has stopped cooling to a full maintenance contract. Choose a service
              to see what it covers.
            </p>
          </div>
          <Link href="/services" className="link shrink-0">
            See all nine services
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
