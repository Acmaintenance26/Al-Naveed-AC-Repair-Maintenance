# Al Naveed AC Repair & Maintenance website

Guidance for AI coding agents working in this repository.

## Rules that matter most

1. **No invented business facts.** Phone numbers, address, hours and rating live in `src/lib/site.ts`. Years in business, licences, prices, brands, guarantees and response times have not been confirmed and must not appear anywhere. See `docs/OUTSTANDING.md`.
2. **No fabricated reviews, and no rating in structured data.** The reviews section links to Google.
3. **Forms never claim success they did not have.** A success message needs `{ ok: true }` from a real delivery.
4. **Blog articles stay drafts** until a person at Al Naveed approves them. Do not flip `status` to `"published"`.
5. **No stock photography.** Photos enter only through `src/content/media.ts`.
6. **Secrets stay on the server.** Never add `NEXT_PUBLIC_` to a key.
7. **Do not deploy, push or publish** without the owner's say-so.

## Working here

- Content is in `src/content/`, business facts in `src/lib/site.ts`. Components do not hard-code copy that belongs there.
- Follow `DESIGN-SYSTEM.md` for anything visual. Use the tokens in `src/app/globals.css`.
- Before finishing: `npm run lint`, `npm run typecheck`, `npm test`. Add new pages to `tests/routes.ts`.
- Project agents are in `.claude/agents/`, project skills in `.claude/skills/`.
- Handover documents are in `docs/`. Keep `docs/TESTING-REPORT.md` and `docs/OUTSTANDING.md` current.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
