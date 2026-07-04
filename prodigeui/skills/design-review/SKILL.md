---
name: design-review
description: |
  Peer reviews a design output for quality by auditing visual hierarchy, spacing, token usage, typography, color coherence, motion purpose, and producing improvement recommendations.
triggers:
  - "design review"
  - "review design"
  - "critique design"
  - "design feedback"
  - "peer review"
---

# design-review

## Purpose

Perform a structured peer review of any design output (component, page layout,
theme, or system configuration) to identify quality issues, inconsistencies,
and opportunities for improvement. Evaluates across six dimensions: hierarchy,
spacing, tokens, typography, color, and motion. Produces prioritized
recommendations aligned with ProdigeUI design principles.

## When to Use

- Before delivering a design to development for implementation
- After completing a complex layout or component design
- When requesting feedback on a theme or token configuration
- As a final quality pass before shipping a design system update
- When something "feels off" but the specific issue is unclear

## Workflow Steps

### Step 1 — Check Visual Hierarchy

1. Identify the intended primary, secondary, and tertiary content.
2. Verify size differentiation: primary content is visually dominant.
3. Check weight usage: headings and actions stand out from body text.
4. Evaluate whitespace allocation: important elements have more breathing room.
5. Apply the squint test: at a blur, is the hierarchy still clear?
6. Check that the eye follows a logical path (F-pattern, Z-pattern, or guided).
7. Flag issues: competing elements, unclear primary action, buried content.

### Step 2 — Verify Spacing Consistency

1. Check all spacing values against the ProdigeUI spacing token scale.
2. Identify any magic numbers (values not from the token system).
3. Verify vertical rhythm: consistent baseline grid adherence.
4. Check horizontal alignment: elements align to grid column edges.
5. Evaluate grouping: related items are closer, unrelated items are farther.
6. Check section boundaries: adequate separation between distinct sections.
7. Flag issues: inconsistent gaps, crowded areas, excessive whitespace.

### Step 3 — Audit Token Usage

1. Verify all colors reference semantic tokens (not raw hex or primitive tokens).
2. Check spacing values map to spacing tokens.
3. Verify border-radius uses radius tokens.
4. Check shadows reference elevation tokens.
5. Verify z-index values are from the z-index token scale.
6. Confirm component-level tokens are used where component tokens exist.
7. Flag issues: hardcoded values, wrong token layer, deprecated tokens.

### Step 4 — Evaluate Typography Discipline

1. Verify all text uses defined type scale levels (no arbitrary sizes).
2. Check font-weight usage: only defined weights from the type system.
3. Verify line-height matches the prescribed value per type level.
4. Check letter-spacing is appropriate per text role (headings vs body vs caps).
5. Evaluate text alignment: left-aligned for body, centered only when purposeful.
6. Check line length: body text stays within 45-75 character range.
7. Flag issues: off-scale sizes, inconsistent weights, wrong line-heights.

### Step 5 — Assess Color Coherence

1. Verify the design uses a restrained color palette (not too many hues).
2. Check semantic color usage: success/error/warning used appropriately.
3. Verify interactive states: hover, active, focus have distinct but related colors.
4. Check that decorative color does not compete with functional color.
5. Evaluate dark mode compatibility: are all colors mapped through semantic tokens?
6. Verify no color conveys meaning alone (combine with shape, text, or icon).
7. Flag issues: gratuitous color, inconsistent state colors, semantic misuse.

### Step 6 — Check Motion Purpose

1. Verify every animation has a functional purpose (not purely decorative).
2. Check that motion duration is appropriate for the action type.
3. Verify easing curves match the motion personality archetype.
4. Check that reduce-motion fallbacks are specified.
5. Evaluate choreography: grouped animations have logical sequencing.
6. Verify no animation blocks user interaction or causes layout shift.
7. Flag issues: purposeless animation, excessive motion, missing fallbacks.

### Step 7 — Produce Improvement Recommendations

1. Compile all flagged issues from Steps 1-6.
2. Categorize by severity:
   - Critical: breaks usability, accessibility, or system integrity
   - Major: noticeable quality issue, should fix before delivery
   - Minor: polish opportunity, can be deferred
3. For each issue: describe the problem, location, and suggested fix.
4. Prioritize fixes: critical first, then major, then minor.
5. Highlight positives: note what is working well (reinforces good patterns).
6. Summarize overall quality score and readiness for delivery.
7. If critical issues exist: recommend blocking delivery until resolved.
