import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runtimeCriterionIds } from './check-generated-artifact.mjs';

const ROOT = resolve(fileURLToPath(new URL('../prodigeui/', import.meta.url)));
const authority = JSON.parse(readFileSync(join(ROOT, 'canonical/system.authority.json'), 'utf8'));
const read = p => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
const primitive = read(authority.sources.primitiveTokens).tokens;
const semantic = read(authority.sources.semanticTokens).tokens;
const componentTokens = read(authority.sources.componentTokens).tokens;
const components = read(authority.sources.components).components;
const componentDocument = read(authority.sources.components);
const assetsDoc = read(authority.sources.assets);
const tokenNames = new Set([...Object.keys(semantic), ...Object.keys(componentTokens)]);
const componentNames = new Set(components.map(c => c.name));
const assetIds = new Set((assetsDoc.assets || []).map(a => a.id));
const failures = [];

if (componentDocument.deliveryModel !== 'specification' || componentDocument.implementationRequired !== false) {
  failures.push('component-delivery-model must disclose specification-only catalog');
}

for (const [name, source] of Object.entries(authority.sources)) {
  if (typeof source !== 'string' || source.includes('*')) continue;
  const sourceFile = source.split('#')[0];
  if (!existsSync(join(ROOT, sourceFile))) failures.push(`authority-source ${name} -> ${sourceFile}`);
}

const generationContractPath = authority.sources.generationContract;
if (!generationContractPath) failures.push('generation-contract-source missing');
else if (existsSync(join(ROOT, generationContractPath))) {
  const contract = read(generationContractPath);
  for (const decision of ['productIntent', 'visualThesis', 'typeJobs', 'focalHierarchy', 'rhythmArgument', 'closingSurface']) {
    if (!contract.requiredDecisions?.includes(decision)) failures.push(`generation-decision missing ${decision}`);
  }
  for (const role of ['display', 'body', 'annotation']) {
    if (!contract.typography?.roles?.[role]) failures.push(`generation-type-role missing ${role}`);
  }
  if (!Array.isArray(contract.oneBuildPreflight?.beforeCode) || contract.oneBuildPreflight.beforeCode.length < 7) failures.push('generation-one-build-preflight missing beforeCode checks');
  if (!Array.isArray(contract.oneBuildPreflight?.firstBuildAcceptance) || contract.oneBuildPreflight.firstBuildAcceptance.length < 5) failures.push('generation-one-build-preflight missing acceptance checks');
  if (!/44/.test(contract.oneBuildPreflight?.beforeCode?.join(' ') || '')) failures.push('generation-one-build-preflight missing target-size budget');
  if (!/4\.5/.test(contract.oneBuildPreflight?.beforeCode?.join(' ') || '')) failures.push('generation-one-build-preflight missing contrast budget');
  if (contract.typography?.fontDelivery?.verifyComputedFamily !== true) failures.push('generation-font-delivery missing computed-family verification');
  if (contract.closingCta?.reuseEstablishedSignalToken !== true) failures.push('generation-closing-cta missing signal continuity');
  const qualityPath = authority.sources.qualityCriteria;
  if (!qualityPath || !existsSync(join(ROOT, qualityPath))) failures.push('generation-quality-source missing');
  else {
    const ids = new Set((read(qualityPath).criteria || []).map(item => item.id));
    for (const id of (contract.requiredQualityCriteria || [])) if (!ids.has(id)) failures.push(`generation-quality-criterion missing ${id}`);
  }
}

const acceptedQualityProfilePath = authority.sources.acceptedQualityProfile;
if (!acceptedQualityProfilePath) failures.push('accepted-quality-profile-source missing');
else if (existsSync(join(ROOT, acceptedQualityProfilePath))) {
  const profile = read(acceptedQualityProfilePath);
  if (profile.benchmarkGeometryAllowed !== false) failures.push('accepted-quality-profile permits benchmark geometry');
  for (const lane of ['operationalProduct', 'expressiveStudio']) {
    const entry = profile.profiles?.[lane];
    if (!entry) {
      failures.push(`accepted-quality-profile missing ${lane}`);
      continue;
    }
    for (const field of ['productIntent', 'artifactSemantics', 'typeRoles', 'paletteCommitment', 'focalHierarchy', 'rhythmArgument', 'closingBehavior', 'reject']) {
      if (!entry[field] || (Array.isArray(entry[field]) && entry[field].length === 0)) failures.push(`accepted-quality-profile ${lane} missing ${field}`);
    }
  }
  const robustGuidance = readFileSync(join(ROOT, authority.sources.modelRobustGuidance), 'utf8');
  if (!robustGuidance.includes('canonical/accepted-quality.profile.json')) failures.push('model-robust-guidance does not consume accepted quality profile');
  if (!robustGuidance.includes('generation.contract.json#oneBuildPreflight')) failures.push('model-robust-guidance does not consume one-build preflight');
  const endToEndSkill = readFileSync(join(ROOT, 'skills/prodige-ui-end-to-end/SKILL.md'), 'utf8');
  if (!endToEndSkill.includes('canonical/accepted-quality.profile.json')) failures.push('end-to-end-skill does not consume accepted quality profile');
  if (!endToEndSkill.includes('generation.contract.json#oneBuildPreflight')) failures.push('end-to-end-skill does not consume one-build preflight');
  const qualityPath = authority.sources.qualityCriteria;
  if (qualityPath && existsSync(join(ROOT, qualityPath))) {
    const ids = new Set((read(qualityPath).criteria || []).map(item => item.id));
    for (const id of (profile.requiredQualityCriteria || [])) if (!ids.has(id)) failures.push(`accepted-quality-criterion missing ${id}`);
  }
}

