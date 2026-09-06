#!/usr/bin/env node
/**
 * build-html.mjs — components/<slug>/spec.json -> components/<slug>/index.html.
 *
 *   node tools/ds/novo/build-html.mjs --slug button
 *
 * Читает ТОЛЬКО спеку и foundations. Ни Figma, ни существующего HTML здесь нет и быть не
 * должно: направление «спека -> лист» (контракт §7) держится тем, что у этого файла просто
 * нет доступа к другому источнику. Всё дерево уже переведено в CSS в build-spec.mjs — тут
 * сериализация и обвязка листа.
 *
 * ПЛОСКИЙ ИНВАРИАНТ (§2) соблюдается конструктивно, а не проверкой постфактум:
 *   - ни одного <script> — генератор не умеет их писать;
 *   - ни одной внешней ссылки — шрифты и токены вставляются содержимым файлов foundations;
 *   - ширина обёртки фиксированная в пикселях, без %, vw и 100vh;
 *   - анимаций нет: `motion` описывает их словами, лист их не проигрывает;
 *   - состояния статикой, каждая ячейка подписана точным именем варианта из Figma.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const OUT = arg("--out", process.cwd());
const SLUG = arg("--slug", "");
if (!SLUG) { console.error("нужен --slug <slug>"); process.exit(1); }

const dir = join(OUT, "components", SLUG);
const spec = JSON.parse(readFileSync(join(dir, "spec.json"), "utf8"));
/**
 * ДВА ФОРМАТА ЛИСТА, И ЭТО НЕ ИЗБЫТОЧНОСТЬ.
 *
 * По умолчанию шрифт и токены подключаются относительной ссылкой на foundations/. Один и тот
 * же Roboto весит 138 КБ; вшитый в каждый из 72 листов, он даёт 9.9 МБ из 10.8 МБ всей папки
 * при том, что файл ровно один. Относительная ссылка проходит шлюз: file:// её открывает,
 * запросов наружу нет, вес шрифта работает.
 *
 * Флаг --inline вшивает всё обратно. Он нужен ровно в одном случае: когда лист вырывают из
 * папки — тащат на холст, вставляют в чат, открывают как gist preview. Там относительная
 * ссылка не разрешится никогда, и лист молча покажет системный шрифт вместо Roboto.
 */
const INLINE = argv.includes("--inline");
const fonts = INLINE ? readFileSync(join(OUT, "foundations/fonts.css"), "utf8") : "";
const tokensCss = INLINE ? readFileSync(join(OUT, "foundations/tokens.css"), "utf8") : "";
const links = INLINE ? "" :
  '<link rel="stylesheet" href="../../foundations/fonts.css">\n' +
  '<link rel="stylesheet" href="../../foundations/tokens.css">';

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const styleAttr = (st) => Object.entries(st).map(([k, v]) => `${k}:${v}`).join(";");

/** Узел -> разметка. Иконка вставляется телом SVG, а не ссылкой: холст сети не имеет. */
function node(n, indent) {
  const pad = "  ".repeat(indent);
  const st = styleAttr(n.style);
  const attrs = `${st ? ` style="${esc(st)}"` : ""} data-part="${esc(n.path)}"`;
  if (n.tag === "svg") {
    const inner = n.svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
    const vb = (n.svg.match(/viewBox="([^"]+)"/) || [null, "0 0 24 24"])[1];
    return `${pad}<svg viewBox="${esc(vb)}" fill="none" aria-hidden="true"${attrs}>${inner}</svg>`;
  }
  if (n.tag === "span") return `${pad}<span${attrs}>${esc(n.text ?? "")}</span>`;
  const kids = (n.children || []).map((c) => node(c, indent + 1)).join("\n");
  return kids
    ? `${pad}<div${attrs}>\n${kids}\n${pad}</div>`
    : `${pad}<div${attrs}></div>`;
}

/* Ширина листа объявляется числом. Резиновый лист на карточке раскладывается иначе, чем в
   браузере, — 1200 берётся как база и расширяется, если сам компонент шире. */
const widest = Math.max(...spec.variants.map((v) => {
  const w = v.render.style.width;
  const m = w && String(w).match(/^(\d+(?:\.\d+)?)px$/);
  return m ? Number(m[1]) : 0;
}), 0);
const SHEET = Math.max(1200, Math.ceil((widest + 120) / 20) * 20);

