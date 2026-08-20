# Installing ProdigeUI for Codex

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs codex <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, and root `AGENTS.md`.
Codex is explicitly routed from `AGENTS.md` to `prodigeui/skills/AGENTS.md`; the installer does
not claim that arbitrary nested skills are automatically advertised as native Codex skills.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

Use `prodigeui/hooks/quality-gate-check.hook.json` as the executable post-generation contract
where the active Codex environment supports hook wiring. See `installers/README.md` for the
portable distribution contract.
