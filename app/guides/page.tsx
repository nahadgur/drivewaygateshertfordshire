'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroEditorial } from '@/components/HeritageHeroEditorial';
import { COMPARISON_GUIDES } from '@/data/guides';
import { siteConfig } from '@/data/site';

export default function GuidesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/guides/`,
    name: 'Driveway Gate Buying Guides',
    url: `${siteConfig.url}/guides/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    description: 'In-depth comparison guides for Hertfordshire homeowners choosing between materials, motor types, gate formats, and automation options.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: COMPARISON_GUIDES.length,
      itemListElement: COMPARISON_GUIDES.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.title,
        url: `${siteConfig.url}/guides/${g.slug}/`,
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
          <Breadcrumbs items={[{ label: 'Guides' }]} />
        </div>
        <HeritageHeroEditorial
          eyebrow="Buying Guides · Hertfordshire"
          headline={<>Driveway gate <em>buying guides.</em></>}
          byline="The real trade-offs between materials, motors, and gate formats — written to help Hertfordshire homeowners decide without installer sales pressure."
          meta="Updated April 2026"
          image="/images/gates/herts-iroko-grain-detail-hinge-warm-tones.png"
          imageLabel="Iroko hardwood detail"
        />

        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              {COMPARISON_GUIDES.map(g => (
                <Link key={g.slug} href={`/guides/${g.slug}/`} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-brand-600 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <BookOpen className="w-6 h-6 text-brand-600 flex-shrink-0" />
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{g.shortTitle}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{g.summary}</p>
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
