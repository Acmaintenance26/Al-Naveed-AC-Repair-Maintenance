import { test, expect } from "@playwright/test";
import { areas } from "../src/content/areas";

function textOf(a: (typeof areas)[number]) {
  return [
    a.lead,
    a.quickAnswer,
    ...a.sections.flatMap((s) => [
      s.title,
      ...(s.paragraphs ?? []),
      ...(s.items ?? []).flatMap((i) => [i.title, i.text]),
      ...(s.points ?? []),
      ...(s.closing ?? []),
    ]),
    ...a.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
}

const wordCount = (t: string) => t.split(/\s+/).filter(Boolean).length;

test.describe("area content", () => {
  for (const area of areas) {
    test(`${area.slug}: length, structure and claims`, () => {
      const text = textOf(area);
      const words = wordCount(text);
      expect(words, `${area.slug} words`).toBeGreaterThanOrEqual(1500);
      expect(words, `${area.slug} words`).toBeLessThanOrEqual(2000);
      expect(area.metaTitle.length).toBeLessThanOrEqual(55);
      expect(area.metaDescription.length).toBeGreaterThanOrEqual(70);
      expect(area.metaDescription.length).toBeLessThanOrEqual(165);
      expect(area.faqs.length).toBeGreaterThanOrEqual(5);
      expect(area.quickAnswer.length).toBeGreaterThan(80);
      expect(area.landmark.alt.length).toBeGreaterThan(10);
      expect(area.sections.length).toBeGreaterThanOrEqual(5);
      // Facts that have not been confirmed by Al Naveed must not appear.
      expect(text).not.toMatch(/\bAED\b|\bdirhams?\b/i);
      expect(text).not.toMatch(/\bguarantee/i);
      expect(text).not.toMatch(/cheapest|lowest price|best price/i);
      expect(text).not.toMatch(/\b\d+\s*(\+\s*)?years?\b/i);
      expect(text).not.toMatch(/\b(we are|our|fully|insured and)\s+licen[cs]ed\b/i);
      expect(text).not.toMatch(/within\s+\d+\s*(minutes?|mins?|hours?)/i);
    });
  }

  test("no paragraph is repeated across areas", () => {
    const seen = new Map<string, string>();
    for (const a of areas) {
      for (const s of a.sections) {
        for (const p of s.paragraphs ?? []) {
          const key = p.trim().toLowerCase();
          if (key.length < 60 || key.endsWith("please tell us:")) continue; // shared booking intro
          expect(seen.get(key), `"${p.slice(0, 50)}" repeated`).toBeUndefined();
          seen.set(key, a.slug);
        }
      }
    }
  });

  test("slugs and nearby links are valid", () => {
    const slugs = new Set(areas.map((a) => a.slug));
    expect(slugs.size).toBe(areas.length);
    for (const a of areas) {
      for (const n of a.nearby) expect(slugs.has(n), `${a.slug} → ${n}`).toBe(true);
    }
  });
});
