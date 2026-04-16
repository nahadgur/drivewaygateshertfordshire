// app/contact/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Driveway Gates Hertfordshire | Get a Quote',
  description: 'Contact Driveway Gates Hertfordshire. Submit your enquiry for a free site survey and up to three written quotes from vetted Hertfordshire gate installers. No obligation.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/contact/`,
    title: 'Contact Driveway Gates Hertfordshire',
    description: 'Submit your enquiry and we will connect you with up to three vetted Hertfordshire gate installation specialists.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
  twitter: { card: 'summary', title: 'Contact Driveway Gates Hertfordshire', description: 'Submit your enquiry and we will connect you with vetted Hertfordshire gate installers.' },
};

export default function Page() {
  return <ContactClient />;
}
