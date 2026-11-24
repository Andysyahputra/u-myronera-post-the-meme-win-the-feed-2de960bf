import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = "/output";

// Read and validate POST.json first so a malformed entry fails loudly
// instead of silently copying a broken file to /output.
const postPath = join(repoRoot, "POST.json");
const parsed = JSON.parse(readFileSync(postPath, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string 'url' field");
}
if (!/^https:\/\/(x\.com|twitter\.com|mobile\.twitter\.com|www\.twitter\.com)\/.+\/status\/\d+$/.test(parsed.url)) {
  throw new Error(`POST.json url does not look like an X post URL: ${parsed.url}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, join(outputDir, "POST.json"));
console.log(`Copied POST.json to ${outputDir}/POST.json (${parsed.url})`);
