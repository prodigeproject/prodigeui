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
  These read as "shadcn starter, untouched." **Tune custom values** — e.g. a distinctive
  lime `#b8ff3a`, or shift the neutral hue/lightness off the raw scale. A font-rotation or
  color pick that lands EXACTLY on a framework default has failed the anti-default test.
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

## Hero discipline (the NOVA-fix rules)

- **Anchor the hero with a REAL focal subject** — video, photography, product/UI mockup, 3D
  render, or oversized deliberate type. **Never a blurred CSS gradient/mesh blob as the
  subject.** (This is exactly what made NOVA messy; ~83% of benchmark heroes use real media.)
- Hero fits the initial viewport; headline ≤ 2 lines; subtext ≤ ~20 words / ≤ 3–4 lines;
  primary CTA visible without scrolling; top padding capped (~`pt-24`).
- **Max ~4 text elements in the hero.** Move taglines, trust micro-strips, pricing teasers,
  and avatar rows below the fold.
- **Legibility from chrome, not dimming:** liquid-glass + gradient fades over raw media beat
  a flat dark overlay (benchmark prompt 57 explicitly bans a scrim).
- **Headline scale must be DRAMATIC** (the #1 hero regression): use
  `clamp(2.7rem, 8vw, 6.4rem)` for the primary hero headline — upper bound ~6.4rem desktop.
  Capping at 4.5rem reads timid and is a known downgrade. The headline is the single biggest
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
- **Numbered section markers** (01 / 02 / 03) are not free scaffolding — use only with a real
  reason.

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
- **Split-header ban.** "Big headline left + small explainer paragraph right" as a section
  header is banned by default. Stack headline over body (≤65ch) unless the right column
  carries a real visual/interactive element (not filler text).
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

### Banned as Permanent Default (never use reflexively)
- **Inter** (as display) — acceptable as body only
- **Space Grotesk** — acceptable as ONE project's display, not the system default
- **DM Sans / DM Serif** — LLM favorites, use only when justified
- **Plus Jakarta Sans** — overused in AI output 2024-2026
- **Instrument Serif / Fraunces** — banned as default display serif (see serif discipline above)

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

