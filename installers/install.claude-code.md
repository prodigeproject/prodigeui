# Installing ProdigeUI for Claude Code

Run from the ProdigeUI distribution root:

```sh
node scripts/install-prodigeui.mjs claude-code <project-root>
```

This installs `prodigeui/`, executable `scripts/`, root `package.json`, root `CLAUDE.md`, and
the skill registry under `.claude/skills/`. The Claude entry point consumes the same
model-robust contract and accepted-quality profiles as `AGENTS.md`.

In the target project run:

```sh
npm install
npx playwright install chromium
npm test
npm run quality-gate -- output.html --review manual-review.json
```

Configure Claude Code's supported post-generation automation to run the command declared in
`prodigeui/hooks/quality-gate-check.hook.json`. See `installers/README.md` for the complete
portable distribution contract.
