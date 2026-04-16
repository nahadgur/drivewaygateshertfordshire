// app/planning-permissions/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import PlanningHubClient from './PlanningHubClient';

export const metadata: Metadata = {
  title: 'Planning Permission for Driveway Gates in Hertfordshire',
  description: 'Do you need planning permission for driveway gates in Hertfordshire? Guidance on Green Belt, Chilterns AONB, conservation areas, and permitted development across all ten Hertfordshire councils.',
  alternates: { canonical: `${siteConfig.url}/planning-permissions/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/planning-permissions/`,
    title: 'Planning Permission for Driveway Gates in Hertfordshire',
    description: 'Green Belt, AONB, conservation area guidance for all ten Hertfordshire councils.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <PlanningHubClient />;
}
