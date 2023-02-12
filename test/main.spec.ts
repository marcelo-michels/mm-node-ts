import { describe, expect, test } from 'vitest';
import { joinWords } from '../src/main';

describe('main.ts', () => {
  test('should join words', () => {
    expect(joinWords('Hello', 'World')).toBe('Hello World');
  });
});
