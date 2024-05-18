import assert from 'node:assert';
import { describe, it } from 'node:test';
import { joinWords } from './main.js';

describe('joinWords', () => {
  it('should return Hello NodeJS with typescript', () => {
    const result = joinWords('Hello', 'NodeJS', 'with', 'typescript');
    assert.strictEqual(result, 'Hello NodeJS with typescript');
  });
});
