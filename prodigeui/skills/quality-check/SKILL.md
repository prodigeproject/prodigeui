---
name: quality-check
description: |
  Evaluates a design output against ProdigeUI Quality Gate criteria and anti-AI-slop checklist. Produces a pass/fail report with specific violations and recommendations.
triggers:
  - "check quality"
  - "run quality gate"
  - "audit design"
  - "anti slop check"
---

# quality-check

## Purpose

Run a structured quality evaluation on any design output (component, page, layout)
to determine if it meets ProdigeUI enterprise-grade standards. The skill produces
a machine-readable report conforming to `quality-gate/report.schema.json`.

## When to Use

- After generating or modifying any UI component or page layout
- Before handoff to development
- When reviewing third-party design output for integration
- As a final gate before shipping any visual artifact

## Workflow Steps

### Step 1 — Load Evaluation Criteria

1. Read `quality-gate/criteria.json` to obtain the full list of pass/fail criteria.
2. Read `quality-gate/anti-ai-slop.checklist.md` for slop indicators.
3. Read `design-rules/*.rules.json` for measurable thresholds (typography, color, layout, structure).

### Step 2 — Identify Design Artifacts Under Test

1. Determine the scope: single component, page section, or full page.
2. List all tokens referenced by the artifact.
3. List all components used and their current states.

### Step 3 — Evaluate Token Compliance

1. Verify every visual value traces back to a Design_Token (no raw hex, px, or rem).
2. Check token layer integrity: component tokens reference semantic, semantic reference primitive.
3. Flag any hardcoded values as FAIL with location and suggested token replacement.

### Step 4 — Evaluate Accessibility

1. Calculate contrast ratios for all text/background pairs.
2. Verify normal text meets >= 4.5:1 and large text meets >= 3:1.
3. Confirm all interactive elements have visible focus indicators (>= 3:1 contrast).
4. Check ARIA roles and keyboard operability for interactive components.

### Step 5 — Evaluate Anti-AI-Slop Indicators

1. Check visual hierarchy: headings follow scale, no arbitrary font sizes.
2. Check spacing consistency: all gaps align to spacing token scale.
3. Check motion usage: animations reference motion tokens, reduce-motion variant exists.
4. Check decoration purpose: every visual element serves a functional or communicative role.
5. Check component state coverage: all required states documented and styled.

### Step 6 — Evaluate Design Rule Compliance

1. Typography: verify scale ratio, allowed weights, line-height range, min font size.
2. Color: verify color roles, accent usage, palette coherence within active theme.
3. Layout: verify grid adherence, breakpoint coverage, spacing base unit.
4. Structure: verify navigation limits, content grouping, visual hierarchy.

### Step 7 — Produce Report

1. Generate a report object conforming to `quality-gate/report.schema.json`.
2. For each criterion: record status (pass/fail/flag), evidence, and location.
3. Summarize: total criteria evaluated, passed, failed, flagged.
4. If any FAIL exists: output specific remediation steps with token/rule references.
5. Present the report to the user with a clear pass/fail verdict.
