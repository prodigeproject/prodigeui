# Brief → Design System Routing

> ProdigeUI's default instinct is to build a bespoke token system. That is right for
> expressive / brand work. It is often WRONG for functional product UI, where a mature
> official design system already solves accessibility, states, and data-density better than
> anything invented in one session. This document is the missing routing step: **decide
> whether to reach for a real system or to invent one.**
>
> Adapted from taste-skill's "Brief → Design System Map." Slots into the end-to-end skill
> between Step 1 (Brief Analysis) and Step 4 (Token Selection).

## The decision

Ask: **is design the product, or does design serve the product?** (the register split)

- **Design IS the product** — landing, portfolio, launch, brand, campaign, creative tool.
  → Invent the system. Use `craft/` + ProdigeUI tokens/themes. Distinctiveness is the job.
- **Design SERVES the product** — dashboard, admin, enterprise SaaS, data tool, regulated /
  public-sector, platform app. → Strongly consider an OFFICIAL system below; distinctiveness
  is a liability, and reinventing accessible data-dense components wastes the budget.

## When to reach for an official package

| Brief reads as… | Reach for | Why |
|---|---|---|
| Microsoft / enterprise SaaS / dashboards | Fluent UI (`@fluentui/react-components`) | Official tokens, a11y done |
| Google-ish / Material product | Material 3 (`@material/web`) | Official, theme-able |
| IBM-style B2B analytics | Carbon (`@carbon/react`) | Mature data-density patterns |
| Shopify app surface | Polaris | Required for Shopify admin |
| Atlassian / Jira-style | Atlaskit | Official Atlassian DS |
| GitHub-style devtool / community | Primer (`@primer/*`) | Official; Brand variant for marketing |
| UK public-sector service | `govuk-frontend` | Legally/regulatorily expected |
| US public-sector / trust-first | `uswds` | Same |
| Modern accessible React foundation | Radix Themes | Primitives + polished theme |
| Modern SaaS you own the components for | shadcn/ui | You own the code; never ship default-state |
| Tailwind SaaS / AI marketing | Tailwind v4 utilities | Default for indie/small-team builds |
| Fast local-business / agency MVP | Bootstrap 5.3 | Boring, fast, works |

## Honesty rules (do not fake it)

1. **If the brief matches an official system, install and use the real package.** Do not
   hand-recreate its CSS. Do not import its tokens then override 90% of them.
2. **One system per project.** Don't mix Fluent with Carbon, or import shadcn into a Material
   app. Pick one; ProdigeUI tokens layer as *theme* on top, not as a competing system.
3. **An aesthetic is not a system.** Glassmorphism, bento, brutalism, editorial, aurora,
   kinetic type, "Apple Liquid Glass" have NO official package — build them with native CSS +
   ProdigeUI `craft/` and label borrowed inspiration honestly. There is no `liquid-glass.css`.
4. **Verify dependencies before importing.** Check `package.json`; if a package is missing,
   output the install command first. Never assume a library exists.

## When you DO invent (expressive work)

Use the full ProdigeUI chain: `craft/composition.md` (focal subject) → `craft/taste.md`
(font/color procedures) → `tokens/` + `themes/` → `craft/patterns/` → quality gate. A
standalone one-file deliverable may inline the token layer as CSS variables or a Tailwind
config rather than the full three-layer JSON — that is fine (see the craft exception in the
anti-slop checklist).

### Route the palette FAMILY from the product before picking hex

Inventing a system does NOT mean falling back to ProdigeUI's house reflex (dark near-black +
one warm ember accent + big grotesk). That look is now recognizable enough to read as
"AI-house template" on its own. Comparator systems that key their palette off the *product
type* first (e.g. "creative agency → bold committed color", "dev tool → ink + one signal
hue", "wellness → light, low-chroma green") produce output that looks purpose-fit, while a
recycled dark-ember page looks templated even when its craft is higher. So decide, from the
product's meaning, in this order — BEFORE choosing any hex:

1. **Light or dark** (from mood + where the product lives), not from habit.
2. **Hue temperature** (from the concept), not always warm.
3. **Commitment level** (from the register): expressive brands can go committed-saturated or
   multi-role; near-mono restraint is the B2B/trust default, not a universal one.

Then apply `craft/taste.md` color discipline (contrast, one-accent lock, anti-neon,
anti-framework-default) *within* the chosen family. See taste.md "Derive the palette FAMILY
from the product" and the third-altitude self-reference test.

## Stack conventions (when building React/Next, not a static file)

- **Never `useState` for continuous input values** (mouse position, scroll progress, pointer
  physics, magnetic hover) — it re-renders the tree every frame and collapses on mobile. Use
  motion values (`useMotionValue`/`useTransform`/`useScroll`).
- **Isolate interactivity**: any component using motion / scroll / pointer physics is a leaf
  with `'use client'`; Server Components render static layout only.
- Fonts via `next/font` or self-hosted `@font-face` + `font-display: swap` — never a bare
  Google Fonts `<link>` in production.

## Related
- `PHILOSOPHY.md` — Creative vs Enhancement modes (the same brand/product split)
- `skills/prodige-ui-end-to-end/SKILL.md` — where this routing runs (after Step 1)
- `craft/taste.md`, `craft/composition.md` — the invent-it path
