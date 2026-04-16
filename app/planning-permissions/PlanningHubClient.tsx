// app/planning-permissions/PlanningHubClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowRight, MapPin, Shield, FileText, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroMoney } from '@/components/HeritageHeroMoney';
import { TrustBadges } from '@/components/TrustBadges';
import { PLANNING_REGIONS, UNIVERSAL_RULES } from '@/data/planning';
import { siteConfig } from '@/data/site';

export default function PlanningHubClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/planning-permissions/`,
    name: 'Driveway Gate Planning Permission in Hertfordshire',
    url: `${siteConfig.url}/planning-permissions/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    description: 'Planning permission rules for driveway gates across Hertfordshire. Green Belt, Chilterns AONB, conservation areas, and what each council requires.',
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

        <HeritageHeroMoney
          eyebrow="Planning Permissions · Hertfordshire"
          headline={<>Driveway gate <em>planning permission</em> in Hertfordshire.</>}
          lede="What the rules actually say, how each Hertfordshire council applies them, and when a gate installation will or will not need planning permission."
          image="/images/gates/herts-powder-coated-green-swing-victorian-brick.png"
          imageLabel="Period property, conservation area"
          formTitle="Installers who handle planning for you"
        />

        <TrustBadges />

        <div className="container-width pt-8">
          <Breadcrumbs items={[{ label: 'Planning Permissions' }]} />
        </div>

        {/* Opening framing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Hertfordshire Planning Is Not One Rulebook. It Is Ten.
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Ten district and borough councils share planning authority across Hertfordshire. Each has its own local plan, its own conservation areas, its own supplementary guidance on boundary treatments, and its own appetite for pre-application engagement. A gate that passes without objection in one borough can face five conditions in the next, even when the design is identical.
                  </p>
                  <p>
                    On top of the council layer, Hertfordshire carries some of the densest planning designations of any English county. The Chilterns National Landscape (formerly AONB) covers the western districts. Green Belt covers the overwhelming majority of the rural land. Conservation areas exist in every market town from St Albans to Royston. A substantial stock of listed buildings across the older settlements brings a separate consents regime.
                  </p>
                  <p>
                    This page gives you the four rules that apply everywhere, then links to detailed guidance for each of the five Hertfordshire planning regions. For most projects, using an installer who knows the local council personally is worth more than any amount of reading - the firms in our network handle planning engagement as part of the service.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Match With a Local Specialist
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-ornate-iron-entrance-pillars-lanterns-driveway.png" alt="Ornate iron entrance, conservation area style" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-cream-hardwood-swing-rural-cottage-entrance.png" alt="Rural AONB property" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-grand-iron-gates-brick-piers-tree-lined-drive.png" alt="Grand iron gates, Green Belt context" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer banner */}
        <section className="bg-gray-50 py-10">
          <div className="container-width max-w-5xl">
            <div className="flex gap-4 p-6 bg-white border-l-4 border-amber-500 rounded-2xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">This page does not replace formal advice</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Everything here summarises general planning law and typical local practice. It is not formal pre-application advice from your council. For any project with cost at stake, verify with the council planning portal for your specific address before committing to a design or signing a contract.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Universal rules */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">The Four Rules That Apply Everywhere</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">These apply regardless of which Hertfordshire council you sit in. Start here before looking at local rules.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {UNIVERSAL_RULES.map((r, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-snug">{r.rule}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Region grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Planning Guidance by Hertfordshire Region</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Hertfordshire is made up of ten local planning authorities grouped here into five regions. Select your area for the councils, conservation controls, and local sensitivities that apply.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLANNING_REGIONS.map(r => (
                <Link key={r.slug} href={`/planning-permissions/${r.slug}/`} className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand-300 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-600 mb-3 transition-colors">{r.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{r.councils.join(', ')}</p>
                  <span className="inline-flex items-center gap-1 text-brand-600 font-bold text-sm">
                    Read planning rules <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* When to engage a specialist */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">When Planning Engagement Is Genuinely Needed</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Not every gate project needs a planning application. But these four scenarios almost always do, and the cost of getting it wrong is disproportionate.</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Property in a conservation area', desc: 'Permitted development rights are usually restricted. Most conservation areas in Hertfordshire require planning consent for any gate facing a highway, regardless of height.' },
                { title: 'Listed building or in its curtilage', desc: 'Separate listed building consent is needed for boundary works. The distinction between "within the curtilage" and "separate" is often contested - get formal clarification before specifying anything.' },
                { title: 'Chilterns National Landscape (formerly AONB)', desc: 'Material, height, and design scrutiny is substantially stricter. Natural timber in simple profiles passes most readily. Ornate wrought iron often does not.' },
                { title: 'Any gate over 1 metre next to a highway', desc: 'This is the permitted development cut-off. Above 1 metre adjoining a highway triggers a planning application regardless of designation.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="bg-brand-600 text-white p-2 rounded-lg flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-brand-900">
          <div className="container-width max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-brand-800 text-brand-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle className="w-4 h-4" /> Planning Handled as Part of the Service
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Let an Installer Who Knows Your Council Handle It</h2>
            <p className="text-brand-100 text-lg mb-8">Every installer in our Hertfordshire network regularly engages with their local planning authorities. They know which officers sign off quickly, which designs the department tends to accept, and when a pre-application enquiry is worth the effort. Free site survey and planning review included.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
