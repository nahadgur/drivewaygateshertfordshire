// app/costs/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import CostsHubClient from './CostsHubClient';

export const metadata: Metadata = {
  title: 'Driveway Gate Costs Hertfordshire 2026 | Full Pricing Guide',
  description: 'How much do driveway gates cost in Hertfordshire in 2026? Real installed prices for electric sliding gates, swing gates, wooden gates, metal gates, automation retrofits, and repairs.',
  alternates: { canonical: `${siteConfig.url}/costs/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/costs/`,
    title: 'Driveway Gate Costs Hertfordshire 2026',
    description: 'Real installed prices for every type of driveway gate in Hertfordshire.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <CostsHubClient />;
}
