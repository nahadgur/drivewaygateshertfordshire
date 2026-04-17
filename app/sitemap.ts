// app/sitemap.ts
// AUTO-EXPANDING DRIP-FEED SITEMAP
// Regenerates daily on Vercel via ISR. Each fortnight, a new batch of pages
// is added automatically. No manual edits needed.
//
// Schedule:
//   Week 0-1:   Core pages (static + 6 services + 12 priority locations + costs + guides + planning + blog)  ~64 URLs
//   Week 2-3:   + remaining 63 locations                                                                    ~127 URLs
//   Week 4-5:   + electric-sliding-gates x 75 cities                                                        ~202 URLs
//   Week 6-7:   + electric-swing-gates x 75 cities                                                          ~277 URLs
//   Week 8-9:   + wooden-driveway-gates x 75 cities                                                         ~352 URLs
//   Week 10-11: + metal-driveway-gates x 75 cities                                                          ~427 URLs
//   Week 12-13: + automated-gate-systems x 75 cities                                                        ~502 URLs
//   Week 14+:   + gate-repair-and-maintenance x 75 cities                                                   ~577 URLs (full)
//
// To reset the schedule (e.g. after a redesign), change LAUNCH_DATE below.

import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { PLANNING_REGIONS } from '@/data/planning';
import { COST_GUIDES } from '@/data/costs';
import { COMPARISON_GUIDES } from '@/data/guides';
import { blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';

// Regenerate sitemap once per day on Vercel (ISR)
export const revalidate = 86400;

// Set this to the date you deploy the metadata-fix build
const LAUNCH_DATE = new Date('2026-04-18T00:00:00Z');

// Priority locations included from day one
const WAVE_1_LOCATIONS = [
  'St Albans', 'Harpenden', 'Watford', 'Hertford', 'Radlett', 'Berkhamsted',
  'Welwyn Garden City', 'Hitchin', 'Bishops Stortford', 'Potters Bar', 'Ware', 'Tring',
];

// Service x location drip order — one service batch per wave
const SERVICE_DRIP_ORDER = [
  'electric-sliding-gates',
  'electric-swing-gates',
  'wooden-driveway-gates',
  'metal-driveway-gates',
  'automated-gate-systems',
  'gate-repair-and-maintenance',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const weeksSinceLaunch = Math.floor((now.getTime() - LAUNCH_DATE.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const allCities = Object.values(LOCATIONS).flat();

  // ── WAVE 1 (always included): core pages ──
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/costs/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/guides/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/planning-permissions/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-we-match-you/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/join-our-network/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  // Service hub pages (always)
  for (const s of services) {
    entries.push({ url: `${base}/services/${s.slug}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 });
  }

  // 12 priority locations (always)
  for (const city of WAVE_1_LOCATIONS) {
    entries.push({ url: `${base}/location/${toSlug(city)}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 });
  }

  // Cost guides (always)
  for (const c of COST_GUIDES) {
    entries.push({ url: `${base}/costs/${c.slug}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
  }

  // Comparison guides (always)
  for (const g of COMPARISON_GUIDES) {
    entries.push({ url: `${base}/guides/${g.slug}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
  }

  // Planning regions (always)
  for (const r of PLANNING_REGIONS) {
    entries.push({ url: `${base}/planning-permissions/${r.slug}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
  }

  // Blog posts (always)
  for (const a of blogArticles) {
    entries.push({ url: `${base}/blog/${a.slug}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 });
  }

  // ── WAVE 2 (week 2+): remaining 63 locations ──
  if (weeksSinceLaunch >= 2) {
    const wave1Set = new Set(WAVE_1_LOCATIONS);
    for (const city of allCities) {
      if (!wave1Set.has(city)) {
        entries.push({ url: `${base}/location/${toSlug(city)}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 });
      }
    }
  }

  // ── WAVES 3-8 (week 4+): service x location pages, one service per 2-week wave ──
  for (let i = 0; i < SERVICE_DRIP_ORDER.length; i++) {
    const waveStart = 4 + (i * 2); // week 4, 6, 8, 10, 12, 14
    if (weeksSinceLaunch >= waveStart) {
      const svcSlug = SERVICE_DRIP_ORDER[i];
      for (const city of allCities) {
        entries.push({
          url: `${base}/services/${svcSlug}/${toSlug(city)}/`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.5,
        });
      }
    }
  }

  return entries;
}
