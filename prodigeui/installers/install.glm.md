# Installing ProdigeUI for GLM

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs glm <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, and root `AGENTS.md`.
The entry point explicitly routes GLM to the skill registry and model-robust generation
contract; nested skill auto-discovery is not assumed.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

Use the command in `prodigeui/hooks/quality-gate-check.hook.json` for supported automation.
See `installers/README.md` for the portable distribution contract.
