'use client';

import { useState } from 'react';
import { CheckCircle, Shield, Clock, Award, FileText, Users, Phone, Search } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { HeritageHeroEditorial } from '@/components/HeritageHeroEditorial';
import { siteConfig } from '@/data/site';

export default function HowWeMatchYouPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/how-we-match-you/`,
    name: 'How We Match You With Hertfordshire Gate Installers',
    url: `${siteConfig.url}/how-we-match-you/`,
    isPartOf: { '@id': `${siteConfig.url}/#organization` },
    about: { '@id': `${siteConfig.url}/#organization` },
    description: 'Our vetting process for Hertfordshire driveway gate installers: insurance checks, workmanship verification, response time standards, and dispute resolution.',
  };

  const vettingSteps = [
    { icon: <FileText className="w-6 h-6" />, title: 'Insurance and registration check', desc: 'Every installer provides current public liability cover of at least £2 million, employer\'s liability where applicable, and evidence of Companies House registration or verifiable sole trader status. Documents are re-checked annually.' },
    { icon: <Award className="w-6 h-6" />, title: 'Workmanship evidence', desc: 'New installers provide photographs and addresses of at least six recent Hertfordshire installations. We contact a sample of those homeowners directly before the installer receives any referrals.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Gate type specialism', desc: 'Installers are matched by the type of gate you need, not a general list. A fabricator who works primarily in wrought iron is not sent to quote on a cantilever sliding gate, and vice versa.' },
    { icon: <Clock className="w-6 h-6" />, title: 'Response time standards', desc: 'Installers who accept a referral must make first contact within four working hours and attend site within five working days, or the enquiry is routed to the next available specialist.' },
    { icon: <Users className="w-6 h-6" />, title: 'Homeowner feedback loop', desc: 'After a quote is issued we contact the homeowner to confirm the installer turned up, quoted as described, and behaved professionally. Persistent negative feedback removes an installer from the network.' },
    { icon: <Search className="w-6 h-6" />, title: 'Ongoing review', desc: 'Installers who receive a formal complaint are suspended from referrals pending investigation. Installers who cannot produce current insurance at annual review are removed immediately.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <div className="container-width pt-6">
          <Breadcrumbs items={[{ label: 'How We Match You' }]} />
        </div>
        <HeritageHeroEditorial
          eyebrow="How We Match You · Vetting Standards"
          headline={<>How we match you with a <em>vetted</em> Hertfordshire installer.</>}
          byline="Driveway Gates Hertfordshire is a matching network, not a single installer. We take the vetting seriously because our reputation depends on the people we refer."
          meta="Updated April 2026"
          imageLabel="Vetting process, West Hertfordshire"
        />

        <section className="section-padding bg-white">
          <div className="container-width max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">The six-point vetting standard</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vettingSteps.map((s, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">What happens after you submit an enquiry</h2>
            <ol className="space-y-6">
              {[
                { n: '1', t: 'Enquiry review', d: 'Your details are reviewed against the installers in our network who specialise in the type of gate you described and who operate in your part of Hertfordshire. Typical turnaround is within one working hour.' },
                { n: '2', t: 'Installer referral', d: 'We connect your enquiry to up to three installers. You are told which installers have been contacted and you keep full control of which one you instruct — there is no pressure to choose the first to respond.' },
                { n: '3', t: 'Site visit and written quote', d: 'Installers contact you directly to arrange a free site survey. Quotes are provided in writing and should include materials, dimensions, automation specification, installation timeline, warranty terms, and VAT.' },
                { n: '4', t: 'Your decision, with no obligation', d: 'You compare the quotes, choose the installer you want to proceed with, and deal with them directly from that point. There is no obligation to accept any quote and no charge to you at any stage.' },
                { n: '5', t: 'Post-installation check', d: 'After completion we contact you to confirm the work was carried out as described. This feedback is used to maintain the network and resolve any issues quickly.' },
              ].map(s => (
                <li key={s.n} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{s.n}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{s.t}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">What we are, and what we are not</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Driveway Gates Hertfordshire is a local matching platform. We are not the installer on site. We do not manufacture gates, we do not carry out installation, and we do not take payment for the work. Our role ends at the point a vetted installer quotes you.</p>
            <p className="text-gray-600 leading-relaxed">This distinction matters because it means your contract for the installation is directly with the installer, which gives you the full protection of UK consumer law including the Consumer Rights Act 2015 and any card scheme chargeback rights. We recommend paying deposits by credit card where possible.</p>
            <button onClick={() => setIsModalOpen(true)} className="mt-8 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <Phone className="w-5 h-5" /> Request a vetted quote
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
