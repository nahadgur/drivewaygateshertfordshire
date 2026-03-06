// data/locations.ts - Driveway Gates Hertfordshire

export const LOCATIONS: Record<string, string[]> = {
  'West Hertfordshire': [
    'St Albans', 'Harpenden', 'Berkhamsted', 'Tring', 'Hemel Hempstead',
    'Kings Langley', 'Bovingdon', 'Redbourn', 'Wheathampstead', 'Markyate',
    'Flamstead', 'Gaddesden', 'Aldbury', 'Wigginton', 'Chipperfield',
  ],
  'South Hertfordshire': [
    'Radlett', 'Bushey', 'Potters Bar', 'Borehamwood', 'Elstree',
    'Shenley', 'London Colney', 'South Mimms', 'Ridge', 'Aldenham',
    'Watford', 'Rickmansworth', 'Chorleywood', 'Croxley Green', 'Abbots Langley',
  ],
  'Central Hertfordshire': [
    'Welwyn Garden City', 'Hatfield', 'Welwyn', 'Digswell', 'Brookmans Park',
    'Cuffley', 'Essendon', 'Lemsford', 'Stanborough', 'Woolmer Green',
    'Knebworth', 'Codicote', 'Kimpton', 'Whitwell', 'Datchworth',
  ],
  'East Hertfordshire': [
    'Hertford', 'Ware', 'Bishops Stortford', 'Sawbridgeworth', 'Much Hadham',
    'Little Hadham', 'Stanstead Abbotts', 'Great Amwell', 'Bengeo', 'Watton-at-Stone',
    'Puckeridge', 'Buntingford', 'Braughing', 'Standon', 'Hunsdon',
  ],
  'North Hertfordshire': [
    'Hitchin', 'Letchworth', 'Baldock', 'Royston', 'Stevenage',
    'Stotfold', 'Ashwell', 'Pirton', 'Ickleford', 'St Ippolyts',
    'Weston', 'Graveley', 'Walkern', 'Benington', 'Ardeley',
  ],
};

export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}

export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
