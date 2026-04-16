// app/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Driveway Gates Hertfordshire | Find Trusted Gate Installers Across Hertfordshire',
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/`,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/icon-512x512.png`, width: 512, height: 512, alt: siteConfig.name }],
  },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: [`${siteConfig.url}/icon-512x512.png`] },
};

export default function Page() {
  return <HomeClient />;
}
