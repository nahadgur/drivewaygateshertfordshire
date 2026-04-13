// data/costs.ts

export interface CostBreakdown {
  slug: string;
  service: string;
  summary: string;
  typicalRange: string;
  budgetRange: string;
  midRange: string;
  premiumRange: string;
  factors: { factor: string; impact: string }[];
  included: string[];
  excluded: string[];
  timeline: string;
}

export const COST_GUIDES: CostBreakdown[] = [
  {
    slug: 'electric-sliding-gates',
    service: 'Electric Sliding Gates',
    summary: 'Electric sliding gates suit driveways with limited swing clearance, steep gradients, or wide openings. Cost is driven mainly by gate length, material, motor type (ground-track vs cantilever), and automation specification.',
    typicalRange: '£4,500 – £12,000',
    budgetRange: '£3,500 – £5,500 — single gate up to 4m, ground-track motor, galvanised or powder-coated steel, basic remote operation.',
    midRange: '£5,500 – £9,000 — 4–6m opening, cantilever or heavy-duty ground-track motor, aluminium or higher-grade steel, intercom and keypad access.',
    premiumRange: '£9,000 – £18,000+ — wide openings over 6m, bespoke hardwood cladding or ornamental metalwork, HD video intercom, fail-safe battery backup, and integration with smart home systems.',
    factors: [
      { factor: 'Opening width', impact: 'Every additional metre increases both gate material cost and the motor capacity required. Wide openings may need cantilever systems which are significantly more expensive than ground-track.' },
      { factor: 'Material choice', impact: 'Galvanised steel is the most affordable. Aluminium is mid-range and weather-resistant. Hardwood cladding over a steel frame is premium. Bespoke wrought iron is the most expensive.' },
      { factor: 'Ground conditions', impact: 'A level, concreted run-off area costs least. Gravel, slopes, or exposed roots mean groundwork before the motor can be installed, adding £500–£2,000.' },
      { factor: 'Automation grade', impact: 'Entry-level kits from BFT, Came, or Nice start around £400–£700 for the motor alone. Commercial-grade motors for heavy gates or high cycle counts can reach £1,500–£3,000.' },
      { factor: 'Access control', impact: 'Basic remote fobs are included. Keypads add £150–£300, wired intercoms £400–£800, and HD video intercoms with smartphone apps £800–£1,800.' },
    ],
    included: ['Site survey and written quote', 'Gate fabrication or supply', 'Motor and control board', 'Safety photocells and edge sensors', 'Installation and commissioning', 'One remote fob (additional fobs typically £30–£50 each)', 'Written workmanship warranty'],
    excluded: ['Planning permission application fees where required', 'Electrical supply to the gate position (often £300–£1,500 depending on distance from consumer unit)', 'Groundworks beyond minor levelling', 'Intercom wiring back to the property', 'Pier rebuilding or boundary wall repairs'],
    timeline: 'Most sliding gate installations are completed in 1–3 working days on site, with 4–8 weeks lead time beforehand for custom fabrication and motor delivery.',
  },
  {
    slug: 'electric-swing-gates',
    service: 'Electric Swing Gates',
    summary: 'Electric swing gates are the traditional choice for Hertfordshire driveways with enough setback from the road. Underground motors are more discreet but cost more than above-ground ram arms.',
    typicalRange: '£3,800 – £10,000',
    budgetRange: '£3,000 – £4,800 — pair of steel or galvanised swing gates up to 3m wide, above-ground ram motors, basic remote.',
    midRange: '£4,800 – £7,500 — 3–4m opening, quality ram or entry-level underground motors, aluminium or hardwood cladding, intercom and keypad.',
    premiumRange: '£7,500 – £15,000+ — bespoke wrought iron or hardwood gates, underground BFT or FAAC motors, HD video intercom, fail-safe operation.',
    factors: [
      { factor: 'Motor type', impact: 'Above-ground ram motors are cheapest (£500–£900 a pair). Articulated arm motors suit wider piers (£700–£1,200). Underground motors are the most discreet and expensive (£1,200–£2,500 a pair).' },
      { factor: 'Gate weight and height', impact: 'Heavier hardwood or solid metal gates require commercial-grade motors rated for the weight, significantly increasing hardware cost.' },
      { factor: 'Pier condition', impact: 'Existing brick piers may need rebuilding or reinforcing to support motors. Allow £400–£1,500 per pier if structural work is needed.' },
      { factor: 'Opening direction', impact: 'Gates that open outward onto a public highway are not permitted under the Highways Act. Inward-only swing is usually the only legal option, which means enough internal driveway clearance is essential.' },
    ],
    included: ['Site survey', 'Gate supply and fabrication', 'Motors, control board, photocells', 'Installation and commissioning', 'Two remote fobs', 'Warranty'],
    excluded: ['Planning permission where applicable', 'Pier rebuilding', 'Mains electrical supply run', 'Intercom cabling to property'],
    timeline: '1–2 days on site, 4–6 weeks lead time for custom fabrication.',
  },
  {
    slug: 'wooden-driveway-gates',
    service: 'Wooden Driveway Gates',
    summary: 'Wooden driveway gates work particularly well on Hertfordshire cottages, listed properties, and conservation area homes. Iroko and oak are the most durable choices but cost more than softwood.',
    typicalRange: '£1,800 – £6,500',
    budgetRange: '£1,200 – £2,500 — softwood pair (treated redwood or pine) up to 3m wide, manual operation, galvanised hinges.',
    midRange: '£2,500 – £4,500 — hardwood pair (iroko, idigbo, or sapele) up to 3.5m, quality ironmongery, stained or oiled finish.',
    premiumRange: '£4,500 – £12,000+ — bespoke English oak or European oak, hand-forged strap hinges, custom panelling, matching pedestrian gate.',
    factors: [
      { factor: 'Timber species', impact: 'Softwood is cheapest but needs regular maintenance and has a shorter life. Iroko and idigbo are durable mid-range options. European and English oak are premium and age to a silver patina.' },
      { factor: 'Design complexity', impact: 'Boarded gates are simpler and cheaper than framed-and-panelled or curved-top designs. Ornamental cut-outs and inlaid metalwork add cost.' },
      { factor: 'Finish', impact: 'Unfinished timber is cheapest; factory-applied stain or paint adds £100–£400 per gate. Ongoing maintenance is a real cost homeowners often forget.' },
      { factor: 'Automation compatibility', impact: 'Heavier hardwood gates limit which motors can be fitted. Retrofitting automation later costs more than specifying it from the start.' },
    ],
    included: ['Survey and drawings', 'Timber gate fabrication', 'Galvanised or stainless ironmongery', 'Installation to existing piers', 'Basic treatment or stain if specified'],
    excluded: ['Pier construction or rebuilding', 'Automation (quoted separately)', 'Planning permission', 'Ongoing maintenance and re-treatment'],
    timeline: '1 day on site for manual gates. Lead time 3–8 weeks depending on timber availability and finishing.',
  },
  {
    slug: 'metal-driveway-gates',
    service: 'Metal Driveway Gates',
    summary: 'Metal driveway gates cover everything from galvanised estate fencing to hand-forged ornamental wrought iron. Material grade and finish quality drive most of the cost variation.',
    typicalRange: '£1,500 – £8,000',
    budgetRange: '£1,000 – £2,500 — galvanised mild steel estate gates up to 3m, standard powder coat finish.',
    midRange: '£2,500 – £5,000 — forged steel with decorative scrollwork, premium powder coat, quality hinges and latches.',
    premiumRange: '£5,000 – £15,000+ — bespoke hand-forged wrought iron, architectural metalwork, matching side railings and pedestrian gate.',
    factors: [
      { factor: 'Fabrication method', impact: 'Machine-cut and welded gates are cheapest. Hand-forged wrought iron (proper forge work, not bent mild steel) is the most expensive and lead times can reach 10+ weeks.' },
      { factor: 'Finish', impact: 'Galvanised-then-powder-coated gates last longest in British weather. Paint-only finishes are cheaper but need reapplying every 3–5 years.' },
      { factor: 'Rust protection', impact: 'Hot-dip galvanising adds £150–£400 per gate but extends the lifespan by decades in coastal or exposed positions.' },
    ],
    included: ['Fabrication and finish', 'Standard hinges and lock', 'Installation to existing piers', 'Written warranty'],
    excluded: ['Pier work', 'Automation', 'Custom colour matching above standard range', 'Structural underpinning'],
    timeline: '1 day on site; 4–10 weeks lead time depending on complexity.',
  },
  {
    slug: 'automated-gate-systems',
    service: 'Gate Automation Retrofit',
    summary: 'Automation retrofit is adding motors, controls, and safety equipment to gates that already exist. Cost depends on the existing gate weight, access requirements, and cabling distance.',
    typicalRange: '£1,800 – £5,500',
    budgetRange: '£1,500 – £2,500 — ram arm motors on existing light swing gates, basic remote operation, surface cabling.',
    midRange: '£2,500 – £4,000 — quality ram or articulated motors, intercom, keypad, buried cabling.',
    premiumRange: '£4,000 – £8,000+ — underground motor conversion, HD video intercom, smart home integration, fail-safe battery backup.',
    factors: [
      { factor: 'Existing gate suitability', impact: 'Not all existing gates are strong enough to motorise. A structural check is essential — twisted, rotten, or under-built gates may need replacing rather than automating.' },
      { factor: 'Cable runs', impact: 'Every metre of buried cable from the consumer unit adds to labour. Long runs through paving or across lawns are the biggest hidden cost on retrofit jobs.' },
      { factor: 'Safety compliance', impact: 'Under BS EN 12453 every automated gate needs force testing, photocells, and safety edges. A compliant installation is 15–25% more than an unregulated retrofit and is legally required.' },
    ],
    included: ['Structural survey', 'Motors and control gear', 'Photocells and safety edges', 'Force testing and commissioning', 'Two remotes'],
    excluded: ['Replacement of unsuitable gates', 'Mains electrical supply installation', 'Intercom cabling to property', 'Planning permission where applicable'],
    timeline: 'Typically 1 day on site. No lead time for in-stock motors.',
  },
  {
    slug: 'gate-repair-and-maintenance',
    service: 'Gate Repair and Maintenance',
    summary: 'Repair costs depend entirely on what has failed. A genuine diagnosis from a specialist is far more valuable than a quote for wholesale replacement. Many gate "failures" are control board or photocell issues that cost a fraction of a motor replacement.',
    typicalRange: '£85 – £1,500',
    budgetRange: '£85 – £250 — callout and diagnosis, photocell realignment, minor adjustments, fob reprogramming.',
    midRange: '£250 – £700 — control board replacement, single motor repair, intercom fault diagnosis, safety edge replacement.',
    premiumRange: '£700 – £2,000+ — full motor replacement, underground motor recovery and refit, major control system upgrade.',
    factors: [
      { factor: 'Honest diagnosis', impact: 'Always get a second opinion before accepting a full replacement quote. Many jobs quoted as "motor replacement" are actually a £120 control board swap or a £40 photocell realignment.' },
      { factor: 'Parts availability', impact: 'Mainstream brands (BFT, Came, FAAC, Nice) have readily available parts. Obsolete or rebadged motors may need wholesale replacement.' },
      { factor: 'Callout charge', impact: 'Most Hertfordshire specialists charge £75–£150 for the first hour including diagnosis, credited against any agreed repair work.' },
    ],
    included: ['Callout and diagnosis', 'Repair work as agreed', 'Safety re-test if motor work is carried out', 'Short-term warranty on parts fitted'],
    excluded: ['Major structural gate repairs', 'Replacement of obsolete systems', 'Upgrade work beyond original scope'],
    timeline: 'Most repairs completed in a single visit. Diagnosis within 48 hours of booking for urgent cases.',
  },
];

export const getCostBySlug = (slug: string) => COST_GUIDES.find(c => c.slug === slug);
