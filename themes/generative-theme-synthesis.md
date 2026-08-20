# Generative Theme Synthesis Engine (ProdigeUI)

> ⚠️ **No Static JSON Dependency.** Rather than relying on hardcoded theme JSON files, LLM agents must dynamically synthesize theme tokens on the fly based on product intent, brand persona, and contrast math.

---

## 1. Intent-Driven Palette Synthesis Pipeline

For any given user brief, derive custom CSS custom properties (`--prodigeui-*`) using the 4-step palette derivation formula:

```
[User Brief] ➔ [Brand Emotion Stance] ➔ [Primary HSL Accent & Neutral Surface] ➔ [WCAG AA Contrast Check]
```

### Emotion Stances & HSL Formulas

| Brand Emotion Stance | Target Domain Example | Base Surface (Background) | Primary Accent (HSL) | Muted Text (7.0:1+ Contrast) |
|----------------------|-----------------------|---------------------------|----------------------|------------------------------|
| **Dark Tech Obsidian** | Developer Tools, B2B SaaS, AI Infrastructure | `#0b0d10` (Dark Obsidian) | `hsl(82, 100%, 61%)` (Electric Lime `#b8ff3a`) | `#9ca3af` (7.8:1 Contrast) |
| **Incandescent Monolith** | Creative Studio, 3D WebGL Portfolio | `#08090a` (Deep Void) | `hsl(15, 100%, 54%)` (Incandescent Vermilion `#ff4d15`) | `#9ca3af` (7.6:1 Contrast) |
| **Tactile Warm Paper** | Architectural Studio, Editorial Magazine | `#f5f2eb` (Warm Linen) | `hsl(16, 60%, 41%)` (Terracotta `#a64b2a`) | `#403934` (7.6:1 Contrast) |
| **Fintech Precision** | Banking, High-Frequency Trading, Risk | `#0a0f1d` (Deep Navy) | `hsl(217, 91%, 60%)` (Cobalt `#3b82f6`) | `#94a3b8` (7.5:1 Contrast) |
| **Haute Couture** | Fashion Atelier, Luxury Goods | `#faf8f5` (Ivory Silk) | `hsl(0, 0%, 10%)` (Jet Ink `#1a1a1a`) | `#555555` (8.1:1 Contrast) |

---

## 2. Dynamic Typography Pairing Matrix

Do not use browser defaults or generic Arial/Inter everywhere. Select intentional font pairings from Google Fonts:

1. **Editorial Luxury & Architecture**: `Instrument Serif` (Display) + `Space Grotesk` (Subhead) + `DM Mono` (Telemetry).
2. **Creative Studio & WebGL**: `Bricolage Grotesque` (Display) + `Inter` (Body) + `JetBrains Mono` (Metadata).
3. **Developer Tools & SaaS**: `Space Grotesk` / `Syne` (Display) + `Inter` (Body) + `JetBrains Mono` (Code/Data).
4. **Haute Couture & Atelier**: `Cormorant Garamond` (Display) + `Plus Jakarta Sans` (Body).

---

## 3. Mandatory Contrast & Accessibility Verification

Every synthesized theme MUST satisfy:
- Normal text (body copy, subheads): **4.5:1 minimum contrast** (WCAG AA).
- Primary display text & micro-tags: **7.0:1+ contrast** (WCAG AAA preferred).
- Interactive elements: Mandatory `:focus-visible` outline rings with offset.
