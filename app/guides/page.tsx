// app/guides/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import GuidesHubClient from './GuidesHubClient';

export const metadata: Metadata = {
  title: 'Driveway Gate Guides | Comparisons and Buying Advice',
  description: 'Side-by-side comparisons of gate types, materials, and motor systems for Hertfordshire homeowners. Hardwood vs softwood, aluminium vs steel, sliding vs swing, and more.',
  alternates: { canonical: `${siteConfig.url}/guides/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/guides/`,
    title: 'Driveway Gate Guides | Driveway Gates Hertfordshire',
    description: 'Side-by-side comparisons and buying advice for Hertfordshire homeowners.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <GuidesHubClient />;
}
