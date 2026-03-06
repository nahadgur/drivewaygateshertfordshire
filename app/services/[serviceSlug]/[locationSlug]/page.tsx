// app/services/[serviceSlug]/[locationSlug]/page.tsx
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';


const serviceLocationContent: Record<string, {
  intro: (city: string) => string[];
  steps: (city: string) => string[];
  whyPoints: (city: string) => string[];
}> = {
  'electric-sliding': {
    intro: (city) => [
      `Sliding gate projects in ${city} typically start with a physical constraint that rules out swing gates. A short approach that does not allow swing leaves to clear. A gradient that would cause swing gates to scrape or jam. An opening wide enough that swing leaf weight would overload the hinge posts. A sliding gate resolves all of these by travelling along the boundary rather than sweeping through an arc.`,
      `Ground-track and cantilever are the two configurations installed across Hertfordshire. Ground-track is the standard on level or near-level sites. Cantilever systems suspend the gate above the surface and are specified where gradient, surface finish, or ground conditions make a track impractical. Your installer confirms which suits the ${city} site at the survey.`,
    ],
    steps: (city) => [
      `Submit your ${city} postcode, approximate opening width, and available boundary space. We identify up to three sliding gate specialists covering ${city}.`,
      `Each installer arranges a free site visit to measure the opening, assess run-back, check gradient, and confirm the right track configuration.`,
      `You receive a written quote covering gate fabrication, track or cantilever foundation, motor, photocells, and any access control.`,
      `If bespoke gates are being fabricated, workshop lead time is typically 2 to 4 weeks from confirmed order.`,
      `On installation day, the track foundation is excavated and poured, and conduit is laid for motor and intercom cabling.`,
      `Track is set and levelled, gate hung and adjusted, motor and rack fitted, and photocells wired to BS EN 12453.`,
      `System commissioned. Travel limits calibrated, remotes programmed, app access configured, manual release demonstrated.`,
    ],
    whyPoints: (city) => [
      `Sliding gate specialists covering ${city} have hands-on experience with the terrain and property types across this part of Hertfordshire.`,
      `Every installation commissioned to BS EN 12453 with safety testing documented at handover.`,
      `Free site survey and itemised written quote from each ${city} installer before any commitment.`,
      `FAAC, BFT, CAME, and Nice motor systems stocked with established parts networks for long-term maintenance.`,
    ],
  },
  'electric-swing': {
    intro: (city) => [
      `Swing gates are the most widely installed format on detached properties in ${city}. Paired leaves opening from a central point deliver a visual presence that other formats do not match. The motor technology is mature, the range of materials is broad, and the installer population capable of delivering reliable results is substantial.`,
      `Motor type defines the entrance aesthetic. Underground motors, concealed below the post, are the standard specification on premium ${city} properties. Ram-arm motors mount on the rear face and are the practical choice on retrofits where post foundations prevent excavation. The installer assesses which fits your post condition and gate weight at the survey.`,
    ],
    steps: (city) => [
      `Provide your ${city} details with gate type, opening width, and budget. We match you with up to three swing gate specialists.`,
      `Each installer visits, measures the opening, walks the full swing arc, checks pillar condition, and recommends motor type.`,
      `Written quotes cover gate fabrication, post foundations, motor, safety sensors, and access control.`,
      `Where new gates are being fabricated, allow 2 to 5 weeks for manufacture.`,
      `On site, post foundations are set, underground chambers excavated where specified, and conduit installed.`,
      `Gates hung and aligned, motors fitted, photocells positioned for full coverage, all wiring completed.`,
      `System programmed and tested to BS EN 12453. Limits set, devices paired, manual release demonstrated, commissioning record provided.`,
    ],
    whyPoints: (city) => [
      `Swing gate installers covering ${city} understand the property types, driveway geometries, and planning context across this part of Hertfordshire.`,
      `Underground and surface motor options with honest guidance on which suits your situation.`,
      `BS EN 12453 commissioning documented on every installation.`,
      `Separate written warranties for gate and automation from every ${city} installer in our network.`,
    ],
  },
  'wooden-gates': {
    intro: (city) => [
      `Hardwood gates are a natural choice for many ${city} properties. The Chilterns AONB, the Green Belt villages, the conservation areas, and the stock of period houses and converted agricultural buildings across Hertfordshire all create contexts where timber is the material that sits most naturally. Where planning officers are involved, hardwood is typically the specification that generates least resistance.`,
      `Fabrication is bespoke for the majority of timber gate projects in ${city}. Iroko is the default for most installations. European oak is chosen where the grain character is the design feature. Accoya, with its 50-year guarantee, is the specification where low maintenance is the firm priority.`,
    ],
    steps: (city) => [
      `Submit your enquiry and we match you with hardwood gate specialists covering ${city} who have bespoke timber experience in this part of Hertfordshire.`,
      `Your installer visits, discusses the design brief, shows timber samples, confirms automation needs, and measures the entrance.`,
      `Fabrication drawings produced for approval. No timber ordered until the design is confirmed.`,
      `Gates made in the workshop. Allow 3 to 5 weeks from confirmed order.`,
      `Gates hung on galvanised or stainless ironmongery and the initial treatment coat applied on site.`,
      `Automation fitted and commissioned to BS EN 12453 if included.`,
      `Written maintenance schedule for the specified timber species handed over at completion.`,
    ],
    whyPoints: (city) => [
      `Timber specialists covering ${city} understand the AONB, Green Belt, and conservation area planning context and advise on the right specification.`,
      `Iroko, European oak, and Accoya all available with clear guidance on which suits your needs.`,
      `Free site survey and approval drawings before any ${city} installer begins work.`,
      `FSC-certified timber available from every fabricator in our network on request.`,
    ],
  },
  'metal-gates': {
    intro: (city) => [
      `Metal gate work in ${city} ranges from bespoke wrought iron entrance treatments on established properties to contemporary aluminium sliding gates on modern builds. The specification decision that separates lasting installations from those needing attention within five years is the surface treatment: hot-dip galvanising before powder coating on every steel and iron gate, without exception.`,
      `For ${city} properties on heavy clay soils, post foundation specification takes on particular importance. Clay swells with winter moisture and shrinks in dry summers, which can move posts and misalign gates. Installers in our ${city} network specify foundation depth and reinforcement for the actual soil type at your property.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry and we match you with metal gate fabricators covering your area and material preference.`,
      `Your installer visits, reviews examples, discusses design, material, colour, and automation, and measures the opening.`,
      `CAD drawings produced for approval. 3D renders available on complex projects.`,
      `Gate fabricated, shot-blasted, hot-dip galvanised, and powder-coated. Allow 3 to 6 weeks from drawing sign-off.`,
      `Gate hung on new or existing posts, with foundations assessed and upgraded where needed.`,
      `Automation and access control installed, wired, and fully tested.`,
      `Written handover covers gate warranty, automation warranty, and finish maintenance guidance.`,
    ],
    whyPoints: (city) => [
      `Metal gate specialists covering ${city} specify hot-dip galvanising before powder coating as standard on all steel and iron.`,
      `CAD drawings approved before fabrication starts so you see exactly what is being made.`,
      `Free site survey and design consultation with each ${city} specialist, no commitment until drawings and quote are approved.`,
      `Separate gate and automation warranties provided in writing by every ${city} installer.`,
    ],
  },
  'automated-systems': {
    intro: (city) => [
      `Automation retrofits are among the highest-demand projects for installers covering ${city}. The brief is familiar: manual gates that are sound and suit the property, but the daily inconvenience of manual operation has become unacceptable. The retrofit adds motor and access control without replacing the gates.`,
      `Access control often delivers the most practical value. Video intercom on a smartphone lets you manage the entrance from anywhere. Proximity readers open the gate as the car approaches. For ${city} homeowners with vehicle security concerns, a closed automated gate with recording and auto-close provides a real deterrent layer.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry. We match you with automation engineers who carry out retrofits regularly and stock the main motor brands.`,
      `Your installer visits to assess gate weight, hinge condition, post alignment, and foundation depth, then recommends motor type.`,
      `Motor and access control agreed in writing. Any structural work quoted and confirmed before automation equipment is ordered.`,
      `Motors fitted, underground chambers excavated where specified, photocells and safety edges positioned, access control cabling completed.`,
      `System commissioned to BS EN 12453 with force measurement, all access devices programmed and tested.`,
      `Handover includes manual release demo, remote programming, app setup, and written declaration of conformity.`,
    ],
    whyPoints: (city) => [
      `Automation engineers covering ${city} complete a structural assessment before specifying any motor.`,
      `FAAC, BFT, CAME, Nice, and Beninca available with established Hertfordshire parts support.`,
      `BS EN 12453 compliance documented at handover on every ${city} project.`,
      `Video intercom, proximity readers, keypads, and smart home integration available on any ${city} retrofit.`,
    ],
  },
  'gate-repair': {
    intro: (city) => [
      `Repair callouts in ${city} follow predictable patterns. Motor wear from poor lubrication. Board failure from moisture ingress. Photocell drift from frost or impact causing false stops. Hinge wear producing a dropping leaf the motor struggles to move. Most resolve in one visit when the engineer has the right parts.`,
      `Motor brand matters for repair speed. FAAC, BFT, CAME, Nice, and Beninca all maintain UK parts supply for at least a decade after production ends. An engineer covering ${city} who stocks these brands resolves most faults first-visit. An obscure motor creates delays and higher costs. Annual servicing catches developing faults before they cause failures.`,
    ],
    steps: (city) => [
      `Submit your ${city} repair enquiry. We connect you with gate engineers who stock parts for FAAC, BFT, CAME, Nice, and Beninca.`,
      `The engineer runs a structured diagnostic covering motor, board, sensors, drive, hinges, and gate structure.`,
      `Written fault explanation and repair quote provided before any work begins.`,
      `If the fault can be fixed from van stock, the repair is completed immediately and the system tested.`,
      `Where a part must be ordered, the gate is secured manually and a return visit scheduled. Lead times typically 1 to 5 days.`,
      `After repair, all systems tested: motor limits, sensors, battery, and access devices.`,
      `Written service report covering work completed, parts used, and any future recommendations provided.`,
    ],
    whyPoints: (city) => [
      `Engineers covering ${city} target 24 to 48 hour attendance, same-day for gates stuck open.`,
      `Written diagnosis and quote before any work starts on every ${city} callout.`,
      `Van stock for FAAC, BFT, CAME, Nice, and Beninca. Majority of ${city} repairs completed first-visit.`,
      `Annual service contracts available for scheduled maintenance.`,
    ],
  },
};


