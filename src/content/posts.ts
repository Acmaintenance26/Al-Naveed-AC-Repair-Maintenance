/**
 * Blog articles.
 *
 * Every article starts as a draft. Drafts are hidden in production and left out of the
 * sitemap until someone at Al Naveed has read the article, corrected anything that does
 * not match how the business works, and changed `status` to "published".
 *
 * To preview drafts locally, set SHOW_DRAFT_POSTS=true in .env.local.
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type PostCategory =
  | "AC Repair Tips"
  | "AC Maintenance"
  | "Air Conditioning Problems"
  | "HVAC Guides"
  | "Dubai AC Advice";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  status: "draft" | "published";
  /** ISO date. */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  blocks: PostBlock[];
  /** Service slugs linked from the article footer. */
  relatedServices: string[];
};

const AUTHOR = "Al Naveed AC team";

const allPosts: Post[] = [
  {
    slug: "ac-not-cooling-checks-before-calling-technician",
    title: "AC not cooling? Six safe checks before you call a technician",
    description:
      "Six things anyone can check in ten minutes when an air conditioner blows warm air, and the signs that mean you should switch it off and call.",
    category: "Air Conditioning Problems",
    status: "draft",
    publishedAt: "2026-11-12",
    author: AUTHOR,
    relatedServices: ["ac-repair-dubai", "ac-servicing-dubai", "ac-gas-refilling-dubai"],
    blocks: [
      {
        type: "p",
        text: "An air conditioner that runs but does not cool is the most common reason people call us. Sometimes the cause is a failed part. Quite often it is something simple that you can spot yourself in a few minutes, without tools and without opening anything electrical.",
      },
      {
        type: "p",
        text: "Work through these six checks in order. None of them involves touching wiring or refrigerant. If you reach the end and the air is still warm, you will at least be able to tell the technician what you have already ruled out.",
      },
      { type: "h2", id: "thermostat", text: "1. Check the thermostat or remote" },
      {
        type: "p",
        text: "Make sure the mode is set to Cool, not Fan, Dry or Auto. In Fan mode the unit moves air without cooling it, which feels exactly like a fault. Set the temperature at least three degrees below the current room temperature and give it ten minutes.",
      },
      {
        type: "p",
        text: "If the thermostat display is blank or dim, replace the batteries. On a remote-controlled split unit, check that the remote is actually sending: the unit should beep when you press a button.",
      },
      { type: "h2", id: "filter", text: "2. Look at the air filter" },
      {
        type: "p",
        text: "A filter matted with dust is the single most frequent cause of weak cooling in Dubai. It starves the coil of air, and in bad cases the coil freezes into a block of ice.",
      },
      {
        type: "p",
        text: "On a wall-mounted split unit, switch it off, lift the front panel and slide the mesh filters out. If you cannot see light through them, rinse them under a tap, let them dry completely and put them back. Follow the manufacturer's manual for your model. On a ducted system the filter is usually behind the return air grille in the ceiling.",
      },
      { type: "h2", id: "vents", text: "3. Make sure air can get in and out" },
      {
        type: "p",
        text: "Check that supply vents are open and not blocked by furniture or curtains. Check that the return grille, the larger one that draws air in, is clear as well. A system cannot cool a room it cannot circulate air through.",
      },
      { type: "h2", id: "outdoor", text: "4. Look at the outdoor unit" },
      {
        type: "p",
        text: "If you can see the outdoor unit safely from a balcony or window, look and listen. The fan on top or at the front should be spinning, and you should hear the compressor humming. Clear away anything stacked against it, such as boxes, laundry racks or plants. It needs open space around it to get rid of heat.",
      },
      {
        type: "callout",
        title: "Look, do not touch",
        text: "Do not remove covers or put your hands near the fan. If the fan is not turning or the unit is silent, that is useful information for the technician. It is not something to investigate further yourself.",
      },
      { type: "h2", id: "ice", text: "5. Check for ice" },
      {
        type: "p",
        text: "Look at the copper pipes where they enter the indoor unit, and at the coil behind the filters. If you see frost or ice, switch the cooling off. Running a frozen unit can damage the compressor. Set it to Fan only, or switch it off altogether, and let it thaw for a few hours with towels underneath.",
      },
      {
        type: "p",
        text: "If the filter was badly clogged, cleaning it may be the whole cure. If ice comes back with a clean filter, the usual causes are a dirty coil or low refrigerant, and both need a technician.",
      },
      { type: "h2", id: "breaker", text: "6. Check the breaker, once" },
      {
        type: "p",
        text: "Many systems have separate breakers for the indoor and outdoor units. If the outdoor breaker has tripped, the indoor fan will keep blowing room-temperature air. Find the breaker labelled AC in your distribution board. If it has tripped, reset it once.",
      },
      {
        type: "callout",
        title: "If it trips again, leave it off",
        text: "A breaker that trips a second time is telling you there is an electrical fault. Resetting it repeatedly can burn out the compressor or overheat the wiring. Leave it off and call a technician.",
      },
      { type: "h2", id: "when-to-call", text: "When to stop checking and call" },
      { type: "p", text: "Switch the unit off and get help straight away if you notice any of these:" },
      {
        type: "ul",
        items: [
          "A burning smell, smoke or scorch marks",
          "A breaker that trips more than once",
          "Water running down the wall or through the ceiling",
          "Hissing or bubbling from the unit or pipes",
          "Loud grinding, banging or screeching",
          "Ice that returns after you have cleaned the filter",
        ],
      },
      {
        type: "p",
        text: "When you call, mention which checks you have done and what you found. It helps the technician arrive with a good idea of where to look.",
      },
    ],
  },
  {
    slug: "why-is-my-ac-leaking-water",
    title: "Why is my AC leaking water? Causes and what to do first",
    description:
      "Where the water in an air conditioner comes from, the five usual reasons it ends up on your floor, and what to do before the technician arrives.",
    category: "Air Conditioning Problems",
    status: "draft",
    publishedAt: "2026-11-12",
    author: AUTHOR,
    relatedServices: ["ac-repair-dubai", "ac-servicing-dubai", "ac-coil-cleaning-dubai"],
    blocks: [
      {
        type: "p",
        text: "Water dripping from an air conditioner looks alarming, but it is one of the more straightforward faults to understand. An AC is supposed to produce water. The fault is that the water is going to the wrong place.",
      },
      { type: "h2", id: "where-water-comes-from", text: "Where the water comes from" },
      {
        type: "p",
        text: "Warm, humid air passes over the cold coil inside the indoor unit. The moisture in that air condenses on the coil, the same way water beads on a cold glass. In Dubai's humidity a single unit can pull several litres of water out of the air in a day.",
      },
      {
        type: "p",
        text: "That water drips into a tray under the coil and flows out through a drain pipe, normally to a drain point or to the outside of the building. A leak means something along that route has failed.",
      },
      { type: "h2", id: "causes", text: "The five usual causes" },
      {
        type: "ol",
        items: [
          "Blocked drain line. By far the most common. Dust that gets past the filter mixes with the water and forms slime, which gradually closes the pipe. The tray fills and overflows.",
          "Frozen coil. If airflow is restricted or refrigerant is low, the coil ices over. When the unit stops, the ice melts all at once and overwhelms the tray.",
          "Cracked or rusted drain tray. Plastic trays crack with age and metal trays rust through, particularly in older fan coil units.",
          "Drain pipe without enough slope. Water needs a continuous fall to drain. If the pipe sags or runs uphill at any point, water sits in it and backs up. This is an installation fault and tends to show up in the first year or two.",
          "Unit not level. A wall unit that tilts away from its drain outlet will spill from the opposite end.",
        ],
      },
      { type: "h2", id: "what-to-do", text: "What to do straight away" },
      {
        type: "ol",
        items: [
          "Switch the AC off. No cooling means no new condensation, so the leak stops growing.",
          "Protect what is below. Put down a bucket and towels, and move electronics and furniture away.",
          "Keep water away from electrics. If water is running near a socket, a light fitting or the unit's own wiring, switch off the breaker for that circuit.",
          "Check the filter. If it is clogged, clean it. A blocked filter is often what caused the coil to freeze.",
          "Take a photo. A picture of where the water is coming from helps the technician.",
        ],
      },
      {
        type: "callout",
        title: "Ceiling leaks need prompt attention",
        text: "In apartments with ducted systems or fan coil units, the leak is above the false ceiling. By the time you see a stain, the ceiling board is already wet. Left alone it will sag, grow mould and eventually come down.",
      },
      { type: "h2", id: "the-fix", text: "How it gets fixed" },
      {
        type: "p",
        text: "For a blocked drain, the technician clears and flushes the full length of the pipe and cleans the tray. Clearing only the first section is why some leaks come back every few months.",
      },
      {
        type: "p",
        text: "For a frozen coil, the cause of the freezing has to be dealt with: cleaning the filter and coil, or finding and repairing a refrigerant leak. A cracked tray is replaced. A badly sloped pipe is re-run.",
      },
      { type: "h2", id: "prevention", text: "How to prevent it" },
      {
        type: "ul",
        items: [
          "Clean the filters regularly, monthly in dusty locations",
          "Have the unit serviced twice a year, with the drain line flushed each time",
          "Do not ignore a musty smell. It usually means standing water in the tray",
          "If you leave your home empty in summer, have the drains checked before you go",
        ],
      },
    ],
  },
  {
    slug: "how-often-to-service-ac-in-dubai",
    title: "How often should you service your AC in Dubai?",
    description:
      "Why air conditioners in Dubai need servicing more often than the manual suggests, what affects the interval, and the best months to book.",
    category: "Dubai AC Advice",
    status: "draft",
    publishedAt: "2026-11-12",
    author: AUTHOR,
    relatedServices: ["ac-servicing-dubai", "ac-maintenance-dubai", "ac-coil-cleaning-dubai"],
    blocks: [
      {
        type: "p",
        text: "The short answer for most homes in Dubai is twice a year. The longer answer depends on where you live, how much the AC runs and who is in the house.",
      },
      { type: "h2", id: "why-dubai-is-different", text: "Why Dubai is harder on air conditioners" },
      {
        type: "p",
        text: "Manufacturers' service intervals are written for average conditions. Dubai is not average in three ways.",
      },
      {
        type: "ul",
        items: [
          "Running hours. In a temperate climate an AC might run three months a year. Here it runs for eight or more, and through summer it barely stops.",
          "Dust. Fine sand is in the air all year and far worse after a shamal. It passes through gaps and loads up filters and coils quickly.",
          "Humidity. From July to September coastal humidity is very high. The AC removes that moisture, which keeps the coil and drain tray wet. That is ideal for mould and for drain blockages.",
        ],
      },
      { type: "h2", id: "the-baseline", text: "A sensible baseline" },
      {
        type: "p",
        text: "For a typical apartment or villa in daily use, plan for a full service twice a year.",
      },
      {
        type: "ul",
        items: [
          "Before summer, between March and May. This is the important one. The unit is cleaned and checked before its hardest months, and any weak part is found while it is still easy to book a repair.",
          "After summer, in October or November. Clears out what the peak season left behind and checks for wear.",
        ],
      },
      {
        type: "p",
        text: "Between services, clean the filters yourself every four to six weeks. It takes ten minutes and makes more difference than anything else an owner can do.",
      },
      { type: "h2", id: "when-more-often", text: "When to service more often" },
      {
        type: "ul",
        items: [
          "You live next to a construction site, a main road or open sand",
          "You are close to the sea, where salt attacks the outdoor coil",
          "The AC runs around the clock, as in shops, restaurants and server rooms",
          "There are pets in the home, because hair and dander clog filters fast",
          "Someone in the household has asthma or allergies",
          "The system is more than eight to ten years old",
        ],
      },
      {
        type: "p",
        text: "In these cases a visit every three to four months is reasonable. For business premises, an annual maintenance contract with scheduled visits is usually the simplest arrangement.",
      },
      { type: "h2", id: "what-happens-if-you-skip", text: "What happens if you skip it" },
      {
        type: "p",
        text: "Nothing dramatic, at first. The unit gets a little less efficient each month. It runs longer to reach temperature, and the electricity bill edges up. Then one of three things tends to happen: the drain blocks and it leaks, the coil ices over and it stops cooling, or a part that has been straining finally fails, usually during the hottest week of the year when every technician in the city is busy.",
      },
      { type: "h2", id: "what-a-service-should-include", text: "What a proper service includes" },
      {
        type: "p",
        text: "A service is more than rinsing the filters. Expect the indoor coil and blower to be cleaned, the drain tray and drain line flushed, the outdoor coil washed, and the refrigerant pressure and electrical connections checked. If a visit takes ten minutes per unit, it was not a service.",
      },
    ],
  },
  {
    slug: "ac-gas-refilling-when-is-it-needed",
    title: "AC gas refilling: when it is needed and when it is not",
    description:
      "Refrigerant does not run out. A plain explanation of what low gas really means, how it is confirmed, and the questions to ask before you pay for a top-up.",
    category: "HVAC Guides",
    status: "draft",
    publishedAt: "2026-11-12",
    author: AUTHOR,
    relatedServices: ["ac-gas-refilling-dubai", "ac-repair-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "\"It needs gas\" is probably the most common diagnosis in air conditioning, and the most often wrong. Understanding one fact about refrigerant will help you judge whether a refill is really what your AC needs.",
      },
      { type: "h2", id: "refrigerant-is-not-fuel", text: "Refrigerant is not fuel" },
      {
        type: "p",
        text: "The gas in an air conditioner is not burned or consumed. It travels around a sealed circuit of copper pipe, absorbing heat indoors and releasing it outdoors, over and over. The amount put in at installation should still be there fifteen years later.",
      },
      {
        type: "p",
        text: "So an AC never needs gas as routine upkeep. If the level is low, the gas has escaped, and that means there is a leak.",
      },
      { type: "h2", id: "what-low-gas-looks-like", text: "What low gas looks like" },
      {
        type: "ul",
        items: [
          "The air is cool but not cold, and the room never reaches the set temperature",
          "The unit runs almost continuously",
          "Ice forms on the thin copper pipe or on the indoor coil",
          "You hear hissing or gurgling near the indoor unit",
          "There are oily marks on pipe joints",
        ],
      },
      {
        type: "callout",
        title: "The same symptoms have other causes",
        text: "A clogged filter, a dirty coil or a failing fan motor will produce weak cooling and ice in exactly the same way. That is why symptoms alone are not a diagnosis.",
      },
      { type: "h2", id: "how-it-is-confirmed", text: "How low gas is confirmed" },
      {
        type: "p",
        text: "A technician connects a set of gauges to the service ports on the outdoor unit and reads the operating pressures with the system running. Those readings, compared with the outdoor temperature and the type of refrigerant, show whether the charge is correct.",
      },
      {
        type: "p",
        text: "If nobody has connected gauges, nobody knows whether your AC is low on gas.",
      },
      { type: "h2", id: "finding-the-leak", text: "Finding the leak" },
      {
        type: "p",
        text: "Leaks most often occur at the flare joints where the pipes connect to the units, at the service valves, and in the coils themselves, where corrosion eats pinholes through the copper. A technician checks these with leak detection equipment or soap solution, and looks for the oil stains that refrigerant leaves behind.",
      },
      {
        type: "p",
        text: "A leaking joint can be remade. A leaking valve can be replaced. A coil with many pinholes generally cannot be repaired economically, and that is when replacing the coil or the unit comes up.",
      },
      { type: "h2", id: "top-up-or-repair", text: "Top-up or repair?" },
      {
        type: "p",
        text: "Refilling without fixing the leak does work, for a while. If the leak is very slow, a top-up might last a season or more. If it is not, you will be back where you started within weeks, having paid for gas that is now in the atmosphere.",
      },
      {
        type: "p",
        text: "Running low on refrigerant is also hard on the compressor, which depends on the returning gas to stay cool. Repeated low-gas running shortens its life, and the compressor is the most expensive part in the system.",
      },
      { type: "h2", id: "questions-to-ask", text: "Questions to ask before a refill" },
      {
        type: "ol",
        items: [
          "What pressure did you measure, and what should it be?",
          "Where is the leak?",
          "Can it be repaired, and what does that involve?",
          "Which refrigerant does my unit use? It is printed on the outdoor unit's label, usually R410A, R32 or, on older units, R22.",
          "What happens if I only top up?",
        ],
      },
      { type: "h2", id: "a-note-on-safety", text: "A note on safety" },
      {
        type: "p",
        text: "Refrigerant is stored under high pressure and is cold enough to cause frostbite on bare skin. Different types must never be mixed. Charging a system is a job for a trained technician with the correct equipment, and should not be attempted at home.",
      },
      {
        type: "p",
        text: "One more point for apartment residents: if your building uses district cooling and your AC is a fan coil unit fed by chilled water, there is no refrigerant in your apartment at all. It can never need gas.",
      },
    ],
  },
];

export const showDrafts = process.env.SHOW_DRAFT_POSTS === "true";

/** Posts visitors can see: published ones, plus drafts when preview is switched on. */
export const visiblePosts: Post[] = allPosts
  .filter((p) => p.status === "published" || showDrafts)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

/** Posts that may be indexed and listed in the sitemap. */
export const publishedPosts: Post[] = allPosts.filter((p) => p.status === "published");

export const getPost = (slug: string) => visiblePosts.find((p) => p.slug === slug);

export const postPath = (slug: string) => `/blog/${slug}`;

export function readingMinutes(post: Post) {
  const words = post.blocks
    .flatMap((b) => {
      if (b.type === "ul" || b.type === "ol") return b.items;
      if (b.type === "callout") return [b.title, b.text];
      return [b.text];
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export const postHeadings = (post: Post) =>
  post.blocks.filter((b): b is Extract<PostBlock, { type: "h2" }> => b.type === "h2");

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
