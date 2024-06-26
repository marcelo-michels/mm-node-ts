import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/'],
  format: 'esm',
  sourcemap: true,
  splitting: false,
  clean: true,
});
