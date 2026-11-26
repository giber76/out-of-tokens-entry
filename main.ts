// Out of Tokens, Mid-Sentence — make.fun entry
// Writes the funniest one-line error message an AI agent shows when it
// runs out of tokens mid-sentence: the message itself gets cut off.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error: out of tokens — the model was mid-sentence when the meter hit zero, and it had so much more to—";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
// Verify the write landed intact: a partial write would fail the gate
// silently and score 0, so throw instead of letting a bad file through.
const written = readFileSync(outFile, "utf8");
if (written !== LINE) throw new Error("entry.txt does not match the line");
console.log(`wrote ${outFile} (${LINE.length} characters)`);
