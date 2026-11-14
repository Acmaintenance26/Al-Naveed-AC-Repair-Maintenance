# Testing report

Tested 13 November 2026 against the production build running locally. Browser: Chromium via Playwright 1.63.

## Summary

| Check | Result |
| --- | --- |
| Automated tests | **134 of 134 pass** |
| ESLint | No errors or warnings |
| TypeScript | No errors |
| Production build | Succeeds. Every page prerendered |
| Accessibility (axe, WCAG 2.2 AA) | No violations on any template or interactive state |
| Lighthouse, indexable pages | 100 / 100 / 100 / 100 |
| Production dependency audit | 0 vulnerabilities |

## Not verified

These could not be tested from the build environment. They are the gaps to close at launch.

| Item | Why | What was done instead |
| --- | --- | --- |
| Delivery of a form to a real inbox (`info@acmaintenancedubai.ae`) | No Resend API key exists yet, so no email has been sent anywhere | The real email code was run against a local stand-in for Resend: the request, key header, recipient, sender, subject and body were checked, and a refusal by the provider was shown to the visitor as "not sent" |
| The assistant answering through the live Anthropic API | No API key was supplied, and none was used | The real code path was run against a local stand-in for the API: streaming, request parameters and failure handling were checked |
| Deployment | Not authorised and no host chosen | Production build served locally |
| Real phones | No physical devices | Chromium at phone viewport sizes with touch enabled |
| Safari and Firefox | Only Chromium is installed here | Standard CSS and HTML throughout. The hero counter uses `@property`, supported in current Safari and Firefox. Older browsers show the final value, 24, without the count |
| Lighthouse on the live site | Not deployed | Local scores below. Real scores depend on hosting and network |
| The reference website's content | It answered with a bot challenge | Business facts taken from the supplied Google Business Profile |

## Automated suite

Run with `npm test`. Nine files in `tests/`.

| File | Tests | What it proves |
| --- | --- | --- |
| `pages.spec.ts` | 32 | Every page returns 200, has one h1, headings in order, a unique title under 70 characters, a unique description of 70 to 165 characters, the correct canonical URL, social tags, valid JSON-LD, working images with alt text, no sideways scroll, no console errors and no failed requests. Drafts are `noindex`, everything else is indexable |
| `links.spec.ts` | 1 | Crawls all 32 pages. Every internal link resolves, every in-page anchor exists, every phone link is the business number, every WhatsApp link goes to the business number with a message, every email link is correct, and the only outside destination is the Google Business Profile |
| `navigation.spec.ts` | 9 | Services menu opens, lists all nine services, navigates, and closes on Escape and outside click. Main links reach their pages. Header and hero buttons point to the right places. Skip link. FAQ opens one answer at a time. Mobile menu opens, navigates and closes. Sticky contact bar is present, tall enough and stays in view. Unknown addresses return 404 |
| `forms.spec.ts` | 14 | See "Forms" below |
| `email-delivery.spec.ts` | 3 | Run against a second server with the email path on and Resend's address pointed at a local stand-in. A booking is emailed to `info@acmaintenancedubai.ae` with the right key header, sender, subject and body. A provider refusal returns 502 and the form never claims success. The booking page shows "Request sent" and "not a confirmed booking" |
| `assistant.spec.ts` | 11 | See "AI assistant" below |
| `seo.spec.ts` | 11 | Sitemap lists exactly the indexable pages. Robots file. Business markup holds only verified facts and no rating. Service, area and article markup. FAQ markup matches the visible questions. Rating is shown with source and date. Name, address and phone are consistent. Security headers. Old addresses redirect. Pages render fully without JavaScript. No secret or server-only text in browser JavaScript |
| `responsive.spec.ts` | 21 | Seven viewports, three tests each |
| `a11y.spec.ts` | 32 | axe on 13 pages at desktop and phone size, plus open menus, the assistant, form error and failure states, keyboard focus and reduced motion |

## Responsive

Viewports: 360, 390, 430, 768, 1024, 1440 and 1920 pixels wide. Eleven pages at each.

| Check | Result |
| --- | --- |
| No horizontal scroll | Pass at all seven |
| No element extends past the screen edge | Pass |
| Heading fits the screen | Pass |
| Body text at least 15px | Pass |
| Contact bar on phones and tablets, full navigation from 1024px | Pass |
| Hero buttons at least 48px tall and visible without scrolling | Pass |
| Form fields at least 48px tall, 16px text | Pass |

## Forms

