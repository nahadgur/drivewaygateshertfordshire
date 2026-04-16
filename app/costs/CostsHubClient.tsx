// app/costs/CostsHubClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PoundSterling, CheckCircle, Shield, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroMoney } from '@/components/HeritageHeroMoney';
import { TrustBadges } from '@/components/TrustBadges';
import { COST_GUIDES } from '@/data/costs';
import { siteConfig } from '@/data/site';

export default function CostsHubClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/costs/`,
    name: 'Driveway Gate Costs in Hertfordshire',
    url: `${siteConfig.url}/costs/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    description: 'Honest price ranges for electric gates, wooden gates, metal gates, automation retrofits, and repairs across Hertfordshire. What affects cost and what a fair quote looks like.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: COST_GUIDES.length,
      itemListElement: COST_GUIDES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${c.service} cost`,
        url: `${siteConfig.url}/costs/${c.slug}/`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <HeritageHeroMoney
          eyebrow="Cost Guides · Hertfordshire"
          headline={<>Driveway gate <em>costs</em> in Hertfordshire.</>}
          lede="Honest price ranges, what drives the cost up or down, and the hidden extras that turn up on quotes so you can spot them before you sign."
          image="/images/gates/herts-comparison-traditional-iron-vs-modern-aluminium.png"
          imageLabel="Traditional vs modern comparison"
          formTitle="Get quotes matched to your budget"
        />

        <TrustBadges />

        <div className="container-width pt-8">
          <Breadcrumbs items={[{ label: 'Costs' }]} />
        </div>

        {/* Opening framing block - matches homepage style */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  What a Fair Hertfordshire Gate Quote Actually Looks Like
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Gate quotes across Hertfordshire vary enormously for what is often nearly identical work. The spread reflects real differences in specification, but it also reflects overcharging on one end and under-specifying on the other. Knowing the honest range matters because a quote that is suspiciously low almost always omits the things that cost real money later, and a quote at the extreme top end is often a generalist firm pricing defensively for work they do not do every week.
                  </p>
                  <p>
                    The figures on this page are real Hertfordshire market ranges as of early 2026, compiled from quotes our vetted installer network has submitted across St Albans, Harpenden, Watford, Hertford, and every area in between. They cover the full specification - gate, motor, foundations, safety commissioning, and handover - so you can compare like-for-like against what you are being offered.
                  </p>
                  <p>
                    Each category below links to a detailed breakdown: what sits at the budget end, what you pay for mid-range, what premium spec actually means, and the hidden extras that turn up on real quotes. For a price specific to your property, get up to three written quotes for free.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Three Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-ornate-iron-entrance-pillars-lanterns-driveway.png" alt="Wrought iron gates, premium specification" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-contemporary-aluminium-slider-dark-finish.png" alt="Contemporary aluminium sliding gate" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-cream-hardwood-swing-rural-cottage-entrance.png" alt="Hardwood swing gate, cottage specification" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Important note */}
        <section className="bg-gray-50 py-10">
          <div className="container-width max-w-5xl">
            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <Info className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Prices below are installed, not supply-only</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Every figure on this page includes full installation, motor where applicable, post foundations, safety commissioning to BS EN 12453, and handover. They are real ranges from Hertfordshire quotes, not national averages or manufacturer headline prices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost category grid - richer styling */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Costs by Gate Type</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Select your category for the full breakdown: budget, mid-range, and premium specifications, and what the figures include.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COST_GUIDES.map(c => (
                <Link key={c.slug} href={`/costs/${c.slug}/`} className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                      <PoundSterling className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2 transition-colors">{c.service}</h3>
                  <div className="text-brand-700 font-bold text-2xl mb-3">{c.typicalRange}</div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{c.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why the range matters */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Hertfordshire Quotes Vary So Much</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Four factors account for most of the spread between a £4,000 quote and a £12,000 quote for what looks on paper like the same job.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Motor specification', desc: 'An underground motor is two to three times the cost of a ram-arm motor. The finish impact is significant, the visual difference is substantial, and generalists often quote ram-arms by default.' },
                { title: 'Gate fabrication quality', desc: 'Hot-dip galvanised and powder-coated to BS EN ISO 1461 lasts 25 years. Paint-over-bare-steel lasts five. The quote that skips the hot-dip saves the installer money and costs you the job twice.' },
                { title: 'Post foundation depth', desc: 'Hertfordshire clay demands 900mm to 1200mm depth with reinforcement. A contractor who digs 600mm and hopes for the best will produce gates that drop within three years. Foundations are invisible on day one.' },
                { title: 'Safety commissioning', desc: 'BS EN 12453 force testing with calibrated equipment, photocell coverage across the full opening, and a written declaration of conformity. Skipping this is illegal and many quotes pretend it is optional.' },
              ].map(item => (
                <div key={item.title} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance callout */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="bg-brand-900 rounded-2xl p-10 md:p-14 text-center">
              <div className="inline-flex items-center gap-2 bg-brand-800 text-brand-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle className="w-4 h-4" /> 0% Interest Finance Available
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Spread the Cost From £99/Month</h2>
              <p className="text-brand-100 text-lg max-w-2xl mx-auto mb-8">Most Hertfordshire installers in our network offer 0% interest finance on gate installations. Spread the cost over 6 to 36 months with nothing to pay upfront at many providers. Subject to status and approval.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Availability
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Ready for a Price Specific to Your Property?</h2>
            <p className="text-gray-600 text-lg mb-8">Two minutes to submit your enquiry. Up to three vetted Hertfordshire specialists matched to your project, each providing a free site survey and itemised written quote.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary !text-lg !px-10 !py-4">Get Your Free Quotes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
