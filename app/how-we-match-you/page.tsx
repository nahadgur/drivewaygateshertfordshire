// app/how-we-match-you/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import HowWeMatchClient from './HowWeMatchClient';

export const metadata: Metadata = {
  title: 'How We Match You With Gate Installers | Our Process',
  description: 'How our Hertfordshire gate installer matching service works. From your enquiry to receiving up to three vetted quotes, every step is free and without obligation.',
  alternates: { canonical: `${siteConfig.url}/how-we-match-you/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/how-we-match-you/`,
    title: 'How We Match You | Driveway Gates Hertfordshire',
    description: 'How our gate installer matching service works. Free, no obligation.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <HowWeMatchClient />;
}
