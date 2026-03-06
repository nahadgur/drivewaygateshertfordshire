// data/services.ts - Driveway Gates Hertfordshire

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: 'electric-sliding',
    title: 'Electric Sliding Gates',
    slug: 'electric-sliding-gates',
    description: 'Built for driveways where swing clearance is tight or the gradient makes swing gates impractical. Sliding gates travel on a ground track or cantilever rail and handle wide openings that other formats struggle with.',
    image: '/images/gates/herts-contemporary-aluminium-slider-dark-finish.png',
    icon: 'Zap',
    color: 'slate',
    faqs: [
      {
        question: 'How much boundary space does a sliding gate require to retract?',
        answer: 'The gate needs to pull back fully to one side, so you need a clear boundary run at least as long as the gate leaf plus approximately 500mm for the motor and end stop. A 4-metre gate needs roughly 4.5 metres of unobstructed wall or fence line on one side. If that space is not available on either side, a cantilever system can reduce the clearance needed. Alternatively, a biparting configuration splits the gate into two halves that retract in opposite directions. Your installer will assess which layout fits your site at the survey.',
      },
      {
        question: 'Are sliding gates suitable for sloped driveways in Hertfordshire?',
        answer: 'They are, and often they are the preferred solution. The Chiltern Hills in western Hertfordshire and the undulating ground around Hertford and Bishops Stortford produce plenty of driveways where swing gates would scrape or jam. A sliding gate moves along the boundary independent of the driveway gradient. The track or cantilever rail is installed level regardless of what the drive surface does. Cantilever systems, which suspend the gate above the ground entirely, remove the track constraint and work on the steepest residential sites.',
      },
      {
        question: 'What is the typical installation timeline for a sliding gate?',
        answer: 'Allow 3 to 4 working days from arrival on site. Day one is excavation and foundation work for the track, plus laying electrical conduit. Day two the track is set, levelled, and the gate is hung. Day three the motor, drive rack, and photocell sensors are installed and wired. The final day covers commissioning, safety testing to BS EN 12453, remote programming, and handover. Larger or more complex systems may extend to five days.',
      },
    ],
  },
  {
    id: 'electric-swing',
    title: 'Electric Swing Gates',
    slug: 'electric-swing-gates',
    description: 'The standard format on detached Hertfordshire properties. A single or double leaf gate powered by underground or surface-mounted motors, delivering the traditional entrance appearance with fully automated operation.',
    image: '/images/gates/herts-powder-coated-green-swing-victorian-brick.png',
    icon: 'Shield',
    color: 'emerald',
    faqs: [
      {
        question: 'Do electric swing gates always need to open inward?',
        answer: 'In almost every residential situation, yes. UK highway law prohibits gates from opening over a public footpath or road, which rules out outward opening for the majority of Hertfordshire properties. The rare exception is a driveway that drops steeply from the road, making inward opening mechanically awkward. In those cases, installers use articulated hinges or high-torque underground motors to work with the gradient rather than reversing the direction. Properties on the Chiltern escarpment and hilly ground around Hertford occasionally require this approach.',
      },
      {
        question: 'How wide can electric swing gates be before they become impractical?',
        answer: 'A double swing gate works comfortably up to about 5 metres total opening width, with each leaf at 2.5 metres. Beyond that, the leverage on the hinge posts and the weight that each motor must handle become problematic. Wider openings are better served by a sliding gate, which carries its load along a track rather than concentrating it at the hinge point. Most Hertfordshire residential driveways fall between 3 and 4 metres, which is ideal swing gate territory.',
      },
      {
        question: 'Is planning permission needed for swing gates in Hertfordshire?',
        answer: 'For most properties, no. Permitted development covers gates under 2 metres (1 metre if fronting a classified road) that open inward. However, Hertfordshire is one of the most heavily designated counties in England. Green Belt covers the vast majority of the county. The Chilterns AONB applies in the west. Conservation areas exist across St Albans, Hitchin, Hertford, Ware, Berkhamsted, and many villages. Listed buildings require separate consent. Your installer should establish the planning position at the site survey before anything else.',
      },
    ],
  },
  {
    id: 'wooden-gates',
    title: 'Wooden Driveway Gates',
    slug: 'wooden-driveway-gates',
    description: 'Bespoke hardwood gates in iroko, European oak, or Accoya. Suited to Chilterns cottages, rural farmhouses, Green Belt properties, and any Hertfordshire entrance where a natural material belongs.',
    image: '/images/gates/herts-cream-hardwood-swing-rural-cottage-entrance.png',
    icon: 'Sparkles',
    color: 'amber',
    faqs: [
      {
        question: 'What lifespan can I expect from hardwood driveway gates in Hertfordshire?',
        answer: 'With proper specification and regular maintenance, 25 to 30 years is achievable from iroko and European oak. Iroko is naturally durable to Use Class 3, handles the seasonal moisture swings of the South East well, and needs an oil treatment every 18 to 24 months to maintain its appearance. Oak performs similarly and weathers to a silver grey if left untreated. Accoya, a modified timber with a manufacturer guarantee of 50 years above ground, is the option for homeowners who want hardwood character with the lowest possible maintenance commitment.',
      },
      {
        question: 'Can wooden gates support electric automation?',
        answer: 'Yes, and the pairing is common across Hertfordshire. Hardwood gates are heavier than their aluminium equivalents, which means the motor must be matched to the actual gate weight. An underground swing motor or a heavy-duty ram-arm handles even large iroko or oak leaves without issue when properly specified. The installer confirms the gate dimensions and weight before selecting the motor, which is why the timber species and panel design are finalised before any automation equipment is ordered.',
      },
      {
        question: 'Which hardwood performs best for Hertfordshire conditions?',
        answer: 'Iroko is the reliable default for most Hertfordshire gate projects. It is naturally durable without chemical treatment, stable through seasonal changes, and holds an oil finish well. European oak is the right choice where the grain and colour of the timber are a deliberate design feature, particularly on Chilterns AONB properties and in conservation area settings where material authenticity carries weight with planning advisers. Accoya suits homeowners who want the appearance of painted timber without the frequent recoating that conventional softwood demands.',
      },
    ],
  },
  {
    id: 'metal-gates',
    title: 'Metal Driveway Gates',
    slug: 'metal-driveway-gates',
    description: 'Fabricated steel, aluminium, and wrought iron gates engineered for longevity. Ornate ironwork for St Albans and Radlett period properties through to clean-lined aluminium for contemporary Welwyn and Hatfield builds.',
    image: '/images/gates/herts-ornate-iron-entrance-pillars-lanterns-driveway.png',
    icon: 'Globe',
    color: 'sky',
    faqs: [
      {
        question: 'How do steel, aluminium, and wrought iron gates differ in practice?',
        answer: 'Mild steel is the workhorse material for bespoke gates across Hertfordshire. Strong, weldable to any shape, and protected long-term by hot-dip galvanising followed by powder coating. Aluminium is lighter, completely immune to rust, and preferred for wide gates where reducing motor load matters. Wrought iron is a blacksmith-forged material with a texture and character that fabricated steel does not replicate. It commands a premium price and is specified on high-value period properties, particularly across the St Albans, Harpenden, and Radlett markets where the entrance aesthetic carries serious weight.',
      },
      {
        question: 'Will metal gates corrode in Hertfordshire weather?',
        answer: 'Bare steel or iron will rust in any outdoor UK environment. The correct prevention is hot-dip galvanising before powder coating. The gate is immersed in molten zinc after fabrication, bonding zinc to every surface including internal hollow sections and weld points. If the powder coat finish is chipped, the exposed zinc continues to protect through a sacrificial chemical reaction. A gate treated this way will not need any corrosion repair for 20 years or more. Aluminium sidesteps the issue entirely because it forms its own protective oxide layer and cannot rust.',
      },
      {
        question: 'Is bespoke fabrication standard for metal gates in Hertfordshire?',
        answer: 'For most projects in our network, yes. The majority of Hertfordshire metal gate installations involve a design produced specifically for the property rather than a catalogue product. Fabricators produce everything from simple flat-bar horizontal gates to ornate scroll and spear designs with personalised details. CAD drawings before fabrication are standard practice, with 3D renders available on larger projects. The design approval stage typically adds 2 to 4 weeks to the timeline before workshop fabrication begins.',
      },
    ],
  },
  {
    id: 'automated-systems',
    title: 'Automated Gate Systems',
    slug: 'automated-gate-systems',
    description: 'Automation packages for new and existing gates. Underground and surface motors, safety systems, video intercom, keypad and fob access, smart home connectivity, and battery backup included as standard.',
    image: '/images/gates/herts-video-intercom-flush-mounted-pillar-detail.png',
    icon: 'Medal',
    color: 'indigo',
    faqs: [
      {
        question: 'Can existing manual gates be retrofitted with electric automation?',
        answer: 'In the majority of cases, yes. The gates need to be structurally sound, correctly hung, and mounted on posts with adequate foundations. The installer checks gate weight, hinge condition, post alignment, and power supply access during the site visit. Common issues like sagging hinges or posts that have shifted slightly are straightforward to remedy before the motor goes in. The one situation where a retrofit is not cost-effective is when the gates themselves are deteriorating and would need replacing within a few years regardless.',
      },
      {
        question: 'How do automated gates operate during a power failure?',
        answer: 'Every properly installed system includes a manual release that allows the gate to be pushed open and closed by hand without power. Beyond that, most modern control boards accept a battery backup module that keeps the automation running for 20 to 50 full cycles after the mains drops. For rural Hertfordshire properties with less reliable supply, a solar panel connected to a dedicated battery bank maintains operation independently of the grid. Your installer will recommend the right backup configuration based on your location.',
      },
      {
        question: 'Can I control the gates from my phone?',
        answer: 'Yes. Wi-Fi and GSM modules available for all the main motor brands allow you to open, close, and monitor the gates from anywhere with signal. You can issue temporary access codes, receive push notifications on every gate event, and connect the system to Google Home, Amazon Alexa, or Apple HomeKit. Video intercom systems with IP cameras let you see who is at the entrance and decide whether to grant access before the gate opens. Your installer configures everything and tests it before leaving site.',
      },
    ],
  },
  {
    id: 'gate-repair',
    title: 'Gate Repair and Maintenance',
    slug: 'gate-repair-and-maintenance',
    description: 'Diagnostic callouts, motor and board replacement, hinge correction, safety recalibration, and scheduled annual servicing across Hertfordshire. The majority of faults resolved in a single visit.',
    image: '/images/gates/herts-comparison-traditional-iron-vs-modern-aluminium.png',
    icon: 'Users',
    color: 'rose',
    faqs: [
      {
        question: 'What does a proper annual gate service cover?',
        answer: 'Motor and gearbox lubrication, drive mechanism inspection, hinge torque and alignment check, safety sensor calibration and response testing, battery backup load test, intercom and access control function check, track cleaning on sliding systems, and a structural assessment of the gate, posts, and finish condition. Annual servicing in Hertfordshire typically runs between £130 and £220 and extends motor life by several years compared to running the system without servicing until something breaks.',
      },
      {
        question: 'What causes a gate to stop mid-travel and reverse?',
        answer: 'Almost always a safety system activation. The most common trigger is a photocell beam that has been knocked out of alignment by a vehicle, frost movement, or debris near the sensor housing. Less frequently, the gate is meeting physical resistance from a dropped hinge, debris in a sliding gate track, or an obstruction in the swing arc. Stop operating the gate in auto mode and book a callout. Do not bypass or tape over the photocell, as it is a safety device that prevents the gate from closing on a person or vehicle.',
      },
      {
        question: 'What is a typical repair callout cost in Hertfordshire?',
        answer: 'The callout and diagnostic fee is usually £90 to £150, covering the visit, the fault assessment, and a written quote for the repair. Parts and labour for the fix are on top. Common single-visit repairs including photocell replacement, control board swap, hinge adjustment, and safety sensor recalibration fall between £250 and £650 all in. Engineers in our network stock the most-used parts for FAAC, BFT, CAME, Nice, and Beninca, so the majority of Hertfordshire callouts are completed on the first visit without needing a return trip.',
      },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
