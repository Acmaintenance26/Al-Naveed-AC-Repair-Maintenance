import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { featuredServices, servicePath } from "@/content/services";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="shell max-w-[52rem]">
        <p className="t-label text-blue">Error 404</p>
        <h1 className="t-h1 mt-4">This page does not exist</h1>
        <p className="t-lead mt-6 text-slate">
          The address may be mistyped, or the page may have moved. These links will get you back on
          track.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href={telHref()} variant="outline">
            <span className="tabular">Call {site.phone.primary.display}</span>
          </ButtonLink>
        </div>
        <h2 className="mt-14 text-[1.25rem]">Popular services</h2>
        <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {featuredServices.map((s) => (
            <li key={s.slug}>
              <Link href={servicePath(s.slug)} className="link">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
