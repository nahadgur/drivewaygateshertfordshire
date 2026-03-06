// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Star, Clock, Award, Phone, Zap, TreePine, Cloud } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';

const topAreas = ['St Albans', 'Harpenden', 'Hertford', 'Radlett', 'Berkhamsted', 'Welwyn Garden City', 'Hitchin', 'Watford', 'Bishops Stortford', 'Potters Bar', 'Ware', 'Tring'];

const homepageFaqs = [
  {
    question: 'What is the price range for driveway gate installation in Hertfordshire in 2026',
    answer: 'Hertfordshire pricing reflects the strong commuter market and high property values across much of the county. Manual hardwood gates start at approximately £3,000 installed. Electric swing gates range from £4,000 to £12,000 depending on material and motor type. Electric sliding systems run from £5,000 to £13,000. Bespoke wrought iron with underground motors and full access management, which is a common specification in the St Albans, Harpenden, and Radlett belt, regularly exceeds £12,000. The figures vary significantly between west and north Hertfordshire, so a site survey is the only route to a number you can rely on.',
  },
  {
    question: 'Does the Green Belt designation in Hertfordshire affect whether I can install gates',
    answer: 'Green Belt covers the majority of Hertfordshire, making it one of the most heavily designated counties in England. Standard driveway gates generally remain within permitted development under Green Belt rules, provided they are under 2 metres and open inward. However, specific Article 4 Directions can remove permitted development rights in certain areas. The Chilterns AONB in western Hertfordshire adds a further layer. Conservation areas in St Albans, Hitchin, Hertford, Berkhamsted, and dozens of villages carry their own requirements. Listed buildings need separate consent. With ten district and borough councils, each with their own local plan policies, confirming the planning position before you proceed is essential. Our installers do this at the site survey.',
  },
  {
    question: 'What type of gate works best on the different property styles found across Hertfordshire',
    answer: 'Hertfordshire has genuine variety. The Victorian and Edwardian housing across St Albans, Harpenden, and Hitchin pairs naturally with wrought iron or fabricated steel in heritage profiles. Chilterns AONB properties around Berkhamsted, Tring, and Aldbury suit hardwood in oak or iroko that respects the landscape character. Modern builds in Welwyn Garden City, Hatfield, and the newer parts of Stevenage work well with clean-lined aluminium or anthracite steel. Rural farmhouses and converted barns across the east of the county call for timber or traditional ironwork. Your installer will recommend the right material for your property and its planning context.',
  },
  {
    question: 'How quickly can a gate installation be completed once I confirm the order',
    answer: 'The on-site work takes 2 to 4 days on a typical project. If the gates are off-the-shelf or pre-made, installation can start within a week or two of confirmation. Bespoke fabrication, which is the norm for wrought iron, hardwood, and any custom metal design, adds a workshop lead time of 3 to 6 weeks before the installation date. Your installer provides a clear programme covering manufacturing, delivery, and installation at the quotation stage so you know the full timeline before committing.',
  },
  {
    question: 'Is relay vehicle theft from driveways a real issue in Hertfordshire',
    answer: 'In the premium commuter belt around St Albans, Harpenden, Radlett, and Bushey, it is a documented concern. Relay attacks exploit keyless vehicle entry by amplifying the fob signal from inside the house to start the car on the driveway. A closed automated gate puts a physical barrier between the vehicle and the road, adding time and risk to the theft attempt. Combined with video intercom recording every approach and auto-close removing the possibility of the gate being left open accidentally, automated gates are one of the most practical deterrent measures available to Hertfordshire homeowners with high-value vehicles.',
  },
  {
    question: 'Can I add automation to gates I already have without replacing them',
    answer: 'Almost always, provided the gates are structurally sound and the posts have decent foundations. Gate automation retrofits are one of the most requested jobs across Hertfordshire, especially in the established residential areas where quality wrought iron or hardwood gates were installed years ago without electric operation. The retrofit adds the motor and access control without disturbing the existing gates. Typical cost is £1,400 to £4,000 depending on motor type and what access features you want. Underground motors are achievable on most retrofit sites where the posts can accommodate the chamber.',
  },
  {
    question: 'How exactly does the free installer matching process work',
    answer: 'You provide your Hertfordshire postcode, the gate type you have in mind, and a rough budget. We identify up to three specialist installers from our vetted network whose experience matches your project type and location. Each one contacts you directly to arrange a site visit at a time that works for you. After the survey, each provides a detailed written quote. You compare them side by side and decide whether to proceed, with no time pressure and no obligation. The service is free throughout because we receive a referral contribution from the installer after a completed project.',
  },
  {
    question: 'What separates a good gate installer from an average one in Hertfordshire',
    answer: 'Three things. First, specialisation. A firm that installs gates as its primary trade every week will produce better foundations, better motor specification, and better safety commissioning than a general builder who fits a gate once a quarter. Second, local knowledge. An installer who understands Hertfordshire will know the Chilterns AONB planning sensitivities, the Green Belt rules, the clay soil behaviour that affects foundation depth, and the ten district council planning frameworks before they arrive. Third, accountability. Written warranties, documented BS EN 12453 commissioning, and a business that will still exist when you need a service in year three.',
  },
  {
    question: 'What safety systems are required on electric gates in the UK',
    answer: 'BS EN 12453 mandates photocell beams spanning the full gate opening, pressure-sensitive safety edges on the leading face of each gate leaf, auto-reverse that stops and reverses the gate when it meets resistance, and force limits measured with calibrated equipment at commissioning. Every automated gate in the UK must meet this standard before handover. A written commissioning record documenting the safety test results should be provided on the day. All installers in our Hertfordshire network commission to BS EN 12453 as a non-negotiable standard.',
  },
  {
    question: 'What ongoing maintenance do automated driveway gates require',
    answer: 'An annual professional service is the minimum. This covers motor lubrication, gearbox and drive mechanism inspection, hinge assessment, safety sensor recalibration and testing, battery backup load test, and a structural check of the gate and posts. Hardwood gates also need re-oiling every 18 to 24 months. Powder-coated metal gates need nothing beyond an occasional wash. The annual service costs £130 to £220 in Hertfordshire and is consistently cheaper than waiting for a failure and paying for an emergency callout plus repair.',
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HomeAndConstructionBusiness',
          '@id': siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          logo: `${siteConfig.url}/android-chrome-512x512.png`,
          image: `${siteConfig.url}/android-chrome-512x512.png`,
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Hertfordshire',
            containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Driveway Gate Installation Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electric Sliding Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electric Swing Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wooden Driveway Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Driveway Gate Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gate Automation Retrofit' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gate Repair and Maintenance' } },
            ],
          },
          priceRange: '\u00a3\u00a3',
          currenciesAccepted: 'GBP',
          paymentAccepted: 'Cash, Credit Card, Bank Transfer, Finance',
          openingHours: 'Mo-Sa 08:00-18:00',
        }) }}
      />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Driveway Gates Hertfordshire: Vetted Specialists, Honest Quotes"
          subtitle="From wrought iron in the St Albans conservation area to hardwood in the Chilterns AONB. We connect Hertfordshire homeowners with gate installers who know the county. Free surveys, no obligation."
          image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* Problem framing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Hertfordshire Is Almost Entirely Green Belt. Your Installer Needs to Know That.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    More of Hertfordshire is covered by Green Belt than almost any other English county. Add the Chilterns AONB across the western portion, conservation areas in every market town from St Albans to Hitchin, and a substantial stock of listed buildings in the older settlements, and you have a planning environment where a gate project is rarely just an engineering question. The installer who turns up and starts digging without checking the designation at postcode level is the installer who creates problems.
                  </p>
                  <p>
                    The specification challenges go beyond planning. Hertfordshire sits on a patchwork of clay and chalk subsoils that behave differently under post foundations. The Chiltern escarpment creates steep driveways in the west. Period properties across the commuter towns demand materials and designs that suit the architecture, not generic gates that could be anywhere. And the high-value residential belt along the M1 and A1 corridors expects a standard of automation, access control, and finish that general building firms are not equipped to deliver.
                  </p>
                  <p>
                    Every installer in our network has gate installation as their core trade, a verified record of at least 50 completed residential projects, and the Hertfordshire-specific knowledge to handle the county. We match you with up to three who cover your area and have the experience your project needs. Site surveys are free, quotes are free, and you decide on your own terms.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Your Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png" alt="Wrought iron entrance gates with stone pillars and lanterns on a Hertfordshire estate property" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png" alt="Aluminium sliding gate on a contemporary Hertfordshire new-build property" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wooden-painted-cream-hertfordshire-countryside.png" alt="Hardwood driveway gate on a Hertfordshire countryside property" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Property types - unique to Herts */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Different Properties, Different Gate Requirements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Hertfordshire runs from Chilterns countryside to London commuter belt. The right gate for each setting depends on the building, the boundary, and the planning designation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'St Albans and Harpenden Conservation Areas',
                  desc: 'Victorian and Edwardian houses with established streetscapes. Wrought iron or fabricated steel matching existing boundary ironwork, underground motors concealed below the post, and designs that planning officers accept without negotiation.',
                  link: '/services/metal-driveway-gates/',
                },
                {
                  icon: <TreePine className="w-6 h-6" />,
                  title: 'Chilterns AONB Cottages and Farmhouses',
                  desc: 'Tring, Berkhamsted, Aldbury, and the surrounding villages. European oak or iroko in simple profiles that respect the landscape. Close-boarded for privacy, open-framed where the boundary character calls for it.',
                  link: '/services/wooden-driveway-gates/',
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: 'Radlett, Bushey, and the Premium South',
                  desc: 'High-specification residential properties close to the London border. Bespoke wrought iron, underground motors, HD video intercom with recording, proximity fob access. The full entrance treatment.',
                  link: '/services/automated-gate-systems/',
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Welwyn, Hatfield, and Modern Builds',
                  desc: 'Garden city architecture and contemporary estates. Aluminium sliding or powder-coated steel in anthracite. Practical, automated, low-maintenance, and suited to the clean lines of newer construction.',
                  link: '/services/electric-sliding-gates/',
                },
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: 'Rural East Hertfordshire',
                  desc: 'Farmhouses, converted barns, and period properties across Hertford, Ware, Bishops Stortford, and Much Hadham. Bespoke hardwood and traditional ironwork, specified for clay soil foundations and exposed positions.',
                  link: '/services/wooden-driveway-gates/',
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'North Herts Market Towns',
                  desc: 'Hitchin, Letchworth, Baldock, and Royston. Period town houses and village properties with conservation area and Green Belt considerations. Material and design chosen to sit within the established boundary character.',
                  link: '/services/electric-swing-gates/',
                },
              ].map((item, i) => (
                <Link key={i} href={item.link} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gate types */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Sliding, Swing, Hardwood, Metal, Automation, Repair</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Six service categories. Each covered by installers who do that type of work as their primary trade. Pick the one that matches your project.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={`${service.title} installed on a Hertfordshire residential property`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      View Hertfordshire installers <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">From Enquiry to Quote in Three Simple Steps</h2>
              <p className="text-gray-600 max-w-xl mx-auto">No trawling through directories. No cold calls. No one trying to close you on the first visit. Just a sensible process that puts you in control.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Share Your Requirements',
                  desc: 'Your Hertfordshire postcode, the type of gate, and a ballpark budget. Takes under two minutes. We use this to identify which specialists in our network are the right match for your site and specification.',
                },
                {
                  step: '2',
                  title: 'Receive Your Matched Installers',
                  desc: 'Up to three vetted gate specialists get in touch to arrange free site visits. They assess the driveway, confirm any planning considerations, and each provide a fully itemised written quote.',
                },
                {
                  step: '3',
                  title: 'Compare Quotes at Your Own Pace',
                  desc: 'Three independent quotes, each based on an actual site survey. Compare them when you are ready. Proceed with one, or none. No time pressure, no follow-up sales calls from us.',
                },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-5">{item.step}</div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">
                Start Your Free Enquiry
              </button>
              <p className="text-gray-500 text-sm mt-3">Completely free. No strings. No obligation.</p>
            </div>
          </div>
        </section>

        {/* Regional context */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Chilterns AONB. Ten Councils. Green Belt Everywhere. That Takes Local Knowledge.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    The Chilterns AONB covers the western edge of the county from Tring and Berkhamsted through to parts of the St Albans district. Green Belt applies to the overwhelming majority of Hertfordshire outside the main urban areas. The M25, M1, and A1(M) corridors all pass through heavily designated land. Conservation areas exist in St Albans, Hertford, Hitchin, Ware, Berkhamsted, and in villages across every district.
                  </p>
                  <p>
                    Ten separate district and borough councils administer planning across Hertfordshire, each with its own local plan and supplementary guidance on boundary treatments. An installer who works regularly in Hertfordshire will know which council covers a given postcode, what its current stance on gates in the Green Belt is, and whether a pre-application enquiry is worth the effort or not.
                  </p>
                  <p>
                    The physical landscape creates its own installation demands. The chalk hills of the Chilterns produce driveways with gradients that need articulated hinges or cantilever sliding systems. Central and eastern Hertfordshire sits on heavy clay that swells in winter and shrinks in dry summers, directly affecting foundation specification. Our installers work across these conditions and adjust their approach accordingly.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'West Hertfordshire', towns: 'St Albans, Harpenden, Berkhamsted, Tring, Hemel Hempstead', detail: 'Chilterns AONB, conservation areas, premium commuter market, wrought iron and hardwood dominant' },
                  { label: 'South Hertfordshire', towns: 'Radlett, Bushey, Watford, Potters Bar, Borehamwood', detail: 'London border premium belt, high-specification automation, Green Belt sensitivity, wrought iron and contemporary aluminium' },
                  { label: 'Central Hertfordshire', towns: 'Welwyn Garden City, Hatfield, Brookmans Park, Knebworth', detail: 'Garden city architecture, modern builds alongside period villages, mixed specification range' },
                  { label: 'East Hertfordshire', towns: 'Hertford, Ware, Bishops Stortford, Much Hadham, Sawbridgeworth', detail: 'Historic market towns, rural farmhouses, converted barns, bespoke hardwood and traditional metalwork' },
                  { label: 'North Hertfordshire', towns: 'Hitchin, Letchworth, Stevenage, Baldock, Royston', detail: 'Market town conservation areas, Green Belt villages, period and modern mix, practical and heritage specifications' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}: {item.towns}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Find a Gate Installer in Your Part of Hertfordshire</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">75 towns covered from Tring to Bishops Stortford, Royston to Bushey. Select your area below.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {topAreas.map(area => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="group flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-700">Gates in {area}</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/location/" className="btn-secondary">
                Browse All 75 Hertfordshire Locations
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Hertfordshire Gate Installation Prices in 2026</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Based on completed Hertfordshire projects, not national averages. Every figure includes full installation, motor, safety commissioning, and handover.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTiers.map(tier => (
                <div key={tier.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-2">{tier.treatment}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-1">
                    &pound;{tier.priceFrom.toLocaleString()} <span className="text-base text-gray-400 font-normal">to</span> &pound;{tier.priceTo.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{tier.alignerSets} &middot; {tier.typicalDuration}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-900 rounded-2xl p-6 md:p-10 text-white text-center">
              <h3 className="text-2xl font-display font-bold mb-2">0% Interest Finance From &pound;99 Per Month</h3>
              <p className="text-brand-200 text-sm mb-6 max-w-xl mx-auto">Most Hertfordshire installers in our network offer interest-free payment plans. Spread the cost over 6 to 36 months. Subject to status and approval.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Availability
              </button>
            </div>
          </div>
        </section>

        {/* Trust points */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Use a Matching Service Instead of Finding an Installer Yourself</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Because the vetting takes longer than the enquiry. We have already done it.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: '50+ Completed Projects',
                  desc: 'Every installer in the Hertfordshire network has a verified history of at least 50 residential gate installations before they see a single referral from us.',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Warranties That Mean Something',
                  desc: 'Separate written warranties on the gate and the automation. Not a vague promise. A document that covers you if the motor fails in year three or the finish deteriorates prematurely.',
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Matched to Your Area and Project',
                  desc: 'A Chilterns AONB hardwood project and a Welwyn Garden City aluminium sliding gate need different installers. We match on experience and location, not just who is free this week.',
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Established Businesses Only',
                  desc: 'We refer firms with premises, employees, and a track record. Not a sole trader who might not answer the phone when you need a warranty repair in two years.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Driveway Gates Hertfordshire: Common Questions Answered" />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-brand-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Find Your Hertfordshire Gate Installer?</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">Two minutes to submit your enquiry. Up to three vetted specialists matched to your project. Free site surveys, written quotes, and zero obligation at any point.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">
              Get Free Quotes Now
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