export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();
  const content = serviceLocationContent[service.id] || serviceLocationContent['electric-swing'];
  const intro = content.intro(cityName);
  const steps = content.steps(cityName);
  const whyPoints = content.whyPoints(cityName);

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Minimum 50 Residential Installs', desc: `Every ${cityName} installer in our network specialises in gate installation and has a verified project history before receiving a single referral from us.` },
    { icon: <Clock className="w-6 h-6" />, title: 'Site Survey Within the Week', desc: `Most installers covering ${cityName} can offer a free site survey slot within 7 days, with evening and Saturday appointments available.` },
    { icon: <Shield className="w-6 h-6" />, title: 'Insured and Warranted', desc: `Public liability cover and written warranties on both the gate and the automation are required from every installer before we refer any ${cityName} enquiries.` },
    { icon: <Users className="w-6 h-6" />, title: 'Matched to Your Gate Type', desc: `We connect you with ${cityName} installers who have specific experience with ${service.title.toLowerCase()}, not a general list of whoever is available.` },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${service.title} in ${cityName}`,
    url: `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`,
    description: `Find vetted ${service.title.toLowerCase()} specialists in ${cityName}, Hertfordshire. Free site survey, written quotes, no obligation.`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Hertfordshire' },
    },
    serviceType: service.title,
    priceRange: '\u00a3\u00a3',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Gate Types', href: '/services/' },
              { label: service.title, href: `/services/${service.slug}/` },
              { label: cityName }
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Vetted Installers in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title} in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Hertfordshire {service.title.toLowerCase()} specialists covering {cityName}. Site survey at no charge, written quotes, no obligation to proceed.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    `${service.title} specialists in ${cityName}, verified and active in Hertfordshire`,
                    'Up to three independent quotes, each with a free site survey',
                    'Insured, warranted, and commissioned to BS EN 12453 as standard',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <span>Highly rated by Hertfordshire homeowners</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  {service.title} in {cityName}: What to Expect
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">How {service.title} Installation Works in {cityName}</h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <p className="text-gray-700 font-medium pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              <section className="mb-12">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Get {service.title} in {cityName} Through Us?</h3>
                <div className="space-y-3">
                  {whyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {service.faqs.length > 0 && (
                <div className="mb-12">
                  <FAQ faqs={service.faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              <section className="mt-12 mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Are Saying</h2>
                <Testimonials limit={2} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Other Gate Types in {cityName}</h3>
                  <ul className="space-y-2 mb-8">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}/${params.locationSlug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{service.title} Elsewhere in Hertfordshire</h3>
                  <ul className="space-y-2">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => {
                      const slug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      return (
                        <li key={city}>
                          <Link href={`/services/${service.slug}/${slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                            {service.title} in {city}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available at most {cityName} installers. Spread the cost of {service.title.toLowerCase()} over 6 to 36 months with nothing to pay upfront.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Get {service.title} Quotes in {cityName}</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">Submit your enquiry in under two minutes. We will match you with up to three vetted {cityName} installers for free site surveys, written quotes, and no obligation at any stage.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
