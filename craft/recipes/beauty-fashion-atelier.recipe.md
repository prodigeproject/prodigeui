# Generative Luxury Atelier & Haute Couture Guide (ProdigeUI)

> **Target Use-Case**: Haute Couture Fashion, Luxury Goods, Fine Jewelry, Beauty Atelier.  
> ⚠️ **Strict Anti-Slop Rule**: Do NOT copy hardcoded HTML code blocks or fixed pink/red hex colors (`#fdf2f8`). Synthesize HSL color harmonies, typography pairings, and layout geometries dynamically based on brand intent.

---

## 1. Intent & Brand Stance

- **Brand Emotion**: Uncompromising elegance, sensory tactile luxury, high-fashion restraint, quiet power.
- **Palette Synthesis**: Ivory Silk (`#faf7f2`) or Obsidian Void (`#09070a`) surface + Warm Champagne HSL (`hsl(42, 60%, 55%)`) or Deep Mulberry accent. Minimum 7.5:1 text contrast.
- **Typography Pairing**: `Cormorant Garamond` or `Instrument Serif` (Display) + `Plus Jakarta Sans` or `Space Grotesk` (Body) + `DM Mono` (Telemetry).

---

## 2. Generative Grid & Layout Architecture

- **Asymmetric Editorial Layout**: `1.1fr 0.9fr` split grid with full-bleed high-res fashion photography and un-crammed typography (max 3 elements per column).
- **Height-Locked Media Viewport**: Viewport fills grid cell height via `height: 100%; min-height: 420px;` (no aspect-ratio overflow conflicts).
- **Container Boundary Containment**: Parent card declares `overflow: hidden;` and `border-radius: 16px;`.
- **Dynamic Collection Showcase JS Engine**: Interactive lookbook tabs (`01. Autumn Atelier`, `02. Silk Capsule`, `03. Bespoke Craft`).

---

## 3. High-Craft Copywriting Rules

- **Zero Prompt Leaks**: Prohibit debug text or click hints like `(CLICK TO SWITCH LOOK)`.
- **Authentic Domain Copywriting**: "Hand-woven mulberry silk and Italian cashmere constructed in Geneva."
