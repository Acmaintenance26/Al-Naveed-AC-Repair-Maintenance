/**
 * Small in-memory sliding-window rate limiter.
 *
 * It protects a single server process. On serverless or multi-instance hosting each
 * instance keeps its own counts, so treat it as a first line of defence and add a shared
 * store (for example Upstash Redis) or a platform firewall rule for strict limits.
 */

const hits = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = performance.timeOrigin + performance.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > MAX_KEYS) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
      if (hits.size <= MAX_KEYS) break;
    }
  }
  return true;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

/** Rejects cross-site form posts. Requests without an Origin header are allowed. */
export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
