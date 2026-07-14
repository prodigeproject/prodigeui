import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const root = join(repo, 'prodigeui');
const readText = path => readFileSync(path, 'utf8');
const readJson = path => JSON.parse(readText(path));
const failures = [];
const fail = message => failures.push(message);
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});

const pkg = readJson(join(repo, 'package.json'));
const manifest = readJson(join(root, 'manifest.json'));
if (pkg.version !== '2.0.0' || manifest.version !== pkg.version) {
  fail(`version drift: package=${pkg.version}, manifest=${manifest.version}`);
}
if (!String(pkg.scripts?.['quality-gate'] || '').includes('run-quality-gate.mjs')) {
  fail('package quality-gate is not routed through run-quality-gate.mjs');
}

const authority = readJson(join(root, 'canonical/system.authority.json'));
if (!(authority.manifestPolicy?.includeFiles || []).includes('NOTICE.md')) {
  fail('NOTICE.md is required by provenance but excluded from manifest policy');
}

for (const entrypoint of ['AGENTS.md', 'CLAUDE.md']) {
  const text = readText(join(root, entrypoint));
  if (!text.includes('craft/model-robust-generation.md')) fail(`${entrypoint} skips model-robust guidance`);
  if (!text.includes('canonical/accepted-quality.profile.json')) fail(`${entrypoint} skips accepted quality profile`);
}

const adapterDir = join(root, 'installers/adapters');
const adapters = readdirSync(adapterDir).filter(name => name.endsWith('.json')).map(name => basename(name, '.json'));
for (const target of ['antigravity', 'claude-code', 'codex', 'cursor', 'glm', 'hermes', 'kiro']) {
  if (!adapters.includes(target)) fail(`missing adapter: ${target}`);
  const installer = join(root, 'installers', `install.${target}.md`);
  if (!existsSync(installer)) fail(`missing installer: ${target}`);
  else {
    const text = readText(installer);
    if (!text.includes('package.json') || !text.includes('scripts/')) fail(`installer ${target} omits executable package/scripts`);
  }
}

const hook = readJson(join(root, 'hooks/quality-gate-check.hook.json'));
const hookCommand = hook.hooks?.[0]?.action?.command;
if (!hookCommand || !hookCommand.includes('npm run quality-gate')) fail('quality hook has no executable artifact command');

const activeTextFiles = walk(root).filter(path => /\.(?:md|json|css)$/i.test(path) && !path.includes(`${join(root, 'research')}\\`));
const badDial = /(?:MOTION(?:_INTENSITY)?\s*(?:>=|≥)\s*7\b|numeric values\s*\(1-10\)|1\s*=\s*Static,\s*10\s*=)/;
for (const path of activeTextFiles) {
  const text = readText(path);
  if (badDial.test(text)) fail(`legacy 1-10 dial scale: ${relative(root, path)}`);
  if (/[âÃÂ�]|ï¸/.test(text)) fail(`mojibake in active guidance: ${relative(root, path)}`);
}

const missingSkillRefs = [];
for (const path of walk(join(root, 'skills')).filter(path => path.endsWith('SKILL.md'))) {
  const lines = readText(path).split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const match of line.matchAll(/`([^`]+\.(?:md|json|css))`/g)) {
      const ref = match[1];
      if (/[*{}<>]/.test(ref) || /^https?:/.test(ref)) continue;
      const fromRoot = join(root, ref.replaceAll('/', '\\'));
      const fromSkill = join(dirname(path), ref.replaceAll('/', '\\'));
      if (!existsSync(fromRoot) && !existsSync(fromSkill)) {
        missingSkillRefs.push(`${relative(root, path)}:${index + 1} -> ${ref}`);
      }
    }
  });
}
for (const ref of missingSkillRefs) fail(`broken skill reference: ${ref}`);

const criteria = readJson(join(root, 'quality-gate/criteria.json')).criteria || [];
for (const criterion of criteria) {
  if (!['automated', 'manual'].includes(criterion.type)) fail(`invalid criterion type ${criterion.id}: ${criterion.type}`);
}

const reportSchema = readText(join(root, 'quality-gate/report.schema.json'));
for (const contract of ['"flag"', '"evidence"', '"summary"', '"incomplete"']) {
  if (!reportSchema.includes(contract)) fail(`report schema missing ${contract}`);
}

const schemaValidator = readText(join(repo, 'scripts/validate-schemas.mjs'));
for (const schema of ['tokens.schema.json', 'theme.schema.json', 'template.schema.json', 'report.schema.json']) {
  if (!schemaValidator.includes(schema)) fail(`validate-schemas does not consume ${schema}`);
}

const builtCss = readText(join(root, 'tokens/build/tokens.css'));
if (!builtCss.includes('[data-prodigeui-theme=')) fail('built tokens.css has no generated theme selectors');

const components = readJson(join(root, 'components/components.manifest.json'));
if (components.deliveryModel !== 'specification' || components.implementationRequired !== false) {
  fail('component manifest does not disclose its specification-only delivery model');
}

const criterionIds = new Set(criteria.map(item => item.id));
const researchClaims = [];
for (const path of walk(join(root, 'research')).filter(path => path.endsWith('.md'))) {
  readText(path).split(/\r?\n/).forEach((line, index) => {
    for (const match of line.matchAll(/`([a-z][a-z0-9.-]*)`\s+(?:criterion|criteria|category|check)/g)) {
      if (!criterionIds.has(match[1])) researchClaims.push(`${relative(root, path)}:${index + 1} -> ${match[1]}`);
    }
  });
}
for (const claim of researchClaims) fail(`unmatched research criterion claim: ${claim}`);

if (failures.length) {
  console.error(`[FAIL] system connections: ${failures.length} issue(s)`);
  failures.forEach(message => console.error(`  - ${message}`));
  process.exit(1);
}

console.log(`[PASS] system connections: versions, entrypoints, adapters, hooks, dials, encoding, schemas, themes, components, and research claims are connected.`);
