# Generative Pricing Table & Tier Spec Guide (ProdigeUI)

> **Target Use-Case**: B2B SaaS, Developer Infrastructure, Enterprise Software.  
> ⚠️ **Strict Anti-Slop Rule**: Do NOT copy hardcoded HTML tables or fixed tier price tags. Synthesize tier structures, feature comparison grids, and pricing toggles dynamically.

---

## 1. Intent & Structure

- **Visual Hierarchy**: Highlight the primary "Pro / Enterprise" tier using material inset depth (`box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15)`), distinct border accent, and primary CTA button.
- **Annual / Monthly Billing Toggle**: Implement an accessible JS toggle (`toggleBilling(type)`) that dynamically recalculates tier prices with smooth 0px layout shift transitions.

---

## 2. Non-Negotiable Guardrails

- **Zero Inline Styles**: Declare all card backgrounds, tier borders, and badge styling using semantic CSS variables.
- **WCAG AA Contrast**: Guarantee 4.5:1 minimum contrast on feature text and 7.0:1+ on price numbers.
- **Container Overflow Containment**: Parent pricing cards with `border-radius` MUST declare `overflow: hidden;`.
