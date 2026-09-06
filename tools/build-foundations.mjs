#!/usr/bin/env node
/**
 * build-foundations.mjs — foundations/ пакета переноса из дампа моста.
 *
 *   node tools/build-foundations.mjs
 *
 * Пути по умолчанию — от корня репозитория: --vars figma-dump/vars-full.json, --out .
 *
 * ОДИН ГЕНЕРАТОР, ЧЕТЫРЕ ВЫХОДА. tokens.json и tokens.css собираются из одной карты
 * в одном проходе — именно поэтому расхождение между ними невозможно, а не «маловероятно»
 * (контракт §4). fonts.css и typography.json идут отсюда же, чтобы список весов шрифта
 * и список текстовых стилей не разъехались.
 *
 * ИМЯ ТОКЕНА — ИЗ codeSyntax.WEB. В этом файле оно приезжает обёрнутым: `var(--radius-md)`,
 * а не `--radius-md`. Обёртку снимаем; наивный слаг от последнего сегмента дал бы `--md`.
 * Переменная без codeSyntax.WEB получает имя из пути Figma и помечается nameSource —
 * это дефект файла, и он должен быть видим, а не залатан молча.
 *
 * ШРИФТ БЕРЁТСЯ ИЗ УЖЕ ВШИТОГО ЛИСТА, И ЭТО НЕ НАРУШЕНИЕ «только из Figma». Из Figma берутся
 * значения дизайна; woff2 — бинарный ассет, которого в Figma нет вовсе, а сети у шлюза нет
 * по условию. Три подмножества (cyrillic-ext, cyrillic, latin) в исходнике повторены по
 * четыре раза — на каждый вес один и тот же байт-в-байт файл. Это вариативный Roboto:
 * дедупликация в три @font-face с `font-weight: 100 900` режет вес листа вчетверо и
 * проверяется в шлюзе замером ширины 400 против 700.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { record } from "./stamp.mjs";

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const VARS = arg("--vars", "figma-dump/vars-full.json");
const FONT_SRC = arg("--font-src", "figma-dump/roboto-faces.css");
const OUT = arg("--out", process.cwd());

const d = JSON.parse(readFileSync(VARS, "utf8")).result;
const FOUND = join(OUT, "foundations");
mkdirSync(FOUND, { recursive: true });

/* ---------------------------------------------------------------- имена */

