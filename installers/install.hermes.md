# Installing ProdigeUI for Hermes

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs hermes <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, and root `AGENTS.md`.
The entry point explicitly routes Hermes to the skill registry and model-robust contract;
nested skill auto-registration is not assumed.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

Use the command in `prodigeui/hooks/quality-gate-check.hook.json` for supported automation.
See `installers/README.md` for the portable distribution contract.
