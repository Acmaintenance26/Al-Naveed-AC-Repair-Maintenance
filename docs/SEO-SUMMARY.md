# SEO implementation summary

What was built for search engines and AI answer engines, and the reasoning behind the choices that are not obvious.

## Target phrases and the pages that answer them

| Phrase | Page |
| --- | --- |
| AC repair Dubai, AC repair services Dubai, AC technician Dubai | `/` and `/services/ac-repair-dubai` |
| AC maintenance Dubai, HVAC maintenance Dubai | `/services/ac-maintenance-dubai` |
| AC servicing Dubai | `/services/ac-servicing-dubai` |
| AC installation Dubai | `/services/ac-installation-dubai` |
| AC gas refilling Dubai | `/services/ac-gas-refilling-dubai` |
| Duct cleaning Dubai | `/services/hvac-duct-cleaning-dubai` |
| Emergency AC repair Dubai, 24 hour AC repair | `/services/emergency-ac-repair-dubai` |
| AC coil cleaning, thermostat repair | Their own service pages |
| AC repair Deira, AC repair Naif | `/areas/deira`, `/areas/naif` |
| AC repair in Marina, JLT, JVC, Downtown and others | The matching `/areas/…` page |
| AC maintenance near me | Answered by local signals: consistent name, address and phone, business markup, area pages and the Google Business Profile |

Each phrase has one page. Pages do not compete with each other for the same search.

## Technical SEO

| Item | Implementation |
| --- | --- |
| Titles | Unique on every page, under 70 characters. Pattern: "Topic | Al Naveed AC" |
| Meta descriptions | Unique, 70 to 165 characters, written as a sentence a searcher would click |
| URLs | Lower case, hyphenated, readable: `/services/ac-repair-dubai`, `/areas/dubai-marina` |
| Canonical | Absolute URL on every page, built from `NEXT_PUBLIC_SITE_URL` |
| Sitemap | `/sitemap.xml`, generated from the content files. Lists indexable pages only |
| Robots | `/robots.txt` allows everything except `/api/` and points to the sitemap |
| Rendering | Every page is prerendered HTML. All content is readable with JavaScript switched off, which also suits AI crawlers that do not run scripts |
| Headings | One h1 per page, levels in order |
| Breadcrumbs | Visible on every inner page, with matching markup |
| Images | Drawings are decorative and hidden from crawlers. Photo slots require alt text |
| Social sharing | Open Graph and Twitter tags on every page, with a 1200×630 image |
| 404 | Custom page. Unknown service, area and article addresses return a real 404 status |
| Redirects | `/contact-us` and `/about-us` from the old site, permanent |
| Speed | Lighthouse performance 100 locally. See `docs/TESTING-REPORT.md` |
| Mobile | Mobile-first, tested from 360px |
| HTTPS headers | HSTS and related security headers |
| Language | `lang="en"`, locale `en_AE` |

## Structured data

| Type | Where | Notes |
| --- | --- | --- |
| `HVACBusiness` | Every page | Name, address, P.O. Box, phones, email, 24-hour opening hours, area served, map link |
| `WebSite` | Every page | Linked to the business |
| `Service` | Each service page | Provider is the business, area served Dubai |
| `FAQPage` | Homepage, each service page, each area page | Generated from the same list that renders the visible questions, so they always match |
| `BreadcrumbList` | Every inner page | |
| `Article` | Each blog article | Author is the organisation |

### Why the Google rating is not in the markup

The site shows "4.5 from 202 Google reviews" as text with a link to Google and the month the figures were taken. It does not add `aggregateRating` or `review` markup.

Google's guidelines do not allow a local business to mark up reviews that come from a third-party site, and that includes its own Google reviews. Doing so risks a manual action that removes rich results for the whole site. The visible text gives visitors the reassurance without the risk.

### Left out of the markup because it is not verified

`geo` coordinates, `priceRange`, `foundingDate`, `sameAs` social profiles and payment methods. Add them to `src/lib/schema.ts` when the business supplies them.

## Local SEO

- **Name, address and phone** come from one file and are identical in the header, footer, contact page, About page and markup. A test checks this.
- **Area pages** exist for ten districts. Each describes the building stock and cooling systems of that district, the problems they produce, and what to tell us when booking there. None is a copy of another with the name swapped.
- **District cooling** is explained where it applies: Downtown, Business Bay, JLT, Marina and the Palm. That is information residents search for and competitors' sites rarely give, such as which part of the system is the tenant's responsibility and the fact that a fan coil unit never needs gas.
- **The workshop address** appears on the homepage, contact page, About page and the Naif and Deira pages.
- **Internal links**: every service page links to all ten areas, every area page links to its four most relevant services and three neighbouring areas, and the footer links to everything.

## Answer engine optimisation

AI search tools quote pages that state a fact plainly and near the top. The content is written to be quotable:

- Each service page opens with a one-sentence definition of what the service does.
- Questions are phrased the way people ask them, with a direct answer in the first sentence.
- Statements are specific and checkable: "Refrigerant is not used up. If the level is low, there is a leak."
- The business facts are stated consistently in text and in markup, so an engine asked "who repairs AC in Deira at night" finds the name, the hours and the number together.

## Content rules that were followed

- Nothing unverified: no years in business, licences, brands, prices, guarantees or response times.
- No reviews or testimonials reproduced on the site.
- No keyword stuffing. Each phrase appears where it reads naturally.
- Advice is limited to checks a householder can do safely.

## Blog

Four articles are written and held as drafts. A draft is hidden from visitors, carries `noindex` and is left out of the sitemap. While no article is published, `/blog` shows a holding message, is `noindex`, and the Guides link is hidden. Publishing is a one-word change described in `docs/CONTENT-GUIDE.md`.

This follows the brief's rule that AI-written content is not published without review. It also protects the site: articles a technician has corrected are worth more to searchers than articles nobody checked.

## After launch

These need the live domain and cannot be done from a development machine.

1. Verify the site in Google Search Console and Bing Webmaster Tools, and submit the sitemap.
2. Set the website link on the Google Business Profile to the new site. Make sure the profile's name, address and phone match the site exactly.
3. Run the homepage, a service page and an article through Google's Rich Results Test.
4. Map every address from the old site to its new page in `next.config.ts`. Only two are covered today.
5. Bring the other listings into line: the profile notes entries on Laghuna, AddressGuru and Yango Maps, one of which shows a different building name.
6. Publish the articles once approved, and add one or two a month.
7. Ask satisfied customers for Google reviews. Review count and recency are among the strongest local ranking signals.
8. Consider an Arabic version of the service pages.
