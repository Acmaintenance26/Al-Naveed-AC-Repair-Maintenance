# Deployment

The site has not been deployed. This document explains how to do it. Nothing here has been run against a live host.

## What the site needs from a host

- Node.js 20.9 or newer
- The ability to run a Next.js server (`next start`). The site is **not** a static export: the two API routes and the 404 handling need a server
- HTTPS
- A way to set environment variables

## Production build

```bash
npm ci
```

```bash
npm run build
```

```bash
npm run start
```

`npm run start` serves on port 3000. Use `npm run start -- -p 8080` for another port.

Every page is prerendered at build time. Only `/api/enquiry`, `/api/assistant` and the 404 check in `src/proxy.ts` run on a request.

## Option A: Vercel

The simplest route, since Vercel maintains Next.js.

1. Push the repository to GitHub, GitLab or Bitbucket.
2. In Vercel, import the repository. The framework is detected automatically. No build settings need changing.
3. Add the environment variables below under Project Settings, Environment Variables.
4. Deploy, then add the domain under Project Settings, Domains and follow the DNS instructions.

Note for Vercel and any other serverless host: the built-in rate limiter keeps its counts in memory, per server instance. It still slows down abuse, but for strict limits add the platform's firewall rate-limit rule on `/api/*` or a shared store.

## Option B: Your own server or VPS

1. Install Node.js 20.9 or newer.
2. Copy the project, run `npm ci` and `npm run build`.
3. Create `.env.local` with the variables below, or set them in the process manager.
4. Run `npm run start` under a process manager such as systemd or PM2 so it restarts on failure.
5. Put Nginx or Caddy in front for HTTPS, proxying to the Node port.

Make sure the proxy passes the visitor's address in `X-Forwarded-For` and the original host in `X-Forwarded-Host` or `Host`. The rate limiter and the cross-site check rely on them.

## Option C: Other platforms

Netlify, Render, Railway, AWS Amplify and Cloudflare all run Next.js. Check that the platform supports Next.js 16 with Cache Components before choosing it.

## Environment variables in production

| Variable | Set it? | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | The final address, for example `https://www.alnaveedac.com`. No trailing slash. Must be set **before the build**: it is baked into canonical URLs and the sitemap |
| `ENQUIRY_WEBHOOK_URL` | One delivery method is required | See "Connecting the forms" |
| `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` | Alternative to the webhook | See "Connecting the forms" |
| `ANTHROPIC_API_KEY` | Optional | Enables AI answers in the assistant |
| `ANTHROPIC_MODEL` | Optional | Defaults to `claude-opus-5-5` |
| `SHOW_DRAFT_POSTS` | **No** | Leave unset. Setting it publishes unapproved articles |
| `ENQUIRY_DELIVERY` | No | Development only. Ignored in production |

Never commit real values. Never prefix a key with `NEXT_PUBLIC_`.

## Connecting the forms

Without one of these, the forms tell visitors the request was not sent.

### Email through Resend

1. Create an account at resend.com and verify the `alnaveedac.com` domain by adding the DNS records it gives you.
2. Create an API key.
3. Set:
   - `RESEND_API_KEY` to the key
   - `ENQUIRY_TO_EMAIL` to the inbox that should receive enquiries
   - `ENQUIRY_FROM_EMAIL` to a sender on the verified domain, for example `Website <website@alnaveedac.com>`

Each submission arrives as a plain-text email with the name, phone, service, location and message.

### Webhook

Set `ENQUIRY_WEBHOOK_URL` to an address that accepts a JSON POST. Zapier, Make and n8n all provide one, and can forward the enquiry to email, WhatsApp Business, a Google Sheet or a CRM.

The JSON body:

```json
{
  "kind": "booking",
  "name": "…",
  "phone": "+9715…",
  "service": "ac-repair-dubai",
  "serviceLabel": "AC Repair",
  "location": "…",
  "message": "…",
  "preferredTime": "Morning",
  "source": "https://www.alnaveedac.com"
}
```

If both methods are set, the webhook is used.

### Then test it

Submit the form on the live site and confirm the message arrives. This has not been done: delivery was verified against a local mock only.

## Enabling the AI assistant

The assistant works without any setup, answering from a built-in guide. To have it answer in natural language:

1. Create an API key in the Anthropic Console.
2. Set `ANTHROPIC_API_KEY` on the server.

Things to know:

- Usage is billed by Anthropic per message. The default model is Claude Opus 5.5. To lower the cost, set `ANTHROPIC_MODEL` to a smaller model such as `claude-haiku-5-5` and test the answers before relying on it.
- Each visitor is limited to 20 messages in five minutes and 20 turns per conversation. Set a monthly spend limit in the Anthropic Console as well.
- If the key is wrong or the service is unavailable, the assistant falls back to the built-in guide and logs a line on the server. Visitors do not see an error.
- The live API has not been called during this build. The code path was verified against a local stand-in for the API.

## Launch checklist

Before:

- [ ] Items 1 to 9 in `docs/OUTSTANDING.md` are resolved
- [ ] `NEXT_PUBLIC_SITE_URL` is the final address and the site was built after setting it
- [ ] A form delivery method is set
- [ ] `SHOW_DRAFT_POSTS` is not set
- [ ] `npm test` passes
- [ ] Redirects from the old site's addresses are added in `next.config.ts`

After:

- [ ] A real enquiry and a real booking request arrive in the inbox
- [ ] Call and WhatsApp buttons work on an actual phone
- [ ] `https://www.alnaveedac.com/sitemap.xml` and `/robots.txt` load
- [ ] The site is added to Google Search Console and the sitemap is submitted
- [ ] The Google Business Profile website link points to the new site
- [ ] Structured data passes Google's Rich Results Test
- [ ] Lighthouse is run against the live address, since scores depend on hosting
- [ ] HTTP redirects to HTTPS, and the non-www address redirects to www, or the reverse, consistently

## Security already in place

- Security headers on every response: Content-Security-Policy, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- No third-party scripts, fonts, frames or trackers
- Form and assistant input is validated, length-limited and stripped of control characters on the server
- Cross-site posts to the API are refused
- Rate limits on both API routes
- Hidden-field and timing traps against form spam
- API keys are read only in server files guarded by `server-only`. A test confirms none appear in browser JavaScript
- No database, and no personal data is stored by the site

Possible hardening later: Cloudflare Turnstile on the forms if spam gets through, a nonce-based script policy, and a shared rate-limit store.

## Updating the site

Edit content (see `docs/CONTENT-GUIDE.md`), run `npm test`, commit and deploy. On Vercel a push to the main branch deploys automatically. On a server, pull, run `npm ci`, `npm run build`, and restart the process.
