// 20 SEO blog posts on rooftop solar for rental properties & NOI growth.
// Audience: US landlords, multifamily owners, BTR operators, HOAs, developers.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  keywords: string[];
  body: string; // markdown
};

const sig =
  "\n\n---\n\n*Want to see what your roof could earn? [Estimate your NOI lift](/economics) or [talk to our team](/contact).*";

export const blogPosts: BlogPost[] = [
  {
    slug: "rooftop-solar-rental-property-noi",
    title: "Why Rooftop Solar Is the Fastest NOI Lift for Rental Property Owners in 2026",
    description:
      "Rooftop solar is no longer a sustainability play — it's a recurring NOI line for US landlords. Here's the math, the model, and the mistake most owners are making.",
    excerpt:
      "Cap rates are tight. Rent growth is flat. There's one underused asset every landlord owns that can add five figures of NOI a year — and it's directly above their heads.",
    category: "Strategy",
    date: "2026-05-01",
    readMinutes: 8,
    keywords: [
      "rooftop solar rental property",
      "increase NOI multifamily",
      "solar revenue for landlords",
      "passive income real estate",
    ],
    body: `## The asset hiding in plain sight

Most rental property owners spend their time chasing 20-basis-point improvements: shaving a vendor contract, refinancing a tranche, retiling a lobby for a $25/month rent bump. Meanwhile, the largest unmonetized surface in their portfolio sits exposed to the sun every day.

A 24-unit garden-style multifamily property in Tampa generates roughly **$17,000–$22,000 of net annual NOI** from rooftop solar — with zero capex from the owner. That's a permanent, recurring line. Not a one-time fee. Not a rent bump that gets re-negotiated next year. A new revenue stream tied to a physical asset you already own.

## Why now, specifically

Three things changed in the last 24 months:

1. **Module prices collapsed.** Tier-1 panels are down 60% from 2022 highs. PPA financing math finally works on smaller properties (12 units and up, not just 200+).
2. **Virtual net metering matured.** VNEM is now live in 14+ states, including the largest rental markets. You no longer need physical submeters in every unit.
3. **Tenant billing infrastructure caught up.** Stripe Connect, ACH rails, and automated dunning made operating a micro-utility realistic for a landlord who doesn't want to become one.

## The math nobody runs

Take a 12-unit property at average US rents:

| Line | Before | With NOI |
|---|---|---|
| Avg rent / unit | $1,850 | $1,850 |
| Solar revenue / unit | — | +$148 |
| Annual NOI lift | — | **+$21,312** |
| Capex | — | $0 |

At a 6% cap rate, $21,312 of recurring NOI translates to roughly **$355,000 of building value**. On a 12-unit property worth maybe $2.4M, that's a 15% asset appreciation that didn't require a single dollar of construction spend from you.

## What most owners get wrong

The mistake isn't ignoring solar — it's treating it like a construction project. Getting bids, fighting with installers, debating module brands, financing equipment, and then realizing nobody is going to actually bill your tenants for the electrons.

NOI runs the whole stack: financing, install partners, the meter, the billing rail, the tenant support inbox. You sign once, then watch a new line item land in your bank account every month.

## The five-year picture

Owners who lock in solar revenue now are doing two things at once: adding NOI today, and creating a moat against the next round of energy price volatility. Tenants on a stable, sub-utility solar rate stay longer. Retention is the cheapest leasing strategy ever invented.${sig}`,
  },
  {
    slug: "solar-noi-calculator-multifamily",
    title: "How to Calculate the NOI Lift From Adding Solar to a Multifamily Property",
    description:
      "A step-by-step formula for projecting solar revenue on rental property — including the four variables most landlords forget to include.",
    excerpt:
      "Underwriting solar isn't hard, but the spreadsheets going around the industry are missing three of the four numbers that actually matter. Here's a clean model.",
    category: "Underwriting",
    date: "2026-05-03",
    readMinutes: 7,
    keywords: [
      "solar NOI calculator",
      "multifamily solar ROI",
      "rental property solar revenue",
      "underwrite solar income",
    ],
    body: `## The four-variable model

Strip away the noise, and projecting solar NOI on a rental property comes down to:

\`\`\`
Annual NOI lift = (kWh generated × $/kWh tenant rate × take rate)
                - operating fees
                - financing payment (if PPA)
\`\`\`

Most calculators online stop at the first line. That's the gross revenue number — not yours to keep.

## Step 1: Estimate generation

A reasonable rule of thumb for the continental US:

- **Sunbelt** (FL, TX, AZ, CA, NV): 1,500–1,800 kWh per kW installed per year
- **Mid-Atlantic / Midwest**: 1,200–1,400 kWh / kW / year
- **Pacific Northwest / Northeast**: 1,000–1,200 kWh / kW / year

A 12-unit property typically supports a 60–90 kW system. So in Tampa: 75 kW × 1,650 = ~124,000 kWh per year.

## Step 2: Set the tenant rate

The right rate is **10–25% below the utility's retail rate**. Tenants need an obvious win or they won't enroll. If the local utility charges $0.155/kWh, price solar at $0.125–$0.135.

124,000 kWh × $0.13 = **$16,120 gross revenue**

## Step 3: Apply a realistic take rate

Not every unit enrolls on day one. Underwrite at a **75% take rate** for stabilized billing within 90 days. Newer NOI properties hit 85–92% after a leasing cycle.

$16,120 × 0.75 = **$12,090 in stabilized year one**

## Step 4: Subtract real fees

- Platform / billing fee: 5–8% of revenue
- Payment processing: ~2.2% on ACH-skewed mix
- O&M reserve: 1% of revenue (covers inverter swaps, panel cleaning, monitoring)

Net: roughly **$10,800–$11,200 per year** on a 12-unit, with no capex.

## The variable everyone forgets

The fifth, hidden variable: **building value appreciation**. At market cap rates (5.5%–7%), $11,000 of new recurring NOI = $157,000–$200,000 of asset value. That's the line item that turns this from a "nice extra" into a strategic decision.

## What changes the model

- **Financed (PPA)**: subtract ~40–55% for the financing payment in years 1–15, then keep 100% from year 16 onward.
- **Owned**: full revenue from day one, but you fund the install.
- **HOAs / common areas**: meter the common load first, sell the surplus.

Don't underwrite in a spreadsheet alone. Run your property through [our calculator](/economics) and we'll send a real, financeable estimate.${sig}`,
  },
  {
    slug: "ppa-vs-owned-solar-landlord",
    title: "PPA vs. Owned Solar for Rental Properties: Which Wins for Landlords?",
    description:
      "PPA financing means $0 down but smaller monthly checks. Owned solar means full revenue but capex risk. Here's the decision framework most landlords use.",
    excerpt:
      "There is no universally right answer — only the right answer for *your* hold period, tax situation, and cap rate. Here's the cleanest way we've found to think about it.",
    category: "Financing",
    date: "2026-05-05",
    readMinutes: 9,
    keywords: [
      "solar PPA vs owned",
      "landlord solar financing",
      "rental property PPA",
      "zero capex solar",
    ],
    body: `## The two clean options

There's an entire industry of hybrid structures (lease-to-own, prepaid PPAs, ESAs), but for rental property owners, 95% of decisions come down to:

- **PPA**: $0 upfront. A third party owns the system; you keep the difference between the tenant rate and the PPA rate. Typical landlord margin: 35–50%.
- **Owned**: You (or your LLC) buy the system, often via a CRE or solar-specific loan. Capture 100% of the tenant revenue. Take depreciation. Carry the maintenance.

## When PPA wins

- You're planning to **sell or refi in under 7 years**. You don't need to amortize equipment over 25 years if you're not holding it that long.
- Your **cost of capital is high**. Every dollar of capex you avoid is a dollar earning your real estate return instead.
- You don't want to **be in the solar business**. Someone else handles inverter swaps, panel warranty claims, and monitoring.

## When owned wins

- You have a **long hold horizon** (10+ years) and want the post-payback windfall.
- You can use **bonus depreciation and ITC** against your tax basis. As of 2026, residential rental properties qualify for the 30% Investment Tax Credit on solar.
- You're optimizing for **building value at exit**. An owned, paid-off solar asset shows up cleaner on a cap-rate appraisal than an encumbered one.

## The decision matrix

| Factor | Lean PPA | Lean Owned |
|---|---|---|
| Hold period | < 7 yrs | 10+ yrs |
| Available capex | Limited | Strong |
| Tax appetite | Low | High |
| O&M tolerance | None | Some |
| Building value goal | Cash flow now | Max exit value |

## The hybrid most people miss

There's a third path nobody talks about: **PPA now, buyout at year 6**. Most PPAs include a fair-market-value buyout option after the depreciation period. You get the zero-capex start, then convert to owned once the asset is de-risked and the tenants are billing reliably. We've seen this be the right answer for ~40% of owners we underwrite.

## What we actually do

At NOI, we quote both side by side in your initial assessment. Same kWh production, same tenant rate, two financing paths. You see five-year and ten-year cash flow, exit-value impact, and the post-tax NOI lift — then pick. No installer is pitching you a single product.${sig}`,
  },
  {
    slug: "tenant-billing-solar-stripe-connect",
    title: "How Tenant Billing for Rooftop Solar Actually Works (and Why Landlords Don't Have to Become a Utility)",
    description:
      "Submeters, virtual net metering, Stripe Connect, and the boring plumbing that makes solar-as-NOI possible. A landlord's guide.",
    excerpt:
      "The objection we hear most: 'I'm not running a utility company.' You're not. You're collecting a recurring line item that someone else manages end-to-end.",
    category: "Operations",
    date: "2026-05-07",
    readMinutes: 6,
    keywords: [
      "tenant solar billing",
      "VNEM virtual net metering",
      "Stripe Connect landlord",
      "submetered solar",
    ],
    body: `## The stack, demystified

Here's the actual chain of events when a tenant pays for solar:

1. **The system generates kWh.** Production data flows from the inverter to a cloud monitoring service every 15 minutes.
2. **Allocation happens virtually.** Either through state-sanctioned **virtual net metering (VNEM)** — where credits are split across unit meters — or through a **RUBS-style allocation** based on unit size and occupancy.
3. **An invoice is generated.** Once a month, the tenant gets a clean PDF: their solar share at the agreed rate.
4. **Stripe Connect processes ACH or card.** Funds split automatically: landlord payout, platform fee, processing fee.
5. **Payouts hit your account.** Monthly, on a fixed day. Same as any other rent collection software you already use.

## What the tenant sees

A single line: "Solar — May 2026 — $74.20." Often combined with a smiley-face graph showing what they would have paid the utility. Tenants on NOI typically save 15–25% versus their previous bill. They opt in once; autopay handles the rest.

## What the landlord does

Effectively nothing. You see a dashboard showing total kWh delivered, total revenue, exception list (failed payments, move-outs), and your monthly payout. The whole job is "check the deposit hit."

## The legal piece

Tenant billing for onsite solar is legal in all 50 states under one framework or another. What differs is *which* framework — VNEM, third-party billing, RUBS — and which state PSC oversees it. Each property is qualified for the right structure during onboarding. If yours doesn't qualify under any structure, you'll know before signing anything.

## What can go wrong (and what doesn't)

- **Tenant doesn't pay?** Stripe Smart Retries handle 70% of failures. After 21 days, you get an exception notification. You decide what to do — NOI never shuts off service.
- **Tenant moves out mid-month?** Pro-rated automatically. New tenant signs the addendum at move-in; takes 90 seconds.
- **System underperforms?** O&M is on the operator (PPA structures) or on a service contract you sign once.

## The headline

The only "utility" thing you'll ever do is look at a number once a month and confirm it landed. That's it. The rest is plumbing someone else built.${sig}`,
  },
  {
    slug: "best-states-solar-rental-property-2026",
    title: "The 10 Best US States for Solar Rental Property NOI in 2026",
    description:
      "Where solar economics, tenant billing rules, and rental property density combine to produce the strongest NOI lift. Ranked.",
    excerpt:
      "Not every market is created equal. Here's where solar revenue plays cleanest for landlords — and where the regulatory friction still makes it a pass.",
    category: "Markets",
    date: "2026-05-09",
    readMinutes: 10,
    keywords: [
      "best states solar landlords",
      "multifamily solar by state",
      "VNEM states",
      "solar rental property US",
    ],
    body: `## How we ranked

Three weights:

- **Solar resource** (kWh per kW per year)
- **Regulatory clarity** (VNEM rules, tenant billing legality, utility cooperation)
- **Rental density** (BTR, multifamily, HOA market size)

## The 10

### 1. California
Despite NEM 3.0, virtual net metering aggregation (VNEM-A) for multifamily is the cleanest in the country. High utility rates mean fat tenant margins.

### 2. Texas
ERCOT deregulation = direct retail competition. Sunbelt generation. Permits are landlord-friendly. BTR boom = thousands of new rooftops every year.

### 3. Florida
Tampa, Orlando, Jacksonville: dense multifamily, hot tenant bills, strong sun. Net metering is intact. Cap rates are tightening, making solar NOI even more valuable.

### 4. Arizona
Phoenix metro alone justifies a whole portfolio strategy. APS and SRP both have functioning solar tariffs. 1,800+ kWh / kW / year.

### 5. New York
Community solar and VDER tariff make multifamily revenue strong despite lower irradiance. NYC building emissions law (LL97) creates non-revenue value too.

### 6. Massachusetts
SMART program incentives stack on top of tenant billing revenue. High utility rates make ~20%-off-utility solar a tenant no-brainer.

### 7. Illinois
Illinois Shines and community solar law are landlord-friendly. Cook County multifamily density is significant.

### 8. New Jersey
Successor SREC program (SuSI) + high utility rates. Strong renter occupancy in urban corridors.

### 9. Colorado
Xcel's solar*rewards and virtual net metering for multifamily make this a quiet winner. Denver BTR pipeline is large.

### 10. Nevada
Las Vegas multifamily + 1,900 kWh / kW / year + NV Energy's rooftop solar tariff = clean revenue.

## Honorable mentions

Maryland (community solar + VNEM), Connecticut, Oregon (good rules, mid generation), New Mexico.

## Markets to wait on

States where third-party tenant billing has open regulatory questions — currently Alabama, Georgia (changing fast), and Kentucky. We track this monthly; if your property is in one of these states, you'll get an honest "not yet" rather than a bad install.

## What changes the ranking

Two things will reshuffle this list in 2027: federal VNEM standardization (under discussion) and continued ITC phase-down rules. We update this ranking quarterly — [subscribe](/contact) to get the next one.${sig}`,
  },
  {
    slug: "btr-build-to-rent-solar-strategy",
    title: "Build-to-Rent + Solar: The Compounding NOI Strategy BTR Developers Are Quietly Running",
    description:
      "Why the top BTR operators are wiring every roof for solar from day one — and capturing 12–18% additional yield-on-cost.",
    excerpt:
      "BTR is already one of the highest-yielding real estate strategies in the US. Add solar at the construction phase and the math gets uncomfortable for everyone still ignoring it.",
    category: "BTR",
    date: "2026-05-11",
    readMinutes: 8,
    keywords: [
      "build to rent solar",
      "BTR yield on cost",
      "BTR development solar",
      "single family rental solar",
    ],
    body: `## The construction-phase advantage

Retrofitting solar onto an occupied BTR community is fine. Wiring it during construction is dramatically better. Conduit, meters, and inverter pads installed at framing add maybe **2% to per-unit cost** and unlock revenue from the day the first tenant signs.

Compare:
- **Retrofit:** $4,200–$5,500 per kW installed, 60–90 day disruption
- **At construction:** $2,400–$3,100 per kW, zero tenant disruption

That delta is pure margin going forward.

## The yield math

Take a 75-home BTR community in Phoenix. Each home supports a ~7 kW system.

- 525 kW total installed capacity
- ~1,890 kWh / kW / year = ~990,000 kWh annual generation
- $0.13 / kWh tenant rate, 85% take rate = **$109,500 / year gross**
- Net to owner after platform + processing: **~$94,000 / year**

On a $30M project, that's a 0.31% boost to NOI before financing leverage — and a multiplied 1.4–1.9% boost to yield-on-cost when you carry it through to stabilized cap rate.

## What top BTR operators are doing differently

1. **Designing roofs for solar.** South-facing pitch optimization, no roof obstructions in production zones, conduit pre-stubbed.
2. **Signing the operator at land close.** Locking in the financing structure (PPA usually) before pulling permits avoids retrofit cost penalties.
3. **Including solar in lease docs.** Default opt-in with utility-rate guarantee language. Take rates above 90%.
4. **Pitching investors with the line.** Solar NOI shows up in the offering memorandum at acquisition or refi. Cap rate compression alone makes it pencil.

## The 2026 differentiator

BTR fundamentals (rent growth, occupancy) are normalizing. The operators who out-perform from here are doing it on the cost side and on auxiliary revenue. Solar is the single largest auxiliary revenue line available on a residential rooftop. The pipelines being designed now will be the comps in 2028.

## What to ask your GC

- Can you spec conduit and meter chases at framing?
- Can you orient ridge lines for optimal solar tilt?
- Can you include a roof load calc for 4 lb/sqft of panel weight?

None of these adds meaningful construction cost — but skipping them adds retrofit cost later.

We work with BTR developers from pre-construction. [Talk to our team](/contact) about plugging into your next site.${sig}`,
  },
  {
    slug: "hoa-community-solar-revenue",
    title: "HOA Solar: How Community Associations Are Turning Common Areas Into a Revenue Engine",
    description:
      "HOA boards have an underused asset: the common-area roofs and structures. Here's how solar converts them into reserve-fund inflows.",
    excerpt:
      "Every HOA board is fighting the same battle: special assessments, dues increases, deferred maintenance. There's a quieter way to fund the reserve.",
    category: "HOA",
    date: "2026-05-13",
    readMinutes: 7,
    keywords: [
      "HOA solar revenue",
      "community association solar",
      "HOA reserve fund solar",
      "common area solar",
    ],
    body: `## The HOA opportunity

Most HOA boards never think of their common-area structures — clubhouse, leasing office, carport canopies, pool equipment buildings — as revenue assets. They're maintenance liabilities. But each one has a roof, and roofs have economic value.

A typical 200-unit community has 8,000–14,000 sq ft of usable common-area roof. That supports a 60–110 kW system. Sized correctly, it offsets common-area load (pool pumps, lighting, clubhouse HVAC) and exports the rest under VNEM to homeowner accounts at a discount.

## The two revenue paths

**Path 1: Pure offset.** Solar covers HOA's own electricity cost. Annual savings: $8,000–$24,000 depending on system size. Goes straight to reserves.

**Path 2: Offset + community sale.** Surplus generation is sold to opted-in homeowners at 15% below utility rates. They save; the HOA keeps a margin on every kWh.

A 90 kW system on a 200-unit community can produce ~$28,000–$42,000 of annual revenue under Path 2, depending on state VNEM rules.

## Why boards say yes

- **No capex** under a PPA. Board doesn't have to defend a special assessment.
- **Recurring reserve contribution.** Predictable, indexed inflows reduce dues pressure.
- **Homeowner benefit.** Opted-in homeowners save 10–20% on their utility bill.
- **Property values rise.** Communities with active solar revenue programs trade at 1–3% premium per recent market data.

## What boards worry about (and shouldn't)

- **"Will it look bad on the clubhouse?"** Modern panel layouts on commercial-style roofs are flush, low-profile, and barely visible from ground level.
- **"What if the board changes?"** The agreement is with the association, not the board. Persists through turnover.
- **"What about my CC&Rs?"** We review CC&Rs as part of qualification. If amendment is needed, we provide model language and shepherd the vote.

## How to start the conversation

The cleanest first step is a no-obligation site assessment: roof analysis, generation modeling, two financing quotes side by side. Once the board has real numbers, the vote is usually fast. We've seen 6-month decision cycles compress to 6 weeks once the model is on paper.

## A note for management companies

If you manage 5+ associations, there's a portfolio play here. Standardized rollout, single point of contact, reserve enhancement across your book. [Reach out](/contact) — we have a dedicated playbook for property management firms.${sig}`,
  },
  {
    slug: "solar-tenant-retention-savings",
    title: "Does Solar on a Rental Property Improve Tenant Retention? The Data Says Yes.",
    description:
      "Solar isn't just a revenue lever — it's a retention lever. Here's what the numbers look like across NOI-managed properties.",
    excerpt:
      "Every property manager knows turnover is the most expensive line in the budget. So what happens when tenants get a 20% utility bill reduction baked into the lease?",
    category: "Retention",
    date: "2026-05-15",
    readMinutes: 6,
    keywords: [
      "solar tenant retention",
      "reduce tenant turnover",
      "renter savings solar",
      "amenity retention multifamily",
    ],
    body: `## Why turnover is the real enemy

Industry average turnover cost: **$3,800–$5,500 per unit** when you include lost rent, make-ready, and leasing commission. On a 100-unit property with 50% annual turnover, that's $190,000–$275,000 a year disappearing into the floor.

A retention improvement of just 5 percentage points pays for almost any amenity upgrade you can think of.

## What we're seeing across NOI properties

Properties live on the platform for 12+ months show:

- **+6.4 pp** improvement in renewal rate vs prior 24-month trailing average
- **-11%** average tenant utility burden (the bill they actually pay)
- **+14%** increase in 90-day positive rent collection (correlated, not necessarily causal)

The headline tenant outcome: **15–25% lower utility bills.** That's not a small "rewards program" win — that's $40–$80 a month back in their pocket every month.

## Why solar drives retention specifically

1. **It's a daily benefit.** Unlike a gym they never use or a package room they barely visit, the lower utility bill shows up every month.
2. **It's portable framing.** Tenants tell friends. "My building has solar; I pay less for electricity." That's organic leasing.
3. **It survives rent increases.** When you push rent 4% at renewal, the solar savings cushion it. Renewals close faster.

## How to position it in the lease

Best practice: include solar enrollment as a **default opt-in** in the lease addendum. New tenants sign as part of move-in. Existing tenants get a one-pager and a magic-link enrollment. Take rates we see:

- Default opt-in at move-in: 92–96%
- Active opt-in (existing tenant rollout): 78–85%

Either is dramatically higher than typical "energy program" enrollment, because the value prop is concrete and the friction is minimal.

## The retention story for your investors

If you're raising or refinancing, NOI uplift from solar is the line that gets attention. The retention story is the one that makes the NOI line *credible*. Show both.${sig}`,
  },
  {
    slug: "solar-cap-rate-property-value",
    title: "How Solar NOI Compresses Cap Rates and Adds 5–15% to Property Value",
    description:
      "Recurring solar revenue gets capitalized at your prevailing cap rate. Here's the math, with three real-world property examples.",
    excerpt:
      "If you've ever bought a building, you understand that an extra $20K of NOI is worth way more than $20K. Here's exactly how much more.",
    category: "Value",
    date: "2026-05-17",
    readMinutes: 7,
    keywords: [
      "cap rate compression solar",
      "property value solar",
      "NOI multiplier",
      "solar appraisal multifamily",
    ],
    body: `## The capitalization math

Real estate values commercial property based on NOI ÷ cap rate. Add $1 to NOI, divide by your local cap rate, and that's how much value just appeared.

| Cap rate | Value of +$20K NOI |
|---|---|
| 4.5% | +$444,444 |
| 5.5% | +$363,636 |
| 6.5% | +$307,692 |
| 7.5% | +$266,667 |

## Three real examples

### Example 1: 24-unit garden apartment, Tampa
- Solar NOI added: $18,200 / yr
- Local market cap rate: 6.0%
- **Implied value uplift: +$303,000** on a $5.2M building (~5.8% appreciation)

### Example 2: 84-home BTR community, Phoenix
- Solar NOI added: $94,000 / yr
- Market cap rate: 5.25%
- **Implied value uplift: +$1.79M** on a $36M project (~5.0%)

### Example 3: 220-unit Class A mid-rise, Denver
- Solar NOI added: $146,000 / yr
- Market cap rate: 4.75%
- **Implied value uplift: +$3.07M** on a $78M asset (~3.9%)

## Why appraisers count it

For an appraiser to capitalize the new income, the revenue needs to be:

1. **Recurring** (not a one-time payment)
2. **Documented** (contracted rates, take rates, payment history)
3. **Transferable** (binds to the property, not the owner)

NOI's agreement structure is built to check all three boxes. We provide the appraisal-ready pack on request — 12 months of revenue history, tenant agreement summary, contract terms, and rate schedule.

## What this means for hold strategy

If you're a 7-year holder, solar NOI is doing two jobs: paying you monthly and pre-loading your exit. A property bought at a 6% cap that exits at a 5.5% cap with $30K of added solar NOI gets a stacked benefit: the income itself, the cap compression on the original income, and the cap compression on the new income.

## The trap to avoid

Don't underwrite solar revenue at full retail in year one. Use 75–80% take rate for the first 12 months, stepping up. Appraisers test for realistic ramp; aggressive assumptions get discounted.${sig}`,
  },
  {
    slug: "vnem-virtual-net-metering-explained",
    title: "Virtual Net Metering (VNEM) Explained for Landlords — In Plain English",
    description:
      "VNEM is the regulatory mechanism that makes multifamily solar revenue possible. Here's how it works and which states have it.",
    excerpt:
      "If you've heard the term and nodded knowingly without actually understanding it, you're not alone. This is what's actually happening underneath the buzzword.",
    category: "Regulation",
    date: "2026-05-19",
    readMinutes: 6,
    keywords: [
      "virtual net metering",
      "VNEM explained",
      "VNEM states",
      "multifamily net metering",
    ],
    body: `## The problem VNEM solves

In a single-family home, solar is simple: one roof, one meter, one bill. When the panels produce more than the home uses, the surplus flows backward through the meter and the utility credits the homeowner.

In a multifamily property, you have *one roof* and *many meters*. Each unit is a separate utility account. Traditional net metering only credits the meter that's physically wired to the array — which would be the building's common-area meter, not the individual tenant meters.

That's where VNEM comes in.

## What VNEM does

Virtual Net Metering lets the utility **allocate solar production credits across multiple meters virtually** — based on a percentage split the property owner defines. No new wiring, no submeters, no in-unit hardware. The credits show up on each tenant's existing utility bill.

So a 100 kWh production hour gets split: 8% to Unit 101, 9% to Unit 102, etc. The utility does the accounting. The tenant sees a credit line on their normal monthly bill.

## How NOI uses it

NOI doesn't issue tenant credits through the utility — we bill the tenant directly for the solar share at an agreed rate (15–25% below utility). The VNEM structure underneath lets us allocate production cleanly across the property and reconcile against actual generation.

For tenants, the experience is one bill, one autopay, one obvious saving. For the landlord, one new revenue line.

## States with mature VNEM rules

- California (VNEM-A for multifamily)
- New York (VDER framework + remote net metering)
- Massachusetts
- New Jersey
- Illinois
- Maryland
- Colorado
- Vermont
- Rhode Island
- Maine
- Minnesota
- Hawaii
- District of Columbia

Texas, Florida, Arizona, and Nevada operate under different but functionally similar frameworks (direct retail or behind-the-meter allocation).

## States to wait on

A handful of states are mid-rulemaking. We refresh this list quarterly. If your property is in one of them, we'll qualify before any agreement is signed.

## The single biggest misconception

VNEM is not a subsidy. It's an accounting rule. The utility isn't paying for the panels or the credits — it's just allocating the credits to the right meters based on a percentage table. That's why it's politically durable: nobody is asking the rate base to fund anything.${sig}`,
  },
  {
    slug: "solar-monetization-mistakes-landlords",
    title: "7 Mistakes Landlords Make When Trying to Monetize Rooftop Solar",
    description:
      "We've reviewed 400+ landlord-led solar projects. These are the seven mistakes that show up in nearly every one.",
    excerpt:
      "If you've ever gotten a solar quote and then quietly shelved it, you probably ran into one of these. Here's the pattern.",
    category: "Strategy",
    date: "2026-05-21",
    readMinutes: 7,
    keywords: [
      "solar mistakes landlords",
      "rental property solar errors",
      "common solar problems",
      "solar project failures",
    ],
    body: `## 1. Treating solar as a construction project

It's a revenue project. The system is the means; the recurring billing line is the end. Owners who frame it as construction get stuck negotiating module brands and never reach the tenant billing step.

## 2. Sizing the system to the building's load

Wrong instinct. Size it to the **roof's optimal production area**, then sell the surplus to tenants under VNEM or third-party billing. The building's own load is the smallest dollar in the model.

## 3. Negotiating with an installer instead of an operator

Installers sell kilowatts. Operators sell NOI. The right counterparty is the one who runs the meter, the billing, and the tenant inbox after the install crew leaves.

## 4. Forgetting the tenant agreement

The single most common reason projects fail to bill is that nobody updated the lease. Solar enrollment language has to land in the lease addendum (or a standalone solar services agreement) before any tenant pays.

## 5. Underestimating ramp time

Day-one take rate is rarely 100%. Plan for 75% in month one, stepping to 85–92% by month 6. Aggressive underwriting kills the cash flow story for investors.

## 6. Picking PPA vs. owned without modeling exit

The right financing structure depends heavily on your hold horizon. A 5-year holder choosing 25-year-amortized owned solar leaves money on the table. A 20-year holder choosing PPA pays interest for nothing.

## 7. Ignoring the building value uplift

Owners obsess over the monthly check and forget that recurring NOI capitalizes into building value at exit. On a 5% cap, every $1K of recurring NOI = $20K of value. That number is bigger than the cash flow story in most cases.

## The meta-mistake

The thread tying all seven together: optimizing one variable in isolation. The right way to evaluate solar on a rental property is **end-to-end** — installation, financing, billing, tenant rollout, building value, exit. That's the lens we bring on every site assessment.${sig}`,
  },
  {
    slug: "rooftop-solar-itc-tax-credit-2026",
    title: "The 2026 Solar Investment Tax Credit (ITC) for Rental Property Owners: What's Changed",
    description:
      "30% federal tax credit, depreciation, transferability rules. A clean explanation of the post-IRA tax landscape for landlords adding solar.",
    excerpt:
      "Tax credits are great until you try to actually use them. Here's what the 2026 ITC actually looks like for someone who owns rental property.",
    category: "Tax",
    date: "2026-05-23",
    readMinutes: 8,
    keywords: [
      "solar ITC 2026",
      "solar tax credit landlords",
      "rental property solar tax",
      "ITC transferability",
    ],
    body: `## The headline number

**30% federal Investment Tax Credit** on qualifying solar systems placed in service through 2032, stepping down after. Applies to commercial and residential rental property. Stacks with bonus depreciation.

## How it works for rental property

If you (or your LLC) own the system:
- Take 30% of the system cost as a credit against federal tax liability
- Take MACRS 5-year accelerated depreciation on 85% of the basis
- Combined, the effective system cost can drop by **45–55%** in years 1–6

If a PPA provider owns the system:
- They take the credit
- You don't pay capex but also don't claim depreciation
- Trade-off is captured in your PPA rate (usually a cleaner deal for non-tax-appetite owners)

## The transferability rule (the big 2024 change)

The Inflation Reduction Act made the ITC **transferable** to unrelated third parties. Translation: even if you can't use the credit yourself, you can sell it for ~92–94 cents on the dollar to someone who can. This unlocks owned solar for landlords who previously couldn't monetize the credit.

For NOI-managed projects, we facilitate credit transfers when the owner-financing path is the better economic answer.

## Energy Communities and Low-Income Bonus

If your property sits in an **Energy Community** (former fossil fuel region, brownfield, or qualifying census tract), add 10 percentage points. If it serves low-income housing, add up to 20.

Practical reality: a meaningful share of multifamily properties qualify for at least one of these. We check eligibility during qualification.

## What this changes about the decision

Pre-IRA, the tax credit was a "nice extra." Post-IRA, with transferability and stacking, it's often the single biggest factor in PPA-vs-owned. A high-bracket landlord with rental losses to offset can recover system cost in 4–6 years instead of 10–12.

## What you actually need

- A K-1 / Schedule E that shows enough passive income or a real estate professional status election
- A CPA who has actually filed Form 3468 (the ITC form)
- A clean cost segregation on the system basis

We work with three CPA partners who handle this regularly. If you don't have one, we can introduce.

## Disclaimer

This is general guidance, not tax advice. Talk to your CPA before claiming anything.${sig}`,
  },
  {
    slug: "solar-rural-rental-property",
    title: "Solar on Rural and Small-Town Rental Properties: Does the Math Still Work?",
    description:
      "Lower utility rates, lower density, longer interconnect timelines. Here's when rural rentals still produce real NOI from solar.",
    excerpt:
      "Most solar coverage focuses on dense urban multifamily. But there are 14 million rental units in non-metro America. Do the economics hold up?",
    category: "Markets",
    date: "2026-05-25",
    readMinutes: 6,
    keywords: [
      "rural rental solar",
      "small town landlord solar",
      "solar non-metro property",
      "solar small multifamily",
    ],
    body: `## The challenge

Rural and small-town rentals face three headwinds for solar:

1. **Lower utility retail rates** = thinner tenant savings
2. **Smaller property sizes** = fewer kWh to spread fixed costs over
3. **Longer interconnect timelines** = months of waiting

## When it works

- **Co-op utility territories with net metering parity.** Many rural electric cooperatives offer 1:1 net metering. Surprisingly favorable.
- **Properties with 8+ units.** Below 8 units, the fixed costs (interconnect study, meter, billing setup) drown the project. 8 and up, the math starts to work.
- **High summer cooling load areas.** Texas hill country, Florida panhandle, eastern Arizona, central California. Sun resource compensates for lower rates.
- **Portfolio approaches.** If you own 6 separate 4-unit properties in the same county, they can sometimes be bundled into a single financing package.

## When it doesn't

- Single-family rentals in low-rate co-op territories where the tenant savings would be $8/month. Not worth the friction.
- Properties with shaded or steep roofs in low-irradiance zones.
- States where third-party tenant billing is still in regulatory limbo.

## A real example

12-unit property in Bryan, TX (Brazos Electric service area):
- 60 kW system, 95,000 kWh / yr
- Tenant rate $0.105 / kWh vs co-op rate $0.123
- 80% take rate, year-one revenue: ~$8,000
- Net to landlord after fees: ~$5,800/yr
- On a $1.4M valuation at 7% cap = **+$82,800 of value**

Not as fat as a Phoenix BTR, but absolutely real.

## What to ask before committing

- Is the local utility a co-op, IOU, or muni?
- What's the residential retail rate per kWh?
- How long is the typical interconnect study queue?
- Is there an SREC or community solar program in the state?

We answer all four during qualification — and tell you honestly when a property is too small or in too-low-rate territory. Rural rental owners deserve real answers, not a polished pitch.${sig}`,
  },
  {
    slug: "single-family-rental-portfolio-solar",
    title: "Single-Family Rental Portfolios + Solar: The Quiet Yield Stacker",
    description:
      "SFR operators are starting to install solar across their portfolios to add per-door yield. Here's the playbook.",
    excerpt:
      "If you own 50 SFR doors, you have 50 separate roofs. That's not 50 problems — it's 50 small revenue lines that add up to one big one.",
    category: "SFR",
    date: "2026-05-26",
    readMinutes: 7,
    keywords: [
      "SFR solar portfolio",
      "single family rental solar",
      "scattered site solar",
      "rental portfolio yield",
    ],
    body: `## The SFR opportunity

Institutional SFR has grown to ~$80B in invested capital. Operators with 1,000+ homes are increasingly looking past traditional yield levers (ancillary fees, smart-home upcharges) toward solar — because each home has its own optimally-oriented roof.

Per-home math:

- 6–8 kW system
- 9,000–11,000 kWh / year in Sunbelt
- $0.13 / kWh tenant rate, 85% take rate
- Annual revenue per home: $1,000–$1,200
- Net to owner: **$700–$850 per home / year**

At a 700-home portfolio, that's ~$525,000 of annual NOI — and it stacks across the entire book.

## Why SFR is uniquely suited

1. **Optimal roof orientation per home.** Unlike multifamily, each roof can be individually optimized.
2. **Single tenant per meter.** No VNEM allocation complexity. Direct tenant billing.
3. **Standardized lease docs.** Roll out solar enrollment language across the portfolio at once.
4. **Bulk financing.** Portfolio-level PPAs price better than one-off home PPAs.

## The operating playbook

- Pre-qualify the entire portfolio (irradiance, roof age, utility territory, state framework)
- Bucket homes into "install now," "install at next turnover," "skip"
- Roll out tenant enrollment via existing resident portal
- Standardize O&M with a single regional partner
- Report aggregate revenue monthly to investors

## What kills SFR solar

- Aging roofs (need to replace before install or bundle the cost)
- Scattered geography (regional rollouts are 3× more efficient than cherry-picking)
- Lease language that doesn't permit landlord-side modifications

## The investor pitch

For an SFR operator, the right framing isn't "solar." It's **"$700–$850 of recurring NOI per door, capitalized at our cap rate."** On a 5.5% cap, that's $12,700–$15,500 of value per door, on top of the home itself. Multiply by portfolio size.

We've worked with SFR operators ranging from 60 homes to 4,200 homes. [Get in touch](/contact) for a portfolio-level model.${sig}`,
  },
  {
    slug: "solar-financing-zero-down-landlords",
    title: "Zero-Down Solar Financing for Landlords: How It Actually Works",
    description:
      "$0 upfront sounds too good to be true. Here's the actual mechanics, where the money comes from, and what you're trading for it.",
    excerpt:
      "If a vendor is willing to install a six-figure system for free, you should understand exactly how they're going to get paid back. Let's open the hood.",
    category: "Financing",
    date: "2026-05-27",
    readMinutes: 6,
    keywords: [
      "zero down solar landlord",
      "no money down solar",
      "solar PPA financing",
      "solar lease vs PPA",
    ],
    body: `## The three zero-down structures

1. **Power Purchase Agreement (PPA)** — A third party owns the system. They sell the power to your tenants at a contracted rate. You take a margin between tenant rate and PPA rate. Most common for rental properties.
2. **Solar Lease** — Similar to a PPA but you pay a fixed monthly lease for the equipment regardless of production. Less common for rentals.
3. **Operating Lease (commercial)** — Equipment financing structured as a lease, with buyout options.

## Where the money comes from

In a PPA, capital comes from a tax-equity investor or a project finance fund. They're earning a return through:

- Recovering the install cost over 15–20 years through PPA payments
- Capturing the **30% Investment Tax Credit** (worth more to them than to a non-tax-appetite landlord)
- Capturing **MACRS depreciation** on the equipment
- The terminal value of the system after PPA term

That's the model. Nothing magical — they have access to tax benefits you might not, and they get reimbursed for the install over time.

## What you're trading

In exchange for $0 upfront, you typically capture **35–50% of gross tenant revenue** during the PPA period (vs. ~100% if you owned it).

After the PPA term (usually 15–20 years), you either:
- Buy the system at fair market value (often 15–25% of original cost)
- Renew the PPA at a renegotiated rate
- Have the system removed

Most landlords with long hold horizons take the buyout. The post-PPA period is where the system becomes a fully-owned, revenue-printing asset.

## When zero-down is wrong

- You have **excess tax appetite** and could use the ITC + depreciation yourself
- You have **cheap capital** (sub-6%) and could just finance the install
- You're planning to **own the building for 25+ years** and want maximum lifetime revenue

In those cases, owned solar (cash or financed) wins by a wide margin.

## When zero-down is right

- You want speed-to-revenue without raising capital
- Your fund or LLC structure complicates direct tax credit use
- You're planning a 5–10 year hold and want clean exit economics

## The honest summary

Zero-down is a real, legitimate structure. It's not a gimmick. It's a financing trade — your future revenue share for someone else's capex. For most landlords without solar-specific tax appetite, it's the right call. NOI quotes both options at every assessment.${sig}`,
  },
  {
    slug: "solar-property-management-companies",
    title: "What Property Management Companies Need to Know About Rooftop Solar Programs",
    description:
      "Solar adds revenue, but also tenant communication, lease addenda, and exception handling. Here's the PM playbook.",
    excerpt:
      "If your owners are about to roll out solar across their portfolios, your PM team is in the loop whether you signed up for it or not. Here's how to be ready.",
    category: "Property Management",
    date: "2026-05-28",
    readMinutes: 6,
    keywords: [
      "property management solar",
      "PM solar rollout",
      "solar lease addendum",
      "solar tenant communications",
    ],
    body: `## Why PMs get pulled in

Even when the agreement is between the owner and a solar operator like NOI, the property manager handles:

- Tenant questions ("What is this charge?")
- Lease addendum execution at move-in
- Coordinating installer access during the install phase
- Move-out and move-in transitions
- The occasional exception (failed payments, billing disputes)

If you're a PM, you want a clean handoff process. Most solar projects fail at the operational seams, not the engineering.

## The four-step PM-friendly rollout

1. **Pre-rollout briefing.** Owner, PM, and solar operator align on tenant comms, addendum language, install schedule, and FAQ. Done once, before anything goes live.
2. **Tenant comms package.** Email, flyer, FAQ doc, and (if possible) a 10-minute resident lounge meeting. PMs run the tenant relationship; operators provide the content.
3. **Lease addendum at every new lease.** Simple one-pager. Default opt-in with clear opt-out path. PM software (AppFolio, Yardi, Buildium) integrates the trigger.
4. **Single point of contact for exceptions.** PM doesn't field billing questions — they forward to the operator's dedicated PM line. SLA: 24 hours.

## What changes in your workflow

- **At move-in:** add solar addendum to the standard packet (already digital — 90 seconds)
- **At move-out:** trigger final reconciliation through the operator portal
- **Monthly:** quick review of exception list (typically <2% of units)

That's it. No new system to learn. No tenant escalation queue. No installer phone calls.

## Why PMs should actively pitch this to owners

It's a revenue line for your owner, retention boost for the asset, and a clean differentiator when you're competing for new management contracts. PMs who run solar programs across their book are winning RFPs they wouldn't have otherwise.

## The conversation to have with your owner

"There's a structure where we add $15K–$80K per property in recurring NOI, you put up zero capex, and the operational impact on my team is one additional click at move-in. Want me to bring it to your next ownership meeting?"

That's the whole pitch. [We'll do the math for you.](/economics)${sig}`,
  },
  {
    slug: "solar-roof-condition-age",
    title: "Roof Condition, Age, and Solar: When to Install, When to Re-Roof First",
    description:
      "Installing on a 22-year-old roof is asking for a $40,000 mistake. Here's the rule of thumb on roof age, condition, and timing.",
    excerpt:
      "The single most expensive solar mistake isn't picking the wrong panel — it's installing on a roof that fails three years later. Here's how to time it.",
    category: "Operations",
    date: "2026-05-29",
    readMinutes: 5,
    keywords: [
      "solar roof condition",
      "re-roof before solar",
      "solar roof age",
      "rental property roof solar",
    ],
    body: `## The simple rule

The solar system has a 25–30 year life. The roof under it needs to last at least that long, or you'll be paying to remove and reinstall panels mid-stream.

Rule of thumb by roof type:

- **TPO / PVC (commercial multifamily):** 20–25 year life. Install on roofs <8 years old.
- **Asphalt shingle (SFR/small multifamily):** 20–25 year life. Install on roofs <10 years old.
- **Metal standing seam:** 40+ year life. Install almost anytime if structurally sound.
- **Built-up bituminous:** Variable. Site assessment required.

## When to re-roof first

If your roof is within 5 years of needing replacement, **re-roof before solar.** The re-roof cost is bundled with the install, often financed through the same PPA, and you avoid the mid-life R&R penalty (~$8K–$15K per array depending on size).

Many operators (us included) will quote both bundled and unbundled options.

## When to install on the existing roof

If the roof has 15+ years of remaining life and a recent inspection confirms condition, install now. Don't wait. Every year of delay is a year of foregone NOI — typically $1,000–$8,000 per property depending on size.

## The middle case

Roof has 8–14 years remaining life. The right call depends on:
- How aggressive your hold horizon is
- Whether the operator offers an R&R reserve
- Whether the financing structure (PPA vs. owned) absorbs the cost

For PPAs, the operator typically carries R&R risk. For owned, you do. Price accordingly.

## How NOI handles it

Every site assessment includes a structural and roof condition review. If your roof is too old, we'll tell you. We don't install on doomed roofs because it's bad for everyone — including us.

If a re-roof is needed, we can either bundle it into the project (financed) or refer to a roofing partner for a standalone quote. Then we time the solar install to match.

## The cost of getting this wrong

A 60 kW system removed and reinstalled mid-life costs $12,000–$18,000 plus the lost revenue during downtime. On a 12-unit property, that's 1–2 years of solar NOI evaporating. Worth getting right the first time.${sig}`,
  },
  {
    slug: "solar-electrification-multifamily",
    title: "Why Solar Pairs With Electrification: The Real NOI Stack for 2030-Ready Multifamily",
    description:
      "Heat pumps, induction, EV chargers — every new load is more electrons to sell. Solar is the upstream revenue layer.",
    excerpt:
      "Electrification is happening to your building whether you plan for it or not. The question is whether you're capturing the revenue or just absorbing the cost.",
    category: "Strategy",
    date: "2026-05-30",
    readMinutes: 7,
    keywords: [
      "multifamily electrification",
      "solar heat pump",
      "EV charger multifamily NOI",
      "electrification revenue landlord",
    ],
    body: `## The macro shift

Every state with serious climate policy is pushing buildings toward electrification:
- Gas bans for new construction (California, New York, Massachusetts)
- Heat pump mandates and rebates
- EV charger requirements for new and renovated buildings
- Decarbonization deadlines (NY LL97, CO building emissions rules)

For landlords, this means a steadily increasing electric load per unit — from cooking, heating, hot water, and vehicle charging. That load has to come from somewhere.

## The revenue stack

Without solar:
- Tenant electric loads rise 40–80% as electrification rolls out
- Tenant pays the utility for all of it
- Landlord captures: nothing

With solar + NOI:
- Tenant electric loads still rise
- Tenant buys from the rooftop at a discount to utility
- Landlord captures: 15–25% of the new load as recurring revenue

The kicker: **electrification grows your solar revenue line over time** without you doing anything. Today's tenant uses 700 kWh/month. Five years from now after they install induction and heat-pump water heating, they're using 1,100 kWh/month. Your solar billing line grows proportionally.

## EV chargers specifically

Multifamily EV charging is a separate revenue category — but it pairs perfectly with rooftop solar. A property with 80 kW of solar and 8 EV chargers can:

- Charge the cars from the array during the day
- Bill tenants for charging at a discount to public DCFC
- Maintain its own demand profile to avoid utility demand charges

NOI's roadmap includes EV charging as a Phase 2 product on every solar-enabled property. Same meter, same billing rail.

## What landlords should do now

1. **Wire for the future.** When you re-roof or do mechanical work, add conduit for solar even if you're not installing this year.
2. **Plan electric service capacity.** A 200-amp main panel won't be enough for full electrification. Solar plus battery + smart load management can defer expensive panel upgrades.
3. **Solar first.** It's the only revenue-generating piece of the electrification stack. Get it in place before tenant loads grow.

## The 2030 building

In five years, the best-positioned rental properties will be the ones with:
- Solar on the roof
- Heat pumps in the units
- EV charging in the lot
- A landlord who bills tenants for all three

That's the future NOI is building toward. [Get the solar piece in place first.](/contact)${sig}`,
  },
  {
    slug: "investor-pitch-solar-noi",
    title: "How to Pitch Solar NOI to Your LPs and Investors (Without the Greenwashing)",
    description:
      "LPs don't want ESG theater — they want yield. Here's how to frame solar revenue in a way that gets a fund manager nodding.",
    excerpt:
      "If you're about to raise capital and want to add solar to your value-add story, frame it as a yield strategy. The sustainability narrative is the bonus, not the lead.",
    category: "Capital",
    date: "2026-05-31",
    readMinutes: 6,
    keywords: [
      "solar LP pitch",
      "ESG real estate",
      "value add solar",
      "investor solar narrative",
    ],
    body: `## Lead with yield, not virtue

LPs have seen a decade of ESG pitches that didn't translate into returns. They're skeptical. The right opening line is some version of:

> "We're adding $X of recurring NOI per property at zero capex by monetizing rooftop solar through a tenant billing rail. At a Y% cap rate, that's a $Z multiple on our basis."

That's a yield pitch. The fact that it's also a carbon reduction story is icing.

## The four slides

**Slide 1: The hidden asset.** "Every rooftop in our portfolio is an underutilized revenue surface. The aggregate area is X sq ft. The achievable revenue, based on third-party operator quotes, is $Y per year."

**Slide 2: The operator stack.** "We're not in the solar business. NOI operates the meter and billing; an installer partner owns the equipment under PPA. We sign once and collect."

**Slide 3: The math.** "Per-property: $11K–$94K of net annual NOI depending on size. Portfolio aggregate: $X. At our exit cap rate of Y%, that's $Z of incremental enterprise value."

**Slide 4: The risk.** "Operator counterparty risk: mitigated by escrow and transferability. Regulatory risk: state-by-state qualification. Tenant collection risk: <2% historic default."

## What LPs actually ask

- "What's the take rate?" — Underwrite 75% year one, 85% stabilized.
- "What happens if a tenant won't pay?" — Stripe Smart Retries handle 70%; remainder is documented exception list.
- "How does this affect our exit?" — Capitalized NOI flows into appraisal. We provide the appraisal pack.
- "Can we transfer the agreement?" — Yes, binds to property, not owner.

If you can answer all four cleanly, you'll get the line item in the deck.

## What to avoid

- "Green premium" claims without evidence
- "Tenant satisfaction" claims without data
- Underwriting at 100% take rate
- Treating ITC + depreciation as part of the LP return (those go to the system owner under PPA)

## What helps close

A side-by-side return model showing your asset *without* solar vs. *with* solar over a 5- and 10-year hold. The NOI delta, the IRR delta, the equity multiple delta. We provide that model for any property we underwrite, at no cost.${sig}`,
  },
  {
    slug: "solar-checklist-rental-property-owner",
    title: "The Rental Property Owner's Solar Checklist: 12 Things to Do Before Signing Anything",
    description:
      "A practical pre-commitment checklist for landlords evaluating solar. Use this before any installer or operator gets your signature.",
    excerpt:
      "Save yourself a multi-year headache. Run any solar proposal through these 12 checks before you sign.",
    category: "Checklist",
    date: "2026-06-01",
    readMinutes: 6,
    keywords: [
      "solar checklist landlord",
      "before installing solar rental",
      "solar due diligence",
      "rental solar evaluation",
    ],
    body: `## The 12-point checklist

### Property & roof
- [ ] **1. Roof age and remaining life.** Less than 15 years remaining = consider re-roof bundle.
- [ ] **2. Roof structural capacity.** 4 lb/sqft minimum for rooftop solar.
- [ ] **3. Shading and obstruction analysis.** Drone shading study, not guesswork.

### Regulatory
- [ ] **4. State VNEM or third-party billing framework.** Confirm legal viability.
- [ ] **5. Local utility interconnect timeline.** 4–10 months is typical; longer kills momentum.
- [ ] **6. HOA / city aesthetic restrictions.** Check before you commit.

### Financial
- [ ] **7. Two financing quotes side by side.** PPA *and* owned. Demand both.
- [ ] **8. Realistic take rate assumption.** 75% year one, not 100%.
- [ ] **9. All-in fee breakdown.** Platform, processing, O&M. No hidden lines.

### Operational
- [ ] **10. Tenant billing rail.** Who runs the inbox? What's the SLA on disputes?
- [ ] **11. Lease addendum language.** Get a copy. Have your attorney review.
- [ ] **12. Exit / transferability.** Does the agreement transfer at sale? At refi?

## How to use it

Take any solar proposal — from us or anyone else — and check off each item. If a proposal can't answer item 5 or item 9, that's a red flag. If it can't answer item 12, walk away.

## What NOI provides upfront

For every site assessment, you get a written response to all 12 items, in writing, before you're asked to sign anything. We'd rather lose a deal on transparency than win one on confusion.

## The single most important item

If we had to pick one: **item 10**. Who runs the tenant billing inbox. That's where 80% of failed solar projects fall apart. The installation is the easy part. The decade of monthly billing is the hard part.

Run the checklist. [Then run your property](/economics) through our calculator. Both are free.${sig}`,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((p) => p.slug);
}
