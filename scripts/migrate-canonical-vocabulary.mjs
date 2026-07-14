import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=resolve(fileURLToPath(new URL('../prodigeui/',import.meta.url)));
const load=p=>JSON.parse(readFileSync(join(ROOT,p),'utf8'));
const save=(p,v)=>writeFileSync(join(ROOT,p),JSON.stringify(v,null,2)+'\n');
const semanticDoc=load('tokens/semantic.tokens.json');
const componentDoc=load('tokens/component.tokens.json');
const manifest=load('components/components.manifest.json');
const semantic=semanticDoc.tokens;

const tokenMap={
 'color.surface.primary':'color.background','color.surface.secondary':'color.surface','color.surface.tertiary':'color.muted','color.surface.code':'color.muted','color.surface.elevated':'color.surface','color.surface.overlay':'color.foreground','color.surface.hover':'color.accent','color.surface.active':'color.accent','color.surface.selected':'color.primary','color.surface.input':'color.input','color.surface.user-message':'color.primary','color.surface.agent-message':'color.surface','color.surface.unread':'color.accent',
 'color.feedback.success':'color.success','color.feedback.success-subtle':'color.success','color.feedback.error':'color.destructive','color.feedback.warning':'color.warning','color.feedback.warning-subtle':'color.warning','color.feedback.info':'color.info',
 'color.text.primary':'color.foreground','color.text.secondary':'color.muted-foreground','color.text.tertiary':'color.muted-foreground','color.text.on-action':'color.primary-foreground','color.text-on-dark':'color.primary-foreground','color.action.primary':'color.primary','color.border.subtle':'color.border','border.default':'border.width.default','border.subtle':'border.width.default',
 'typography.heading.xs':'typography.size.h6','typography.heading.sm':'typography.size.h5','typography.heading.md':'typography.size.h4','typography.heading.lg':'typography.size.h3','typography.heading.xl':'typography.size.h2','typography.display.md':'typography.size.h1','typography.display.lg':'typography.size.display','typography.body.xs':'typography.size.caption','typography.body.sm':'typography.size.body-sm','typography.body.md':'typography.size.body','typography.body.lg':'typography.size.body-lg','typography.mono.sm':'typography.size.body-sm','space.2xs':'space.xs','space.2xl':'space.x2l',
 'color.data.1':'color.primary','color.data.2':'color.success','color.data.3':'color.warning'
};
const componentMap={'TextArea':'Input','ProgressSteps':'Stepper','Image':'Avatar','Heading':'Text','TextLink':'Text'};
const motionMap={'enter-exit':'fade-in','state-transition':'button-press','loading-shimmer':'progress-bar','hover-focus':'hover-lift','page-transition':'slide-up','micro-interaction':'button-press','scroll-based':'parallax-subtle','scroll-reveal':'reveal-on-scroll','drag-drop':'scale-in'};

function inferRef(name){
 const n=name.toLowerCase();
 if(n==='motion.easing.decelerate') return 'motion.easing.exit';
 if(n.includes('duration')) return 'motion.duration.normal';
 if(n.endsWith('.z')) return n.includes('toast')?'z.toast':n.includes('dropdown')?'z.dropdown':n.includes('popover')?'z.dropdown':n.includes('dialog')?'z.modal':n.includes('drawer')||n.includes('sheet')?'z.overlay':'z.sticky';
 if(n.includes('shadow')) return n.includes('card')?'shadow.sm':'shadow.lg';
 if(n.includes('radius')) return n.includes('avatar')||n.includes('dot')||n.includes('handle')?'radius.full':'radius.md';
 if(n.includes('font-size')) return 'typography.size.body-sm';
 if(n.includes('font-weight')) return 'typography.weight.heading';
 if(n.includes('border')||n.includes('separator')||n.includes('connector')||n.includes('grid-color')||n.includes('axis-color')) return n.includes('focus')||n.includes('active')?'color.ring':n.includes('error')?'color.destructive':'color.border';
 if(n.includes('padding')||n.includes('gap')||n.includes('spacing')||n.includes('indent')) return 'space.md';
 if(n.includes('width')||n.includes('height')||n.includes('size')||n.includes('thickness')) return n.includes('thickness')?'border.width.default':'space.lg';
 if(n.includes('placeholder')||n.includes('description')||n.includes('heading-fg')||n.includes('label-fg')||n.includes('legend-fg')||n.includes('axis-label')) return 'color.muted-foreground';
 if(n.includes('series.1')) return 'color.primary'; if(n.includes('series.2')) return 'color.success'; if(n.includes('series.3')) return 'color.warning'; if(n.includes('series.4')) return 'color.destructive'; if(n.includes('series.5')) return 'color.info';
 if(n.includes('success')||n.includes('completed')||n.includes('filled')) return n.includes('.fg')?'color.success-foreground':'color.success';
 if(n.includes('warning')) return n.includes('.fg')?'color.warning-foreground':'color.warning';
 if(n.includes('error')) return n.includes('.fg')?'color.destructive-foreground':'color.destructive';
 if(n.includes('info')) return n.includes('.fg')?'color.info-foreground':'color.info';
 if(n.includes('active')||n.includes('selected')||n.includes('today')||n.includes('event-bg')) return n.includes('.fg')||n.includes('event-fg')?'color.primary-foreground':'color.primary';
 if(n.includes('hover')||n.includes('range')||n.includes('editing')||n.includes('highlight')) return 'color.accent';
 if(n.includes('track')||n.includes('empty')) return 'color.muted';
 if(n.includes('overlay-bg')) return 'color.foreground';
 if(n.endsWith('.fg')||n.includes('header-fg')||n.includes('title-fg')) return 'color.surface-foreground';
 if(n.endsWith('.bg')||n.includes('toolbar-bg')||n.includes('column-bg')||n.includes('card-bg')||n.includes('row-bg')||n.includes('tooltip-bg')||n.includes('input-bg')) return 'color.surface';
 if(n.includes('color')) return 'color.foreground';
 return 'space.md';
}

const known=new Set([...Object.keys(semantic),...Object.keys(componentDoc.tokens)]);
for(const c of manifest.components){
 c.tokens=(c.tokens||[]).map(t=>t==='motion.easing.decelerate'?'motion.easing.exit':t);
 for(const t of c.tokens) if(!known.has(t)) {const ref=inferRef(t);componentDoc.tokens[t]={type:semantic[ref].type,ref};known.add(t);}
 if(c.interactive){
   const states=new Set((c.states||[]).map(s=>s==='focus'?'focus-visible':s));
   ['default','focus-visible','disabled'].forEach(s=>states.add(s));
   if(states.has('active')) states.add('pressed');
   c.states=[...states]; c.a11y={...(c.a11y||{}),focusVisible:true};
 }
}
save('tokens/component.tokens.json',componentDoc); save('components/components.manifest.json',manifest);

const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]);
for(const file of walk(join(ROOT,'prompt-templates')).filter(f=>f.endsWith('.template.json'))){
 const d=JSON.parse(readFileSync(file,'utf8')); const r=d.references||{};
 r.tokens=(r.tokens||[]).map(x=>tokenMap[x]||x); r.components=(r.components||[]).map(x=>componentMap[x]||x); r.motionPresets=(r.motionPresets||[]).map(x=>motionMap[x]||x);
 d.references=r; writeFileSync(file,JSON.stringify(d,null,2)+'\n');
}
console.log(`Canonical migration complete: ${Object.keys(componentDoc.tokens).length} component tokens, ${manifest.components.length} components.`);
