import "server-only";
import { areaPath, areas, areaShortName } from "@/content/areas";
import { addressOneLine, site } from "@/lib/site";

/**
 * Rule-based replies used when no AI model is configured, or when the model cannot be
 * reached. Keeps the assistant useful instead of showing an error.
 */

const phone = site.phone.primary.display;
const reach = `Call ${phone}, message us on WhatsApp, or send a [booking request](/book).`;

type Intent = { match: RegExp; reply: string };

const intents: Intent[] = [
  {
    match: /burn|smoke|spark|fire|shock|electri|trip/i,
    reply: `Switch the unit off at the wall isolator or the breaker and leave it off. Do not keep resetting a breaker that trips. This needs a technician. We are open 24 hours: call ${phone} now. More on our [emergency AC repair](/services/emergency-ac-repair-dubai) page.`,
  },
  {
    match: /emergenc|urgent|asap|right now|tonight|immediately/i,
    reply: `We are open 24 hours, every day. Phoning is the fastest way to reach us: ${phone}. Tell us your area, your building and what the AC is doing. See [emergency AC repair](/services/emergency-ac-repair-dubai).`,
  },
  // Price and booking questions come before topic matches, so "how much is a gas refill"
  // is answered as a price question.
  {
    match: /price|cost|charge|fee|how much|rate|quote|quotation|aed|dirham|cheap|expens/i,
    reply: `I cannot quote prices. The cost depends on the unit, the fault and the parts needed, and our team gives it once they know the details. ${reach}`,
  },
  {
    match:
      /book|appointment|schedule|visit|come (to|out)|send (a )?technician|slot|available|availability/i,
    reply: `I cannot confirm appointment times, but you can send a [booking request](/book) and the team will call you to agree one. For anything urgent, call ${phone}. We are open 24 hours.`,
  },
  {
    match: /leak|drip|water/i,
    reply: `Water usually means a blocked drain line, or ice melting off a frozen coil. Switch the AC off to stop more water forming and put towels down. A technician needs to clear the drain and check the coil. See [AC repair](/services/ac-repair-dubai). ${reach}`,
  },
  {
    match:
      /not cool|n't cool|no cool|warm air|hot air|not cold|stopped cooling|isn't cold|not working|won't (start|turn)|doesn't (start|turn|work)/i,
    reply: `Common causes are a clogged filter, a dirty coil, low refrigerant from a leak, or a failed electrical part. You can safely check that the thermostat is set to cool and that the filter is clean. If it still blows warm air, it needs inspecting. See [AC repair](/services/ac-repair-dubai). ${reach}`,
  },
  {
    match: /\bice\b|frozen|freez|frost/i,
    reply: `Ice on the pipes or indoor unit points to restricted airflow or low refrigerant. Switch the cooling off and let it thaw, and check whether the filter is clogged. If the ice comes back, a technician should check the coil and the gas pressure. See [AC gas refilling](/services/ac-gas-refilling-dubai).`,
  },
  {
    match: /noise|noisy|loud|rattl|buzz|grind|vibrat/i,
    reply: `Unusual noise often comes from worn fan bearings, a loose panel or debris in the blower. A burning smell with it is an electrical warning, so switch the unit off. See [AC repair](/services/ac-repair-dubai). ${reach}`,
  },
  {
    match: /smell|odou?r|musty|mould|mold/i,
    reply: `A musty smell usually means moisture and dust in the drain tray or on the coil, which a full service clears. A burning smell is different: switch the unit off and call us. See [AC servicing](/services/ac-servicing-dubai).`,
  },
  {
    match: /gas|refrigerant|refill|top.?up|recharge|freon/i,
    reply: `Refrigerant is not used up, so an AC only needs gas if there is a leak. A technician measures the pressure, looks for the leak and recharges the system. It is not safe to do yourself. See [AC gas refilling](/services/ac-gas-refilling-dubai).`,
  },
  {
    match: /duct/i,
    reply: `Duct cleaning is for ducted and central systems with ceiling vents. It removes dust from grilles, accessible ductwork and the fan coil unit. Wall-mounted split units have no ducts and need servicing instead. See [HVAC duct cleaning](/services/hvac-duct-cleaning-dubai).`,
  },
  {
    match: /coil/i,
    reply: `Dirty coils cut cooling, cause icing and raise electricity use. We clean both the indoor and outdoor coils. See [AC coil cleaning](/services/ac-coil-cleaning-dubai).`,
  },
  {
    match: /thermostat|remote|display|controller/i,
    reply: `A blank or unresponsive thermostat can be flat batteries, a wiring fault, or a problem in the unit it controls. We test all three before recommending a replacement. See [thermostat repair and replacement](/services/thermostat-repair-dubai).`,
  },
  {
    match: /install|new (ac|unit|air)|replace|replacement|relocat|move (my|the|an) /i,
    reply: `We install new and replacement units, including pipework, drainage, electrical connection and a tested start-up. See [AC installation](/services/ac-installation-dubai). Tell the team about the room and the unit for a quotation.`,
  },
  {
    match: /amc|contract|annual|maintenan|regular/i,
    reply: `We offer planned maintenance visits and annual maintenance contracts for homes and businesses. The schedule and what is covered are agreed for each property. See [AC maintenance](/services/ac-maintenance-dubai).`,
  },
  {
    match: /servic|clean|filter|wash/i,
    reply: `A service cleans the filters, coils, blower and drain line, washes the outdoor unit and checks gas pressure and electrics. Twice a year suits most Dubai homes. See [AC servicing](/services/ac-servicing-dubai).`,
  },
  {
    match: /hour|open|close|24|night|weekend|friday|sunday|holiday/i,
    reply: `We are open 24 hours, every day of the week. Call ${phone} or message us on WhatsApp at any time.`,
  },
  {
    match: /where|address|location|located|shop|workshop|office|map|direction/i,
    reply: `Our workshop is at ${addressOneLine}. We serve the whole of Dubai from there. Details are on the [contact page](/contact).`,
  },
  {
    match: /area|cover|serve|come to|near me|my area/i,
    reply: `We are based in Naif, Deira, and serve Dubai, including Downtown Dubai, Business Bay, Jumeirah, Al Barsha, JVC, JLT, Dubai Marina, Palm Jumeirah, Al Quoz, Mirdif, Barsha Heights, Karama, Satwa, Bur Dubai, Al Nahda, Dubai Hills Estate, Arabian Ranches and International City. See [all areas](/areas). If yours is not listed, call ${phone} and ask.`,
  },
  {
    match: /phone|call|number|contact|whatsapp|email|reach|speak|talk|human|person|agent|someone/i,
    reply: `You can call ${phone}, message us on WhatsApp on ${site.whatsapp.display}, or email ${site.email}. All the details are on the [contact page](/contact).`,
  },
  {
    match: /commercial|office|shop|restaurant|business|warehouse|store/i,
    reply: `Yes, we work on air conditioning in offices, shops and other business premises, and can come outside trading hours. Tell the team about the premises on the [contact page](/contact) or call ${phone}.`,
  },
  {
    match: /review|rating|google|trust|reliable/i,
    reply: `We are rated ${site.google.rating} out of 5 from ${site.google.reviewCount} reviews on Google (${site.google.asOf}). You can read them on our Google Business Profile, linked from the homepage.`,
  },
  {
    match: /^(hi|hello|hey|salam|salaam|good (morning|afternoon|evening))\b/i,
    reply: `Hello. I can explain our services, help you make sense of an AC problem, or show you how to reach the team. What is your AC doing?`,
  },
  {
    match: /thank|thanks|shukran/i,
    reply: `You are welcome. If you need anything else, call ${phone}. We are open 24 hours.`,
  },
];

export function guidedReply(message: string): string {
  const text = message.trim();

  const area = areas.find((a) => {
    const names = [a.name, areaShortName(a), a.slug.replace(/-/g, " ")];
    return names.some((n) => text.toLowerCase().includes(n.toLowerCase()));
  });

  const intent = intents.find((i) => i.match.test(text));

  if (area && (!intent || /area|cover|serve|come to/i.test(text))) {
    return `Yes, we work in ${areaShortName(area)}. Our page for [${areaShortName(area)}](${areaPath(area.slug)}) describes the systems that are typical there and what to tell us when you book. ${reach}`;
  }

  if (intent) return intent.reply;

  return `I can help with AC repair, servicing, maintenance, installation, gas refilling and duct cleaning, and with how to book or contact us. Could you tell me a little more about what you need? For a quick answer from the team, call ${phone}.`;
}
