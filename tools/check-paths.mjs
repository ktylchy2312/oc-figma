#!/usr/bin/env node
/**
 * check-paths.mjs — в скриптах репозитория не должно быть абсолютных путей.
 *
 * Разворачивание путей на относительные — правка разовая, а абсолютный путь возвращается при
 * первой же спешной правке. Поэтому сторож, а не договорённость: ловятся буква диска,
 * домашний каталог macOS или Linux и сетевой путь UNC. Проверка идёт по исходнику, поэтому
 * срабатывает и на строке в коде, и на значении по умолчанию у аргумента.
 *
 * Единственное исключение — путь к тому, чего в репозитории нет и быть не может: браузер для
 * шлюза. Такая строка помечается «abs-ok» и пропускается. Исключение именное, а не категория:
 * молчаливого «ну этот путь можно» здесь нет.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN = ["tools", "."];
const RULES = [
  [/\b[A-Za-z]:[\\/]/, "буква диска"], // abs-ok
  [/\/Users\/[A-Za-z]/, "домашний каталог macOS"], // abs-ok
  [/\/home\/[a-z]/, "домашний каталог Linux"], // abs-ok
  [/\\\\[A-Za-z0-9_.-]+\\/, "сетевой путь UNC"], // abs-ok
];

const files = [];
for (const dir of SCAN) {
  const full = join(ROOT, dir);
  for (const name of readdirSync(full)) {
    const p = join(full, name);
    if (statSync(p).isDirectory()) continue;
    if (/\.(mjs|js|cjs)$/.test(name)) files.push(p);
  }
}

const hits = [];
for (const f of files) {
  readFileSync(f, "utf8").split("\n").forEach((line, i) => {
    if (line.includes("abs-ok")) return;
    for (const [re, why] of RULES) {
      if (re.test(line)) hits.push(`${relative(ROOT, f)}:${i + 1}  ${why}  ${line.trim().slice(0, 100)}`);
    }
  });
}

if (hits.length) {
  console.error(`абсолютных путей: ${hits.length}. Репозиторий, который собирается только на одной машине, не собирается.`);
  for (const h of hits) console.error("  " + h);
  process.exit(1);
}
console.log(`пути: проверено файлов ${files.length}, абсолютных нет`);
