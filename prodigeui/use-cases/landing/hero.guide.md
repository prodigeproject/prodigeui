# Landing Page Hero Section — Sub-Guide

> Parent: [use-cases/landing/guide.md](./guide.md)

## Recommended Components
- **Text** — Headline (h1) and supporting subheadline
- **Button** — Primary CTA and optional secondary CTA
- **Card** — Social proof ticker or trust badges
- **Badge** — Announcement pill above headline
- **Image / Video** — Hero media (product screenshot or illustration)

## Tokens
- `typography.heading.2xl` — hero headline (largest scale)
- `typography.body.lg` — subheadline
- `color.primary` — primary CTA button
- `color.text.primary` — headline text
- `color.text.secondary` — subheadline text
- `space.2xl` — vertical padding for hero section
- `space.lg` — gap between headline and CTA

## Motion Presets
- `enter-exit` — staggered reveal on page load (headline > subheadline > CTA)
- `scroll-reveal` — parallax effect on background media
- `micro-interaction` — button hover glow effect

## Patterns
- Keep headline to 6-12 words maximum for impact
- Place single primary CTA above the fold; secondary CTA optional
- Hero image/screenshot: right side on desktop, below text on mobile
- Include social proof (logos, user count, rating) near CTA
- Background: gradient or subtle pattern using surface tokens, never busy images
- Ensure headline contrast meets 4.5:1 against background

## Proven Hero Proportions (the "v3 winning formula")

These are the exact proportions that consistently produce a confident, expansive hero.
Benchmarked as clearly superior to timid/constrained heroes.

- **Headline scale MUST be dramatic:** `font-size: clamp(2.7rem, 8vw, 6.4rem)`. The upper
  bound reaches ~6.4rem on desktop. NEVER cap a hero headline at 4.5rem — it reads timid.
  The headline is the single biggest visual statement on the page; let it be big.
- **Headline width:** `max-width: 14ch` — forces a tight 2-3 line wrap that feels composed.
- **Body/subtitle:** `font-size: clamp(1.05rem, 2vw, 1.28rem); max-width: 52ch`. Generous
  reading width, NOT constrained to 38ch. A cramped subtitle undercuts the expansive headline.
- **Top padding:** ~170px desktop (accounts for fixed nav + breathing room). Cap per taste.md.
- **Content is NOT locked to a narrow column** (avoid `max-width:640px` on the whole hero
  block) — let the headline breathe to the container edge.
- **Nav:** single floating glass pill (centered, `border-radius:999px`, `backdrop-filter`),
  NOT a full-width top bar with a nested inner pill. The single pill reads more elegant.

## Eyebrow / Announcement Copy (punchy > dry)

The tiny label above the headline should be a **status or announcement**, not a restatement
of the product category.

- ✅ GOOD (punchy, product-specific): "Now in public beta", "Backed by Y Combinator",
  "New: AI risk radar", "Trusted by 9,000+ teams", "Series A · Now hiring"
- ❌ WEAK (dry category restatement): "AI project management for engineering",
  "The design tool for teams", "Marketing automation platform"
- The eyebrow earns its space by adding NEW information (momentum, timeliness, proof) —
  not by echoing what the headline already says.
- Keep the dot/pulse indicator for "live/new" status announcements.

## Metrics / Stats (blur-in count-up is the default)

When the hero or a nearby section shows metrics (40%, 2.3×, 9k+, 4.9/5):
- **Animate them:** count up from 0 to target on scroll-into-view, with a `blur(4px)→blur(0)`
  clear as they settle. Cubic ease-out over ~1200ms. See `advanced-effects.md` §5.
- Always `font-variant-numeric: tabular-nums` so digits don't shift width mid-count.
- This is a DEFAULT for stat sections, not an optional flourish — static numbers feel dead.