/** `Scale/scale-4` -> `scale-4`, а не `scale-scale-4`: повтор сегмента в пути схлопывается. */
function slugFromPath(path) {
  const segs = path.split("/").map((s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
  const out = [];
  for (const s of segs) {
    const prev = out[out.length - 1];
    if (prev && (s === prev || s.startsWith(prev + "-"))) out[out.length - 1] = s;
    else out.push(s);
  }
  return out.join("-");
}

const nameOf = new Map();      // variable id -> `--token`
const noWebSyntax = [];
for (const v of d.variables) {
  const web = (v.codeSyntax && v.codeSyntax.WEB || "").trim();
  const m = web.match(/^var\(\s*(--[A-Za-z0-9-]+)\s*\)$/) || web.match(/^(--[A-Za-z0-9-]+)$/);
  if (m) nameOf.set(v.id, m[1]);
  else { nameOf.set(v.id, "--" + slugFromPath(v.figmaName)); noWebSyntax.push(v); }
}

/* -------------------------------------------------------------- значения */

const round = (n) => (typeof n === "number" ? Math.round(n * 1000) / 1000 : n);

/** Литерал по цепочке алиасов. Цикл невозможен в Figma, но обрыв цепочки — да. */
function resolve(id, seen = new Set()) {
  const v = d.variables.find((x) => x.id === id);
  if (!v || seen.has(id)) return null;
  seen.add(id);
  const first = Object.values(v.modes)[0];
  if (!first) return null;
  if (first.aliasOf) return resolve(first.aliasOf, seen);
  return { value: first.value, type: v.type };
}

/** Единицы решает роль, а не тип. FLOAT под радиус/отступ — пиксели, под непрозрачность — нет. */
const UNITLESS = /^(opacity|z|line-height|font-weight|flex)/;
function css(value, type, token) {
  if (type === "COLOR") return String(value);
  if (typeof value !== "number") return String(value);
  const n = round(value);
  if (type === "FLOAT" && UNITLESS.test(token.slice(2))) return String(n);
  return n + "px";
}

/* ------------------------------------------------------------- tokens.json */

const tokens = {};
const multiMode = [];
for (const v of d.variables) {
  const token = nameOf.get(v.id);
  const modeNames = Object.keys(v.modes);
  const first = v.modes[modeNames[0]];
  const resolved = first && first.aliasOf ? resolve(first.aliasOf) : { value: first && first.value, type: v.type };
  const entry = {
    value: resolved ? css(resolved.value, v.type, token) : null,
    type: v.type === "COLOR" ? "color" : "number",
    role: token.slice(2).split("-")[0],
    figmaId: v.id,
    figmaName: v.figmaName,
    collection: v.collection,
    mode: modeNames[0] || null,
  };
  if (first && first.aliasName) {
    const target = d.variables.find((x) => x.name === first.aliasName || x.figmaName === first.aliasName);
    entry.alias = target ? nameOf.get(target.id) : null;
    entry.aliasFigmaName = first.aliasName;
  }
  if (v.description) entry.description = v.description;
  if (v.scopes && v.scopes.length && !v.scopes.includes("ALL_SCOPES")) entry.scopes = v.scopes;
  if (!(v.codeSyntax && v.codeSyntax.WEB)) entry.nameSource = "figmaPath";
  if (modeNames.length > 1) {
    entry.modes = {};
    for (const mn of modeNames) {
      const mv = v.modes[mn];
      const r = mv.aliasOf ? resolve(mv.aliasOf) : { value: mv.value, type: v.type };
      entry.modes[mn] = { value: r ? css(r.value, v.type, token) : null, alias: mv.aliasName || undefined };
    }
    multiMode.push(token);
  }
  if (tokens[token]) throw new Error(`имя токена дублируется: ${token} (${v.figmaName})`);
  tokens[token] = entry;
}

/* Стили как токены. Переменная не принимает ни стопы градиента, ни тень — роль живёт стилем.
   Без этих трёх записей каждая тень в каждом компоненте попала бы в unbound как сырое
   значение, хотя в Figma она привязана к именованному стилю. Помечены source. */
for (const s of d.effectStyles) {
  const token = "--shadow-" + slugFromPath(s.name.replace(/^Elevation\//, ""));
  const e = s.effects.filter((x) => x.visible !== false && x.type === "DROP_SHADOW");
  if (!e.length) continue;
  tokens[token] = {
    value: e.map((x) => `${round(x.offset.x)}px ${round(x.offset.y)}px ${round(x.radius)}px ${round(x.spread || 0)}px ${x.color}`).join(", "),
    type: "shadow", role: "shadow", figmaId: s.id, figmaName: s.name,
    collection: "(effect style)", mode: null, source: "effectStyle",
    description: s.description || undefined,
  };
}
/** Угол градиента СЧИТАЕТСЯ из gradientTransform, а не назначается. Матрица переводит
    нормированные координаты объекта в пространство градиента; направление оси в объекте —
    обратная матрица на (1,0). Поставить 180deg «на глаз» — ровно тот случай, когда файл
    выглядит правильным и не является им.
    ОГОВОРКА: угол выходит в НОРМИРОВАННОМ квадрате, а CSS считает по реальным сторонам.
    На квадратном узле совпадёт, на широком — визуально положе; записано в note. */
function gradientAngle(t) {
  if (!t) return null;
  const a = t[0][0], b = t[0][1], dd = t[1][0], e = t[1][1];
  const det = a * e - b * dd;
  if (!det) return null;
  const dx = e / det, dy = -dd / det;
  return Math.round(((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360);
}
/** #rrggbb / #rrggbbaa, умноженный на непрозрачность заливки. Непрозрачность стиля обязана
    попасть в САМИ СТОПЫ: градиент едет в CSS как background-image, а `opacity` на элементе
    погасила бы вместе с фоном и текст с иконкой. */
function withAlpha(hexColor, mul) {
  const h = hexColor.replace("#", "");
  const base = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  const a = Math.max(0, Math.min(1, base * mul));
  if (a >= 0.999) return "#" + h.slice(0, 6);
  return "#" + h.slice(0, 6) + Math.round(a * 255).toString(16).padStart(2, "0");
}

for (const s of d.paintStyles) {
  if (!s.stops) continue;
  const token = "--gradient-" + slugFromPath(s.name.replace(/^Gradient\//, ""));
  const ang = gradientAngle(s.gradientTransform);
  const stops = s.stops.map((g) => `${withAlpha(g.color, s.opacity === undefined ? 1 : s.opacity)} ${Math.round(g.pos * 100)}%`).join(", ");

  /* СТОПЫ ОТДЕЛЬНЫМ ТОКЕНОМ — не дубль, а разделение решения и геометрии. Цвета градиента
     решил дизайнер, и они одни на все узлы. Угол же зависит от сторон узла: Figma хранит
     градиент в нормированном квадрате, CSS считает по реальным сторонам, и один и тот же
     стиль на 200×40 и на 60×58 даёт разные углы в градусах. Компонент подставляет свой угол
     и ссылается на общие стопы — иначе пришлось бы выбирать между верным цветом и верным
     направлением. */
  tokens[token + "-stops"] = {
    value: stops, type: "gradient-stops", role: "gradient", figmaId: s.id, figmaName: s.name,
    collection: "(paint style)", mode: null, source: "paintStyle",
    note: "только цветовые стопы; угол подставляет потребитель по своим сторонам",
  };
  tokens[token] = {
    value: `linear-gradient(${ang === null ? 180 : ang}deg, ${stops})`,
    paintOpacity: s.opacity === undefined ? 1 : s.opacity,
    note: "угол выведен из gradientTransform в нормированных координатах узла; CSS считает угол по реальным сторонам, поэтому на неквадратном узле направление отличается",
    gradientTransform: s.gradientTransform,
    type: "gradient", role: "gradient", figmaId: s.id, figmaName: s.name,
    collection: "(paint style)", mode: null, source: "paintStyle",
    description: s.description || undefined,
  };
}

/* -------------------------------------------------------------- tokens.css */

const ORDER = ["Primitives", "Color", "Radius", "Spacing", "Effects", "(effect style)", "(paint style)"];
const groups = new Map(ORDER.map((k) => [k, []]));
for (const [name, t] of Object.entries(tokens)) {
  if (!groups.has(t.collection)) groups.set(t.collection, []);
  groups.get(t.collection).push([name, t]);
}
let cssOut = "/* OC-Kontrol design tokens — сгенерировано build-foundations.mjs из Figma. Руками не править. */\n:root {\n";
for (const [col, list] of groups) {
  if (!list.length) continue;
  cssOut += `\n  /* ${col} */\n`;
  for (const [name, t] of list) cssOut += `  ${name}: ${t.value};\n`;
}
cssOut += "}\n";

/* --------------------------------------------------------------- fonts.css */

const src = readFileSync(FONT_SRC, "utf8");
const faces = src.match(/@font-face\s*\{[^}]*\}/g) || [];
const bySubset = new Map();     // unicode-range -> { b64, weights:Set }
for (const f of faces) {
  const b64 = (f.match(/base64,([A-Za-z0-9+/=]+)/) || [])[1];
  const range = (f.match(/unicode-range:\s*([^;}]+)/) || [])[1];
  const weight = (f.match(/font-weight:\s*(\d+)/) || [])[1];
  if (!b64 || !range) continue;
  const key = range.trim();
  if (!bySubset.has(key)) bySubset.set(key, { b64, weights: new Set(), same: true });
  const rec = bySubset.get(key);
  if (rec.b64 !== b64) rec.same = false;
  rec.weights.add(weight);
}
const SUBSET_NAME = (r) => (/U\+0460/.test(r) ? "cyrillic-ext" : /U\+0400/.test(r) ? "cyrillic" : "latin");
let fontsOut =
  "/* Roboto (variable), вшито как data:font/woff2. Один файл на подмножество покрывает весь\n" +
  "   диапазон весов: в исходнике он был повторён на каждый вес байт в байт. Сети у превью нет —\n" +
  "   внешняя ссылка молча дала бы системный шрифт.\n" +
  "   latin + cyrillic + cyrillic-ext приехали из прошлой сборки, latin-ext и symbols\n" +
  "   завендорены отдельно: см. foundations/fonts/SOURCE.md. */\n";
/**
 * cyrillic-ext снято по отчёту проверки 9, а не на глаз: строка «подмножества в ходу» в
 * verify.mjs показала для него ноль кодовых точек на всех 72 листах при 2112 у cyrillic.
 * Возить 48 КБ ради диапазона, которым никто не пользуется, — это те же 48 КБ в каждом
 * листе, собранном с --inline.
 *
 * Обратно оно вернётся ровно тогда, когда понадобится: проверка 9 уронит сборку на первом же
 * символе из U+0460-052F и назовёт подмножество. Поэтому снимать безопасно — не потому что
 * «вроде не нужно», а потому что есть кому поймать обратное.
 */
const DROP = new Set(["cyrillic-ext"]);
const fontFacts = [];
for (const [range, rec] of bySubset) {
  if (DROP.has(SUBSET_NAME(range))) { fontFacts.push({ subset: SUBSET_NAME(range), dropped: "0 кодовых точек по проверке 9" }); continue; }
  fontsOut +=
    `\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100 900;\n` +
    `  font-stretch: 100%;\n  font-display: block;\n` +
    `  src: url(data:font/woff2;base64,${rec.b64}) format('woff2');\n  unicode-range: ${range};\n}\n`;
  fontFacts.push({ subset: SUBSET_NAME(range), bytes: Math.round(rec.b64.length * 0.75), sharedAcrossWeights: rec.same, weightsInSource: [...rec.weights].sort() });
}

/**
 * ВТОРОЕ ЗАИМСТВОВАНИЕ НЕ ИЗ FIGMA — названо так же, как первое.
 *
 * В исходнике прошлой сборки было три подмножества: latin, cyrillic, cyrillic-ext. Latin-ext
 * там не было, а продукт польский: ł ą ę ż ś ć рисовались тем, что нашлось в системе. На
 * Windows запасной шрифт случайно укладывался в допуск по ширине, на Linux — нет, и CI
 * поймал это на первом же прогоне. Symbols добавлено ради «→» в описании OfferTable.
 *
 * Файлы завендорены: скачаны один раз, лежат в репозитории, происхождение, версия и sha256
 * записаны в foundations/fonts/SOURCE.md. Сборка остаётся офлайн.
 *
 * Каталог лежит внутри foundations/, но выходом генератора НЕ является: build-foundations
 * его читает, а не пишет. Поэтому отсутствие файла — остановка с указанием, чем восстановить,
 * а не молчаливая сборка без половины алфавита.
 */
const VENDORED = {
  "latin-ext": "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
  symbols: "U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-21A7, U+21AF, U+21BB, U+21D0-21D5, U+21DE-21E3, U+21E6-21EF, U+2200-2201, U+2203-2204, U+2206, U+2208-2209, U+220B-220D, U+2211-2213, U+2216, U+2219-221A, U+221D-2220, U+2223, U+2225, U+2227-222B, U+222E, U+2234-2237, U+223C-223D, U+2243, U+2245, U+2248, U+224D, U+2260-2261, U+2264-2265, U+226A-226B, U+226E-226F, U+2282-2283, U+2286-2287, U+2295, U+2299, U+22A5, U+22BF, U+2312, U+2394, U+23AF, U+23E8, U+2405, U+2409, U+240C-240D, U+2424, U+247F, U+2500-2502, U+2506-2507, U+250C, U+2510, U+2514, U+2518, U+251C, U+2524, U+252C, U+2534, U+253C, U+2550-2554, U+2560-2564, U+2570, U+2580, U+2584, U+2588, U+258C, U+2590-2593, U+25A0-25A1, U+25A3-25A4, U+25AA-25AB, U+25B2-25B3, U+25B6-25B7, U+25BC-25BD, U+25C0-25C1, U+25C6-25C7, U+25CA-25CB, U+25CF, U+25E6, U+2601, U+2603, U+2605-2606, U+260E, U+2611, U+2615, U+261C, U+261E, U+2622, U+262F, U+2639-263A, U+2660, U+2663, U+2665-2666, U+266A-266B, U+267B, U+2680-2685, U+26A0-26A1, U+2708, U+270C-270D, U+270F, U+2713, U+2717, U+2726-2727, U+2731, U+2739, U+274D, U+2762, U+2764, U+2794, U+279C, U+27A1, U+27F5-27F6, U+2B05-2B0D, U+2B95, U+2BC5-2BC8, U+2BEC-2BEF, U+3001-3002, U+3008-3009, U+300C-300D, U+3010-3011, U+3014-3015, U+30FB, U+4DC0-4DFF, U+FF01-FF0F, U+FF1A-FF20, U+FF3B-FF40, U+FF5B-FF65, U+FFE9-FFEC, U+1F004, U+1F19A",
};
const VENDOR = join(OUT, "foundations/fonts");
for (const [name, range] of Object.entries(VENDORED)) {
  const file = join(VENDOR, `roboto-${name}.woff2`);
  if (!existsSync(file)) {
    console.error(`нет ${file}. Это завендоренный файл шрифта, а не выход генератора — ` +
      `восстановить по foundations/fonts/SOURCE.md, там URL, версия и sha256. Без него ` +
      `польские диакритики рисуются запасным шрифтом, и проверка 9 в verify.mjs падает.`);
    process.exit(2);
  }
  const b64 = readFileSync(file).toString("base64");
  fontsOut +=
    `\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100 900;\n` +
    `  font-stretch: 100%;\n  font-display: block;\n` +
    `  src: url(data:font/woff2;base64,${b64}) format('woff2');\n  unicode-range: ${range};\n}\n`;
  fontFacts.push({ subset: name, bytes: Math.round(b64.length * 0.75), vendored: true });
}

/* --------------------------------------------------------- typography.json */

const WEIGHT = { Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 };
const typography = d.textStyles.map((s) => {
  const bound = Object.fromEntries(Object.entries(s.boundVariables || {}).map(([k, b]) => {
    const t = b && b.id ? d.variables.find((x) => x.id === b.id) : null;
    return [k, t ? nameOf.get(t.id) : null];
  }));
  return {
    role: s.name.replace(/^Type\//, ""),
    figmaName: s.name,
    figmaId: s.id,
    family: s.family,
    fontStyle: s.style,
    weight: WEIGHT[s.style.replace(/\s+/g, "")] ?? null,
    fontSize: round(s.fontSize),
    lineHeight: s.lineHeight.unit === "AUTO" ? "auto" : round(s.lineHeight.value) + (s.lineHeight.unit === "PERCENT" ? "%" : "px"),
    letterSpacing: s.letterSpacing.unit === "PERCENT" ? round(s.letterSpacing.value) + "%" : round(s.letterSpacing.value) + "px",
    textCase: s.textCase,
    textDecoration: s.textDecoration,
    colorToken: bound.fills || null,
    boundVariables: Object.keys(bound).length ? bound : undefined,
    description: s.description || undefined,
  };
});

/* ----------------------------------------------------------------- запись */

writeFileSync(join(FOUND, "tokens.json"), JSON.stringify(tokens, null, 2) + "\n");
writeFileSync(join(FOUND, "tokens.css"), cssOut);
writeFileSync(join(FOUND, "fonts.css"), fontsOut);
writeFileSync(join(FOUND, "typography.json"), JSON.stringify(typography, null, 2) + "\n");

/* ----------------------------------------------------------------- отчёт */

const byType = {};
for (const t of Object.values(tokens)) byType[t.type] = (byType[t.type] || 0) + 1;
const byRole = {};
for (const t of Object.values(tokens)) byRole[t.role] = (byRole[t.role] || 0) + 1;

/** Цвет семантики, привязанный к примитиву, — норма. Сырой цвет в семантике — долг.
 *  Проверяем обе стороны, потому что «чисто» здесь значит «менять можно в одном месте». */
const semantic = Object.entries(tokens).filter(([, t]) => t.collection && t.collection !== "Primitives" && t.type === "color");
const rawInSemantic = semantic.filter(([, t]) => !t.alias).map(([n, t]) => `${n} = ${t.value}`);
const semanticAliasingSemantic = semantic.filter(([, t]) => {
  const target = t.alias && tokens[t.alias];
  return target && target.collection !== "Primitives";
}).map(([n, t]) => `${n} -> ${t.alias}`);

const report = {
  source: { file: d.file.name, vars: VARS },
  collections: d.collections.map((c) => ({ name: c.name, modes: c.modes.map((m) => m.name), variables: c.variableCount })),
  totals: { variables: d.variables.length, tokens: Object.keys(tokens).length, byType, multiModeTokens: multiMode.length },
  byRole,
  withoutCodeSyntaxWeb: noWebSyntax.map((v) => `${v.collection}/${v.figmaName} -> ${nameOf.get(v.id)}`),
  rawColorInSemanticLayer: rawInSemantic,
  semanticAliasingSemantic,
  quarantineSkipped: d.variables.filter((v) => /^_quarantine\//.test(v.figmaName)).length,
  fonts: fontFacts,
  typography: typography.map((t) => `${t.role}: ${t.family} ${t.weight} ${t.fontSize}px/${t.lineHeight} ls ${t.letterSpacing}${t.colorToken ? " color " + t.colorToken : " color —"}`),
  files: ["foundations/tokens.json", "foundations/tokens.css", "foundations/fonts.css", "foundations/typography.json"].map((f) => f),
};
writeFileSync(join(OUT, "foundations", "_report.json"), JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));

record("build-foundations", { vars: VARS }, OUT);
