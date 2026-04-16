// app/location/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import LocationHubClient from './LocationHubClient';

export const metadata: Metadata = {
  title: 'Hertfordshire Locations | Find Gate Installers Near You',
  description: '75 towns covered across Hertfordshire. Find vetted driveway gate installers in St Albans, Harpenden, Watford, Hertford, Welwyn Garden City, Hitchin, and every area in between.',
  alternates: { canonical: `${siteConfig.url}/location/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/location/`,
    title: 'Hertfordshire Locations | Driveway Gates Hertfordshire',
    description: '75 towns covered across Hertfordshire. Find vetted driveway gate installers near you.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <LocationHubClient />;
}
