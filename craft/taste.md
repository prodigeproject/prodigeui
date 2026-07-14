# Craft Taste & Anti-Generic Heuristics

> Distilled from the sharpest concrete sources in the research set — `impeccable`,
> `taste-skill`, `hyperframes` — cross-checked against the 73-prompt benchmark taxonomy.
> These are MECHANICAL, checkable heuristics, not vague advice. They are what turns a
> competent-but-forgettable page (the NOVA failure) into a distinctive one.

## The core reconciliation (read first)

The research contains an apparent contradiction: taste-skill discourages reflex serif and
bans Instrument Serif/Fraunces *as defaults*; impeccable bans default glassmorphism and
gradient text — yet the 73 award-quality benchmark prompts use Instrument Serif + Inter as
the dominant pairing and liquid-glass as the most-reused primitive.

**Resolution:** a technique is slop when it's the **unthinking reflex**, and craft when it's
a **deliberate, committed choice tied to the concept.** The bans below target the reflex.
If you can name *why* this concept needs a display serif / glass / gradient — and you commit
to it consistently — it's craft. If it's just your default, it's slop. Deliberateness and
commitment are the dividing line.

## Discipline must not flatten art direction (read this before "restraining" anything)

There are TWO failure modes, not one. Slop (generic, purposeless) is the famous one. The
other is **stiff**: a build so scrubbed by rules that it loses all artistic pull — timid
type, safe centered layout, no signature move, no risk. For **expressive briefs** (creative
studio, agency, portfolio, brand, launch, experimental) STIFF IS THE WORSE FAILURE, because
"average is no longer findable" — a competent-but-forgettable page loses on arrival.

- Rules are a floor, not a ceiling. Passing every anti-slop check does NOT make a page good;
  it makes it not-bad. Art direction (a bold type statement, a committed accent, one
  memorable engine moment, generous imagery) is what makes it good — never trade it away to
  satisfy a mechanical rule.
- When an anti-default rule (anti-neon, anti-big-type, restraint) would make an expressive
  build calmer and safer, that rule is probably mis-applied to the register. Restraint is a
  tool for FUNCTIONAL product UI, not a universal virtue. Match ambition to register: go big
  and rich on brand/agency work; go calm and precise on dashboards.
- If your "improved" version is more correct but less beautiful than the previous one, you
  regressed. Revert toward the beautiful one and fix only the genuine defect.

## Anti-generic: the two-altitude slop test (impeccable)

Before shipping, run both:
1. **First-order:** Could someone guess the theme + palette from the product *category*
   alone? (fintech→blue, AI→purple, wellness→sage green.) If yes, it's the training reflex.
