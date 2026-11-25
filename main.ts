// SPDX-License-Identifier: MIT
// One-Sentence Absurd Invention Pitch — round 3 (final) entry.
//
// The program writes exactly one sentence to /output/entry.txt: a pitch for
// a ridiculous invention that fixes a tiny everyday annoyance. It is fully
// deterministic, uses no network and no secrets, and always writes the same
// text, so every run produces the identical file.

import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: a phone charger that only works while you squat. Two everyday
// annoyances — a dead battery and never exercising — are solved by one
// absurd mechanism, and both give up at the same moment.
const PITCH =
  "A phone charger that only charges while you squat, so your battery and your thighs run out at exactly the same time.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, PITCH, "utf8");

console.log(`Wrote ${PITCH.length} characters to ${OUTPUT_FILE}`);
