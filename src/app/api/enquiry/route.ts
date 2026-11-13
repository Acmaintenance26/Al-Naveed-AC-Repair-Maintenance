import { services } from "@/content/services";
import { deliverEnquiry } from "@/lib/delivery";
import { validateEnquiry } from "@/lib/enquiry";
import { clientIp, rateLimit, sameOrigin } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 8_000;
const MIN_FILL_MS = 2_500;

const serviceLabels = new Map<string, string>([
  ...services.map((s) => [s.slug, s.name] as const),
  ["other", "Not sure / something else"],
]);

const json = (body: unknown, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  if (!sameOrigin(request)) return json({ ok: false, code: "forbidden" }, 403);

  if (!rateLimit(`enquiry:${clientIp(request)}`, 5, 10 * 60_000)) {
    return json({ ok: false, code: "rate_limited" }, 429);
  }

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return json({ ok: false, code: "too_large" }, 413);

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== "object") throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, code: "bad_request" }, 400);
  }

  // Spam trap 1: a hidden field people never see. Bots that fill it get a normal-looking
  // success so they learn nothing, and nothing is delivered.
  if (typeof body.al_ref === "string" && body.al_ref.trim() !== "") return json({ ok: true }, 200);

  // Spam trap 2: forms submitted faster than a person could type. The visitor is asked to
  // send again, so a genuine fast submission is never silently dropped.
  if (typeof body.elapsedMs !== "number" || body.elapsedMs < MIN_FILL_MS) {
    return json({ ok: false, code: "too_fast" }, 400);
  }

  const result = validateEnquiry(body, [...serviceLabels.keys()]);
  if (!result.ok) return json({ ok: false, code: "invalid", errors: result.errors }, 400);

  const outcome = await deliverEnquiry(
    result.data,
    serviceLabels.get(result.data.service) ?? result.data.service,
  );

  if (outcome === "sent") return json({ ok: true }, 200);
  if (outcome === "not_configured") return json({ ok: false, code: "not_configured" }, 503);
  return json({ ok: false, code: "delivery_failed" }, 502);
}
