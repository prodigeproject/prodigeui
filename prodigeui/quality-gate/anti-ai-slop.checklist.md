# Anti-AI-Slop Checklist

> **Purpose:** Identify and reject GENERIC, low-effort AI output — WITHOUT punishing
> intentional craft. Every design output MUST be evaluated against this checklist before
> passing the Quality Gate.
>
> **The central distinction this gate enforces:**
> A technique is not slop or craft by its name. Glassmorphism, parallax, big gradients,
> decorative motion, huge type, and full-viewport heroes are **slop when purposeless and
> generic**, and **craft when intentional and well-executed**. The old version of this
> gate blanket-flagged these techniques and would have REJECTED the very reference sites
> we consider best-in-class. That was a mistake. This version flags the *absence of
> intent and execution*, not the *presence of a technique*.
>
> **Two things must both be true for expressive output:**
> 1. It avoids the generic AI defaults below (the negative gate).
> 2. It actually demonstrates craft — advanced technique, choreography, texture,
>    distinctive typography (the positive gate, see "Craft Presence Check" below and
>    `quality-gate/positive-patterns.md`). Avoiding slop is necessary but NOT sufficient.
>
> **Severity levels:**
> - **FAIL** — Hard block. Must be fixed before shipping. These are correctness and
>   accessibility failures that are universal regardless of aesthetic ambition.
> - **FLAG** — A slop *signal*. Investigate intent. Passes if the technique is purposeful
>   and well-executed; fails only if it is a purposeless generic default.
>
> **Sources:** taste-skill-main (primary anti-slop methodology), impeccable-main,
> open-design craft rules, design-motion-principles-main, book research synthesis
> (Practical UI, Refactoring UI, Laws of UX, The Elements of Typographic Style), plus
> the reference-site audit that produced `craft/` (the reference implementation library).

---

## FAIL Indicators (Hard Block)

These patterns indicate fundamental quality failures. Presence of ANY = automatic fail.

> **Craft exception for FAIL #1, #5, and typography-scale:** Fluid and computed values
> that are *systematic* are NOT raw-value violations. `clamp(2.5rem, 14vw, 17.5rem)` for a
> display headline, `translateX(-50%)`, viewport units for full-bleed layout, and
> role-based per-item scroll offsets are legitimate craft (see `craft/patterns/`). They
> are systematic even when not literal token references. What FAILS is *arbitrary*
> one-off values with no system (`padding: 13px`, `#4a4a4a` picked at random). Judge
> "is this part of a coherent system?" not "is this a token literal?" Standalone
> one-file deliverables (a single HTML landing page) may inline a token layer via CSS
> variables or a Tailwind config rather than the full three-layer JSON — that is fine.

### 1. Raw Values Instead of Tokens

- **What to check:** Any hardcoded px, rem, hex color, or rgb() value used directly in
  component styling instead of referencing a design token.
- **Why problematic:** Breaks single source of truth. Changes cannot propagate centrally.
  Indicates the output was not integrated with the design system.
- **Example violation:** `padding: 16px` instead of `var(--space-md)`
- **Linked criteria:** `token-coverage`

### 2. Normal Text Contrast Below 4.5:1

- **What to check:** Every combination of normal-size text color and its background color.
  Calculate the WCAG contrast ratio.
- **Why problematic:** Fails WCAG 2.1 AA. Text becomes unreadable for users with low
  vision. Signals the output ignored accessibility entirely.
