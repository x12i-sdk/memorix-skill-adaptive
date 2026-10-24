import assert from 'node:assert/strict';
import { evaluateGate } from '@x12i/memorix-skill-adaptive';
const gate = { id: 'all-valid', description: 'Every observed output is valid', at: ['checkpoint'], scope: 'cumulative',
  population: { where: { constant: true } }, measure: { kind: 'matching', where: { path: '/validation/valid', op: 'eq', value: true } },
  assert: { count: { gte: 2 }, percent: { gte: 100 } }, minimumDenominator: { checkpoint: 2, candidate: 2, final: 2 }, zeroPopulation: 'fail',
};
const envelopes = ['one', 'two'].map(recordId => ({ recordId, input: {}, output: { reviewed: true }, validation: { valid: true },
  execution: { status: 'completed', attempts: 1, attemptIds: [recordId + '-attempt'], accounted: true, revisionId: 'revision-1' },
}));
const input = { gate, envelopes, phase: 'checkpoint', cohort: 'validation', revisionId: 'revision-1' };
const passing = evaluateGate(input);
assert.equal(passing.status, 'PASS');
const failing = evaluateGate({ ...input, envelopes: [envelopes[0], { ...envelopes[1], validation: { valid: false } }] });
assert.equal(failing.status, 'FAIL');
console.log({ passing, failing });