2. **Second-order:** Could they guess it from "category + the obvious anti-reference"?
   (AI tool that's "not SaaS-cream, so → editorial serif + mono labels"?) If yes, you fell
   into the trap one tier deeper.
Rework until neither is guessable. "Restraint without intent now reads as mediocre, not
refined." Safe = invisible.

## Typography discipline

- **Font reflex-reject procedure** (never skip for expressive work):
  1. Write three *physical-object* voice words for the brand (e.g. "cold, precise, surgical").
  2. List the three fonts you'd reflexively reach for.
  3. **Reject any on the reflex list** unless the concept genuinely demands it: Fraunces,
     Newsreader, Lora, Crimson, Playfair, Cormorant, Syne, IBM Plex *, Space Mono/Grotesk,
     Inter (as *display*), DM Sans/Serif, Outfit, Plus Jakarta, Instrument Serif.
  4. Pick against the voice words from a real catalog. If the pick equals your reflex, restart.
  - Note: Inter and Instrument Serif are excellent as BODY / deliberate accent (the benchmark
    proves it). The ban is on using them as the unconsidered *default display face*.
- **Ceilings/floors:** measure 65–75ch; display letter-spacing floor `-0.04em` (tighter =
  letters touch = cramped); tight leading (0.85–1.0) on display; `text-wrap: balance` on
  h1–h3, `pretty` on prose.
- **Pair on a contrast axis** (display serif + grotesk body; or one family across weights).
  Never pair two similar sans.
- **Emphasis within a headline** = italic/bold of the SAME family — never inject one random
  serif word into a sans headline.

## Color discipline

- **Contrast is the #1 readability failure.** Body ≥ 4.5:1, large ≥ 3:1, placeholders need
  the full 4.5:1. "Light gray for elegance" is the single biggest reason AI designs feel
  hard to read. Gray-on-color = a darker shade of the bg's own hue, or a transparency of the
  text color — not a neutral gray.
- **Pick a color strategy on a commitment axis, named against a real reference, BEFORE
  picking colors:** Restrained (tinted neutrals + one accent ≤10%) → Committed (one saturated
  color 30–60% of surface) → Full palette (3–4 named roles) → Drenched (surface IS the color).
  "Unnamed ambition becomes beige." Commit — don't hedge a committed color with neutral edges.
- **One accent, saturation < ~80%,** used identically across ALL sections (consistency lock).
- **Bans:** reflex AI-purple glow; the cream/sand/beige body background (the saturated AI
  default of 2026 — OKLCH L 0.84–0.97, C<0.06, hue 40–100, and token names `--paper/--cream/
  --sand/--bone/--linen` are tells in themselves); the premium beige+brass+espresso palette.
  Carry "warmth" via accent + type + imagery, not the body background.
- **Framework-default palettes are ALSO a tell (the shadcn-default trap).** Do not ship raw
  Tailwind `zinc`/`slate`/`neutral` scales (`#09090b/#18181b/#27272a/#3f3f46`) as the WHOLE
  dark palette, and do not use framework-default accents verbatim: `#22c55e` (green-500),
  `#3b82f6` (blue-500), `#ef4444` (red-500), `#8b5cf6` (violet-500), `#f59e0b` (amber-500).
  These read as "shadcn starter, untouched." **Tune custom values** or shift the neutral
  hue/lightness off the raw scale. A font-rotation or color pick that lands EXACTLY on a
  framework default has failed the anti-default test.
- **Anti-neon accent guard (the NEW 2026 slop, supersedes the old "distinctive lime"
  advice).** Over-correcting away from framework defaults into a fluorescent accent (acid
  lime `#b8ff3a`, hot cyan, electric magenta, laser green) is now its own AI-techy tell — it
  reads as "AI-generated tech page," not premium. Shipped premium landings (Linear, Stripe,
  Vercel, Antimetal, Plasma) run near-monochrome + ONE *refined* accent. **Accent taste test:**
  would this color live in a considered brand system, or only in an AI "tech" mock? A
  confident accent usually sits at OKLCH chroma ~0.10–0.18; the 0.25+ fluorescent zone is
  almost always wrong for body-adjacent UI. Deepen or desaturate before committing. See
  `craft/patterns/modern-product-baseline.md` (Color).
- **Derive the palette FAMILY from the product — do NOT default to the house look (the
  third-altitude slop test).** ProdigeUI has a reflex of its own by now: near-black canvas +
  ONE warm incandescent accent (ember / vermilion / amber) + a big grotesk. Shipped enough
  times, that signature IS a template — a knowledgeable viewer can say "that's an AI
  design-system page" from the dark+warm-accent+grotesk look ALONE, which is exactly the slop
  the two-altitude test targets, one tier up. So before committing, run the **third altitude:
  could someone guess this is a ProdigeUI / AI-house page from its dark-mono-warm-accent look,
  regardless of what the product is?** If yes, you defaulted — the palette is decorating the
  system's habit, not the product. Route the family from the product's meaning instead:
  - **Light vs dark** follows the product's mood and where it lives, not habit. A creative
    studio, a playful/consumer brand, editorial, retail, health, or anything "bright /
    optimistic" often reads truer LIGHT or in a committed color. Dark-mono is not
    automatically premium — it is one lane. (In the NOVA benchmark the comparator that "got"
    the studio chose a committed light palette; the reflex dark-ember builds read as
    templated next to it. That is the tell in action.)
  - **Temperature + hue** follow the concept, not always warm. "Stellar heat → ember" is one
    concept; a brand about clarity, water, growth, trust, craft, or play wants a cool, green,
    ink, or bold-primary family, not a recycled ember.
  - **Commitment level** follows the register (see the color-strategy axis above): expressive
    brand work can run a committed saturated color or a 2–3 role palette, not only "mono + one
    accent." Restrained near-mono is the right default for **trust-first B2B**, not a universal
    virtue — applying it to expressive work is what makes the output look templated.
  The anti-neon guard still holds (no fluorescent accent). It is NOT a licence to always go
  dark-mono-warm. Pick the family for the product first; apply restraint *within* that family.
- Write a one-sentence physical scene ("who uses this, where, under what light, in what
  mood") to force the dark/light decision.

## Layout discipline

- **Cards are the lazy answer; nested cards are always wrong.** Reach for real layout
  (grid regions, editorial columns, overlap) before wrapping everything in bordered boxes.
- **Flex for 1D, Grid for 2D.** Don't default to Grid when `flex-wrap` suffices. Breakpoint-
  free grid: `repeat(auto-fit, minmax(280px, 1fr))`.
- **Layout anti-repetition:** a layout family appears at most once per page (aim ≥4 families
  across ~8 sections); consecutive zigzag image+text splits capped at 2; avoid the
  big-headline-left + small-explainer-right split as a reflex.
- **Long lists ≠ a longer list:** >5 items must switch UI component (2-col split, card grid,
  tabs/accordion, scroll-snap pills, carousel, marquee). A long table with a hairline under
  every row is the worst default.
- **Semantic z-index scale** (base→dropdown→sticky→modal→toast→tooltip), never `9999`.
- **Vary spacing for rhythm** (a 4pt scale gives finer control than 8pt). Tighter within a
  group, looser between groups.
- **Section separation (mandatory):** two adjacent full-width sections must NOT share the
  same flat background with only whitespace between them — they blur into one long scroll.
  Separate them by ONE of: (a) alternating background tone (`--bg` ↔ `--surface`),
  (b) a hairline top border (`border-top:1px solid var(--line)`), or (c) a distinct
  treatment (full-bleed media, accent band, glow). Aim to alternate the surface tone across
  the page (e.g. features=bg, metrics=surface, testimonial=bg, pricing=surface, faq=bg) so
  the eye always registers a boundary. A run of 3+ consecutive same-background sections is a
  FLAG. Never rely on padding alone to divide sections.

## Hero discipline (the NOVA-fix rules)

- **Anchor the hero with a REAL focal subject** — video, photography, product/UI mockup, 3D
  render, or oversized deliberate type. **Never a blurred CSS gradient/mesh blob as the
  subject.** (This is exactly what made NOVA messy; ~83% of benchmark heroes use real media.)
- Hero fits the initial viewport; headline ≤ 2 lines; subtext ≤ ~20 words / ≤ 3–4 lines;
  primary CTA visible without scrolling; top padding capped (~`pt-24`).
- **Max ~4 text elements in the hero.** Move taglines, trust micro-strips, pricing teasers,
  and avatar rows below the fold.
- **Negative space must be ACTIVATED, never dead.** A full-viewport hero (`min-height:100vh`)
  with `justify-content:center` and only a few small elements leaves large empty bands above
  and below — that reads as a bug, not as luxury whitespace. Same failure for a short centered
  final-CTA / contact block sitting in a tall section. Fix by ONE of: (a) an oversized anchor
  that fills the void (a giant outline wordmark, the focal subject / product mockup, real
  background media or texture), (b) bigger art-directed type that occupies the space, or
  (c) reducing `min-height` / section padding so the block sizes to its content. Empty is not
  minimal. Also verify every decorative absolute layer (glow blobs, ghost text) actually STAYS
  absolute: a `.hero>*{position:relative;z-index:1}` rule that ties on specificity with a
  `.blob{position:absolute}` rule (later source order wins) silently forces the blob in-flow
  as a giant blurred square that shoves content and guts the layout with blank bands — the
  exact ui-ux-pro-max NOVA regression. Give decorative layers higher-specificity absolute
  positioning (e.g. `.hero .hero__blob{position:absolute}`), or exclude them from the
  content-lift rule.
- **Legibility from chrome, not dimming:** liquid-glass + gradient fades over raw media beat
  a flat dark overlay (benchmark prompt 57 explicitly bans a scrim).
- **Headline scale is REGISTER-DEPENDENT — do not apply one ceiling to every brief.**
  This was over-corrected in an earlier revision and it flattened expressive work; the fix:
  - **Expressive / creative / agency / portfolio / experimental briefs:** BIG art-directed
    type is the point. `clamp(2.8rem, 11vw, 9rem)` (even to ~11rem) at weight 700-800,
    line-height ~0.86-0.9, tracking -0.03 to -0.05em, an italic accent word. This is the
    v4-NOVA hero and the pre-footer "go nova?" CTA (`clamp(2.6rem, 10vw, 7.5rem)`) — the
    single biggest source of that build's beauty. Never shrink it in the name of "restraint."
  - **B2B product / SaaS / dashboard / trust-first briefs:** confident but calmer, ~`clamp(
    2.4rem, 5vw, 4.6rem)`. Impact comes from whitespace + a real product artifact, not scale.
  Capping an expressive hero at 4.5-6.5rem reads TIMID and STIFF — a regression, not
  refinement. The failure mode "competent but stiff" is as bad as "slop". See
  `craft/patterns/modern-product-baseline.md` (Typography, register note). The headline is the single biggest
  visual statement; let it dominate. Headline `max-width: ~14ch`; subtitle `max-width: ~52ch`
  (generous, NOT a narrow 38ch column). Do not lock the whole hero block to `max-width:640px`.
- **Eyebrow copy = status/announcement, never category restatement.** "Now in public beta"
  or "Backed by YC" beats "AI project management for engineering." The eyebrow must add NEW
  information (momentum/timeliness/proof), not echo the headline. See
  `use-cases/landing/hero.guide.md`.
- **Nav = single floating glass pill** (centered, pill radius, backdrop-blur), not a
  full-width top bar with a nested inner pill.
- **Stats animate by default** — count-up from 0 with a blur-clear on scroll-into-view
  (`advanced-effects.md` §5), `tabular-nums`. Static metric numbers read dead.

## The eyebrow / marker restraint (the #1 over-used tell)

- **Eyebrow labels** (tiny uppercase tracked kicker above a section): max 1 per ~3 sections.
  Mechanically count them — fail if count > `ceil(sections / 3)`. Often the right move is to
  drop it entirely.
- **Numbered section markers** (01 / 02 / 03) — reconciled. A *decorative* number stuck above
  every heading with no sequential meaning is scaffolding slop. But a *consistent running
  index* that labels the page's real, continuous sections (as Antimetal's `01…06` does) is
  CRAFT and welcome. Rule: number a series only if the numbers form a true, continuous index
  of the whole page; never as a per-section ornament.

## Motion discipline

- **Every animation must be motivated** in one sentence: hierarchy, storytelling, feedback,
  or state. Never "looked cool."
- **The tell is the uniform reflex** (one identical fade on every section), not motion itself.
  Each reveal should fit what it reveals.
- **Ease-out with exponential curves** (quart/quint/expo). **No bounce/elastic on entrances**
  (feels dated) — reserve spring/overshoot for direct manipulation or a tasteful settle.
- **Reveals must enhance an already-visible default** — don't gate visibility on a JS/class
  transition, or the page ships blank on headless renders / with JS disabled.
- **`animation-fill-mode: backwards`** when an entrance animation wraps a `backdrop-filter`
  child, or the glass breaks mid-animation (benchmark prompt 61).
- Timing: 100 / 300 / 500 rule; exits ~75% of enter duration; ~80ms = perceived-instant.
- Reduced-motion is mandatory. Marquee: max one per page.

## Absolute bans — match and REWRITE the element (impeccable)

These read as AI/model tells when used *by default*. Using them requires explicit concept
justification; otherwise rewrite:
- Side-stripe borders (a >1px colored left/right border on cards).
- Gradient text (`background-clip: text`) as a default flourish.
- Glassmorphism applied to everything by reflex (glass is craft over media, slop as filler).
- The hero-metric template (giant number + label + gradient), as scaffolding.
- Identical card grids (three equal cards) — use hierarchy/bento instead.
- Ghost-card (1px border + soft ≥16px shadow together).
- Over-rounding (cards top out ~12–16px, not 24/28/32px everywhere).
- Hand-drawn/sketchy `feTurbulence` illustrations, doodle scenes.
- Decorative two-axis grid backgrounds, repeating-linear-gradient stripe backgrounds.
- **Never animate an `<img>` on hover** (incl. `group-hover:scale` on a child image) —
  animate the card's bg/border/shadow instead. (Model-specific defect; image scale looks cheap.)

## Copy self-audit (re-read every visible string)

Flag and rewrite: fake-precise numbers (`92%`, `5.8mm`) invented for flavor; "Quietly
trusted by"; poetic craftsman labels ("From the field"); generic step labels ("Stage 1/2/3");
locale/weather/time strips added for decoration; scroll cues; version stamps. **The em-dash
is banned** in generated copy (headlines, body, captions) — it's a strong AI tell; use a
period, comma, or restructure. CTA copy describes the outcome ("Start 14-day trial", "See
the work"), never "Get Started".

## Completeness (craft includes the unglamorous states)

- Always ship loading (skeletons, not spinners) / empty / error states.
- `:active` feedback = `translateY(1–2px)` or `scale(0.98)`.
- One primary action per view; action-describing labels; destructive needs confirmation;
  icon-only controls need an accessible label + tooltip.
- **Real images/logos are mandatory** when the brief implies them (restaurant, travel,
  product). Text-only pages with div-based fake screenshots read as unfinished. Use real SVG
  brand logos (e.g. Simple Icons), not text wordmarks. Search the *physical object* for photos
  ("handmade pasta on scratched wood" > "Italian food"). One decisive photo beats five bland.

## Mechanical layout hard-rules (binary Pre-Flight fails)

These are pass/fail scans an agent runs on its own output before shipping. Each is a known
production AI-tell. Failing any is shipping broken work.

- **CTA wrap ban.** Primary CTA text fits on ONE line at desktop. If a label wraps to 2+
  lines, shorten it (≤3 words, ideally 1–2) or widen the button. Never `max-width`-constrain
  a CTA into a wrap.
- **No duplicate CTA intent.** One label per intent across the WHOLE page. "Get in touch" +
  "Contact us" + "Let's talk" = one intent → pick one label, use it in nav/hero/footer.
  Same for signup ("Try free"/"Get started"/"Sign up") and portfolio ("View work"/"See
  projects"). Two CTAs with the same intent = fail.
- **Nav on one line.** Desktop nav renders on a single line; if it doesn't fit at 1024px,
  condense labels, drop secondary items, or go hamburger. Nav height ≤ 80px (default 64–72).
  A two-line desktop nav or a nav eating >15% of the viewport is broken.
- **Zigzag alternation cap ≤ 2.** At most 2 consecutive "image+text split" sections. The 3rd
  in a row is a fail — break with a full-width, vertical-stack, bento, or marquee section.
  (Combines with the layout anti-repetition rule: ≥4 distinct layout families per ~8 sections.)
- **Bento cell count = content count.** A bento/feature grid has exactly as many cells as you
  have content for (3 items → 3 cells; 5 → 5). No empty middle/end tile; re-shape the grid
  instead of pasting a blank cell. ≥2–3 cells need real visual variation (image/tint/pattern),
  never all cream-on-cream typography.
- **Split-header reflex ban.** "Big headline left + small explainer paragraph right" is
  rejected when it is repeated scaffolding. It is allowed as one intentional rhythm change
  when alignment, measure, and surrounding sections make the split specific rather than filler.
- **Hero top-padding cap.** Hero top padding ≤ `pt-24` (~6rem) at desktop. More = content
  floats halfway down and reads as a bug. Need more air? Increase font/asset scale, not padding.
- **Consistency locks (audit every component before shipping):**
  - *Color lock* — one accent chosen for the page is used on the WHOLE page. No blue CTA in
    section 7 of a warm-grey site; no teal badge in a rose footer.
  - *Shape lock* — one corner-radius system (all-sharp, all-soft ~12–16px, or all-pill for
    interactive). Mixed radius allowed only with a documented rule followed everywhere.
  - *Shadow lock* — one elevation scale; shadows tinted to the bg hue, never pure black on
    light. One icon family, one stroke width.

## Icon discipline

- **One icon family per project** (Phosphor, Hugeicons, Radix, Tabler, Lucide-if-asked).
  Never mix families in the same tree. Standardize `strokeWidth` globally (e.g. 1.5 or 2.0).
- **Never hand-roll SVG icon paths.** If a glyph is missing, install a second library or
  compose from primitives — don't draw paths from scratch.
- **No emoji as feature/UI icons** (✨🚀🎯⚡🔥💡 inside headings/buttons/list items). Use
  monoline SVG with `currentColor`. Emoji only when the brief explicitly wants a playful/
  chat/social vibe.

## Typography — italic descender clearance (mandatory)

When italic display type contains a descender (`y g j p q`), `leading-none`/`leading-[1]`
clips it. Use `leading-[1.1]` minimum plus `pb-1`/`mb-1` reserve on the wrapping element.
Audit every italic word in a display headline before shipping.

## The one-line "Design Read" (do before generating)

State intent first: "Reading this as: {page kind} for {audience}, with a {vibe} language,
leaning toward {named reference/aesthetic}." Then set the three dials (DESIGN_VARIANCE,
MOTION_INTENSITY, VISUAL_DENSITY). This forces a deliberate direction instead of a default.

## Related
- `quality-gate/anti-ai-slop.checklist.md` — the gate that enforces these
- `research/benchmark-pattern-taxonomy.md` — the empirical basis
- `craft/composition.md` — page-level assembly
- `craft/patterns/` + `craft/patterns/effects-catalog.md` — the technique recipes

---

## APPENDIX A: Font Anti-Defaults & Rotation Pool

> **Important nuance (do not over-correct):** The goal is VARIETY across projects and
> avoiding the *thoughtless reflex* — NOT banning good fonts. **Space Grotesk + Inter is a
> PROVEN, benchmark-winning pairing** (it produced the strongest FlowAI benchmark). It is a
> first-class choice, not something to avoid. Reach for the rotation pool when you want a
> different character, not because a proven pairing is "forbidden." A deliberate,
> concept-fitting choice of Space Grotesk/Inter beats a random rotation pick every time.

### Discouraged ONLY as thoughtless reflex (all fine when deliberate)
- **Inter as display** — excellent as body; as display use with intent (tight tracking, weight).
- **Space Grotesk** — proven display face; use it when the dark-tech/geometric character fits.
- **DM Sans / Plus Jakarta Sans** — fine, just overused; pick deliberately.
- **Instrument Serif / Fraunces** — the two most over-reached display serifs; justify if used.

The real ban: reaching for a font WITHOUT a reason, or picking one that fights the concept.

### Preferred Sans Display Pool (rotate, never reuse across consecutive projects)
`Geist` · `Outfit` · `Cabinet Grotesk` · `Satoshi` · `General Sans` · `Switzer` · `Clash Display` · `PP Neue Montreal` · `ABC Diatype` · `Söhne` · `GT Walsheim` · `Migra Sans`

### Preferred Monospace (for dev-tool/code aesthetics)
`Geist Mono` · `JetBrains Mono` · `Berkeley Mono` · `Fira Code` · `IBM Plex Mono`

### Serif (ONLY when justified per serif discipline)
`PP Editorial New` · `GT Sectra Display` · `Reckless Neue` · `Tiempos Headline` · `Canela` · `Domaine Display` · `NB Architekt` · `Saol Display` · `Cormorant Garamond` · `EB Garamond`

### Pairing Rules
- Pair on a CONTRAST axis (serif display + sans body, OR one family across weights)
- Never pair two similar sans-serifs
- Body always ≥ 400 weight, display can go 300 (light) for elegance or 700+ for impact
- `font-display: swap` mandatory on all custom fonts

---

## APPENDIX B: Premium-Consumer Palette Ban

For premium/luxury/artisan/DTC briefs, the LLM default is warm beige + brass/clay + espresso. **BANNED as default:**

### Banned Background Hex Families
`#f5f1ea` · `#f7f5f1` · `#fbf8f1` · `#efeae0` · `#ece6db` · `#faf7f1` · `#e8dfcb` · `#faf8f5`
(All "warm paper / cream / chalk / bone / linen" variants)

### Banned Accent Hex Families
`#b08947` · `#b6553a` · `#9a2436` · `#9c6e2a` · `#bc7c3a` · `#7d5621` · `#6b5c4c`
(All "brass / clay / oxblood / ochre / walnut" variants)

### Banned Text Hex Families
`#1a1714` · `#1a1814` · `#1b1814`
(All "espresso / warm near-black" variants)

### Alternative Premium Palettes (rotate)
| Name | Base | Accent | Character |
|------|------|--------|-----------|
| **Cold Luxury** | Silver-grey `#f4f4f5` | Chrome `#71717a` | Tesla/Apple Watch vibe |
| **Forest** | Deep green `#052e16` | Bone `#fef9c3` + amber | Filson/Patagonia |
| **Black & Tan** | True off-black `#0c0a09` | Warm tan `#d6a05c` | Sharp contrast, no beige |
| **Ink & Paper** | Pure white `#fafafa` | Ink black `#18181b` | Editorial, stark |
| **Deep Sea** | Navy `#0f172a` | Coral `#fb7185` | Unexpected premium |
| **Graphite** | Dark grey `#1c1917` | Warm white `#fef3c7` | Modern minimal |

---

## APPENDIX C: Layout Tension Rules (Anti-Center-Bias)

### The Problem
AI defaults everything to centered: centered hero, centered section headers, centered cards.
Result = visually flat, no tension, no eye movement.

### Rules
1. **Not every section heading is centered.** Alternate: left-aligned heading + right-aligned subtitle on same line (split-header), or left-aligned heading above content.
2. **Asymmetric grid is default** for features/bento: `1.4fr 1fr` or `2fr 1fr`, not `1fr 1fr 1fr`.
3. **One section per page MUST break the container** — a full-bleed image, a marquee that touches edges, or a background color shift that spans viewport width.
4. **Visual weight distribution:** at least 2 sections should have dominant-side weight (content heavier on left OR right, not centered).
5. **Vertical rhythm variation:** alternate tight sections (metrics/logos: py-44) with breathing sections (hero/testimonial: py-96). Never uniform padding.
6. **The "scan path" test:** trace where the eye moves section-to-section. If it stays on center-axis the entire page, add a section that pulls attention left or right.

