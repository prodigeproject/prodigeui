---
sourceId: mobile-app-ux-principles
sourceType: book
sourceName: "Mobile App UX Principles"
sourceLocation: "Book/pdfcoffee.com_mobile-app-ux-principles-pdf-free.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Thumb zone design**: Primary actions within natural thumb reach (bottom 1/3 of screen); destructive actions in hard-to-reach zones
2. **Touch target sizing**: Minimum 44x44px (iOS) / 48x48dp (Android); spacing between targets ≥8px
3. **Gesture vocabulary**: Tap (select), Swipe (navigate/dismiss), Long-press (context), Pinch (zoom) — don't invent new gestures
4. **One-handed operation**: Critical paths completable with one hand; avoid top-left actions on large phones
5. **Mobile-first progressive disclosure**: Show only 1 primary action per screen; secondary actions behind gesture/tap
6. **Offline-first feedback**: Always respond to user input immediately, sync in background; never block on network
7. **Contextual input**: Keyboard type matches input (numeric for phone, email for email); reduce typing with smart defaults

## Concrete Rules & Parameters

- Touch target minimum: 44px × 44px (never smaller)
- Inter-target spacing: ≥8px (prevents mis-taps)
- Bottom navigation: Max 5 items (optimal 3-4)
- Screen density: Max 1 primary CTA visible per viewport
- Text size minimum: 16px for body (prevents iOS zoom on input focus)
- Loading threshold: Skeleton screen after 300ms, full loader after 2000ms

## Modern Context Application

- **Tokens**: Touch target sizes as tokens (`--size-touch-min: 44px`); spacing enforced via token scale
- **Responsive**: Mobile tokens have larger touch targets; desktop can be denser
- **Component systems**: All interactive atoms include touch-target-size enforcement in spec
- **Dark mode**: OLED optimization — true black (#000) backgrounds save battery
- **Accessibility**: Touch targets serve both mobile UX AND accessibility (same minimum sizes)

## Anti-AI-Slop Indicators

- Expert: Touch targets enforced; bottom-zone primary actions; contextual keyboards
- AI slop: Tiny buttons; primary actions at top of screen; generic text inputs without keyboard hints
- Expert: Skeleton screens with layout matching real content
- AI slop: Centered spinner with no indication of what's loading

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Touch target minimums | `tokens/tokens.json` | `size.touch.min` token | Enforced via token, not ad-hoc |
| Bottom navigation limit | `design-rules/layout.rules.json` | Navigation item limits | Prevents overcrowded nav |
| Mobile text minimum | `tokens/tokens.json` | `typography.body.mobile.min` | Prevents zoom-on-focus issues |
| Skeleton screen timing | `design-rules/interaction.rules.json` | Loading state thresholds | Consistent loading behavior |
| Input keyboard hints | `components/atoms/input` spec | `inputMode` requirement | Contextual input always specified |

## Cross-References

- Touch target sizes align with WCAG 2.1 AA target size requirements (Req 4.6, 6.4)
- Progressive disclosure confirmed by Experiencing Design's cognitive load management
- Loading state timing matches CSS animation duration tiers
- One-handed operation validates Fitts's Law application from design principles
- Skeleton screen pattern confirmed by modern UI libraries (shadcn/ui)