const walk = dir => readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(join(dir,e.name)) : [join(dir,e.name)]);
const motionPresetFiles = walk(join(ROOT,'motion/presets')).filter(f=>f.endsWith('.json'));
const motionIds = new Set();
for (const file of motionPresetFiles) {
  const doc = JSON.parse(readFileSync(file,'utf8'));
  for (const item of (doc.presets || [])) motionIds.add(item.id || item.name);
}

for (const [name, entry] of Object.entries(semantic)) if (!primitive[entry.ref]) failures.push(`semantic-ref ${name} -> ${entry.ref}`);
for (const [name, entry] of Object.entries(componentTokens)) if (!semantic[entry.ref]) failures.push(`component-ref ${name} -> ${entry.ref}`);
for (const c of components) for (const token of (c.tokens || [])) if (!tokenNames.has(token)) failures.push(`component-token ${c.name} -> ${token}`);

const templateFiles = walk(join(ROOT,'prompt-templates')).filter(f=>f.endsWith('.template.json'));
for (const file of templateFiles) {
  const doc = JSON.parse(readFileSync(file,'utf8')); const refs = doc.references || {};
  for (const x of (refs.tokens || [])) if (!tokenNames.has(x)) failures.push(`template-token ${relative(ROOT,file)} -> ${x}`);
  for (const x of (refs.components || [])) if (!componentNames.has(x)) failures.push(`template-component ${relative(ROOT,file)} -> ${x}`);
  for (const x of (refs.motionPresets || [])) if (!motionIds.has(x)) failures.push(`template-motion ${relative(ROOT,file)} -> ${x}`);
  for (const x of (refs.assets || [])) if (!assetIds.has(x)) failures.push(`template-asset ${relative(ROOT,file)} -> ${x}`);
}

const required = authority.componentStates.interactiveRequired;
for (const c of components.filter(c=>c.interactive)) {
  const states = new Set(c.states || []);
  for (const s of required) if (!states.has(s)) failures.push(`component-state ${c.name} missing ${s}`);
  if (c.a11y?.focusVisible !== true) failures.push(`component-a11y ${c.name} missing focusVisible=true`);
}

const qualityCriteria = read(authority.sources.qualityCriteria).criteria || [];
for (const criterion of qualityCriteria) {
  if (!['automated', 'manual'].includes(criterion.type)) failures.push(`quality-criterion-type ${criterion.id} -> ${criterion.type}`);
  if (criterion.type === 'automated' && !runtimeCriterionIds.has(criterion.id)) failures.push(`quality-criterion-disconnected ${criterion.id}`);
}

const hook = read(authority.sources.qualityHook);
if (!hook.hooks?.[0]?.action?.command?.includes('npm run quality-gate')) failures.push('quality-hook missing executable command');
const adapters = walk(join(ROOT, 'installers/adapters')).filter(file => file.endsWith('.json')).map(file => JSON.parse(readFileSync(file, 'utf8')));
for (const tool of ['antigravity', 'claude-code', 'codex', 'cursor', 'glm', 'hermes', 'kiro']) {
  const adapter = adapters.find(item => item.tool === tool);
  if (!adapter) failures.push(`installer-adapter missing ${tool}`);
  else if (!adapter.entryPoint || !adapter.installGuide || !adapter.qualityGateCommand) failures.push(`installer-adapter disconnected ${tool}`);
}

const layout = read('design-rules/layout.rules.json').layout;
if (layout.breakpoints) failures.push('responsive-owner layout.rules.json duplicates breakpoints');

const policy = authority.manifestPolicy;
const disk = new Set();
for (const file of (policy.includeFiles || [])) disk.add(file);
for (const rootName of policy.includeRoots) {
  const root = join(ROOT,rootName); if (!statSync(root).isDirectory()) continue;
  for (const file of walk(root)) {
    const rel = relative(ROOT,file).replaceAll('\\','/');
    if (policy.excludeBasenames.includes(basename(file))) continue;
    if (policy.excludePrefixes.some(p=>rel.startsWith(p))) continue;
    disk.add(rel);
  }
}
for (const g of policy.generated) disk.add(g);
const manifest = read('manifest.json');
const listed = new Set(manifest.artifacts.filter(a=>a.status==='created').map(a=>a.path.replaceAll('\\','/')));
for (const p of listed) if (!disk.has(p)) failures.push(`manifest-listed-not-policy ${p}`);
for (const p of disk) if (!listed.has(p)) failures.push(`manifest-disk-unlisted ${p}`);

const buckets = {};
for (const f of failures) { const k=f.split(' ')[0]; buckets[k]=(buckets[k]||0)+1; }
if (failures.length) {
  console.error(`[FAIL] canonical authority: ${failures.length} issue(s)`);
  for (const [k,n] of Object.entries(buckets)) console.error(`  ${k}: ${n}`);
  for (const f of failures.slice(0,40)) console.error(`  - ${f}`);
  if (failures.length>40) console.error(`  ... ${failures.length-40} more`);
  process.exit(1);
}
console.log(`[PASS] canonical authority closes ${Object.keys(componentTokens).length} component tokens, ${components.length} components, ${templateFiles.length} templates, and ${disk.size} governed artifacts.`);
