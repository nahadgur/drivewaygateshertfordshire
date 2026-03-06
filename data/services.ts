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
    description: 'The practical solution for driveways where swing clearance is limited. Sliding gates run on a ground track or cantilever system and handle wide openings and tight approaches that swing gates cannot serve.',
    image: '/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png',
    icon: 'Zap',
    color: 'slate',
    faqs: [
      {
        question: 'How much run-back space does a sliding gate need?',
        answer: 'The gate retracts fully to one side of the opening, so you need a clear stretch of wall or fence at least as wide as the gate leaf, plus roughly 500mm for the motor housing and end stop. A 4-metre gate requires approximately 4.5 metres of unobstructed boundary on one side. Where that run-back is not available, a cantilever system removes the ground track entirely and reduces the lateral requirement. Your installer will assess both configurations during the site survey.',
      },
      {
        question: 'Can a sliding gate work on the sloped driveways found in Hertfordshire?',
        answer: 'Yes. Hertfordshire has a number of properties on sloped plots, particularly across the Chiltern Hills in the west and on the undulating terrain between Hertford and Bishops Stortford. The track itself must remain level regardless of the driveway gradient, which means the installer builds up the track foundation on a slope or specifies a cantilever system that clears the ground entirely. Both approaches are well proven across Hertfordshire installations.',
      },
      {
        question: 'How long does a sliding gate installation take in Hertfordshire?',
        answer: 'A standard residential sliding gate installation takes 3 to 4 days. Day one covers groundwork: excavating the track foundation, pouring the concrete base, and running electrical conduit. Day two is track installation and gate hanging. Day three handles motor mounting, safety sensors, and wiring. The final day covers commissioning, remote programming, intercom setup if included, and handover.',
      },
    ],
  },
  {
    id: 'electric-swing',
    title: 'Electric Swing Gates',
    slug: 'electric-swing-gates',
    description: 'The most popular gate type on residential Hertfordshire driveways. Single or double leaf gates driven by underground or ram-arm motors, combining traditional presence with modern automated convenience.',
    image: '/images/gates/gate-steel-sage-green-swing-period-brick-spring.png',
    icon: 'Shield',
    color: 'emerald',
    faqs: [
      {
        question: 'Should electric swing gates open inward or outward?',
        answer: 'Inward opening is the standard and, in most cases, the only permitted direction. UK highway regulations prohibit gates from opening over a public footpath or road. The exception arises where the driveway slopes steeply downward from the road, making inward opening mechanically difficult. In those cases, installers use articulated hinge systems or higher-torque underground motors to manage the gradient. Sloped approaches are found across the Chiltern Hills in western Hertfordshire and on some of the hillier terrain around Hertford and Ware.',
      },
      {
        question: 'What is the right width for electric swing gates?',
        answer: 'The opening should match your actual traffic needs. A single car requires a minimum clear opening of 2.7 metres; two vehicles passing comfortably need at least 5 metres. Most residential driveways in Hertfordshire fall between 3 and 4 metres, well suited to a standard double gate split into two equal leaves. For openings wider than 5 metres, your installer will likely recommend a sliding gate as the more structurally sound option.',
      },
      {
        question: 'Do electric swing gates require planning permission in Hertfordshire?',
        answer: 'In most cases, no. Permitted development rights cover gates up to 2 metres in height that open inward and are not adjacent to a classified road. The limit reduces to 1 metre for gates fronting a highway. Listed buildings and conservation area properties require consent regardless of height. Hertfordshire has extensive Green Belt coverage, the Chilterns AONB in the west, and conservation areas in every historic market town. Your installer will flag any considerations at the site survey.',
      },
    ],
  },
  {
    id: 'wooden-gates',
    title: 'Wooden Driveway Gates',
    slug: 'wooden-driveway-gates',
    description: 'Bespoke hardwood gates crafted to specification in iroko, European oak, or Accoya. The natural choice for Chilterns cottages, rural farmhouses, and period properties where character matters as much as security.',
    image: '/images/gates/gate-wooden-painted-cream-hertfordshire-countryside.png',
    icon: 'Sparkles',
    color: 'amber',
    faqs: [
      {
        question: 'How long do hardwood driveway gates last in Hertfordshire?',
        answer: 'A properly specified and maintained hardwood gate will outlast most other materials. Iroko, the most commonly used species for Hertfordshire residential gates, has a natural oil content that resists moisture and holds its shape through the seasonal weather changes. With an oil treatment every two years, an iroko gate will remain structurally sound for 25 to 30 years. European oak performs similarly and weathers to an attractive silver grey. Accoya, with a 50-year above-ground durability guarantee, is the low-maintenance premium option for exposed or rural positions.',
      },
      {
        question: 'Can hardwood gates be automated?',
        answer: 'Yes, and the combination works well. Hardwood gates are heavier than aluminium equivalents, so the motor specification matters. A well-rated underground swing motor or heavy-duty ram-arm system handles even large iroko or oak gates without difficulty. The installer needs the approximate weight and dimensions before specifying the motor, which is why timber species and panel design are confirmed before automation equipment is ordered.',
      },
      {
        question: 'Which timber species works best for Hertfordshire conditions?',
        answer: 'Iroko is the most reliable all-round choice. It is naturally durable to Use Class 3, resists surface checking, and holds its shape through the seasons. European oak is equally durable and preferred where the grain character is a design priority, often the right choice in Chilterns AONB and conservation area contexts where material authenticity matters. Accoya is the right specification for homeowners who want minimal maintenance, particularly on exposed rural properties where weather cycles are more pronounced.',
      },
    ],
  },
  {
    id: 'metal-gates',
    title: 'Metal Driveway Gates',
    slug: 'metal-driveway-gates',
    description: 'Fabricated steel, aluminium, and wrought iron gates built for decades of service. From hand-forged ironwork on St Albans and Radlett estate properties to contemporary aluminium on modern Welwyn builds.',
    image: '/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png',
    icon: 'Globe',
    color: 'sky',
    faqs: [
      {
        question: 'What is the practical difference between steel, aluminium, and wrought iron gates?',
        answer: 'Mild steel is the standard fabrication material for bespoke gates across Hertfordshire. It is strong, weldable into any profile, and takes a hot-dip galvanised and powder-coated finish that protects against corrosion for 20 years or more. Aluminium is lighter, will not rust under any conditions, and is preferred for very wide gates or where reducing motor load matters. Wrought iron is a specialist material, hand-forged by blacksmiths, used on high-value period and estate properties where the authentic character of the material justifies the additional cost. Hertfordshire has a strong market for wrought iron, particularly in the St Albans, Harpenden, and Radlett areas.',
      },
      {
        question: 'Do metal gates rust in Hertfordshire conditions?',
        answer: 'Untreated steel and iron will corrode over time. The correct specification is hot-dip galvanising before powder coating, which encases the steel in zinc before the polymer finish is applied. Any chip or scratch exposes zinc rather than steel, and the zinc continues to protect through a sacrificial mechanism. A gate specified this way should not require remedial rust treatment for 20 years or more. Aluminium is the zero-maintenance alternative, forming a stable oxide layer that protects without any additional treatment.',
      },
      {
        question: 'Can I commission a bespoke design for a metal gate in Hertfordshire?',
        answer: 'Yes. Bespoke fabrication is standard practice for metal gates in Hertfordshire, and the majority of installations in our network involve a custom design rather than an off-the-shelf product. Fabricators can produce anything from a horizontal-bar contemporary gate to an ornate estate gate with scrollwork and gilded finials. Most provide detailed CAD drawings and, for larger projects, 3D renders showing the gate in position. The design process typically adds 2 to 4 weeks before fabrication begins.',
      },
    ],
  },
  {
    id: 'automated-systems',
    title: 'Automated Gate Systems',
    slug: 'automated-gate-systems',
    description: 'Complete automation packages for new and existing gates. Motors, safety systems, video intercom, keypad and proximity access, smart home integration, and battery backup as standard.',
    image: '/images/gates/gate-video-intercom-panel-brick-wall-closeup.png',
    icon: 'Medal',
    color: 'indigo',
    faqs: [
      {
        question: 'Can my existing gates be automated?',
        answer: 'In most cases, yes, provided the gates are structurally sound and properly hung on posts with adequate foundations. The installer will assess gate weight, hinge condition, post alignment, and available power supply during the site visit. Common issues that need addressing before automation are sagging hinges, posts that have moved, and gates heavier than the proposed motor is rated for. All are straightforward to resolve.',
      },
      {
        question: 'What happens to automated gates when the power goes off?',
        answer: 'Every properly installed automated gate system includes a manual release mechanism for hand operation without power. Most modern control boards also accept a battery backup that maintains automatic operation for 20 to 50 full cycles after the mains fails. For properties in rural Hertfordshire where outages are less predictable, a solar panel connected to a dedicated battery bank can keep the system running independently of the mains.',
      },
      {
        question: 'Can I operate my gates from a smartphone?',
        answer: 'Yes. GSM and Wi-Fi modules are available for most gate motor brands and allow you to open, close, and monitor your gates from anywhere. You can grant temporary access to specific numbers, receive push notifications when the gate operates, and integrate into smart home platforms including Google Home, Amazon Alexa, and Apple HomeKit. Video intercom systems with IP cameras give a live view of the entrance on your phone. Your installer will configure everything before handover.',
      },
    ],
  },
  {
    id: 'gate-repair',
    title: 'Gate Repair and Maintenance',
    slug: 'gate-repair-and-maintenance',
    description: 'Diagnostic callouts, motor replacement, hinge realignment, safety sensor calibration, and annual service contracts across Hertfordshire. Most faults resolved on the first visit.',
    image: '/images/gates/gate-split-wrought-iron-vs-aluminium-sliding.png',
    icon: 'Users',
    color: 'rose',
    faqs: [
      {
        question: 'How often should electric driveway gates be serviced?',
        answer: 'Once a year is the minimum for any automated gate system. A full service covers motor lubrication, gearbox inspection, drive mechanism condition, hinge torque, safety sensor alignment and testing, battery backup charge level, intercom function, and a visual inspection of the gate structure, posts, and finish. Annual servicing typically costs \u00a3130 to \u00a3220 in Hertfordshire and will extend the working life of the motor by several years.',
      },
      {
        question: 'My gate is making a grinding or scraping noise. What is causing it?',
        answer: 'A grinding noise on a sliding gate is almost always debris in the track, a worn drive pinion, or a roller that has seized. On a swing gate, grinding usually points to a dry hinge, a worn motor gearbox, or a gate that has dropped and is scraping the ground or pillar face. Stop using the gate on auto mode until an engineer has inspected it. Continuing to run a faulty gate accelerates wear and can turn a minor repair into a motor replacement.',
      },
      {
        question: 'How much does a gate repair callout cost in Hertfordshire?',
        answer: 'Hertfordshire gate engineers typically charge a callout and diagnostic fee of \u00a390 to \u00a3150, covering the visit and a full assessment. Labour and parts are additional. Most common repairs come to between \u00a3250 and \u00a3650 all in on a single visit. Engineers in our network carry the most common spare parts for FAAC, BFT, CAME, Nice, and Beninca on the van, meaning the majority of faults are resolved the same day.',
      },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
