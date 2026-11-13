import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Shared layout for the privacy policy and the terms. */
export function LegalPage({
  title,
  path,
  lead,
  updated,
  sections,
}: {
  title: string;
  path: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} lead={lead} />
      <section className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="t-small text-slate">Last updated {updated}</p>
            <ol className="mt-5 grid gap-2.5 text-[0.9375rem]">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-ink transition-colors hover:text-blue">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-[44rem]">
            {sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="prose border-t border-line py-9 first:border-t-0 first:pt-0">
                <h2 id={s.id} className="!mt-0">
                  {s.title}
                </h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
