# Driveway Gates Hertfordshire — silo plan

Live site, reconciliation and gap-fill. UK English, £ GBP; the lead form is the only
CTA. Titles are provisional — SERP/PAA-validate before writing. Canonical host uses `www.`.

## Local focus (what this site is built to own)

1. **Chilterns National Landscape (AONB)** across Dacorum/Three Rivers/North Herts —
   Article 2(3) land where Article 4 can strip permitted-development rights.
2. **The 10-authority planning patchwork** — St Albans + East Herts + Dacorum +
   Three Rivers + Welwyn Hatfield + Broxbourne + Hertsmere + North Herts + Stevenage
   + Watford, each with different conservation/Article 4 rules.
3. **St Albans ~19 conservation areas + 800+ listed buildings** — replica-vs-
   alteration gate-consent rule; dense period/Victorian-villa stock (St Albans,
   Harpenden, Hertford, Berkhamsted).
4. **Green Belt + grey-belt development pressure** — new gated executive estates;
   rear-access vulnerability of new plots.
5. **Long no-mains farm-track drives** — running mains 100m+ vs solar/battery.
6. **Affluent rail-commuter belt** — time-poor owners; app/GSM intercom, courier
   access; high property values load the "does a gate add value" question.

## Pillars (live — preserve)

`/services/electric-sliding-gates/`, `/electric-swing-gates/`,
`/wooden-driveway-gates/`, `/metal-driveway-gates/`, `/automated-gate-systems/`,
`/gate-repair-and-maintenance/`. ~75 towns, ~891 URLs. Note the existing standalone
top-level hubs `/costs/` and `/planning-permissions/` — feed new cost/planning
content into those rather than duplicating into `/blog/`.

## Sub-hubs — normalized to 8 (one per pillar, two on the lead pillar, plus the flagship)

Lead pillar = Wooden (period/conservation styling, where the St Albans conservation
areas and Chilterns design rules live). Flagship = the cross-cutting planning guide.
Five guides already exist; map each up and add three new.

1. Sliding → `sliding-vs-swing` (existing)
2. Swing → `underground-vs-ram-gate-motors` (existing)
3. Wooden (lead, x2) → `hardwood-vs-softwood` (existing) +
   `period-property-gate-styles-conservation-areas` (new)
4. Metal → `aluminium-vs-steel` (existing)
5. Automated → `manual-vs-automated` (existing)
6. Repair → `electric-gate-servicing-checklist` (new)
7. Flagship (cross-cutting) → `gate-planning-permission-hertfordshire` (new;
   Chilterns AONB + the 10-council patchwork)

Demoted to spokes: solar-vs-mains, intercom-access-control, cantilever-vs-tracked.

## Priority spokes — lead clusters first

**Planning / conservation (flagship):** gates in the Chilterns National Landscape
(Article 2(3)/Article 4); the 10-council patchwork (do PD rights differ by
district); replacing a gate in a St Albans conservation area (replica vs
alteration); wrought-iron gates on a listed building.

**No-mains power:** running power to a gate down a long farm drive; solar vs trenching
on Green Belt plots; battery backup for rural feeders / power cuts.

**Commuter-belt access:** letting a delivery driver through an electric gate; app/GSM
video intercom for households out all day.

**Security:** most secure gate for an isolated Green Belt plot (rear-access
vulnerability; Herts Constabulary rural-crime context).

## One query per page (no internal cannibalisation)

Every guide and spoke owns exactly one reserved primary query; no two pages target
the same query. This site carries several generic-national legacy posts (lifespan,
added-value, worth-it, wooden-vs-metal, gate-width, sloped-driveway, motor-brands,
wooden-gate-care): keep only the ones it can genuinely localise (value/worth via
high commuter property values) and 301 the rest — the biggest single de-dup lever here.

## Build order

1. Chilterns/planning flagship cluster.
2. No-mains power + commuter-access clusters.
3. Generic-legacy-post cleanup (localise or 301 the ~8 national posts).
4. Location pages localised last.

## Status

6 pillars live; 5 guides live + 3 new = 8 sub-hubs (1 per pillar, 2 on Wooden, +
planning flagship); 20 blog posts live (~8 generic-national). New: ~10
differentiated spokes.
