import {readFileSync,readdirSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=resolve(fileURLToPath(new URL('../prodigeui/',import.meta.url)));
const read=p=>JSON.parse(readFileSync(join(ROOT,p),'utf8'));
const primitives=read('tokens/primitive.tokens.json').tokens;
const semantics=read('tokens/semantic.tokens.json').tokens;
const authority=read('canonical/system.authority.json');
const themesDir=join(ROOT,'themes');
const files=readdirSync(themesDir).filter(f=>f.endsWith('.theme.json'));
const docs=new Map(files.map(f=>[f.replace('.theme.json',''),read(`themes/${f}`)]));
function overrides(name,seen=new Set()){if(seen.has(name))throw new Error(`theme inheritance cycle: ${name}`);seen.add(name);const d=docs.get(name);if(!d)throw new Error(`missing base theme: ${name}`);return {...(d.extends?overrides(d.extends,seen):{}),...(d.overrides||{})}}
const rgb=h=>{h=h.replace('#','');if(h.length===3)h=[...h].map(x=>x+x).join('');return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16))};
const lum=h=>rgb(h).map(x=>(x/=255)<=.03928?x/12.92:((x+.055)/1.055)**2.4).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const value=(token,o)=>{const ref=o[token]||semantics[token]?.ref;return primitives[ref]?.value};
const failures=[];let checked=0;
for(const file of files){const name=file.replace('.theme.json','');const o=overrides(name);for(const p of authority.contrastPairs){const fg=value(p.foreground,o),bg=value(p.background,o);if(!fg||!bg){failures.push({file,p,reason:'unresolved'});continue}checked++;const r=ratio(fg,bg);if(r+1e-9<p.minimum)failures.push({file,p,ratio:r})}}
if(failures.length){console.error(`[FAIL] WCAG contrast: ${failures.length}/${checked} required pairs fail across ${files.length} themes`);for(const f of failures)console.error(`  ${f.file}: ${f.p.foreground} on ${f.p.background} = ${f.reason||f.ratio.toFixed(2)+':1'} (need ${f.p.minimum}:1, ${f.p.kind})`);process.exit(1)}
console.log(`[PASS] WCAG contrast: ${checked} required text, non-text, and focus pairs across ${files.length} themes.`);
