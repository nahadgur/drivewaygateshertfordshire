// app/join-our-network/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import JoinNetworkClient from './JoinNetworkClient';

export const metadata: Metadata = {
  title: 'Join Our Installer Network | Driveway Gates Hertfordshire',
  description: 'Are you a vetted gate installation specialist in Hertfordshire? Join our network to receive qualified homeowner enquiries matched to your area and expertise.',
  alternates: { canonical: `${siteConfig.url}/join-our-network/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/join-our-network/`,
    title: 'Join Our Installer Network | Driveway Gates Hertfordshire',
    description: 'Join our Hertfordshire gate installer network and receive qualified homeowner enquiries.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <JoinNetworkClient />;
}
