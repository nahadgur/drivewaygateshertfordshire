// app/contact/ContactClient.tsx
'use client';

import { useState } from 'react';
import { Clock, Shield, CheckCircle, Users, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeritageHeroMoney } from '@/components/HeritageHeroMoney';
import { TrustBadges } from '@/components/TrustBadges';
import { siteConfig } from '@/data/site';

export default function ContactClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteConfig.url}/contact/`,
    name: 'Contact Driveway Gates Hertfordshire',
    url: `${siteConfig.url}/contact/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    description: 'Contact page for Driveway Gates Hertfordshire. Submit your enquiry for a free site survey and three written quotes from vetted installers.',
    about: { '@id': `${siteConfig.url}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <HeritageHeroMoney
          eyebrow="Contact · Hertfordshire"
          headline={<>Get in touch for <em>free gate quotes.</em></>}
          lede="Submit your enquiry in under two minutes. We match you with up to three vetted Hertfordshire gate installation specialists - each provides a free site survey and a written quote, with no obligation at any stage."
          image="/images/gates/herts-grand-iron-gates-brick-piers-tree-lined-drive.png"
          imageLabel="Grand iron gates, tree-lined drive"
          formTitle="Request your quotes"
        />

        <TrustBadges />

        <div className="container-width pt-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </div>

        {/* Opening framing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  How to Reach Us and What Happens Next
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    The quickest way to get gate quotes for your Hertfordshire property is the form in the hero above. Submit your postcode, phone number, email, and the type of gate you are thinking about, and we identify up to three installers from our vetted network whose experience matches your area and project.
                  </p>
                  <p>
                    Each installer contacts you directly to arrange a free site survey at a time that works for you - evening and Saturday slots are available with most of the network. After the survey, each provides a detailed written quote covering gate fabrication, post foundations, motor specification, access control, and BS EN 12453 commissioning. You compare the quotes side by side and decide whether to proceed. No time pressure, no follow-up sales calls from us.
                  </p>
                  <p>
                    The service is free throughout. We receive a referral contribution from the installer after a completed project, which is why we can vet the network rigorously and match carefully rather than selling contact details to whoever will pay.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Submit Your Enquiry
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-ornate-iron-entrance-pillars-lanterns-driveway.png" alt="Ornate iron entrance, Hertfordshire estate" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-contemporary-aluminium-slider-dark-finish.png" alt="Contemporary aluminium sliding gate" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/herts-cream-hardwood-swing-rural-cottage-entrance.png" alt="Hardwood swing gate, cottage specification" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Response standards grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Response Standards</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">What you can expect from us and from the Hertfordshire installers in our network, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Clock className="w-6 h-6" />, title: '4-hour enquiry processing', desc: 'Submitted during business hours, your enquiry reaches the matched installers the same afternoon. Outside hours, it goes out first thing the next working day.' },
                { icon: <Users className="w-6 h-6" />, title: 'Up to 3 installers matched', desc: 'Not a list of ten. Three firms who genuinely cover your area and specialise in the gate type you want - all contactable, all insured, all track-record verified.' },
                { icon: <MapPin className="w-6 h-6" />, title: 'Site survey within 7 days', desc: 'Most installers covering Hertfordshire can offer a free site visit within a week, including evening and Saturday slots if you work weekdays.' },
                { icon: <Shield className="w-6 h-6" />, title: 'Written quotes, not estimates', desc: 'Every installer provides a fully itemised written quote after the site survey. No verbal prices, no "ballpark" figures, no pressure to decide on the day.' },
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

        {/* What to include in enquiry */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What to Include in Your Enquiry</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The more specific you are, the better we can match you. Nothing below is mandatory beyond the form fields.</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Postcode or town', desc: 'We need this to match installers with verified experience in your specific area. Hertfordshire is large - a firm that covers Watford may not quote for Royston.' },
                { title: 'Gate type you are considering', desc: 'Electric sliding, swing, wooden, metal, automation retrofit, or repair. If you are undecided, pick the closest option and note it on the survey - installers are happy to walk you through alternatives.' },
                { title: 'Approximate opening width', desc: 'Measured between the existing pillars or boundary if possible. An estimate is fine. This determines whether a single or double gate is viable and affects the motor specification.' },
                { title: 'Any planning constraints you know about', desc: 'Conservation area, Chilterns National Landscape, Green Belt, listed building, or a recent refusal. Installers with experience of your council save you substantial time and often money.' },
                { title: 'Rough budget', desc: 'A range is fine. It helps installers pitch at the right specification level rather than over-quoting and losing the job, or under-quoting and skipping essentials.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="bg-brand-600 text-white p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
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
              <CheckCircle className="w-4 h-4" /> Free Service, No Obligation
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready When You Are</h2>
            <p className="text-brand-100 text-lg mb-8">Two minutes to submit your details. Up to three vetted Hertfordshire specialists matched to your project. Free site surveys, written quotes, and zero obligation at any stage.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
