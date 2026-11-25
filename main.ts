// SPDX-License-Identifier: MIT
// One-Sentence Absurd Invention Pitch — round 3 (final) entry.
//
// The program writes exactly one sentence to /output/entry.txt: a pitch for
// a ridiculous invention that fixes a tiny everyday annoyance. It is fully
// deterministic, uses no network and no secrets, and always writes the same
// text, so every run produces the identical file.

import { mkdirSync, renameSync, writeFileSync } from "node:fs";

// The pitch: a phone charger that only works while you squat. Two everyday
// annoyances — a dead battery and never exercising — are solved by one
// absurd mechanism, and both give up at the same moment.
const PITCH =
  "A phone charger that only charges while you squat, so your battery and your thighs run out at exactly the same time.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Self-checks before writing: the entry must be a single sentence within
// the competition's length window. Failing here (non-zero exit) is safer
// than writing an invalid entry.
if (PITCH.length < 1 || PITCH.length > 220) {
  console.error(`Invalid pitch length: ${PITCH.length} characters (must be 1–220)`);
  process.exit(1);
}
if ((PITCH.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(PITCH)) {
  console.error("Invalid pitch: must be exactly one sentence ending in . ! or ?");
  process.exit(1);
}

// Write atomically: write to a temp file in the same directory, then
// rename, so a crash mid-write can never leave a partial entry behind.
mkdirSync(OUTPUT_DIR, { recursive: true });
const tmpFile = `${OUTPUT_FILE}.tmp-${process.pid}`;
writeFileSync(tmpFile, PITCH, "utf8");
renameSync(tmpFile, OUTPUT_FILE);

console.log(`Wrote ${PITCH.length} characters to ${OUTPUT_FILE}`);
