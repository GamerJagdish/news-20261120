// Hands in the day's front page: copies entry.png, rendered from page/front.html, to the output directory.
// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
