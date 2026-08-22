# Generative Theme Synthesis Engine (ProdigeUI)

> ⚠️ **No Static JSON Dependency.** Rather than relying on hardcoded theme JSON files, LLM agents must dynamically synthesize theme tokens on the fly based on product intent, brand persona, and contrast math.

---

## 1. Intent-Driven Token Synthesis

The old “emotion stance → fixed palette” shortcut is intentionally removed. It
produced a hidden theme catalog even after the JSON presets were deleted. Start
with the Intent & Art Direction Brief in
`craft/intent-driven-art-direction.md`, then derive roles in this order:

```
[product + user job + market]
  → [experience route + evidence]
  → [material / emotional register]
  → [surface, signal, type, density, and layout roles]
  → [HSL values]
  → [contrast and rendered-state verification]
```

### Palette derivation rules

1. Choose a **hue family** from the product's material, cultural context, brand
   assets, or truthful media. Do not choose a hue because the category is SaaS,
   fashion, fintech, or “premium.”
2. Choose the **surface strategy** first: light, dark, tinted, image-led, or
   mixed. Explain what the surface helps the user do. Multiple surfaces are
   allowed when they mark a meaningful chapter, not to create visual noise.
3. Choose primary, secondary, and state colors by semantic job. A color that is
   decorative but has no product meaning is optional, never mandatory.
4. Derive HSL or OKLCH values as a family with intentional lightness and chroma
   steps. Avoid copying named palettes or fixed hex values from this document or
   from a prior benchmark.
5. Verify foreground ownership on every surface, image crop, hover, focus, and
   disabled state. If the actual media changes the contrast, add a scrim or move
   the text; do not assume the page background is representative.

The output is a token record, not a theme name:

```text
surface.primary / surface.secondary / surface.inverse
content.primary / content.muted / content.onSignal
signal.primary / signal.secondary / state.success / state.warning / state.danger
border.subtle / border.strong / focus.ring
```

Every token has a reason tied to the brief and a contrast check. Tokens may be
shared by components; the values must still be freshly derived for the product.

## 2. Contextual typography and spatial roles

Select type by job and audience, not by an industry pairing table. Test the real
headline, body copy, metadata, and CTA before committing. A serif can signal
material or cultural authority, a sans can signal clarity or utility, and a mono
can support structured evidence, but none is inherently “fashion,” “creative,”
or “technical.” Use one family across weights when that better matches the user
job. Keep the rendered system to two primary faces plus one annotation face.

Derive spatial tokens from the content relationship:

- density follows scan, comparison, and reading load;
- scale follows proposition, proof, and action priority;
- alignment follows the scan path and media crop;
- radius, border, shadow, and texture follow material/brand posture;
- motion follows feedback and storytelling needs, with static output valid when
  looking, reading, or trust is the primary job.

Do not let the Three Dials invent a look by themselves. They calibrate a direction
already justified by intent.

---

## 3. Mandatory Contrast & Accessibility Verification

Every synthesized theme MUST satisfy:
- Normal text (body copy, subheads): **4.5:1 minimum contrast** (WCAG AA).
- Primary display text & micro-tags: **7.0:1+ contrast** (WCAG AAA preferred).
- Interactive elements: Mandatory `:focus-visible` outline rings with offset.
- The selected surface, type, layout, media, and motion each have a product-specific rationale.
- No generated page may inherit a universal palette, hero topology, or interaction
  signature merely because another product used it successfully.
