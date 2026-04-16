// app/sitemap.ts
// STAGED SITEMAP STRATEGY
// Wave 1 (current): static pages, 6 services, 12 priority locations, costs, guides, planning, blog
// Wave 2 (when Wave 1 hits ~80% indexed): add remaining 63 locations
// Wave 3 (when Wave 2 settles): add service x location pages in batches of 50-75
// Monitor in GSC > Pages > Indexing. Expand only when "Discovered - not indexed" drops below 20%.

import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { PLANNING_REGIONS } from '@/data/planning';
import { COST_GUIDES } from '@/data/costs';
import { COMPARISON_GUIDES } from '@/data/guides';
import { blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';

// Priority locations — the 12 highest-population / highest-search-volume towns
const WAVE_1_LOCATIONS = [
  'St Albans', 'Harpenden', 'Watford', 'Hertford', 'Radlett', 'Berkhamsted',
  'Welwyn Garden City', 'Hitchin', 'Bishops Stortford', 'Potters Bar', 'Ware', 'Tring',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/costs/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/guides/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/planning-permissions/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-we-match-you/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/join-our-network/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = WAVE_1_LOCATIONS.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const costPages: MetadataRoute.Sitemap = COST_GUIDES.map(c => ({
    url: `${base}/costs/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = COMPARISON_GUIDES.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const planningPages: MetadataRoute.Sitemap = PLANNING_REGIONS.map(r => ({
    url: `${base}/planning-permissions/${r.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map(a => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // WAVE 1 TOTAL: 9 static + 6 services + 12 locations + 6 costs + 5 guides + 5 planning + 20 blog = ~63 URLs
  return [...staticPages, ...servicePages, ...locationPages, ...costPages, ...guidePages, ...planningPages, ...blogPages];
}
