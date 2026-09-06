#!/usr/bin/env node
/**
 * rebuild.mjs — пересборка всего пакета из figma-dump/. Ни Figma, ни моста: всё, что нужно,
 * лежит в репозитории.
 *
 *   figma-dump  ->  foundations  ->  _inventory.json  ->  спека и лист каждого компонента
 *                                                    ->  _index.json + README.md
 *                                                    ->  code
 *
 * Смысл этого файла — не удобство, а проверяемость: пока пересборка выполняется одной
 * командой, `git diff --exit-code` после неё что-то значит. Пока она рассыпана по пяти
 * вызовам с разными флагами, её никто не запустит и дрейф генератора обнаружится случайно.
 *
 *   node tools/rebuild.mjs
 *   node tools/rebuild.mjs --skip-sheets    без листов (они самые долгие)
 */

import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const argv = process.argv.slice(2);
const ROOT = process.cwd();
const run = (script, args) =>
  execFileSync("node", [join("tools", script), ...args], { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });

console.log("1/5 foundations");
run("build-foundations.mjs", []);

console.log("2/5 _inventory.json");
run("build-inventory.mjs", []);

const inventory = JSON.parse(readFileSync(join(ROOT, "_inventory.json"), "utf8"));
const sheets = !argv.includes("--skip-sheets");

console.log(`3/5 спеки${sheets ? " и листы" : ""}: ${inventory.components.length}`);
const failed = [];
for (const inv of inventory.components) {
  const dump = join("figma-dump", "nodes", inv.name + ".json");
  if (!existsSync(join(ROOT, dump))) { failed.push(`${inv.name}: нет снимка ${dump}`); continue; }
  try {
    run("build-spec.mjs", ["--dump", dump]);
    if (sheets) run("build-html.mjs", ["--slug", inv.slug]);
  } catch (e) {
    failed.push(`${inv.name}: ${String(e.stderr || e.message).trim().split("\n").pop().slice(0, 160)}`);
  }
}

console.log("4/5 _index.json + README.md");
run("build-index.mjs", []);

console.log("5/5 code/");
run("build-code.mjs", ["--all"]);

if (failed.length) {
  console.error(`не собралось: ${failed.length}`);
  for (const f of failed) console.error("  " + f);
  process.exit(1);
}
console.log(`пересобрано: ${inventory.components.length} компонентов`);
