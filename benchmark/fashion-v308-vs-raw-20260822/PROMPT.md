# Fair fashion benchmark — v3.0.8 intent route vs without ProdigeUI

Tanggal run: 22 Agustus 2026

## Brief identik

> Build a landing page for an independent clothing label called FOLD. The label is launching
> a small linen wardrobe for people who want fewer, better layers. Show the new drop, explain
> the material point of view, and invite visitors to view the collection.

## Shared content contract

- Brand: FOLD
- Drop: Linen / 01
- Product facts: overshirt, in-between shirt, and wide trouser; all designed for repeat wear.
- Primary action: view the collection.
- Secondary action: contact the atelier.
- No external runtime dependency. Both lanes use the same local generated media set:
  lookbook, product still-life, and material detail, with provenance recorded next to it.

## Lanes

1. `fashion-with-prodigeui-v308.html` — generated with the v3.0.8 quality baseline plus the
   intent/media routing correction: read the shopper and material proof first, then choose a
   photo-led editorial shop floor, a mineral palette, type roles, and an asymmetric product
   hierarchy. It intentionally does not copy NOVA's palette or geometry.
2. `fashion-without-prodigeui.html` — same brief, copy, facts, and exact local media set,
   implemented as a raw generic landing page without ProdigeUI routing guidance.

The comparison measures the design system's transferable quality constraints and its ability to
choose an intent-fit medium, not visual sameness, copy, or product scope. Both pages are
self-contained and consume the same local media set, so neither lane receives a hidden
media-access advantage.