const cells = spec.variants.map((v) => {
  const label = v.key || spec.name;
  return `  <div class="ds-cell" data-variant="${esc(label)}">
${node(v.render, 2)}
    <code class="ds-cell-label">${esc(label)}</code>
  </div>`;
}).join("\n");

const usedTokens = [...new Set(
  spec.variants.flatMap((v) => JSON.stringify(v.render).match(/--[a-z0-9-]+/g) || [])
)].sort();

const meta = [
  `${spec.group} · ${spec.level} · ${spec.variants.length} ${spec.variants.length === 1 ? "вариант" : "вариантов"}`,
  `Figma ${spec.figma.nodeId} · страница ${spec.figma.page}`,
  `Токенов задействовано: ${usedTokens.length}${spec.unbound.length ? ` · без токена: ${spec.unbound.length}` : ""}`,
].join(" · ");

const html = `<!-- @dsCard group="${spec.group}" -->
<!DOCTYPE html>
<html lang="ru"><head>
<meta charset="utf-8">
<title>${esc(spec.name)} — component sheet</title>
${links}
<style>
${fonts.trim()}

${tokensCss.trim()}

*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { background: var(--surface-background); color: var(--text-primary); font-family: 'Roboto', system-ui, sans-serif; }

.ds-sheet { width: ${SHEET}px; min-height: 640px; padding: 48px 40px; background: var(--surface-background); }
.ds-head { margin: 0 0 4px; font-size: 32px; line-height: 40px; font-weight: 700; letter-spacing: -0.2px; color: var(--text-primary); }
.ds-meta { margin: 0 0 8px; font-size: 13px; line-height: 20px; color: var(--text-tertiary); }
.ds-desc { margin: 0 0 32px; font-size: 15px; line-height: 24px; color: var(--text-secondary); max-width: 760px; }
.ds-grid { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 32px 24px; }
.ds-cell { display: inline-flex; flex-direction: column; align-items: flex-start; gap: 12px; padding: 20px; background: var(--surface-default); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); }
/* vector-effect НЕ НАСЛЕДУЕТСЯ (SVG 2: Inherited: no), поэтому на <svg> он не действует и
   правило нужно на самих контурах. stroke-width наследуется и остаётся инлайном на <svg>.
   Без этого глиф, нарисованный в 24 и поставленный в 16, приезжает линией 0.67 вместо 1. */
svg[data-part] * { vector-effect: non-scaling-stroke; }
.ds-cell-label { font-family: 'Roboto', system-ui, sans-serif; font-size: 12px; line-height: 16px; font-weight: 700; letter-spacing: 0.6px; color: var(--text-tertiary); white-space: nowrap; }
.ds-foot { margin: 40px 0 0; padding-top: 20px; border-top: 1px solid var(--border-subtle); font-size: 12px; line-height: 16px; color: var(--text-tertiary); }
.ds-foot b { color: var(--text-secondary); font-weight: 700; }
</style></head>
<body>
<div class="ds-sheet">
  <h1 class="ds-head">${esc(spec.name)}</h1>
  <p class="ds-meta">${esc(meta)}</p>
  <p class="ds-desc">${esc(spec.description || "Описание компонента в Figma не заполнено — usage и avoid в спеке пусты намеренно, а не пропущены.")}</p>
  <div class="ds-grid">
${cells}
  </div>
  <p class="ds-foot"><b>Токены:</b> ${esc(usedTokens.join(", ") || "—")}</p>
  <p class="ds-foot"><b>Без токена:</b> ${esc(spec.unbound.length ? spec.unbound.map((u) => `${u.prop} = ${u.value}`).join(", ") : "нет")}</p>
  <p class="ds-foot"><b>Анимация:</b> в превью отключена намеренно — ${spec.motion.length ? spec.motion.map((m) => m.name).join(", ") : "в Figma не описана (0 prototype reactions)"}.</p>
</div>
</body></html>
`;

writeFileSync(join(dir, "index.html"), html);
console.log(JSON.stringify({ slug: SLUG, sheetWidth: SHEET, cells: spec.variants.length, tokens: usedTokens.length, bytes: html.length }));
