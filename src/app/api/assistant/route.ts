import Anthropic from "@anthropic-ai/sdk";
import { guidedReply } from "@/lib/assistant/guided";
import { systemPrompt } from "@/lib/assistant/knowledge";
import { clientIp, rateLimit, sameOrigin } from "@/lib/rate-limit";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5-5";
const MAX_BODY_BYTES = 24_000;
const MAX_MESSAGES = 12;
const MAX_CHARS = 800;

// Models that accept the server-side refusal fallback.
const SUPPORTS_FALLBACK = /^claude-(opus-5|sonnet-5-5|fable-5)/;

type Turn = { role: "user" | "assistant"; content: string };

const textHeaders = (mode: "ai" | "guided") => ({
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Assistant-Mode": mode,
});

const guided = (lastUserMessage: string) =>
  new Response(guidedReply(lastUserMessage), { headers: textHeaders("guided") });

/** Keeps only well-formed recent turns: starts with the visitor, ends with the visitor. */
function parseTurns(raw: unknown): Turn[] | null {
  if (!raw || typeof raw !== "object") return null;
  const list = (raw as { messages?: unknown }).messages;
  if (!Array.isArray(list)) return null;

  const turns: Turn[] = [];
  for (const item of list.slice(-MAX_MESSAGES)) {
    if (!item || typeof item !== "object") return null;
    const { role, content } = item as Record<string, unknown>;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const text = content.replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, " ").trim().slice(0, MAX_CHARS);
    if (text) turns.push({ role, content: text });
  }
  while (turns.length > 0 && turns[0].role !== "user") turns.shift();
  if (turns.length === 0 || turns[turns.length - 1].role !== "user") return null;
  return turns;
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return new Response("Forbidden", { status: 403 });

  if (!rateLimit(`assistant:${clientIp(request)}`, 20, 5 * 60_000)) {
    return new Response("Too many messages. Please call us instead.", { status: 429 });
  }

  const body = await request.text();
  if (body.length > MAX_BODY_BYTES) return new Response("Message too long", { status: 413 });

  let turns: Turn[] | null = null;
  try {
    turns = parseTurns(JSON.parse(body));
  } catch {
    turns = null;
  }
  if (!turns) return new Response("Bad request", { status: 400 });

  const lastUserMessage = turns[turns.length - 1].content;

  // No key configured: answer from the built-in guide. The key never leaves the server.
  if (!process.env.ANTHROPIC_API_KEY) return guided(lastUserMessage);

  const client = new Anthropic({ maxRetries: 1, timeout: 45_000 });
  const useFallback = SUPPORTS_FALLBACK.test(MODEL);

  try {
    const stream = client.beta.messages.stream({
      model: MODEL,
      max_tokens: 4096,
      output_config: { effort: "low" },
      cache_control: { type: "ephemeral" },
      system: systemPrompt,
      messages: turns,
      // If the model declines a request on policy grounds, the API retries it on a
      // fallback model inside the same call.
      ...(useFallback
        ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const }
        : {}),
    });

    const events = stream[Symbol.asyncIterator]();
    const encoder = new TextEncoder();

    // Wait for the first piece of text before committing to a streamed response, so a
    // failed or refused request can still fall back to the built-in guide.
    let first = "";
    while (!first) {
      const { value, done } = await events.next();
      if (done) break;
      if (value.type === "content_block_delta" && value.delta.type === "text_delta") {
        first = value.delta.text;
      }
    }
    if (!first) return guided(lastUserMessage);

    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        controller.enqueue(encoder.encode(first));
        try {
          for (;;) {
            const { value, done } = await events.next();
            if (done) break;
            if (value.type === "content_block_delta" && value.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(value.delta.text));
            }
          }
        } catch {
          controller.enqueue(
            encoder.encode("\n\nThe reply was cut short. Please call or WhatsApp us for help."),
          );
        } finally {
          controller.close();
        }
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(readable, { headers: textHeaders("ai") });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("[assistant] The Anthropic API key was rejected. Using the built-in guide.");
    } else if (error instanceof Anthropic.RateLimitError) {
      console.error("[assistant] Anthropic rate limit reached. Using the built-in guide.");
    } else if (error instanceof Anthropic.APIError) {
      console.error(`[assistant] Anthropic API error ${error.status}. Using the built-in guide.`);
    } else {
      console.error("[assistant] Could not reach the AI service. Using the built-in guide.");
    }
    return guided(lastUserMessage);
  }
}
