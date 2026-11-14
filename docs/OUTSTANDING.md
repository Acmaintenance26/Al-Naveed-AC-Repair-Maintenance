# Outstanding items

What the business needs to confirm, supply or decide before the site goes live. Nothing here was guessed on the site: where a fact was missing it was left out.

## 1. Must be done before launch

| # | Item | Why | Where it goes |
| --- | --- | --- | --- |
| 1 | **Add the Resend API key** so the forms can email `info@acmaintenancedubai.ae` (the code is done; only the secret key and a verified sender are missing) | Until then every submission ends with "Your request was not sent" and a WhatsApp fallback. No lead reaches you by form | `RESEND_API_KEY` in Vercel, plus a verified sender domain or Resend's test sender. See `docs/DEPLOYMENT.md`, "Connecting the forms" |
| 2 | **Send one real test enquiry** after connecting | Delivery was tested against a local mock only | Live site |
| 3 | **Confirm the WhatsApp number** | The site assumes +971 50 297 7603 is on WhatsApp | `src/lib/site.ts`, `whatsapp` |
| 4 | **Confirm the address wording** | Google shows "28C St, Naif, Deira". Your website shows "Shop # 2, Ayesha Mohammed Belhool Building". Another listing names "Hossain Building". The site combines the first two | `src/lib/site.ts`, `address` |
| 5 | **Read the service pages** | The descriptions of what each visit covers are standard trade practice, written without sight of your own checklists. Correct anything that differs from how you work | `src/content/services.ts` |
| 6 | **Confirm the areas you serve** | Ten areas were built from the brief. Remove any you do not cover | `src/content/areas.ts` |
| 7 | **Have the legal pages reviewed** | The privacy policy and terms are plain-language drafts based on how the site works and on the UAE data protection law. They are not legal advice | `src/app/privacy-policy`, `src/app/terms` |
| 8 | **Choose hosting and point the domain** | Not deployed | `docs/DEPLOYMENT.md` |
| 9 | **Supply the old site's page addresses** | The reference site could not be read, so only `/contact-us` and `/about-us` are redirected. Other old addresses will show a 404 and lose their search ranking | `next.config.ts`, `redirects()` |

## 2. Wording that makes a commitment on your behalf

These statements appear on the site because the brief asked for them or because they follow from "open 24 hours". Please confirm each one, or tell us to change it.

| Statement | Where |
| --- | --- |
| "You hear what the technician found and what is recommended before work starts" | Homepage, About, service pages |
| "A workshop you can visit", "You are welcome to come in" | Homepage, Naif area page |
| "We call you to agree a time" after a form is sent | Forms, Book page |
| Visits can be arranged outside trading hours for businesses | Homepage, area pages |
| Annual maintenance contracts are offered to homes and businesses | Maintenance page, area pages |
| Window units, split, ducted, central systems and chilled-water fan coil units are all worked on | Throughout |
| Residential and commercial work are both taken on | Throughout |
| Units can be relocated, and customer-supplied units can be installed "tell us the model and we will let you know" | Installation page |

## 3. Left off the site because it could not be verified

Supply any of these and they can be added. They would strengthen the site considerably.

- Year the business was founded, and years of experience
- Number of technicians
- Trade licence number, and any municipality or DEWA approvals
- Certifications and training
- AC brands serviced or supplied
- Warranty or guarantee on repairs and parts
- Prices, call-out fees, or a "from" price
- Typical response time
- Payment methods
- Languages spoken by the team
- Facebook, LinkedIn and Instagram addresses (the profile mentions Facebook and LinkedIn pages but gives no links)
- Map coordinates for the workshop

## 4. Assets to supply

| Asset | Now | Wanted |
| --- | --- | --- |
| Logo | A simple placeholder mark and wordmark | Your real logo, as SVG or a large PNG |
| Photographs | Real photos supplied by the business are in place for the residential, commercial, about and technician slots in `src/content/media.ts`. The hero deliberately keeps the drawn cooling scene. The source files are phone/WhatsApp quality (around 800px on the long edge), not the 1600px recommended for a crisp large display | Higher-resolution originals of the same shots, or a van and a finished-installation photo for variety |
| Customer reviews | A link to Google | Nothing needed. If you later want reviews shown on the site, use Google's own reviews widget or obtain each reviewer's written permission |

## 5. Blog articles awaiting approval

Nineteen articles are written and hidden. Each needs to be read by someone who does the work, corrected where it differs from your practice, and then published by changing one word. Instructions are in `docs/CONTENT-GUIDE.md`.

1. AC not cooling? Six safe checks before you call a technician
2. Why is my AC leaking water? Causes and what to do first
3. How often should you service your AC in Dubai?
4. AC gas refilling: when it is needed and when it is not
5. AC freezing up in Dubai: causes, warning signs and solutions
6. How to reduce your AC electricity bill in Dubai
7. How to clean an AC filter the right way (and why it matters)
8. Seven signs your AC needs professional attention, not just a clean
9. Split AC or central AC: what Dubai homes and offices actually use
10. Why is my AC making a strange noise? What the sounds mean
11. AC coil cleaning: why a dirty coil costs you cooling and money
12. Getting your AC ready for a Dubai summer: a pre-season checklist
13. Thermostat problems that make a healthy AC act like a broken one
14. Does your building need duct cleaning? Signs to look for
15. Why does my AC smell bad? Common causes of AC odours
16. What counts as an AC emergency in Dubai, and what can wait until morning
17. Installing a new AC: what happens and what to ask your installer
18. What affects the cost of AC repair in Dubai (no prices stated — general factors only)
19. Are annual AC maintenance contracts worth it for Dubai homes and businesses?

Articles 5–19 were drafted in November 2026 and have not yet been read by anyone at Al Naveed. Before publishing any of them, check each one against how your team actually works, the same as 1–4.

Until one is published, the Guides link does not appear in the navigation and `/blog` is not listed in the sitemap.

## 6. Area page facts worth a second look

The area pages describe the buildings and cooling systems typical of each district, hedged with "many" and "often". They were written from general knowledge of Dubai, not from your job records. Two things to check in particular:

- Which towers and communities you actually visit in each area
- Whether building management rules (work permits, contractor registration) are described the way your team experiences them

## 7. Optional, after launch

| Item | Benefit |
| --- | --- |
| Add an Anthropic API key | The assistant answers in natural language instead of from its built-in guide. Usage is charged by Anthropic. See `docs/DEPLOYMENT.md` |
| Google Search Console and Bing Webmaster Tools | Submit the sitemap, watch indexing |
| Update the Google Business Profile website link | Points to the new site, with matching name, address and phone |
| Privacy-friendly analytics | Know which pages bring calls. None is installed, so no cookie banner is needed today |
| Call tracking | Measure phone leads |
| Arabic version | A large share of Dubai searches are in Arabic. The structure allows it |
| Shared rate-limit store | Needed only on multi-instance or serverless hosting. See `src/lib/rate-limit.ts` |
| Update the rating figures | 4.5 and 202 are dated November 2026 on the page. Change three values in `src/lib/site.ts` when they move |
