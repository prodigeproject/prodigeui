---
name: accessibility-audit
description: |
  Comprehensive WCAG 2.1 AA accessibility audit covering contrast, keyboard navigation, ARIA, screen readers, focus management, and motion preferences.
triggers:
  - "accessibility audit"
  - "wcag check"
  - "a11y audit"
  - "check accessibility"
  - "screen reader test"
---

# accessibility-audit

## Purpose

Perform a structured WCAG 2.1 AA compliance audit on design outputs or
component implementations. Evaluates contrast ratios, keyboard operability,
ARIA semantics, screen reader flow, focus management, and motion preferences.
Produces an actionable report with severity levels and remediation guidance.

## When to Use

- Before finalizing a component or page design for handoff
- When verifying an existing UI against accessibility standards
- After adding new interactive elements (modals, dropdowns, tabs)
- When a design uses custom widgets that need ARIA patterns
- As part of the quality-check workflow for any deliverable

## Workflow Steps

### Step 1 — Check Contrast Ratios

1. Identify all text/background color pairs in the design.
2. Calculate contrast ratio for each pair using relative luminance formula.
3. Normal text (< 18px or < 14px bold): must achieve >= 4.5:1.
4. Large text (>= 18px or >= 14px bold): must achieve >= 3:1.
5. UI components and graphical objects: must achieve >= 3:1 against adjacent colors.
6. Check focus indicator contrast against both focused and unfocused states.
7. Flag all failures with exact token references and current ratio.

### Step 2 — Verify Keyboard Navigation

1. Map the expected tab order for all interactive elements.
2. Verify logical reading order matches visual layout order.
3. Confirm all interactive elements are reachable via Tab/Shift+Tab.
4. Check that custom components support expected keyboard patterns:
   - Buttons: Enter/Space to activate
   - Dropdowns: Arrow keys to navigate, Enter to select, Escape to close
   - Tabs: Arrow keys to switch, Tab to move focus out
   - Modals: Tab trapped inside, Escape to close
5. Verify no keyboard traps exist (focus can always escape).

### Step 3 — Audit ARIA Roles and Properties

1. Verify semantic HTML is used before resorting to ARIA roles.
2. For custom widgets: confirm appropriate role is assigned.
3. Check that `aria-label` or `aria-labelledby` exists for non-text controls.
4. Verify `aria-expanded`, `aria-selected`, `aria-checked` states are dynamic.
5. Confirm `aria-live` regions are used for dynamic content updates.
6. Check that `aria-hidden="true"` is applied to decorative elements only.
7. Validate no conflicting or redundant ARIA attributes.

### Step 4 — Test Screen Reader Flow

1. Define the expected announcement sequence for the page/component.
2. Verify headings form a logical hierarchy (h1 > h2 > h3, no skipping).
3. Check that images have meaningful alt text (or alt="" for decorative).
4. Confirm form inputs have associated labels (explicit or aria-labelledby).
5. Verify error messages are announced when they appear.
6. Check that status changes (loading, success) reach assistive technology.
7. Note: full validation requires manual testing with actual assistive tech.

### Step 5 — Check Focus Management

1. Verify visible focus indicator on all interactive elements.
2. Focus indicator must have >= 3:1 contrast and be clearly visible.
3. On modal open: focus moves to first focusable element inside.
4. On modal close: focus returns to the triggering element.
5. On route change (SPA): focus moves to new content or page heading.
6. Dynamic content insertion: focus managed appropriately without jarring jumps.

### Step 6 — Verify Motion Preferences

1. Check that `prefers-reduced-motion` media query is respected.
2. All decorative/non-essential animations must be disabled when preference is set.
3. Essential motion (e.g., progress indicators) can remain but should be minimal.
4. Verify no content relies solely on animation to convey meaning.
5. Auto-playing media must have pause/stop controls.
6. Flashing content: nothing flashes more than 3 times per second.

### Step 7 — Report Findings

1. Categorize issues by severity: Critical, Major, Minor.
   - Critical: completely blocks access (keyboard trap, zero contrast, no labels)
   - Major: significantly impairs experience (low contrast, missing ARIA)
   - Minor: causes inconvenience but doesn't block (focus order suboptimal)
2. For each issue: describe the problem, affected element, WCAG criterion, and fix.
3. Summarize pass/fail per category (contrast, keyboard, ARIA, focus, motion).
4. Note: automated checks cannot guarantee full compliance — recommend manual
   testing with assistive technologies and expert accessibility review.