- **Example violation:** Light gray (#999) text on white (#fff) background = 2.85:1
- **Linked criteria:** `contrast-normal`

### 3. Large Text / UI Contrast Below 3:1

- **What to check:** Large text (>=18pt or >=14pt bold) and non-text UI elements
  (borders, icons, focus rings) against their backgrounds.
- **Why problematic:** Fails WCAG 2.1 AA for non-text elements. Interactive elements
  become invisible to users with moderate vision impairment.
- **Example violation:** Light border (#ddd) on white background for form inputs
- **Linked criteria:** `contrast-large`

### 4. No Focus Indicators on Interactive Elements

- **What to check:** Tab through every interactive element (buttons, links, inputs,
  toggles). Each MUST show a visible focus ring with >=3:1 contrast.
- **Why problematic:** Keyboard users cannot see where they are on the page. Creates
  a completely unusable experience for non-mouse users.
- **Example violation:** `outline: none` without a replacement focus style
- **Linked criteria:** `focus-visible`

### 5. Inconsistent Spacing (Off-Scale Values)

- **What to check:** All margin, padding, and gap values must come from the spacing
  token scale (multiples of 4px base unit).
- **Why problematic:** Creates visual chaos. Arbitrary spacing destroys rhythm and
  alignment. Signals the designer did not use a system.
- **Example violation:** `margin-bottom: 13px` or `padding: 22px` (not on 4px scale)
- **Linked criteria:** `spacing-consistency`

### 6. No Visual Hierarchy (Flat Information)

- **What to check:** Heading levels must have clear size AND weight differentiation.
  Content sections must have distinguishable importance levels.
- **Why problematic:** Users cannot scan the page. Everything looks equally important,
  so nothing is important. Classic sign of AI generating content without structure.
- **Example violation:** H1, H2, H3 all rendered at similar sizes with same weight
- **Linked criteria:** `visual-hierarchy`

### 7. Hardcoded Colors Instead of Semantic Roles

- **What to check:** Every color usage must reference a semantic token role
  (e.g., `color.surface.primary`) not a primitive value or raw hex.
- **Why problematic:** Theming becomes impossible. Dark mode breaks. Brand changes
  require touching every file. Indicates zero design system integration.
- **Example violation:** `background: #3b82f6` instead of `var(--color-action-primary)`
- **Linked criteria:** `theme-consistency`

### 8. Missing Component States

- **What to check:** Every interactive component must document and style ALL applicable
  states: default, hover, focus, active, disabled, error, loading.
- **Why problematic:** Incomplete states create dead-feeling interfaces. Users get no
  feedback on interaction. Professional UIs always define full state coverage.
- **Example violation:** Button with only default styling, no hover/focus/disabled state
- **Linked criteria:** `state-coverage`

### 9. Keyboard Trap

- **What to check:** Focus can enter AND exit every interactive region using only
  keyboard (Tab, Shift+Tab, Escape). No component traps focus.
- **Why problematic:** WCAG 2.1 failure. Keyboard users become stuck and must abandon
  the page. Critical accessibility violation.
- **Example violation:** Modal that cannot be closed with Escape key
- **Linked criteria:** `keyboard-operable`

### 10. Touch Targets Below Minimum Size

- **What to check:** All interactive elements must be >= 44px on mobile and >= 32px
  on desktop (both width and height, or equivalent touch area).
- **Why problematic:** Small targets cause frustration and errors. Fails WCAG 2.5.5.
  Especially harmful for users with motor impairments.
- **Example violation:** 24px icon-only button on mobile without expanded touch area
- **Linked criteria:** `touch-targets`

---

## FAIL Indicators — Composition & Focal Subject (added after the NOVA regression)

These are the hard rules that would have caught the messy NOVA output. They apply to
expressive use-cases (landing, portfolio, launch, brand, creative tool).

### C1. No real focal subject in the hero → FAIL (expressive)
- **What to check:** The hero must be anchored by a REAL focal subject — full-bleed video,
  real photography, a product/UI artifact, a 3D render, OR deliberate oversized display type.
- **Why:** ~83% of the 73 benchmark heroes use real media; a hero with no real subject reads
  as empty and generic. This is the single biggest cause of "competent but forgettable."
- **Violation:** text floating on a plain/animated background with no image, video, product,
  or genuine type-as-subject. See `craft/compositions/`.

### C2. Blurry CSS gradient / mesh as the hero background → FAIL (expressive)
- **What to check:** The hero background is a large blurred CSS gradient/mesh/radial "soup"
  standing in for a real subject.
- **Why:** This is THE NOVA failure and a top AI tell. Gradient-mesh-as-subject appears in 0
  of 73 award-quality prompts. A gradient may be textural BEHIND real type/media, never the
  empty subject itself.
- **Fix:** use the `giant-type-hero` (type as subject) or `cinematic-video-hero` (real video)
  composition instead.

### C2b. Absolute-positioned element without positioned parent → FAIL
- **What to check:** Any element with `position:absolute` whose intended containing parent
  does NOT have `position:relative` (or absolute/fixed).
- **Why:** The element escapes to the nearest positioned ancestor (or viewport).
  Percentage-based `width`/`height` then compute against an unintended (often much larger)
  container — a small toggle thumb renders at 50% of the VIEWPORT width instead of 50% of
  its toggle parent. This is the exact cause of "giant colored circle" bugs.
- **Common violations:**
  - Segmented control / toggle `.thumb` without `position:relative` on the toggle wrapper
  - Slider fill/handle without positioned track parent
  - Decorative pill/badge placed absolute inside an unpositioned flex container
- **How to detect:** For every `position:absolute` element, verify its direct parent (or
  intended containing block) has `position:relative`.
- **Fix:** Add `position:relative` to the intended parent container.

### C2c. Segmented control text invisible on active thumb → FAIL
- **What to check:** When the sliding thumb (accent-colored) is behind the active option,
  ALL text in that option must be readable against the thumb color. Child elements like
  discount badges ("−20%") that keep their accent color become invisible on an accent
  background.
- **Why:** The text is literally the same hue as the surface behind it — zero contrast.
- **How to detect:** Click each option; check that every piece of text (including small
  badges/labels) is legible in the active state.
- **Fix:** `[aria-checked="true"]{color:var(--accent-ink)}` must cascade to ALL children.
  Use `[aria-checked="true"] .badge{color:inherit}` or set explicitly.

### C3. Placeholder boxes / no real media on expressive work → FAIL (expressive)
- **What to check:** Gray `bg-gray-200` rectangles, div-based fake screenshots, or "image
  here" placeholders where real media belongs.
- **Why:** Real images/video are mandatory when the brief implies them. Placeholder boxes =
  unfinished. See `assets/asset-sourcing.guide.md`.

### C4. Muddy stacked-texture hero (low contrast) → FAIL
- **What to check:** Multiple semi-transparent texture layers stacked (blurred gradient +
  heavy grain + faint ghost text + low-contrast type) producing a muddy, low-legibility hero.
- **Why:** The NOVA hero stacked exactly these. Texture must serve legibility and depth, not
  fight it. Verify headline contrast ≥ 4.5:1 over the actual background.

### C5. Untouched system/Inter display type at hero scale → FAIL (expressive)
- **What to check:** The giant headline uses the default system font or Inter as the DISPLAY
  face with default tracking.
- **Why:** Distinctive display typography is the near-universal benchmark signature. Run the
  font reflex-reject procedure (`craft/taste.md`); pair a deliberate display face + body face;
  apply negative tracking and tight leading. Inter/Instrument Serif are fine when chosen
  deliberately, not as the unconsidered reflex.

---

## FLAG Indicators — Slop Signals (investigate intent, don't auto-reject)

> **How to read a FLAG:** Each item has a **SLOP form** (the generic, purposeless default
> — this is what we reject) and a **CRAFT form** (the same territory, done with intent and
> execution — this PASSES). Do not reject the technique. Reject the *purposelessness*.
> The discriminator question tells you which one you're looking at.

### 11. Purple/blue "default AI" gradient
- **SLOP:** Purple→blue gradient chosen as the accent because it's the model's default,
  unrelated to any brand or concept.
- **CRAFT:** A deliberate, concept-driven gradient (brand colors, a duotone that matches
  the photography, a warm sunset ramp for a travel product) — or a single confident accent.
- **Discriminator:** *Does the palette derive from the concept/brand, or is it the
  model's reflex?* Reject only the reflex.

### 12. Centered hero on a dark gradient/mesh
- **SLOP:** Centered headline + subtext + two buttons on a generic dark mesh, no media,
  no texture, no motion — the "Lorem ipsum" of layouts.
- **CRAFT:** A centered hero over a **crossfading video** or real photography, with grain,
  liquid-glass chrome, and a choreographed entrance (see `craft/patterns/video-hero-crossfade.md`).
  Many reference sites ARE centered heroes — executed with depth and media.
- **Discriminator:** *Is there real media, texture, and motion, or is it a flat empty gradient?*

### 13. Three equal feature cards
- **SLOP:** Three identical cards, same size, icon + heading + sentence, no hierarchy.
- **CRAFT:** A **bento grid** with a dominant hero cell and supporting cells, real media
  inside, and a clear focal point (see `craft/patterns/bento-grid.md`).
- **Discriminator:** *Does one element dominate, or is everything equal weight?* Equal
  weight is only acceptable for genuinely equal content (e.g., pricing tiers).

### 14. Inter + slate-900 by reflex
- **SLOP:** Inter + slate as the default because it's the Tailwind starting point, with
  no display face and no typographic personality.
- **CRAFT:** An intentional pairing — a display font (Anton, Instrument Serif, Kanit,
  Playfair, Helvetica Now Display) for headlines at fluid `clamp()` scale with tight
  tracking, and a clean body face (see `craft/patterns/fluid-display-type.md`). Inter is
  fine as a *body* face when paired with a display face and chosen deliberately.
- **Discriminator:** *Is there typographic personality (a display face, real scale,
  tracking), or is it the untouched default?*

### 15. Glassmorphism
- **SLOP:** Random frosted panels floating with no layering logic, hurting readability.
- **CRAFT:** **Liquid glass** as chrome over video/photography, providing contrast and
  layering without dimming the media, with the gradient-border mask detail (see
  `craft/patterns/liquid-glass.md`). This is a signature reference technique, not slop.
- **Discriminator:** *Does the blur serve layering/contrast over rich media, or is it
  decoration on a flat background?*

### 16. Many type sizes
- **SLOP:** Random, unrelated sizes with no ratio — typographic chaos.
- **CRAFT:** A fluid display ramp (giant hero, section headings, lead, body) that reads as
  intentional even with several sizes, because they follow a coherent scale/rhythm.
- **Discriminator:** *Do the sizes follow a system (modular or fluid), or are they
  arbitrary?* Count is less important than coherence.

### 17. Decorative animation
- **SLOP:** Motion sprinkled on everything with no sequence — things wobble for no reason.
- **CRAFT:** **Choreographed** motion — staggered word reveals, scroll-linked opacity,
  ambient video, marquees — that sets mood and guides the eye deliberately (see
  `motion/choreography.md`). Expressive pages SHOULD have rich, purposeful motion.
- **Discriminator:** *Is the motion choreographed and mood-setting, or random and
  sprinkled?* Ambient/brand motion is legitimate on expressive pages; on high-frequency
  app UI it is not.

### 18. Information overload (>5 decisions per screen)
- **SLOP / valid concern on APP UI:** Too many choices on a functional screen.
- **CONTEXT:** This applies to app/dashboard/form screens (Hick's Law). It does NOT
  restrict marketing/landing pages, which legitimately present many scannable sections.
- **Discriminator:** *Is this a task surface or a narrative surface?*

### 19. No progressive disclosure on complex interfaces
- Applies to app/settings/forms. Not relevant to expressive marketing pages. Keep for
  functional UIs.

### 20. Bounce/spring without interaction
- **SLOP:** Springy bounce on page-load elements the user didn't touch.
- **CRAFT:** Spring/overshoot tied to direct manipulation (drag, toggle), or a subtle
  settle-overshoot in a choreographed entrance (the 3-step keyframe in `text-reveal.md`).
- **Discriminator:** *Is the physicality tied to interaction or a tasteful settle, or is
  it random cartoon bounce?*

### 21. Generic CTA copy
- **SLOP:** "Get Started" / "Learn More" / "Click Here" with no specificity.
- **CRAFT:** Outcome-specific copy ("Start your 14-day trial", "See the work", "Claim a
  spot"). Still applies — generic copy is almost always improvable.

### 22. Gradient borders
- **SLOP:** Rainbow borders everywhere as noise.
- **CRAFT:** An animated gradient border ring on ONE focal element (hero card, active
  state, primary CTA hover) used as a deliberate accent.
- **Discriminator:** *One intentional focal accent, or noise on everything?*

### 23. Uniform large radius
- **SLOP:** `rounded-2xl` reflexively on every element with no radius system.
- **CRAFT:** A radius SYSTEM (large for containers/cards, smaller for nested controls) —
  and note some reference brands DO use heavy uniform radius as a signature. Intent again.
- **Discriminator:** *Is radius part of a system or applied without thought?*

### 24. Parallax
- **SLOP:** Parallax on articles/docs/forms where it fights reading.
- **CRAFT:** Parallax on experiential/portfolio/marketing sections for depth (see
  `craft/patterns/scroll-parallax.md`), always with a reduced-motion fallback.
- **Discriminator:** *Is the primary task reading, or experiencing?*

### 25. Entrance animation on repeated content
- **SLOP:** Every grid item and list row animating on every scroll = fatigue.
- **CRAFT:** First-reveal-only entrances on key sections; repeated/high-frequency items
  animate minimally or not at all (Frequency Gate). Scroll-linked ambient motion (marquee,
  parallax) is fine because it's continuous, not per-item pop-in.
- **Discriminator:** *Is it a one-time reveal of a key section, or pop-in on every repeated row?*

---

## Craft Presence Check (Positive Gate — for expressive use-cases)

Avoiding slop is necessary but NOT sufficient. For expressive use-cases (landing,
portfolio, product launch, brand, creative tool — anything with `DESIGN_VARIANCE >= 0.6`
or `MOTION_INTENSITY >= 0.5`), the output must ALSO demonstrate craft. If it passes every
FAIL/FLAG above but is flat and forgettable, it **fails the craft presence check**.

Verify at least the following for expressive output (see `quality-gate/positive-patterns.md`
for the full rubric):

- [ ] **A hero signature technique** is present (crossfading video, cursor spotlight,
      magnetic hero element, giant fluid display type, or equivalent) — not just a
      centered headline on a color.
- [ ] **Choreographed motion** exists (staggered/scroll-linked entrance, not just fade-in),
      with a reduced-motion fallback.
- [ ] **Texture / depth** is present (grain overlay, liquid glass, real shadows, layered
      z-index) — the page is not a flat color field.
- [ ] **Distinctive typography** — a display face at real scale with intentional tracking,
      not the untouched system/Inter default.
- [ ] **Real media** where the concept calls for it (video/image), not gray placeholder
      boxes — see `assets/asset-sourcing.guide.md`.
- [ ] **A clear focal point** per viewport (one dominant element), not uniform weight.

Reference the `craft/` library to implement these. Output that fails the craft presence
check should loop back to Step 6 (Motion) / craft selection, not ship.

---

## Mechanical taste checks (fast, binary — from `craft/taste.md`)

Run these as quick pass/fail scans; each is a known AI tell when violated by reflex:
- [ ] **Exact banned accent hex** (open-design linted P0): the accent is NOT one of the
      default-indigo tells `#6366f1 #4f46e5 #4338ca #3730a3 #8b5cf6 #7c3aed #a855f7`. These
      are the textbook AI accent; if present without explicit brand justification, it fails.
- [ ] **Accent overuse cap:** the accent appears at most ~2 visible times per screen (a
      rendered `var(--accent)` used 6+ times across the body is a fail — it stops being an
      accent). One confident accent, used with restraint.
- [ ] **Em-dash:** none in generated copy (headlines, body, captions). Use period/comma/restructure.
- [ ] **Cream/beige body background** not used as the default (OKLCH L 0.84–0.97, C<0.06, hue
      40–100; token names `--paper/--cream/--sand/--bone/--linen`). Carry warmth via accent + imagery.
- [ ] **Eyebrow count** ≤ `ceil(sections / 3)` (tiny uppercase tracked kickers). Often drop entirely.
- [ ] **No `<img>` hover-scale** (incl. `group-hover:scale` on a child image). Animate the card instead.
- [ ] **No gradient text** (`background-clip:text`) as a default flourish (deliberate accent word only).
- [ ] **No hero-metric template** (giant number + label + gradient) as scaffolding.
- [ ] **No side-stripe borders, ghost-cards** (1px border + ≥16px shadow), **over-rounding** (>16px cards by reflex).
- [ ] **CTA copy** describes an outcome ("Start 14-day trial"), never "Get Started".
- [ ] **Two-altitude slop test** passes (theme/palette not guessable from category, nor from category + obvious anti-reference).
- [ ] **Real images/logos** present where the brief implies them; no div-fake screenshots.
- [ ] **CTA wrap:** primary CTA fits one line at desktop (≤3 words). No wrapped CTA.
- [ ] **No duplicate CTA intent:** one label per intent across the whole page.
- [ ] **Nav one line + ≤80px tall** at desktop; no two-line nav.
- [ ] **Zigzag cap ≤2** consecutive image+text splits; ≥4 layout families per ~8 sections.
- [ ] **Bento cell count = content count**; no empty tile; ≥2–3 cells with real visual variation.
- [ ] **No split-header** (big-headline-left + small-explainer-right) by reflex.
- [ ] **Hero top padding ≤ pt-24**; consistency locks hold (one accent, one radius system,
      one shadow scale, one icon family + stroke width, page-wide).
- [ ] **Italic descender clearance** on display italics (`leading-[1.1]`+ reserve).
- [ ] **No emoji as icons**; one icon family; no hand-rolled SVG icon paths.

### 80/20 soul + the screenshot test (open-design)
- [ ] **~80% proven patterns + ~20% distinctive choice.** The 20% lives in ONE bold visual
      move, the voice/microcopy, one memorable micro-interaction, and one detail only
      someone who used the product would add.
- [ ] **Outsider screenshot test:** if someone outside the project screenshots the page,
      could they identify which product it is? If yes → it has soul. If it's an
      interchangeable template → it hasn't shipped craft yet (loops back to craft selection).

### Motion-craft checks (from `craft/patterns/motion-craft.md`)
- [ ] **No animation on 100+/day or keyboard-triggered actions** (command palette, shortcuts).
- [ ] **Committed easing** — no weak built-in `ease-in` on UI; entrances use a strong custom
      `ease-out` (`cubic-bezier(0.23,1,0.32,1)`); exits ~60–75% of enter duration.
- [ ] **No `scale(0)` entrance** (use `scale(0.95)`+opacity); popovers/dropdowns/tooltips are
      origin-aware (`transform-origin` from trigger); modals stay centered.
- [ ] **Interruptible** rapid UI (toasts/toggles/drag) uses transitions/springs, not keyframes.
- [ ] **GPU-only**: `transform`/`opacity` only; no Framer Motion `x`/`y`/`scale` shorthands
      under load; no CSS-variable-on-parent driving a child transform.

### Interaction/a11y implementation checks (from `craft/patterns/interaction-patterns.md`)
- [ ] **Focus present, not just hover** on every interactive element (`:focus-visible`).
- [ ] **Dropdowns escape overflow clipping** (Popover API / anchor positioning / portal),
      not `position:absolute` inside `overflow:hidden`.
- [ ] **Modals** use native `<dialog>`/`inert`; focus returns to trigger on close.
- [ ] **Forms**: visible labels (no placeholder-as-label), validate on blur, error below +
      `aria-live`/`role=alert`, semantic input types.
- [ ] **Destructive = undo toast**, not a reflex confirm dialog (except irreversible actions).
- [ ] **Charts** ship legend + focusable tooltip + tabular numbers + empty/loading/error states.

See `craft/taste.md` for the full rationale and the font/color procedures;
`craft/patterns/motion-craft.md` and `craft/patterns/interaction-patterns.md` for the
implementation detail behind the last three groups.

## The Seven Cardinal Sins (Open Design — P0 Lint Blocks)

These are the patterns that read as "AI generated this" to any experienced designer.
Presence of ANY in the final output = automatic FAIL (unless the brief explicitly justifies it).

### Sin 1. Default Tailwind Indigo as Accent → FAIL
- **Banned hex values:** `#6366f1`, `#4f46e5`, `#4338ca`, `#3730a3`, `#8b5cf6`, `#7c3aed`, `#a855f7`
- **Why:** Indigo/purple is THE AI tell. Every LLM defaults to it.
- **Fix:** Use a concept-justified accent from the Design Read. See `craft/taste.md` color discipline.

### Sin 2. Two-Stop "Trust" Gradient on Hero → FAIL
- **What:** purple→blue, blue→cyan, indigo→pink gradient backgrounds.
- **Why:** A flat committed surface + intentional type always beats a generic gradient.
- **Fix:** Solid background + real focal subject (type, image, video). See hero discipline.

### Sin 3. Emoji as Feature Icons → FAIL
- **Banned in:** `<h*>`, `<button>`, `<li>`, any UI icon context.
- **Specifically banned:** ✨ 🚀 🎯 ⚡ 🔥 💡 🎨 💻 📊 🔒
- **Fix:** 1.5-2px stroke monoline SVG with `currentColor`. One icon family per project.

### Sin 4. Display Font Mismatch → FAIL
- **What:** h1/h2 using hardcoded Inter/Roboto/system-ui when a display face is specified.
- **Fix:** Display headlines MUST use the chosen display typeface from the Design Read.

### Sin 5. Rounded Card with Colored Left-Border → FAIL
- **What:** The canonical "AI dashboard tile" — `border-radius:12px` + `border-left:4px solid accent`.
- **Why:** Appears in ~80% of generic AI output for feature/benefit cards.
- **Fix:** Drop either the radius OR the left border. Use bento/hierarchy instead.

### Sin 6. Invented Metrics → FLAG (P1)
- **What:** "10× faster", "99.9% uptime", "3× more productive" with no source.
- **Fix:** Pull from real data or use a clearly-labelled placeholder. Never fabricate precision.

### Sin 7. Filler Copy → FAIL
- **What:** `lorem ipsum`, `Feature One / Two / Three`, `placeholder text`, `Your text here`.
- **Why:** An empty section is a design problem to solve with composition, not by inventing words.
- **Fix:** Write real copy that demonstrates the product's actual value prop.

---

## Soft Tells (P1 — Should Fix)

These are strong AI-output signals. Fix if possible; justify if kept.

- **Standard "Hero → Features → Pricing → FAQ → CTA" sequence with zero variation.** Introduce
  at least one unconventional section (testimonial wall, inline product demo, comparison
  against status-quo, a full-bleed media break).
- **External placeholder image CDNs** (unsplash.com, placehold.co, picsum.photos) used without
  fallback styling. Fragile and obvious. Add `background-color` fallback on all containers.
- **More than 12 raw hex values outside `:root`.** Tokens were not honoured.
- **`var(--accent)` used 6+ times in rendered body per viewport.** Cap at 2 visible uses/screen.
- **Every section perfectly centered** with no layout tension. See `craft/taste.md` Appendix C.
  - **3+ consecutive sections on the same flat background** with only whitespace between them —
  they blur into one scroll. Alternate `--bg`/`--surface` or add hairline dividers. See
  `craft/taste.md` layout discipline "Section separation."
- **Uniform reveal animation** — same fade-up on every element. Choreograph with layers
  (see `craft/patterns/motion-personality.md` Layer 2).
- **Static page on a high-motion brief** — for agency/portfolio/premium/experimental briefs
  (MOTION_INTENSITY ≥ 7), shipping ONLY CSS fade-in reveals with no engine-grade interactivity
  (no scroll-driven storytelling, no WebGL/canvas/3D anchor, no smooth-scroll) reads as
  conventional/template. Add at least one engine element. See
  `craft/patterns/engine-interactivity.md`. (Conversely: do NOT bolt Three.js onto a
  trust-first B2B dashboard — over-engineering is its own slop.)

---

## Polish Tells (P2 — Nice to Fix)

- **Decorative blob/wave SVG backgrounds** — meaningless geometry. Remove unless concept-justified.
- **Perfect symmetric layout** with no visual tension — alternate density for rhythm.
- **Over-rounding** (cards at 24-32px radius) — cap at 12-16px for content cards.
- **Ghost-card** (1px border + soft ≥16px shadow together) — pick one elevation method.
- **Grid background** (repeating-linear-gradient dots/lines behind hero) — usually filler.
- **Em-dash in generated copy** — strong AI tell. Use period, comma, or restructure.

---

## How to Use This Checklist

1. **Automated scan:** Run criteria.json evaluation (covers FAIL items 1-5, 7-10, C1-C5).
2. **Slop-signal review:** For each FLAG present, apply the discriminator question. It
   passes if it's the CRAFT form; it fails only if it's the SLOP form. Log the reasoning.
3. **Craft presence check:** For expressive use-cases, verify the positive gate above.
   Passing the negative gate alone is not enough.
4. **Mechanical taste checks:** run the binary list above.
4. **Justification log:** For any FLAG kept, document the intent in the Quality Gate report
   under `recommendation`.
5. **Overall result:** ANY unresolved FAIL = report fails. A FLAG in its SLOP form with no
   justification = fails. An expressive output that misses the craft presence check = fails
   (it's competent-but-forgettable, which is the exact problem this kit exists to solve).

## Related Files

- `quality-gate/criteria.json` — Machine-readable criteria definitions
- `quality-gate/report.schema.json` — Schema for evaluation reports
- `design-rules/` — The rules these checks enforce
- `tokens/` — The token system that prevents raw value usage
