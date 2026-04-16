// app/costs/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COST_GUIDES, getCostBySlug } from '@/data/costs';
import { siteConfig } from '@/data/site';
import CostGuideClient from './CostGuideClient';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return COST_GUIDES.map(c => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getCostBySlug(params.slug);
  if (!guide) return {};

  const title = `${guide.service} Cost in Hertfordshire 2026 | Pricing Guide`;
  const description = `How much do ${guide.service.toLowerCase()} cost in Hertfordshire? Typical range ${guide.typicalRange}. Full breakdown of costs, what is included, and factors that affect the price.`;
  const url = `${siteConfig.url}/costs/${guide.slug}/`;

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
  const guide = getCostBySlug(params.slug);
  if (!guide) notFound();
  return <CostGuideClient params={params} />;
}
