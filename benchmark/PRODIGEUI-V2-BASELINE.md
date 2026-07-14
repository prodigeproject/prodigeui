# ProdigeUI v2 Baseline Lock

Status: **accepted by the user on 2026-07-15 (Asia/Jakarta)**

This checkpoint locks the current ProdigeUI v2 system and its last accepted benchmark
outputs. It intentionally does not promote benchmark geometry into the canonical generation
system. The HTML files remain evaluation evidence; `prodigeui/` remains the generation
authority.

## System authority

- Canonical system commit: `13556e7` (`feat: ProdigeUI v2 canonical model-robust system`)
- Recovery tag created for this lock: `prodigeui-v2-baseline`
- Active generation authority: `prodigeui/`
- Benchmarks excluded from generation authority by design.

## Accepted benchmark outputs

- `flowai-v2-reference-anchored-regeneration.html`
  - SHA-256: `27EA89F28BE2F1DFED7F7408FCE05FB27AAEA4619F96F5BD0B85C3984422FB48`
- `nova-v2-reference-anchored-regeneration.html`
  - SHA-256: `2757FB31E208CD284B5F1DBE971509567B6A5A68BD9A15CD69C888ED9D2D04D0`
- Runtime evidence: `reference-anchored-evidence.json`
  - SHA-256: `F2550A4C9BE429A0C6FC304836DF899E9B6314DC6368160D49FE09B13A47280D`
- Review page: `prodigeui-v2-baseline-review.html`
- Generation decisions: `reference-anchored-regeneration-notes.md`
- Reproducible browser gate: `reference-anchored-harness.mjs`

## Immutable quality references

- `flowai-post-canonical-repair.html`
- `nova-post-canonical-repair.html`

These references are retained for comparison. They are not templates and were not edited by
the accepted regeneration.

## Validation result

- UTF-8 scan: pass on both accepted HTML files, notes, and harness.
- Desktop 1440x900: pass for both outputs.
- Mobile 390x844: pass for both outputs.
- Zero horizontal overflow, hidden meaningful content, undersized targets, interactive
  contrast failures, clipped hero display, external requests, and runtime errors.
- Intended display family rendered on both outputs.
- FlowAI disclosure keyboard interaction passed.
- NOVA canvas engine reached `data-engine-ready="true"`.
- Closing surfaces reuse their established palette role.
- Root ProdigeUI integrity gate must pass before moving or recreating this tag.

## Excluded

The rejected `*-v2-fresh-regeneration.html` outputs and their review/evidence are not part of
this baseline. Historical benchmark experiments, recovery patches, and unrelated dirty
worktree changes are also excluded.

