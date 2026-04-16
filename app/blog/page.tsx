// app/blog/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import BlogHubClient from './BlogHubClient';

export const metadata: Metadata = {
  title: 'Driveway Gate Blog | Advice for Hertfordshire Homeowners',
  description: 'Expert articles on driveway gate costs, materials, planning permission, security, maintenance, and installation across Hertfordshire.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/blog/`,
    title: 'Driveway Gate Blog | Driveway Gates Hertfordshire',
    description: 'Expert articles on driveway gate costs, materials, planning, and installation.',
    siteName: siteConfig.name,
    locale: 'en_GB',
  },
};

export default function Page() {
  return <BlogHubClient />;
}
