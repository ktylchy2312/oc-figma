#!/usr/bin/env node
/**
 * verify.mjs — шлюз пакета переноса. Шесть проверок контракта §6 плюс одна своя.
 *
 *   node verify.mjs              все компоненты
 *   node verify.mjs button       только эти slug'и
 *   node verify.mjs --json       машинный отчёт в _verify.json без таблицы
 *
 * Компонент, не прошедший хотя бы одну проверку, считается непригодным к заливке. Скрипт
 * возвращает ненулевой код выхода — чтобы «не прошло, но поехало» было невозможно даже
 * случайно.
 *
 * ПРОВЕРКА 3 НЕ ФОРМАЛЬНОСТЬ. Она уже ловила лист, где внешний шрифт вырезали, а вшить
 * забыли: внешне всё выглядело нормально, шрифт был системный. Поэтому рендер идёт
 * В НАСТОЯЩЕМ БРАУЗЕРЕ С ЗАКРЫТОЙ СЕТЬЮ: любой запрос наружу перехватывается и считается
 * нарушением, а не «медленной загрузкой».
 *
 * СЕДЬМАЯ, СВЕРХ КОНТРАКТА: Roboto вшит как ОДИН вариативный файл на подмножество, общий
 * для всех весов. Если бы файл оказался статическим, 400 и 700 отрисовались бы одинаково,
 * лист выглядел бы правдоподобно и был бы неверен. Поэтому меряется ширина одной и той же
 * строки в 400 и 700: совпали — вес не работает.
 *
 * Нужен установленный Chrome и puppeteer-core (npm i puppeteer-core). Где их нет — шлюз
 * не работает, и это честнее, чем зелёный отчёт без рендера.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const ROOT = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const argv = process.argv.slice(2);
const JSON_ONLY = argv.includes("--json");
const only = argv.filter((a) => !a.startsWith("--"));

const GROUPS = ["Foundations", "Actions", "Forms", "Navigation", "Cards", "Feedback", "Stage", "Overlays", "Overview"];
const CHROME = [ // браузер живёт вне репозитория
  "C:/Program Files/Google/Chrome/Application/chrome.exe", // abs-ok
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe", // abs-ok
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", // abs-ok
].find((p) => existsSync(p));

let puppeteer;
try { puppeteer = require("puppeteer-core"); }
catch { console.error("нет puppeteer-core: npm i puppeteer-core. Без него проверка 3 не выполняется — шлюз останавливается."); process.exit(2); }
if (!CHROME) { console.error("не найден Chrome/Edge — проверка 3 невыполнима."); process.exit(2); }

const compDir = join(ROOT, "components");
const slugs = (only.length ? only : readdirSync(compDir).filter((d) => existsSync(join(compDir, d, "spec.json")))).sort();
if (!slugs.length) { console.error("нечего проверять: в components/ нет ни одной спеки"); process.exit(2); }

/* ------------------------------------------------------- значения из спеки */

/**
 * Из значения спеки вытаскиваются его ПРОВЕРЯЕМЫЕ части: имена токенов, пиксели, hex.
 * `"var(--space-0) var(--space-5) …"` даёт четыре имени, `"linear-gradient(317deg, #30313a …)"`
 * — два цвета. Значение без единой такой части («HORIZONTAL», «Type/Body Medium Alter 15/24px
 * 700») описательное: оно в разметку не попадает по своей природе, и считать его провалом
 * значило бы обучить себя игнорировать провалы. Такие считаются отдельно и показываются.
 * Исключение — шрифт: его числа проверяются как font-size / line-height / font-weight.
 */
function checkable(key, value) {
  const v = String(value);
  const out = [];
  for (const m of v.matchAll(/var\((--[a-z0-9-]+)\)/g)) out.push(m[1]);
  for (const m of v.matchAll(/(?<![\w.-])(\d+(?:\.\d+)?px)/g)) out.push(m[1]);
  for (const m of v.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) out.push(m[0].toLowerCase());
  if (out.length) return out;
  if (key.endsWith("font")) {
    const m = v.match(/(\d+(?:\.\d+)?)\/(\S+)\s+(\d+)$/);
    if (m) return [`font-size:${m[1]}px`, `line-height:${m[2]}`, `font-weight:${m[3]}`];
  }
  return null;
}

/* --------------------------------------------------------------- проверки */

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=none"] });

