import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/icons";
import { site } from "@/lib/site";

/**
 * No review text is reproduced here. The figures come from the Google Business Profile
 * and the section sends visitors to Google to read the reviews at the source.
 */
export function GoogleReviews() {
  return (
    <section className="section bg-white" aria-labelledby="reviews-heading">
      <div className="shell">
        <div className="grid items-center gap-10 rounded-lg border border-line p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-16 lg:p-14">
          <div className="lg:border-r lg:border-line lg:pr-16">
            <p className="tabular text-[5rem] font-bold leading-none tracking-[-0.05em] text-navy lg:text-[6.5rem]">
              {site.google.rating}
            </p>
            <Stars rating={site.google.rating} size={26} className="mt-4" />
            <p className="t-small mt-4 text-slate">
              out of 5, from {site.google.reviewCount} Google reviews
            </p>
          </div>
          <div>
            <h2 id="reviews-heading" className="t-h2 max-w-[20ch]">
              What customers say about us on Google
            </h2>
            <p className="t-lead mt-5 max-w-[52ch] text-slate">
              We do not pick favourites and paste them here. Our reviews are on our Google Business
              Profile, where you can read all of them, the good and the critical alike.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.google.profileUrl} data-cta="reviews-google">
                Read our reviews on Google
              </ButtonLink>
            </div>
            <p className="mt-6 text-[0.8438rem] text-slate">
              Rating and review count as shown on Google in {site.google.asOf}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
