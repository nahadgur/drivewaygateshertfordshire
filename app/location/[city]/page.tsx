// app/location/[city]/page.tsx
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { services } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { CITY_INTROS } from '@/data/city-intros';
import { FAQS_SERVICES, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { HeritageHeroMoney } from '@/components/HeritageHeroMoney';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { Testimonials } from '@/components/Testimonials';
import { siteConfig } from '@/data/site';

export default function CityPage({ params }: { params: { city: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();

  const cityFaqs = [...FAQS_LOCATION, ...FAQS_SERVICES];

  // Prefer hand-written city-specific intro; fall back to county-level boilerplate if not yet written
  const cityIntroParagraphs = CITY_INTROS[params.city]?.cityIntro;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/location/${params.city}/#service`,
    name: `Driveway Gate Installers in ${cityName}`,
    serviceType: 'Driveway Gate Installation',
    url: `${siteConfig.url}/location/${params.city}/`,
    description: `Find vetted driveway gate installers in ${cityName}, Hertfordshire. Free site surveys, written quotes, and up to 3 options with no obligation.`,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Hertfordshire' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Driveway Gate Services in ${cityName}`,
      itemListElement: [
        'Electric Sliding Gate Installation',
        'Electric Swing Gate Installation',
        'Wooden Driveway Gate Installation',
        'Metal Driveway Gate Installation',
        'Gate Automation Installation',
        'Gate Repair and Maintenance',
      ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <div className="container-width pt-6">
          <Breadcrumbs items={[{ label: 'Locations', href: '/location/' }, { label: cityName }]} />
        </div>
        <HeritageHeroMoney
          eyebrow={`Driveway Gates · ${cityName}`}
          headline={<>Driveway gates in <em>{cityName}.</em></>}
          lede={`Vetted gate installation specialists working in and around ${cityName}. Every installer focuses on residential gates as their primary trade with a minimum of 50 completed projects.`}
          imageLabel={`${cityName}, Hertfordshire`}
          city={cityName}
        />

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  Gate Installation in {cityName} Requires County-Level Knowledge
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {cityIntroParagraphs && cityIntroParagraphs.length > 0 ? (
                    cityIntroParagraphs.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <>
                      <p>
                        Hertfordshire has one of the most complex planning landscapes in southern England. Green Belt covers the vast majority of the county. The Chilterns AONB applies in the west. Conservation areas exist across every historic market town. Ten district and borough councils each apply their own local plan policies to boundary treatments. An installer unfamiliar with the planning position at your {cityName} postcode risks specifying a gate that needs consent nobody applied for, or a design that the local authority will not accept. Every firm in our network works regularly in Hertfordshire and checks the planning position at the site survey before committing to a specification.
                      </p>
                      <p>
                        Beyond planning, your installer needs to know the soil conditions under the post positions and how the local terrain affects the gate type choice. Each installer we introduce visits the property in person, assesses the driveway, confirms any planning considerations, and provides a written quote with full line-by-line detail. You receive up to three quotes from independent specialists and choose whether to proceed entirely on your own terms.
                      </p>
                    </>
                  )}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Gate Types Available in {cityName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}/${params.city}/`} className="block group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="h-36 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-1.5">{service.title} in {cityName}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
                        <span className="text-brand-600 font-medium text-sm flex items-center">Get free quotes <ArrowRight className="w-4 h-4 ml-1" /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} />

              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">What You Get When We Match You in {cityName}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Star className="w-5 h-5" />, title: 'Dedicated Gate Firms Only', desc: `No general builders, no landscapers, no one-off gate fitters. Every installer we introduce in ${cityName} does gate work as their main trade, every week, with a documented project history to prove it.` },
                    { icon: <Shield className="w-5 h-5" />, title: 'Documented Warranty Coverage', desc: `Each ${cityName} installer issues separate written warranties for the gate and the automation. If the motor develops a fault in year three, the warranty covers it with no grey area about what is included.` },
                    { icon: <Clock className="w-5 h-5" />, title: 'Site Survey Within the Week', desc: `Most installers covering ${cityName} can visit within 7 days of your enquiry. Evening and Saturday survey slots are available for homeowners who cannot take time during the working week.` },
                    { icon: <CheckCircle className="w-5 h-5" />, title: 'Free Throughout, No Strings', desc: `The matching costs nothing. The surveys cost nothing. The quotes cost nothing. You pay only if you choose to instruct an installer, and that payment goes to them under your direct agreement.` },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0 h-fit">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} />

              <div className="mb-12"><FAQ faqs={[...FAQS_LOCATION, ...FAQS_SERVICES]} title={`Driveway Gates in ${cityName}: Common Questions`} /></div>

              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Are Saying</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Get Quotes in {cityName}</h3>
                  <p className="text-gray-600 text-sm mb-6">Tell us what you need and we connect you with up to 3 screened installers near {cityName}. Completely free.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find an Installer</button>
                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: "Free survey within the week" },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: "50+ verified gate projects" },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: "Insurance and warranty guaranteed" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">Interest-Free Finance</h3>
                  <p className="text-brand-100 text-sm mb-4">Spread the cost from £99/month over 6 to 36 months at 0% through most {cityName} installers. Subject to status and approval.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Check Eligibility</button>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Get Gate Quotes for Your {cityName} Property</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">Submit your details in two minutes. We match you with up to three screened Hertfordshire gate installers who will each visit, survey, and provide a written quote at no cost and with no obligation.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
