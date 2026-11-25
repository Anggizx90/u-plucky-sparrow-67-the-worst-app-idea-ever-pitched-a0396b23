// QueuePal — the worst app idea ever pitched.
//
// Writes one sentence (228 characters) pitching QueuePal to /output/entry.txt.
// Node standard library only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "QueuePal lets busy people hire a stranger to stand in line for them at a store that has no line, then livestreams the empty queue to their phone so they can watch their precious time being saved, one unoccupied minute at a time.";

// The gate: /output/entry.txt must be UTF-8 text of 1-240 characters, not
// only whitespace. Fail loudly instead of writing an invalid entry.
if (SENTENCE.length < 1 || SENTENCE.length > 240 || !SENTENCE.trim()) {
  throw new Error(`entry sentence is ${SENTENCE.length} chars, outside the 1-240 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
