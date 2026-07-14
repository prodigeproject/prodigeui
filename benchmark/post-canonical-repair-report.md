# ProdigeUI canonical repair and rebenchmark

Generated: 2026-07-14 (Asia/Jakarta)

## Outcome

ProdigeUI now has one machine-readable authority, canonical vocabulary closure, all-theme contrast validation, bidirectional manifest policy, explicit provenance boundaries, normative lane precedence, and freshness checks for derived tokens. The root quality gate and the scoped FlowAI/NOVA runtime and evidence gates pass.

The active baseline HTML files were not edited. Their SHA-256 values still match `BASELINE-CURRENT.md`:

- FlowAI: `51C8354FD0A85A15B1525AB0BEA2265C717DFB7793CE31BF9336CB5E1BFB8580`
- NOVA: `8B780E9D8020EBDD73B1B6D9D0EBCF5412E9CA92CF9153F7E72D61249641E254`

No DIV AI files were read or modified by this repair stage.

## Before and after

| Integrity condition | Reproduced before | After repair |
| --- | ---: | ---: |
| Dangling component token references | 304 | 0 |
| Invalid template token references | 210 | 0 |
| Invalid template motion references | 60 | 0 |
| Invalid template component references | 9 | 0 |
| Component state/a11y coverage issues | 70 | 0 |
| Required contrast failures | 61 / 180 | 0 / 180 |
| Responsive ownership conflicts | 1 | 0 |
| Manifest policy mismatches | 192 (5 listed outside policy + 187 governed but unlisted) | 0 / 354 governed artifacts |
| Normative contradictions without lane precedence | 5 | 0 |
| Stale derived token artifact | 1 | 0 |

## Fresh gate evidence

- Root `npm run quality-gate`: PASS all 11 checks.
- Canonical closure: 353 component tokens, 55 components, 25 templates, 354 governed artifacts.
- Contrast: 180 required text, non-text, and focus pairs across 15 themes.
- Benchmark `npm test`: PASS runtime gate and evidence gate at 1440x900 and 390x844.
- New HTML: zero overflow, zero detected clipping, zero broken images, zero sub-44px targets, zero external requests, zero console/page errors.
- Keyboard: visible first-tab focus on both pages; FlowAI disclosure opens by keyboard.
- Reduced motion: meaningful content remains visible; NOVA's native canvas engine reports `engineReady=true` with a static final state.
- Encoding: both new HTML artifacts pass the explicit UTF-8 output checker.

## Benchmark artifacts

- `flowai-post-canonical-repair.html`
- `nova-post-canonical-repair.html`
- `post-repair-harness.mjs`
- `post-repair-evidence.mjs`
- `post-repair-runtime-report.json`
- `post-repair-evidence.json`
- `post-canonical-repair-report.html`
- `shot-flowai-baseline-{desktop|mobile}-{hero|full}.png`
- `shot-flowai-post-repair-{desktop|mobile}-{hero|full}.png`
- `shot-nova-baseline-{desktop|mobile}-{hero|full}.png`
- `shot-nova-post-repair-{desktop|mobile}-{hero|full}.png`

## Mechanical fingerprint

| Target | View | Height | Nodes / depth | Media | Fixed/sticky | External | Runtime errors |
| --- | --- | ---: | ---: | --- | ---: | ---: | ---: |
| FlowAI baseline | Desktop | 4310 | 155 / 9 | none | 0 | 1 | 1 |
| FlowAI post-repair | Desktop | 4374 | 176 / 9 | none | 0 | 0 | 0 |
| FlowAI post-repair | Mobile | 6414 | 176 / 9 | none | 0 | 0 | 0 |
| NOVA baseline | Desktop | 4529 | 79 / 7 | none | 0 | 1 | 1 |
| NOVA post-repair | Desktop | 4377 | 89 / 7 | 1 canvas | 0 | 0 | 0 |
| NOVA post-repair | Mobile | 4211 | 89 / 7 | 1 canvas | 0 | 0 | 0 |

FlowAI post-repair uses warm paper, ink, forest, signal coral, and yellow with 0/6px radii. Its display, body, and metadata typography use benchmark-local Recursive, Manrope, and DM Mono files. NOVA post-repair uses cream, ink, cobalt, coral, and yellow with square composition plus semantic circles. Neither page loads GSAP, Three.js, Lenis, Motion, remote images, or remote fonts.

## Subjective design read

These scores are an editorial judgment, not a gate result.

| Dimension | FlowAI baseline | FlowAI post-repair | NOVA baseline | NOVA post-repair |
| --- | ---: | ---: | ---: | ---: |
| Product/concept fit | 8.8 | 9.1 | 8.8 | 9.2 |
| Typography and hierarchy | 8.8 | 8.9 | 9.0 | 8.9 |
| Distinctiveness | 8.1 | 8.7 | 9.0 | 9.2 |
| Responsive craft | 8.5 | 9.0 | 8.6 | 9.0 |
| Overall subjective | 8.6 | 8.9 | 8.9 | 9.1 |

FlowAI's strongest change is the workstream-led product story instead of a generic AI dashboard. NOVA's strongest change is the concept-tied ignition field, print-studio palette, and different typographic functions for display, editorial copy, and UI metadata. The new pages are intentionally not geometry or palette clones of the approved baseline.

## Residual risks

- Licensing: ProdigeUI has no repository-wide grant. Unknown/internal corpus remains classified as blocked, not silently cleared. Lucide and declared upstream fonts retain their own licenses.
- Fonts: FlowAI now bundles Recursive, Manrope, and DM Mono from the official Google Fonts repository with adjacent OFL copies. NOVA continues to use an offline system stack, so its rendering can substitute on non-Windows platforms.
- External assets: the new pages make no external requests. Existing fallback URL assets elsewhere in ProdigeUI remain blocked until per-item provenance is completed.
- GSAP: still documented as restricted optional technology pending product/legal clearance; Motion/native behavior is the production default.
- Taste: the scores above are subjective. The side-by-side images, not the score, are the approval surface.

