import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadRoadmaps } from '../scripts/validate.mjs';
test('the initial catalogue preserves the ten paths and fifty eligible materials',async()=>{
  const entries=await loadRoadmaps(new URL('..',import.meta.url));
  assert.equal(entries.length,10);
  const refs=new Set(entries.flatMap(e=>e.data.nodes.map(n=>n.ref)));
  assert.equal(refs.size,50);
  for(const ref of ['labs:004-arena-lab','labs:009-vm-lab','challenges:026-no-std','challenges:030-windows-inspector'])assert.equal(refs.has(ref),false,ref);
  assert.equal(refs.has('labs:007-compilation-lab'),true);
  assert.equal(entries.filter(e=>e.data.featured).length,4);
});
test('curricular alternatives remain independent',async()=>{
  const entries=await loadRoadmaps(new URL('..',import.meta.url));
  const concurrency=entries.find(e=>e.id.startsWith('concorrencia-'));
  assert.equal(concurrency.data.edges.some(e=>e.from==='labs:019-atomics-lab'&&e.to==='labs:015-async-lab'),false);
  const os=entries.find(e=>e.id.startsWith('sistemas-operacionais-'));
  assert.equal(os.data.edges.some(e=>e.from==='labs:016-isolation-lab'&&e.to==='challenges:031-ipc-snapshots'),false);
  const performance=entries.find(e=>e.id.startsWith('arquitetura-'));
  assert.equal(performance.data.edges.find(e=>e.from==='labs:017-gpu-lab'&&e.to==='labs:018-attention-lab')?.type,'branch');
});