const report = [];
for (const slug of slugs) {
  const dir = join(compDir, slug);
  const htmlPath = join(dir, "index.html");
  const fails = [], warns = [];
  const spec = JSON.parse(readFileSync(join(dir, "spec.json"), "utf8"));
  const html = existsSync(htmlPath) ? readFileSync(htmlPath, "utf8") : null;
  if (!html) { report.push({ slug, ok: false, fails: ["нет index.html"], warns: [], checks: {} }); continue; }

  /* 1. script */
  const scripts = (html.match(/<script\b/gi) || []).length;
  if (scripts) fails.push(`1: найдено <script> × ${scripts}`);

  /* 2. внешние ссылки */
  const ext = [...html.matchAll(/(?:href|src)\s*=\s*["']\s*(https?:|\/\/)/gi), ...html.matchAll(/url\(\s*["']?\s*(https?:|\/\/)/gi)].length;
  if (ext) fails.push(`2: внешних ссылок × ${ext}`);

  /* 6. первая строка */
  const first = html.split("\n", 1)[0].trim();
  const dsCard = first.match(/^<!--\s*@dsCard\s+group="([^"]+)"\s*-->$/);
  if (!dsCard) fails.push(`6: первая строка не @dsCard: ${JSON.stringify(first.slice(0, 60))}`);
  else if (!GROUPS.includes(dsCard[1])) fails.push(`6: группа «${dsCard[1]}» вне списка §5`);
  else if (dsCard[1] !== spec.group) fails.push(`6: группа в листе «${dsCard[1]}» != группы в спеке «${spec.group}»`);

  /* 5. подписанные ячейки */
  const labels = (html.match(/<code class="ds-cell-label">/g) || []).length;
  if (labels !== spec.variants.length) fails.push(`5: ячеек ${labels}, вариантов в спеке ${spec.variants.length}`);
  for (const v of spec.variants) {
    const label = v.key || spec.name;
    if (!html.includes(`data-variant="${label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")}"`)) fails.push(`5: нет ячейки с подписью «${label}»`);
  }

  /* 4. значения спеки присутствуют в разметке */
  const entries = [
    ...Object.entries(spec.base).map(([k, v]) => ["base." + k, v]),
    ...spec.variants.flatMap((vr) => Object.entries(vr.tokens).map(([k, v]) => [`${vr.key || spec.name}.${k}`, v])),
  ];
  let checkedValues = 0, descriptive = 0;
  const missing = [];
  for (const [k, v] of entries) {
    const parts = checkable(k, v);
    if (!parts) { descriptive++; continue; }
    for (const p of parts) {
      checkedValues++;
      if (!html.includes(p)) missing.push(`${k} -> ${p}`);
    }
  }
  if (missing.length) fails.push(`4: значений спеки нет в листе × ${missing.length}: ${missing.slice(0, 4).join("; ")}`);

  /* 3. рендер в браузере с закрытой сетью */
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  const errors = [], requests = [];
  page.on("pageerror", (e) => errors.push(String(e.message || e)));
  page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
  await page.setRequestInterception(true);
  page.on("request", (r) => {
    const u = r.url();
    if (u.startsWith("file:") || u.startsWith("data:") || u.startsWith("about:")) return r.continue();
    requests.push(u.slice(0, 120));
    r.abort();
  });
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load", timeout: 30000 });
  const seen = await page.evaluate(async () => {
    await document.fonts.ready;
    const sheet = document.querySelector(".ds-sheet");
    const probe = document.createElement("span");
    probe.style.cssText = "position:absolute;left:-9999px;top:0;font-family:'Roboto';font-size:40px;white-space:nowrap";
    probe.textContent = "Waga Тест 0123";
    document.body.appendChild(probe);
    probe.style.fontWeight = "400"; const w400 = probe.getBoundingClientRect().width;
    probe.style.fontWeight = "700"; const w700 = probe.getBoundingClientRect().width;
    probe.remove();
    return {
      height: Math.round(sheet ? sheet.getBoundingClientRect().height : document.body.scrollHeight),
      width: Math.round(sheet ? sheet.getBoundingClientRect().width : 0),
      textLength: (document.body.innerText || "").replace(/\s+/g, " ").trim().length,
      fonts: [...document.fonts].map((f) => `${f.family}|${f.weight}|${f.status}`),
      robotoLoaded: [...document.fonts].some((f) => /Roboto/i.test(f.family) && f.status === "loaded"),
      w400: Math.round(w400 * 100) / 100,
      w700: Math.round(w700 * 100) / 100,
      overflowX: document.documentElement.scrollWidth > (sheet ? Math.ceil(sheet.getBoundingClientRect().width) : 0),
      // Габарит каждой ячейки: то, что браузер реально нарисовал, против того, что в Figma.
      boxes: [...document.querySelectorAll(".ds-cell")].map((c) => {
        const r = c.querySelector('[data-part="root"]');
        const b = r ? r.getBoundingClientRect() : null;
        return { variant: c.getAttribute("data-variant"), w: b ? Math.round(b.width * 100) / 100 : null, h: b ? Math.round(b.height * 100) / 100 : null };
      }),
    };
  });
  await page.close();

  if (seen.height <= 400) fails.push(`3: высота листа ${seen.height}px, нужно > 400`);
  if (seen.textLength <= 100) fails.push(`3: текста ${seen.textLength} символов, нужно > 100`);
  if (!seen.robotoLoaded) fails.push(`3: Roboto не загружен (${seen.fonts.slice(0, 3).join(", ") || "шрифтов нет"})`);
  if (errors.length) fails.push(`3: ошибок JS ${errors.length}: ${errors[0]}`);
  if (requests.length) fails.push(`3: сетевых запросов ${requests.length}: ${requests[0]}`);
  /* 8, сверх контракта. ГАБАРИТ ОТРИСОВАННОГО ПРОТИВ FIGMA — это и есть «пиксель-в-пиксель»
     как проверка, а не как обещание. Все шесть проверок контракта может пройти лист, у
     которого кнопка на десять пикселей уже: там нет ни скриптов, ни сети, ни пропавших
     токенов — просто HUG перевели во FIXED. Допуск 1px: ширина по содержимому зависит от
     растеризации текста, и 176.64 против 177 расхождением не является.
     ДОПУСК РАЗНЫЙ ПО ПРИЧИНЕ, А НЕ ПО ВЕЛИЧИНЕ. Размер, записанный числом (`width: 169px`),
     браузер обязан воспроизвести точно — там допуск 0.5px, и послабления он не заслуживает.
     Размер по содержимому браузер СЧИТАЕТ сам из ширин глифов, а Figma округляет их иначе:
     EmptyTitle дал 167.98 против 169 — это растеризация, а не дефект раскладки. Единый
     допуск пришлось бы задрать до полутора пикселей для всех, и тогда он перестал бы ловить
     подмену HUG на FIXED, ради которой заведён. */
  const drift = [];
  const tolFor = (styleValue, figmaPx) =>
    (typeof styleValue === "string" && /^\d+(\.\d+)?px$/.test(styleValue)) ? 0.5 : Math.max(1.5, figmaPx * 0.01);
  for (const v of spec.variants) {
    const label = v.key || spec.name;
    const box = seen.boxes.find((b) => b.variant === label);
    if (!box || box.w === null) { drift.push(label + ": корень не найден в разметке"); continue; }
    if (!v.figmaSize) continue;
    const st = v.render.style || {};
    const dw = Math.abs(box.w - v.figmaSize.w), dh = Math.abs(box.h - v.figmaSize.h);
    const tw = tolFor(st.width, v.figmaSize.w), th = tolFor(st.height, v.figmaSize.h);
    if (dw > tw || dh > th) drift.push(`${label}: ${box.w}×${box.h} против Figma ${v.figmaSize.w}×${v.figmaSize.h} (допуск ${tw}/${th})`);
  }
  if (drift.length) fails.push(`8: габарит разошёлся с Figma × ${drift.length}: ${drift.slice(0, 3).join("; ")}`);

  if (seen.w400 === seen.w700) fails.push(`7: вес шрифта не работает — 400 и 700 дают одну ширину (${seen.w400}px); вшит статический файл вместо вариативного`);

  report.push({
    slug, ok: fails.length === 0, fails, warns,
    checks: {
      scripts, externalRefs: ext, group: dsCard ? dsCard[1] : null,
      cells: labels, variants: spec.variants.length,
      valuesChecked: checkedValues, valuesDescriptive: descriptive, valuesMissing: missing.length,
      renderHeight: seen.height, renderWidth: seen.width, textLength: seen.textLength,
      robotoLoaded: seen.robotoLoaded, jsErrors: errors.length, networkRequests: requests.length,
      weight400: seen.w400, weight700: seen.w700,
      sizeDrift: drift.length,
      maxDriftPx: Math.max(0, ...spec.variants.map((v) => {
        const box = seen.boxes.find((b) => b.variant === (v.key || spec.name));
        return box && v.figmaSize && box.w !== null
          ? Math.round(Math.max(Math.abs(box.w - v.figmaSize.w), Math.abs(box.h - v.figmaSize.h)) * 100) / 100
          : 0;
      })),
      unbound: spec.unbound.length,
    },
  });
}
await browser.close();

writeFileSync(join(ROOT, "_verify.json"), JSON.stringify({ ranAt: new Date().toISOString(), total: report.length, passed: report.filter((r) => r.ok).length, report }, null, 2) + "\n");

const bad = report.filter((r) => !r.ok);
if (!JSON_ONLY) {
  const pad = (s, n) => String(s).padEnd(n);
  console.log(pad("компонент", 24) + pad("ячеек", 7) + pad("вар.", 6) + pad("знач.", 7) + pad("высота", 8) + pad("сеть", 6) + pad("JS", 4) + pad("Roboto", 8) + pad("400/700", 14) + pad("сдвиг", 8) + "шлюз");
  for (const r of report) {
    const c = r.checks;
    console.log(pad(r.slug, 24) + pad(c.cells, 7) + pad(c.variants, 6) + pad(c.valuesChecked, 7) + pad(c.renderHeight, 8) +
      pad(c.networkRequests, 6) + pad(c.jsErrors, 4) + pad(c.robotoLoaded ? "да" : "НЕТ", 8) +
      pad(`${c.weight400}/${c.weight700}`, 14) + pad(c.maxDriftPx + "px", 8) + (r.ok ? "OK" : "ПРОВАЛ"));
  }
  for (const r of bad) { console.log(`\n${r.slug}:`); for (const f of r.fails) console.log("  ✗ " + f); }
  console.log(`\nпрошло ${report.length - bad.length} из ${report.length}. Отчёт: _verify.json`);
}
process.exit(bad.length ? 1 : 0);
