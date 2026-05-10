import { copyFile, mkdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const dist = "dist";

async function exists(path: string) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(join(dist, "index.html")))) {
  throw new Error("Static build failed: dist/index.html was not created.");
}

await mkdir(dist, { recursive: true });
await writeFile(join(dist, ".nojekyll"), "");
await copyFile(join(dist, "index.html"), join(dist, "404.html"));

if (await exists("CNAME")) {
  await copyFile("CNAME", join(dist, "CNAME"));
}