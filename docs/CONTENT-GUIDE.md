# Content guide

How to change what the site says without touching its design. Everything a visitor reads is in `src/lib/site.ts` or in `src/content/`.

After any change, run `npm test` before publishing. The tests catch a broken link, a duplicated title or a page that no longer fits a phone.

## Business facts

File: `src/lib/site.ts`

This one file feeds the header, footer, contact page, every call and WhatsApp button, the structured data and the AI assistant. Change a number here and it changes everywhere.

| To change | Edit |
| --- | --- |
| Phone numbers | `phone.primary` and `phone.secondary`. Update both `display` (as people read it) and `e164` (digits only with a plus sign) |
| WhatsApp number | `whatsapp.number`, digits only, no plus sign |
| Email | `email` |
| Address | `address` |
| Opening hours | `hours`. If the hours stop being 24/7, also update `openingHoursSpecification` in `src/lib/schema.ts` and the "Open now" clock in `src/components/OpenNow.tsx`, which assumes always open |
| Google rating | `google.rating`, `google.reviewCount` and `google.asOf`. Change all three together |

Keep the name, address and phone identical to your Google Business Profile. Search engines compare them.

## Services

File: `src/content/services.ts`

Each service is one block with the same fields: name, page title, summary, introduction, signs, what is included, steps, a note and questions.

- **Edit a service**: change the text inside its block.
- **Add a service**: copy a block, give it a new `slug` (lower case, hyphens, ending in `-dubai`), and add the slug to `SERVICES` in `tests/routes.ts`. It then appears in the menu, the footer, the services page, the forms and the sitemap.
- **Remove a service**: delete its block, remove its slug from other services' `related` lists and from `tests/routes.ts`.
- **Show on the homepage**: set `featured: true`. Six fit the grid.

Only describe work you actually do. Do not add prices unless you intend to honour them for every visitor.

## Areas

File: `src/content/areas.ts`

Same pattern as services. Each area needs content that is true of that place: what the buildings are, what cooling they use, what goes wrong there. A page that only swaps the area name will be ignored by search engines and can hurt the rest of the site.

Remove any area you do not serve, and remove its slug from `AREAS` in `tests/routes.ts` and from other areas' `nearby` lists.

## Homepage questions

File: `src/content/faqs.ts`

A list of questions and answers. The same list produces the FAQ markup for search engines, so the two always match.

## Blog articles

File: `src/content/posts.ts`

### Publishing a draft

1. Preview it. Add `SHOW_DRAFT_POSTS=true` to `.env.local`, run `npm run dev` and open `/blog`.
2. Have a technician read it. Correct anything that differs from how you work.
3. In `posts.ts`, find the article and change `status: "draft"` to `status: "published"`. Set `publishedAt` to today's date.
4. Deploy.

A published article appears on `/blog`, in the sitemap, and can be indexed. Once the first article is published, the "Guides" link appears in the menu and footer.

### Writing a new article

Copy an existing block. An article is a list of blocks:

| Block | Use |
| --- | --- |
| `{ type: "p", text }` | Paragraph |
| `{ type: "h2", id, text }` | Section heading. `id` is a short unique slug. Three or more headings produce a table of contents |
| `{ type: "ul", items }` | Bulleted list |
| `{ type: "ol", items }` | Numbered list |
| `{ type: "callout", title, text }` | Highlighted note |

Set `relatedServices` to the service slugs the article should link to. Reading time is calculated automatically. Add the new slug to `POSTS` in `tests/routes.ts`.

Keep articles honest and safe. Householder-level checks are fine. Do not publish instructions for electrical or refrigerant work.

## Photographs

File: `src/content/media.ts`

The site shows drawings until you add real photos. There are four slots: `hero`, `residential`, `commercial` and `about`.

1. Save the photo in `public/images/`, for example `public/images/technician-servicing-split-ac.jpg`.
2. Fill in the slot:

```ts
hero: {
  src: "/images/technician-servicing-split-ac.jpg",
  alt: "Al Naveed technician cleaning the filter of a wall-mounted air conditioner",
  width: 1600,
  height: 1200,
},
```

- Use your own photos only. Not stock images, and not other companies' staff or vans.
- Landscape, 1600px or wider, under about 400 KB.
- `alt` describes what is in the picture for people who cannot see it. Write a plain sentence.
- `width` and `height` are the real pixel dimensions of the file.

The site resizes and compresses photos automatically for each screen.

## Logo

The current mark is a placeholder drawn in code: `LogoMark` in `src/components/ui/icons.tsx`, and `src/app/icon.svg` for the browser tab. To use your own logo, replace both, then run `npm run assets` to regenerate the sharing image and the phone home-screen icon.

## Social media links

None are shown because no addresses were supplied. When you have them, add them to `src/lib/site.ts`, list them in the footer (`src/components/layout/Footer.tsx`) and add a `sameAs` array to the business markup in `src/lib/schema.ts`.

## The AI assistant

What the assistant knows comes from `src/lib/site.ts` and the service and area lists, so it stays current automatically.

- Its rules and tone: `src/lib/assistant/knowledge.ts`
- Its built-in answers, used when no AI key is set or the AI service is down: `src/lib/assistant/guided.ts`
- Its welcome message and suggested questions: `src/components/assistant/AssistantLauncher.tsx` and `AssistantPanel.tsx`

If you give the assistant new facts, such as brands or payment methods, add them to `businessFacts` in `knowledge.ts`. It is instructed to say "I do not have that information" for anything not listed there.

## Page titles and descriptions

Each page sets its own title and description for search results.

| Page type | Where |
| --- | --- |
| Services and areas | `metaTitle` and `metaDescription` in the content file |
| Articles | `title` and `description` in `posts.ts` |
| Other pages | The `metadata` export at the top of the page's file in `src/app/` |

Titles under 70 characters, descriptions between 70 and 165, each one unique. The tests enforce this.

## Legal pages

`src/app/privacy-policy/page.tsx` and `src/app/terms/page.tsx`. Update the "last updated" date whenever you change them. If you add analytics, advertising or a new data processor, the privacy policy must say so.
