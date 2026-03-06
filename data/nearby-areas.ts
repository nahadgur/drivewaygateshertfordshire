// data/nearby-areas.ts - Driveway Gates Hertfordshire

export const NEARBY_AREAS: Record<string, string[]> = {
  'st-albans': ['Harpenden', 'Redbourn', 'London Colney', 'Wheathampstead', 'Sandridge', 'Park Street'],
  'harpenden': ['St Albans', 'Wheathampstead', 'Redbourn', 'Kimpton', 'Flamstead', 'Batford'],
  'berkhamsted': ['Tring', 'Hemel Hempstead', 'Bovingdon', 'Aldbury', 'Wigginton', 'Northchurch'],
  'hertford': ['Ware', 'Bengeo', 'Great Amwell', 'Essendon', 'Bayford', 'Hertingfordbury'],
  'hitchin': ['Letchworth', 'Ickleford', 'Pirton', 'St Ippolyts', 'Preston', 'Gosmore'],
  'radlett': ['Shenley', 'Borehamwood', 'Elstree', 'Aldenham', 'Colney Heath', 'London Colney'],
  'bishops-stortford': ['Sawbridgeworth', 'Much Hadham', 'Little Hadham', 'Standon', 'Thorley', 'Birchanger'],
  'welwyn-garden-city': ['Hatfield', 'Welwyn', 'Digswell', 'Brookmans Park', 'Lemsford', 'Stanborough'],
  'watford': ['Bushey', 'Croxley Green', 'Rickmansworth', 'Abbots Langley', 'Garston', 'Oxhey'],
  'potters-bar': ['Brookmans Park', 'Cuffley', 'South Mimms', 'Northaw', 'Essendon', 'Barnet'],
  'tring': ['Berkhamsted', 'Aldbury', 'Wigginton', 'Marsworth', 'Long Marston', 'Wilstone'],
  'ware': ['Hertford', 'Great Amwell', 'Stanstead Abbotts', 'Hunsdon', 'Widford', 'Wareside'],
  'hemel-hempstead': ['Berkhamsted', 'Kings Langley', 'Bovingdon', 'Leverstock Green', 'Flamstead', 'Redbourn'],
  'stevenage': ['Knebworth', 'Walkern', 'Graveley', 'Weston', 'Benington', 'Aston'],
  'rickmansworth': ['Chorleywood', 'Croxley Green', 'Watford', 'Sarratt', 'Loudwater', 'Batchworth'],
};

export function getNearbyAreas(citySlug: string): string[] {
  return NEARBY_AREAS[citySlug] || [];
}
