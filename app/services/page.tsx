// app/services/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ServicesHubClient from './ServicesHubClient';

export const metadata: Metadata = {
  title: 'Gate Types | Electric, Wooden, Metal, Automation and Repair',
  description: 'Browse all driveway gate types available through our Hertfordshire installer network. Electric sliding gates, swing gates, wooden gates, metal gates, automation retrofits, and repair services.',
  alternates: { canonical: `${siteConfig.url}/services/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/services/`,
    title: 'Gate Types | Driveway Gates Hertfordshire',
    description: 'Browse all driveway gate types available through our Hertfordshire installer network.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <ServicesHubClient />;
}
