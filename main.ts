import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You pressed 12, I pressed 12. Statistically, one of us is following the other.";

function formatEntry(line: string): string {
  return line.trim() + "\n";
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", formatEntry(ENTRY), "utf8");
