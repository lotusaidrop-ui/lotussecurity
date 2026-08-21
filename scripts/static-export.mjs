// Renders the built TanStack Start app to static HTML for GitHub Pages.
// Usage: node scripts/static-export.mjs [outDir]  (default: docs)
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const outDir = resolve(root, process.argv[2] ?? "docs");
const clientDir = resolve(root, "dist/client");
const serverEntry = resolve(root, "dist/server/index.mjs");

if (!existsSync(clientDir) || !existsSync(serverEntry)) {
  console.error("Build output missing. Run `bun run build` first.");
  process.exit(1);
}

// Routes to render as static HTML files.
const routes = ["/"];

const mod = await import(pathToFileURL(serverEntry).toString());
const handler = mod.default ?? mod;

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(clientDir, outDir, { recursive: true });

for (const route of routes) {
  const res = await handler.fetch(new Request(`https://lotussecurity.co.in${route}`));
  if (!res.ok) {
    console.error(`Failed to render ${route}: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const html = await res.text();
  const file = route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
  await writeFile(resolve(outDir, file), html, "utf8");
  console.log(`rendered ${route} -> ${file}`);
}

// GitHub Pages extras.
await cp(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
await writeFile(resolve(outDir, ".nojekyll"), "", "utf8");
await writeFile(resolve(outDir, "CNAME"), "lotussecurity.co.in\n", "utf8");

console.log(`Static site written to ${outDir}`);
