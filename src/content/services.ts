export type ServiceIconKey =
  | "repair"
  | "maintenance"
  | "servicing"
  | "installation"
  | "gas"
  | "duct"
  | "emergency"
  | "coil"
  | "thermostat";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  icon: ServiceIconKey;
  /** Shown on the homepage grid. */
  featured: boolean;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  lead: string;
  intro: string[];
  signsTitle: string;
  signs: { title: string; text: string }[];
  includesTitle: string;
  includes: string[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  note: { title: string; paragraphs: string[] };
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "ac-repair-dubai",
    name: "AC Repair",
    icon: "repair",
    featured: true,
    title: "AC Repair in Dubai",
    metaTitle: "AC Repair Dubai | Open 24 Hours",
    metaDescription:
      "AC not cooling, leaking or tripping the breaker? Al Naveed repairs split, ducted, window and central air conditioners across Dubai, 24 hours a day.",
    summary:
      "Fault-finding and repair for air conditioners that have stopped cooling, started leaking or won't switch on.",
    lead: "When the air conditioner stops cooling, leaks or refuses to start, a technician inspects it, finds the cause and tells you what repair is recommended.",
    intro: [
      "Most AC breakdowns in Dubai trace back to a handful of causes: a failed capacitor or contactor, a blocked drain line, a refrigerant leak, a seized fan motor, or a coil so clogged with dust that the system can no longer move heat. From the outside these faults look alike. The room is warm and the unit is making the wrong noise. Telling them apart takes gauges, a meter and a proper look at both the indoor and outdoor units.",
      "Al Naveed AC Repair & Maintenance works on residential and commercial systems from a workshop in Naif, Deira, and is open 24 hours every day.",
    ],
    signsTitle: "Problems we are called out for",
    signs: [
      {
        title: "Running but not cooling",
        text: "Air comes out, but it is warm or only slightly cool. Common causes are low refrigerant, a dirty coil, a failed compressor capacitor or an outdoor fan that has stopped.",
      },
      {
        title: "Water dripping indoors",
        text: "Usually a blocked drain line or a cracked drain tray. Sometimes it is ice melting off a frozen coil, which points to an airflow or refrigerant problem.",
      },
      {
        title: "Won't switch on, or trips the breaker",
        text: "This can be a control board fault, a damaged cable, a shorted compressor or a failed thermostat. A breaker that trips again after one reset should be left off.",
      },
      {
        title: "Grinding, rattling or buzzing",
        text: "Worn fan bearings, a loose panel, debris in the blower wheel or an electrical component that is about to fail.",
      },
      {
        title: "Ice on the pipes or indoor unit",
        text: "Restricted airflow from dirty filters and coils, or low refrigerant. Running the unit while it is iced can damage the compressor.",
      },
      {
        title: "Bad smell when it starts",
        text: "Damp, musty air suggests mould in the drain tray or on the coil. A burning smell is an electrical warning. Switch the unit off.",
      },
    ],
    includesTitle: "What a repair visit covers",
    includes: [
      "Inspection of the indoor unit, outdoor unit and thermostat",
      "Electrical checks on capacitors, contactors, wiring and the control board",
      "Refrigerant pressure reading where low gas is suspected",
      "Drain tray and drain line check",
      "An explanation of the fault and the repair that is recommended",
      "A test run once the repair is done",
    ],
    stepsTitle: "How a repair works",
    steps: [
      {
        title: "Tell us what is happening",
        text: "Call or WhatsApp with your area, the type of AC and what it is doing. A photo or short video of the unit helps.",
      },
      {
        title: "Inspection",
        text: "A technician checks the system at your property to find the cause, not only the symptom.",
      },
      {
        title: "Recommendation",
        text: "You hear what was found and what repair is advised. Ask for the cost at this point, before work begins.",
      },
      {
        title: "Repair and test",
        text: "The repair is carried out and the system is run to confirm it is cooling properly.",
      },
    ],
    note: {
      title: "Repair or replace?",
      paragraphs: [
        "A repair is usually the right call when the fault is a single component such as a capacitor, fan motor, sensor or drain, and the rest of the system is in sound condition.",
        "Replacement starts to make sense when the compressor has failed on an old unit, when the coil is corroded and leaking in several places, or when the system runs on R22. R22 is being phased out worldwide, so keeping those units charged becomes harder every year.",
        "If a technician recommends replacement, ask what was found and what a repair would involve instead, so you can compare the two.",
      ],
    },
    faqs: [
      {
        q: "How soon can a technician come?",
        a: "We are open 24 hours, every day. Call or WhatsApp with your location and the problem, and we will tell you when a technician can reach you.",
      },
      {
        q: "How much does an AC repair cost?",
        a: "It depends on the fault and the parts needed, so we do not publish fixed prices. Once the technician has inspected the unit, ask for the cost before any work starts.",
      },
      {
        q: "What should I do while I wait?",
        a: "If the unit is leaking, iced over, tripping the breaker or giving off a burning smell, switch it off at the wall isolator and leave it off. If it is only cooling poorly, you can check that the filter is clean and the thermostat is set to cool.",
      },
      {
        q: "Do you repair AC units in offices and shops?",
        a: "Yes. We work on both residential and commercial air conditioning. Tell us the type of system and the size of the premises when you get in touch.",
      },
    ],
    related: ["emergency-ac-repair-dubai", "ac-gas-refilling-dubai", "ac-servicing-dubai"],
  },
  {
    slug: "ac-maintenance-dubai",
    name: "AC Maintenance",
    icon: "maintenance",
    featured: true,
    title: "AC Maintenance in Dubai",
    metaTitle: "AC Maintenance Dubai | Annual Contracts (AMC)",
    metaDescription:
      "Planned AC maintenance and annual maintenance contracts for homes, offices and shops in Dubai. Scheduled visits that catch faults before summer does.",
    summary:
      "Planned visits and annual maintenance contracts that keep systems clean, checked and ready for summer.",
    lead: "Scheduled maintenance for homes, landlords and businesses. Each visit cleans and checks the system so small faults are found before they turn into a breakdown in August.",
    intro: [
      "Air conditioners in Dubai work harder than almost anywhere else. They run for most of the year, pull in fine dust and deal with coastal humidity. Filters clog, coils foul, drain lines grow algae and electrical parts wear. None of that announces itself until the unit fails on a 45°C afternoon.",
      "Maintenance is the planned alternative. A technician visits on a schedule, cleans what needs cleaning, measures what needs measuring and tells you about anything that is wearing out. For properties that want this handled all year, we offer annual maintenance contracts (AMC).",
    ],
    signsTitle: "Who planned maintenance suits",
    signs: [
      {
        title: "Homeowners and tenants",
        text: "Villas and apartments where the AC runs daily and a summer breakdown would make the home unliveable.",
      },
      {
        title: "Landlords and property managers",
        text: "One arrangement covering several units or buildings, with visits scheduled rather than chased.",
      },
      {
        title: "Offices, shops and restaurants",
        text: "Premises where a failed AC means lost trade, uncomfortable staff or spoiled stock.",
      },
      {
        title: "Older systems",
        text: "Units that are past their first few years benefit most from regular checks on electrical parts and refrigerant pressure.",
      },
    ],
    includesTitle: "What a maintenance visit covers",
    includes: [
      "Filters removed, washed and refitted",
      "Indoor and outdoor coils inspected and cleaned where needed",
      "Drain tray and drain line cleared and flushed",
      "Electrical connections, capacitors and contactors checked",
      "Refrigerant pressure checked",
      "Fan motors and blower checked for noise and wear",
      "Thermostat operation checked",
      "A summary of anything that needs attention",
    ],
    stepsTitle: "Setting up maintenance",
    steps: [
      {
        title: "Tell us about the property",
        text: "How many units, what type they are, and whether it is a home or business premises.",
      },
      {
        title: "Agree the schedule",
        text: "A one-off maintenance visit, or an annual contract with visits spread through the year.",
      },
      {
        title: "Visits take place",
        text: "Each visit follows the same checklist so nothing is skipped from one visit to the next.",
      },
      {
        title: "You hear what was found",
        text: "If a part is wearing or a repair is advisable, you are told so you can decide what to do.",
      },
    ],
    note: {
      title: "About annual maintenance contracts",
      paragraphs: [
        "An AMC sets out a number of scheduled visits per year for a fixed set of units. What else it includes, such as call-outs between visits or parts, is agreed when the contract is set up and depends on the property and the equipment.",
        "Ask us for the terms in writing before you sign, and check that every unit you expect to be covered is listed.",
        "The most useful time for a maintenance visit is before the heat arrives, between March and May, with a second visit after summer.",
      ],
    },
    faqs: [
      {
        q: "How often should an AC be maintained in Dubai?",
        a: "Twice a year suits most homes: once before summer and once after. Units that run around the clock, or sit in dusty or coastal locations, benefit from more frequent visits.",
      },
      {
        q: "What is the difference between maintenance and servicing?",
        a: "Servicing is a single visit to clean and check a unit. Maintenance is the ongoing plan: servicing repeated on a schedule, with the condition of each unit followed over time.",
      },
      {
        q: "What does an annual maintenance contract include?",
        a: "The number of visits, the units covered and what happens between visits are agreed for each property. Contact us with the details of yours and ask for the terms in writing.",
      },
      {
        q: "Can you maintain several apartments or a whole building?",
        a: "Yes. Tell us how many units there are and where, and we will discuss how visits can be scheduled.",
      },
    ],
    related: ["ac-servicing-dubai", "ac-coil-cleaning-dubai", "hvac-duct-cleaning-dubai"],
  },
  {
    slug: "ac-servicing-dubai",
    name: "AC Servicing",
    icon: "servicing",
    featured: true,
    title: "AC Servicing in Dubai",
    metaTitle: "AC Servicing Dubai | Cleaning and Full Check",
    metaDescription:
      "One-off AC servicing in Dubai: filters, coils, drain line and outdoor unit cleaned, with pressure and electrical checks. Homes and businesses.",
    summary:
      "A full clean and check of filters, coils, drain line and outdoor unit to restore airflow and cooling.",
    lead: "A single visit that cleans the parts of your AC that collect dust and water, and checks the parts that wear. Good for units that are cooling weakly, smelling musty or overdue a clean.",
    intro: [
      "An air conditioner cools by passing room air over a cold coil. Everything in that air ends up somewhere inside the unit: dust on the filter, a film on the coil, sludge in the drain tray. Over months the airflow drops, the unit runs longer to reach the same temperature and the electricity bill follows.",
      "A service reverses that. It is the right choice when the unit still works but not as well as it used to.",
    ],
    signsTitle: "Signs a unit is due a service",
    signs: [
      {
        title: "Weaker airflow than before",
        text: "The fan is running, but less air reaches the room. Filters and the blower wheel are the usual cause.",
      },
      {
        title: "Takes longer to cool",
        text: "A dirty coil cannot absorb heat properly, so the compressor runs for longer.",
      },
      {
        title: "Musty smell on start-up",
        text: "Moisture and dust in the drain tray and on the coil allow mould to grow.",
      },
      {
        title: "Water dripping from the indoor unit",
        text: "A partly blocked drain line overflows the tray. Cleaning the line during a service often resolves it.",
      },
      {
        title: "More than six months since the last clean",
        text: "In Dubai's dust, that is long enough for filters and coils to load up.",
      },
    ],
    includesTitle: "What a service covers",
    includes: [
      "Filters washed and dried",
      "Indoor (evaporator) coil cleaned",
      "Blower wheel and fan cleaned",
      "Drain tray cleaned and drain line flushed",
      "Outdoor (condenser) coil washed",
      "Refrigerant pressure checked",
      "Electrical connections checked",
      "Test run with supply air temperature checked",
    ],
    stepsTitle: "How a service visit goes",
    steps: [
      {
        title: "Book a time",
        text: "Tell us how many units you have and what type: split, ducted, window or cassette.",
      },
      {
        title: "Protect and open up",
        text: "The area under the unit is covered and the unit is opened for cleaning.",
      },
      {
        title: "Clean and check",
        text: "Each part on the list above is cleaned or checked in turn, indoors and outdoors.",
      },
      {
        title: "Test and report",
        text: "The unit is run and you are told about anything that was found.",
      },
    ],
    note: {
      title: "What servicing does not fix",
      paragraphs: [
        "A service restores performance that was lost to dirt. It does not repair a failed part. If the technician finds a leaking coil, a weak capacitor or a worn fan motor during the service, you will be told, and the repair is a separate job.",
        "Split units do not have ducts, so they do not need duct cleaning. If your home has ducted or central air conditioning, ask about duct cleaning as well.",
      ],
    },
    faqs: [
      {
        q: "How long does an AC service take?",
        a: "It depends on the number of units, their type and how dirty they are. Tell us what you have and we can give you an idea when you book.",
      },
      {
        q: "Do I need to be at home?",
        a: "Someone needs to give the technician access to the indoor units and, where it is on a balcony or roof, the outdoor unit.",
      },
      {
        q: "Can I clean the filters myself between services?",
        a: "Yes. On most split units the front panel lifts and the filters slide out. Follow the manufacturer's manual, rinse them with water, let them dry fully and refit them. Leave coils, electrics and refrigerant to a technician.",
      },
      {
        q: "Is AC servicing the same as gas refilling?",
        a: "No. A service includes a pressure check. Gas is only added if the pressure is low, and low pressure means there is a leak that should be found first.",
      },
    ],
    related: ["ac-maintenance-dubai", "ac-coil-cleaning-dubai", "ac-repair-dubai"],
  },
  {
    slug: "ac-installation-dubai",
    name: "AC Installation",
    icon: "installation",
    featured: true,
    title: "AC Installation in Dubai",
    metaTitle: "AC Installation Dubai | New and Replacement Units",
    metaDescription:
      "Installation of new and replacement air conditioners in Dubai homes and businesses: mounting, pipework, drainage, electrical connection and commissioning.",
    summary:
      "New and replacement units installed with correct pipework, drainage and commissioning.",
    lead: "Installation of new air conditioners and replacement of old ones, for homes and business premises. The work covers mounting, pipework, drainage, electrical connection and a tested start-up.",
    intro: [
      "How an air conditioner is installed decides how well it works for the rest of its life. A drain line without enough fall will leak. Pipework that was not vacuumed properly leaves moisture in the system that shortens the compressor's life. An outdoor unit boxed into a corner with no airflow will overheat every summer.",
      "These are installation faults, and we repair the results of them regularly. Getting them right on the day costs far less than fixing them later.",
    ],
    signsTitle: "Installation work we take on",
    signs: [
      {
        title: "New unit in a room without AC",
        text: "A site check to choose the position of the indoor and outdoor units, the pipe route and the drain.",
      },
      {
        title: "Replacing an old or failed unit",
        text: "Removal of the old system and installation of the new one, reusing pipework only where it is suitable.",
      },
      {
        title: "Shops, offices and fit-outs",
        text: "Installation for commercial premises, timed around trading hours where needed.",
      },
      {
        title: "Moving a unit",
        text: "Recovering the refrigerant, taking the system down and reinstalling it in a new position or property.",
      },
    ],
    includesTitle: "What an installation covers",
    includes: [
      "Site check: unit positions, pipe route, drainage and power supply",
      "Indoor and outdoor units mounted and levelled",
      "Insulated refrigerant pipework run and connected",
      "Drain line fitted with the correct fall",
      "Electrical connection to the supply and isolator",
      "Pipework vacuumed before refrigerant is released",
      "Leak check on all joints",
      "Start-up, cooling test and a run-through of the controls",
    ],
    stepsTitle: "How an installation works",
    steps: [
      {
        title: "Tell us what you need",
        text: "The room or premises, whether you already have the unit, and whether an old one needs removing.",
      },
      {
        title: "Site check",
        text: "A technician looks at where the units, pipes and drain can go and what the power supply allows.",
      },
      {
        title: "Installation",
        text: "Units are mounted, piped, wired and vacuumed, then the refrigerant is released and joints are checked.",
      },
      {
        title: "Commissioning",
        text: "The system is run and tested, and you are shown how to operate it.",
      },
    ],
    note: {
      title: "Before you buy a unit",
      paragraphs: [
        "Capacity matters more than brand. A unit that is too small runs constantly and never reaches temperature. A unit that is too large cools the air quickly, switches off, and leaves the room feeling damp because it never runs long enough to remove humidity. Room size, ceiling height, sun exposure and the number of people all affect the right size.",
        "If you have not bought yet, tell us about the room and we can talk through capacity first.",
        "In apartments, check with your landlord or building management before installation. Many buildings in Dubai have rules about where outdoor units can go and when drilling is allowed.",
      ],
    },
    faqs: [
      {
        q: "Do I need permission to install an AC in my apartment?",
        a: "Often, yes. Tenants usually need the landlord's approval, and many buildings ask contractors to register with building management or obtain a work permit. Check before the installation date.",
      },
      {
        q: "Can you install a unit I have already bought?",
        a: "Tell us the make, model and capacity when you get in touch, and we will let you know.",
      },
      {
        q: "Can an existing AC be moved to another room or home?",
        a: "In most cases, yes. The refrigerant is recovered, both units are taken down, and the system is reinstalled with new pipework where needed. Contact us with the details and we will explain what is involved.",
      },
      {
        q: "How much does installation cost?",
        a: "It depends on the unit, the length of the pipe run and the access to the outdoor position. We do not publish fixed prices. Contact us with the details for a quotation.",
      },
    ],
    related: ["ac-maintenance-dubai", "thermostat-repair-dubai", "ac-repair-dubai"],
  },
  {
    slug: "ac-gas-refilling-dubai",
    name: "AC Gas Refilling",
    icon: "gas",
    featured: true,
    title: "AC Gas Refilling in Dubai",
    metaTitle: "AC Gas Refilling Dubai | Leak Check and Recharge",
    metaDescription:
      "AC gas refilling in Dubai with pressure testing and leak checks. Refrigerant is recharged to the correct level after the cause of the loss is found.",
    summary:
      "Pressure testing, leak checks and refrigerant recharge for systems that are low on gas.",
    lead: "If your AC is low on refrigerant, it has a leak. We measure the pressure, look for where the gas is escaping and recharge the system to the correct level.",
    intro: [
      "Refrigerant, often called AC gas, is not a fuel. It circulates in a sealed loop and is never used up. A system that was charged correctly at installation should hold that charge for its whole life.",
      "So when a technician finds the pressure is low, the question that matters is where the gas went. Topping up without finding the leak gets the cooling back for a while, and then the same problem returns. Sometimes that takes months. Sometimes it takes weeks.",
    ],
    signsTitle: "Signs that point to low refrigerant",
    signs: [
      {
        title: "Air is cool but not cold",
        text: "The unit runs continuously and the room never reaches the set temperature.",
      },
      {
        title: "Ice on the copper pipe or indoor coil",
        text: "Low pressure makes the coil run below freezing, and moisture in the air freezes onto it.",
      },
      {
        title: "Hissing or bubbling near the unit",
        text: "The sound of refrigerant escaping from a joint or a pinhole in the coil.",
      },
      {
        title: "Oil stains on pipe joints",
        text: "Refrigerant carries compressor oil with it, which leaves a mark where it leaks.",
      },
      {
        title: "Electricity bills creeping up",
        text: "The compressor runs for longer to deliver less cooling.",
      },
    ],
    includesTitle: "What gas refilling covers",
    includes: [
      "Pressure measured with gauges, not guessed from symptoms",
      "Joints, valves and coils checked for leaks",
      "The leak and repair options explained before refilling",
      "System recharged with the refrigerant type it was designed for",
      "Pressures and cooling checked after the recharge",
    ],
    stepsTitle: "How gas refilling works",
    steps: [
      {
        title: "Describe the symptoms",
        text: "Tell us what the unit is doing and, if you know it, the refrigerant type shown on the outdoor unit's label.",
      },
      {
        title: "Pressure test",
        text: "The technician connects gauges to confirm whether the system is low.",
      },
      {
        title: "Leak check",
        text: "Joints and coils are checked to find where refrigerant has been escaping.",
      },
      {
        title: "Recharge and test",
        text: "The system is charged to the correct level and run to confirm it is cooling.",
      },
    ],
    note: {
      title: "Three things worth knowing",
      paragraphs: [
        "The same symptoms have other causes. A clogged filter or a dirty coil also produces weak cooling and ice. A proper pressure reading is the only way to know whether gas is the problem, so be wary of anyone who recommends a refill without connecting gauges.",
        "Refrigerants are not interchangeable. R22, R410A and R32 run at different pressures and use different oils. A system must be charged with the type printed on its data plate.",
        "Refrigerant work is not a do-it-yourself job. It is stored under high pressure and can cause frostbite on contact. It should only be handled by a trained technician with the right equipment.",
      ],
    },
    faqs: [
      {
        q: "How often does an AC need gas refilling?",
        a: "It should not need it on any schedule. Refrigerant is not consumed. If the level is low, there is a leak, and the lasting fix is to repair it.",
      },
      {
        q: "How do I know my AC is low on gas?",
        a: "Weak cooling, ice on the pipes and long run times are the usual signs, but dirty filters and coils cause the same symptoms. A technician confirms it by measuring the pressure.",
      },
      {
        q: "Is it safe to keep using an AC that is low on gas?",
        a: "It is better not to. The compressor relies on returning refrigerant for cooling, and running it low for long periods can damage it. Switch the unit off if you see ice and get it checked.",
      },
      {
        q: "How much does gas refilling cost?",
        a: "It depends on the refrigerant type, how much is needed and whether a leak has to be repaired first. We do not publish fixed prices. Ask for the cost after the pressure test.",
      },
    ],
    related: ["ac-repair-dubai", "ac-coil-cleaning-dubai", "ac-servicing-dubai"],
  },
  {
    slug: "hvac-duct-cleaning-dubai",
    name: "HVAC Duct Cleaning",
    icon: "duct",
    featured: true,
    title: "HVAC Duct Cleaning in Dubai",
    metaTitle: "HVAC Duct Cleaning Dubai | Villas, Offices, Apartments",
    metaDescription:
      "Duct cleaning for ducted and central air conditioning in Dubai villas, apartments and offices. Grilles, accessible ductwork and fan coil units cleaned.",
    summary:
      "Cleaning of ducts, grilles and fan coil units in ducted and central air conditioning systems.",
    lead: "For ducted and central systems in villas, apartments and offices. Dust and debris are removed from grilles, accessible ductwork and the fan coil unit so the air reaching your rooms is cleaner.",
    intro: [
      "In a ducted system, all the air you breathe indoors travels through sheet-metal or flexible ducts hidden above the ceiling. Dust settles in them. In Dubai that includes fine sand, and in newer communities, construction dust from the fit-out and from neighbouring sites. Each time the fan starts, some of it is carried back into the room.",
      "Duct cleaning deals with what filter cleaning cannot reach.",
    ],
    signsTitle: "When duct cleaning is worth doing",
    signs: [
      {
        title: "Dust blowing from the vents",
        text: "Visible dust when the system starts, or surfaces that need wiping again a day after cleaning.",
      },
      {
        title: "Dark marks around grilles",
        text: "Streaks on the ceiling around supply diffusers show that dust is being carried through the ducts.",
      },
      {
        title: "After renovation or fit-out",
        text: "Cutting, sanding and plastering fill ductwork with debris, even if the vents were covered.",
      },
      {
        title: "Moving into a property",
        text: "You rarely know when the ducts were last cleaned, or what the previous occupants left behind.",
      },
      {
        title: "Musty smell from the vents",
        text: "Moisture in the fan coil unit or ductwork can allow mould to grow.",
      },
      {
        title: "Uneven airflow between rooms",
        text: "Blocked grilles or debris in a duct run can starve one room of air.",
      },
    ],
    includesTitle: "What duct cleaning covers",
    includes: [
      "Inspection of grilles, diffusers and accessible duct runs",
      "Supply and return grilles removed and cleaned",
      "Dust and debris removed from accessible ductwork",
      "Fan coil unit cleaned: coil, blower and drain tray",
      "Filters cleaned or replaced",
      "System run and airflow checked at each outlet",
    ],
    stepsTitle: "How duct cleaning works",
    steps: [
      {
        title: "Tell us about the property",
        text: "Villa, apartment or office, the number of rooms and the type of system if you know it.",
      },
      {
        title: "Inspection",
        text: "The technician looks at the grilles, access points and the condition of the ducts.",
      },
      {
        title: "Cleaning",
        text: "Grilles, ductwork and the fan coil unit are cleaned with the system switched off.",
      },
      {
        title: "Check",
        text: "The system is restarted and airflow is checked room by room.",
      },
    ],
    note: {
      title: "Do you need duct cleaning at all?",
      paragraphs: [
        "Not every air conditioner has ducts. A wall-mounted split unit blows air straight into the room and has nothing to duct-clean. It needs servicing instead.",
        "If your home has ceiling grilles or slot diffusers fed from a unit above the ceiling, it is ducted. There is no fixed interval that suits every property. It depends on how dusty the location is, how many people and pets live there and whether there has been building work. An inspection is the sensible first step.",
      ],
    },
    faqs: [
      {
        q: "How often should AC ducts be cleaned?",
        a: "There is no single rule. Homes near construction, properties that have been renovated and households with allergies tend to need it sooner. Have the ducts inspected and decide from what is found.",
      },
      {
        q: "How long does duct cleaning take?",
        a: "It depends on the size of the property and the number of outlets. Tell us about yours and we can give you an idea when you book.",
      },
      {
        q: "Can the AC run while the ducts are cleaned?",
        a: "No. The system is switched off during the work and restarted for testing at the end.",
      },
      {
        q: "My apartment has district cooling. Can the ducts still be cleaned?",
        a: "Yes. The chilled water supply belongs to the building, but the fan coil unit, ducts and grilles inside your apartment can be cleaned.",
      },
    ],
    related: ["ac-coil-cleaning-dubai", "ac-servicing-dubai", "ac-maintenance-dubai"],
  },
  {
    slug: "emergency-ac-repair-dubai",
    name: "Emergency AC Repair",
    icon: "emergency",
    featured: false,
    title: "Emergency AC Repair in Dubai",
    metaTitle: "Emergency AC Repair Dubai | 24 Hours, Every Day",
    metaDescription:
      "AC failed at night or in peak heat? Al Naveed AC Repair & Maintenance is open 24 hours, every day, across Dubai. Call or WhatsApp now.",
    summary:
      "Open 24 hours, every day, for breakdowns that cannot wait until morning.",
    lead: "Air conditioners do not wait for office hours to fail. We are open 24 hours, every day. Call or WhatsApp and tell us where you are and what has happened.",
    intro: [
      "A broken AC in a Dubai summer is more than an inconvenience. Indoor temperatures climb quickly once the cooling stops, and that is a real risk for babies, older people and anyone who is unwell. For a shop, restaurant or server room it can mean closing the doors.",
      "Calling is the fastest way to reach us in an emergency. WhatsApp works too, and lets you send a photo of the unit.",
    ],
    signsTitle: "When to treat it as an emergency",
    signs: [
      {
        title: "No cooling at all in hot weather",
        text: "Especially with young children, older relatives or anyone with a health condition in the home.",
      },
      {
        title: "Burning smell, smoke or sparks",
        text: "Switch the unit off at the isolator or breaker straight away and do not turn it back on.",
      },
      {
        title: "Breaker keeps tripping",
        text: "Reset it once at most. If it trips again, leave it off. Repeated resetting can damage the compressor or wiring.",
      },
      {
        title: "Water coming through the ceiling",
        text: "Switch the unit off to stop more water forming, and move anything electrical away from the leak.",
      },
      {
        title: "Business premises losing cooling",
        text: "Restaurants, shops, clinics and server rooms where heat stops trade or damages equipment.",
      },
    ],
    includesTitle: "What to do until help arrives",
    includes: [
      "Switch the AC off if there is a burning smell, a leak or ice on the unit",
      "Do not keep resetting a breaker that trips",
      "Put a bucket and towels under any leak and keep the floor dry",
      "Close curtains and blinds to keep the sun out",
      "Move to the coolest room and drink water",
      "Do not open the unit or touch wiring yourself",
    ],
    stepsTitle: "How an emergency call works",
    steps: [
      {
        title: "Call us",
        text: "Phone is quickest. Tell us your area, building and what the unit is doing.",
      },
      {
        title: "We confirm the visit",
        text: "You are told when a technician can reach you.",
      },
      {
        title: "Inspection on site",
        text: "The technician makes the unit safe first, then finds the fault.",
      },
      {
        title: "Repair",
        text: "You hear what is recommended, and the repair is carried out where the parts are available.",
      },
    ],
    note: {
      title: "What we need to know when you call",
      paragraphs: [
        "Your area and building name, so the technician knows where to go and whether building security needs notice.",
        "The type of AC: wall-mounted split, ducted with ceiling vents, window unit, or a chilled-water fan coil in a tower.",
        "What happened: whether it stopped suddenly or faded, any noise, smell or water, and whether the breaker has tripped.",
      ],
    },
    faqs: [
      {
        q: "Are you really open at night and on public holidays?",
        a: "Our listed hours are 24 hours a day, every day of the week. Call the number on this page.",
      },
      {
        q: "Is there an extra charge for night call-outs?",
        a: "Charges can differ for out-of-hours visits. Ask when you call, so you know before the technician sets out.",
      },
      {
        q: "Can every fault be fixed on the first visit?",
        a: "Many can. Some repairs need a part that has to be sourced, in which case the technician will explain what is needed and what can be done in the meantime.",
      },
      {
        q: "Which areas do you cover for emergency repairs?",
        a: "We are based in Naif, Deira and serve Dubai. Tell us where you are when you call.",
      },
    ],
    related: ["ac-repair-dubai", "ac-gas-refilling-dubai", "thermostat-repair-dubai"],
  },
  {
    slug: "ac-coil-cleaning-dubai",
    name: "AC Coil Cleaning",
    icon: "coil",
    featured: false,
    title: "AC Coil Cleaning in Dubai",
    metaTitle: "AC Coil Cleaning Dubai | Evaporator and Condenser",
    metaDescription:
      "Evaporator and condenser coil cleaning in Dubai. Removes the dust and grease film that cuts cooling, causes icing and raises electricity use.",
    summary:
      "Deep cleaning of evaporator and condenser coils to restore heat transfer and airflow.",
    lead: "The coils are where your air conditioner does its actual work. When they are coated in dust, everything else in the system has to work harder. Coil cleaning removes that coating.",
    intro: [
      "Every AC has two coils. The evaporator, indoors, absorbs heat from the room. The condenser, outdoors, releases it. Both are made of thin aluminium fins packed closely together, which makes them very good at exchanging heat and very good at trapping dirt.",
      "A layer of dust on the fins acts as insulation. The indoor coil cannot absorb heat, so it gets too cold and ices up. The outdoor coil cannot release heat, so pressure rises and the compressor strains. In Dubai, sandstorms and salty coastal air speed this up.",
    ],
    signsTitle: "Signs the coils need cleaning",
    signs: [
      {
        title: "Cooling has faded gradually",
        text: "Not a sudden failure, but a unit that is no longer as cold as it was last year.",
      },
      {
        title: "Ice on the indoor coil",
        text: "Restricted airflow through a dirty coil lets it drop below freezing.",
      },
      {
        title: "Outdoor unit very hot or shutting down",
        text: "A blocked condenser cannot shed heat, and the compressor may cut out on its safety switch.",
      },
      {
        title: "Visible dust or grease on the fins",
        text: "Kitchens and roadside balconies coat coils faster than most locations.",
      },
      {
        title: "Higher electricity use",
        text: "The system runs longer for the same result.",
      },
    ],
    includesTitle: "What coil cleaning covers",
    includes: [
      "Indoor unit opened and the evaporator coil exposed",
      "Coil cleaned with a suitable coil cleaner and rinsed",
      "Drain tray and drain line cleaned so the rinse water drains freely",
      "Outdoor condenser coil washed through",
      "Bent fins straightened where practical",
      "System run and cooling checked",
    ],
    stepsTitle: "How coil cleaning works",
    steps: [
      {
        title: "Get in touch",
        text: "Tell us the type of unit and where the outdoor unit sits: balcony, roof or ground level.",
      },
      {
        title: "Inspection",
        text: "The technician checks the condition of both coils.",
      },
      {
        title: "Cleaning",
        text: "Each coil is cleaned and rinsed, with the surrounding area protected.",
      },
      {
        title: "Test",
        text: "The unit is run and the cooling is checked.",
      },
    ],
    note: {
      title: "Why this is not a hose-and-go job",
      paragraphs: [
        "Coil fins bend under a fingertip. A pressure washer held too close flattens them and blocks airflow permanently. Harsh chemicals strip the protective coating from the aluminium and the coil corrodes faster afterwards.",
        "Indoors, the coil sits directly above electrical components and next to your walls and furniture. Cleaning it properly means controlling where the water goes.",
      ],
    },
    faqs: [
      {
        q: "Is coil cleaning included in a normal AC service?",
        a: "A standard service includes coil cleaning. A dedicated coil clean is for units where the build-up is heavy, such as in kitchens, on dusty sites, or after years without a service.",
      },
      {
        q: "How often do coils need cleaning?",
        a: "For most homes, as part of a service twice a year. Outdoor units near the sea, main roads or construction sites may need attention more often.",
      },
      {
        q: "Will coil cleaning fix an AC that is not cooling?",
        a: "If dirt is the cause, yes. If the technician finds a refrigerant leak or a failed part, that needs a repair as well.",
      },
    ],
    related: ["ac-servicing-dubai", "ac-maintenance-dubai", "hvac-duct-cleaning-dubai"],
  },
  {
    slug: "thermostat-repair-dubai",
    name: "Thermostat Repair & Replacement",
    icon: "thermostat",
    featured: false,
    title: "Thermostat Repair & Replacement in Dubai",
    metaTitle: "AC Thermostat Repair & Replacement Dubai",
    metaDescription:
      "AC thermostat not responding, blank or reading the wrong temperature? Thermostat repair and replacement for split, ducted and fan coil systems in Dubai.",
    summary:
      "Diagnosis, repair and replacement of thermostats and controls that are blank, inaccurate or unresponsive.",
    lead: "When the AC ignores the temperature you set, the thermostat is the first suspect, though not always the culprit. We test the control, the wiring and what it is connected to before recommending a replacement.",
    intro: [
      "The thermostat is the only part of the system most people ever touch, so it takes the blame for a lot of faults that lie elsewhere. A room that stays warm with the thermostat calling for cooling may have a failed thermostat. It may also have a stuck valve, a dead actuator or a tripped unit above the ceiling.",
      "A proper check tests each of these in turn, so you do not pay for a new thermostat that changes nothing.",
    ],
    signsTitle: "Thermostat problems we see",
    signs: [
      {
        title: "Blank or flickering display",
        text: "Flat batteries, a loose connection, a blown fuse in the unit or a failed thermostat.",
      },
      {
        title: "AC does not respond to changes",
        text: "You change the setting and nothing happens, or the fan runs but the air never gets cold.",
      },
      {
        title: "Room temperature reads wrong",
        text: "A sensor that has drifted, or a thermostat mounted in direct sun or above a heat source.",
      },
      {
        title: "System switches on and off constantly",
        text: "A faulty sensor or poor thermostat position can cause short cycling.",
      },
      {
        title: "Always cold, cannot be turned down",
        text: "In chilled-water apartments this is often a valve actuator stuck open, not the thermostat itself.",
      },
    ],
    includesTitle: "What a thermostat visit covers",
    includes: [
      "Power supply and batteries checked",
      "Wiring between thermostat and unit tested",
      "Temperature sensor reading checked against the room",
      "Fan speeds, cooling call and valve actuator response tested",
      "Repair of loose or damaged connections",
      "Replacement with a compatible thermostat where needed",
      "Settings explained after the work",
    ],
    stepsTitle: "How thermostat repair works",
    steps: [
      {
        title: "Describe the problem",
        text: "What the display shows, what the AC does, and a photo of the thermostat if you can send one.",
      },
      {
        title: "Testing",
        text: "The technician tests the thermostat, the wiring and the unit it controls.",
      },
      {
        title: "Recommendation",
        text: "You are told whether a repair, a replacement or work on another part is needed.",
      },
      {
        title: "Fit and test",
        text: "The repair or new thermostat is completed and each mode is tested.",
      },
    ],
    note: {
      title: "Thinking about a smart thermostat?",
      paragraphs: [
        "Check compatibility before you buy. Many popular smart thermostats are designed for low-voltage systems common in North America. A lot of AC systems in Dubai, particularly chilled-water fan coil units in apartment towers, use mains-voltage controls with three fan speeds and a valve output, and need a thermostat built for that arrangement.",
        "Send us a photo of your current thermostat and, if possible, its wiring label, and we can tell you what would work.",
      ],
    },
    faqs: [
      {
        q: "How do I know if the thermostat or the AC is at fault?",
        a: "You usually cannot tell from the room. If the display is blank, try fresh batteries first. Beyond that, it takes testing at both the thermostat and the unit to be sure.",
      },
      {
        q: "Can any thermostat be fitted to my AC?",
        a: "No. The thermostat has to match the system's voltage, the number of fan speeds and the way it controls cooling. A like-for-like replacement is the safe choice.",
      },
      {
        q: "My apartment is on district cooling. Who fixes the thermostat?",
        a: "The thermostat, fan coil unit and valve actuator inside your apartment are generally the owner's or tenant's responsibility. The chilled water supply is the building's. Check your tenancy contract if you are unsure.",
      },
    ],
    related: ["ac-repair-dubai", "ac-installation-dubai", "emergency-ac-repair-dubai"],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const servicePath = (slug: string) => `/services/${slug}`;

/** Service name for use mid-sentence: lower case, with AC and HVAC kept as written. */
export const inSentence = (name: string) =>
  name.replace(/\b(?!AC\b|HVAC\b)[A-Z]/g, (c) => c.toLowerCase());
