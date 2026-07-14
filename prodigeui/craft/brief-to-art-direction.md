# Brief → Art Direction Derivation (the product-adaptation engine)

> **Why this exists.** ProdigeUI's craft is high, but its *default instinct* is a house look
> (near-black bg + one warm ember accent + big grotesk). That look now reads as an
> "AI-house template" regardless of craft. Comparator systems that key every choice off
> *what the product actually is* (ui-ux-pro-max's retrieval engine is the clearest example)
> produce output that reads **purpose-fit** — and users prefer it, even when its raw craft is
> lower. This document gives ProdigeUI a **deterministic, product-meaning-driven derivation**
> that does what those engines do, then adds the taste gates they lack. Run it BEFORE tokens.
>
> Target: **beat ui-ux-pro-max at its own game** — derive color, type, art style, imagery and
> motion from the product concept — while never shipping its saturated-default palettes or
> noisy retrieval. This is a superset: retrieval-grade specificity + taste-grade restraint.

---

## The rule that overrides house reflex

> **The product concept — not ProdigeUI's habits — chooses the art direction.**
> If you cannot trace a color/font/motion choice to a specific word in the brief or a
> specific fact about the product's domain, it is house reflex and it is REJECTED.
> Dark + ember + grotesk is *one* valid outcome, earned only when the product concept
> actually calls for it. It is never the default.

---

## Step A — Extract the product concept (3 lines, mandatory)

From the brief, write three specific lines. Generic answers ("modern, clean") are a FAIL —
be granular enough that the lines could ONLY describe this product.

1. **What it is + domain** — e.g. "a motion-first creative studio", "a sleep-tracking app
   for new parents", "a B2B payroll API", "a natural-wine subscription".
2. **The single feeling a first-time visitor should leave with** — one concrete emotion,
   not two. e.g. "these people are dangerously good", "I can finally relax", "this is
   boringly reliable in the best way".
3. **A concrete sensory metaphor from the domain** — the image the product's world evokes.
   e.g. "a darkroom under a red safelight", "linen at 6am", "a bank vault door", "spilled
   ink on cartridge paper". This metaphor seeds palette, texture, and the signature move.

---

## Step B — Derive the palette FAMILY from the concept (before any hex)

Decide in this fixed order. Each answer must cite a word from Step A.

1. **Light / dark / drenched** — from where the product *lives* and its mood, not habit.
   - Light: editorial, wellness, retail, optimistic, daytime, approachable.
   - Dark: cinema, dev-tool, security, nightlife, premium-hardware, focus.
   - Drenched (one hue owns bg+surface, OKLCH): brand-forward, confident, immersive.
2. **Hue temperature** — from the concept's metaphor, not always warm.
   - warm (amber/red/coral): heat, energy, craft, appetite, urgency.
   - cool (blue/teal/violet): trust, calm, tech, medical, night.
   - green: growth, wellness, money, nature, sustainability.
   - neutral+1: editorial restraint, luxury, when the *content* is the color.
3. **Commitment level** — from the register.
   - committed-saturated / multi-role: expressive brands, creative, consumer, events.
   - one-accent-on-neutral: SaaS, portfolio, editorial (the disciplined default).
   - near-mono + 1 signal hue: B2B, trust-first, data (restraint is the brand).

Only after the family is fixed, pick the hex inside it via `craft/taste.md` color discipline
(one accent lock, anti-neon, anti-framework-default #6366F1/#8B5CF6/etc., anti-*reflex*-acid-
lime/chartreuse #b8ff3a/#c2f04a/etc. — green/lime is valid only when Step B genuinely derived a
green family, a named reference runs it, or the user asked; never as an escape from blue/purple;
contrast ≥ 4.5:1). Sanity-check the pick against 1–2 top-of-mind references in the product's
*actual* space — derive WITH them or deliberately AGAINST them, never a generic category lookup.
Name the accent with a concept word ("darkroom safelight red", not "#E23"). If you cannot
name it after the product, it is decoration — pick again. Color, type and font are ONE creative
system here: pair them so the palette and the typographic voice reinforce the same concept, not
three independent picks.

**Brightness + color, calibrated to the 2026 reference audit** (`craft/reference-audit-2026.md`):
- **Dark base = deep near-black** (OKLCH `L ≤ 0.12`), not "dark gray." Carry accent light as an
  **ambient glow at 0.05–0.20 alpha** — never a white-hot floodlight, never a `#FFF` core. Any
  scroll-driven brightness ramp peaks **modest** (≤ ~0.45 normalized), never ≈1.0. Measured:
  getmilana `#000` + pink radial `0.2→0.01`; hill `#080a09` + `/0.07` ambient; nestjs `#050303`.
- **Color commits one of two ways:** a **temperature-shared 3–4 hue set** (eternal
  coral→pink→amber; tokens.studio lavender→cyan) *or* **one confident saturated accent** on a
  neutral field (infinitemachine `#FF4C24`, webflow `#146EF5`). A single flat low-life accent that
  is neither is the "AI ember on black" tell — reject it. A supernova concept earns a real
  spectrum (blue-white core + ember/coral + violet plasma), ramping *within* the set.

## Step C — Derive the typographic voice

Choose a display and body relationship that supports the product concept and the actual copy.
Use monospace only when the interface contains code, data, or operational evidence. Run the
reflex-reject procedure in `craft/taste.md`: reject the first obvious category pairing,
compare it against two alternatives with the real headline, then keep the strongest render.
Typography must improve hierarchy and recognition; do not replace a visually successful
composition merely to make the concept easier to explain.

**Display metrics, from the audit** (`craft/reference-audit-2026.md`): line-height **≥ 0.86,
target 0.9–1.0** (`0.82` clips glyphs — banned); tight negative tracking `−0.03em` to `−0.06em`;
and **verify no clipping** (tight leading needs `padding` headroom or `overflow:visible`).
Measured: stateofaidesign 120px/0.95/−0.06em, tokens 80px/0.90/−0.03em, fable 72px/0.86.

## Step D — Name the art-direction family (the "style")

Choose ONE lane and commit; do not blend three. Tie it to the metaphor.

- **Editorial / print** — margins, rules, drop-caps, pull-quotes, type-as-hero.
- **Kinetic / scroll-story** — horizontal pin-pan, chapters, progress, building intensity.
- **Product / dimensional** — real 3D/WebGL or photographic object as hero anchor.
- **Brutalist / raw** — hard borders, mono, flood-invert, no radius (earn it, don't default).
- **Soft / organic** — blobs, generous radius, low-chroma, gentle motion (wellness/consumer).
- **Data / precise** — grids, tabular numbers, hairlines, tight density (B2B/dashboard).

## Step E — Imagery + motion register (from the dials + concept)

- **Imagery**: real photography/3D for products where the *thing* matters; crafted
  placeholders only when honesty demands (open-design lane) — never a stock CDN as a crutch.
  Treat imagery as content, full-bleed or duotone, not decoration.
- **Motion**: read `MOTION_INTENSITY`. Expressive/agency/portfolio (MOTION ≥ 7) MUST have one
  engine-grade moment (GSAP pin/scrub, WebGL, canvas, Lenis) — a CSS-only page is a FAIL for
  that register (`craft/patterns/engine-interactivity.md`). B2B/trust-first: restraint,
  MOTION ≤ 6, no ambient loops.
  - **From the audit** (`craft/reference-audit-2026.md`): ease-out custom cubic-beziers, UI
    durations 0.15–0.5s, one occasional ~3s ambient loop. Expressive pages earn a **multi-screen
    scroll story** (references run 10–57× viewport height), not a single fold. **Add Lenis
    smooth-scroll** to engine builds — bevel/luffu/webflow all ship it, and GSAP + canvas alone
    misses the felt scroll cohesion these references have.

---

## Step F — Emit the ART DIRECTION SPEC (mandatory, before tokens)

Fill this table and paste it into the deliverable's adherence log. Every row cites Step A.

```
ART DIRECTION SPEC — <product name>
  Concept ....... <line 1 / line 2 / metaphor from Step A>
  Palette family. <light|dark|drenched> · <temp> · <commitment>   ← because "<brief word>"
  Accent ........ <named-after-concept> <hex>                     ← because "<metaphor>"
  Type .......... <architecture + role mapping>                   ← because "<reading/evidence need>"
  Art direction . <one family from Step D>                        ← because "<metaphor>"
  Imagery ....... <real|3D|duotone|crafted-placeholder>           ← because "<domain>"
  Motion ........ <dial + the one engine moment, or restraint>    ← because "<register>"
  Signature move  <ONE thing that could exist ONLY for this product>
```

The **Signature move** is the highest bar and the tie-breaker vs ui-ux-pro-max: retrieval
engines return a *category's* signature (agencies get "horizontal scroll"); ProdigeUI must
return *this product's* signature — a move drawn from the concept metaphor itself. A creative
studio named NOVA earns a stellar-heat/ignition motif, not a generic agency track.

---

## Self-reference test (the thing that beats a lookup engine)

Before shipping, run three altitudes:
1. **Screenshot test** — could an outsider name the product from the hero alone? If it could
   be any product in the category, the derivation collapsed to a lookup — redo Step F.
2. **House-reflex test** — is this dark + ember + grotesk *again*? If yes and the concept
   didn't demand it, you defaulted. Re-derive from Step B.
3. **Saturated-default test** — is the palette a framework default (Tailwind indigo/violet,
   creative-agency pink+cyan, wellness mint)? Those are what a CSV returns. Push one step past
   the obvious to the concept-specific choice (NOVA: not "agency pink" — "stellar ignition").

## Related
- `craft/reference-audit-2026.md` — the measured token base behind Steps B/C/E (brightness,
  multi-hue vs single accent, display line-height floor, motion + Lenis)
- `craft/design-read.md` — runs this as its Step 3.5 (the derivation feeds the dials + soul)
- `craft/design-system-routing.md` — invent-vs-official decision (run first)
- `craft/taste.md` — the hex/scale/pairing discipline applied *inside* the derived family
- `craft/patterns/engine-interactivity.md` — the engine moment for MOTION ≥ 7
