# Design system

Phase 3 deliverable. The rules the site is built on. Tokens live in `src/app/globals.css`.

## Direction

The visitor has a broken air conditioner in a hot room. The site's job is to look like a business that will pick up the phone and tell the truth. That means calm, exact and uncluttered: verified facts, plain language and a contact action always within reach.

One element is expressive: the hero's cooling scene, where a wall unit pushes air into the room and the thermostat reading falls from 31° to 24° as the page loads. It shows the outcome the visitor wants. Every other section stays quiet so that it lands.

What the site deliberately avoids: stock photos of other companies' technicians, gradients, glow effects, drop shadows on every card, entrance animations on every section, and claims that cannot be checked.

## Colour

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | `#101C2C` | Hero, process and closing bands, footer, headings |
| `navy-800` | `#172639` | Raised surfaces on navy |
| `navy-700` | `#22344B` | Hover on navy buttons |
| `blue` | `#1769AA` | Primary buttons, links and icons on light backgrounds |
| `blue-700` | `#11517F` | Primary button hover |
| `sky` | `#35A8E8` | Accent on navy only: primary button, icons, airflow lines, focus ring |
| `mist` | `#F5F8FC` | Alternate section background, side panels |
| `ink` | `#273449` | Body text |
| `slate` | `#55647A` | Secondary text |
| `line` | `#DCE4EE` | Hairline borders and dividers |
| white | `#FFFFFF` | Page background, cards |

The first six rows and white are the palette from the brief. `slate`, `line` and the two hover shades were derived from it.

Two functional colours sit outside the palette: WhatsApp green `#25D366` on the WhatsApp glyph only, because people recognise it, and star yellow `#F5B301` on the rating stars.

Contrast, all checked by the automated accessibility tests:

- Body text `ink` on white: 12.5:1
- `slate` on white: 6.0:1, and on `mist`: 5.6:1
- White on `blue`: 5.8:1
- `navy` on `sky`: 6.5:1. White text is never placed on `sky`, where it would reach only 2.7:1
- `sky` on `navy`: 6.5:1

## Typography

One family: **Manrope**, variable weight 200 to 800, self-hosted from `src/fonts/` (SIL Open Font License). One file, preloaded, no request to a font service.

| Class | Size | Line height | Tracking | Weight | Use |
| --- | --- | --- | --- | --- | --- |
| `t-display` | 38px to 72px | 1.03 | -0.035em | 750 | Homepage h1 |
| `t-h1` | 34px to 56px | 1.06 | -0.03em | 750 | Inner page h1, closing band |
| `t-h2` | 28px to 42px | 1.12 | -0.025em | 700 | Section headings |
| `t-h3` | 20px | 1.3 | -0.012em | 700 | Card and list headings |
| `t-lead` | 18px to 21px | 1.55 | 0 | 450 | Introductions |
| body | 17px | 1.65 | 0 | 450 | Running text |
| `t-small` | 15px | 1.55 | 0 | 450 | Supporting text |
| `t-label` | 14px | 1.4 | 0.005em | 650 | Form labels |

Sizes between the two figures scale fluidly with the viewport using `clamp()`, so there are no jumps between phone, tablet and desktop.

Rules:

- Headings are sentence case. Labels are never set in capitals.
- Text columns stop at about 66 characters.
- Phone numbers, times and figures use tabular numerals (`.tabular`) so they do not shift.
- Body text is never below 15px. Form fields are 16px so iOS does not zoom on focus.

## Layout

- **Container** `.shell`: 1216px maximum, 20px side padding on phones, 32px from 768px.
- **Section spacing** `.section`: 72px top and bottom on phones, 112px from 1024px.
- **Alignment**: left aligned throughout. Nothing is centred except icons inside buttons.
- **Two-column pattern**: a narrow column with the heading and a wide column with the content (0.8 to 1.2). The narrow column sticks while the wide one scrolls on desktop.
- **Section rhythm**: navy, white, mist, white, navy, and so on. Adjacent sections never share a background.
- **Breakpoints**: 430 (`xs`), 640 (`sm`), 768 (`md`), 1024 (`lg`), 1280 (`xl`). Tested at 360, 390, 430, 768, 1024, 1440 and 1920.

