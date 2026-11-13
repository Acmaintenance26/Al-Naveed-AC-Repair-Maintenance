# Setup

Phase 2 deliverable. How this project was set up, and how to set it up again on another machine.

## Requirements

| Tool | Version used | Notes |
| --- | --- | --- |
| Node.js | 22.23 | 20.9 or newer works |
| npm | 10.9 | Ships with Node |
| Git | 2.43 | |
| Claude Code | 2.1.322 | Optional. Only needed to use the project skills and agents |

## Install and run

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

The site is then at http://localhost:3000. Every setting in `.env.local` is optional for local work. See "Environment variables" below for what each one switches on.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with live reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no output files |
| `npm test` | Builds, starts the site on port 3100 and runs the Playwright suite |
| `npm run assets` | Regenerates the social sharing image and Apple touch icon |

The first time you run the tests on a new machine, install the browser once:

```bash
npx playwright install chromium
```

## Dependencies

Runtime:

| Package | Version | Why it is here |
| --- | --- | --- |
| next | 16.4.6 | Framework: routing, server rendering, API routes |
| react, react-dom | 19.3.0 | UI |
| motion | 14.12 | Open and close transition of the assistant panel. Loaded only when the assistant is opened |
| lucide-react | 1.72 | Icons |
| @anthropic-ai/sdk | 1.8 | AI assistant. Server side only |
| server-only | | Build-time guard that stops server code being imported into the browser bundle |

Development: Tailwind CSS 4.3, TypeScript 5, ESLint 9 with `eslint-config-next`, `@playwright/test` 1.63, `@axe-core/playwright`.

`npm audit --omit=dev` reports no vulnerabilities in what ships to production. `npm audit` reports 8 moderate findings, all one advisory in `minimatch` inside the ESLint toolchain. That code runs only on a developer's machine during linting. The only automatic fix downgrades `eslint-config-next` to version 15, which does not match this Next.js release, so it has been left until an upstream patch arrives.

## Environment variables

Copy `.env.example` to `.env.local`. Nothing secret is committed, and `.env.local` is ignored by Git.

| Variable | Needed for | If unset |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, structured data | Defaults to `https://www.alnaveedac.com` |
| `ENQUIRY_WEBHOOK_URL` | Delivering form submissions to a webhook | See below |
| `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` | Delivering form submissions by email | See below |
| `ENQUIRY_DELIVERY=log` | Local development only: accept the form and print a masked line | Ignored in production |
| `ANTHROPIC_API_KEY` | AI answers in the assistant | Assistant answers from its built-in guide |
| `ANTHROPIC_MODEL` | Choosing a different Claude model | Uses `claude-opus-5-5` |
| `SHOW_DRAFT_POSTS=true` | Previewing draft blog articles | Drafts are hidden |

**Forms with no delivery method.** If neither the webhook nor the email settings are present, the form does not pretend to work. It tells the visitor the request was not sent and offers a pre-filled WhatsApp message and the phone number.

**Only the site URL is public.** Every other variable is read on the server. Do not add the `NEXT_PUBLIC_` prefix to a key.

## Claude Code skills

Skills were checked before installation: source repository, every file read, and a search for network calls, shell commands and credential access.

| Skill | Source | Scope | Status |
| --- | --- | --- | --- |
| `frontend-design` | `anthropics/skills` (official), commit `2c5958e` | Project, `.claude/skills/` | Installed. Guidance text only, no scripts |
| `webapp-testing` | `anthropics/skills` (official), commit `2c5958e` | Project, `.claude/skills/` | Installed. One helper script that starts a local server and waits for its port. No network access |
| `claude-api` | Bundled with Claude Code | Built in | Used for the assistant's API code |
| `searchfit-seo` (audit, schema, on-page, technical SEO and others) | Already installed as a plugin | User | Available. Not reinstalled |
| `code-review`, `security-review`, `simplify` | Bundled with Claude Code | Built in | Available |

Installation method: project skills are folders under `.claude/skills/<name>/` containing a `SKILL.md`. Claude Code loads them automatically for anyone working in this repository. Both installed skills were confirmed to be listed by Claude Code after installation.

Not installed, and why:

- **React / Next.js and Tailwind skills.** No official Anthropic skill exists for these. Next.js 16 ships its own current documentation inside `node_modules/next/dist/docs/`, which `AGENTS.md` points to, and that was used instead of a third-party skill of unknown quality.
- **Accessibility, performance and security skills.** No vetted official skill was found. The work is covered by the automated axe tests, Lighthouse runs and the built-in review skills.

## Project agents

Five agents are defined in `.claude/agents/`. Each has one area of responsibility and none merges its own work.

| Agent | Responsibility |
| --- | --- |
| `frontend-design-agent` | Layout, visual design, illustrations |
| `development-agent` | Routes, components, API handlers, forms, assistant |
| `seo-agent` | Metadata, structured data, sitemap, page copy |
| `performance-agent` | Lighthouse, Core Web Vitals, bundle size |
| `testing-agent` | Playwright suite, accessibility, browser verification |

Review rule for all five: a change is finished when lint, typecheck and the full test suite pass, and someone other than the author has reviewed it.

## MCP servers and tools found in the build environment

- Browser automation: Chromium with Playwright 1.63, preinstalled. Used for every test and screenshot.
- MCP: Gmail, Google Calendar and Google Drive connectors were available and were not used. Several other business connectors failed to connect and were not needed.
- Network: restricted to package registries. `alnaveedac.com` was added to the allow-list to read the reference site, which then answered with a bot challenge (see `PROJECT-PLAN.md`).

## Git

The repository is initialised with local commits only. Nothing has been pushed and no remote is configured.
