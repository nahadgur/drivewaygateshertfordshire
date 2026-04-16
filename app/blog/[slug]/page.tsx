// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug, getAllSlugs } from '@/data/blog';
import { siteConfig } from '@/data/site';
import BlogPostClient from './BlogPostClient';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const title = article.title;
  const description = article.metaDescription;
  const url = `${siteConfig.url}/blog/${article.slug}/`;

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
      images: [{ url: `${siteConfig.url}/icon-512x512.png`, width: 512, height: 512, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteConfig.url}/icon-512x512.png`] },
  };
}

export default function Page({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  return <BlogPostClient params={params} />;
}