## Shape and depth

- Radius: 4px small, 8px buttons and fields, 12px cards and panels. Nothing larger.
- Borders: 1px `line`. Cards are flat and separated by borders, not shadows.
- Shadow is used in three places only, where something floats above the page: the services menu, the assistant panel and the thermostat card.

## Components

**Buttons** (`src/components/ui/Button.tsx`). Minimum height 48px, or 56px for the large size. Labels may wrap, so a button can never push a layout wider than the screen.

| Variant | Appearance | Use |
| --- | --- | --- |
| `primary` | Blue, white text | Main action on light backgrounds |
| `sky` | Sky, navy text | Main action on navy |
| `outline` | White, grey border | Secondary action on light |
| `outlineDark` | Transparent, white border | Secondary action on navy |
| `white` | White, navy text | WhatsApp on navy |
| `navy` | Navy, white text | Booking action in the mobile menu |

A button says what it does: "Call now", "Send booking request", "Read our reviews on Google".

**Text links** (`.link`): blue, semibold, a thin underline that darkens on hover. No arrows.

**Header**: slim navy bar on desktop with hours, location, email and second number. White sticky bar below with logo, navigation, WhatsApp and the primary phone number. Below 1024px the navigation collapses to a menu button and a call button.

**Mobile contact bar**: fixed to the bottom below 1024px. Call, WhatsApp, Book. 60px tall and respects the phone's safe area.

**Service card**: icon, name, summary, then "Learn more" and "Enquire". The whole card is clickable. Border turns blue on hover.

**Page header** (`PageHero`): navy band with breadcrumb, h1, lead and optional contact buttons. Used on every page except the homepage.

**Form fields** (`.field`): 48px tall, label above, error message below in red with an icon, focus ring in sky. Errors are linked to their field for screen readers and the first invalid field receives focus.

**FAQ**: native `<details>` elements. One open at a time, works without JavaScript.

**Closing band** (`CtaBand`): navy with faint airflow lines, h1-sized question and three buttons. Ends every page.

**Assistant**: navy launcher bottom right. Panel is 400px wide on desktop and a full-width sheet above the contact bar on phones.

## Illustration and photography

The site uses line drawings in the brand colours because no photographs of Al Naveed's own technicians, vehicles or workshop were supplied. Stock photos would show other companies' staff and uniforms.

- Hero: `CoolingScene`, wall unit, animated airflow and thermostat card.
- Residential and commercial panels: `HomeScene` and `CommercialScene`.
- Navy bands and article covers: `AirLines`.
- Logo mark: three lines of moving air on a blue tile. This is a placeholder until the business supplies its own logo.

Real photos drop in through `src/content/media.ts`. Each slot shows the drawing until a photo is set. See `docs/CONTENT-GUIDE.md`.

## Motion

| Where | What | Why |
| --- | --- | --- |
| Hero thermostat | Counts from 31 to 24 over about three seconds, once | The one orchestrated moment. Pure CSS |
| Hero airflow | Dashed lines drift downward | Shows the unit is running |
| "Open now" dot | Slow pulse | Draws the eye to the live status |
| Menus, FAQ, assistant | Open and close transitions | Responds to the visitor's action |

Nothing else animates. All of it switches off under `prefers-reduced-motion`, which is tested.

## Accessibility

Target: WCAG 2.2 AA.

- Skip link, landmarks, one h1 per page, headings in order.
- Visible 2px focus ring on every interactive element.
- Buttons, menu items and form controls are at least 44px tall, and contact actions at least 48px.
- Form errors announced and linked to fields. Results of a submission receive focus.
- Icons are hidden from assistive technology or labelled.
- The automated axe audit reports no violations on any template or interactive state.

## Voice

Plain, specific and honest. Say what something is and what happens next.

- "Refrigerant is not used up. If the level is low, there is a leak." Not "We offer premium gas top-up solutions."
- "This sends a request. We call you to agree a time." Not "Booking confirmed!"
- No superlatives, no "No.1", no "100%", no claims the business has not confirmed.
