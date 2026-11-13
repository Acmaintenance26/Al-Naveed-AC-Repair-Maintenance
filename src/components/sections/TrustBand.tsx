import { Stars } from "@/components/ui/icons";
import { site } from "@/lib/site";

const facts = [
  { figure: String(site.google.rating), label: "Rating on Google", stars: true },
  { figure: String(site.google.reviewCount), label: "Google reviews" },
  { figure: "24 hours", label: "Open every day of the week" },
  { figure: "Deira", label: "Workshop in Naif, serving Dubai" },
];

const position = [
  "pr-5 lg:pl-0",
  "border-l pl-5",
  "border-t pr-5 lg:border-t-0 lg:border-l",
  "border-l border-t pl-5 lg:border-t-0",
];

/** Verified facts only. Figures come from the Google Business Profile. */
export function TrustBand() {
  return (
    <section aria-label="Business facts" className="border-b border-line bg-white">
      <ul className="shell grid grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <li key={f.label} className={`border-line py-7 lg:px-10 lg:py-9 ${position[i]}`}>
            <p className="tabular flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.75rem] font-bold leading-none tracking-[-0.03em] text-navy xs:text-[2rem] lg:text-[2.375rem]">
              {f.figure}
              {f.stars && <Stars rating={site.google.rating} size={16} />}
            </p>
            <p className="mt-2.5 text-[0.9375rem] leading-snug text-slate">{f.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
