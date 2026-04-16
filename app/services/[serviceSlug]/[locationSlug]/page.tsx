// app/services/[serviceSlug]/[locationSlug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import ServiceLocationClient from './ServiceLocationClient';

interface Props {
  params: { serviceSlug: string; locationSlug: string };
}

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const service of services) {
    for (const city of allCities) {
      params.push({ serviceSlug: service.slug, locationSlug: toSlug(city) });
    }
  }
  return params;
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) return {};

  const title = `${service.title} in ${cityName} | Vetted Hertfordshire Installers`;
  const description = `Find vetted ${service.title.toLowerCase()} specialists in ${cityName}, Hertfordshire. Free site survey, written quotes, no obligation. Compare up to 3 installers.`;
  const url = `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`;

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
      images: [{ url: `${siteConfig.url}${service.image}`, width: 1200, height: 630, alt: `${service.title} in ${cityName}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}${service.image}`],
    },
  };
}

export default function Page({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  return <ServiceLocationClient params={params} />;
}
