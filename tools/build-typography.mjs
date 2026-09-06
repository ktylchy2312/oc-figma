/**
 * build-typography.mjs — foundations/typography.json → foundations/typography.css
 *
 * Двенадцать текстовых стилей Figma живут в файле стилями, а не переменными, поэтому
 * в tokens.css им взяться неоткуда: экспортёр читает переменные. Этот шаг закрывает
 * разрыв — он выпускает переменные и классы из того же typography.json, который уже
 * собирается конвейером, и делает это в репозитории, а не разово руками: иначе слой
 * пропадёт при следующем ре-синке ровно так, как пропал в прошлый раз.
 *
 * Выход детерминирован: порядок ролей — как в typography.json, никаких меток времени.
 *
 *   node tools/build-typography.mjs
 *   node tools/build-typography.mjs --bundle     # + foundations/oc-ds.css
 *
 * --bundle склеивает fonts.css + tokens.css + typography.css в один файл, в этом
 * порядке: шрифт объявляется до того, как на него сошлются, токены — до слоя,
 * который из них состоит.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const F = (...p) => join(ROOT, "foundations", ...p);
const BUNDLE = process.argv.includes("--bundle");

/* --------------------------------------------------------------------- вход */

const styles = JSON.parse(readFileSync(F("typography.json"), "utf8"));
if (!Array.isArray(styles) || !styles.length) {
  console.error("typography.json пуст или не массив — генерировать нечего");
  process.exit(2);
}

/** "Body Medium Alter" → "body-medium-alter" */
const slug = (role) =>
  String(role)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * lineHeight в Figma приходит как "44px", "150%" или "AUTO". Первые два едут в CSS
 * как есть. AUTO — это отсутствие значения, а не значение: подставить сюда число
 * значило бы выдумать его, поэтому роль остаётся без line-height, и это видно.
 */
const lineHeight = (v) => {
  const s = String(v ?? "").trim();
  if (!s || s.toUpperCase() === "AUTO") return null;
  return s;
};

const seen = new Set();
const roles = styles.map((s) => {
  const id = slug(s.role ?? s.figmaName);
  if (!id) throw new Error(`роль без имени: ${JSON.stringify(s)}`);
  if (seen.has(id)) throw new Error(`две роли дают один slug "${id}" — переименуй стиль в Figma`);
  seen.add(id);
  return {
    id,
    role: s.role ?? s.figmaName,
    figmaName: s.figmaName ?? "",
    figmaId: s.figmaId ?? "",
    family: s.family ?? "Roboto",
    weight: s.weight ?? 400,
    size: typeof s.fontSize === "number" ? `${s.fontSize}px` : String(s.fontSize ?? ""),
    line: lineHeight(s.lineHeight),
    tracking: String(s.letterSpacing ?? "0px").trim(),
    textCase: String(s.textCase ?? "ORIGINAL").toUpperCase(),
    decoration: String(s.textDecoration ?? "NONE").toUpperCase(),
  };
});

const families = [...new Set(roles.map((r) => r.family))];
if (families.length > 1) {
  console.error(`несколько семейств: ${families.join(", ")} — --font-family одна, разведи роли явно`);
  process.exit(2);
}

const TEXT_CASE = { UPPER: "uppercase", LOWER: "lowercase", TITLE: "capitalize" };
const DECORATION = { UNDERLINE: "underline", STRIKETHROUGH: "line-through" };

/* -------------------------------------------------------------------- выход */

const out = [];
out.push("/* OC-Kontrol — типографика. Сгенерировано tools/build-typography.mjs");
out.push(" * из foundations/typography.json. Руками не править: правится Figma, потом пересборка.");
out.push(" *");
out.push(" * Роль описывается полным набором из четырёх переменных, включая нулевой трекинг:");
out.push(" * иначе потребитель не отличает «задано ноль» от «забыли задать». */");
out.push("");
out.push(":root {");
out.push(`  --font-family: "${families[0]}", system-ui, -apple-system, "Segoe UI", sans-serif;`);
out.push("");

for (const r of roles) {
  out.push(`  /* ${r.role}${r.figmaName ? ` — ${r.figmaName}` : ""}${r.figmaId ? ` (${r.figmaId})` : ""} */`);
  out.push(`  --type-${r.id}-size: ${r.size};`);
  if (r.line) out.push(`  --type-${r.id}-line-height: ${r.line};`);
  out.push(`  --type-${r.id}-weight: ${r.weight};`);
  out.push(`  --type-${r.id}-letter-spacing: ${r.tracking};`);
  out.push("");
}
out[out.length - 1] = "}";
out.push("");

for (const r of roles) {
  out.push(`.oc-type-${r.id} {`);
  out.push("  font-family: var(--font-family);");
  out.push(`  font-size: var(--type-${r.id}-size);`);
  if (r.line) out.push(`  line-height: var(--type-${r.id}-line-height);`);
  out.push(`  font-weight: var(--type-${r.id}-weight);`);
  out.push(`  letter-spacing: var(--type-${r.id}-letter-spacing);`);
  if (TEXT_CASE[r.textCase]) out.push(`  text-transform: ${TEXT_CASE[r.textCase]};`);
  if (DECORATION[r.decoration]) out.push(`  text-decoration: ${DECORATION[r.decoration]};`);
  out.push("}");
  out.push("");
}

const css = out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
writeFileSync(F("typography.css"), css, "utf8");

const vars = roles.reduce((n, r) => n + 3 + (r.line ? 1 : 0), 1);
console.log(`typography.css: ролей ${roles.length}, переменных ${vars}, классов ${roles.length}`);
const noLine = roles.filter((r) => !r.line).map((r) => r.role);
if (noLine.length) console.log(`без line-height (в Figma AUTO): ${noLine.join(", ")}`);

/* -------------------------------------------------------------------- бандл */

if (BUNDLE) {
  const parts = ["fonts.css", "tokens.css", "typography.css"];
  const missing = parts.filter((p) => !existsSync(F(p)));
  if (missing.length) {
    console.error(`нет файлов для бандла: ${missing.join(", ")}`);
    process.exit(2);
  }
  const bundle = parts
    .map((p) => `/* ===== ${p} ===== */\n${readFileSync(F(p), "utf8").trimEnd()}\n`)
    .join("\n");
  writeFileSync(F("oc-ds.css"), `/* Сгенерировано tools/build-typography.mjs --bundle. Руками не править. */\n\n${bundle}`, "utf8");
  console.log(`oc-ds.css: ${parts.join(" + ")}, ${Math.round(bundle.length / 1024)} КБ`);
}
