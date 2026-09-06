#!/usr/bin/env node
/**
 * rebuild.mjs — пересборка всего пакета из figma-dump/. Ни Figma, ни моста: всё, что нужно,
 * лежит в репозитории.
 *
 *   figma-dump  ->  foundations  ->  typography.css + oc-ds.css
 *                              ->  _inventory.json  ->  спека и лист каждого компонента
 *                                                   ->  _index.json + README.md
 *                                                   ->  code
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

console.log("1/6 foundations");
run("build-foundations.mjs", []);

// Сразу после оснований и до спек: двенадцать текстовых стилей живут в Figma стилями, а не
// переменными, поэтому в tokens.css им взяться неоткуда. Слой выпускается из того же
// typography.json, который собрал предыдущий шаг, — иначе он пропадёт при ре-синке.
console.log("2/6 typography.css + oc-ds.css");
run("build-typography.mjs", ["--bundle"]);

console.log("3/6 _inventory.json");
run("build-inventory.mjs", []);

const inventory = JSON.parse(readFileSync(join(ROOT, "_inventory.json"), "utf8"));
const sheets = !argv.includes("--skip-sheets");

console.log(`4/6 спеки${sheets ? " и листы" : ""}: ${inventory.components.length}`);
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

console.log("5/6 _index.json + README.md");
run("build-index.mjs", []);

console.log("6/6 code/");
run("build-code.mjs", ["--all"]);

if (failed.length) {
  console.error(`не собралось: ${failed.length}`);
  for (const f of failed) console.error("  " + f);
  process.exit(1);
}
console.log(`пересобрано: ${inventory.components.length} компонентов`);
