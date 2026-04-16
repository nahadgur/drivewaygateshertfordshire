// app/guides/GuidesHubClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Scale, Lightbulb } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroMoney } from '@/components/HeritageHeroMoney';
import { TrustBadges } from '@/components/TrustBadges';
import { COMPARISON_GUIDES } from '@/data/guides';
import { siteConfig } from '@/data/site';

export default function GuidesHubClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/guides/`,
    name: 'Driveway Gate Buying Guides for Hertfordshire',
    url: `${siteConfig.url}/guides/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    description: 'Side-by-side comparisons of gate types, materials, and motor systems for Hertfordshire homeowners.',
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

        <HeritageHeroMoney
          eyebrow="Buying Guides · Hertfordshire"
          headline={<>Driveway gate <em>buying guides.</em></>}
          lede="The real trade-offs between materials, motors, and gate formats - written to help Hertfordshire homeowners decide without installer sales pressure."
          image="/images/gates/herts-iroko-grain-detail-hinge-warm-tones.png"
          imageLabel="Iroko hardwood, grain detail"
          formTitle="Not sure yet? Get matched advice"
        />

        <TrustBadges />

        <div className="container-width pt-8">
          <Breadcrumbs items={[{ label: 'Guides' }]} />
        </div>

        {/* Opening framing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Decide Before You Sit Across From a Salesperson
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    A Hertfordshire gate installer will ask you what you want on the first visit. That question is a trap unless you already know the answer. Sit in front of it unprepared and you get steered toward whatever the installer is most comfortable fitting - which is usually what they buy at the best margin, not what suits your property.
                  </p>
                  <p>
                    These guides compare the real trade-offs in plain language. Hardwood versus softwood. Aluminium versus steel. Underground versus ram-arm motors. Sliding versus swing formats. Manual versus automated. Every guide lays out what each option does well, where it falls short, and which Hertfordshire property types it actually suits.
                  </p>
                  <p>
                    Read the ones relevant to your project, then have the conversation with your installer knowing what the honest answer should sound like. When you are ready, get up to three vetted quotes from specialists whose material and motor advice we trust.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Three Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-powder-coated-green-swing-victorian-brick.png" alt="Powder-coated steel swing gate" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-cream-hardwood-swing-rural-cottage-entrance.png" alt="Cream hardwood swing gate" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-video-intercom-flush-mounted-pillar-detail.png" alt="Flush video intercom detail" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* How guides are structured */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Every Guide Follows the Same Structure</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Built for fast decision-making rather than exhaustive reading. Three blocks per guide, each short enough to finish on a single visit.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Scale className="w-6 h-6" />, title: 'Side-by-side comparison', desc: 'Direct head-to-head on the specifications that actually matter: cost, durability, maintenance, lead time, and planning acceptability in Hertfordshire.' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Best-for use cases', desc: 'Every option comes with the Hertfordshire property types it genuinely suits - not marketing-speak, but specific scenarios.' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'The verdict', desc: 'A clear recommendation on which option works for which situation, including when the cheaper choice is the right one.' },
              ].map(item => (
                <div key={item.title} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide grid */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Comparison Guides</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Select the decision you are trying to make. Each comparison is written for Hertfordshire conditions and the typical property mix across the county.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPARISON_GUIDES.map(g => (
                <Link key={g.slug} href={`/guides/${g.slug}/`} className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-600 mb-3 transition-colors leading-snug">{g.shortTitle}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{g.summary}</p>
                  <span className="inline-flex items-center gap-1 text-brand-600 font-bold text-sm mt-4">
                    Read the comparison <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Still Undecided? Let Specialists Advise at the Site Survey</h2>
            <p className="text-gray-600 text-lg mb-8">Our vetted Hertfordshire installers will recommend the right format, material, and motor for your property - and walk you through the reasoning. Free site survey, written quote, no obligation.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary !text-lg !px-10 !py-4">Get Your Free Quotes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
