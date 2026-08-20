# Installing ProdigeUI for Cursor

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs cursor <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, and the shipped root
`AGENTS.md`. ProdigeUI no longer references a nonexistent `.cursorrules` artifact. The root
entry point explicitly routes the agent to the skill registry.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

Configure Cursor automation, when available, with the command declared in
`prodigeui/hooks/quality-gate-check.hook.json`. See `installers/README.md` for the complete
portable distribution contract.
