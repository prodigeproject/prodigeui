# Composition — Split Editorial / Form Hero

≈10 of 73 prompts (9 Mainframe, 14 contact, 54 email, 63 network, 55). A two-part hero: a
type/form column and a real visual column. Also covers conversational (typewriter) and
contact/waitlist heroes.

## When to use
Contact/waitlist pages, product+copy, conversational/agent framing, newsletter landings —
anywhere the copy or an input is as important as the visual.

## The spine
```
Desktop: 2-column grid (content | visual). Mobile: source-order reflow (content first OR
last depending on intent), visual becomes full-bleed background or stacks.
z0   real visual (video or image) — column on desktop, full-bleed bg on mobile
z10  fixed/floating nav
z10  content column: eyebrow → headline → lead/typewriter → form or CTA pills
```

## Variants
- **Conversational (benchmark 9, 14):** `useTypewriter` headline (38ms/char, blinking cursor),
  selectable "prompt pill" buttons, mouse-scrub video behind. Feels like an agent greeting.
- **Contact/form (benchmark 14):** multi-select service pills (spring check icon), live
  acknowledgment banner, email/submit inside a glass pill.
- **Newsletter (benchmark 54):** narrow (~640px) editorial column, video hero card, inline
  video cards, numbered step badges.
- **Network/social (benchmark 63):** typewriter headline left, concentric rotating avatar
  orbits right (`effects-catalog.md` → orbital avatars), animated conic border, logo ticker.

## Key layout
```css
.hero{min-height:100svh;display:grid;grid-template-columns:1fr;gap:32px;align-items:end;padding:0 24px 48px}
@media(min-width:1024px){.hero{grid-template-columns:1.2fr 1fr;align-items:center;padding:0 40px}}
/* Mobile source-order reflow example */
.visual{order:-1} @media(min-width:1024px){.visual{order:0}}
```

## Motion
- Content: staggered fade-up (y28→0, index*0.15), typewriter on the headline.
- Visual: real video (autoplay/scrub) or image with a subtle Ken Burns.
- Form pills: spring on select (stiffness 300 / damping 20), reduced-motion → instant.

## Craft checklist
- [ ] Real visual column (video/image), not a decorative gradient.
- [ ] Responsive reflow: define mobile source order deliberately.
- [ ] Form (if any) ships all states: default/focus/error/success + live feedback.
- [ ] One accent; deliberate type pairing; contrast ≥ 4.5:1 on the content side.
- [ ] Reduced-motion path for typewriter + pill springs.