| Scenario | Result |
| --- | --- |
| Empty form shows a message under each of the five fields and focuses the first | Pass |
| Short phone number is rejected | Pass |
| Valid booking request is delivered. Confirmation says "This is not a confirmed booking" | Pass, against the mock webhook |
| Delivered payload contains the cleaned name, phone, service, location and preferred time | Pass |
| Delivery not configured: visitor sees "Your request was not sent" and a pre-filled WhatsApp link | Pass |
| Network failure never shows a success message | Pass |
| "Send by WhatsApp instead" opens a chat to the business number with the details | Pass |
| `/book?service=…&area=…` preselects both. A script tag in the address is ignored | Pass |
| Service pages preselect their own service | Pass |
| API rejects invalid fields with per-field errors | Pass |
| API strips control characters and collapses blank lines | Pass |
| Hidden spam field: accepted silently, nothing delivered | Pass |
| Submitted in under 2.5 seconds: asked to resend | Pass |
| Cross-site post refused (403), oversized body refused (413), malformed JSON refused (400) | Pass |
| Sixth submission from one address within ten minutes is refused (429) | Pass |
| With no delivery configured, the real API answers 503 "not_configured" | Pass, checked by hand against a server with no settings |

## AI assistant

| Scenario | Result |
| --- | --- |
| Opens, states it is an AI assistant and that it cannot quote prices or confirm appointments | Pass |
| Suggested question gets a relevant answer with a working page link and phone link | Pass |
| Asked a price: declines and directs to the team | Pass |
| Asked for an appointment time: declines and directs to the booking form | Pass |
| Burning smell and tripping breaker, asked how to fix wiring: says switch off and call a technician, gives no repair steps | Pass |
| Following a link closes the panel. Reopening shows the conversation | Pass |
| Escape closes and returns focus to the launcher | Pass |
| Service unreachable: shows phone and WhatsApp instead of an error | Pass |
| On a phone: full width, above the contact bar, on screen | Pass |
| API with no key answers from the built-in guide | Pass |
| API refuses malformed input, system-role injection, oversized and cross-site requests | Pass |
| Twenty-first message within five minutes is refused | Pass |
| With a key, against the API stand-in: reply streams, mode is "ai", request uses model `claude-opus-5-5`, low effort, the refusal fallback and the system prompt | Pass, checked by hand |
| Rejected key: falls back to the built-in guide and logs one line without the key | Pass, checked by hand |

Two defects were found and fixed during this testing:

- A question such as "How much does a gas refill cost?" was answered with an explanation of gas refilling. Price and booking questions now take priority.
- On first open, the panel scrolled past the top of the welcome message, hiding the sentence that says it is an AI. It now stays at the top.

## Accessibility

Tool: axe-core, rules for WCAG 2.0, 2.1 and 2.2 at levels A and AA, plus best practices.

No violations on: home, services index, two service pages, areas index, one area page, about, contact, book, blog index, one article, privacy policy and terms, each at 1440px and 390px. Also none with the services menu open, the mobile menu open, the assistant open mid-conversation, the form showing errors and the form showing a failed send.

Also checked: the first 14 Tab stops all show a visible focus ring and begin with the skip link. All three animations stop under reduced motion.

Defects found and fixed: the logo's accessible name did not contain its visible text, the top bar sat outside any landmark, the chat header counted as a second page banner, the chat list lost its list semantics, and the services index skipped a heading level.

Not covered by automation: a full screen reader pass with VoiceOver or NVDA. Recommended before launch.

## Lighthouse

Version 13, production build on localhost, default throttling (simulated slow 4G and a mid-range phone for mobile).

| Page | Mode | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/` | Desktop | 100 | 100 | 100 | 100 | 0.2 s | 0 |
| `/services/ac-repair-dubai` | Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/services/ac-repair-dubai` | Desktop | 100 | 100 | 100 | 100 | 0.2 s | 0 |
| `/areas/dubai-marina` | Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/contact` | Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/book` | Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/about` | Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 |
| `/blog/why-is-my-ac-leaking-water` | Mobile | 100 | 100 | 100 | 66 | 0.9 s | 0 |

The article's SEO score of 66 is intended. It is a draft and carries `noindex`, which Lighthouse reports as "blocked from indexing". It will score 100 once published.

Homepage weight: 240 KB transferred in 18 requests. JavaScript 163 KB, HTML 34 KB, font 25 KB, CSS 10 KB. No request goes to any other domain.

These are local figures. They show the site has no built-in performance problem. They are not a promise about the live site, where hosting, distance from the server and any photos added will affect the result.

## Defects found and fixed during testing

| Defect | Found by | Fix |
| --- | --- | --- |
| Pages scrolled sideways at 360px | Responsive tests | A button label that could not wrap was wider than a narrow column. Buttons now wrap, and grid columns can shrink below their content |
| Sharing image missing on every page except the homepage | Page tests | Page-level social settings were replacing the site-wide image. The image is now set on every page |
| Unknown service, area and article addresses returned 200 | Manual check | Added `src/proxy.ts` to return a real 404 |
| Mobile header wider than the screen | Screenshot review | Call button reduced to an icon below 640px |
| Three titles over 70 characters | Page tests | Shortened |
| Booking form fields too narrow at 1024px | Responsive tests | Fields stack in one column between 1024px and 1279px |
| Five accessibility issues | axe | Listed above |
| Two assistant issues | Assistant tests and screenshot review | Listed above |
| Pages revalidated every 15 minutes for no reason | Build output | Footer year now cached for a day |

## How to rerun

```bash
npm run lint
```

```bash
npm run typecheck
```

```bash
npm test
```

The test command builds the site first and takes about three minutes.
