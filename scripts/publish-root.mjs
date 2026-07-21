import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const targetAssets = resolve(root, 'assets');

await rm(targetAssets, { recursive: true, force: true });
await mkdir(targetAssets, { recursive: true });
await cp(resolve(dist, 'assets'), targetAssets, { recursive: true });
await cp(resolve(dist, 'index.html'), resolve(root, 'index.html'));
await cp(resolve(dist, 'favicon.svg'), resolve(root, 'favicon.svg'));

console.log('GitHub Pages files copied to the repository root.');
