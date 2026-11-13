# Al Naveed AC Repair & Maintenance — website

Website for Al Naveed AC Repair & Maintenance, an air conditioning repair and maintenance company in Naif, Deira, Dubai.

Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Quick start

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

Open http://localhost:3000. Full setup notes are in [SETUP.md](SETUP.md).

## What is in the site

| Area | Pages |
| --- | --- |
| Home | Twelve sections: header, hero, trust facts, services, reasons, process, residential and commercial, areas, Google reviews, FAQs, closing call to action, footer |
| Services | Index plus nine service pages |
| Areas | Index plus ten area pages |
| Company | About, Contact, Book a service |
| Guides | Blog index and four articles, held as drafts until approved |
| Legal | Privacy policy, Terms and conditions |
| Utility | 404 page, `sitemap.xml`, `robots.txt`, web manifest |

Working features: click-to-call and WhatsApp links, enquiry and booking request forms with validation and spam protection, a sticky contact bar on phones, and the Al Naveed AC Assistant.

## Where things live

```
src/
  app/                    Routes. One folder per page, plus api/enquiry and api/assistant
  components/             Shared components
    sections/             Homepage sections
    forms/                Enquiry and booking forms
    assistant/            Chat launcher and panel
    illustrations/        Drawn visuals
    layout/               Header, footer, top bar, mobile contact bar
  content/                All page copy. Edit here, not in components
    services.ts           Nine services
    areas.ts              Ten areas
    faqs.ts               Homepage questions
    posts.ts              Blog articles and their draft/published status
    media.ts              Photo slots
  lib/
    site.ts               Business facts: name, phones, address, hours, rating
    seo.ts, schema.ts     Metadata and structured data
    enquiry.ts            Form rules shared by browser and server
    delivery.ts           Sends form submissions
    assistant/            Assistant knowledge and built-in answers
  proxy.ts                Real 404 status for unknown service, area and article URLs
tests/                    Playwright end-to-end, accessibility and SEO tests
docs/                     Handover documents
.claude/                  Project skills and agents for Claude Code
```

## Documents

| Document | Contents |
| --- | --- |
| [PROJECT-PLAN.md](PROJECT-PLAN.md) | Research, sitemap, decisions |
| [SETUP.md](SETUP.md) | Environment, dependencies, variables, skills, agents |
| [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) | Colour, type, layout, components, voice |
| [docs/OUTSTANDING.md](docs/OUTSTANDING.md) | **Read first.** What the business must confirm or supply before launch |
| [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) | How to change text, facts, photos and articles |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Production build, hosting, launch checklist |
| [docs/SEO-SUMMARY.md](docs/SEO-SUMMARY.md) | What was implemented for search and why |
| [docs/TESTING-REPORT.md](docs/TESTING-REPORT.md) | What was tested, results, what was not verified |

## Checks

```bash
npm run lint
```

```bash
npm run typecheck
```

```bash
npm test
```

## Status

The site is built and tested locally. It has **not** been deployed, and no form submission has been delivered to a real inbox. See [docs/OUTSTANDING.md](docs/OUTSTANDING.md).
