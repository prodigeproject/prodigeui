import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [target, destinationInput, ...flags] = process.argv.slice(2);
if (!target || !destinationInput) {
  console.error('Usage: node scripts/install-prodigeui.mjs <adapter> <project-root> [--force]');
  process.exit(2);
}

const destination = resolve(destinationInput);
const adapterPath = join(repo, 'prodigeui/installers/adapters', `${target}.json`);
if (!existsSync(adapterPath)) {
  console.error(`Unknown ProdigeUI adapter: ${target}`);
  process.exit(2);
}
const adapter = JSON.parse(readFileSync(adapterPath, 'utf8'));
const force = flags.includes('--force');
mkdirSync(destination, { recursive: true });

const copy = (source, output) => {
  if (existsSync(output) && !force) throw new Error(`Refusing to overwrite ${output}; rerun with --force after reviewing local changes.`);
  cpSync(source, output, { recursive: true, force });
};

try {
  copy(join(repo, 'prodigeui'), join(destination, 'prodigeui'));
  copy(join(repo, 'scripts'), join(destination, 'scripts'));
  copy(join(repo, 'package.json'), join(destination, 'package.json'));
  if (existsSync(join(repo, 'package-lock.json'))) copy(join(repo, 'package-lock.json'), join(destination, 'package-lock.json'));
  copy(join(repo, 'prodigeui', adapter.entryPoint), join(destination, basename(adapter.entryPoint)));
  if (adapter.nativeSkillPath) copy(join(repo, 'prodigeui/skills'), join(destination, adapter.nativeSkillPath));
  writeFileSync(join(destination, '.prodigeui-adapter.json'), `${JSON.stringify({
    schemaVersion: 2,
    installedAdapter: adapter.tool,
    entryPoint: adapter.entryPoint,
    nativeSkillPath: adapter.nativeSkillPath,
    qualityGateCommand: adapter.qualityGateCommand,
    hookDefinition: adapter.hookDefinition,
  }, null, 2)}\n`);
  console.log(`Installed ProdigeUI v2 for ${adapter.tool} at ${destination}`);
  console.log('Next: npm install && npx playwright install chromium');
  console.log(`Artifact gate: ${adapter.qualityGateCommand}`);
} catch (error) {
  console.error(`[FAIL] ${error.message}`);
  process.exit(1);
}
