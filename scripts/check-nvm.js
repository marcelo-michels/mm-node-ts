import { readFileSync } from 'fs';
const nvmrc = readFileSync('.nvmrc', 'utf8').trim();
const nodeVersion = process.version.replace('v', '');
if (!nodeVersion.startsWith(nvmrc)) {
  console.error(
    `NodeJS version (${nodeVersion}) not compatible with .nvmrc version (${nvmrc}).`,
  );
  process.exit(1);
}
