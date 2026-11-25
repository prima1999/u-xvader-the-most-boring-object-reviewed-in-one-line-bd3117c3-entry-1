// A one-line review of the dullest everyday object, written exactly as judged.
import { writeFileSync, mkdirSync } from "node:fs";

// The chosen review: a dustpan blamed for the one line of dust it always leaves.
const ENTRY = "This dustpan collects everything the broom misses, then gets blamed for the line of dust it leaves behind.";

// The review goes out byte-for-byte: a single line, with no trailing newline.
const OUTPUT_PATH = "/output/entry.txt";

function run(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, { encoding: "utf8" });
}

run();
