// app/services/[serviceSlug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import ServiceClient from './ServiceClient';

interface Props {
  params: { serviceSlug: string };
}

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};

  const title = `${service.title} Hertfordshire | Vetted Installers, Free Quotes`;
  const description = `${service.description} Compare up to 3 vetted ${service.title.toLowerCase()} installers across Hertfordshire. Free site surveys, no obligation.`;
  const url = `${siteConfig.url}/services/${service.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: 'en_GB',
      images: [{ url: `${siteConfig.url}${service.image}`, width: 1200, height: 630, alt: `${service.title} in Hertfordshire` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteConfig.url}${service.image}`] },
  };
}

export default function Page({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();
  return <ServiceClient params={params} />;
}
