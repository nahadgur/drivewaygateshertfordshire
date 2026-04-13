'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, MapPin, Building, Trees, FileText, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { HeritageHeroEditorial } from '@/components/HeritageHeroEditorial';
import { PLANNING_REGIONS, UNIVERSAL_RULES } from '@/data/planning';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';

export default function RegionalPlanningPage({ params }: { params: { region: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const region = PLANNING_REGIONS.find(r => r.slug === params.region);
  if (!region) notFound();

  const cities = LOCATIONS[region.regionKey] || [];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/planning-permissions/${region.slug}/#article`,
    headline: `Driveway Gate Planning Permission in ${region.name}`,
    url: `${siteConfig.url}/planning-permissions/${region.slug}/`,
    description: `Planning permission rules for driveway gates in ${region.name}: council requirements, conservation areas, AONB considerations, and application fees.`,
    author: { '@id': `${siteConfig.url}/#organization` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/planning-permissions/${region.slug}/` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <div className="container-width pt-6">
          <Breadcrumbs items={[{ label: 'Planning Permissions', href: '/planning-permissions/' }, { label: region.name }]} />
        </div>
        <HeritageHeroEditorial
          eyebrow={`Planning · ${region.name}`}
          headline={<>Gate planning in <em>{region.name}.</em></>}
          byline={`Local conservation controls, AONB considerations, and council-specific practice. Covers ${region.councils.join(', ')}.`}
          meta="Updated April 2026"
          imageLabel={`${region.name} streetscape`}
        />

        <section className="section-padding bg-white">
          <div className="container-width max-w-4xl">
            <div className="flex gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl mb-10">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-sm leading-relaxed">This page is general guidance, not formal pre-application advice. Council policy changes and individual addresses can have specific restrictions that override the general rules. Always check the council planning portal for your address before signing a contract.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <Building className="w-6 h-6 text-brand-600 mb-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">Conservation areas</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{region.conservationNotes}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <Trees className="w-6 h-6 text-brand-600 mb-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">AONB and landscape</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{region.aonbNotes}</p>
              </div>
            </div>

            <div className="p-6 bg-brand-50 border border-brand-100 rounded-xl mb-12">
              <FileText className="w-6 h-6 text-brand-600 mb-3" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Fees and application route</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">{region.typicalFees}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{region.applicationPortal}</p>
            </div>

            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">The four rules that apply everywhere in Hertfordshire</h2>
            <div className="space-y-3 mb-12">
              {UNIVERSAL_RULES.map((r, i) => (
                <div key={i} className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{r.rule}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>

            {cities.length > 0 && (
              <>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2"><MapPin className="w-5 h-5 text-brand-600" /> Towns and villages in {region.name}</h2>
                <p className="text-gray-600 mb-6">Get a free quote from a vetted installer who knows the local planning rules for your specific town.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                  {cities.map(city => (
                    <Link key={city} href={`/location/${toSlug(city)}/`} className="group flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-brand-600 hover:bg-brand-50 transition-all">
                      <span className="text-sm text-gray-700 group-hover:text-brand-700">{city}</span>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-600" />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
