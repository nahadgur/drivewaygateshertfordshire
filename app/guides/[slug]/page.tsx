'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, Target, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { COMPARISON_GUIDES, getGuideBySlug } from '@/data/guides';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/guides/${guide.slug}/#article`,
    headline: guide.title,
    url: `${siteConfig.url}/guides/${guide.slug}/`,
    description: guide.summary,
    author: { '@id': `${siteConfig.url}/#organization` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/guides/${guide.slug}/` },
  };

  const related = COMPARISON_GUIDES.filter(g => g.slug !== guide.slug).slice(0, 3);
  const relatedServices = guide.relatedServices.map(s => getServiceBySlug(s)).filter(Boolean);

  const OptionBlock = ({ option, variant }: { option: typeof guide.optionA; variant: 'a' | 'b' }) => (
    <div className={`p-6 rounded-2xl border ${variant === 'a' ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{option.name}</h3>
      <div className="mb-5">
        <div className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">Pros</div>
        <ul className="space-y-1.5">
          {option.pros.map((p, i) => <li key={i} className="flex gap-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> {p}</li>)}
        </ul>
      </div>
      <div className="mb-5">
        <div className="text-xs font-bold uppercase tracking-wide text-red-700 mb-2">Cons</div>
        <ul className="space-y-1.5">
          {option.cons.map((c, i) => <li key={i} className="flex gap-2 text-sm text-gray-700"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> {c}</li>)}
        </ul>
      </div>
      <div className="pt-4 border-t border-gray-200">
        <div className="text-xs font-bold uppercase tracking-wide text-gray-600 mb-2 flex items-center gap-1"><Target className="w-3 h-3" /> Best for</div>
        <p className="text-sm text-gray-700 leading-relaxed">{option.bestFor}</p>
      </div>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white">
          <div className="container-width py-12 md:py-20">
            <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guide.shortTitle }]} />
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{guide.title}</h1>
                <p className="text-gray-300 leading-relaxed">{guide.summary}</p>
              </div>
              <div className="lg:pl-8"><HeroLeadForm /></div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <OptionBlock option={guide.optionA} variant="a" />
              <OptionBlock option={guide.optionB} variant="b" />
            </div>

            <div className="p-8 bg-brand-50 border-l-4 border-brand-600 rounded-r-xl mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">The verdict</h2>
              <p className="text-gray-700 leading-relaxed">{guide.verdict}</p>
            </div>

            <div className="space-y-8 mb-12">
              {guide.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">{s.heading}</h2>
                  <p className="text-gray-700 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-900 text-white rounded-xl text-center mb-12">
              <h3 className="text-xl font-bold mb-3">Ready to get quotes?</h3>
              <p className="text-gray-300 mb-5 max-w-xl mx-auto">Free written quotes from up to three vetted Hertfordshire specialists. No obligation.</p>
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Request quotes <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {relatedServices.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {relatedServices.map(s => s && (
                    <Link key={s.slug} href={`/services/${s.slug}/`} className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-brand-600 hover:bg-white transition-all">
                      <div className="text-sm font-semibold text-gray-900">{s.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More buying guides</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link key={r.slug} href={`/guides/${r.slug}/`} className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-brand-600 hover:bg-white transition-all">
                    <div className="text-sm font-semibold text-gray-900">{r.shortTitle}</div>
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
