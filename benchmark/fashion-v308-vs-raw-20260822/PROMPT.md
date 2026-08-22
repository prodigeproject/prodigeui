# Fair fashion benchmark — v3.0.8 vs without ProdigeUI

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
- No external runtime dependency or stock media in either lane.

## Lanes

1. `fashion-with-prodigeui-v308.html` — generated with ProdigeUI v3.0.8 principles:
   editorial hierarchy, one material proof object, deliberate palette, asymmetric collection
   rhythm, visible metadata, semantic HTML, contrast, focus, and reduced-motion fallback.
2. `fashion-without-prodigeui.html` — same brief and content, implemented as a raw generic
   landing page without ProdigeUI guidance.

The comparison measures the design system's contribution, not copy or product scope. Both
pages are self-contained and use code-authored clothing cues so neither lane receives a
hidden external media advantage.
