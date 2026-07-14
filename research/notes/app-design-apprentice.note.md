---
sourceId: app-design-apprentice
sourceType: book
sourceName: "App Design Apprentice (Prateek Prasad)"
sourceLocation: "Book/UX/App Design Apprentice/App Design Apprentice A Non-Designer's Guide to Better Mobile UI and UX (Prateek Prasad) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Non-Designer Accessibility:** Design principles should be communicable to developers without formal design training. Rules must be concrete and actionable, not abstract.
- **Mobile-First Constraints:** Mobile design forces prioritization — limited screen real estate demands clear hierarchy, minimal navigation depth, and thumb-zone awareness.
- **Visual Hierarchy Through Size and Weight:** The most important element should be the largest/boldest. Secondary elements progressively smaller. Hierarchy is communicated through scale contrast.
- **Consistent Interaction Patterns:** Users learn patterns once and expect them throughout the app. Buttons should look the same, navigation should behave predictably, gestures should be consistent.
- **White Space as Design Element:** Space between elements communicates grouping (proximity) and importance (isolation). More space = more importance and clearer separation.
- **Platform Conventions:** iOS and Android have distinct design languages. Follow platform conventions unless a compelling brand reason justifies deviation.

## Concrete Rules & Parameters

- Thumb zone: primary actions within bottom 60% of screen; avoid top corners for frequent actions
- Minimum touch target: 44×44pt (iOS), 48×48dp (Android)
- Navigation: maximum 5 bottom tab items; icon + label required for each
- Typography scale: max 3-4 font sizes per screen; body text minimum 16px
- Color: one primary brand color, one secondary, neutrals; max 3-4 colors active per screen
- Spacing consistency: use 8px base unit (8, 16, 24, 32, 48, 64)
- Card patterns: 16px padding internal, 8-16px gap between cards
- Loading states: skeleton screens preferred over spinners for content areas
- Button hierarchy: one primary (filled), secondary (outlined), tertiary (text-only) per viewport

## Modern Context Application

- **Developer-Friendly Rules:** ProdigeUI targets AI agents (essentially non-designer developers). These concrete, measurable rules translate directly to agent-consumable constraints.
- **Mobile Component Variants:** Component library needs mobile-specific variants respecting thumb zones and touch targets.
- **Platform-Aware Generation:** AI agents generating mobile UI should detect target platform and apply appropriate conventions (Material vs. Human Interface).
- **8px Grid System:** Standardized spacing unit aligns with design token spacing scale.

## Anti-AI-Slop Indicators

| Expert Mobile Design | AI Slop Mobile |
|---|---|
| Thumb-zone-aware CTA placement (bottom) | Primary actions in unreachable top corners |
| 8px spacing grid consistency | Random spacing values throughout |
| Platform-native patterns (iOS/Android) | Generic web patterns forced on mobile |
| Skeleton loading screens | Simple spinner for all loading states |
| 44pt minimum touch targets | Tiny tappable areas causing mis-taps |
| Max 5 tab bar items with icons+labels | Overcrowded bottom nav or text-only tabs |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Thumb zone rules | `design-rules/layout.md` | Mobile CTA placement rules | Agents place actions in reachable zones |
| 8px spacing base unit | `tokens/primitives/spacing.json` | Base unit definition | Foundation of spacing scale |
| Touch target minimums | `design-rules/interaction.md` | Mobile tap target rule | 44pt iOS / 48dp Android minimums |
| Max 5 bottom tabs | `design-rules/navigation.md` | Mobile navigation limits | Prevents overcrowded navigation |
| Button hierarchy pattern | `components/button/` | Variant documentation | Primary/secondary/tertiary visual rules |
| Skeleton loading screens | `components/skeleton/` | Loading state component | Preferred loading indicator pattern |

## Cross-References

- Feeds mobile-specific rules in `design-rules/layout.md` and `design-rules/interaction.md`
- Spacing rules align with `design-systems-handbook` token hierarchy
- Touch targets support Requirement 13 (Accessibility)
- Platform conventions inform Requirement 11 (multi-platform support)
- Button hierarchy complements `dont-make-me-think-revisited` primary action prominence
