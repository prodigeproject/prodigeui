---
sourceId: swiftui-design-skill-main
sourceType: repo
sourceName: "swiftui-design-skill-main"
sourceLocation: "Skill & Library/swiftui-design-skill-main"
appliedTo: []
---

## Structural Analysis

SwiftUI-specific design skill targeting iOS/macOS platform design. Shows how design rules ADAPT to a specific platform's conventions, constraints, and user expectations.

**Architecturally sound patterns:**
- **Platform-targeted design rules**: Design principles adapted to a specific platform (iOS/macOS HIG compliance)
- **Platform constraint awareness**: Understanding that platform conventions override generic design principles in certain areas (navigation patterns, system controls, gesture vocabulary)
- **Convention adherence**: Encoding platform-specific "correct" patterns that users expect on that platform

**Key insight for ProdigeUI:** Design rules are NOT universal — they must be CONTEXTUAL. What's correct on iOS differs from web. This demonstrates the need for platform-aware rule systems.

## Content Quality Audit

**Valuable content:**
- Platform-specific design constraints (what iOS users EXPECT that differs from web)
- Convention compliance (follow HIG = correct behavior on iOS)
- Adaptation methodology (how to take general design principles and apply platform filter)
- Shows that "good design" is platform-contextual, not absolute

**AI Slop risk areas:**
- If rules are just HIG paraphrases without deeper understanding
- If no adaptation guidance for when HIG patterns DON'T apply (custom apps, creative apps)
- If platform rules are presented without explaining WHY (just "do this because Apple says so")

## Gap Analysis vs Theory

**Strengths:**
- Demonstrates platform-awareness concept (design varies by target)
- Shows how to encode platform-specific constraints
- Proves that generic design skills are INSUFFICIENT for platform-specific output

**Gaps:**
- Doesn't address WEB platform (ProdigeUI's primary target)
- HIG compliance doesn't equal good design (can follow all rules and still be bland)
- No cross-platform comparison methodology (how does iOS rule X map to web equivalent?)
- No theory-backing for platform conventions (WHY does iOS use edge-to-edge design?)
- Missing: when to BREAK platform conventions intentionally (creative apps, brand-heavy apps)
- Missing: responsive considerations within platform (iPad vs iPhone within iOS)
- No accessibility integration specific to platform (VoiceOver patterns, Dynamic Type)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Platform-targeted design rules concept | ProdigeUI targets WEB platform primarily. The CONCEPT of platform-specific rules is adopted. ProdigeUI's rules are web-specific: browser constraints, responsive behavior, CSS capabilities, web accessibility standards (WCAG over platform-specific a11y). |
| Convention adherence pattern | ProdigeUI applies this to WEB conventions: navigation patterns, form behaviors, interaction expectations users have on web (different from native). Encode web-specific expectations. |
| Adaptation methodology | ProdigeUI uses this approach for cross-device adaptation: same design system but rules adjust for mobile-web vs desktop-web vs tablet-web. |
| Platform constraint awareness | ProdigeUI encodes WEB platform constraints: browser rendering differences, CSS capability limits, performance budgets for web, font loading strategies. |

## Adaptation Strategy

This repo's CONCEPT (not content) informs ProdigeUI's platform-awareness layer:

1. **Platform = Web**: ProdigeUI encodes web-specific design conventions and constraints (not iOS/macOS)
2. **Convention mapping**: Where this repo maps to HIG, ProdigeUI maps to web conventions (browser behavior, CSS standards, responsive patterns)
3. **Constraint awareness**: Web has its own constraints (performance budgets, font loading, SSR vs CSR, viewport variability) that are encoded in design-rules
4. **Cross-device adaptation**: Within the web platform, rules adapt for mobile-web, desktop-web, tablet-web (responsive awareness)
5. **When to break conventions**: ProdigeUI's taste-skill integration allows intentional deviation when DESIGN_VARIANCE dial justifies it

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Platform-targeted design rules concept | `design-rules/*.rules.json` | Platform constraint annotations | All rules implicitly target web platform |
| Convention adherence pattern | `design-rules/structure.rules.json` | `webConventions` section | Encoding expected web interaction patterns |
| Responsive adaptation concept | `design-rules/layout.rules.json` | `breakpoints[]` and `responsiveRules` | Device-aware layout rules within web platform |
| Platform constraint awareness | `design-rules/layout.rules.json` | Performance, browser compatibility notes | Web-specific constraints (viewport, font-loading, CSS limits) |
| When to break conventions | `quality-gate/criteria.json` | Convention deviation justification requirement | Intentional deviation requires DESIGN_VARIANCE > threshold |

## Points Copied

- Platform-targeted design rules concept (design must be contextual to platform)
- Convention adherence principle (users expect platform-specific patterns)
- Adaptation methodology (general principles → platform-specific rules)
- Constraint-awareness pattern (platform constraints shape design possibilities)

## Points Improved/Fixed

- iOS/macOS target → Web platform target (ProdigeUI's domain)
- HIG parroting → web convention encoding with RATIONALE (why users expect this on web)
- No deviation guidance → taste-skill integration allowing intentional convention breaking
- Platform-only rules → multi-device within platform (mobile-web vs desktop-web)
- No accessibility → WCAG web accessibility standards integration
- No performance awareness → web performance budgets (font loading, render cost, LCP/CLS)
- Single platform → platform-aware architecture (web primary, extensible concept)

## Points Adapted

- iOS HIG compliance → web convention compliance (different rules, same CONCEPT)
- SwiftUI implementation → CSS/HTML implementation patterns
- Platform-specific gestures → web interaction patterns (hover, click, keyboard, touch)
- Device-specific rules → responsive rules (breakpoints, fluid sizing, container queries)
- Apple ecosystem → browser ecosystem (compatibility, progressive enhancement)
