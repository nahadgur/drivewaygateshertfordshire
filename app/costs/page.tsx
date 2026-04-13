'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PoundSterling, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroEditorial } from '@/components/HeritageHeroEditorial';
import { COST_GUIDES } from '@/data/costs';
import { siteConfig } from '@/data/site';

export default function CostsPage() {
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
        name: `${c.service} Cost`,
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
        <div className="container-width pt-6">
          <Breadcrumbs items={[{ label: 'Costs' }]} />
        </div>
        <HeritageHeroEditorial
          eyebrow="Cost Guides · Hertfordshire"
          headline={<>Driveway gate <em>costs</em> in Hertfordshire.</>}
          byline="Honest price ranges, what drives the cost up or down, and the hidden extras that turn up on quotes so you can spot them before you sign."
          meta="Updated April 2026"
          imageLabel="Installation detail"
        />

        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="flex gap-4 p-6 bg-blue-50 border border-blue-200 rounded-xl mb-10">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">These figures are real Hertfordshire market ranges as of early 2026, compiled from quotes our installer network has submitted. They are not a fixed price list — your own quote will depend on site conditions, design choices, and current material costs.</p>
                <p className="text-gray-700 text-sm leading-relaxed">For a price specific to your property, get up to three written quotes from vetted installers for free.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {COST_GUIDES.map(c => (
                <Link key={c.slug} href={`/costs/${c.slug}/`} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-brand-600 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <PoundSterling className="w-6 h-6 text-brand-600 flex-shrink-0" />
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{c.service}</h2>
                  <div className="text-brand-700 font-bold text-lg mb-2">{c.typicalRange}</div>
                  <p className="text-sm text-gray-600 line-clamp-3">{c.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
