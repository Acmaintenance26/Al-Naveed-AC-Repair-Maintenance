import type { Faq } from "./services";

export type Area = {
  slug: string;
  name: string;
  /** One line used in lists and cards. */
  blurb: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  /** What the buildings and cooling systems are like here. */
  context: { title: string; paragraphs: string[] };
  /** Typical issues for this kind of property. */
  commonTitle: string;
  common: { title: string; text: string }[];
  /** Practical notes for arranging a visit here. */
  practical: { title: string; points: string[] };
  /** Service slugs most relevant here, in order. */
  services: string[];
  faqs: Faq[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: "naif",
    name: "Naif",
    blurb: "Home of our workshop, among the shops and older buildings around Naif Souq.",
    title: "AC Repair & Maintenance in Naif",
    metaTitle: "AC Repair Naif, Deira | Local Workshop, Open 24 Hours",
    metaDescription:
      "Al Naveed AC Repair & Maintenance is based on 28C Street in Naif, Deira. AC repair, servicing and gas refilling for flats, shops and offices nearby.",
    lead: "Naif is where we are based. Our workshop is on 28C Street, so flats, shops and offices here are our nearest customers.",
    context: {
      title: "Air conditioning in Naif",
      paragraphs: [
        "Naif is one of the oldest and busiest parts of Deira: narrow streets, the souq, and low and mid-rise buildings with shops at street level and flats or offices above. Many of those buildings predate central air conditioning, so cooling is mostly window units and wall-mounted splits, often several generations of them on the same façade.",
        "Older units keep going for a long time when they are looked after, but they are less forgiving of neglect. Outdoor units here sit close together on ledges and in lightwells where heat builds up, and street dust is constant.",
      ],
    },
    commonTitle: "What we are asked about most in Naif",
    common: [
      {
        title: "Window units that have lost their cooling",
        text: "Clogged coils, worn fan motors and low refrigerant in units that have run for many summers.",
      },
      {
        title: "Shop ACs that run all day",
        text: "Doors open to the street mean long run times, heavy dust and filters that need cleaning far more often.",
      },
      {
        title: "Water dripping onto the pavement or the flat below",
        text: "Blocked or badly routed drain lines on split units fixed to the outside wall.",
      },
      {
        title: "Outdoor units overheating",
        text: "Condensers packed into tight spaces with hot air from neighbouring units blowing across them.",
      },
    ],
    practical: {
      title: "Arranging a visit in Naif",
      points: [
        "Our workshop is at Shop 2, Ayesha Mohammed Belhool Building, 28C Street. You are welcome to come in.",
        "Give us the building name and a nearby landmark. Street numbering in the old part of Deira is hard to follow.",
        "For shops, tell us your quietest hours and whether work has to wait until after closing. We are open 24 hours.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "ac-servicing-dubai",
      "ac-gas-refilling-dubai",
      "ac-coil-cleaning-dubai",
    ],
    faqs: [
      {
        q: "Where exactly is your workshop in Naif?",
        a: "Shop 2, Ayesha Mohammed Belhool Building, 28C Street, Naif, Deira. Call before you come if you want to be sure someone is at the shop and not out on a job.",
      },
      {
        q: "Do you repair old window air conditioners?",
        a: "Yes, we work on window units as well as split and central systems. Whether a repair is worthwhile depends on the unit's age and the fault, and the technician will tell you honestly.",
      },
      {
        q: "Can you work on a shop's AC outside trading hours?",
        a: "We are open 24 hours, every day, so late evening and early morning visits can be arranged. Tell us the hours that suit you.",
      },
    ],
    nearby: ["deira", "downtown-dubai", "business-bay"],
  },
  {
    slug: "deira",
    name: "Deira",
    blurb: "Flats, offices, hotels and shops on the north side of the Creek.",
    title: "AC Repair & Maintenance in Deira",
    metaTitle: "AC Repair Deira Dubai | Based in Naif, Open 24 Hours",
    metaDescription:
      "AC repair, maintenance and servicing in Deira from a workshop in Naif. Split, window and central systems in flats, shops and offices. Open 24 hours.",
    lead: "Deira is our home district. From the workshop in Naif we look after air conditioning in flats, shops, offices and commercial buildings across this side of the Creek.",
    context: {
      title: "Air conditioning in Deira",
      paragraphs: [
        "Deira is old Dubai: a dense commercial district along the Creek with everything from 1970s walk-up blocks to hotels and office towers. That history shows in the air conditioning. A single street can have window units, split systems, rooftop package units feeding ducts and chilled-water systems in the larger buildings.",
        "The mix matters because each type fails in its own way and needs its own approach. It also means a lot of equipment in Deira is well past its first decade, where regular servicing makes the difference between a unit that keeps working and one that fails in July.",
      ],
    },
    commonTitle: "What we are asked about most in Deira",
    common: [
      {
        title: "Ageing split and window units",
        text: "Weak cooling, noisy fans and repeated gas loss from coils that have started to corrode.",
      },
      {
        title: "Rooftop package units",
        text: "Central units on older commercial buildings that need coil cleaning, belts, motors and controls looked at.",
      },
      {
        title: "Offices and shops",
        text: "Maintenance arranged around working hours for premises that cannot afford downtime.",
      },
      {
        title: "Landlord servicing between tenants",
        text: "Cleaning and checking every unit in a flat before a new tenancy starts.",
      },
    ],
    practical: {
      title: "Arranging a visit in Deira",
      points: [
        "Give us the building name and the nearest metro station or landmark.",
        "Tell us what type of AC it is. If you are not sure, a photo of the indoor unit is enough.",
        "For rooftop equipment, let us know how the roof is accessed and who holds the key.",
        "Parking in Deira is tight. If your building has visitor parking or a loading bay, mention it.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "ac-maintenance-dubai",
      "ac-servicing-dubai",
      "emergency-ac-repair-dubai",
    ],
    faqs: [
      {
        q: "Which parts of Deira do you cover?",
        a: "All of it. We are based in Naif and work throughout Deira. Tell us your building and we will confirm when we can come.",
      },
      {
        q: "Do you offer maintenance contracts for buildings in Deira?",
        a: "Yes. We offer annual maintenance contracts for homes and commercial premises. Contact us with the number and type of units and ask for the terms.",
      },
      {
        q: "Are you open at night in Deira?",
        a: "Yes. We are open 24 hours, every day.",
      },
    ],
    nearby: ["naif", "downtown-dubai", "business-bay"],
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    blurb: "High-rise apartments and offices around Burj Khalifa, mostly on chilled water.",
    title: "AC Repair & Maintenance in Downtown Dubai",
    metaTitle: "AC Repair Downtown Dubai | Fan Coil Unit Repair",
    metaDescription:
      "AC repair and maintenance for Downtown Dubai apartments and offices: fan coil units, thermostats, actuators, drain lines and duct cleaning.",
    lead: "For apartments and offices in the towers around Burj Khalifa. Most are cooled by chilled water, so the work is on the fan coil unit, thermostat and ducts inside your property.",
    context: {
      title: "Air conditioning in Downtown Dubai",
      paragraphs: [
        "Towers in Downtown Dubai are generally served by district cooling. Chilled water is produced at a central plant and piped into each building, and there is no outdoor compressor for your apartment. What you have instead is a fan coil unit (FCU) above the ceiling: a coil the chilled water runs through, a fan that blows room air across it, a valve that controls the flow, and a thermostat on the wall.",
        "This divides responsibility. The chilled water supply belongs to the building and the cooling provider. The FCU, its valve and actuator, the drain, the ducts and the thermostat inside the apartment are generally for the owner or tenant to maintain. When the apartment is warm, the first job is working out which side the fault is on.",
      ],
    },
    commonTitle: "What we are asked about most in Downtown Dubai",
    common: [
      {
        title: "Warm apartment, AC fan running",
        text: "Often a failed valve actuator or a blocked strainer stopping chilled water reaching the coil.",
      },
      {
        title: "Water stains on the ceiling",
        text: "A blocked FCU drain line or a rusted drain tray overflowing above the false ceiling.",
      },
      {
        title: "Thermostat faults",
        text: "Blank displays, wrong readings and thermostats that no longer switch the valve.",
      },
      {
        title: "Dusty or musty air",
        text: "FCU coils and ducts that have not been cleaned since handover.",
      },
    ],
    practical: {
      title: "Arranging a visit in Downtown Dubai",
      points: [
        "Most towers require contractors to be registered with security or to hold a work permit. Ask your building management what they need and tell us when you book.",
        "Check whether your neighbours have cooling. If the whole floor is warm, the problem is likely the building's supply, and building management is the first call.",
        "FCUs sit above the ceiling, usually behind an access panel in the corridor or bathroom. Make sure the panel can be reached.",
        "Some buildings restrict noisy work to set hours. Let us know if yours does.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "thermostat-repair-dubai",
      "hvac-duct-cleaning-dubai",
      "ac-maintenance-dubai",
    ],
    faqs: [
      {
        q: "My building has district cooling. Can you still repair my AC?",
        a: "Yes, for everything inside the apartment: the fan coil unit, valve actuator, thermostat, drain line, ducts and grilles. The chilled water supply itself is the building's responsibility.",
      },
      {
        q: "How do I know if the fault is in my apartment or the building?",
        a: "Ask a neighbour or the concierge whether others are affected. If only your apartment is warm, the fault is most likely in your own fan coil unit or controls.",
      },
      {
        q: "Does a district-cooled apartment need AC gas?",
        a: "No. Chilled-water fan coil units contain no refrigerant, so there is nothing to refill. If someone offers to top up the gas on an FCU, decline.",
      },
    ],
    nearby: ["business-bay", "deira", "jumeirah"],
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    blurb: "Mixed office and residential towers along the canal.",
    title: "AC Repair & Maintenance in Business Bay",
    metaTitle: "AC Repair Business Bay | Offices and Apartments",
    metaDescription:
      "AC repair and maintenance for Business Bay offices and apartments. Fan coil units, thermostats, drain leaks and duct cleaning, with out-of-hours visits.",
    lead: "Business Bay mixes offices and homes in the same towers. We work on both, and being open 24 hours means office work can happen after everyone has left.",
    context: {
      title: "Air conditioning in Business Bay",
      paragraphs: [
        "Business Bay is a district of towers along the Dubai Canal, many of them split between offices on some floors and apartments on others. Cooling is predominantly chilled water, delivered to fan coil units above the ceiling in each unit. Offices often have several FCUs feeding a network of ducts and diffusers across an open floor.",
        "Office fit-outs are a regular source of problems. Partitions go up after the AC was designed, and suddenly a meeting room has no supply air or a thermostat is controlling the wrong zone. Ducts and FCUs also fill with fit-out dust that nobody removes before the tenant moves in.",
      ],
    },
    commonTitle: "What we are asked about most in Business Bay",
    common: [
      {
        title: "Hot and cold spots in offices",
        text: "Diffusers and thermostats that no longer match the room layout after partitions were added.",
      },
      {
        title: "Leaks through ceiling tiles",
        text: "FCU drain lines blocked by dust and slime, overflowing onto desks and equipment.",
      },
      {
        title: "Fan coil unit faults",
        text: "Seized fan motors, failed actuators and noisy bearings in units that run long hours.",
      },
      {
        title: "Post-fit-out duct cleaning",
        text: "Clearing construction dust before or just after a new tenant moves in.",
      },
    ],
    practical: {
      title: "Arranging a visit in Business Bay",
      points: [
        "Tell us whether it is an office or an apartment, and roughly how many fan coil units there are.",
        "For offices, we can come in the evening, overnight or at the weekend so work does not interrupt your team.",
        "Most towers need contractor registration or a work permit from building management. Check the lead time and let us know.",
        "If the whole floor has lost cooling, speak to building management first. It may be the building's supply.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "ac-maintenance-dubai",
      "hvac-duct-cleaning-dubai",
      "thermostat-repair-dubai",
    ],
    faqs: [
      {
        q: "Can you service an office AC outside working hours?",
        a: "Yes. We are open 24 hours, every day, so evening, night and weekend visits can be arranged, subject to your building's access rules.",
      },
      {
        q: "Do you offer maintenance contracts for offices?",
        a: "Yes. Tell us the size of the office and the number of units, and ask us for annual maintenance contract terms.",
      },
      {
        q: "Our office was just fitted out and the AC is uneven. Can you help?",
        a: "We can inspect the fan coil units, ducts and diffusers and tell you what is causing it. Sometimes it is a cleaning or balancing issue. Sometimes the layout needs changes to the ductwork.",
      },
    ],
    nearby: ["downtown-dubai", "jumeirah", "al-barsha"],
  },
  {
    slug: "jumeirah",
    name: "Jumeirah",
    blurb: "Coastal villas and townhouses with several systems under one roof.",
    title: "AC Repair & Maintenance in Jumeirah",
    metaTitle: "AC Repair Jumeirah | Villa AC Service and Maintenance",
    metaDescription:
      "AC repair, servicing and maintenance for villas and townhouses in Jumeirah. Ducted and split systems, coil cleaning for coastal units, duct cleaning.",
    lead: "For villas and townhouses along the Jumeirah coast, where a single home can have half a dozen systems and the sea air is hard on outdoor units.",
    context: {
      title: "Air conditioning in Jumeirah",
      paragraphs: [
        "Jumeirah is low-rise and residential: detached villas, compounds and townhouses running along the coast, with shops, clinics and cafés on the main roads. Villas here are usually cooled by several ducted split or package units, one for each zone or floor, with outdoor units on the roof or along a side wall.",
        "Being near the sea has a cost. Salt in the air settles on outdoor coils and corrodes the aluminium fins, and humidity keeps drain trays wet all year. Systems in Jumeirah tend to need coil attention sooner than the same equipment further inland.",
      ],
    },
    commonTitle: "What we are asked about most in Jumeirah",
    common: [
      {
        title: "One zone not cooling",
        text: "A single system has failed while the others carry on, typically a capacitor, a fan motor or a refrigerant leak.",
      },
      {
        title: "Corroded outdoor coils",
        text: "Salt damage that reduces cooling and eventually causes leaks.",
      },
      {
        title: "Dusty ducts in older villas",
        text: "Ductwork that has never been cleaned, often noticed after a renovation.",
      },
      {
        title: "Pre-summer servicing for the whole house",
        text: "Every unit cleaned and checked in one visit before the heat arrives.",
      },
    ],
    practical: {
      title: "Arranging a visit in Jumeirah",
      points: [
        "Tell us how many systems the villa has. Counting the thermostats usually gives the answer.",
        "Let us know where the outdoor units are and how the roof is reached.",
        "If you live in a compound, tell security to expect us.",
        "For a whole-villa service, booking ahead of summer gives you the widest choice of dates.",
      ],
    },
    services: [
      "ac-maintenance-dubai",
      "ac-repair-dubai",
      "ac-coil-cleaning-dubai",
      "hvac-duct-cleaning-dubai",
    ],
    faqs: [
      {
        q: "Can you service every AC in a villa in one visit?",
        a: "Tell us how many units there are and what type, and we will plan the visit accordingly. Large villas may need more than one technician or more than one visit.",
      },
      {
        q: "Why do outdoor units near the beach fail sooner?",
        a: "Salt carried in sea air corrodes the aluminium fins and copper joints of the condenser coil. Regular rinsing and coil cleaning slows it down.",
      },
      {
        q: "Do you offer annual maintenance for villas?",
        a: "Yes. Annual maintenance contracts are available for homes. Contact us with the number of units and ask for the terms.",
      },
    ],
    nearby: ["al-barsha", "downtown-dubai", "palm-jumeirah"],
  },
  {
    slug: "al-barsha",
    name: "Al Barsha",
    blurb: "Family villas and mid-rise apartment blocks near Mall of the Emirates.",
    title: "AC Repair & Maintenance in Al Barsha",
    metaTitle: "AC Repair Al Barsha | Villas and Apartments",
    metaDescription:
      "AC repair, servicing and gas refilling for Al Barsha villas and apartments. Split and ducted systems, landlord servicing and maintenance contracts.",
    lead: "Al Barsha has two kinds of home: apartment blocks near Mall of the Emirates and family villas in the quieter streets behind. We work on the systems in both.",
    context: {
      title: "Air conditioning in Al Barsha",
      paragraphs: [
        "Al Barsha 1 is mostly mid-rise apartment buildings and hotels close to the mall and the metro. Further in, Al Barsha 2 and 3 are villa neighbourhoods. The apartments commonly have ducted split systems with the outdoor unit on the roof or a balcony, and some buildings run a central chiller. Villas usually have several ducted or wall-mounted split systems.",
        "Much of the housing was built in the 2000s, so a lot of the original equipment is now at the age where compressors, fan motors and coils begin to fail. Rented apartments also change hands often, and the AC is rarely serviced between tenants unless someone asks.",
      ],
    },
    commonTitle: "What we are asked about most in Al Barsha",
    common: [
      {
        title: "Original units reaching the end of their life",
        text: "Repeated breakdowns and gas loss, and the question of whether to repair again or replace.",
      },
      {
        title: "Move-in servicing",
        text: "A full clean before a new tenant settles in, including filters, coils and drain lines.",
      },
      {
        title: "Leaks from ducted units above the ceiling",
        text: "Blocked drains staining the ceiling in corridors and bathrooms.",
      },
      {
        title: "Villa systems before summer",
        text: "All units in the house serviced in one visit.",
      },
    ],
    practical: {
      title: "Arranging a visit in Al Barsha",
      points: [
        "Tell us whether it is an apartment or a villa, and which part of Al Barsha.",
        "In apartments, find out where the outdoor unit is. Roof access usually needs the building watchman.",
        "If you are a tenant, check your tenancy contract. Routine servicing is often the tenant's responsibility and major repairs the landlord's.",
        "Keep the make and approximate age of the unit handy if you are asking about replacement.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "ac-servicing-dubai",
      "ac-installation-dubai",
      "ac-gas-refilling-dubai",
    ],
    faqs: [
      {
        q: "Who pays for AC repairs in a rented apartment, tenant or landlord?",
        a: "It depends on your tenancy contract. A common arrangement in Dubai is that the landlord covers major repairs and the tenant covers routine servicing and minor work, but contracts vary. Check yours before booking.",
      },
      {
        q: "My AC is about fifteen years old. Should I replace it?",
        a: "Not automatically. If it has been maintained and the fault is minor, a repair can be good value. If the compressor has failed or the coil is leaking in several places, replacement is usually the better option. A technician can inspect it and explain.",
      },
      {
        q: "Can you replace an old unit with a new one?",
        a: "Yes. We install new and replacement units. Tell us about the existing system and the room it serves.",
      },
    ],
    nearby: ["jvc", "jumeirah", "jlt"],
  },
  {
    slug: "jvc",
    name: "Jumeirah Village Circle (JVC)",
    blurb: "A newer community of apartment blocks, townhouses and villas, still under construction in places.",
    title: "AC Repair & Maintenance in Jumeirah Village Circle (JVC)",
    metaTitle: "AC Repair JVC Dubai | Jumeirah Village Circle",
    metaDescription:
      "AC repair, servicing and duct cleaning in Jumeirah Village Circle. Help with construction dust, drain leaks and cooling faults in apartments and villas.",
    lead: "JVC is still being built, and construction dust finds its way into every air conditioner nearby. Filters, coils and ducts here need more frequent attention than in finished communities.",
    context: {
      title: "Air conditioning in JVC",
      paragraphs: [
        "Jumeirah Village Circle is a large community of low and mid-rise apartment buildings mixed with townhouses and villas. It has grown building by building, each from a different developer, so there is no single type of cooling. Some buildings have a central chiller serving fan coil units, some have a ducted split for each apartment, and villas and townhouses mostly have their own split systems.",
        "Construction is the common factor. With sites still active across the community, fine dust settles on outdoor coils and is drawn through filters much faster than usual. Newer buildings also bring first-year problems: drain lines installed without enough slope, and ducts still full of debris from the fit-out.",
      ],
    },
    commonTitle: "What we are asked about most in JVC",
    common: [
      {
        title: "Filters and coils clogging quickly",
        text: "Weak airflow and poor cooling a few months after the last clean.",
      },
      {
        title: "Dust from the vents in new apartments",
        text: "Ducts and fan coil units that were never cleaned after construction.",
      },
      {
        title: "Ceiling leaks",
        text: "Drain lines that block easily or were fitted without proper fall.",
      },
      {
        title: "Not knowing what system the building has",
        text: "We can identify it from a photo of the indoor unit and the thermostat.",
      },
    ],
    practical: {
      title: "Arranging a visit in JVC",
      points: [
        "Give us the building name and district number. Navigation by street name is unreliable in JVC.",
        "Send a photo of the thermostat and one of the ceiling vents or indoor unit, so we know what type of system to expect.",
        "If the building has a central chiller, check with building management whether cooling is off for everyone before booking a repair.",
        "If your apartment faces a construction site, plan on cleaning the filters every month.",
      ],
    },
    services: [
      "ac-servicing-dubai",
      "hvac-duct-cleaning-dubai",
      "ac-repair-dubai",
      "ac-coil-cleaning-dubai",
    ],
    faqs: [
      {
        q: "Why does my AC in JVC get dirty so quickly?",
        a: "Ongoing construction in parts of the community puts a lot of fine dust in the air. It collects on filters and coils faster than in established areas, so cleaning is needed more often.",
      },
      {
        q: "I have just moved into a new apartment. Should the AC be cleaned?",
        a: "It is worth having it inspected. Ducts and fan coil units in new buildings often still hold construction dust, and you will be breathing whatever is in them.",
      },
      {
        q: "Is my apartment's AC on a chiller or its own unit?",
        a: "It varies from building to building in JVC. Building management can tell you, or send us a photo of the thermostat and indoor unit and we will work it out.",
      },
    ],
    nearby: ["al-barsha", "jlt", "dubai-marina"],
  },
  {
    slug: "jlt",
    name: "Jumeirah Lakes Towers (JLT)",
    blurb: "Residential and office towers in clusters around the lakes.",
    title: "AC Repair & Maintenance in Jumeirah Lakes Towers (JLT)",
    metaTitle: "AC Repair JLT Dubai | Jumeirah Lakes Towers",
    metaDescription:
      "AC repair and maintenance in JLT apartments and offices. Fan coil units, thermostats, valve actuators, drain leaks and duct cleaning across all clusters.",
    lead: "JLT's towers are among the older high-rises in new Dubai. Their fan coil units have been running for well over a decade, and many are due for parts and a thorough clean.",
    context: {
      title: "Air conditioning in JLT",
      paragraphs: [
        "Jumeirah Lakes Towers is a set of lettered clusters, each with a few towers of apartments and offices around a shared podium. District cooling is common here: chilled water arrives from a central plant, and each unit has one or more fan coil units above the ceiling with a wall thermostat.",
        "Most towers were completed around 2008 to 2012, which puts the original fan coil units at the age where moving parts wear out. Fan motors get noisy, valve actuators stick, drain trays rust through and insulation on the chilled water pipes breaks down and starts to drip.",
      ],
    },
    commonTitle: "What we are asked about most in JLT",
    common: [
      {
        title: "Noisy fan coil units",
        text: "Worn fan bearings and unbalanced blower wheels, most obvious at night.",
      },
      {
        title: "Rooms that will not cool or will not stop cooling",
        text: "Valve actuators stuck closed or stuck open.",
      },
      {
        title: "Dripping from the ceiling",
        text: "Blocked drains, rusted trays or condensation from damaged pipe insulation.",
      },
      {
        title: "Old thermostats",
        text: "Faded displays and unreliable buttons on the original controls.",
      },
    ],
    practical: {
      title: "Arranging a visit in JLT",
      points: [
        "Tell us the cluster letter and tower name.",
        "Building management in most towers asks for contractor details or a work permit in advance. Check what is needed.",
        "If every room is warm and the fans are running, ask the concierge whether the building's chilled water is down before booking.",
        "Office tenants: we can work evenings and weekends, subject to building rules.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "thermostat-repair-dubai",
      "ac-maintenance-dubai",
      "hvac-duct-cleaning-dubai",
    ],
    faqs: [
      {
        q: "My fan coil unit is very noisy. Does it need replacing?",
        a: "Usually not. Noise most often comes from fan motor bearings or a dirty, unbalanced blower wheel, and both can be dealt with without replacing the whole unit.",
      },
      {
        q: "One room is freezing and the thermostat does nothing. What is wrong?",
        a: "The most likely cause is a valve actuator stuck open, so chilled water flows whatever the thermostat says. A technician can test the actuator and the thermostat to confirm.",
      },
      {
        q: "Do you work in all JLT clusters?",
        a: "Yes. Tell us your cluster and tower when you contact us.",
      },
    ],
    nearby: ["dubai-marina", "jvc", "palm-jumeirah"],
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    blurb: "Waterfront residential towers, with sea air and humidity to match.",
    title: "AC Repair & Maintenance in Dubai Marina",
    metaTitle: "AC Repair Dubai Marina | Apartment AC Service",
    metaDescription:
      "AC repair, servicing and maintenance in Dubai Marina apartments. Fan coil units, thermostats, humidity and drain problems, and corroded balcony units.",
    lead: "High-rise apartments beside the water. Humidity is the recurring theme in the Marina: it fills drain trays, feeds mould and, where there are balcony units, corrodes them.",
    context: {
      title: "Air conditioning in Dubai Marina",
      paragraphs: [
        "Dubai Marina is a dense strip of residential towers around a man-made waterway, a few hundred metres from the open sea. Many towers use chilled water, from district cooling or from the building's own chiller plant, with fan coil units in each apartment. Others, particularly some of the earlier buildings, have a split system for each apartment with the outdoor unit on a balcony or service ledge.",
        "Whatever the system, the air here is humid and salty. An AC in the Marina removes a great deal of water from the air, so drain lines work hard and block often. Outdoor units facing the sea corrode faster than the same model would inland.",
      ],
    },
    commonTitle: "What we are asked about most in Dubai Marina",
    common: [
      {
        title: "Water leaking from the ceiling",
        text: "Drain lines blocked with slime from the constant flow of condensate.",
      },
      {
        title: "Musty smell or a clammy feel",
        text: "Mould in the drain tray or on the coil, or a unit that is not removing enough humidity.",
      },
      {
        title: "Corroded balcony condensers",
        text: "Fins crumbling and refrigerant leaks on sea-facing outdoor units.",
      },
      {
        title: "Fan coil unit and thermostat faults",
        text: "Actuators, fan motors and controls in chilled-water apartments.",
      },
    ],
    practical: {
      title: "Arranging a visit in Dubai Marina",
      points: [
        "Tell us the tower name. Access and parking vary a lot from one building to the next.",
        "Most towers require contractor registration or a work permit from building management. Ask them what is needed.",
        "Let us know whether you have an outdoor unit on the balcony or only ceiling vents and a thermostat.",
        "For holiday homes and short lets, tell us who will give access.",
      ],
    },
    services: [
      "ac-repair-dubai",
      "ac-servicing-dubai",
      "ac-coil-cleaning-dubai",
      "thermostat-repair-dubai",
    ],
    faqs: [
      {
        q: "Why does my Marina apartment feel humid even with the AC on?",
        a: "Common causes are a dirty coil, a fan speed set too high for the coil to remove moisture, or a unit that reaches temperature and shuts off too quickly. An inspection will show which applies.",
      },
      {
        q: "My AC keeps leaking every few months. Can it be fixed properly?",
        a: "Repeat leaks usually mean the drain line is cleared but never cleaned along its full length, or the tray is rusted. A thorough drain clean and a check of the tray and the pipe's slope usually fixes it.",
      },
      {
        q: "Do you service ACs in holiday rental apartments?",
        a: "Yes. Tell us who will provide access and how you would like to be updated after the visit.",
      },
    ],
    nearby: ["jlt", "palm-jumeirah", "jvc"],
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    blurb: "Villas on the fronds and apartments on the trunk, surrounded by sea.",
    title: "AC Repair & Maintenance in Palm Jumeirah",
    metaTitle: "AC Repair Palm Jumeirah | Villas and Apartments",
    metaDescription:
      "AC repair and maintenance on Palm Jumeirah for frond villas and trunk apartments. Fan coil units, thermostats, duct cleaning and humidity problems.",
    lead: "Large homes surrounded by sea on every side. Palm Jumeirah properties typically have many fan coil units, long duct runs and a constant fight with humidity.",
    context: {
      title: "Air conditioning on Palm Jumeirah",
      paragraphs: [
        "Palm Jumeirah has two main kinds of home: villas along the fronds and apartments in the buildings on the trunk and crescent. District cooling is widely used on the island, so most properties are cooled by chilled water feeding fan coil units and, in larger villas, air handling units. A frond villa can easily have ten or more separate units, each with its own thermostat.",
        "The sea is never more than a short walk away. Humidity is high throughout the year, so cooling coils are always wet, drain lines run constantly, and anything metal exposed to outside air corrodes. Many homes are also left empty for weeks at a time, which is when a blocked drain does the most damage.",
      ],
    },
    commonTitle: "What we are asked about most on Palm Jumeirah",
    common: [
      {
        title: "Several units to maintain at once",
        text: "Whole-villa servicing covering every fan coil unit, filter and drain in one planned visit.",
      },
      {
        title: "Leaks found after a period away",
        text: "A drain that blocked while the home was empty, with ceiling damage as the result.",
      },
      {
        title: "Humidity and mould",
        text: "Musty rooms, particularly in villas where the AC was switched off or set high while unoccupied.",
      },
      {
        title: "Duct cleaning in large villas",
        text: "Long duct runs and many grilles that collect dust over the years.",
      },
    ],
    practical: {
      title: "Arranging a visit on Palm Jumeirah",
      points: [
        "Tell us the frond letter and villa number, or the building name on the trunk or crescent.",
        "Frond gates and apartment buildings need visitor or contractor clearance. Arrange it with security before the visit.",
        "Count the thermostats and let us know the number. It tells us how many units to plan for.",
        "If the home will be empty, leave the AC running at a moderate setting instead of switching it off. That keeps humidity under control.",
      ],
    },
    services: [
      "ac-maintenance-dubai",
      "ac-repair-dubai",
      "hvac-duct-cleaning-dubai",
      "thermostat-repair-dubai",
    ],
    faqs: [
      {
        q: "Should I switch the AC off when I travel?",
        a: "In a humid location like the Palm it is better not to. With no cooling, indoor humidity rises and mould can take hold within weeks. Leave the system on at a higher temperature setting, and have the drains checked before you go.",
      },
      {
        q: "Can you maintain all the units in a large villa?",
        a: "Yes. Tell us how many fan coil units or thermostats there are and we will plan the visit. An annual maintenance contract often suits homes with many units.",
      },
      {
        q: "Do Palm Jumeirah properties need AC gas refilling?",
        a: "Chilled-water fan coil units contain no refrigerant, so they never need gas. Only properties with their own split or package units do, and only if there is a leak.",
      },
    ],
    nearby: ["dubai-marina", "jlt", "jumeirah"],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

export const areaPath = (slug: string) => `/areas/${slug}`;

/** Short label for navigation and footers. */
export const areaShortName = (area: Area) =>
  area.slug === "jvc" ? "JVC" : area.slug === "jlt" ? "JLT" : area.name;
