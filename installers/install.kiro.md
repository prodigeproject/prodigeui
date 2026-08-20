# Installing ProdigeUI for Kiro

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs kiro <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, root `AGENTS.md`, and
workspace skills under `.kiro/skills/`. Kiro reads root `AGENTS.md` as always-included steering
and discovers workspace Agent Skills from `.kiro/skills/`.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

Kiro supports shell-command Agent Hooks. Configure a post-generation or Stop hook using the
command and prompt contract in `prodigeui/hooks/quality-gate-check.hook.json`; a non-zero exit
must be returned to the agent for repair. See `installers/README.md` for the portable contract.
