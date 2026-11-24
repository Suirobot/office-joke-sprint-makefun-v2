// One-Line Office Joke: 24-Hour Sprint — entrypoint.
// Writes one short joke about office life (a single line, at most 200
// characters) to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The joke, in two beats: a setup every office worker recognises,
// then the deadpan turn. Drafted against the judge's brief — a real
// one-line joke about office life first, surprise second, fresh
// specific detail (4:55 on a Friday, eleven cameras) over stock gags.
const SETUP = "My manager scheduled a 'quick sync' at 4:55 on a Friday, ";
const TWIST =
  "and within two minutes all eleven cameras had developed the same technical difficulty.";
const LINE = SETUP + TWIST;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
