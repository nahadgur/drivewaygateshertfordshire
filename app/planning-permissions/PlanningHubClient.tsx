'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowRight, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroEditorial } from '@/components/HeritageHeroEditorial';
import { PLANNING_REGIONS, UNIVERSAL_RULES } from '@/data/planning';
import { siteConfig } from '@/data/site';

export default function PlanningHubClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/planning-permissions/`,
    name: 'Driveway Gate Planning Permission Rules in Hertfordshire',
    url: `${siteConfig.url}/planning-permissions/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    description: 'Planning permission rules for driveway gates across Hertfordshire — permitted development heights, conservation areas, AONB, and region-specific council guidance.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: PLANNING_REGIONS.length,
      itemListElement: PLANNING_REGIONS.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${r.name} gate planning rules`,
        url: `${siteConfig.url}/planning-permissions/${r.slug}/`,
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
          <Breadcrumbs items={[{ label: 'Planning Permissions' }]} />
        </div>
        <HeritageHeroEditorial
          eyebrow="Planning Permissions · Hertfordshire"
          headline={<>Driveway gate <em>planning permission</em> in Hertfordshire.</>}
          byline="What the rules actually say, how each Hertfordshire council applies them, and when a gate installation will or will not need planning permission."
          meta="Updated April 2026"
          image="/images/gates/herts-powder-coated-green-swing-victorian-brick.png"
          imageLabel="Period property, conservation area"
        />

        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="flex gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl mb-10">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-sm leading-relaxed">This page summarises general planning law and local practice. It does not replace formal pre-application advice from your council. Always check the council planning portal for your specific address before committing to a design or signing a contract.</p>
            </div>

            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">The four rules that apply everywhere</h2>
            <div className="space-y-4 mb-12">
              {UNIVERSAL_RULES.map((r, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{r.rule}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Region-specific guidance</h2>
            <p className="text-gray-600 mb-8">Hertfordshire is made up of ten local planning authorities grouped here into five regions. Select your area for the councils, conservation controls, and local sensitivities that apply.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {PLANNING_REGIONS.map(r => (
                <Link key={r.slug} href={`/planning-permissions/${r.slug}/`} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-brand-600 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold mb-2"><MapPin className="w-4 h-4" /> {r.name}</div>
                      <p className="text-sm text-gray-600">{r.councils.join(', ')}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
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
