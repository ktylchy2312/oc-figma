/**
 * stamp.mjs — время сборки живёт в одном месте: _build.json в корне, вне git.
 *
 * Любое поле со временем внутри файла, который лежит в репозитории, делает
 * `git diff --exit-code` после пересборки заведомо непустым. Тест на дрейф генератора при
 * этом не «становится строже» — он перестаёт что-либо проверять, потому что падает всегда,
 * а значит его перестают запускать. Поэтому выходы генераторов времени не содержат вовсе,
 * а «когда собрано» пишется рядом и в git не едет.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

export function record(tool, extra = {}, dir = process.cwd()) {
  const path = join(dir, "_build.json");
  const prev = existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : {};
  prev[tool] = { builtAt: new Date().toISOString(), ...extra };
  writeFileSync(path, JSON.stringify(prev, null, 2) + "\n");
}
