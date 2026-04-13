'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, Clock, ArrowRight, PoundSterling } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { COST_GUIDES, getCostBySlug } from '@/data/costs';
import { siteConfig } from '@/data/site';

export default function CostDetailPage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cost = getCostBySlug(params.slug);
  if (!cost) notFound();

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/costs/${cost.slug}/#article`,
    headline: `${cost.service} Cost in Hertfordshire — ${cost.typicalRange}`,
    url: `${siteConfig.url}/costs/${cost.slug}/`,
    description: cost.summary,
    author: { '@id': `${siteConfig.url}/#organization` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/costs/${cost.slug}/` },
  };

  const related = COST_GUIDES.filter(c => c.slug !== cost.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white">
          <div className="container-width py-12 md:py-20">
            <Breadcrumbs items={[{ label: 'Costs', href: '/costs/' }, { label: cost.service }]} />
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{cost.service} cost in Hertfordshire</h1>
                <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-400/30 text-brand-200 px-4 py-2 rounded-lg font-bold text-lg mb-6">
                  <PoundSterling className="w-5 h-5" /> {cost.typicalRange}
                </div>
                <p className="text-gray-300 leading-relaxed">{cost.summary}</p>
              </div>
              <div className="lg:pl-8"><HeroLeadForm service={cost.service} /></div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Price ranges by specification</h2>
            <div className="space-y-4 mb-12">
              {[
                { label: 'Budget', cls: 'bg-green-100 text-green-800', text: cost.budgetRange },
                { label: 'Mid-range', cls: 'bg-blue-100 text-blue-800', text: cost.midRange },
                { label: 'Premium', cls: 'bg-purple-100 text-purple-800', text: cost.premiumRange },
              ].map(tier => (
                <div key={tier.label} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 ${tier.cls}`}>{tier.label}</div>
                  <p className="text-gray-700 leading-relaxed">{tier.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">What drives the cost up or down</h2>
            <div className="space-y-4 mb-12">
              {cost.factors.map((f, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{f.factor}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.impact}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> What a fair quote includes</h3>
                <ul className="space-y-2">
                  {cost.included.map((item, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-green-600">•</span> {item}</li>)}
                </ul>
              </div>
              <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><XCircle className="w-5 h-5 text-amber-600" /> Often excluded from headline price</h3>
                <ul className="space-y-2">
                  {cost.excluded.map((item, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-amber-600">•</span> {item}</li>)}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-brand-50 border border-brand-200 rounded-xl mb-12">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Clock className="w-5 h-5 text-brand-600" /> Typical timeline</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{cost.timeline}</p>
            </div>

            <div className="text-center py-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Get a price for your driveway</h3>
              <p className="text-gray-600 mb-6">Free written quotes from up to three vetted Hertfordshire specialists. No obligation.</p>
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Request free quotes <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related cost guides</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link key={r.slug} href={`/costs/${r.slug}/`} className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-brand-600 hover:bg-white transition-all">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{r.service}</div>
                    <div className="text-brand-700 text-sm font-bold">{r.typicalRange}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
