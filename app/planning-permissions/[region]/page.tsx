// app/planning-permissions/[region]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PLANNING_REGIONS } from '@/data/planning';
import { siteConfig } from '@/data/site';
import PlanningClient from './PlanningClient';

interface Props {
  params: { region: string };
}

export function generateStaticParams() {
  return PLANNING_REGIONS.map(r => ({ region: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const region = PLANNING_REGIONS.find(r => r.slug === params.region);
  if (!region) return {};

  const title = `Planning Permission for Driveway Gates in ${region.name}`;
  const description = `Planning rules for driveway gates in ${region.name}. Conservation areas, Green Belt, AONB guidance, council contacts, and what your installer needs to know before starting work.`;
  const url = `${siteConfig.url}/planning-permissions/${region.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: 'en_GB',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page({ params }: Props) {
  const region = PLANNING_REGIONS.find(r => r.slug === params.region);
  if (!region) notFound();
  return <PlanningClient params={params} />;
}
