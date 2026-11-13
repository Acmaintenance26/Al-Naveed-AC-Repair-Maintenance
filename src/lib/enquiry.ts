/**
 * Enquiry and booking-request rules, shared by the browser form and the API route
 * so both apply exactly the same checks.
 */

export type EnquiryKind = "enquiry" | "booking";

export const PREFERRED_TIMES = [
  "As soon as possible",
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
] as const;

export type Enquiry = {
  kind: EnquiryKind;
  name: string;
  phone: string;
  /** Service slug, or "other". */
  service: string;
  location: string;
  message: string;
  preferredTime: string;
};

export type EnquiryField = "name" | "phone" | "service" | "location" | "message";
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const LIMITS = { name: 80, phone: 24, location: 120, message: 1000 };

/** Trims, removes control characters and caps the length. Line breaks survive only when asked for. */
export function cleanText(value: unknown, max: number, multiline = false): string {
  if (typeof value !== "string") return "";
  const stripped = value
    .replace(multiline ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, " ")
    .replace(multiline ? /[^\S\n]+/g : /\s+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return stripped.slice(0, max);
}

/** Keeps digits and one leading plus sign. */
export function normalisePhone(value: string): string {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  return trimmed.startsWith("+") ? `+${digits}` : digits;
}

export function validateEnquiry(
  raw: unknown,
  allowedServices: readonly string[],
): { ok: true; data: Enquiry } | { ok: false; errors: EnquiryErrors } {
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const errors: EnquiryErrors = {};

  const name = cleanText(input.name, LIMITS.name);
  if (name.length < 2) errors.name = "Enter your name.";

  const phone = normalisePhone(cleanText(input.phone, LIMITS.phone));
  const digitCount = phone.replace(/\D/g, "").length;
  if (digitCount < 7 || digitCount > 15) {
    errors.phone = "Enter a phone number we can call, including the area or country code.";
  }

  const service = cleanText(input.service, 60);
  if (!allowedServices.includes(service)) errors.service = "Choose the service you need.";

  const location = cleanText(input.location, LIMITS.location);
  if (location.length < 2) errors.location = "Enter your area and building, for example Al Barsha 1.";

  const message = cleanText(input.message, LIMITS.message, true);
  if (message.length < 5) errors.message = "Tell us briefly what the AC is doing.";

  const preferredTime = cleanText(input.preferredTime, 40);
  const kind: EnquiryKind = input.kind === "booking" ? "booking" : "enquiry";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      kind,
      name,
      phone,
      service,
      location,
      message,
      preferredTime: (PREFERRED_TIMES as readonly string[]).includes(preferredTime)
        ? preferredTime
        : "",
    },
  };
}

/** Plain-text summary used for the email body and the WhatsApp fallback. */
export function enquirySummary(data: Enquiry, serviceLabel: string): string {
  return [
    data.kind === "booking" ? "Booking request" : "Enquiry",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${serviceLabel}`,
    `Location: ${data.location}`,
    data.preferredTime ? `Preferred time: ${data.preferredTime}` : null,
    `Details: ${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}
