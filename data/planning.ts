// data/planning.ts

export interface PlanningRegion {
  slug: string;
  name: string;
  regionKey: string;
  councils: string[];
  conservationNotes: string;
  aonbNotes: string;
  typicalFees: string;
  applicationPortal: string;
}

export const PLANNING_REGIONS: PlanningRegion[] = [
  {
    slug: 'west-hertfordshire',
    name: 'West Hertfordshire',
    regionKey: 'West Hertfordshire',
    councils: ['Dacorum Borough Council', 'St Albans City and District Council', 'Three Rivers District Council'],
    conservationNotes: 'Large parts of St Albans, Harpenden, Berkhamsted, and Tring sit within designated conservation areas. Gates facing a highway within these areas often require planning permission regardless of height, because permitted development rights are restricted.',
    aonbNotes: 'Significant portions of this region fall within the Chilterns Area of Outstanding Natural Beauty (AONB). Material choice, finish, and sightlines to adjacent countryside are assessed by the local planning officer and reversible designs in timber or muted powder-coated metal tend to be received more favourably than bright painted or galvanised finishes.',
    typicalFees: 'A householder planning application in Dacorum, St Albans, or Three Rivers currently costs in the region of £258 as of early 2026. Fees are set nationally and are subject to change — always confirm the current fee on the council\'s website before submitting.',
    applicationPortal: 'Applications are submitted via the Planning Portal (planningportal.co.uk) and routed to the relevant council.',
  },
  {
    slug: 'south-hertfordshire',
    name: 'South Hertfordshire',
    regionKey: 'South Hertfordshire',
    councils: ['Hertsmere Borough Council', 'Watford Borough Council', 'Three Rivers District Council'],
    conservationNotes: 'Radlett, Elstree, Bushey, and parts of Rickmansworth contain conservation areas with strict boundary treatment controls. The Hertsmere and Three Rivers planning teams both apply article 4 directions in certain areas that remove permitted development rights — meaning a gate that would be permitted elsewhere may require full planning in these streets.',
    aonbNotes: 'Southern edges of Chorleywood and parts of Rickmansworth fall within the Chilterns AONB. The same material and finish considerations apply as in West Hertfordshire.',
    typicalFees: 'Householder planning applications in Hertsmere, Watford, and Three Rivers are priced in line with the national householder fee. Confirm the current figure with the relevant council before submitting.',
    applicationPortal: 'Submitted via the Planning Portal; applications routed to Hertsmere, Watford, or Three Rivers depending on the property address.',
  },
  {
    slug: 'central-hertfordshire',
    name: 'Central Hertfordshire',
    regionKey: 'Central Hertfordshire',
    councils: ['Welwyn Hatfield Borough Council', 'East Hertfordshire District Council'],
    conservationNotes: 'Welwyn, Knebworth, Codicote, and parts of Brookmans Park contain conservation areas with particular sensitivity around Welwyn Garden City\'s original Ebenezer Howard-planned streets. Design coherence with the surrounding era and setting is expected.',
    aonbNotes: 'This region is largely outside AONB designations but green belt constraints apply widely, and green belt openness is a material consideration in gate height and solidity decisions.',
    typicalFees: 'Welwyn Hatfield and East Herts apply the standard national householder application fee. Check the council website for the current figure.',
    applicationPortal: 'Planning Portal is the standard submission route for both councils.',
  },
  {
    slug: 'east-hertfordshire',
    name: 'East Hertfordshire',
    regionKey: 'East Hertfordshire',
    councils: ['East Hertfordshire District Council'],
    conservationNotes: 'Hertford, Ware, Bishops Stortford, and Sawbridgeworth all contain conservation areas with tight controls on street-facing boundaries. Hertford in particular has multiple overlapping designations and an active conservation area advisory committee.',
    aonbNotes: 'East Hertfordshire is not within an AONB but contains a significant number of listed buildings. Properties adjacent to or within the curtilage of a listed building typically require listed building consent in addition to planning permission for any gate installation.',
    typicalFees: 'East Herts applies the standard national householder planning application fee. Listed building consent is free but must be applied for separately.',
    applicationPortal: 'Submit via the Planning Portal. Listed building consent is submitted through the same portal as a separate application.',
  },
  {
    slug: 'north-hertfordshire',
    name: 'North Hertfordshire',
    regionKey: 'North Hertfordshire',
    councils: ['North Hertfordshire District Council', 'Stevenage Borough Council'],
    conservationNotes: 'Hitchin, Letchworth, Baldock, and Royston contain some of the most carefully protected streetscapes in the county. Letchworth in particular is managed under the Letchworth Garden City Heritage Foundation scheme of management, which imposes design controls on top of ordinary planning law.',
    aonbNotes: 'Small portions of the district touch the Chilterns AONB in the west, and a larger area near Hitchin borders the Chilterns National Landscape. Material and finish sensitivity applies close to these boundaries.',
    typicalFees: 'North Herts and Stevenage apply the standard national householder planning fee. Letchworth properties may face additional Heritage Foundation design review outside the statutory planning process.',
    applicationPortal: 'Planning applications are submitted via the Planning Portal. Letchworth residents should also contact the Heritage Foundation directly.',
  },
];

export const UNIVERSAL_RULES = [
  { rule: 'Gates fronting a highway used by vehicles must not exceed 1 metre in height without planning permission.', detail: 'This is the headline rule most homeowners encounter. Any gate taller than 1 metre that opens onto a road used by cars requires a householder planning application.' },
  { rule: 'Gates not fronting a highway can be up to 2 metres without planning permission.', detail: 'If the gate opens onto a private drive, alley, or rear boundary away from a vehicle road, the permitted height rises to 2 metres.' },
  { rule: 'Conservation areas, listed buildings, and article 4 directions remove permitted development rights.', detail: 'In any of these cases the height allowances above do not apply and planning permission is almost always required. Always check the council planning map before committing to a design.' },
  { rule: 'Automation does not itself trigger planning permission.', detail: 'Motorising an existing gate that already complies with height rules does not normally require a separate application, though BS EN 12453 safety compliance is a separate legal obligation under CE / UKCA rules.' },
];
