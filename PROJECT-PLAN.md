# Al Naveed AC Repair & Maintenance — Project Plan

Phase 1 deliverable. Last updated 12 November 2026.

## 1. Discovery

### Sources used

| Source | Result |
| --- | --- |
| Google Business Profile export supplied by the owner (`Al_Naveed_AC_Business_Profile.md`) | Read in full. This is the source of truth for every business fact on the site. |
| Reference website `alnaveedac.com/contact-us` | **Could not be read.** The site answers automated visitors with a Cloudflare bot challenge. That check was not bypassed. The profile export already quotes the address shown on that page. |
| Existing project directory | Empty. Nothing to migrate or preserve. |

### Verified business facts (from the supplied profile)

- **Name:** Al Naveed AC Repair & Maintenance
- **Category:** Air conditioning repair service
- **Hours:** Open 24 hours, every day
- **Google rating:** 4.5 from 202 reviews (snapshot supplied November 2026)
- **Phones:** +971 50 297 7603 (primary), +971 50 912 4500 (alternative)
- **Email:** info@alnaveedac.com
- **Address:** 28C St, Naif, Deira, Dubai. Website lists "Shop # 2, Ayesha Mohammed Belhool Building, Deira, Dubai". P.O. Box 39322
- **Services:** AC repair, AC maintenance / AMC, AC installation, AC coil cleaning, duct cleaning, gas refill, thermostat repair and replacement
- **Google profile link:** https://share.google/Q2daJMiRx7FsRZSfz

### Not verified — deliberately left off the site

Years in business, team size, licences, certifications, awards, guarantees, prices, response times, named staff, customer testimonials, brand partnerships, social media URLs, map coordinates.

The full list of items the owner needs to confirm is in `docs/OUTSTANDING.md`.

## 2. Audience and goals

| Visitor | Situation | What they need from the page |
| --- | --- | --- |
| Tenant or homeowner | AC has stopped cooling or is leaking, often on a phone, often at night | A number to call, proof the business is real and open |
| Landlord or property manager | Wants regular servicing across units | What maintenance covers, how to arrange it |
| Shop, office or restaurant | Downtime costs money | That commercial work is handled, and out of hours |

Primary conversions, in order: phone call, WhatsApp message, booking request form.

## 3. Competitor review

Live competitor sites could not be browsed from this environment (outbound network is restricted to package registries and the reference domain). The design direction therefore rests on known patterns in the Dubai home-services market rather than a fresh crawl:

- Most local AC sites use stock technician photos, heavy gradients, and unverifiable claims ("No.1", "15+ years", "100% guarantee").
- Few state plainly what a visit includes, and fewer explain how district cooling changes what a tenant can have repaired.

The opportunity is to look calmer and more exact than the category: verified facts only, clear explanations, and contact options always one tap away.

## 4. Sitemap

```
/                               Home
/about                          About us
/services                       All services
/services/ac-repair-dubai
/services/ac-maintenance-dubai
/services/ac-servicing-dubai
/services/ac-installation-dubai
/services/ac-gas-refilling-dubai
/services/hvac-duct-cleaning-dubai
/services/emergency-ac-repair-dubai
/services/ac-coil-cleaning-dubai        (listed on the Google profile)
/services/thermostat-repair-dubai       (listed on the Google profile)
/areas                          All service areas
/areas/deira  /naif  /dubai-marina  /business-bay  /jumeirah
/areas/downtown-dubai  /al-barsha  /jvc  /jlt  /palm-jumeirah
/contact                        Contact and enquiry form
/book                           Booking request form
/blog                           Guides (drafts stay hidden until approved)
/blog/[slug]
/privacy-policy
/terms
/sitemap.xml  /robots.txt  404
/api/enquiry                    Form submissions
/api/assistant                  AI assistant
```

## 5. Technology

| Choice | Reason |
| --- | --- |
| Next.js 16 (App Router, Cache Components) + React 19 + TypeScript | Server-rendered, statically prerendered pages; one codebase for pages and API routes |
| Tailwind CSS 4 | Design tokens in CSS, small output |
| Motion | Assistant panel transitions only, loaded on demand |
| Lucide | Icon set |
| Self-hosted Manrope (variable) | One request, no third-party font host |
| Anthropic SDK | AI assistant, server-side only, optional |
| Playwright + axe | End-to-end, responsive and accessibility tests |

No database. No CMS. Content lives in typed files under `src/content/` so it can be edited without touching components.

## 6. Roadmap

| Phase | Output |
| --- | --- |
| 1 Research | This file |
| 2 Environment | `SETUP.md`, skills, agents, `.env.example` |
| 3 Design system | `DESIGN-SYSTEM.md`, tokens, shared components |
| 4 Homepage | All twelve sections |
| 5 Internal pages | Services, areas, about, contact, book, blog, legal |
| 6 Functions | Forms, enquiry API, WhatsApp and call links, AI assistant |
| 7 SEO | Metadata, schema, sitemap, robots, internal links |
| 8 Testing | Automated suite and report |
| 9 Optimisation | Review against the brief, fixes |
| 10 Delivery | `docs/` handover set |

## 7. Decisions made on the owner's behalf

1. **No stock photography.** Photos of other companies' technicians would misrepresent the business. The site uses drawn illustrations and has image slots ready for real photos (`src/content/media.ts`).
2. **Google rating shown, not marked up.** The rating appears on the page with a link to Google. It is not added to structured data, because Google does not allow a business to mark up third-party reviews as its own.
3. **No reviews copied onto the site.** The reviews section links to the Google profile.
4. **Blog articles are drafts.** Four articles are written and stay hidden in production until someone at Al Naveed approves each one.
5. **Forms never claim a confirmed booking.** They send a request; the confirmation message says so.
6. **Primary number used for WhatsApp.** To be confirmed.
