'use client';

import { useState } from 'react';
import { CheckCircle, Briefcase, Target, Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';

export default function JoinOurNetworkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ company: '', name: '', phone: '', email: '', area: '', specialism: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/join-our-network/`,
    name: 'Join Our Network — Hertfordshire Gate Installers',
    url: `${siteConfig.url}/join-our-network/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    about: { '@id': `${siteConfig.url}/#organization` },
    description: 'Apply to join the Driveway Gates Hertfordshire installer network. Vetted leads, no monthly fees, exclusive specialism matching.',
  };

  const benefits = [
    { icon: <Target className="w-6 h-6" />, title: 'Leads matched to your specialism', desc: 'If you fit cantilever sliding gates, you receive enquiries for cantilever sliding gates. We do not send wooden gate enquiries to a metalwork fabricator or vice versa.' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'Pay per qualified lead, not per month', desc: 'No retainer, no monthly platform fee, no bidding wars. You are charged only for enquiries that pass our initial qualification and reach your inbox.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Hertfordshire only', desc: 'We do not mix your referral area with national job boards. Every enquiry is a homeowner in Hertfordshire looking for a local installer.' },
  ];

  const requirements = [
    'Public liability insurance of at least £2 million (current, verifiable)',
    'At least two years of trading history in driveway gate installation or automation',
    'At least six completed Hertfordshire installations with references or addresses',
    'Companies House registration, or verifiable sole trader status with valid UTR',
    'Ability to attend site and provide a written quote within five working days',
    'Willingness to honour quoted prices and provide written workmanship warranty',
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white">
          <div className="container-width py-12 md:py-20">
            <Breadcrumbs items={[{ label: 'Join Our Network' }]} />
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Join the Hertfordshire installer network</h1>
              <p className="text-lg md:text-xl text-gray-300">Qualified homeowner enquiries from across Hertfordshire, matched to your gate specialism. No monthly fees, no bidding wars, no shared leads with dozens of competitors.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">{b.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Entry requirements</h2>
                <ul className="space-y-3">
                  {requirements.map((r, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{r}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-6">Applications that do not meet all six requirements will not proceed to review. We do not make exceptions on insurance or references.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Apply to join</h2>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application received</h3>
                    <p className="text-gray-600">We review new installer applications within three working days. If we need further information or references we will be in touch using the contact details you provided.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <input type="text" placeholder="Company name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none" />
                    <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none" />
                    <input type="tel" placeholder="Phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none" />
                    <input type="email" placeholder="Email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none" />
                    <input type="text" placeholder="Area covered (e.g. West Herts, all of Hertfordshire)" value={form.area} onChange={e => setForm({...form, area: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none" />
                    <select value={form.specialism} onChange={e => setForm({...form, specialism: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none bg-white">
                      <option value="">Primary specialism</option>
                      <option>Electric sliding gates</option>
                      <option>Electric swing gates</option>
                      <option>Wooden driveway gates</option>
                      <option>Metal / wrought iron gates</option>
                      <option>Gate automation retrofit</option>
                      <option>Repair and maintenance</option>
                    </select>
                    <textarea placeholder="Brief summary of recent Hertfordshire work and insurance details" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:outline-none" />
                    <button onClick={handleSubmit} className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3 rounded-lg font-semibold transition-colors">Submit application</button>
                    <p className="text-xs text-gray-500">By submitting you confirm all information provided is accurate and that you consent to reference and insurance checks.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
