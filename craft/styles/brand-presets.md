# Brand-Emulation Presets

> When a brief says "Linear-style", "Apple-clean", "Vercel-ish", these are honest STARTING
> points — the visual grammar those products use — not pixel clones. Emulate the SYSTEM
> (palette logic, type, density, motion restraint), then diverge for the actual brand.
> Adapted from open-design's brand `DESIGN.md` set. Do not ship a literal copy of a
> trademarked identity; use it as a reference lane and make the concept its own.

Legend per row: **base/ink/accent** · **type** · **density & radius** · **motion** · **signature**.

## Linear (dark-tech product)
- Near-black `#08090a` / off-white `#f7f8f8` / restrained indigo-violet used SPARINGLY.
- Inter/Geist across weights; tight tracking; small precise type.
- High density, radius 8px; hairline borders; subtle glass panels over dark.
- Motion: fast (150ms), crisp, no bounce; scroll-linked gradient glow.
- Signature: dark base + faint radial glow + ultra-crisp UI screenshots. (Note: don't lean
  on the default-indigo — Linear earns it deliberately; most briefs should pick another accent.)

## Vercel / geometric-minimal
- Pure black/white; accent is contrast itself; occasional single hue.
- Geist + Geist Mono; large confident headings; mono labels.
- Medium density, radius 6–8px; hairlines; heavy use of grids and diagrams.
- Motion: minimal, precise; number tickers; content-first.
- Signature: black/white honesty, triangular geometry, code-forward.

## Apple (premium consumer)
- White or true-black surfaces; product photography IS the color; one system accent.
- SF-like grotesk (use Inter Display / Helvetica Now as stand-in); huge fluid display.
- Airy, big radius on cards (18–22px), generous margins.
- Motion: slow, elegant, `ease`; pinned scroll product reveals, parallax with depth.
- Signature: full-bleed product hero, centered-with-depth, immaculate spacing.

## Notion (friendly-utility)
- Off-white `#ffffff`/`#f7f6f3`, warm neutral ink; muted accents; light illustration.
- Inter/Lyon-like serif for marketing display; readable body.
- Comfortable density, radius 6px; soft hairlines.
- Motion: gentle, functional; block hover reveals.
- Signature: approachable, doodle-adjacent illustration, calm neutrals.

## Stripe (fintech-credible)
- Light base with a confident gradient hero (its ONE licensed exception), deep indigo ink.
- Sohne-like grotesk; precise type; strong docs typography.
- Medium-high density, radius 8px; layered subtle shadows.
- Motion: smooth, restrained; animated gradient mesh (deliberate, brand-owned).
- Signature: developer trust, gradient-hero-done-right, immaculate tables/code.

## Anthropic / Claude (warm-editorial-tech)
- Warm off-white or clay `#da7756`-adjacent accent; near-black ink.
- Editorial serif display (Copernicus-like) + clean sans body — deliberate, not reflex.
- Comfortable density, radius 8–12px; soft warmth via accent + type, not beige body.
- Motion: calm, human.
- Signature: warm-but-serious, serif headlines, human tone.

## GitHub / Primer (devtool + community)
- Light/dark dual; neutral scales, functional green/blue/red states.
- System sans + mono; dense data patterns.
- High density, radius 6px; hairline-heavy tables and lists.
- Motion: minimal, utilitarian.
- Signature: mature data density, code-native, both modes first-class.

---

## Usage
1. Pick the ONE brand lane the brief implies. 2. Take its palette logic + type + density +
   motion as the contract. 3. **Diverge deliberately** so the two-altitude slop test passes
   (don't ship "generic Linear clone #40"). 4. Keep accessibility + consistency locks.
   5. Compose with `craft/composition.md`; gate with `quality-gate/`.

> If the brief is functional and names no brand, prefer a `themes/*.theme.json` file instead
> — those are tuned, contrast-verified token sets.
