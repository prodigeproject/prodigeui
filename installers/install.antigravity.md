# Installing ProdigeUI for Antigravity

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs antigravity <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, and root `AGENTS.md`.
Antigravity is routed to the skill registry through `AGENTS.md`; native discovery of a nested
skill directory is not assumed.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

For post-generation automation, configure the platform to execute the command declared in
`prodigeui/hooks/quality-gate-check.hook.json`. See `installers/README.md` for the portable
distribution contract and safe `--force` behavior.
