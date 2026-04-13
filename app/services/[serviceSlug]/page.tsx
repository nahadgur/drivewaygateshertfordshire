// app/services/[serviceSlug]/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, Shield, Star, Search, CheckCircle, ArrowRight, ChevronDown, Award, Users, CreditCard, Sparkles } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { HeritageHeroMoney } from '@/components/HeritageHeroMoney';
import { PricingSection } from '@/components/PricingSection';
import { siteConfig } from '@/data/site';

const serviceContent: Record<string, { intro: string[]; benefits: { title: string; desc: string }[]; candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[] }> = {
  'electric-sliding': {
    intro: [
      "Sliding gates earn their place on Hertfordshire driveways wherever the site conditions make swing gates impractical. The Chiltern Hills in the west produce driveways that change elevation sharply between road and entrance. Properties through central and eastern Hertfordshire sit on rolling terrain where the approach frequently slopes or curves. In both cases, a sliding gate avoids the clearance problem entirely by tracking along the boundary wall or fence rather than sweeping through an arc that the gradient would obstruct.",
      "The mechanism is either ground-track or cantilever. Ground-track systems run the gate on rollers within a steel channel set into a concrete foundation at surface level. Cantilever systems suspend the gate from an elevated rail, removing the ground-level track entirely. Cantilever is specified where the gradient prevents a level track, where a decorative driveway surface should not be cut, or where leaf litter from the mature trees that surround many Hertfordshire properties would clog a ground channel within weeks.",
      "The main planning constraint is lateral space. The gate needs a clear boundary run on one side at least equal to its own width plus approximately 500mm for the motor. On most Hertfordshire properties this is available as an existing wall, fence, or hedge line. Where it is not, a biparting configuration splits the gate into two halves that retract in opposite directions, halving the run-back needed on each side.",
    ],
    benefits: [
      { title: 'Solves Gradient Problems on Chilterns and Hilly Sites', desc: 'Where swing gates scrape, stall, or need complex hinge engineering, a sliding gate simply tracks along the boundary independent of the driveway slope. Cantilever systems handle even the steepest residential gradients found in Hertfordshire.' },
      { title: 'Structurally Superior on Wide Entrances', desc: 'Wide swing leaves create heavy loads at the hinge point. A sliding gate distributes its weight along the track, making it the stronger choice for Hertfordshire openings wider than 5 metres.' },
      { title: 'Compact When Open', desc: 'The gate sits flat against the boundary when retracted, projecting nothing into the driveway. A significant practical advantage on shorter approaches common in the Hertfordshire commuter belt.' },
      { title: 'Simple, Proven Drive System', desc: 'Rack-and-pinion drives are mechanically straightforward and well understood. Annually maintained, they deliver a decade or more of reliable operation before any component needs attention.' },
    ],
    candidateIntro: "A sliding gate is probably the right choice for your Hertfordshire property if:",
    candidates: [
      "The driveway gradient makes swing gate clearance impractical or expensive to engineer",
      "The approach from the road is short and swing leaves would block parking or the pavement",
      "The opening is wider than 5 metres and structural efficiency matters alongside appearance",
      "You have a clear run of boundary on one side at least as wide as the proposed gate",
      "A contemporary, low-profile gate that sits flush against the boundary when open suits the property",
    ],
    process: [
      { title: 'Site Assessment', desc: 'The installer measures the opening, checks the gradient, confirms run-back availability, and determines whether ground-track or cantilever is the right configuration for the soil conditions and surface finish.' },
      { title: 'Foundation Work', desc: 'The track foundation is excavated and poured. Electrical conduit for the motor and any intercom cabling is run during this phase before the ground surface is reinstated.' },
      { title: 'Gate and Motor Installation', desc: 'The track or cantilever rail is set level, the gate is hung and adjusted for smooth travel, the motor and drive rack are fitted, and photocell sensors are positioned and connected.' },
      { title: 'Commissioning', desc: 'Travel endpoints calibrated, safety response verified to BS EN 12453 with force testing, remote handsets and app access programmed, and the manual release procedure demonstrated.' },
    ],
  },
  'electric-swing': {
    intro: [
      "Swing gates remain the most popular format on detached residential properties across Hertfordshire, and the reasons are practical as much as aesthetic. A pair of leaves opening symmetrically from the entrance creates a visual presence that single-panel alternatives do not match. The technology is mature, the installer population that can deliver reliable results is large, and the range of materials and motor options provides flexibility across everything from a modest semi in Stevenage to a substantial Victorian villa in St Albans.",
      "Motor selection defines how the entrance reads. Underground motors sit in a sealed chamber below the gate post, invisible from the road and the driveway side. The entrance appears purely architectural rather than mechanical. This is the standard expectation in the premium Hertfordshire market across St Albans, Harpenden, Radlett, and Bushey. Ram-arm motors fix to the rear face of the gate and post, visible from inside but not from the road. They are less expensive, easier to service, and the right answer on retrofit projects where excavating around the existing posts is not practical.",
      "The fundamental requirement for swing gates is arc clearance. Each leaf sweeps through 90 degrees inward, and nothing can be in its path: parked vehicles, walls, raised borders, bins, or a ground surface that rises into the arc on a sloped driveway. Properties on the Chiltern Hills and the undulating ground around Hertford require the installer to walk the arc on site and confirm clearance at every point before specifying the motor.",
    ],
    benefits: [
      { title: 'Stronger Visual Impact at the Entrance', desc: 'Paired gates meeting at a central point create an architectural statement that works with period properties, detached family homes, and any Hertfordshire entrance where the gate is part of the design rather than just a functional barrier.' },
      { title: 'Lower Installed Cost on Level Sites', desc: 'No track foundation and simpler groundwork means a swing gate installation typically costs \u00a3500 to \u00a32,000 less than an equivalent sliding system on a standard flat or near-flat Hertfordshire driveway.' },
      { title: 'Concealed Motor Option', desc: 'Underground motors are widely available and the default specification on premium Hertfordshire properties. The gate face stays uncluttered, the posts stay clean, and the automation is invisible to anyone approaching the entrance.' },
      { title: 'Integrated Pedestrian Access', desc: 'A smaller pedestrian leaf or built-in wicket allows foot traffic without cycling the main motors. Practical on properties with regular deliveries, visitors, or household members who walk through rather than drive.' },
    ],
    candidateIntro: "Swing gates work on most Hertfordshire residential driveways where the geometry allows:",
    candidates: [
      "The driveway has enough depth for the gate leaves to swing fully open without hitting vehicles or obstructions",
      "The gradient is flat or manageable with standard or articulated hinge engineering",
      "The opening width is up to 5 metres, keeping post loads within practical limits",
      "The property style benefits from a symmetrical, paired entrance",
      "Budget is a consideration and the site does not specifically demand a sliding system",
    ],
    process: [
      { title: 'Survey and Arc Check', desc: 'The installer measures the opening, walks the full swing arc, assesses pillar condition and foundation depth, and confirms whether underground or surface-mounted motors suit the site.' },
      { title: 'Foundation and Post Work', desc: 'New posts are set in reinforced concrete if required. Underground motor chambers are excavated and formed. Conduit for power and access control cabling is installed before any surfaces are reinstated.' },
      { title: 'Hanging and Motor Fitting', desc: 'Gate leaves are hung and adjusted for alignment. Motors are fitted into underground chambers or mounted to post faces. Photocells are positioned for coverage of the full arc.' },
      { title: 'Programming and Handover', desc: 'Travel and force limits set and tested to BS EN 12453. All access devices programmed. Manual release demonstrated. Written commissioning record provided.' },
    ],
  },
  'wooden-gates': {
    intro: [
      "Hertfordshire has a large stock of properties where hardwood is not just the attractive option but the only material that sits correctly in the setting. The Chilterns AONB around Berkhamsted, Tring, and Aldbury contains cottages, farmhouses, and converted agricultural buildings where the existing boundary materials are timber, flint, and brick. Conservation areas across St Albans, Hitchin, and Hertford include streets where the boundary character is established and a timber gate is what the planning context expects. Green Belt villages throughout the county contain period properties where the entrance needs to reference the building rather than contrast with it.",
      "Three timber species dominate Hertfordshire residential gate work. Iroko is the standard practical choice: naturally durable without chemical treatment, stable through the moisture cycles of the South East, and consistent in quality from batch to batch. European oak brings deeper grain character and is chosen where the timber itself is a deliberate design element. Untreated, it weathers to a uniform silver grey that sits naturally against flint walls and aged brickwork. Accoya is the engineered option: its modified cell structure carries a 50-year above-ground guarantee and holds paint and stain finishes far longer than conventional timber.",
      "Fabrication is almost always bespoke for timber gates in Hertfordshire. A skilled maker can match the proportions of your entrance, reference the fencing or hedge profile on either side, or incorporate a detail from the house itself. The premium over a catalogue size is modest and the result is a gate that belongs to your property rather than looking like it was selected from a brochure.",
    ],
    benefits: [
      { title: 'Appropriate for AONB, Green Belt, and Conservation Settings', desc: 'Where the planning context favours traditional materials, hardwood is the specification most likely to satisfy a planning officer, a conservation adviser, or a neighbour. In Chilterns AONB and Green Belt villages, timber gates often face less scrutiny than metal alternatives.' },
      { title: 'Bespoke at an Accessible Price Point', desc: 'Timber gate joinery is more accessible than specialist metalwork. A custom design matched precisely to your entrance costs only modestly more than standard sizing and produces a noticeably better result.' },
      { title: 'Privacy and Acoustic Benefit', desc: 'A close-boarded hardwood gate blocks sightlines completely and reduces road noise measurably. Relevant on Hertfordshire properties fronting A-roads, near railway lines, or in villages with through-traffic.' },
      { title: 'Develops Character Over Time', desc: 'Oiled iroko deepens in tone with age. Untreated oak develops a consistent silver patina. These are materials that look better in year ten than in year one.' },
    ],
    candidateIntro: "Hardwood gates are worth specifying if:",
    candidates: [
      "The property is a farmhouse, converted barn, period cottage, or any building where natural materials are architecturally right",
      "The entrance sits within the Chilterns AONB, the Green Belt, or a conservation area where traditional materials are expected",
      "Visual privacy from a close-boarded design is a genuine requirement",
      "You are prepared to oil the gates every 18 to 24 months, or willing to specify Accoya to extend that interval significantly",
      "A custom design that references specific architectural details of the property is part of the brief",
    ],
    process: [
      { title: 'Design and Timber Selection', desc: 'Installer discusses the brief, shows timber samples, advises on the right species for the maintenance commitment and site exposure, and confirms automation needs before producing drawings.' },
      { title: 'Drawing Approval', desc: 'Fabrication drawings produced and submitted for your sign-off. No timber is ordered or cut until the design is confirmed.' },
      { title: 'Workshop Fabrication', desc: 'Gates built to the approved drawings. Allow 3 to 5 weeks from confirmed order depending on species availability and design complexity.' },
      { title: 'Installation and Aftercare', desc: 'Gates hung on galvanised or stainless ironmongery. Initial treatment coat applied on site. Automation fitted and commissioned if included. Written maintenance schedule for the specified timber handed over.' },
    ],
  },
  'metal-gates': {
    intro: [
      "Hertfordshire supports a broad metal gate market. The premium residential streets of St Albans, Harpenden, and Radlett produce hand-forged wrought iron entrance treatments with gilded finials, brick piers, and underground motors. Modern builds in Welwyn Garden City, Hatfield, and the newer parts of Stevenage specify aluminium or powder-coated steel in clean contemporary profiles. Between these two ends sits the majority of Hertfordshire metal gate installations: mild steel fabricated to a bespoke design, hot-dip galvanised for corrosion protection, and finished in whatever RAL colour the property requires.",
      "Surface treatment is the specification decision that matters most for longevity. Hot-dip galvanising before powder coating is the correct and only acceptable standard for outdoor steel gates. The fabricated gate is dipped in molten zinc, bonding a zinc layer to every surface including internal hollow sections, weld points, and cut edges. The decorative powder coat goes over the zinc. If the finish is ever chipped or scratched, it exposes zinc rather than bare steel, and the zinc protects the substrate through a sacrificial mechanism. A gate treated this way needs no corrosion attention for 20 years or more.",
      "Design flexibility is one of the strongest arguments for metal. Laser cutting produces intricate personalised patterns from flat plate. Traditional blacksmith techniques create scrollwork, spear finials, and curved top rails for period properties. CAD drawings before fabrication are standard practice, with 3D renders available on more complex projects. Most fabricators in our Hertfordshire network produce approval drawings before any steel is cut.",
    ],
    benefits: [
      { title: 'Twenty-Plus Year Structural Life', desc: 'Galvanised and powder-coated steel lasts decades without surface remediation. Aluminium does not corrode at all. Wrought iron, maintained with periodic recoating, has a proven lifespan measured in centuries rather than decades.' },
      { title: 'Genuine Physical Security', desc: 'Heavy-gauge steel or wrought iron on reinforced post foundations provides physical resistance that timber and aluminium cannot match. Combined with correct locks and hinge specification, a metal gate is a serious deterrent against forced entry.' },
      { title: 'Design Without Limits', desc: 'Ornate Georgian reproductions, laser-cut personalised panels, minimalist horizontal flat bar, contemporary perforated screens. Metal fabrication handles any design brief while maintaining structural integrity.' },
      { title: 'Minimal Ongoing Maintenance', desc: 'Once the galvanising and powder coat are intact, the maintenance requirement is an annual wash. That is the full commitment for 20 years. No oiling, no repainting, no retreating.' },
    ],
    candidateIntro: "Metal gates are the right material if:",
    candidates: [
      "Security is a primary concern and physical resistance at the entrance matters",
      "You want a gate that requires no active maintenance for the next two decades",
      "The design brief involves ornate ironwork, laser-cut personalisation, or a precision contemporary aesthetic",
      "The property is in a conservation area where a heritage metalwork style is part of the established boundary character",
      "The entrance scale and the character of the property suit wrought iron and the budget supports that specification",
    ],
    process: [
      { title: 'Design Consultation', desc: 'Installer reviews portfolio examples, discusses material, profile, colour, and automation. CAD drawings produced for approval, with 3D renders available on complex projects.' },
      { title: 'Fabrication and Treatment', desc: 'Gate fabricated in the workshop, shot-blasted, hot-dip galvanised, and powder-coated in the specified RAL colour. Allow 3 to 6 weeks from drawing sign-off.' },
      { title: 'Installation', desc: 'Gate hung on new or existing posts, with foundations assessed and upgraded if required. Automation and access control fitted and wired.' },
      { title: 'Commissioning', desc: 'Travel and force limits set and tested to BS EN 12453. All access devices programmed. Manual release demonstrated. Written warranties for gate and automation provided separately.' },
    ],
  },
  'automated-systems': {
    intro: [
      "Automation retrofits are the single most common project type across the Hertfordshire installer network. The brief is always some variation of the same story: gates that have been on the property for years, structurally sound and aesthetically right, but manually operated. The homeowner has reached the point where the daily routine of getting out of the car to open them is no longer acceptable. The retrofit adds motor, safety systems, and access control without touching the gates themselves.",
      "The motor decision on a retrofit depends on what the existing posts can accommodate. Where the posts are set in adequate concrete with clearance at the base, underground motors are the preferred choice and the standard request from homeowners in the St Albans, Harpenden, and Radlett belt. Where the posts are shallow, surrounded by services, or structurally marginal, a ram-arm system mounted on the rear face is the pragmatic alternative. A competent installer makes this call at the survey based on the physical evidence rather than defaulting to the costlier option.",
      "The access control layer is often where the retrofit delivers the most practical day-to-day value. A video intercom connected to a smartphone app means you can see and speak to anyone at the gate regardless of where you are. A proximity reader at the post opens the gate automatically as the car approaches. GSM and Wi-Fi modules integrate the system with Google Home, Amazon Alexa, or Apple HomeKit. For security-conscious homeowners in the premium Hertfordshire commuter belt, a closed gate with video recording and auto-close provides a meaningful deterrent layer on top of the basic convenience.",
    ],
    benefits: [
      { title: 'Keeps the Gates You Already Own', desc: 'Where the existing gates are sound and suit the property, a retrofit adds automation without the cost and lead time of new fabrication.' },
      { title: 'Underground Motors Available on Most Sites', desc: 'The strong preference for concealed motors in the premium Hertfordshire market means most retrofit sites are assessed for underground suitability first.' },
      { title: 'Full Smart Home Connectivity', desc: 'Video intercom, proximity fobs, keypad access, and smart home integration are all available as part of any retrofit package.' },
      { title: 'BS EN 12453 Compliance', desc: 'Every retrofit is commissioned to the same safety standard as a brand-new installation. Force testing documented and provided in writing at handover.' },
    ],
    candidateIntro: "An automation retrofit is the right project if:",
    candidates: [
      "Your manual gates are structurally sound and correctly hung on posts with adequate foundations",
      "The gates suit the property and replacing them is not the priority",
      "Daily manual operation has become inconvenient enough to justify the investment",
      "Vehicle security matters and a closed automated gate would add a meaningful deterrent",
      "Smart access management and remote control are on the brief alongside basic electric operation",
    ],
    process: [
      { title: 'Structural Assessment', desc: 'Installer checks gate weight, hinge condition, post alignment, and foundation depth. Any remedial work identified and quoted separately before automation equipment is ordered.' },
      { title: 'Motor and Access Control Specification', desc: 'Motor type and torque confirmed based on the weight assessment. Access control specified to requirements. Everything agreed in writing before any equipment is purchased.' },
      { title: 'Installation', desc: 'Motors fitted, underground chambers excavated where specified, photocells and safety edges positioned, intercom and keypad cabling run and terminated at the control board.' },
      { title: 'Commissioning', desc: 'Safety sensor response tested to BS EN 12453 with documented force measurement. Travel limits calibrated. All access devices programmed and tested. Manual release demonstrated. Declaration of conformity provided.' },
    ],
  },
  'gate-repair': {
    intro: [
      "Gate breakdowns across Hertfordshire follow a consistent pattern of causes. Motor gearboxes wearing from insufficient lubrication or from being undersized for the gate weight at installation. Control boards failing from moisture ingress through a housing seal that has degraded over time. Photocells drifting out of alignment after a vehicle impact or frost heave, triggering false stops when there is no obstruction. Hinges wearing on gates that were never correctly adjusted, producing a leaf that drops incrementally until the motor cannot push it through the cycle.",
      "Most of these faults are resolved in a single visit by an engineer carrying the right diagnostic tools and common replacement parts for the five brands most widely installed across the county: FAAC, BFT, CAME, Nice, and Beninca. The brand of motor matters to repair speed because established manufacturers maintain UK parts supply for at least a decade after a model leaves production. An unbranded or obscure motor creates a different situation: the part may need international sourcing, the gate stays in manual mode for days or weeks, and the repair cost escalates.",
      "Annual servicing prevents the majority of these failures. A service visit catches lubrication breakdown, hinge wear, sensor drift, and battery degradation at the point where each is a minor adjustment rather than a system failure. The cost of annual servicing in Hertfordshire is consistently lower than a single unplanned callout and repair.",
    ],
    benefits: [
      { title: 'Urgent Attendance for Open-Gate Emergencies', desc: 'A gate stuck open that cannot be manually secured is treated as urgent. Engineers aim for same-day attendance in these situations.' },
      { title: 'Transparent Diagnosis Before Repair', desc: 'Every callout begins with a structured diagnostic. You receive a written explanation of the fault and a repair quote before any work is carried out. No surprises on the invoice.' },
      { title: 'First-Visit Resolution on Most Callouts', desc: 'Engineers stock parts for FAAC, BFT, CAME, Nice, and Beninca on the van. The majority of Hertfordshire callouts are completed on the first visit.' },
      { title: 'Scheduled Maintenance Available', desc: 'Annual service contracts automate the yearly service booking and typically include priority callout response. The simplest way to keep the system maintained.' },
    ],
    candidateIntro: "Book a repair or service if:",
    candidates: [
      "The gate is unresponsive to the remote, travelling erratically, or making unusual mechanical noises",
      "The gate is stuck open and you cannot close it using the manual release",
      "The safety sensors trigger without an obstruction, causing repeated stops during the cycle",
      "The system has not been serviced in over 12 months and the motor warranty is still active",
      "A hinge has developed play or the gate leaf is visibly dropping or misaligning with the post",
    ],
    process: [
      { title: 'Callout and Diagnosis', desc: 'Engineer runs a structured diagnostic covering motor, board, sensors, drive mechanism, hinges, and gate structure. Written fault report and repair quote provided before work begins.' },
      { title: 'Same-Visit Repair', desc: 'If the fault can be fixed with parts on the van, the repair is completed immediately and the full system tested before the engineer leaves.' },
      { title: 'Parts Order if Needed', desc: 'Where a component must be sourced, the gate is secured in manual mode and a return visit scheduled. Lead times for main brand parts are typically 1 to 5 working days.' },
      { title: 'Post-Repair Verification', desc: 'Motor limits, safety sensors, battery backup, and all access devices tested and confirmed working. Written service report covering all work completed provided.' },
    ],
  },
};



