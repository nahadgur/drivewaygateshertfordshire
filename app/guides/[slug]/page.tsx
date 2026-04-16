// app/guides/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COMPARISON_GUIDES, getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import GuideClient from './GuideClient';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return COMPARISON_GUIDES.map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  const title = guide.title;
  const description = guide.summary;
  const url = `${siteConfig.url}/guides/${guide.slug}/`;

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
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();
  return <GuideClient params={params} />;
}
