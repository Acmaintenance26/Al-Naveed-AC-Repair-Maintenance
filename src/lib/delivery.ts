import "server-only";
import { enquirySummary, type Enquiry } from "@/lib/enquiry";
import { site } from "@/lib/site";

export type DeliveryResult = "sent" | "not_configured" | "failed";

/**
 * Sends an enquiry to the business. Nothing is stored on the server.
 *
 * Configure one of:
 *   ENQUIRY_WEBHOOK_URL                      - POST the enquiry as JSON (Zapier, Make, n8n, a CRM)
 *   RESEND_API_KEY                           - email through Resend. Goes to ENQUIRY_TO_EMAIL,
 *                                              which defaults to the business email in site.ts
 *   ENQUIRY_DELIVERY=log                     - development only: print a masked summary
 *
 * With none of these set the route answers "not_configured" and the form tells the
 * visitor to call or use WhatsApp. It never pretends the request was delivered.
 */

/** Resend's address, unless a local test server is named. A key is never sent to another host. */
function resendEndpoint(): string {
  const override = process.env.RESEND_API_URL;
  if (override) {
    try {
      const url = new URL(override);
      if (url.protocol === "http:" && ["127.0.0.1", "localhost"].includes(url.hostname)) {
        return url.toString();
      }
    } catch {
      // fall through to the real endpoint
    }
  }
  return "https://api.resend.com/emails";
}

export async function deliverEnquiry(data: Enquiry, serviceLabel: string): Promise<DeliveryResult> {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL || site.email;
  const summary = enquirySummary(data, serviceLabel);

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, serviceLabel, source: site.url }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? "sent" : "failed";
    }

    if (resendKey && to) {
      // The sender must be on a domain verified in Resend (see docs/DEPLOYMENT.md).
      const from = process.env.ENQUIRY_FROM_EMAIL || `Website <website@${site.email.split("@")[1]}>`;
      const subject = `${data.kind === "booking" ? "Booking request" : "Enquiry"}: ${serviceLabel}, ${data.location}`;
      const res = await fetch(resendEndpoint(), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to: [to], subject: subject.slice(0, 180), text: summary }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) {
        // Resend's error text names the problem (for example an unverified sender domain).
        // It never repeats the message we sent, so it is safe to log.
        const reason = await res.text().catch(() => "");
        console.error(`[enquiry] Resend refused the email (${res.status}): ${reason.slice(0, 300)}`);
      }
      return res.ok ? "sent" : "failed";
    }

    if (process.env.ENQUIRY_DELIVERY === "log" && process.env.NODE_ENV !== "production") {
      const maskedPhone = data.phone.replace(/\d(?=\d{3})/g, "•");
      console.info(`[enquiry:dev] ${data.kind} for "${serviceLabel}" from ${maskedPhone}`);
      return "sent";
    }
  } catch {
    return "failed";
  }

  return "not_configured";
}
