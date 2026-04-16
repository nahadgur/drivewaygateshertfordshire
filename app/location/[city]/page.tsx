// app/location/[city]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import LocationClient from './LocationClient';

interface Props {
  params: { city: string };
}

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.map(city => ({ city: toSlug(city) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cityName = getCityBySlug(params.city);
  if (!cityName) return {};

  const title = `Driveway Gates ${cityName} | Vetted Installers, Free Quotes`;
  const description = `Compare vetted driveway gate installers in ${cityName}, Hertfordshire. Electric sliding gates, swing gates, wooden gates, metal gates, automation and repairs. Free site surveys, no obligation.`;
  const url = `${siteConfig.url}/location/${params.city}/`;

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
      images: [{ url: `${siteConfig.url}/icon-512x512.png`, width: 512, height: 512, alt: `Driveway Gates ${cityName}` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteConfig.url}/icon-512x512.png`] },
  };
}

export default function Page({ params }: Props) {
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();
  return <LocationClient params={params} />;
}
