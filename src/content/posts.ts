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

  // --- 15 new draft articles added below (batch merge) ---

  {
    slug: "ac-freezing-up-causes-and-fixes",
    title: "AC Freezing Up in Dubai: Causes, Warning Signs and Solutions",
    description:
      "Why air conditioners ice up even in Dubai's heat, the usual causes, and what to do safely before a technician looks at it.",
    category: "Air Conditioning Problems",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-repair-dubai", "ac-coil-cleaning-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "Ice is not something most people expect to find on an air conditioner in a city where it rarely drops below 20°C. Yet a frozen coil or an icy copper pipe is one of the more common faults we see, in villas and apartments alike. It looks dramatic, and people sometimes assume it means the unit is working extra hard. The opposite is true. A freezing AC is a system that has stopped working properly, and running it in that state can turn a simple fix into an expensive one.",
      },
      {
        type: "p",
        text: "This article explains why an AC freezes, what to check yourself, and when to switch it off and leave it for a technician.",
      },
      { type: "h2", id: "why-it-happens", text: "Why an air conditioner freezes" },
      {
        type: "p",
        text: "The indoor coil runs cold on purpose. Room air passes over it, gives up its heat, and that heat is carried outside. For this to work, two things have to be balanced: enough warm air has to keep flowing across the coil, and the coil has to be receiving the right amount of refrigerant at the right pressure. When either side of that balance breaks down, the coil's surface temperature drops below freezing. Moisture in the air then turns to frost instead of condensing into water, and the frost builds into solid ice over a few hours of running.",
      },
      {
        type: "p",
        text: "Once ice forms, it makes its own problem worse. Ice insulates the coil just as effectively as dust does, so the system cools even less, pulls in less warm air, and the ice keeps spreading.",
      },
      {
        type: "p",
        text: "It is worth knowing that freezing is almost always an indoor coil problem. The outdoor unit, sitting in Dubai's heat, essentially never freezes on its own; if you see frost outdoors it has usually dripped or blown there from elsewhere, or the unit has a different fault entirely. Keep your attention on the indoor coil, the thin copper pipe entering the indoor unit, and the drain tray underneath it, since that is where the actual freezing happens and where the evidence of it will show up first.",
      },
      { type: "h2", id: "airflow", text: "Restricted airflow is the most common cause" },
      {
        type: "p",
        text: "In the great majority of freeze-ups we are called out for, the root cause is simply that not enough air is reaching the coil. A few things cause that.",
      },
      {
        type: "ul",
        items: [
          "A filter clogged with dust, which is the single most common cause in Dubai homes",
          "A blower wheel caked with dust and grime behind the filter, which a filter clean alone will not fix",
          "Supply vents blocked by furniture, curtains or closed doors",
          "A return air grille that is partly covered or has not been cleaned in a long time",
          "A fan motor running slowly because a bearing is wearing out",
        ],
      },
      { type: "h2", id: "refrigerant", text: "Low refrigerant is the other main cause" },
      {
        type: "p",
        text: "If the refrigerant charge has dropped because of a leak, the pressure inside the coil falls. Lower pressure means a lower boiling point for the refrigerant, and the coil runs colder than it is designed to. Combined with normal humidity in the room air, that is enough to freeze the coil even with a clean filter and good airflow. This is why a technician checks pressure with gauges rather than guessing from the ice alone: a dirty filter and a refrigerant leak produce very similar symptoms, but need completely different repairs.",
      },
      { type: "h2", id: "other-causes", text: "Other causes worth knowing about" },
      {
        type: "ul",
        items: [
          "A thermostat sensor that reads the wrong temperature, so the system keeps calling for cooling long after the room is already cold",
          "A stuck or faulty valve in chilled-water fan coil units, which keeps cold water flowing even when cooling is not needed",
          "Closed or badly balanced zone dampers in ducted systems, which starve part of the system of airflow while overcooling another part",
          "Running the system continuously at a very low set temperature in a small, well-insulated room with little air movement",
        ],
      },
      { type: "h2", id: "warning-signs", text: "Warning signs to watch for" },
      {
        type: "p",
        text: "Catching the problem early, before thick ice forms, makes the eventual fix simpler. Look out for:",
      },
      {
        type: "ul",
        items: [
          "Frost on the thin copper pipe where it enters the indoor unit",
          "A block of ice visible on the coil behind the filter",
          "Cooling that has gradually weakened over days or weeks",
          "A hissing sound, which can point to refrigerant escaping",
          "Water appearing on the floor once the unit is switched off, as the ice melts and overwhelms the drain tray",
        ],
      },
      {
        type: "callout",
        title: "Switch off, do not chip at the ice",
        text: "Never try to scrape or chip ice off a coil. The fins behind it are thin aluminium and bend permanently under light pressure, which makes the airflow problem worse, not better. Switch the unit off and let the ice melt on its own.",
      },
      { type: "h2", id: "what-to-do", text: "What to do when you see ice" },
      {
        type: "ol",
        items: [
          "Switch the AC off completely, not just to Fan mode. Running the compressor while the coil is frozen is hard on it.",
          "Put towels or a bucket under the indoor unit, because the ice will melt and that water has to go somewhere.",
          "Leave it switched off for several hours, or overnight for a badly iced unit, so the thaw is complete.",
          "Check and clean the filter once the unit is off and safe to handle, following the manufacturer's instructions for your model.",
          "Switch it back on and watch it. If cooling is normal and no new frost appears within a day, a dirty filter was likely the whole story.",
          "If ice comes back with a clean filter, or if you are not confident doing any of the above, call a technician rather than repeating the cycle.",
        ],
      },
      { type: "h2", id: "getting-it-fixed", text: "How a technician resolves it" },
      {
        type: "p",
        text: "A proper diagnosis starts with the coil itself: how much ice there is, where it sits, and what the filter and blower look like once the unit is open. From there the technician checks airflow through the system and measures refrigerant pressure with gauges. If airflow is the cause, cleaning the filter, coil and blower usually restores normal cooling. If the pressure reading is low, the leak has to be found and repaired before refrigerant is topped up, otherwise the ice will simply return once the new gas has leaked away. In ducted and chilled-water systems, the technician also checks dampers, valves and the thermostat sensor, since any one of these can be the actual cause behind what looks like a straightforward airflow problem.",
      },
      { type: "h2", id: "prevention", text: "Preventing it from happening again" },
      {
        type: "ul",
        items: [
          "Clean or rinse filters every few weeks, more often in a dusty location",
          "Keep supply and return vents clear of furniture and curtains",
          "Have the system serviced twice a year, so the coil and blower are cleaned before dust builds up enough to restrict airflow",
          "Do not run the system at the coldest setting continuously in a small room with the door and windows shut and little air movement",
          "If the unit has frozen once and the cause was not clearly a dirty filter, have the refrigerant pressure checked rather than waiting for it to happen again",
        ],
      },
      {
        type: "p",
        text: "A frozen AC is almost always telling you something specific about airflow or refrigerant, not just that it is overworked. Reading the signs early, and switching off rather than pushing through, is what keeps a freeze-up a minor repair instead of a damaged compressor.",
      },
      { type: "h2", id: "ducted-and-chilled-water-units", text: "Freezing in ducted and chilled-water systems" },
      {
        type: "p",
        text: "The same airflow principle applies in ducted systems, but the cause is often harder to see because the coil sits above a false ceiling rather than behind a visible filter panel. A return grille partly blocked by furniture, a duct run crushed or kinked during a renovation, or a filter that nobody remembers to check because it is out of sight, can all starve a ducted coil of air in exactly the way a dirty split filter does. In apartments on district cooling, a fan coil unit can also ice up if its valve actuator sticks open and keeps chilled water flowing through the coil continuously, even once the room has reached temperature. Because these faults sit above the ceiling or behind the apartment's control system, they are jobs for a technician from the start rather than something to check yourself.",
      },
    ],
  },
  {
    slug: "reduce-ac-electricity-bill-dubai",
    title: "How to Reduce Your AC Electricity Bill in Dubai",
    description:
      "Where AC electricity use actually goes in a Dubai home, and the changes to settings, habits and upkeep that make the biggest difference.",
    category: "Dubai AC Advice",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-maintenance-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "Air conditioning is the largest single item on most electricity bills in Dubai, often by a wide margin. That is simply the climate: for several months of the year, cooling runs for most of the day and night, and it is a genuinely heavy electrical load compared with lighting or appliances. There is no way to run AC in Dubai for free. There is, though, a real difference between a system working efficiently and one quietly wasting power, and that difference is usually visible on the bill within a month or two of fixing it.",
      },
      {
        type: "p",
        text: "This article looks at where the electricity actually goes and what tends to move the number, rather than promising a fixed percentage saving that depends on too many things to state in general.",
      },
      { type: "h2", id: "why-ac-dominates-the-bill", text: "Why AC dominates the bill" },
      {
        type: "p",
        text: "A compressor is a motor working against a load, and the hotter it is outside, the harder it has to work to move heat from inside to outside. Running hours matter as much as the unit's size: an AC that runs sixteen hours a day through summer uses far more electricity than the same unit running for three hours a day in a milder climate. None of that changes by adjusting habits. What does change is how efficiently the system converts that electricity into cooling, and that part is largely in your control.",
      },
      { type: "h2", id: "humidity-role", text: "Humidity makes the job harder than the temperature alone suggests" },
      {
        type: "p",
        text: "Dubai's heat gets most of the attention, but humidity is doing a lot of the work behind a high electricity bill, particularly from around July to September. An AC does not just lower the temperature of room air; it also has to pull moisture out of it, and removing moisture takes real energy on top of whatever it takes to cool the air itself. On a humid day the system can run for a long time without the thermostat moving much, simply because it is dealing with moisture as well as heat. This is also why a system that has been sized or maintained to cool a room quickly, without running long enough to also dehumidify it properly, can leave a room feeling cool but damp, which often leads people to set the thermostat even lower in an attempt to feel more comfortable, using more electricity for a problem that was never really about temperature.",
      },
      { type: "h2", id: "temperature-settings", text: "Temperature settings make a real difference" },
      {
        type: "p",
        text: "Each degree the thermostat is set lower generally means more running time and more electricity used, because the compressor has to work harder and longer to reach and hold a colder target. A setting around 23 to 24°C is comfortable for most people and considerably easier on the system than 18°C. Letting the temperature rise a degree or two while a room is empty, rather than holding it icy cold all day, also adds up over a billing cycle.",
      },
      {
        type: "p",
        text: "Avoid switching the unit off completely for long stretches and then running it hard to cool a hot room from scratch. In most homes it is more efficient to let a smart or programmable thermostat hold a slightly higher temperature while you are out, rather than turning the whole system off and back on.",
      },
      { type: "h2", id: "maintenance-and-cleaning", text: "A dirty system uses more electricity for the same result" },
      {
        type: "p",
        text: "This is the factor people underestimate most. A clogged filter, a dusty coil or a blocked drain line do not stop an AC from running; they make it run longer and harder to deliver the same cooling. The compressor strains against restricted airflow, the coil cannot absorb or release heat properly, and the unit ends up using noticeably more electricity to hold the same room temperature it once reached easily.",
      },
      {
        type: "ul",
        items: [
          "Clean or rinse filters every few weeks, more often if the home is dusty or has pets",
          "Have the system serviced before summer so the coils, blower and drain line are clean going into the hottest months",
          "Keep the outdoor unit clear of boxes, plants or anything else blocking airflow around it, so it can release heat properly",
          "Address a refrigerant leak rather than living with weak cooling, since a low-gas system has to run far longer for the same result",
        ],
      },
      { type: "h2", id: "insulation-and-sun", text: "Keeping heat out helps the AC do less work" },
      {
        type: "p",
        text: "Every degree of heat that gets into a room before the AC deals with it is a degree the AC then has to remove. Closing curtains or blinds on the sun-facing side of a home during the hottest hours keeps a surprising amount of heat out before it ever reaches the air. Checking that door and window seals are not letting in warm outside air, and that gaps around AC pipework entering the wall are sealed, reduces the load the system is fighting against. None of this replaces the AC, but it reduces how hard the AC has to work.",
      },
      { type: "h2", id: "usage-habits", text: "Everyday habits that add up" },
      {
        type: "ul",
        items: [
          "Close doors to rooms that are not being cooled, so the system is not conditioning empty space",
          "Use ceiling or standing fans alongside the AC; moving air feels cooler at the same temperature, which lets you set the thermostat a little higher",
          "Avoid running the oven or a lot of hot water use during the hottest part of the day if it can be helped, since that heat and humidity work against the AC",
          "Turn off AC units in rooms that will stay empty for long periods, such as a spare bedroom, rather than cooling the whole home to the same setting",
        ],
      },
      { type: "h2", id: "when-the-bill-stays-high", text: "When the bill stays high despite all this" },
      {
        type: "p",
        text: "If filters are clean, the system has been serviced, and the bill is still noticeably higher than it should be for the size of the home, a few possibilities are worth checking with a technician. The unit may be undersized or oversized for the space, which affects how efficiently it runs regardless of upkeep. An older compressor loses efficiency over time even when well maintained. A refrigerant leak that has not yet produced obvious symptoms can still be quietly forcing the compressor to run longer than it should. And in a home with several units, one unit running constantly while others barely switch on can point to an airflow or balance problem specific to that one system.",
      },
      {
        type: "p",
        text: "We do not publish a fixed figure for how much a service or a repair will reduce a bill, because it depends on what was wrong beforehand and how the home is used. What we can say is that a system that is clean, correctly charged with refrigerant and set to a sensible temperature will almost always cost less to run than the same system left dirty and undercharged, and the difference tends to show up within a billing cycle or two.",
      },
      { type: "h2", id: "sizing-and-age", text: "The size and age of the unit itself" },
      {
        type: "p",
        text: "Two factors sit slightly outside day-to-day habits but affect the bill just as much. The first is whether the unit was ever correctly sized for the room in the first place. An undersized AC runs almost continuously trying to reach a temperature it can never quite hold, while an oversized one switches on and off rapidly without running long enough to properly dehumidify the room, which can leave it feeling clammy even though the AC is cycling often. The second is simple age: compressors lose some efficiency over the years even when they are kept clean and well maintained, so a ten or fifteen-year-old unit will generally use more electricity for the same cooling than a newer one in equally good condition. Neither of these is something a cleaning routine fixes, and both are worth asking a technician about if the bill still feels high after everything else has been checked.",
      },
      { type: "h2", id: "tracking-what-changes", text: "Tracking whether a change actually helped" },
      {
        type: "p",
        text: "It is easy to make several changes at once, such as cleaning filters, adjusting the thermostat and closing curtains in the same week, and then have no idea which one made the difference. If the bill is something you want to actually bring down rather than just hope improves, it helps to change one thing at a time and compare a few weeks of use against a similar period beforehand, ideally with similar weather. Keeping a rough note of the thermostat setting and running hours alongside the monthly bill makes it much easier to see which habits are worth keeping and which made no real difference, rather than relying on a general impression months later.",
      },
    ],
  },
  {
    slug: "how-to-clean-ac-filters-properly",
    title: "How to Clean an AC Filter the Right Way (and Why It Matters)",
    description:
      "A step-by-step guide to cleaning split and ducted AC filters properly, how often to do it, and the signs a filter needs more than a rinse.",
    category: "AC Maintenance",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-servicing-dubai", "ac-maintenance-dubai"],
    blocks: [
      {
        type: "p",
        text: "Of everything an AC owner can do themselves, cleaning the filter makes the biggest difference for the least effort. It takes about ten minutes, needs no tools, and in Dubai's dust it is the single most useful habit between professional services. Done badly, though, it can do more harm than good: a filter that goes back in wet, bent or in the wrong orientation can cause problems of its own. Here is how to do it properly.",
      },
      { type: "h2", id: "why-filters-matter", text: "What the filter is actually protecting" },
      {
        type: "p",
        text: "The filter sits between the room air and the coil, and its job is to stop dust, hair and lint from reaching the coil and blower. Once those parts are coated, cooling drops and electricity use climbs, and in bad cases airflow is restricted enough that the coil freezes. A filter is a cheap, washable barrier that protects two expensive components. Letting it clog defeats the purpose of having it there at all.",
      },
      { type: "h2", id: "what-you-need", text: "What you need before you start" },
      {
        type: "p",
        text: "Nothing specialised. A sink, bath or hose with running water, a soft brush or vacuum cleaner with a brush attachment for loosening dry dust first, and a shaded, dry spot to leave the filter afterwards. A mild dish soap is useful if the filter has a greasy coating rather than just dust, which is common above a hob or in a unit near a car park. You do not need a ladder for a wall-mounted split unit, since the filter panel is designed to be reached from the floor, but you will need one for most ducted return grilles, and that changes how you should approach the job, covered further down.",
      },
      { type: "h2", id: "how-often", text: "How often to clean it" },
      {
        type: "p",
        text: "Every four to six weeks is a sensible rule of thumb for most homes in Dubai, and more often than that in a few situations: a home near a construction site or a busy road, a household with pets, or a unit that runs almost continuously through summer. If you lift the filter up to the light and cannot see through the mesh, it has gone too long already.",
      },
      { type: "h2", id: "split-unit-filters", text: "Cleaning a wall-mounted split unit filter" },
      {
        type: "p",
        text: "Most split units in Dubai homes have the same basic design, though it is worth checking your manufacturer's manual for anything specific to your model before starting.",
      },
      {
        type: "ol",
        items: [
          "Switch the unit off at the remote or wall switch before touching it.",
          "Lift the front panel upward until it clicks or stops, and locate the filter frames, usually one on each side behind the panel.",
          "Slide or lift the filters out gently. They are plastic mesh and the frame is thin, so avoid forcing them.",
          "Vacuum off the loose dust first if you have a vacuum cleaner with a brush attachment; it saves the sink or hose a lot of grey water.",
          "Rinse the filter under running water from the clean side through to the dirty side, so trapped dust is pushed out rather than further in.",
          "For a greasy build-up, such as in a kitchen, a mild dish soap in lukewarm water works better than water alone. Rinse thoroughly afterwards.",
          "Shake off excess water and leave the filter to air dry fully in a shaded spot. Do not use a hairdryer or place it in direct sun, both of which can warp the plastic frame.",
          "Once completely dry, slide the filters back into their original slots and close the front panel until it clicks shut.",
        ],
      },
      {
        type: "callout",
        title: "Never refit a damp filter",
        text: "A filter that goes back in still wet becomes a breeding ground for mould inside the unit within days, and you will smell it the next time the AC starts. Wait until it is bone dry, even if that means running the AC for a day without it in dusty conditions, which is still safer than sealing in moisture.",
      },
      { type: "h2", id: "panel-filters", text: "A note on built-in panel filters versus add-on filters" },
      {
        type: "p",
        text: "The washable mesh filter built into a split unit is different from the thin paper or fibre filters sometimes fitted inside central air handling units or added as an extra layer in some ducted systems. A built-in mesh filter is designed to be cleaned and reused for years, as described above. A disposable paper or fibre filter, where one is fitted, is not meant to be washed; it is designed to be replaced on a schedule, and washing it tends to damage the fibres and reduce how well it traps dust rather than restoring it. If you are not sure which type your system has, check with whoever last serviced it, since treating a disposable filter like a washable one, or vice versa, wastes effort either way.",
      },
      { type: "h2", id: "ducted-unit-filters", text: "Ducted and central systems are slightly different" },
      {
        type: "p",
        text: "In a villa or apartment with ceiling vents, the filter is usually behind the return air grille, the larger grille that pulls air in rather than the smaller ones that supply it. These grilles are often screwed or clipped into the ceiling. If you are not confident opening it or cannot reach it safely, this is a reasonable task to leave for a maintenance visit rather than working on a ladder near a ceiling fitting. If you can access it safely, the cleaning process for the filter itself is the same: remove, vacuum off loose dust, wash, dry fully and refit.",
      },
      { type: "h2", id: "signs-filter-needs-replacing", text: "When cleaning is not enough" },
      {
        type: "p",
        text: "A washable mesh filter can usually be cleaned and reused for years, but it is not indestructible. Replace it rather than clean it again if you notice:",
      },
      {
        type: "ul",
        items: [
          "Tears or holes in the mesh, which let dust straight through to the coil",
          "A frame that has cracked or warped and no longer sits flush in its slot",
          "Mesh that stays grey and matted-looking even after a thorough wash, suggesting it has reached the end of its life",
          "A musty smell from the filter itself that washing does not remove",
        ],
      },
      { type: "h2", id: "what-filter-cleaning-doesnt-fix", text: "What filter cleaning will not fix" },
      {
        type: "p",
        text: "A clean filter restores airflow that a dirty one was blocking, but it does not clean the coil, the blower wheel or the drain line, all of which collect their own dust and grime over time behind the filter. If cooling is still weak after a proper filter clean, or if you notice a musty smell that a clean filter did not solve, the coil and drain line likely need attention as well, which is the kind of work a full service covers.",
      },
      {
        type: "p",
        text: "Between those services, a filter cleaned regularly and refitted properly is the simplest thing an owner can do to keep an AC running the way it should, and it costs nothing but ten minutes.",
      },
      { type: "h2", id: "common-mistakes", text: "A few common mistakes worth avoiding" },
      {
        type: "ul",
        items: [
          "Using very hot water or a pressure washer on the mesh, which can warp the plastic frame or tear the fine mesh itself",
          "Scrubbing hard with a stiff brush, which stretches the mesh out of shape and lets more dust through than before",
          "Forcing a filter back in at an angle because it does not seem to be sliding easily; check the frame is aligned with its guide rails rather than pushing harder",
          "Cleaning only one of a pair of filters on a split unit and assuming the job is done, when most units have two side by side behind the same panel",
          "Leaving the front panel open or loosely closed afterwards, which lets unfiltered air bypass the filter entirely until it clicks fully shut",
        ],
      },
      {
        type: "p",
        text: "None of these mistakes are serious on their own, but together they explain why some households clean their filters regularly and still notice dust or weak cooling: the filter was cleaned, but not quite in a way that restored it fully. Taking the extra minute to check the frame is undamaged, both filters are clean, and the panel is properly closed makes the whole routine worth doing.",
      },
    ],
  },
  {
    slug: "signs-ac-needs-professional-attention",
    title: "Seven Signs Your AC Needs Professional Attention, Not Just a Clean",
    description:
      "Seven signs that go beyond a dirty filter and point to a fault only a technician can diagnose, with what each one usually means.",
    category: "AC Repair Tips",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-repair-dubai", "emergency-ac-repair-dubai"],
    blocks: [
      {
        type: "p",
        text: "A lot of AC complaints are solved with a clean filter and a bit of patience. Some are not. The difference matters, because the fixes an owner can safely do themselves are limited to what is outside the unit: filters, vents, and resetting a tripped breaker once. Everything else involves electrical components or a sealed refrigerant circuit, and both need a trained technician with the right equipment. Here are seven signs that tell you a clean is not going to be enough.",
      },
      {
        type: "p",
        text: "It helps to think of these signs in two groups. Some, like a burning smell or a breaker that keeps tripping, are safety signs: the right response is to switch off and stop using the unit until it has been looked at, not to keep testing whether the problem goes away on its own. Others, like persistent weak cooling or a noise that was not there before, are performance signs: the AC is usually still safe to leave running for a short time, but the fault will not clear up by itself and tends to get more expensive the longer it continues untreated.",
      },
      { type: "h2", id: "burning-smell", text: "1. A burning smell, smoke or sparks" },
      {
        type: "p",
        text: "This is the one sign that should stop everything else you are doing. A burning smell from an AC usually means an electrical component, such as a capacitor, contactor or motor winding, is overheating or has already failed. Switch the unit off at the wall isolator immediately, do not switch it back on to see if the smell has gone, and call a technician. Left running, an electrical fault like this can damage the unit further or, in rare cases, start a fire.",
      },
      { type: "h2", id: "breaker-trips-repeatedly", text: "2. The breaker trips more than once" },
      {
        type: "p",
        text: "Resetting a tripped breaker once is a reasonable thing to try, since breakers do occasionally trip for unrelated reasons. A breaker that trips a second time after being reset is telling you there is a genuine electrical fault, such as a short in the wiring or a seized compressor drawing too much current. Repeatedly resetting it does not fix anything and can cause further damage to the compressor or wiring. Leave it off and call for an inspection.",
      },
      { type: "h2", id: "hissing-or-bubbling", text: "3. Hissing or bubbling sounds" },
      {
        type: "p",
        text: "A hissing or bubbling sound coming from the indoor unit or the pipework usually points to refrigerant escaping through a leak, sometimes at a joint and sometimes through a pinhole in the coil itself. This is not something cleaning touches, and it is not something to investigate by opening the unit yourself. It needs a pressure test with gauges and a proper leak check, which only a technician can carry out.",
      },
      { type: "h2", id: "ice-returns-after-cleaning", text: "4. Ice keeps coming back after you have cleaned the filter" },
      {
        type: "p",
        text: "If you have cleaned the filter properly, given it time to dry, and ice still forms on the coil or pipes within a week or two, the cause is something cleaning cannot reach. The usual suspects at that point are a dirty coil or blower behind the filter, or low refrigerant from a leak, and both call for a technician with gauges to tell them apart.",
      },
      { type: "h2", id: "grinding-or-screeching", text: "5. Grinding, screeching or banging noises" },
      {
        type: "p",
        text: "A healthy AC has a fairly quiet, steady hum. A new grinding or screeching noise usually means a fan motor bearing is wearing out, or something loose is catching on a moving part such as the blower wheel or fan blade. A banging noise, particularly from the outdoor unit, can point to a loose or failing compressor mount. None of these improve on their own, and running the unit while a bearing fails can turn a motor replacement into a bigger repair once it seizes completely.",
      },
      { type: "h2", id: "water-through-the-ceiling", text: "6. Water coming through the ceiling or wall" },
      {
        type: "p",
        text: "In apartments and villas with ducted or central systems, the unit and its drain tray sit above a false ceiling. By the time a stain appears, water has usually been sitting there for a while. This is a job for a technician who can access the unit above the ceiling, clear the drain line properly along its full length, and check whether the tray itself has cracked. Switch the AC off to stop the leak growing, and move anything electrical out from underneath, but leave the rest for a professional visit.",
      },
      { type: "h2", id: "weak-cooling-despite-clean-filter", text: "7. Cooling stays weak despite a clean filter and clear vents" },
      {
        type: "p",
        text: "If you have worked through the basics, filter clean, vents clear, thermostat set correctly, and the air coming out is still only mildly cool rather than cold, something inside the system needs attention. That could be a dirty coil that a filter clean alone did not reach, a refrigerant leak, a failing compressor capacitor, or an outdoor fan that has slowed down. All of these need a technician to inspect the system properly rather than guess from the symptom alone.",
      },
      { type: "h2", id: "age-as-a-factor", text: "Does the age of the unit change any of this?" },
      {
        type: "p",
        text: "Age does not change what causes these seven signs, but it does change how likely they are to appear and what tends to happen once they do. A unit that is only a year or two old showing a grinding noise or weak cooling has usually run into a single faulty part, often something that failed early rather than something that wore out slowly. An older system, particularly one past eight to ten years of continuous use in Dubai's climate, is more likely to be showing one of these signs because several components are wearing out around the same time, which is why a technician looking at an older unit will sometimes talk about whether a repair is still worthwhile compared with replacing it. Either way, the signs themselves are the same seven, and the right first step is the same too: get it looked at rather than guess.",
      },
      { type: "h2", id: "what-to-tell-the-technician", text: "What to tell the technician when you call" },
      {
        type: "p",
        text: "Whichever of these signs you are seeing, mentioning exactly what you noticed, when it started, and which basic checks you have already done helps a technician arrive with a clearer idea of where to look. It also saves time on the visit itself, since the technician can start testing the likely cause straight away instead of repeating checks you have already ruled out.",
      },
      {
        type: "ul",
        items: [
          "What the unit is doing: no cooling, weak cooling, noise, smell, leak, or a tripped breaker",
          "When it started and whether it came on suddenly or got worse gradually",
          "Whether you have already cleaned the filter, and when",
          "Whether the breaker has tripped, and how many times",
          "A photo or short video, particularly of a leak, ice, or the outdoor unit, which is often easier to describe in a picture than in words",
        ],
      },
      {
        type: "p",
        text: "None of these seven signs are things to live with for long. In Dubai's climate, a fault that is minor today tends to get worse quickly once the system is running for most of the day, and catching it early is usually the difference between a straightforward repair and a bigger one.",
      },
      { type: "h2", id: "why-diy-stops-here", text: "Why these seven stop at the technician's door" },
      {
        type: "p",
        text: "Each of the signs above involves either the sealed refrigerant circuit or an electrical component inside the unit, and both carry real risk if handled without training. Refrigerant is stored under high pressure and different types cannot be mixed, so even confirming a suspected leak properly requires gauges and knowing what to look for. Electrical faults inside an AC, from a failing capacitor to damaged wiring, sit behind a panel for a reason: diagnosing them safely means isolating power correctly and testing components with a meter, not opening a cover to look. This is also why we only describe filters, vents and a single breaker reset as things an owner can reasonably check. Everything past that point is a job worth paying for properly rather than attempting once and hoping for the best.",
      },
    ],
  },
  {
    slug: "split-ac-vs-central-ac-dubai",
    title: "Split AC or Central AC: What Dubai Homes and Offices Actually Use",
    description:
      "How split units, ducted systems and district cooling fan coil units differ, which Dubai properties tend to have each, and how upkeep differs between them.",
    category: "HVAC Guides",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-installation-dubai", "hvac-duct-cleaning-dubai"],
    blocks: [
      {
        type: "p",
        text: "Ask a handful of people in Dubai what kind of AC they have and you will get several different answers, and most of them will be describing a genuinely different system, not just a different brand. The three main types found across the city's homes, offices and towers work quite differently from each other, and knowing which one you have changes how it should be cleaned, maintained and, if it comes to that, repaired.",
      },
      { type: "h2", id: "what-is-split-ac", text: "The wall-mounted split unit" },
      {
        type: "p",
        text: "This is the AC most people picture: a rectangular indoor unit mounted high on a wall, connected by a pair of insulated copper pipes through the wall to an outdoor unit, usually sitting on a balcony, bracket or the roof. The indoor unit holds the evaporator coil and blower, which cool the room directly. The outdoor unit holds the compressor and condenser coil, which release that heat outside.",
      },
      {
        type: "p",
        text: "Split units are common in older villas, standalone buildings and smaller apartments, and are often added room by room rather than as one system for the whole property. Because each room has its own unit, one failing does not affect the others, and each can be set to a different temperature. The trade-off is that there is one indoor unit, one outdoor unit and one set of filters and coils to look after per room.",
      },
      { type: "h2", id: "what-is-ducted-central", text: "Ducted or central split systems" },
      {
        type: "p",
        text: "In larger villas and some apartments, a single indoor unit, often hidden above a false ceiling, cools several rooms through a network of ducts and ceiling vents. One return grille, usually a larger vent, pulls room air back to the unit, and supply vents in each room distribute the cooled air out. From the room, all you normally see are the ceiling vents and perhaps a wall-mounted thermostat; the unit itself, the ducts, filters and coil sit out of sight above the ceiling.",
      },
      {
        type: "p",
        text: "This arrangement gives a more even look to a home, with no indoor units on display, and one thermostat can often control several zones. It also means dust collects somewhere less visible and less often checked: inside the ductwork itself, not just at a filter you can see. That is why ducted systems benefit from occasional duct cleaning in addition to regular filter and coil cleaning, which a plain split unit does not need because it has no ducts to collect dust in.",
      },
      { type: "h2", id: "what-is-district-cooling", text: "District cooling and chilled-water fan coil units" },
      {
        type: "p",
        text: "Many towers and newer communities in Dubai are connected to district cooling: chilled water is produced at a large central plant and piped to each building, rather than every apartment having its own compressor and outdoor unit. Inside the apartment, a fan coil unit, which looks similar to a ducted indoor unit, circulates room air across a coil carrying that chilled water, and a thermostat with a valve actuator controls how much cold water flows through it.",
      },
      {
        type: "p",
        text: "The important difference for an owner is that there is no refrigerant and no outdoor compressor unit inside the apartment at all. Topics like gas refilling simply do not apply here, because there is no refrigerant circuit to refill. What can still go wrong is on the apartment side of the system: the fan coil unit's filter, coil and drain tray still need cleaning, and the valve actuator and thermostat can fail just like any other control. The chilled water supply itself is the building's responsibility, not the apartment owner's.",
      },
      { type: "h2", id: "window-and-cassette-units", text: "A few less common types worth mentioning" },
      {
        type: "p",
        text: "Two other types turn up occasionally. Window or through-wall units, where the whole unit, compressor included, sits in a single box mounted through an opening in the wall, are now uncommon in Dubai housing but still found in some older buildings and labour accommodation. Cassette units, which sit flush in a ceiling tile and blow air out in four directions, are more common in shops, offices and open-plan commercial spaces than in homes, since they suit a wider room with a central ceiling void rather than a single wall position. Both work on the same basic split-system principle as a wall-mounted unit, just packaged differently for a particular kind of space.",
      },
      { type: "h2", id: "which-is-used-where", text: "Which system you are likely to find where" },
      {
        type: "ul",
        items: [
          "Older villas and low-rise buildings: wall-mounted split units, often one or more per room, or a ducted system for the whole villa",
          "Larger modern villas: ducted central systems serving multiple rooms from one or two indoor units",
          "Older apartment buildings: split units, one per room or living area",
          "Newer towers and master-planned communities: district cooling with a fan coil unit per apartment",
          "Shops, restaurants and offices: a mix depending on the building, from split units in a small shop to ducted or chilled-water systems in a larger commercial space",
        ],
      },
      { type: "h2", id: "how-to-tell-which-you-have", text: "If you are not sure which one you have" },
      {
        type: "p",
        text: "Look at the ceiling and the walls. If you can see a rectangular unit mounted on a wall with pipes running through it to an outdoor unit, that is a split system. If the room instead has flat ceiling vents or slot diffusers and no visible indoor unit, it is ducted, with the unit hidden above the ceiling. If there is a thermostat on the wall that mentions fan speeds and a cooling valve rather than a remote control, and the building is a newer tower, it is likely a district cooling fan coil unit. Checking your tenancy contract or asking building management is also a reliable way to confirm it, since the type of system is usually specified for billing reasons even if nobody has pointed it out to you directly.",
      },
      { type: "h2", id: "maintenance-differences", text: "How upkeep differs between the three" },
      {
        type: "p",
        text: "A split unit needs its filter cleaned regularly and a full service of both the indoor and outdoor coils roughly twice a year. A ducted system needs the same, plus periodic attention to the ductwork itself and the grilles throughout the property, since dust travels further through a duct network than it does in a single room. A district cooling fan coil unit needs its filter, coil and drain tray cleaned on a similar schedule to a split unit, but has no outdoor unit to service and no refrigerant to check, which simplifies that part of the upkeep considerably.",
      },
      { type: "h2", id: "choosing-for-a-new-installation", text: "If you are choosing for a new installation" },
      {
        type: "p",
        text: "For a single room or a small flat, a split unit is usually the simplest and most flexible option, since it is independent of everything else in the building. For a larger villa being built or renovated from scratch, a ducted system gives an even look with no visible indoor units and central control, at the cost of ducts that need their own attention over time. For an apartment in a building already connected to district cooling, the fan coil unit that comes with it is generally the only sensible option, since it is tied to the building's chilled water supply rather than a personal choice. Whichever applies to your property, the practical question worth asking before installation is less about brand and more about capacity, duct routing and outdoor unit placement, since those decisions affect how well the system performs for years afterward.",
      },
      { type: "h2", id: "what-this-means-for-repairs", text: "What the difference means when something goes wrong" },
      {
        type: "p",
        text: "Knowing which type of system you have is genuinely useful information to have ready before you call anyone, not just background knowledge. A split unit fault is contained to that one indoor and outdoor pair, so a technician knows roughly where to look from the description alone. A ducted system fault could be in the single shared indoor unit, in the ductwork itself, or in one zone's damper or grille, so being able to say which rooms are affected and which are not narrows things down considerably. A district cooling fan coil fault is almost always inside the apartment, at the unit, the thermostat or the valve, since the chilled water supply itself is maintained by the building rather than called out to directly by residents. Telling a technician which of the three you have, and a rough description of where in the home the problem is showing up, is often the single most useful thing you can say on the phone before anyone has even arrived.",
      },
    ],
  },

  {
    slug: "why-is-my-ac-making-noise",
    title: "Why Is My AC Making a Strange Noise? What the Sounds Mean",
    description:
      "A plain guide to the clicks, buzzes, hisses and bangs an air conditioner can make, what usually causes each one, and which sounds mean switch it off now.",
    category: "Air Conditioning Problems",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-repair-dubai", "emergency-ac-repair-dubai"],
    blocks: [
      {
        type: "p",
        text: "Every air conditioner makes some noise. A compressor humming, a fan turning, air moving through a vent. The sounds worth paying attention to are the ones that are new, that get louder over time, or that do not match anything the unit has done before. On their own, sounds do not tell you exactly what is wrong, but they narrow the list a long way, and they often tell you how urgent the problem is.",
      },
      {
        type: "p",
        text: "This guide groups the sounds people describe to us most often and explains what is usually behind each one. It is not a substitute for a technician looking at the unit, but it should help you describe the problem clearly and decide whether it can wait for a booked visit or needs attention sooner.",
      },
      { type: "h2", id: "normal-sounds", text: "What a healthy AC normally sounds like" },
      {
        type: "p",
        text: "A working split unit makes a low, steady hum from the compressor, a soft whoosh of air from the indoor fan, and a quiet click or two when it switches on and off as the thermostat calls for cooling. The outdoor unit's fan makes a gentle whirr. None of this is loud enough to carry a conversation over, and it does not change in character while the unit runs. If what you are hearing is new, louder than before, or comes and goes oddly, treat it as worth investigating.",
      },
      { type: "h2", id: "clicking", text: "Clicking" },
      {
        type: "p",
        text: "A single click at start-up and shut-down is normal. It is usually a relay or contactor switching the compressor or fan on and off. Repeated clicking that does not lead to the unit starting is different. That often points to a contactor or capacitor that is struggling to hold the circuit closed, or a control board sending signals the compressor is not responding to properly. If the unit clicks several times and then runs, or clicks and never starts, it needs a technician before it is run again, since repeated failed starts put extra strain on the compressor.",
      },
      { type: "h2", id: "buzzing", text: "Buzzing or humming that is louder than usual" },
      {
        type: "p",
        text: "A low hum is normal for the compressor. A buzz that is noticeably louder, or that has appeared where there was only a quiet hum before, often comes from a loose panel vibrating, a part that has worked itself loose inside the unit, or an electrical component such as a contactor or capacitor that is wearing out. Outdoors, a buzzing fan motor can also mean a bearing starting to fail. None of these are emergencies by themselves, but they tend to get worse rather than better, so it is worth booking a check before the noise turns into a breakdown.",
      },
      { type: "h2", id: "hissing", text: "Hissing or whistling" },
      {
        type: "p",
        text: "A soft hiss right after the unit starts or stops can be refrigerant equalising pressure inside the pipes, and that is usually nothing to worry about. A continuous hiss or a sharper whistling sound, especially near the indoor unit or along the copper pipes, can mean refrigerant escaping from a leak, which will also show up as weaker cooling and possibly ice on the pipe over time. A whistling sound from a vent, rather than from the unit itself, often just means the opening is partly blocked and air is being forced through a narrow gap.",
      },
      {
        type: "callout",
        title: "Hissing near the unit",
        text: "If a hiss is coming from the unit or the pipes rather than a vent, switch the system off and have it checked. Refrigerant should never be audibly escaping, and running the unit while it leaks puts the compressor under strain it was not designed for.",
      },
      { type: "h2", id: "gurgling", text: "Bubbling or gurgling" },
      {
        type: "p",
        text: "This sound usually comes from one of two places: refrigerant moving awkwardly through the pipes when the charge is low, or water and air moving through a partly blocked drain line. If you also notice weak cooling or ice on a pipe, think refrigerant. If you notice water pooling near the indoor unit or a musty smell, think drainage. Either way, it is a sign something needs attention rather than something to leave and see.",
      },
      { type: "h2", id: "rattling", text: "Rattling" },
      {
        type: "p",
        text: "Rattling is often the easiest sound to explain and sometimes the easiest to fix. Loose screws on a panel, a grille that has worked free, or debris such as a leaf, a small stone or a stray cable tie caught in the outdoor fan can all cause a rattle. Check that nothing is stacked against the outdoor unit and that its cover, if it has one, is seated properly. If the rattle is coming from inside the indoor unit, or you cannot see an obvious loose panel, leave it for a technician rather than opening the casing yourself.",
      },
      { type: "h2", id: "grinding", text: "Grinding or screeching" },
      {
        type: "p",
        text: "This is one of the more serious sounds on this list. Grinding or screeching, particularly from the outdoor unit, usually means a fan motor bearing is worn out and metal parts are rubbing against each other that should not be. A motor in this state can fail completely without much warning, sometimes damaging nearby parts when it does. If you hear grinding or screeching, switch the unit off and have it looked at rather than waiting for it to get worse.",
      },
      { type: "h2", id: "banging", text: "Banging or thumping" },
      {
        type: "p",
        text: "A loud bang, especially a single one followed by the unit stopping, can point to a part breaking loose inside the compressor or a serious electrical fault. Repeated banging or thumping while the unit runs is often a sign of something unbalanced or loose in the blower wheel or fan assembly, sometimes caused by a build-up of dust and debris that has thrown it off balance. Either way, this is not a noise to keep running through. Switch the unit off and arrange a visit.",
      },
      { type: "h2", id: "ducted-and-fan-coil-noise", text: "Noise from ducted and fan coil systems" },
      {
        type: "p",
        text: "Ducted systems and chilled-water fan coil units, common in apartment towers, hide most of their moving parts above the ceiling, so a new noise there can be harder to place than with a split unit you can see from the room. A dripping or trickling sound after the system has been running for a while is usually condensate moving through the drain line, and is only a concern if it is louder or more constant than before, which can point to a drain starting to back up. A rhythmic thumping from above the ceiling, in time with the fan, often means the blower wheel has become unbalanced, sometimes from a build-up of dust, and is worth having checked before it wears the motor further. Because these units are out of sight, it is easy to let a noise run for weeks before anyone notices, so it is worth asking whoever maintains the system to listen at the grille occasionally rather than only when something clearly fails.",
      },
      { type: "h2", id: "why-noise-gets-worse", text: "Why a small noise tends to get worse, not better" },
      {
        type: "p",
        text: "Almost none of the sounds on this list improve on their own. A loose panel vibrates a little more each time the unit cycles. A worn bearing wears a little further every hour the fan turns. A refrigerant leak that is hissing faintly today will have lost more gas by next month than it has today, since the leak does not heal itself. This is the main reason it is worth paying attention to a noise early, even one that does not obviously affect how the unit cools: by the time a noise is loud enough to be undeniable, the part behind it has often been wearing for a long time already.",
      },
      { type: "h2", id: "when-to-switch-off", text: "When to switch the unit off and not wait" },
      {
        type: "p",
        text: "Most unusual sounds can wait for a scheduled visit, but a few mean the unit should be switched off at the isolator or breaker straight away and left off until it has been checked:",
      },
      {
        type: "ul",
        items: [
          "Grinding, screeching or banging, especially if it gets louder while you listen",
          "A hissing sound that is continuous and comes from the unit or pipes rather than a vent",
          "Any noise paired with a burning smell, smoke or sparks",
          "A noise that appears at the same time the breaker trips",
          "A noise paired with water appearing where it has not before",
        ],
      },
      { type: "h2", id: "describing-it", text: "Describing the sound when you call" },
      {
        type: "p",
        text: "A technician who knows roughly what to expect can often diagnose faster once they arrive. When you call, try to say whether the sound is from the indoor unit, the outdoor unit, or both, whether it happens at start-up, constantly, or only sometimes, and whether it has changed or got worse over the last few days. If you can safely record a short video on your phone from a distance, without opening any panels or standing close to the outdoor unit, that can help too.",
      },
      {
        type: "p",
        text: "Noise on its own rarely tells the whole story, but it is almost never worth ignoring for long. A sound that was easy to fix a week ago, such as a loose panel or a rattle from debris, can turn into a failed motor or a damaged compressor if the underlying cause is left to run.",
      },
    ],
  },
  {
    slug: "ac-coil-cleaning-benefits",
    title: "AC Coil Cleaning: Why a Dirty Coil Costs You Cooling and Money",
    description:
      "How a dusty evaporator or condenser coil quietly reduces cooling and raises electricity use, the signs to watch for, and why coils need careful cleaning.",
    category: "AC Maintenance",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-coil-cleaning-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "If your AC feels less cold than it used to, but nothing has obviously broken, the coil is a good place to start looking. Coils do the actual work of moving heat in and out of your home, and they are also the part of the system that collects dust fastest. A coil that is coated in a fine layer of grime can quietly cost you cooling and money for months before anything fails outright.",
      },
      { type: "h2", id: "what-coils-do", text: "What the coils actually do" },
      {
        type: "p",
        text: "Every air conditioner has two coils. The evaporator coil sits inside, in the path of the air your fan pulls through the unit, and it absorbs heat from that air. The condenser coil sits outside, and it releases the heat the system has collected into the outside air. Both are built from thin aluminium fins wrapped around copper tubing, packed closely together so they can exchange as much heat as possible in a small space. That same design, closely packed fins with a lot of surface area, is exactly what makes them good at trapping dust.",
      },
      { type: "h2", id: "what-dirty-coil-costs", text: "What a dirty coil costs you" },
      {
        type: "p",
        text: "A layer of dust on a coil acts like a blanket. It does not stop the coil working altogether, but it gets between the air and the metal that is supposed to absorb or release heat, so the coil becomes less effective a little at a time. Indoors, a dirty evaporator coil cannot absorb heat properly, so the air leaving the unit is not as cold as it should be, and in bad cases the coil gets cold enough to ice over because airflow across it is also restricted. Outdoors, a dirty condenser coil cannot release heat properly, so pressure inside the system rises and the compressor has to work harder to do the same job.",
      },
      {
        type: "p",
        text: "The practical result is a system that runs for longer to reach the same temperature, uses more electricity doing it, and puts more strain on the compressor, which is the most expensive part in the unit. None of this shows up as a sudden fault. It shows up gradually, as a slightly warmer room and a slightly higher bill, month after month, until someone finally has the coils cleaned and notices the difference.",
      },
      { type: "h2", id: "signs", text: "Signs your coils need attention" },
      {
        type: "ul",
        items: [
          "Cooling that has faded gradually rather than failed suddenly",
          "The unit running for longer than it used to before the room feels cool",
          "Ice forming on the indoor coil or the copper pipe near it",
          "The outdoor unit feeling very hot to the air around it, or cutting out on its own",
          "Visible dust, grease or a grey film on the fins where you can see them",
          "An electricity bill that has crept up without any change in how you use the AC",
        ],
      },
      {
        type: "p",
        text: "Kitchens pick up grease on top of dust, which makes the coil dirty faster than in other rooms. Units near a main road, a construction site or the coast also collect dust and salt faster than units in sheltered locations.",
      },
      { type: "h2", id: "why-not-diy", text: "Why coil cleaning is not a simple hose-down" },
      {
        type: "p",
        text: "It is tempting to treat a dirty coil like a dirty car, but the fins are much more delicate than they look. They bend under light pressure, and once they are bent flat, airflow through that section is blocked permanently, which undoes the benefit of cleaning in the first place. A pressure washer held too close does exactly that. Harsh chemical cleaners can also strip the protective coating off the aluminium, which leaves the coil more exposed to corrosion afterwards rather than less.",
      },
      {
        type: "p",
        text: "The indoor coil adds a second complication: it sits directly above electrical components and close to your walls, flooring and furniture. Cleaning it properly means controlling exactly where the water and cleaning solution go, not just spraying and hoping it drains away.",
      },
      {
        type: "callout",
        title: "A gentle look, not a quick spray",
        text: "Coil cleaning uses a cleaner suited to aluminium fins, applied and rinsed carefully, with the surrounding area protected. It is slower than it looks, and that is the point. A rushed clean that bends the fins or leaves cleaning residue behind can leave the coil working worse than before.",
      },
      { type: "h2", id: "how-its-done", text: "What a proper coil clean involves" },
      {
        type: "p",
        text: "For the indoor coil, the unit is opened and the coil exposed, cleaned with a suitable coil cleaner, then rinsed. The drain tray and drain line are checked and cleaned at the same time, since the rinse water needs somewhere to go and a blocked drain will just turn the cleaning into a new leak. For the outdoor coil, the condenser is washed through from the inside out where possible, which clears dust that has settled into the fins rather than just rinsing the surface. Any fins that are already bent are straightened where that is practical. The unit is then run and the cooling is checked against how it was before.",
      },
      { type: "h2", id: "indoor-vs-outdoor", text: "Why both coils matter, not just one" },
      {
        type: "p",
        text: "It is easy to focus on whichever coil you can actually see, which for most households is the outdoor unit sitting on a balcony or roof. The indoor coil usually gets less attention simply because it is hidden behind a panel. Both coils have to work properly together, though. A spotless outdoor coil cannot make up for an indoor coil that is coated in dust, and the other way round. If only one side is cleaned, the system still has to push against the resistance of the dirty side, so the improvement in cooling and electricity use is smaller than it would be from cleaning both.",
      },
      {
        type: "p",
        text: "This is part of why coil cleaning is normally done as a pair during the same visit rather than as separate jobs. Checking one coil without the other also tells you less than checking both, since a technician comparing how each coil looks and how the system runs overall gets a clearer picture of where the problem actually sits.",
      },
      { type: "h2", id: "coil-cleaning-vs-service", text: "Coil cleaning compared with a regular service" },
      {
        type: "p",
        text: "A standard AC service includes cleaning the coils as one part of a wider check that also covers filters, the drain line, the blower and the electrical connections. A dedicated coil clean is for situations where the build-up is heavier than a routine service would expect to clear, such as a kitchen unit, a system on a dusty or coastal site, or a unit that has gone a long time without any service at all. If you are not sure which you need, the simplest approach is to have the unit looked at and let the condition of the coil decide.",
      },
      { type: "h2", id: "how-often", text: "How often coils need attention" },
      {
        type: "p",
        text: "For most homes, cleaning the coils as part of a service twice a year is enough to keep them working properly, timed before summer and again afterwards. Units that sit close to the sea, next to a main road, near a construction site, or in a kitchen that sees a lot of cooking, tend to collect dirt faster and may be worth checking more often. If cooling is already weaker than it should be and it has been a while since the last clean, that is a reasonable sign to book sooner rather than wait for the next scheduled visit.",
      },
      {
        type: "p",
        text: "A coil clean will not fix every cause of weak cooling. If the technician finds a refrigerant leak or a failing part while they are working on the coils, that is a separate repair, and you should be told about it rather than it being quietly folded into the cleaning job. But if dirt turns out to be the main cause, a proper coil clean is one of the more noticeable improvements you can make to an AC that has simply been running dirty for too long.",
      },
      { type: "h2", id: "what-you-notice-after", text: "What usually changes after cleaning" },
      {
        type: "p",
        text: "The most obvious change people notice after a proper coil clean is that the room reaches the set temperature faster than it did before, and the air coming out of the vents feels noticeably colder. If the unit was cutting out on its own outdoors because the condenser was overheating, that tends to stop as well, since the coil can release heat properly again. None of this means the unit is suddenly a different machine. It means the unit is finally working the way it was designed to, without a layer of dust getting in the way of every bit of heat it is trying to move.",
      },
    ],
  },
  {
    slug: "prepare-ac-for-dubai-summer",
    title: "Getting Your AC Ready for a Dubai Summer: A Pre-Season Checklist",
    description:
      "A practical checklist for getting an air conditioner ready before the Dubai heat arrives, covering what you can check yourself and what needs a technician.",
    category: "Dubai AC Advice",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-servicing-dubai", "ac-maintenance-dubai"],
    blocks: [
      {
        type: "p",
        text: "By the time the heat properly sets in, every AC in Dubai is running close to its limit, and there is little slack left to deal with a problem that has been building quietly for months. The better time to find that problem is beforehand, while the weather is still mild enough that a few days without full cooling is uncomfortable rather than genuinely difficult.",
      },
      {
        type: "p",
        text: "This checklist separates what you can reasonably check yourself from what needs a technician, so you know what to look at this week and what to book in before summer properly arrives.",
      },
      { type: "h2", id: "why-pre-season-matters", text: "Why checking before summer matters" },
      {
        type: "p",
        text: "An AC that has a weak capacitor, a partly blocked drain or a coil loaded with dust from the cooler months can often still cool a room well enough in February or March that nothing seems wrong. The same fault, under the load of a 45°C afternoon with the unit running almost continuously, is much more likely to turn into a breakdown. Finding and fixing small issues before summer, rather than during it, also means the repair is not competing with the busiest weeks of the year for everyone's AC.",
      },
      { type: "h2", id: "checks-you-can-do", text: "What you can check yourself" },
      {
        type: "ol",
        items: [
          "Clean the filters. Switch the unit off, lift the front panel on a split unit and slide the mesh filters out. If you cannot see light through them, rinse them under a tap, let them dry completely and refit them. On a ducted system, the filter is usually behind the return air grille in the ceiling.",
          "Clear the outdoor unit. Remove anything stacked against it, such as boxes, laundry racks or plants, so it has open space to release heat into. A unit boxed in on all sides struggles in summer even when everything inside it is working properly.",
          "Check vents and grilles are open. Supply vents should not be blocked by furniture or curtains, and the return grille, usually the larger one, needs to stay clear so air can circulate.",
          "Look for obvious wear. Check that panels are not loose or cracked, that the remote or thermostat responds when you press buttons, and that nothing smells musty when the unit starts up.",
          "Run it properly before you need it. Rather than waiting for the first truly hot day, run the AC on a cool setting for a while on a mild day and see whether it reaches temperature in a reasonable time and holds it.",
        ],
      },
      {
        type: "callout",
        title: "If something looks wrong, stop there",
        text: "If you spot ice on the pipes, water pooling under the unit, a burning smell or a breaker that trips, switch the unit off and treat it as something for a technician rather than continuing to test it yourself.",
      },
      { type: "h2", id: "outdoor-unit-location", text: "A closer look at the outdoor unit's surroundings" },
      {
        type: "p",
        text: "Over the cooler months it is easy for the space around an outdoor unit to quietly fill up with things that have nothing to do with the AC: stored boxes, bicycles, a drying rack, pot plants that have grown taller since they were put there. None of this looks like a problem day to day, but an outdoor unit that cannot get a proper flow of air around it has to work harder to shed heat, and in the hottest months that extra strain is far more noticeable. Walking around the unit before summer and clearing anything that has accumulated near it is one of the simplest things a household can do, and it costs nothing.",
      },
      {
        type: "p",
        text: "It is also worth checking that nothing has changed structurally nearby since last summer, such as a new shade sail, an awning, or building work on a neighbouring unit that might now be blocking airflow or direct the sun differently onto the outdoor unit than before.",
      },
      { type: "h2", id: "what-needs-a-technician", text: "What should be left to a technician" },
      {
        type: "p",
        text: "A few things that matter most for summer readiness are not practical to check without tools, or involve parts you should not handle yourself.",
      },
      {
        type: "ul",
        items: [
          "Refrigerant pressure. The only way to know whether a system is correctly charged is to connect gauges and read the pressure against the outdoor temperature. Weak cooling does not by itself tell you whether gas is low.",
          "Coil condition. Both coils collect dust through the cooler months, and a proper clean uses the right cleaner applied carefully so the delicate fins are not bent or damaged.",
          "Drain line and tray. A drain that is partly blocked now may overflow once humidity rises in summer. Flushing the full length of the line, not just the visible end, is a job for a service visit.",
          "Electrical connections. Capacitors, contactors and wiring connections loosen and wear over time, and testing them safely needs the unit powered down and checked with the right equipment.",
          "Fan motors and bearings. A motor that is starting to wear often still runs, just a little noisier, until the extra strain of summer pushes it over the edge.",
        ],
      },
      { type: "h2", id: "the-checklist-as-a-service-visit", text: "What a pre-summer service visit should cover" },
      {
        type: "p",
        text: "A proper pre-season service goes well beyond rinsing the filters you can already reach yourself. Expect the indoor coil and blower to be cleaned, the drain tray and drain line flushed along their full length, the outdoor coil washed, the refrigerant pressure checked, and the electrical connections inspected. If a visit for your whole system takes only a few minutes, it has not covered everything on this list.",
      },
      { type: "h2", id: "timing", text: "When to book it" },
      {
        type: "p",
        text: "The window between March and May is the one that matters most. It gives enough time before the hottest months for any fault that is found to be repaired without the pressure of an already-failed unit, and it is before everyone else in the city has the same idea at once. Booking in April rather than waiting until the first truly hot week in June, when technicians across Dubai are busiest, generally means a faster appointment and a calmer repair if something needs fixing.",
      },
      {
        type: "p",
        text: "If you missed that window and summer has already started, it is still worth having the unit checked rather than waiting for it to fail. A service done mid-season simply means dealing with the heat a little longer before the AC is running at its best, not that the checklist no longer applies.",
      },
      { type: "h2", id: "multiple-units-and-buildings", text: "Homes with several units, and landlords with several properties" },
      {
        type: "p",
        text: "A villa or larger apartment with multiple split units, or a building with several apartments to look after, is easy to under-check before summer, because each unit on its own might seem fine. The usual pattern is that one unit, often the one in a less-used room, has quietly been neglected while the others got attention. Going through the checklist above for every single unit, not just the ones in the rooms used most, catches the unit that would otherwise fail first once summer puts load on all of them at once. For landlords managing several properties, agreeing a schedule that covers every unit across every property, rather than waiting for tenants to report a problem, avoids finding out about a weak unit from a complaint in August.",
      },
      { type: "h2", id: "households-that-should-not-wait", text: "Households that should not leave it late" },
      {
        type: "p",
        text: "Some situations make a pre-summer check more than a nice-to-have. If anyone in the home is a baby, elderly, or has a health condition that makes heat risky, if the system is more than several years old, if the unit sits in a dusty or coastal location, or if there has been any sign of weak cooling, odd noises or a musty smell over the past few months, that is worth acting on before the heat arrives rather than after.",
      },
      {
        type: "p",
        text: "A pre-season checklist is not about predicting every possible fault. It is about catching the faults that are already there, quietly, before the hottest weeks of the year make them impossible to ignore. Running through the checks you can do yourself, and booking a proper service for the parts you cannot, puts the odds firmly in your favour before the heat decides to test the system for you.",
      },
    ],
  },
  {
    slug: "thermostat-problems-affecting-ac",
    title: "Thermostat Problems That Make a Healthy AC Act Like a Broken One",
    description:
      "How a faulty or badly placed thermostat can make a perfectly good air conditioner seem broken, and how to tell the thermostat and the AC itself apart.",
    category: "HVAC Guides",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["thermostat-repair-dubai", "ac-repair-dubai"],
    blocks: [
      {
        type: "p",
        text: "The thermostat is the only part of an air conditioning system most people ever touch, so when something feels wrong, it is the natural place to look first. It is also, more often than people expect, actually to blame. A thermostat that is reading the wrong temperature, placed somewhere unsuitable, or simply failing can make a perfectly healthy AC behave as though it has stopped working properly.",
      },
      { type: "h2", id: "how-thermostat-controls-ac", text: "How the thermostat actually controls the AC" },
      {
        type: "p",
        text: "A thermostat does one main job: it measures the temperature in the room and tells the system to run or stop based on what you have set. On a split unit that usually means switching the compressor on and off. On a ducted or chilled-water system it usually means opening or closing a valve, or signalling a control board, which then decides what the fan coil unit does. Either way, the thermostat is a messenger, not the part that actually produces cooling. If the message it is sending is wrong, the rest of the system will quite reasonably do the wrong thing, even though nothing about the cooling itself has failed.",
      },
      { type: "h2", id: "common-problems", text: "Common thermostat problems" },
      {
        type: "ul",
        items: [
          "Dead or weak batteries. A thermostat running on failing batteries can behave erratically before the display finally goes blank, sometimes losing its schedule or failing to send signals reliably.",
          "A sensor that has drifted. Over time, the temperature sensor inside a thermostat can read a degree or two off from the room's real temperature, so the system switches on and off at the wrong points without anyone noticing at first.",
          "Poor placement. A thermostat mounted in direct sunlight, near a lamp, above a television, or close to a kitchen will read warmer than the rest of the room actually is, and will call for more cooling than the space needs.",
          "Loose or damaged wiring. Where a thermostat is wired to the unit it controls, a loose connection can cause intermittent faults that come and go, which is often mistaken for a problem with the AC itself cutting in and out.",
          "A worn-out unit. Like any electronic device, thermostats eventually fail outright, usually showing as a blank or unresponsive display even with fresh batteries.",
        ],
      },
      { type: "h2", id: "symptoms-that-look-like-ac-faults", text: "Thermostat symptoms that look like AC faults" },
      {
        type: "p",
        text: "A few patterns come up again and again, and in each case the AC itself can be completely fine.",
      },
      {
        type: "p",
        text: "A room that never quite reaches the set temperature can look like weak cooling, a dirty coil or low refrigerant, when the real cause is a thermostat reading the room as warmer than it is and never letting the system settle. A system that switches on and off every few minutes, known as short cycling, can look like a failing compressor, when a drifting sensor or poor placement is causing the thermostat to call for cooling and then cancel it in quick succession. A unit that will not respond at all to changes on the display can look like a dead control board or a seized compressor, when the fault is actually in the wiring between the thermostat and the unit, or in the thermostat itself.",
      },
      {
        type: "callout",
        title: "Try the obvious thing first",
        text: "If the display is blank or behaving oddly, replace the batteries before assuming anything else is wrong. It takes a minute and rules out the simplest explanation.",
      },
      { type: "h2", id: "placement-matters", text: "Why placement is so often overlooked" },
      {
        type: "p",
        text: "Thermostat placement is one of those things that is usually decided once, when a home or office is fitted out, and then never revisited even as the room changes around it. A thermostat that was mounted in a shaded spot years ago can end up in direct afternoon sun once curtains are removed, furniture is rearranged, or a wall is repainted and a mirror added nearby that reflects light onto it. None of these changes have anything to do with the AC, but they can shift a thermostat's reading enough to make the system run longer than it needs to, or switch off before the room has actually cooled.",
      },
      {
        type: "p",
        text: "If a room has always felt a little warmer or colder than the rest of the home despite nothing obviously different about its AC, it is worth standing near the thermostat at different times of day and noticing whether it catches direct sun, sits near a lamp, or is close to a kitchen or another heat source, before assuming the fault lies with the unit itself.",
      },
      { type: "h2", id: "chilled-water-note", text: "A note for chilled-water apartments" },
      {
        type: "p",
        text: "In towers on district cooling, the thermostat usually controls a valve actuator on the fan coil unit rather than a compressor directly. A room that stays cold no matter what the thermostat is set to, or that will not cool at all despite the thermostat clearly calling for it, often points to the valve actuator being stuck rather than a fault in the thermostat itself. Telling the two apart needs someone to test the actuator directly, since the symptom on the thermostat display can look identical either way.",
      },
      { type: "h2", id: "testing-properly", text: "Why testing matters more than guessing" },
      {
        type: "p",
        text: "Because thermostat faults and AC faults can produce the same symptoms, guessing which one it is tends to lead to paying for the wrong fix. A proper check tests the thermostat's power supply and batteries, the wiring between the thermostat and the unit, how the sensor reading compares with the actual room temperature, and whether the unit responds correctly when the thermostat calls for cooling, a different fan speed, or, where relevant, a valve to open. Only once those have been checked in order does it make sense to say with confidence whether the thermostat or the AC is the actual problem.",
      },
      { type: "h2", id: "replacement", text: "When replacement makes sense" },
      {
        type: "p",
        text: "Not every thermostat problem needs a new thermostat. A sensor reading that has drifted, a loose wire, or simple battery failure can often be corrected without replacing anything. Replacement becomes the sensible option when the unit has failed outright, when its sensor has become unreliable and cannot be recalibrated, or when you want to move to a different type of control, such as a programmable or app-connected thermostat.",
      },
      {
        type: "p",
        text: "If you are considering a smart thermostat, check compatibility carefully before buying one. Many of the popular smart thermostats sold online are designed for low-voltage systems that are common in some other countries. A lot of AC systems in Dubai, especially chilled-water fan coil units with several fan speeds and a valve output, use mains-voltage controls that need a thermostat built for that specific arrangement. A photo of your current thermostat and its wiring label, if you can get to it safely, is usually enough for a technician to tell you what would actually work with your system.",
      },
      { type: "h2", id: "what-to-do-next", text: "What to do if you suspect the thermostat" },
      {
        type: "p",
        text: "Start with batteries, if it uses them, and check whether the thermostat is mounted somewhere unusually warm, such as in direct sun or above a heat source. Beyond that, it is genuinely difficult to be certain from the room alone whether the thermostat or the AC is at fault. Describing exactly what the display shows and exactly what the AC does when you change the setting gives a technician a useful starting point, and testing both the control and the unit it is wired to is the only reliable way to know which one needs fixing.",
      },
      {
        type: "p",
        text: "It is worth resisting the urge to replace the thermostat as a first guess simply because it is the easiest part to reach. A new thermostat wired into a problem it did not cause, whether that is a wiring fault, a stuck valve, or a unit above the ceiling that needs its own attention, will show exactly the same symptoms as the old one did. Testing first, even if it takes a little longer, is what actually tells you whether the thermostat was ever the problem.",
      },
    ],
  },
  {
    slug: "does-your-building-need-duct-cleaning",
    title: "Does Your Building Need Duct Cleaning? Signs to Look For",
    description:
      "Signs that the ductwork behind a ducted or central air conditioning system has built up dust and debris, and when duct cleaning is worth booking.",
    category: "HVAC Guides",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["hvac-duct-cleaning-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "If your home or office has a ducted or central air conditioning system, the air reaching every room has travelled through metal or flexible ductwork hidden above the ceiling before it gets to you. Most of the time nobody thinks about that ductwork at all, because there is nothing to see. The signs that it needs attention tend to show up elsewhere: on the vents, on the ceiling around them, or in the air itself.",
      },
      { type: "h2", id: "what-ducts-do", text: "What ducts actually do, and why they get dirty" },
      {
        type: "p",
        text: "In a ducted system, the fan coil unit above the ceiling pulls room air in through a return grille, cools it, and pushes it back out through supply ducts to grilles or diffusers around the property. Every bit of dust, fine sand and fabric fibre in that air passes through the ductwork along the way. Some of it settles on the inside walls of the ducts rather than travelling all the way through. Over time that builds up into a layer that the airflow can disturb and carry back into the room, especially whenever the fan first starts up after being off.",
      },
      {
        type: "p",
        text: "In Dubai, this process is faster than in many other places. Fine sand is in the outside air year round and gets worse after a shamal, and construction dust from a nearby site or from a recent fit-out inside the building adds to it. A filter catches a good deal of this before it reaches the fan coil unit, but filters are not perfect, and some dust always gets past.",
      },
      { type: "h2", id: "signs", text: "Signs your ducts may need cleaning" },
      {
        type: "ul",
        items: [
          "Visible dust blowing out of vents when the system first starts, or surfaces nearby that need wiping again only a day after cleaning",
          "Dark streaks or marks on the ceiling around supply grilles and diffusers, which show dust being carried through the ducts and settling as it leaves",
          "A musty or stale smell when the system starts up, which can point to moisture sitting in the fan coil unit or ductwork",
          "Noticeably uneven airflow between rooms, where one area always feels weaker than the rest even though the system is working",
          "Anyone in the household sneezing, coughing or having allergy symptoms that ease when they are away from the property",
          "No record of the ducts ever having been cleaned, particularly if you have recently moved in and do not know the property's history",
        ],
      },
      { type: "h2", id: "after-renovation", text: "After renovation or building work" },
      {
        type: "p",
        text: "Cutting, sanding, drilling and plastering all produce fine dust that finds its way into open vents even when they have been covered during the work. A system that was running, or whose vents were only loosely protected, during a renovation or fit-out has very likely drawn some of that dust into the ductwork. This applies whether the work was done inside your own unit or in a neighbouring one connected to shared ductwork, which is common in some commercial buildings. If building work has happened recently and the system has not been checked since, that is a reasonable prompt to have the ducts inspected.",
      },
      { type: "h2", id: "pets-and-allergies", text: "Households with pets or allergy sufferers" },
      {
        type: "p",
        text: "Pet hair and dander add to whatever dust is already moving through a ducted system, and both tend to be finer and more persistent than ordinary household dust, settling into ductwork rather than being fully caught by a return air filter. In households where someone has asthma or another respiratory condition, the condition of the ductwork can make a real difference to day-to-day comfort, even when the system is otherwise working normally. If symptoms seem to ease noticeably when away from the property, it is worth treating that as a genuine clue rather than coincidence, and having the ducts looked at alongside anything else that might be contributing.",
      },
      { type: "h2", id: "moving-in", text: "Moving into a new property" },
      {
        type: "p",
        text: "When you move into a property with a ducted system, you rarely know when the ducts were last cleaned, what the previous occupants' habits were, or whether any building work has happened nearby since. An inspection shortly after moving in is a sensible way to find out what you are dealing with, rather than assuming the ductwork is clean simply because the property looks clean.",
      },
      {
        type: "callout",
        title: "Not every AC has ducts",
        text: "A wall-mounted split unit blows air directly into the room and has no ductwork at all, so there is nothing to duct-clean. If your home only has split units, a regular service covering the filters and coils is what applies instead. Ducted systems are the ones with ceiling grilles or slot diffusers fed from a unit hidden above the ceiling.",
      },
      { type: "h2", id: "offices-and-commercial", text: "Offices, shops and shared buildings" },
      {
        type: "p",
        text: "Commercial premises often have ductwork that is harder to see and harder to think about than a home's, since it may run through a ceiling void shared with other tenants or be managed as part of the building rather than by whoever occupies the space day to day. A retail unit or office with constant footfall accumulates dust from people moving through it, as well as whatever comes in through the outside air intake, and a restaurant kitchen area adds grease to that mix in a way homes rarely experience. If nobody can say when the ductwork serving a commercial space was last cleaned, that uncertainty is itself a reasonable prompt to find out, particularly if staff or customers have mentioned a stale smell or dust near the vents.",
      },
      { type: "h2", id: "what-happens-during-cleaning", text: "What happens during a duct cleaning visit" },
      {
        type: "p",
        text: "The system is switched off for the duration of the work, since cleaning while it is running would simply spread dust further. Supply and return grilles are removed and cleaned, and dust and debris are removed from the ductwork that can be reached. The fan coil unit itself is cleaned as well, covering the coil, the blower and the drain tray, since all three sit in the same airstream as the ducts. Filters are cleaned or replaced, and once the work is finished the system is run again with airflow checked at each outlet, room by room, to confirm the improvement.",
      },
      { type: "h2", id: "how-often", text: "How often it is worth doing" },
      {
        type: "p",
        text: "There is no single interval that suits every building. Properties near construction sites, those that have been recently renovated, and households with pets or allergy sufferers tend to need it sooner than others. Offices and commercial premises with constant occupancy and heavier use often benefit from a similar approach to homes: an inspection first, with cleaning scheduled based on what is actually found rather than a fixed number of months.",
      },
      {
        type: "p",
        text: "If you are not sure whether your ducts need cleaning, the simplest next step is an inspection rather than guessing either way. A technician can look at the grilles, check what access points are available, and assess the condition of the ductwork before recommending whether cleaning is worthwhile now or can reasonably wait."
      },
      { type: "h2", id: "duct-cleaning-and-servicing-together", text: "Pairing duct cleaning with a regular service" },
      {
        type: "p",
        text: "Duct cleaning and a standard AC service cover different ground. A service focuses on the fan coil unit itself, its filters, coils and drain line, while duct cleaning deals with the ductwork, grilles and diffusers that carry air between the unit and the rooms it serves. Because both affect the same airstream, it is common to have them done around the same time, so that dust disturbed while working on one is not simply left to settle back into the other. If your ducted system is also due a service, it is worth mentioning both when you book, rather than treating them as entirely separate jobs on separate days.",
      },
      {
        type: "callout",
        title: "Clean air depends on both ends",
        text: "A spotlessly clean fan coil unit feeding into dirty ducts will still deliver dusty air to the room, and clean ducts fed by a dirty unit will not stay clean for long. Checking both together gives a more accurate picture than checking either on its own.",
      },
    ],
  },

  {
    slug: "why-does-my-ac-smell-bad",
    title: "Why Does My AC Smell Bad? Common Causes of AC Odours",
    description:
      "Musty, burning, sewage or dusty smells from an air conditioner each point to a different cause. What each smell usually means and what to do about it.",
    category: "Air Conditioning Problems",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-coil-cleaning-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "A smell from the air conditioner is easy to notice and hard to describe to someone else. That is a problem, because the smell itself is often the best clue to what is wrong. Musty, burning, sour and dusty each point somewhere different, so it is worth working out which one you actually have before you call anyone.",
      },
      {
        type: "p",
        text: "None of the causes below need you to open the unit's electrics or go near the coil with anything other than a damp cloth on the filter. Where a smell means switch off and call, we say so plainly.",
      },
      { type: "h2", id: "musty", text: "A musty or damp smell" },
      {
        type: "p",
        text: "This is the smell most people describe as the AC smelling like a wet towel left in a bag. It usually appears first thing on start-up and fades after the unit has run for a few minutes. The cause is almost always moisture sitting somewhere it should have drained away.",
      },
      {
        type: "p",
        text: "An air conditioner's indoor coil is wet for most of the time it runs, because that is how it removes humidity from the room. If the drain tray underneath has a film of dust and standing water in it, or the drain line is partly blocked, that moisture does not go anywhere. Mould grows on it, and every time air passes over the coil, a little of that smell comes with it.",
      },
      {
        type: "ul",
        items: [
          "Clean the filters. A clogged filter keeps the coil wetter for longer and feeds the mould with dust at the same time.",
          "If you can see standing water in a tray you can reach safely, that is a sign the drain line needs clearing.",
          "A service that cleans the coil and flushes the drain line usually clears a musty smell within a visit or two.",
          "If the smell returns within weeks of a clean, the drain line probably needs a proper flush along its full length, not just at the near end.",
        ],
      },
      { type: "h2", id: "burning", text: "A burning or electrical smell" },
      {
        type: "p",
        text: "This is the one smell on this list that should change what you do immediately. A smell like hot plastic, scorched dust or burning rubber from an air conditioner can mean a wiring fault, a failing motor or a part that is overheating.",
      },
      {
        type: "callout",
        title: "Switch it off and leave it off",
        text: "If you smell burning, see smoke, or notice scorch marks near the unit, switch the AC off at the wall isolator or the breaker and do not turn it back on. This is not something to keep running to see if the smell goes away.",
      },
      {
        type: "p",
        text: "A small amount of dust burning off a motor the first time it runs after a long break can smell similar and usually clears in a minute or two. If the smell is strong, keeps coming back or you are not sure, treat it as the first kind and switch off. It costs nothing to be cautious about this one.",
      },
      { type: "h2", id: "sewage", text: "A sewage or sulphur smell" },
      {
        type: "p",
        text: "In apartments and villas with a ducted system, a smell like drains or rotten eggs coming from the vents is usually not the air conditioner at all. It is more often a dry trap in a nearby bathroom or kitchen drain, which lets sewer gas rise up and get pulled into the return air grille if one happens to be close by.",
      },
      {
        type: "p",
        text: "Running water in any drain that has not been used for a while, such as a guest bathroom, often fixes it by refilling the trap. If the smell keeps coming specifically when the AC is running and nowhere else in the home has the same smell, it is worth having the ductwork and the fan coil unit checked, since standing water inside the unit itself can also turn sour over time.",
      },
      { type: "h2", id: "dusty", text: "A dusty or stuffy smell on start-up" },
      {
        type: "p",
        text: "A dry, dusty smell for the first minute after the AC switches on, especially after the unit has been off for a while, is usually just dust burning off the elements or sitting in the ductwork getting disturbed. It is common at the start of the cooling season when a unit has been idle through milder weeks.",
      },
      {
        type: "p",
        text: "If it clears quickly and does not come with any other symptom, it is rarely worth worrying about. If it persists every time the unit runs, or the smell is closer to burning dust than a quick puff of it, treat it with more caution and have it looked at.",
      },
      { type: "h2", id: "dead-animal", text: "A smell like something has died" },
      {
        type: "p",
        text: "Outdoor units and ductwork that run through false ceilings or external shafts occasionally become a resting place for a bird, a gecko or a rodent. If a smell is strong, specific and getting worse over a few days rather than coming and going, this is worth considering, particularly if the outdoor unit sits somewhere sheltered and rarely disturbed.",
      },
      {
        type: "p",
        text: "This is not something to investigate by opening the unit yourself. A technician can check the accessible parts of the ductwork and the outdoor unit and remove anything found.",
      },
      { type: "h2", id: "chemical", text: "A sharp, chemical or sweetish smell" },
      {
        type: "p",
        text: "A smell that is sharp or sweetish rather than musty or burning can, in rare cases, point to a refrigerant leak, particularly if it comes with weaker cooling, ice on a pipe, or a hissing sound near the indoor or outdoor unit. Refrigerant itself does not smell strongly, but the oil it carries sometimes does when it escapes at a joint.",
      },
      {
        type: "p",
        text: "This is a job for a technician with gauges and leak detection equipment, not something to chase down yourself. If you notice this smell alongside reduced cooling, mention both when you call, since together they point more clearly at the cause than either one alone.",
      },
      { type: "h2", id: "new-unit", text: "A plastic smell from a brand-new unit" },
      {
        type: "p",
        text: "A newly installed air conditioner sometimes has a faint plastic or chemical smell for the first few days of running, as protective coatings and manufacturing residue on internal parts warm up for the first time. This usually fades within a week of normal use and is different from the sharper, lingering smell of an electrical fault, which does not fade and tends to come with heat near the unit or a noticeable change in sound.",
      },
      { type: "h2", id: "when-to-call", text: "When to call rather than wait" },
      { type: "p", text: "A musty or dusty smell that clears on its own is rarely urgent. Call sooner if you notice any of the following:" },
      {
        type: "ul",
        items: [
          "Any smell of burning, smoke or scorched plastic",
          "A smell that has become stronger over several days rather than staying the same",
          "A bad smell together with weaker cooling, ice on a pipe or a hissing sound",
          "A sewage smell that is specific to the AC running and not explained by a dry drain trap elsewhere",
          "A smell that returns within weeks of a service or clean",
        ],
      },
      { type: "h2", id: "cooking-smells", text: "Smells that are not really the AC" },
      {
        type: "p",
        text: "In open-plan apartments and villas, cooking odours, cigarette smoke and even strong perfume can get pulled into a return air grille and pushed back out through the AC in other rooms, long after the original smell has faded where it started. This can make a kitchen smell seem to be coming from a bedroom's vent, which is confusing until you trace it back to one shared system moving the same air around the home.",
      },
      {
        type: "p",
        text: "If a smell is strongest near a return grille rather than a supply vent, or it matches something that happened elsewhere in the home a little earlier, it is worth considering this explanation before assuming the unit itself has a fault.",
      },
      { type: "h2", id: "prevention", text: "Keeping odours from coming back" },
      {
        type: "ul",
        items: [
          "Clean or rinse the filters on a regular schedule rather than waiting for a smell to appear",
          "Have the drain line flushed as part of a proper service, not just the filters rinsed",
          "Leave the fan running on its own for a few minutes after the cooling switches off, if your unit has that setting, so the coil has a chance to dry",
          "Keep the area around the outdoor unit clear so nothing can nest in or near it",
          "Book a service before summer and again afterwards, since standing moisture and dust both build up fastest in those periods",
        ],
      },
      {
        type: "p",
        text: "A smell on its own is rarely an emergency, but it is almost always a sign that something further along the system needs attention. Treating it as useful information, rather than something to mask or ignore, is the quickest way to get back to air that simply smells like nothing at all.",
      },
    ],
  },
  {
    slug: "what-counts-as-an-ac-emergency",
    title: "What Counts as an AC Emergency, and What Can Wait Until Morning",
    description:
      "Not every AC fault needs a call at 2am. A guide to telling a genuine AC emergency in Dubai apart from something safe to leave until daylight.",
    category: "Dubai AC Advice",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["emergency-ac-repair-dubai", "ac-repair-dubai"],
    blocks: [
      {
        type: "p",
        text: "An AC fault at midnight feels urgent by default, because the room is hot, the house is quiet, and every option seems to involve either waking someone up or lying awake sweating. Some faults genuinely cannot wait. Others are uncomfortable but safe to leave until a reasonable hour, and knowing the difference saves you from either sweating through the night unnecessarily or sitting next to a real hazard waiting for it to resolve itself.",
      },
      {
        type: "p",
        text: "This is a rough guide, not a substitute for judgement on the night. If anything about a situation feels wrong, treat it as urgent and get it looked at.",
      },
      { type: "h2", id: "always-emergency", text: "Always treat these as an emergency" },
      {
        type: "p",
        text: "A short list of situations where you should switch the unit off and call for help regardless of the time, because the risk is to safety rather than comfort.",
      },
      {
        type: "ul",
        items: [
          "A burning smell, visible smoke, sparks, or scorch marks anywhere near the indoor or outdoor unit",
          "A breaker that trips a second time after you have reset it once",
          "Water coming through a ceiling or light fitting, where it is close to anything electrical",
          "Hissing, bubbling or a strong chemical smell near the unit or its pipework",
          "Loud grinding, banging or a smell that is getting noticeably worse by the hour",
        ],
      },
      {
        type: "callout",
        title: "Make it safe first",
        text: "In every situation on that list, switch the unit off at the wall isolator or the breaker before you do anything else. That alone removes most of the risk while you wait for a technician, whatever time it is.",
      },
      { type: "h2", id: "usually-urgent", text: "Usually worth calling tonight" },
      {
        type: "p",
        text: "These are not safety emergencies in the same way, but the circumstances around them can make them urgent in practice.",
      },
      {
        type: "ul",
        items: [
          "No cooling at all in the height of summer, in a home with a baby, an elderly person or someone who is unwell",
          "Total loss of cooling in a server room, a clinic, a pharmacy or anywhere stock or equipment is sensitive to heat",
          "A restaurant or shop that depends on the AC to stay open and cannot trade without it",
          "A leak that is steadily spreading across a floor with no safe way to contain it until morning",
        ],
      },
      {
        type: "p",
        text: "In a household without anyone especially vulnerable to heat, losing cooling overnight is unpleasant but rarely dangerous in Dubai's air-conditioned buildings, where indoor temperatures rise gradually rather than spiking. Weigh how uncomfortable a few hours will genuinely be against the cost and disruption of an out-of-hours call-out.",
      },
      { type: "h2", id: "can-wait", text: "Usually safe to leave until morning" },
      {
        type: "p",
        text: "A good number of AC complaints are real faults that are not getting worse overnight. These are the ones where waiting for normal hours rarely costs you anything except a warmer night's sleep.",
      },
      {
        type: "ul",
        items: [
          "Cooling that has gradually grown weaker over days or weeks, with no sudden change tonight",
          "A thermostat that is unresponsive or showing the wrong temperature, with no other symptoms",
          "A musty smell on start-up with no burning smell and no change in how the unit sounds",
          "A small, contained drip that is not spreading and is not near anything electrical",
          "One unit out of several in the home or office not cooling, while the rest are working normally",
        ],
      },
      {
        type: "p",
        text: "For any of these, it is reasonable to put a towel or a bucket under a drip, close the room off if one unit has failed and others are working, and book a visit for the next available slot rather than treating it as a call that has to happen in the small hours.",
      },
      { type: "h2", id: "what-to-do-while-you-decide", text: "What to do while you decide" },
      {
        type: "ol",
        items: [
          "Switch off anything that falls under the always-emergency list above, immediately, without waiting to think it through further.",
          "If the breaker has tripped once, you can reset it once. If it trips again, leave it off and treat it as urgent.",
          "Protect the floor and anything electrical from any water you can see, with a bucket, towels or by moving furniture.",
          "Note what happened and when: a sudden stop, a gradual fade, any noise, smell or water, and whether the breaker tripped.",
          "Call or message with that information so whoever answers can judge how quickly someone needs to come, rather than guessing from a one-line description.",
        ],
      },
      { type: "h2", id: "one-unit-vs-whole-system", text: "One unit down against the whole system down" },
      {
        type: "p",
        text: "How urgent a fault feels often depends on how much of the property it affects. A single bedroom unit failing in a villa with several independent split units is rarely urgent, because the household can simply sleep in a room that still has working cooling for a night. A central or ducted system that serves an entire apartment, with no working alternative anywhere in the home, is a different situation, and the household's comfort options shrink to nothing at once.",
      },
      {
        type: "p",
        text: "The same logic applies to businesses. One faulty unit in a large office with several zones is manageable until morning. The only unit cooling a small shop, a server room or a walk-in storage area is not, because there is nowhere else for that heat to go.",
      },
      { type: "h2", id: "weather-and-season", text: "The time of year changes the calculation" },
      {
        type: "p",
        text: "A fault that would be a minor inconvenience in a mild Dubai winter becomes a different matter during the hottest stretch of summer, when indoor temperatures climb faster and recovery takes longer once a unit is finally repaired. The same AC complaint, worded identically, deserves a different level of urgency in July than it does in January, and it is worth factoring that into your own judgement on the night rather than applying one fixed rule all year round.",
      },
      { type: "h2", id: "being-open-24-hours", text: "Why being contactable at any hour still matters" },
      {
        type: "p",
        text: "Al Naveed AC Repair & Maintenance is open 24 hours, every day, which matters less for the complaints that can wait and much more for the ones that genuinely cannot. A burning smell at 3am, a breaker that will not stay reset, or a server room losing cooling in July are exactly the situations an overnight call-out exists for.",
      },
      {
        type: "p",
        text: "Being able to reach someone at any hour does not mean every fault should be treated the same way. Part of handling a breakdown well is deciding, calmly, which category it falls into before you reach for the phone, so the call you make matches what is actually happening in the room.",
      },
      { type: "h2", id: "power-cuts", text: "What about a power cut or a tripped main breaker" },
      {
        type: "p",
        text: "If the whole property has lost power rather than just the AC, that is an electrical supply issue rather than an air conditioning fault, and it needs a different kind of help, whether that is the building's facilities team, DEWA, or an electrician depending on where the problem sits. Check whether other appliances in the home are also without power before assuming the AC itself has failed, since the fix and the urgency are both different for a building-wide outage than for a single unit that has stopped on its own.",
      },
      {
        type: "p",
        text: "Where only the AC's own breaker has tripped and everything else in the home still has power, that narrows the fault back down to the unit, and the usual reset-once-and-leave-it-if-it-trips-again approach applies.",
      },
      { type: "h2", id: "trust-your-own-judgement", text: "When the categories do not fit cleanly" },
      {
        type: "p",
        text: "Not every situation sits neatly on one list or the other. A fault might show one sign from the always-emergency list and otherwise seem mild, or a household might simply feel more anxious about a warm night than this guide assumes. None of the lists above are a substitute for your own sense of what is happening in your home. If something feels wrong enough that you would rather not wait, that feeling is itself a reasonable basis for calling, regardless of which category the symptom technically falls into.",
      },
      { type: "h2", id: "when-you-call", text: "What helps when you do call" },
      {
        type: "p",
        text: "Whether it is the middle of the night or the middle of the afternoon, a few details make the call faster for everyone. Your area and building, the type of AC you have, whether it stopped suddenly or faded over time, and anything unusual you noticed, such as a smell, a sound or water, all help a technician understand what they are walking into before they arrive.",
      },
    ],
  },
  {
    slug: "installing-a-new-ac-what-to-expect",
    title: "Installing a New AC: What Happens and What to Ask Your Installer",
    description:
      "What actually happens during an AC installation in Dubai, from site check to commissioning, and the questions worth asking your installer before work starts.",
    category: "HVAC Guides",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-installation-dubai"],
    blocks: [
      {
        type: "p",
        text: "Buying the right air conditioner is only half the job. How it is installed decides how well it cools, how long it lasts, and whether you end up calling someone back within the first year to fix a problem that installation caused. Most of what goes wrong with a new unit traces back to a step in the installation that was rushed or skipped, not to the unit itself.",
      },
      {
        type: "p",
        text: "Knowing roughly what should happen, in what order, makes it easier to tell a careful installation from a quick one, and gives you the right questions to ask before anyone starts drilling.",
      },
      { type: "h2", id: "site-check", text: "The site check comes first" },
      {
        type: "p",
        text: "Before any mounting happens, a technician should look at where the indoor and outdoor units will go, the route the pipework will take between them, where the condensate drain will run to, and what the electrical supply can handle. This decides almost everything that follows, so it is worth being wary of anyone who wants to skip straight to fitting brackets.",
      },
      {
        type: "ul",
        items: [
          "The outdoor unit needs open space around it so it can release heat. A spot boxed in by walls or stacked with other equipment runs hotter and works harder for years afterwards.",
          "The pipe run between indoor and outdoor units should be as short and direct as sensible. A longer run is sometimes unavoidable, but it affects how the system performs.",
          "The drain line needs a continuous downward slope the whole way to wherever it discharges. Even a short section that is flat or sloped the wrong way causes water to back up later.",
          "The electrical supply and isolator need to suit the unit's power draw, not just have a spare socket nearby.",
        ],
      },
      { type: "h2", id: "mounting", text: "Mounting the units" },
      {
        type: "p",
        text: "The indoor unit is fixed level to a wall bracket or into a ceiling void, and the outdoor unit onto a wall bracket, a frame or the ground, depending on where it sits. A unit that is not level drains unevenly, which shows up later as a drip from one corner rather than a clean run of water down the pipe.",
      },
      {
        type: "p",
        text: "In apartments, the outdoor unit's position is often constrained by what the building allows, so this stage sometimes depends on getting approval from building management before work can even begin.",
      },
      { type: "h2", id: "pipework", text: "Pipework, insulation and the vacuum" },
      {
        type: "p",
        text: "Copper pipework carries refrigerant between the two units and is wrapped in insulation to stop it sweating or losing its cooling along the way. Once the pipework and connections are complete, the system is vacuumed before any refrigerant is released into it.",
      },
      {
        type: "callout",
        title: "Why the vacuum step matters",
        text: "Air and moisture left inside the pipework mix with the refrigerant and shorten the life of the compressor, often by years. This step takes time and is invisible once the job is finished, which makes it an easy one for a rushed installer to shorten. It is one of the most important parts of the whole job.",
      },
      { type: "h2", id: "electrical-and-drain", text: "Electrical connection and the drain" },
      {
        type: "p",
        text: "The unit is wired to its own isolator and, through that, to the property's electrical supply. The condensate drain line is connected and run to its discharge point, following the slope agreed during the site check. Both of these are checked again once the system is running, since a fault here shows up quickly, within the first cycle of use.",
      },
      { type: "h2", id: "commissioning", text: "Commissioning and the leak check" },
      {
        type: "p",
        text: "Once everything is connected, refrigerant is released into the system and every joint is checked for leaks, usually with a leak detector or a soap solution at each connection. The unit is then run and the cooling, the drainage and the controls are all tested before the installer leaves.",
      },
      {
        type: "p",
        text: "A proper commissioning includes a run-through of the controls, so you know how to operate the unit, change its modes and read any error codes it might show later, rather than being handed a remote with no explanation.",
      },
      { type: "h2", id: "sizing", text: "Getting the size right before any of this starts" },
      {
        type: "p",
        text: "None of the steps above matter much if the unit itself is the wrong size for the room. A unit that is too small never quite reaches the set temperature and runs constantly trying. A unit that is too large cools the air fast, switches off, and leaves the room feeling clammy because it never runs long enough to remove the humidity.",
      },
      {
        type: "p",
        text: "Room size is the starting point, but ceiling height, how much sun the room gets, how many people usually use it and whether it sits above or below other air-conditioned space all change the right capacity. This is worth discussing with whoever is installing the unit before you buy it, not after.",
      },
      { type: "h2", id: "questions-to-ask", text: "Questions worth asking your installer" },
      {
        type: "ol",
        items: [
          "How did you decide on the capacity for this room, and what did you take into account?",
          "Where will the outdoor unit sit, and does it have enough space around it?",
          "What is the slope of the drain line, and where does it discharge?",
          "Will the pipework be vacuumed before the refrigerant goes in, and for how long?",
          "Will you show me how the controls work once it is running?",
          "Do I need permission from building management or a landlord before this work starts?",
        ],
      },
      {
        type: "p",
        text: "An installer who can answer these clearly, without needing to check anything, is generally one who is doing the job properly. These same questions are useful again at the end of the visit, to confirm that what was planned is actually what was done.",
      },
      { type: "h2", id: "old-unit", text: "What happens to the old unit" },
      {
        type: "p",
        text: "When a replacement is going into a space that already had an air conditioner, the old unit needs to come down safely before the new one goes up. Any refrigerant left in the old system is recovered rather than released into the air, and the old pipework is checked rather than automatically reused, since corrosion or the wrong diameter in an existing pipe run can undermine a brand-new unit's performance from the first day.",
      },
      {
        type: "p",
        text: "It is worth asking in advance whether the old unit will be removed and taken away as part of the job, or whether that is something you need to arrange separately, so there is no surprise about a disconnected unit sitting in a corner once the new one is running.",
      },
      { type: "h2", id: "after-the-job", text: "What a careful installer leaves you with" },
      {
        type: "p",
        text: "Once the work is finished, you should be able to see where the drain discharges, know which breaker controls the unit, and understand how to switch between cooling modes without guessing. If the unit has a model number or label that you might need later, note it down or photograph it while access is easy, rather than trying to find it behind a mounted unit months afterwards.",
      },
      { type: "h2", id: "building-rules", text: "Checking building rules before the date" },
      {
        type: "p",
        text: "Many buildings in Dubai have their own rules about where outdoor units can be placed, when drilling is allowed, and whether contractors need to register with building management first. Tenants in particular usually need the landlord's agreement before any new installation. Settling this before the day you book keeps the job from stalling halfway through.",
      },
      { type: "h2", id: "timing-the-work", text: "Choosing when to book the work" },
      {
        type: "p",
        text: "An installation during a cooler, quieter month tends to be a calmer job all round, with less pressure to rush a vacuum step or a leak check because a household is already sweating through the wait. If a new unit is going into a room you are not using daily, such as a spare bedroom or an office that is being fitted out, there is rarely a reason to leave the booking until the last comfortable week before summer, when demand across the city rises sharply.",
      },
      { type: "h2", id: "after-installation", text: "Settling in during the first few weeks" },
      {
        type: "p",
        text: "A newly installed unit is worth paying slightly closer attention to for its first few weeks of regular use. Note how quickly it reaches the set temperature, whether the drain line is working by checking that no water appears anywhere it should not, and whether the outdoor unit sounds normal once it has been running under real summer load rather than just during the short test at commissioning. Anything that seems off in this early period is easier to trace back to the installation itself while the work is still fresh and easy to reference.",
      },
    ],
  },
  {
    slug: "what-affects-ac-repair-cost",
    title: "What Affects the Cost of AC Repair in Dubai",
    description:
      "AC repair costs vary by fault, not by a fixed price list. The main factors that make one repair more involved than another, explained plainly.",
    category: "AC Repair Tips",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-repair-dubai", "emergency-ac-repair-dubai"],
    blocks: [
      {
        type: "p",
        text: "One of the most common questions before a repair is simply how much it will cost, and one of the most honest answers a technician can give is that it depends on what is actually wrong. That is not an evasive answer. Two air conditioners with the exact same symptom, warm air instead of cold, can need two very different repairs once someone has actually looked inside them.",
      },
      {
        type: "p",
        text: "Rather than give a number that would not hold up from one job to the next, it helps to understand the factors that make a repair bigger or smaller, so you know what questions to ask once a technician has actually inspected your unit.",
      },
      { type: "h2", id: "what-failed", text: "What actually failed" },
      {
        type: "p",
        text: "A capacitor, a contactor or a sensor is a small, relatively inexpensive part that is quick to replace once it has been correctly identified as the cause. A compressor, a control board or a coil with multiple leaks sits at the other end of the scale, both in the part itself and in the time it takes to access and replace it.",
      },
      {
        type: "p",
        text: "The symptom you notice rarely tells you which of these you have. Warm air, a tripped breaker and a strange noise can all come from either a cheap fix or an expensive one, which is exactly why a proper inspection, rather than a guess over the phone, has to come before any figure is quoted.",
      },
      { type: "h2", id: "parts-vs-labour", text: "Parts against labour" },
      {
        type: "p",
        text: "A repair cost is really two separate things added together: the part itself, and the time and skill needed to diagnose the fault and fit it. Some jobs are almost all labour, such as clearing and flushing a drain line. Others are mostly the cost of the part, such as replacing a compressor on an otherwise sound system.",
      },
      {
        type: "ul",
        items: [
          "How long the fault takes to diagnose correctly, which depends on how many possible causes share the same symptom",
          "Whether the part needed is commonly held or has to be sourced for that particular model",
          "How much disassembly the unit needs before the faulty part can even be reached",
          "Whether more than one component has failed, which happens when a problem has been running for a while before anyone called",
        ],
      },
      { type: "h2", id: "access", text: "How easy the unit is to reach" },
      {
        type: "p",
        text: "A wall-mounted outdoor unit sitting at ground level with clear space around it is straightforward to work on. One mounted high on a tower, on a shared service balcony, behind other equipment or in a position that needs scaffolding or special access takes longer and sometimes needs more than one technician, which affects the job regardless of what the actual fault turns out to be.",
      },
      {
        type: "p",
        text: "The same applies indoors. A ducted system with the fan coil unit tucked into a tight ceiling void takes longer to open up and close back than a wall-mounted split unit with a simple front panel.",
      },
      { type: "h2", id: "system-type", text: "The type and age of the system" },
      {
        type: "p",
        text: "Split units, ducted systems, window units and chilled-water fan coil units are built differently and fail in different ways, and parts for each are not interchangeable. An older system, particularly one running on R22 refrigerant rather than more current alternatives, can also be harder to source parts and gas for, simply because the industry is gradually moving away from it.",
      },
      {
        type: "callout",
        title: "When repair stops making sense",
        text: "At some point on an old or badly corroded system, the cost of repeated repairs starts to outweigh what a replacement would cost over the same period. A technician should tell you when a unit is approaching that point rather than letting you find out after several separate repairs.",
      },
      { type: "h2", id: "timing-and-demand", text: "Timing and demand" },
      {
        type: "p",
        text: "AC faults are not evenly spread across the year in Dubai. They cluster heavily in the hottest months, when every system in the city is under the most strain and every repair company is busiest at the same time. An emergency call-out outside normal hours, or a job booked during peak summer demand, generally involves different arrangements to a routine repair booked during a quieter period.",
      },
      {
        type: "p",
        text: "This is also one of the better reasons to have a unit checked before summer rather than during it. A fault caught in March, while the weather is still mild and workloads are lighter, is almost always a calmer and more straightforward job than the same fault discovered in July.",
      },
      { type: "h2", id: "maintenance-history", text: "How well the unit has been looked after" },
      {
        type: "p",
        text: "A system that has been serviced regularly tends to fail in smaller, more isolated ways: one worn part, found and replaced before it drags anything else down with it. A system that has run for years without a clean or a check is more likely to present with several problems at once, a weak capacitor alongside a filthy coil alongside a drain line that has never been flushed, simply because nothing has been attended to in the meantime.",
      },
      {
        type: "p",
        text: "This is really the practical case for routine servicing. It is not that a service prevents every future repair, but that it tends to keep the repairs that do happen smaller, more contained and easier to diagnose than they would be on a unit that has been ignored for years.",
      },
      { type: "h2", id: "emergency-vs-scheduled", text: "Emergency call-outs against scheduled visits" },
      {
        type: "p",
        text: "A fault that is discovered calmly, with time to book a convenient slot during normal hours, is generally a more straightforward job to arrange than the same fault discovered as a genuine breakdown that needs attention immediately, often outside normal hours. The difference is less about the repair itself and more about the circumstances it has to be carried out in, which is one more reason an early check, before a part fails completely, tends to be the easier route.",
      },
      { type: "h2", id: "what-to-ask", text: "What to ask before work begins" },
      {
        type: "ol",
        items: [
          "What exactly was found during the inspection, in plain terms you can picture?",
          "Is the cost mostly the part, mostly the labour, or roughly both?",
          "Is this a stand-alone fault, or a sign that other parts are likely to fail soon too?",
          "Are there options, such as a more limited repair against a fuller one, and what is the difference between them?",
          "At what point would replacing the unit make more sense than continuing to repair it?",
        ],
      },
      {
        type: "p",
        text: "Asking for the cost after the inspection, and before any work starts, is the single most useful habit here. It turns a vague worry about price into a specific answer about your specific fault, which is really the only kind of answer that means anything.",
      },
      {
        type: "p",
        text: "None of this is about avoiding the question of cost. It is about recognising that an honest cost can only follow a proper inspection, because the fault, not the symptom, is what actually decides the size of the job.",
      },
      { type: "h2", id: "commercial-vs-residential", text: "Residential against commercial premises" },
      {
        type: "p",
        text: "A repair on a large commercial system, such as a chiller serving several floors of an office or a cluster of units behind a restaurant kitchen, generally involves more capacity, more pipework and more components than a single split unit in a bedroom. The same factors above still decide the size of the job, but they are scaled up, which is why a commercial call-out and a residential one are rarely comparable even when the underlying fault sounds similar on paper.",
      },
      {
        type: "p",
        text: "If you manage several units across a commercial site, it is worth asking whether faults found on one unit are likely to show up on similar units nearby, since systems of the same age and type installed at the same time often wear in similar ways and sometimes point to one repair worth planning for the whole site rather than several separate call-outs spread across the following months.",
      },
    ],
  },
  {
    slug: "are-ac-maintenance-contracts-worth-it",
    title: "Are AC Maintenance Contracts Worth It for Dubai Homes and Businesses?",
    description:
      "What an annual AC maintenance contract actually changes compared with booking services as needed, and who in Dubai tends to benefit most from one.",
    category: "AC Maintenance",
    status: "published",
    publishedAt: "2026-11-18",
    author: AUTHOR,
    relatedServices: ["ac-maintenance-dubai", "ac-servicing-dubai"],
    blocks: [
      {
        type: "p",
        text: "Every air conditioner in Dubai needs cleaning and checking on a schedule, whether or not anyone signs a contract for it. The real question behind an annual maintenance contract, or AMC, is not whether maintenance is worth doing. It clearly is. The question is whether having it arranged in advance, as a fixed set of visits agreed for the year, suits your situation better than booking a service whenever you remember to.",
      },
      {
        type: "p",
        text: "Al Naveed AC Repair & Maintenance offers annual maintenance contracts to both homes and businesses. What follows is a plain look at what that kind of arrangement actually changes, so you can decide whether it fits your property.",
      },
      { type: "h2", id: "what-changes", text: "What a contract actually changes" },
      {
        type: "p",
        text: "A one-off service and a maintenance contract cover the same ground on each visit: filters, coils, the drain line, electrical connections, refrigerant pressure. What a contract changes is not what happens during a visit, but when the visits happen and who is responsible for remembering.",
      },
      {
        type: "ul",
        items: [
          "The number and timing of visits is agreed for the year, rather than decided one booking at a time",
          "Visits are scheduled ahead of the seasons that matter most, typically before summer and again afterwards, instead of whenever someone notices a problem",
          "The condition of each unit can be tracked from one visit to the next, which makes it easier to see a part that is gradually wearing rather than discovering it has already failed",
          "For a property with several units, one arrangement covers all of them rather than several separate bookings",
        ],
      },
      { type: "h2", id: "homes", text: "For homes" },
      {
        type: "p",
        text: "A household that is already in the habit of booking a service every six months, cleaning filters in between and acting promptly when something changes probably gets most of the benefit of a contract already, just without a document that says so. The value of a contract here is mainly about not having to remember, which matters more in some households than others depending on how busy life already is.",
      },
      {
        type: "p",
        text: "A household that tends to let maintenance slip until something actually goes wrong is a better fit for a contract, precisely because the schedule removes the decision from the to-do list. The visits happen because they were agreed months earlier, not because anyone had to notice the unit was overdue.",
      },
      { type: "h2", id: "landlords", text: "For landlords and property managers" },
      {
        type: "p",
        text: "Where one person is responsible for several apartments, villas or units across a building, a contract tends to make more practical sense than individually booked services. Instead of chasing several separate bookings and keeping track of when each unit was last done, there is one schedule covering everything, and one point of contact if something needs attention between visits.",
      },
      {
        type: "p",
        text: "This matters particularly for rented property, where a tenant may not think to book maintenance themselves, and the landlord only hears about a problem once the unit has already failed, often during the tenancy's hottest and least convenient month.",
      },
      { type: "h2", id: "businesses", text: "For offices, shops and restaurants" },
      {
        type: "p",
        text: "A business where a failed AC means lost trade, uncomfortable customers, spoiled stock or a server room running hot has the clearest case for a contract. The cost of a breakdown here is rarely just the repair. It is the hours or days of disruption around it, which a scheduled visit is specifically aimed at avoiding.",
      },
      {
        type: "p",
        text: "Restaurants and kitchens in particular tend to see coils and filters clog faster than a typical home, because of grease and cooking fumes in the air, which makes a reliable schedule more valuable rather than less.",
      },
      { type: "h2", id: "older-systems", text: "For older systems" },
      {
        type: "p",
        text: "A system that is past its first few years of life benefits from closer, more regular attention to its electrical parts and refrigerant pressure, since this is the stage where components start to wear rather than simply collect dust. A contract that tracks the same units over several visits makes it easier to catch a part that is gradually failing before it fails completely, rather than relying on whoever happens to be called after it already has.",
      },
      { type: "h2", id: "between-visits", text: "What a contract does not replace" },
      {
        type: "p",
        text: "A scheduled visit, however regular, does not remove the value of simple things done between visits: rinsing filters every few weeks, keeping the area around the outdoor unit clear, and switching the unit off rather than letting it run when something clearly sounds or smells wrong. A contract organises the bigger checks. It is not a reason to stop doing the small ones in between.",
      },
      {
        type: "p",
        text: "It is also worth being realistic about what a contract covers if a major part fails unexpectedly between visits. Some arrangements treat an out-of-schedule repair as a separate job with its own cost, while others build some allowance for it into the contract. This is exactly the kind of detail that should be settled in writing rather than assumed.",
      },
      { type: "h2", id: "mixed-fleets", text: "Properties with a mix of old and new units" },
      {
        type: "p",
        text: "Many homes and offices in Dubai end up with units installed at different times, some recently replaced and some considerably older, after years of individual repairs and replacements rather than one coordinated upgrade. A maintenance contract covering the whole set is still useful here, since the schedule can note which units need closer attention because of their age, rather than treating every unit on the property identically.",
      },
      { type: "h2", id: "what-to-check", text: "What to check before signing anything" },
      {
        type: "p",
        text: "A contract is only as good as what is actually written down. Before agreeing to one, make sure every unit you expect to be covered is listed by name or location, not just a general total. Ask what is included on a routine visit, whether anything between scheduled visits is covered separately, and how a repair that is found during a visit is handled.",
      },
      {
        type: "callout",
        title: "Get the terms in writing",
        text: "Ask for the number of visits, the units covered and what happens between visits in writing before you sign. A verbal understanding is easy to remember differently a year later, once the person who agreed to it may not even be the one who answers the phone.",
      },
      { type: "h2", id: "choosing-between-approaches", text: "Deciding which approach suits you" },
      {
        type: "p",
        text: "There is no single right answer here, and it is worth being honest with yourself about which category you fall into before deciding either way. If you already book a service like clockwork twice a year, track which units have been seen recently, and respond quickly when something changes, a contract mainly buys you a document and a single point of contact rather than a different level of care. If maintenance tends to happen only after something has already gone wrong, a contract is more likely to change what actually happens to the units in your home or business.",
      },
      {
        type: "p",
        text: "The size of the property matters too. A single apartment with one or two units is easy to keep track of without any formal arrangement. A villa with half a dozen units, or a building with dozens spread across several tenants, is much harder to manage informally, and that is usually where a contract earns its keep most clearly, simply because there are more dates, more units and more chances for something to be quietly forgotten.",
      },
      { type: "h2", id: "the-honest-summary", text: "The honest summary" },
      {
        type: "p",
        text: "A maintenance contract does not make an air conditioner need less maintenance. It changes who is responsible for making sure that maintenance actually happens on time, and it gives one arrangement to manage instead of several separate bookings across a year. For a household that is already organised about it, the benefit is smaller. For landlords, busier households, and most businesses, having the schedule fixed in advance tends to be worth more than it costs in the one season a breakdown would otherwise have caught everyone by surprise.",
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