## Attributable source and test file set

The repository was already heavily dirty. This is the exact canonical-repair set, not a claim over unrelated pre-existing edits.

### Authority, sources, and generated system artifacts

- `package.json`
- `prodigeui/canonical/system.authority.json`
- `prodigeui/tokens/component.tokens.json`
- `prodigeui/tokens/build/tokens.css`
- `prodigeui/components/components.manifest.json`
- `prodigeui/design-rules/layout.rules.json`
- `prodigeui/manifest.json`
- `prodigeui/assets/assets.manifest.json`
- `prodigeui/NOTICE.md`
- `prodigeui/research/PROVENANCE.md`
- `prodigeui/hooks/quality-gate-check.md`
- `prodigeui/hooks/quality-gate-check.hook.json`
- `prodigeui/motion/principles.md`
- `prodigeui/motion/choreography.md`
- `prodigeui/motion/presets/state-transition.json`
- `prodigeui/craft/patterns/responsive-patterns.md`
- `prodigeui/craft/patterns/engine-interactivity.md`
- `prodigeui/craft/taste.md`

### Validation and migration tooling

- `scripts/check-canonical-authority.mjs`
- `scripts/migrate-canonical-vocabulary.mjs`
- `scripts/build-manifest.mjs`
- `scripts/check-contrast.mjs`
- `scripts/repair-theme-contrast.mjs`
- `scripts/annotate-assets.mjs`
- `scripts/check-provenance.mjs`
- `scripts/check-normative-precedence.mjs`
- `scripts/validate-all.mjs`

### Prompt templates migrated to canonical vocabulary

- `prodigeui/prompt-templates/agentic-app/agent-workspace.template.json`
- `prodigeui/prompt-templates/agentic-app/chat-interface.template.json`
- `prodigeui/prompt-templates/agentic-app/documentation-page.template.json`
- `prodigeui/prompt-templates/ecommerce/cart-page.template.json`
- `prodigeui/prompt-templates/ecommerce/checkout-flow.template.json`
- `prodigeui/prompt-templates/ecommerce/product-detail.template.json`
- `prodigeui/prompt-templates/ecommerce/product-listing.template.json`
- `prodigeui/prompt-templates/hris/admin-panel.template.json`
- `prodigeui/prompt-templates/hris/employee-dashboard.template.json`
- `prodigeui/prompt-templates/hris/team-directory.template.json`
- `prodigeui/prompt-templates/landing/blog-article.template.json`
- `prodigeui/prompt-templates/landing/hero-page.template.json`
- `prodigeui/prompt-templates/landing/pricing-page.template.json`
- `prodigeui/prompt-templates/portfolio/case-study.template.json`
- `prodigeui/prompt-templates/portfolio/showcase.template.json`
- `prodigeui/prompt-templates/saas/analytics-dashboard.template.json`
- `prodigeui/prompt-templates/saas/authentication.template.json`
- `prodigeui/prompt-templates/saas/calendar-view.template.json`
- `prodigeui/prompt-templates/saas/dashboard.template.json`
- `prodigeui/prompt-templates/saas/file-manager.template.json`
- `prodigeui/prompt-templates/saas/kanban-board.template.json`
- `prodigeui/prompt-templates/saas/notification-center.template.json`
- `prodigeui/prompt-templates/saas/onboarding-flow.template.json`
- `prodigeui/prompt-templates/saas/settings-page.template.json`
- `prodigeui/prompt-templates/saas/user-profile.template.json`

### Themes repaired for declared contrast pairs

- `prodigeui/themes/_default.theme.json`
- `prodigeui/themes/creative-dark.theme.json`
- `prodigeui/themes/dark-premium.theme.json`
- `prodigeui/themes/dark.theme.json`
- `prodigeui/themes/ecommerce-warm.theme.json`
- `prodigeui/themes/education-warm.theme.json`
- `prodigeui/themes/enterprise-neutral.theme.json`
- `prodigeui/themes/fintech-blue.theme.json`
- `prodigeui/themes/government-accessible.theme.json`
- `prodigeui/themes/healthcare-green.theme.json`
- `prodigeui/themes/light.theme.json`
- `prodigeui/themes/portfolio-minimal.theme.json`
- `prodigeui/themes/saas-professional.theme.json`
- `prodigeui/themes/social-vibrant.theme.json`
- `prodigeui/themes/startup-bold.theme.json`

### Benchmark source and test artifacts

- `benchmark/package.json`
- `benchmark/package-lock.json`
- `benchmark/flowai-post-canonical-repair.html`
- `benchmark/nova-post-canonical-repair.html`
- `benchmark/post-repair-harness.mjs`
- `benchmark/post-repair-evidence.mjs`
- `benchmark/post-canonical-repair-report.md`
- `benchmark/post-canonical-repair-report.html`
- `benchmark/assets/fonts/flowai/README.md`
- `benchmark/assets/fonts/flowai/Recursive-VF.ttf`
- `benchmark/assets/fonts/flowai/Manrope-VF.ttf`
- `benchmark/assets/fonts/flowai/DMMono-Regular.ttf`
- `benchmark/assets/fonts/flowai/DMMono-Medium.ttf`
- `benchmark/assets/fonts/flowai/OFL-Recursive.txt`
- `benchmark/assets/fonts/flowai/OFL-Manrope.txt`
- `benchmark/assets/fonts/flowai/OFL-DMMono.txt`

## Approval boundary

This repair stops here. DIV AI integration is not started and requires explicit approval of these visual results.