export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocations, setShowLocations] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content = serviceContent[service.id] || serviceContent['electric-swing'];
  const relatedServices = services.filter(s => s.id !== service.id);

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  const totalCities = Object.values(LOCATIONS).flat().length;

  const combinedFaqs = [
    ...(service.faqs || []),
    ...FAQS_SERVICES,
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${service.slug}/#service`,
    name: service.title,
    serviceType: service.title,
    url: `${siteConfig.url}/services/${service.slug}/`,
    description: service.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Hertfordshire',
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} across Hertfordshire`,
      itemListElement: Object.values(LOCATIONS).flat().slice(0, 15).map(city => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${service.title} in ${city}` },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <div className="container-width pt-6">
          <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: service.title }]} />
        </div>
        <HeritageHeroMoney
          eyebrow={`Gate Type · ${service.title}`}
          headline={<>{service.title.split(' ').slice(0, -1).join(' ')} <em>{service.title.split(' ').slice(-1)}</em></>}
          lede={service.description}
          image={service.image}
          imageLabel={service.title}
          service={service.title}
        />

        <TrustBadges />

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">{service.title}: What You Need to Know</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Benefits of {service.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0 h-fit">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                        <p className="text-sm text-gray-600">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">Find {service.title} Installers Across Hertfordshire</h2>
                    <p className="text-gray-600">
                      Hertfordshire specialists for {service.title.toLowerCase()} covering {totalCities} towns and areas across the county.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowLocations(!showLocations)}
                    className="flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline self-start md:self-auto whitespace-nowrap"
                  >
                    {showLocations ? 'Hide locations' : `Show all ${totalCities}+ locations`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="mb-6 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search your town or area..."
                      value={searchQuery}
                      onChange={(e) => { setSearchQuery(e.target.value); if (!showLocations) setShowLocations(true); }}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${showLocations ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!showLocations}
                >
                  <div className="space-y-8 pb-4">
                    {Object.entries(filteredLocations).map(([region, cities]) => (
                      <div key={region}>
                        <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{region}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                          {cities.map(city => (
                            <Link
                              key={city}
                              href={`/services/${service.slug}/${toSlug(city)}/`}
                              className="group flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg hover:bg-brand-50 transition-all border border-gray-100 hover:border-brand-200"
                            >
                              <MapPin className="w-3 h-3 text-brand-400 flex-shrink-0" />
                              <span className="text-gray-700 group-hover:text-brand-700 text-xs font-medium truncate">{city}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {!showLocations && (
                  <p className="text-sm text-gray-500">
                    Search for your area above or <button onClick={() => setShowLocations(true)} className="text-brand-600 font-medium hover:underline">browse all locations</button> to find {service.title.toLowerCase()} installers near you.
                  </p>
                )}
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Are {service.title} Right for Your Property?</h2>
                <p className="text-gray-600 mb-4">{content.candidateIntro}</p>
                <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  A site survey is always the right starting point. Your installer will assess the driveway, check planning position if relevant, and give you a firm recommendation based on what the site actually allows.
                </p>
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">The Installation Process</h2>
                <div className="space-y-4">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-0.5">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection serviceId={service.id} serviceName={service.title} />

              <div className="mb-14">
                <FAQ faqs={combinedFaqs} title={`${service.title} FAQs`} />
              </div>

              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Say</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get Matched for {service.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm">Free, no-obligation match with vetted installers in your Hertfordshire area.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find an Installer</button>
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: "Surveys available this week" },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: "50+ installs per installer" },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: "4.9 average rating" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-900 text-white p-6 rounded-2xl">
                  <h3 className="font-display font-bold mb-2">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available. Spread the cost over 6 to 36 months.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Other Gate Types</h3>
                  <div className="space-y-2">
                    {relatedServices.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                        <ArrowRight className="w-3 h-3" /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
