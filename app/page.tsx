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

const topAreas = ['St Albans', 'Harpenden', 'Hertford', 'Welwyn Garden City', 'Radlett', 'Watford', 'Hitchin', 'Berkhamsted', 'Bishops Stortford', 'Potters Bar', 'Ware', 'Tring'];

const homepageFaqs = [
  {
    question: 'What do driveway gates cost to install in Hertfordshire in 2026?',
    answer: 'The Hertfordshire market ranges from around \u00a32,800 for a manual hardwood swing gate up to \u00a312,500 or more for a fully automated sliding or wrought iron system. Electric swing gates typically fall between \u00a33,800 and \u00a311,500. The West Hertfordshire commuter corridor around St Albans and Harpenden sits at the higher end of these ranges, while North Hertfordshire and rural East Hertfordshire are closer to the national average. Exposed rural Hertfordshire properties may pay a premium for weather-resistant surface treatments. The only way to get a figure you can rely on is a site survey, which every installer in our network provides free of charge.',
  },
  {
    question: 'Which Hertfordshire properties need planning permission for gates?',
    answer: 'Standard residential gates under 2 metres that open inward are covered by permitted development in most cases. The limit drops to 1 metre if the gate fronts a classified road. Where it gets more complex in Hertfordshire is the overlap of designations: the Chilterns AONB runs from the Buckinghamshire border to Hitchin, the Green Belt covers the southern Weald, Green Belt applies along the M25 corridor, and conservation areas exist in Hertford, Ware, Tring, Sandwich, and dozens of villages. Listed buildings need separate consent regardless. Hertfordshire has ten district councils, each with its own local plan policies on boundary treatments. Our installers know which authority covers your postcode and what the position is likely to be.',
  },
  {
    question: 'Do gates near the more exposed parts of Hertfordshire need a different specification?',
    answer: 'Yes. Properties in the more exposed parts of Hertfordshire face harsher weather conditions. Heavy clay soils, persistent dampness, and greater wind exposure in open countryside can affect both foundation stability and finish longevity. The correct specification for exposed Hertfordshire sites is hot-dip galvanising with a quality polyester powder coat on any steel, and hardwood species such as iroko or Accoya rather than treated softwood. Foundation depth should account for the clay soils common across much of the county, which move seasonally with moisture changes. An installer experienced in rural Hertfordshire work will specify appropriately for your site conditions at the survey.',
  },
  {
    question: 'How long does a typical Hertfordshire gate installation take from start to finish?',
    answer: 'The on-site work takes 2 to 4 days for a standard residential project. Groundwork goes in first and needs curing time before the gate is hung. The gate, motor, safety sensors, and access control follow. If your gates are being fabricated to a bespoke design, which is standard for wrought iron and hardwood in Hertfordshire, the workshop lead time adds 3 to 6 weeks before the installation date. Your installer will confirm a full programme at the survey stage, covering both the manufacturing and installation timeline.',
  },
  {
    question: 'What type of gate suits a period Hertfordshire property like an period farmhouse or barn conversion?',
    answer: 'Hardwood is almost always the right answer for period farmhouses, barn conversions, timber-frame houses, and timber-frame farmhouses across the Hertfordshire Weald. European oak left to weather to silver grey sits naturally alongside the aged timber and local flint and brick found on these buildings. Iroko is a more cost-effective alternative with similar durability. In conservation areas and both AONBs, timber is often the material that raises least resistance from the planning authority. Wrought iron is the appropriate alternative for larger period properties where the entrance scale justifies a more formal treatment. Your installer will advise on which material the local planning context is likely to favour.',
  },
  {
    question: 'Is vehicle theft from driveways a real concern in Hertfordshire?',
    answer: 'In parts of the county, yes. The St Albans and Harpenden corridor has a concentration of high-value vehicles on residential driveways, and relay theft, where criminals amplify a keyless fob signal to unlock and start a vehicle without the key, is a documented problem. A closed automated gate between the road and the vehicle forces a second obstacle into the theft chain. Combined with video intercom that records gate activity and auto-close that removes the risk of leaving the gate open by mistake, automated gates are one of the most effective physical deterrents available. Some vehicle insurers offer reduced premiums for properties with electric gates.',
  },
  {
    question: 'Can my existing manual gates be automated without replacing them?',
    answer: 'In most cases, yes. If the gates are structurally sound, correctly hung, and the posts sit in adequate foundations, a motor system can be added without disturbing the gates themselves. This is one of the most common projects across Hertfordshire, particularly in West Hertfordshire where existing wrought iron gates are often in excellent condition but manually operated. The typical cost is \u00a31,400 to \u00a33,800 depending on gate weight, motor type, and what access control you add. Underground motors are achievable on most retrofit sites where the post condition allows.',
  },
  {
    question: 'What does the free matching service actually involve?',
    answer: 'You tell us your Hertfordshire postcode, the type of gate you want, and a rough budget. We identify up to three specialist gate installers from our vetted network whose experience matches your project and location. Each one contacts you directly to arrange a free site survey at a time that works for you. After the surveys you receive a detailed written quote from each installer. You compare them at your own pace and decide whether to proceed. There is no fee at any stage and no obligation. We receive a referral contribution from the installer after a completed project, which does not affect the price you pay.',
  },
  {
    question: 'How do I know the installers in your Hertfordshire network are any good?',
    answer: 'Every installer is assessed before they receive a single referral. We require evidence of at least 50 completed residential gate installations, current public liability insurance, and a standard practice of providing separate written warranties for the gate structure and the automation system. We monitor customer feedback on an ongoing basis. Installers whose quality or responsiveness drops below our threshold are removed. Hertfordshire-specific knowledge matters too: we only refer firms that understand the county, including both AONBs, the conservation area landscape, the Green Belt rules, and the ten district council planning frameworks.',
  },
  {
    question: 'What safety standards apply to electric gates in the UK?',
    answer: 'BS EN 12453 is the safety standard that every automated gate installation in the UK must meet. It requires photocell beams across the full gate opening, safety edges on the leading face that stop and reverse the gate on contact, force limits tested with calibrated equipment, and auto-reverse that triggers if the motor detects resistance. A competent installer commissions and tests every safety system before handover and provides a written commissioning record documenting the results. Every installer in our Hertfordshire network commissions to this standard on every project without exception.',
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
          '@type': 'LocalBusiness',
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
          title="Driveway Gates Hertfordshire: Vetted Installers, Free Site Surveys"
          subtitle="Connecting Hertfordshire homeowners with specialist gate installers across the county. From St Albans to Hertford, Watford to Hitchin. Three free quotes, no obligation, no cost to you."
          image="/images/gates/gate-wrought-iron-open-manor-brick-pillars.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* How It Works - moved up for conversion */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Three Steps to Your Hertfordshire Gate Installer</h2>
              <p className="text-gray-600 max-w-xl mx-auto">No searching, no cold calls, no sales pressure. Tell us what you need and we handle the rest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Describe Your Project',
                  desc: 'Your Hertfordshire postcode, the type of gate, and a rough budget. Takes under two minutes. We use this to identify the right specialists for your site, your property type, and your specification.',
                },
                {
                  step: '2',
                  title: 'Meet Your Matched Installers',
                  desc: 'Up to three vetted gate specialists contact you to arrange free site visits. They assess the driveway, check planning if relevant, and provide detailed written quotes with no obligation attached.',
                },
                {
                  step: '3',
                  title: 'Compare and Choose',
                  desc: 'Three independent quotes, each based on a physical survey of your property. Compare on your terms. Proceed when you are ready, or not at all. There is no fee to you at any stage of this process.',
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
              <p className="text-gray-500 text-sm mt-3">Free for homeowners. No fees. No obligation.</p>
            </div>
          </div>
        </section>

        {/* Why Specialist Matters */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Most Hertfordshire Gate Problems Start With the Wrong Installer
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    A general builder who occasionally installs a gate is not the same thing as a gate specialist. The difference shows in the foundation depth, the motor sizing, the surface treatment specification, and the safety commissioning. It shows in whether the installer knows that a property in the Chilterns AONB faces different planning rules from one in Watford, or that a steel gate half a mile from the Bishops Stortford seafront needs weather-resistant powder coat rather than a standard formulation.
                  </p>
                  <p>
                    Hertfordshire is a county where these details matter more than most. The terrain varies from the chalk ridge of the Chiltern Hills to the clay hills of the Hertfordshire countryside. The planning landscape involves two Areas of Outstanding Natural Beauty, Green Belt along the M25 corridor, conservation areas in every historic town, and ten separate district councils. The property types run from medieval timber-frame houses in Hertford to modern estates in Watford. Getting the specification right for each context is not something a generalist does well.
                  </p>
                  <p>
                    Every installer in our network does gate work as their primary trade, has completed at least 50 residential installations, carries full public liability insurance, and provides written warranties on both the gate and the automation. We match you with up to three who cover your area and have the right experience for your project. You compare their quotes and decide.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Your Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wrought-iron-open-stone-pillars-lanterns-estate.png" alt="Wrought iron driveway gates with stone pillars and lanterns on a Hertfordshire estate" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-aluminium-sliding-horizontal-modern-new-build.png" alt="Contemporary aluminium sliding gate on a modern Hertfordshire property" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wooden-painted-cream-hertfordshire-countryside.png" alt="Painted hardwood gate on a rural Hertfordshire driveway surrounded by countryside" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Gate Types */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Electric Gates, Wooden Gates, Metal Gates: Hertfordshire Specialists for Each</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Whether you need a <Link href="/services/electric-sliding-gates/" className="text-brand-600 hover:underline">sliding gate</Link> for a steep Chiltern Hills driveway or a <Link href="/services/wooden-driveway-gates/" className="text-brand-600 hover:underline">hardwood gate</Link> for a rural Hertfordshire farmhouse, we have the right specialist.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={`${service.title} installation in Hertfordshire`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      Find Hertfordshire installers <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hertfordshire Property Types - unique section */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Gates for the Garden of England: Every Hertfordshire Property Type</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Hertfordshire&apos;s residential stock is unusually varied. The right gate specification depends as much on the building&apos;s character as on your personal preference.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <TreePine className="w-6 h-6" />,
                  title: 'Period Farmhouses and Barn Conversions',
                  desc: 'The rural Hertfordshire landscape between Paddock Wood and Tring is dotted with converted period farmhouses and agricultural barns. European oak or iroko, close-boarded or open-framed to suit the boundary, is the instinctive specification. Our Green Belt installers know what works.',
                  link: '/services/wooden-driveway-gates/',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Victorian and Edwardian Commuter Belt',
                  desc: 'The period housing stock across St Albans, Harpenden, and Radlett calls for gates with heritage character. Wrought iron or fabricated steel with traditional profiles, on brick piers with underground motors concealed below.',
                  link: '/services/metal-driveway-gates/',
                },
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: 'Rural and Exposed Hertfordshire Properties',
                  desc: 'Open rural positions across north and east Hertfordshire face greater weather exposure. Correct post foundation depth for clay soils, hot-dip galvanising on all steel, and durable timber species like iroko or Accoya. Our rural installers know these conditions.',
                  link: '/services/electric-sliding-gates/',
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Hertford Conservation Area',
                  desc: 'The historic core of Hertford and surrounding villages carry conservation designations that affect boundary treatments. Gate material and design need to respect the street scene. Our Hertford-area installers handle this regularly.',
                  link: '/services/metal-driveway-gates/',
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Modern Builds in North Hertfordshire',
                  desc: 'New-build estates across Watford, Potters Bar, and the Ebbsfleet corridor suit clean-lined aluminium sliding gates or fabricated steel in anthracite. Practical, low-maintenance, and fully automated.',
                  link: '/services/electric-sliding-gates/',
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: 'Premium West Hertfordshire Estates',
                  desc: 'St Albans, Shenley, and the Harpenden belt produce some of the highest-specification gate installations in the South East. Hand-forged wrought iron, underground motors, video intercom, and proximity access.',
                  link: '/services/automated-gate-systems/',
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

        {/* Hertfordshire Planning and Geography */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-4">
                {[
                  { label: 'West Hertfordshire', towns: 'St Albans, Shenley, Bovingdon, Harpenden', detail: 'London commuter wealth, Chilterns AONB and Green Belt overlap, premium wrought iron and concealed automation' },
                  { label: 'The Weald', towns: 'Berkhamsted, Much Hadham, Tring, Hawkhurst', detail: 'Green Belt, period farmhouses, farmsteads, barn conversions. Bespoke hardwood the dominant specification' },
                  { label: 'North Hertfordshire', towns: 'Watford, Potters Bar, Borehamwood, Bushey', detail: 'M25 commuter belt, contemporary and period mix. Sliding and swing automation, practical specifications' },
                  { label: 'Mid Hertfordshire', towns: 'Welwyn Garden City, Bearsted, West Malling, Lenham', detail: 'County town and garden villages. Bespoke metal and hardwood across a range of property ages and styles' },
                  { label: 'East Hertfordshire', towns: 'Hertford, Bishops Stortford, Ware, Sawbridgeworth, Much Hadham', detail: 'Historic market towns, conservation areas, period properties, bespoke hardwood and traditional ironwork' },
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
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Chilterns AONB. Green Belt Everywhere. Ten Districts. Hertfordshire Demands Local Knowledge.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    The Chilterns AONB covers western Hertfordshire from Tring and Berkhamsted through to parts of St Albans district. Green Belt designation covers the majority of the county, making Hertfordshire one of the most Green Belt-constrained counties in England. The M25, M1, and A1(M) corridors all run through heavily designated Green Belt land. Conservation areas exist in St Albans, Hertford, Hitchin, Ware, Berkhamsted, and in villages across the county.
                  </p>
                  <p>
                    Add ten separate district planning authorities, each with its own policies on boundary treatments, and you have a planning landscape that rewards experience and punishes assumptions. An installer who knows Hertfordshire will identify the relevant designation at postcode level, advise on whether a pre-application enquiry makes sense, and design a gate that the planning authority is likely to accept.
                  </p>
                  <p>
                    Then there is the physical landscape. Chiltern Hills properties sit on chalk with steep gradients that need specific hinge and motor engineering. Central and eastern Hertfordshire sits on clay that behaves differently under foundation loads compared to chalk. Open rural positions face greater weather exposure that needs accounting for in the surface treatment specification. Our network installers work across all of these conditions and adjust accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Driveway Gate Installers Near You in Hertfordshire</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">75 towns covered across every part of the county. Select your area to see what is available locally.</p>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Hertfordshire Driveway Gate Prices: What Installations Actually Cost in 2026</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real prices from completed Hertfordshire projects. West Hertfordshire runs higher than the national average; North and East Hertfordshire are closer to it. Every figure includes full installation.</p>
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
              <h3 className="text-2xl font-display font-bold mb-2">0% Finance From &pound;99 Per Month</h3>
              <p className="text-brand-200 text-sm mb-6 max-w-xl mx-auto">Available through most Hertfordshire installers in our network. Spread the cost over 6 to 36 months with nothing to pay upfront at many providers. Subject to status.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Options
              </button>
            </div>
          </div>
        </section>

        {/* Trust / Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What You Get From Our Free Matching Service</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We are not a gate company. We are the filter between you and the county&apos;s best gate installers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Minimum 50 Installs',
                  desc: 'No one enters our Hertfordshire network without a verified track record. Every installer has completed at least 50 residential gate projects before they receive a single referral from us.',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Insured, Warranted, Tested',
                  desc: 'Public liability insurance, separate written warranties for gate and automation, and BS EN 12453 safety commissioning with force testing documented at handover. Non-negotiable.',
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Matched to Your Area',
                  desc: 'A rural Hitchin farmhouse and a St Albans conservation area entrance need different experience. We match by location and project type, not just availability.',
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Still There in Five Years',
                  desc: 'We refer established businesses, not sole traders who might not be around when you need a service or warranty call. Longevity and responsiveness are part of our ongoing assessment.',
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
            <FAQ faqs={homepageFaqs} title="Driveway Gates Hertfordshire: Your Questions Answered" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-brand-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get Matched With Hertfordshire Gate Installers Today</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">Two minutes is all it takes. Tell us what you need and we connect you with up to three vetted specialists for free site surveys and written quotes. No fees, no obligation, no pressure.</p>
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
