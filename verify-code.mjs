#!/usr/bin/env node
/**
 * verify-code.mjs — второй шлюз. verify.mjs сторожит листы components/, этот сторожит code/.
 *
 * Пять проверок на компонент:
 *   1. В разметке нет <script> и нет внешних ссылок по http.
 *   2. Рендер в headless Chrome с закрытой сетью: 0 ошибок JS, 0 запросов наружу, Roboto загружен.
 *   3. Корней в разметке столько же, сколько вариантов в спеке.
 *   4. Габарит отрисованного против Figma. ДОПУСКИ ТЕ ЖЕ, ЧТО В verify.mjs, и это не
 *      совпадение: разные допуски у двух шлюзов означали бы два разных представления о том,
 *      что такое «совпадает». Размер, записанный числом, — 0.5px; размер по содержимому —
 *      max(1.5px, 1%), потому что ширины глифов Figma и Chrome округляют по-разному.
 *   5. Число маркеров TODO в CSS равно длине spec.unbound.
 *
 * Провал хотя бы одной — ненулевой код возврата. Шлюз, который не умеет падать, декоративен.
 *
 *   node verify-code.mjs            все компоненты
 *   node verify-code.mjs button     только названные
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));

const CHROME = [ // браузер живёт вне репозитория
  "C:/Program Files/Google/Chrome/Application/chrome.exe", // abs-ok
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe", // abs-ok
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", // abs-ok
].find((p) => existsSync(p));

let puppeteer;
try { puppeteer = require("puppeteer-core"); }
catch { console.error("нет puppeteer-core: npm i puppeteer-core. Без него проверка 2 не выполняется — шлюз останавливается."); process.exit(2); }
if (!CHROME) { console.error("не найден Chrome/Edge — проверка 2 невыполнима."); process.exit(2); }

const CODE = join(ROOT, "code");
if (!existsSync(CODE)) { console.error("нет code/ — сначала node tools/build-code.mjs --all"); process.exit(2); }

const slugs = (only.length ? only : readdirSync(CODE).filter((d) => existsSync(join(CODE, d, `${d}.html`)))).sort();
if (!slugs.length) { console.error("нечего проверять"); process.exit(2); }

/* Дословно из verify.mjs, проверка 8. */
const tolFor = (styleValue, figmaPx) =>
  (typeof styleValue === "string" && /^\d+(\.\d+)?px$/.test(styleValue)) ? 0.5 : Math.max(1.5, figmaPx * 0.01);

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=none"],
});

const report = [];
for (const slug of slugs) {
  const fails = [];
  const specPath = join(ROOT, "components", slug, "spec.json");
  if (!existsSync(specPath)) { report.push({ slug, ok: false, fails: ["нет spec.json"] }); continue; }
  const spec = JSON.parse(readFileSync(specPath, "utf8"));
  const html = readFileSync(join(CODE, slug, `${slug}.html`), "utf8");
  const css = readFileSync(join(CODE, slug, `${slug}.css`), "utf8");

  /* 1 */
  const scripts = (html.match(/<script\b/gi) || []).length;
  if (scripts) fails.push(`1: найдено <script> × ${scripts}`);
  const ext = [...html.matchAll(/(?:href|src)\s*=\s*["']\s*(https?:|\/\/)/gi),
               ...css.matchAll(/url\(\s*["']?\s*(https?:|\/\/)/gi)].length;
  if (ext) fails.push(`1: внешних ссылок × ${ext}`);

  /* 5 */
  const todo = (css.match(/TODO: unbound/g) || []).length;
  const unbound = (spec.unbound || []).length;
  if (todo !== unbound) fails.push(`5: маркеров TODO ${todo}, записей spec.unbound ${unbound}`);

  /* 2, 3, 4 */
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  const errors = [], requests = [];
  page.on("pageerror", (e) => errors.push(String(e.message || e)));
  page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
  await page.setRequestInterception(true);
  page.on("request", (r) => {
    const u = r.url();
    if (u.startsWith("file:") || u.startsWith("data:") || u.startsWith("about:")) return r.continue();
    requests.push(u.slice(0, 120)); r.abort();
  });
  await page.goto(pathToFileURL(join(CODE, slug, `${slug}.html`)).href, { waitUntil: "load", timeout: 30000 });

  const seen = await page.evaluate(async (cls) => {
    // Шрифт грузится по требованию, а у компонента без единой буквы (divider, status-dot,
    // иконки) требования нет — «не загружен» означало бы только это. Поэтому сначала явная
    // загрузка, как проба в verify.mjs, и лишь потом вопрос, доехал ли файл.
    try { await document.fonts.load("400 40px Roboto"); } catch {}
    await document.fonts.ready;
    const roboto = document.fonts.check("400 40px Roboto");
    const boxes = [...document.querySelectorAll("." + cls)].map((el) => {
      const r = el.getBoundingClientRect();
      return { w: Math.round(r.width * 100) / 100, h: Math.round(r.height * 100) / 100 };
    });
    return { roboto, boxes };
  }, "oc-" + slug);
  await page.close();

  if (errors.length) fails.push(`2: ошибок JS ${errors.length}: ${errors[0]}`);
  if (requests.length) fails.push(`2: сетевых запросов ${requests.length}: ${requests[0]}`);
  if (!seen.roboto) fails.push("2: Roboto не загружен");
  if (seen.boxes.length !== spec.variants.length) fails.push(`3: корней ${seen.boxes.length}, вариантов в спеке ${spec.variants.length}`);

  const drift = [];
  let maxDelta = 0;
  spec.variants.forEach((v, i) => {
    const box = seen.boxes[i], f = v.figmaSize;
    if (!box || !f) return;
    const st = v.render.style || {};
    const dw = Math.abs(box.w - f.w), dh = Math.abs(box.h - f.h);
    maxDelta = Math.max(maxDelta, dw, dh);
    const tw = tolFor(st.width, f.w), th = tolFor(st.height, f.h);
    if (dw > tw || dh > th) drift.push(`${v.key}: ${box.w}×${box.h} против Figma ${f.w}×${f.h} (допуск ${tw}/${th})`);
  });
  if (drift.length) fails.push(`4: габарит разошёлся с Figma × ${drift.length}: ${drift.slice(0, 3).join("; ")}`);

  report.push({
    slug, ok: !fails.length, fails,
    variants: spec.variants.length, roots: seen.boxes.length,
    unbound, todo, maxDelta: Math.round(maxDelta * 100) / 100,
    js: errors.length, net: requests.length,
  });
}
await browser.close();

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("компонент", 24) + pad("корней", 8) + pad("вар.", 6) + pad("TODO/unb", 10) + pad("сеть", 6) + pad("JS", 4) + pad("сдвиг", 8) + "шлюз");
for (const r of report) {
  console.log(pad(r.slug, 24) + pad(r.roots ?? "—", 8) + pad(r.variants ?? "—", 6) +
    pad(`${r.todo ?? "—"}/${r.unbound ?? "—"}`, 10) + pad(r.net ?? "—", 6) + pad(r.js ?? "—", 4) +
    pad(r.maxDelta ?? "—", 8) + (r.ok ? "OK" : "ПРОВАЛ"));
  for (const f of r.fails) console.log("    " + f);
}
writeFileSync(join(ROOT, "_verify-code.json"), JSON.stringify(report, null, 2) + "\n");
const failed = report.filter((r) => !r.ok).length;
console.log(`\nпрошло ${report.length - failed} из ${report.length}. Отчёт: _verify-code.json`);
process.exit(failed ? 1 : 0);
