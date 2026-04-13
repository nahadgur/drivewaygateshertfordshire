// data/guides.ts

export interface GuideSection {
  heading: string;
  body: string;
}

export interface ComparisonGuide {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  optionA: { name: string; pros: string[]; cons: string[]; bestFor: string };
  optionB: { name: string; pros: string[]; cons: string[]; bestFor: string };
  verdict: string;
  sections: GuideSection[];
  relatedServices: string[];
}

export const COMPARISON_GUIDES: ComparisonGuide[] = [
  {
    slug: 'hardwood-vs-softwood-driveway-gates',
    title: 'Hardwood vs Softwood Driveway Gates: Which Should You Choose?',
    shortTitle: 'Hardwood vs Softwood',
    summary: 'The choice between hardwood and softwood timber is the single biggest factor in how long a wooden driveway gate lasts and how much maintenance it demands. Hardwood costs more upfront but pays back over decades; softwood is cheaper to start but rarely a long-term solution in the British climate.',
    optionA: {
      name: 'Hardwood (Iroko, Oak, Idigbo, Sapele)',
      pros: ['Lifespan of 25 to 50+ years with basic maintenance', 'Natural resistance to rot and insect damage', 'Ages gracefully — oak silvers beautifully when left untreated', 'Holds ironmongery firmly without splitting', 'Higher resale and kerb appeal value'],
      cons: ['2–3x the upfront cost of softwood', 'Heavier, which limits automation options and may need stronger hinges or piers', 'Lead times can run 6–10 weeks for good timber', 'Ethical sourcing matters — always ask for FSC certification'],
      bestFor: 'Permanent installations, conservation areas, listed buildings, AONB properties, and anyone intending to stay in the property long-term.',
    },
    optionB: {
      name: 'Softwood (Treated Redwood, Pine, Spruce)',
      pros: ['Low upfront cost (£1,200–£2,500 for a pair typically)', 'Lighter weight makes automation easier and cheaper', 'Shorter lead times, often 2–4 weeks', 'Easy to paint or re-stain in any colour'],
      cons: ['Lifespan typically 8–15 years even with good maintenance', 'Requires re-treatment every 2–3 years', 'Prone to warping, swelling, and twisting in wet British weather', 'Ironmongery tends to loosen over time as wood moves', 'Visible knots and sap pockets limit high-end design options'],
      bestFor: 'Short-term holdings, budget-constrained projects, rental properties, or designs intended to be painted where timber grain is not visible.',
    },
    verdict: 'For most Hertfordshire homeowners on a permanent property, hardwood is the honest recommendation. The maintenance saving alone over 15 years closes the cost gap, and the resale appeal is measurably higher. Choose softwood only if the budget is genuinely fixed or if the gate is intended as a 10-year solution you fully expect to replace.',
    sections: [
      { heading: 'The climate question', body: 'Hertfordshire weather swings from summer heat to wet winters. Softwood absorbs moisture, swells, then shrinks again as it dries — this cycle is what causes the warping and ironmongery loosening most homeowners eventually see. Hardwood is denser, absorbs less moisture, and moves less seasonally. That stability is why a well-made hardwood gate still closes cleanly 20 years on.' },
      { heading: 'Maintenance reality check', body: 'Softwood needs re-staining or re-treating roughly every 24–36 months to remain weatherproof. Over 15 years that is five to seven treatment cycles at £150–£300 each plus your time. Hardwood can be left untreated to silver naturally, or oiled annually if a richer colour is wanted. The maintenance cost difference closes most of the initial price gap.' },
      { heading: 'Automation compatibility', body: 'Heavier hardwood gates need motors rated for the weight. An oak gate pair may weigh 120–180 kg, which rules out light-duty ram kits. Plan automation from the start rather than retrofitting, as motor upgrades on hardwood are expensive.' },
      { heading: 'Sourcing ethics', body: 'Only buy timber with FSC or PEFC certification. Iroko and sapele from uncertified sources fund deforestation. A good Hertfordshire fabricator should volunteer the certification without being asked — if they cannot, walk away.' },
    ],
    relatedServices: ['wooden-driveway-gates'],
  },
  {
    slug: 'aluminium-vs-steel-driveway-gates',
    title: 'Aluminium vs Steel Driveway Gates: The Real Trade-Offs',
    shortTitle: 'Aluminium vs Steel',
    summary: 'Aluminium and steel are the two workhorses of metal driveway gates. Aluminium is lighter, rustproof, and modern in appearance; steel is stronger, cheaper pound-for-pound, and handles classical ornamental designs better. The right choice depends far more on design intent and exposure than on either metal being objectively better.',
    optionA: {
      name: 'Aluminium',
      pros: ['Will never rust, even in coastal or high-humidity locations', 'Roughly one-third the weight of steel — easier on motors and hinges', 'Powder-coat finishes last 15–25 years with no maintenance', 'Modern, clean aesthetic suits contemporary new-builds and slab-style gates', 'Recyclable at end of life'],
      cons: ['30–50% more expensive than equivalent steel gates', 'Softer metal — dents rather than bends under impact', 'Limited to welded or bolted construction — cannot be hand-forged', 'Structural profiles are chunkier than steel for the same strength'],
      bestFor: 'Contemporary properties, new builds, automated sliding gates where weight matters, and exposed sites where rust would be a problem.',
    },
    optionB: {
      name: 'Steel (Mild and Wrought)',
      pros: ['Lower material cost per kg', 'Can be hand-forged into traditional ornamental designs — scrollwork, spear tops, twisted bars', 'Stronger impact resistance — bends rather than dents', 'Easier to repair locally if damaged', 'Galvanised-and-powder-coated finish gives 20–30 years of service'],
      cons: ['Will rust if finish is compromised — chips need touching up promptly', 'Heavy (120–300 kg per gate pair), demands robust motors and piers', 'Cheap mild steel gates without proper galvanising can corrode in under 10 years', 'Welded steel cannot replicate traditional forge aesthetics'],
      bestFor: 'Traditional, period, and listed properties, ornamental designs with scrollwork or decorative tops, and anywhere a classic Hertfordshire country look is wanted.',
    },
    verdict: 'Match the metal to the architecture. Contemporary home with clean lines and a sliding gate: aluminium. Period cottage, rectory, or Victorian villa wanting a pair of wrought iron swing gates with scrollwork: hand-forged steel. The worst outcome is mismatching — aluminium on a period home often looks wrong regardless of finish.',
    sections: [
      { heading: 'The rust question, honestly', body: 'Steel rusts. This is not a design flaw, it is chemistry. What matters is whether the finish prevents it reaching the metal. Hot-dip galvanising followed by polyester powder coating is the industry standard and gives 20–30 years of protection in most Hertfordshire locations. Paint-only steel gates are a false economy.' },
      { heading: 'Weight and automation', body: 'An aluminium slider at 4 metres weighs roughly 80 kg. A galvanised steel slider the same size weighs 180–220 kg. That weight difference can be the deciding factor on which motor you need and therefore thousands of pounds in motor cost over the life of the gate.' },
      { heading: 'Forge work vs fabrication', body: 'Hand-forged wrought iron is a specific craft — heated, hammered, and shaped by a blacksmith. Most "wrought iron" gates sold today are mild steel bent cold in a press, which looks acceptable but lacks the character of real forge work. If you want true ornamental metalwork, budget accordingly and ask to see the forge.' },
      { heading: 'Finish options', body: 'Both metals accept polyester powder coating in any RAL colour. Aluminium can also be anodised for a matt metallic finish that never needs repainting. Steel can be hot-galvanised to a zinc finish (industrial look) or galvanised-then-powder-coated (the domestic standard).' },
    ],
    relatedServices: ['metal-driveway-gates', 'electric-sliding-gates'],
  },
  {
    slug: 'underground-vs-ram-gate-motors',
    title: 'Underground vs Ram Arm Motors: Which Automation Is Right?',
    shortTitle: 'Underground vs Ram Motors',
    summary: 'Two dominant motor technologies power swing gates across Hertfordshire: underground motors buried in the ground at the hinge, and ram arm motors bolted visibly to the pier. Underground is more discreet and premium; ram arm is cheaper and easier to install or service. Neither is universally better.',
    optionA: {
      name: 'Underground Motors',
      pros: ['Almost invisible once installed — only a small cover plate shows', 'Gates appear to open by themselves, which is visually impressive', 'Motor is protected from direct weather and vandalism', 'Suits heritage properties where visible ironmongery would be wrong'],
      cons: ['Significantly more expensive — typically £1,200–£2,500 per pair for motors alone', 'Requires excavation and a concrete foundation box at the hinge point', 'Service access means digging up the cover plate', 'Water ingress is the enemy — drainage must be done properly or the motor fails', 'Retrofit to an existing gate means removing the gate, digging the foundation, and rehanging'],
      bestFor: 'Heritage properties, conservation areas, high-value homes where visible motors would spoil the aesthetic, and new installations where the foundation work is done before paving.',
    },
    optionB: {
      name: 'Ram Arm Motors',
      pros: ['Much cheaper — £500–£900 per pair for good-quality motors', 'Simple to install — typically a one-day job on existing gates', 'Easy to service or replace — just unbolt and swap', 'Arm design works with almost any pier width and gate type', 'Less affected by ground conditions or drainage'],
      cons: ['Visible on the pier, which some homeowners dislike', 'Arm projects into the driveway or property and occupies space', 'Exposed to weather and occasionally vandalism', 'Heavy hardwood or wrought iron gates may need articulated arms instead of straight rams (£700–£1,200)'],
      bestFor: 'Most standard installations, retrofit jobs, budget-conscious projects, and properties where aesthetics are less sensitive.',
    },
    verdict: 'For retrofits on existing gates, ram arm motors are almost always the right answer — they are cheaper, faster to install, and easier to service. For new installations on premium or heritage properties where the motor will be specified from day one, underground motors justify their cost through the cleaner finish. The decision should be made before the piers are built, not after.',
    sections: [
      { heading: 'Drainage is the hidden cost', body: 'Underground motors fail when water sits in the foundation box. A properly installed system has a drainage channel, a sump, and ideally a soakaway connection. Skip this and the motor will flood within two or three wet winters. Any quote for underground motors that does not mention drainage explicitly is incomplete.' },
      { heading: 'Force testing (both types)', body: 'Under BS EN 12453 every automated gate installation must be force-tested at commissioning, regardless of motor type. This is a legal obligation, not optional. Reputable installers carry a force gauge and provide a printed test certificate. If they do not, the install is not compliant.' },
      { heading: 'Brand recommendations', body: 'The mainstream specialist brands — BFT, Came, FAAC, Nice — all make good motors in both formats. Avoid unbranded or rebadged units from general electrical suppliers, as spares become unobtainable within 5–10 years and the whole system becomes a replacement job rather than a repair.' },
      { heading: 'Power supply requirements', body: 'Both motor types need a dedicated mains feed with a RCBO at the consumer unit. Running this cable from the house to the gate is often the biggest unknown in an automation quote — cable runs over 20 metres through paving can cost £800–£2,000 in electrician time alone. Confirm this is included or get a separate quote.' },
    ],
    relatedServices: ['automated-gate-systems', 'electric-swing-gates'],
  },
  {
    slug: 'sliding-vs-swing-driveway-gates',
    title: 'Sliding vs Swing Gates: Which Fits Your Hertfordshire Driveway?',
    shortTitle: 'Sliding vs Swing',
    summary: 'Sliding and swing gates are not interchangeable — each suits different driveway layouts and conditions. The wrong choice causes years of daily frustration and can be impossible to undo without rebuilding the boundary. Assess the space first, then choose the format.',
    optionA: {
      name: 'Sliding Gates',
      pros: ['No swing clearance needed — ideal for short driveways and tight properties', 'Work on gradients and uneven ground where swing gates cannot open', 'Can span very wide openings (5–10+ metres) with a single gate', 'Opening direction does not intrude on driveway space'],
      cons: ['Require a full gate-width of parallel run-off space alongside the opening', 'Ground-track sliders need a flat, clean concrete track that must stay debris-free', 'Cantilever sliders avoid the track but are significantly more expensive', 'Less traditional aesthetic — often looks better on contemporary properties'],
      bestFor: 'Short driveways, sloped sites, wide openings, and contemporary architecture.',
    },
    optionB: {
      name: 'Swing Gates',
      pros: ['Traditional aesthetic suits period and rural Hertfordshire properties', 'Do not need parallel run-off space — just swing clearance', 'Cheaper than equivalent sliding gates, often by 20–30%', 'Wider range of motor options including discreet underground systems'],
      cons: ['Need enough internal driveway space for the full arc of the gate to swing inward (outward-opening is illegal onto a highway)', 'Cannot be installed on steep driveways — gates ground out or need expensive cranked hinges', 'Maximum practical width is around 4 metres per gate — beyond that, structural issues emerge', 'Wind exposure affects them more than sliders'],
      bestFor: 'Period properties, rural and AONB locations, standard driveways with adequate internal clearance, and traditional aesthetics.',
    },
    verdict: 'Measure the driveway honestly before deciding. A short driveway with vehicles parked close to the boundary rules out swing gates. A sloped driveway also rules them out. A wide country entrance with flat ground and period architecture rules out sliding gates aesthetically. The driveway usually makes the decision before preference does.',
    sections: [
      { heading: 'Measuring the swing clearance', body: 'For swing gates, measure from the hinge pin in a full arc equal to the gate width. That entire arc must be free of parked cars, planters, low walls, and shrubs — permanently. If the nearest parking position to the gate is less than gate-width plus 500mm clearance, swing gates will not work.' },
      { heading: 'Sliding gate run-off requirements', body: 'For ground-track sliders, you need a parallel run-off distance equal to the gate width plus 300–500mm overrun. If the boundary wall or a tree line sits at the edge of the opening, there is no space for the gate to travel and a cantilever system is the only option.' },
      { heading: 'Cost comparison', body: 'For a typical 4-metre opening, a pair of swing gates with ram motors runs £3,800–£6,500. A ground-track slider the same width runs £4,500–£8,500. A cantilever slider starts around £7,500. The price delta is real but the functional outcome depends entirely on the driveway.' },
      { heading: 'Planning permission differences', body: 'Both formats face the same 1-metre height limit fronting a highway without planning permission. But swing gates that could potentially open outward onto a highway are never permitted under the Highways Act, even with planning. Sliding gates sidestep this issue entirely.' },
    ],
    relatedServices: ['electric-sliding-gates', 'electric-swing-gates'],
  },
  {
    slug: 'manual-vs-automated-driveway-gates',
    title: 'Manual vs Automated Driveway Gates: Is Automation Worth It?',
    shortTitle: 'Manual vs Automated',
    summary: 'Automation adds £1,500–£5,000 to a gate installation but transforms daily use. The question is not whether automation is better — it almost always is — but whether the lifestyle benefit justifies the cost for your specific property.',
    optionA: {
      name: 'Manual Gates',
      pros: ['Much cheaper upfront — £1,200–£4,000 for most designs', 'Nothing to go wrong electrically or mechanically', 'No mains electricity required at the gate', 'Simple to maintain — just hinges and a catch'],
      cons: ['Daily friction — getting out of the car in all weather to open and close', 'Easier to leave open by accident, compromising security', 'Heavier gates become genuinely hard work to move', 'Less attractive to buyers at resale compared to automated'],
      bestFor: 'Rarely-used secondary entrances, budget installations, rural properties where security concerns are minimal, and gates at positions where the owner routinely arrives on foot.',
    },
    optionB: {
      name: 'Automated Gates',
      pros: ['Open from the car with a remote, phone, or keypad', 'Close automatically after a set time, improving security', 'Intercom integration lets you vet visitors before opening', 'Significantly increases property kerb appeal and resale value', 'Daily use is effortless even in rain or after dark'],
      cons: ['£1,500–£5,000 additional cost over manual', 'Electrical failure means the gate is stuck — backup manual release is essential', 'Requires mains power to the gate position', 'Annual servicing recommended (£80–£150)', 'Safety compliance testing is legally required under BS EN 12453'],
      bestFor: 'Primary entrances, frequently used driveways, security-conscious owners, wider or heavier gates, and any property where the gate is used daily by multiple occupants.',
    },
    verdict: 'For a primary driveway used daily, automation pays back in convenience within the first wet winter. For a rarely-used secondary access, manual is sensible. The middle ground — future-proofing — is to install a gate structurally capable of being automated later, even if you fit it manually initially, so you can add motors without starting over.',
    sections: [
      { heading: 'Future-proofing manual installs', body: 'If budget rules out automation today but you expect to add it within 5 years, specify the gate and piers to automation standards from the start. That means a gate with reinforced hinge points, a motor-compatible hinge spacing (usually 1000–1100mm centres), and a buried conduit from the house to the gate for future cable. Retrofitting these later costs far more than doing them upfront.' },
      { heading: 'The intercom argument', body: 'Automation without an intercom is a convenience upgrade; automation with an intercom is a security upgrade. Being able to see and speak to a caller before opening the gate is the single biggest functional improvement over manual operation. Budget for the intercom if security is a driver.' },
      { heading: 'Backup and failure modes', body: 'Every automated gate must have a manual release that can be operated from the property side during a power cut. Cheap installations sometimes omit this — it is not optional. Confirm the release mechanism before signing off the install.' },
      { heading: 'Servicing and lifetime costs', body: 'A quality automated system serviced annually should run for 10–15 years before major components need replacing. Poorly installed or serviced systems fail within 3–5 years. Annual servicing at £80–£150 is genuinely worth paying for, and the installer should offer a contract at commissioning.' },
    ],
    relatedServices: ['automated-gate-systems', 'gate-repair-and-maintenance'],
  },
];

export const getGuideBySlug = (slug: string) => COMPARISON_GUIDES.find(g => g.slug === slug);
