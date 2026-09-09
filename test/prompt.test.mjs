import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPrompt } from '../dist/prompt.js';

// No network here: the suite proves the build still works and the pure parts
// still behave after Mendr swaps the model id. It is what the migration's test
// gate runs on a throwaway copy before any pull request is opened.

test('buildPrompt collapses whitespace and trims', () => {
  assert.equal(buildPrompt('  what   is\n\tMendr?  '), 'what is Mendr?');
});

test('buildPrompt leaves a clean question alone', () => {
  assert.equal(buildPrompt('hello'), 'hello');
});
