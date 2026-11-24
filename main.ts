import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was built to answer anything, but the only question I can't solve is whether you'll let me buy you a coffee.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars.length}`);
}
if (/[\n\r]/.test(LINE)) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (/[^\x00-\x7f]/.test(LINE)) {
  throw new Error("line must be ASCII only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
