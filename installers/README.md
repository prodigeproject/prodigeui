# ProdigeUI v2 portable installation

ProdigeUI's knowledge authority lives in `prodigeui/`; its executable integrity and artifact
gates live in the sibling root `scripts/` and `package.json`. A working installation therefore
contains all three. Do not copy the knowledge folder alone.

From a ProdigeUI distribution root run:

```sh
node scripts/install-prodigeui.mjs <adapter> <project-root>
```

The installer consumes `prodigeui/installers/adapters/<adapter>.json`, copies the complete
distribution surface, installs the correct entry point, copies skills into a native workspace
skill path when the adapter supports one, and records `.prodigeui-adapter.json` in the target.
It never overwrites an existing installation unless `--force` is explicitly supplied.

Then initialize the executable runtime:

```sh
cd <project-root>
npm install
npx playwright install chromium
npm test
```

Generated HTML is approved separately:

```sh
npm run quality-gate -- path/to/output.html --review path/to/manual-review.json
```

The artifact command rejects missing files, runs the system integrity gate, executes desktop
and mobile browser checks, and refuses `overall: pass` while manual criteria remain unevaluated.
Use `prodigeui/hooks/quality-gate-check.hook.json` as the platform hook contract.
