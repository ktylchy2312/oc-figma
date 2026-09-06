#!/usr/bin/env node
/**
 * build-code.mjs — spec.json → code/<slug>/{<slug>.css, <slug>.html, <slug>.stories.js, README.md}
 *
 * Читает ТОЛЬКО components/<slug>/spec.json и code/_names.json. Ни Figma, ни моста, ни старого
 * HTML: расхождение кода и спеки невозможно по устройству.
 *
 *   .oc-<slug>                     базовый класс
 *   .oc-<slug>__<part>             часть
 *   .oc-<slug>--<axis>-<value>     модификатор, нижний регистр, State=FocusVisible → --state-focus-visible
 *
 * База против варианта: свойство едет в базовое правило, если во ВСЕХ вариантах у этой части
 * оно есть и одинаково. Всё остальное — в правило комбинации. Ближайшее значение не
 * подставляется никогда: каждая запись spec.unbound выходит отдельным маркером TODO.
 *
 * ИМЕНА КЛАССОВ ЗАМОРОЖЕНЫ в code/_names.json. Причина: anatomy[].part у глубоких компонентов —
 * это не роль, а положение слоя в дереве Figma на момент дампа
 * (content/frame-142/frame-5/header-row/signature). Разрешение коллизий по такому пути
 * неустойчиво: вставленный сосед меняет префикс у части, которой никто не трогал. Карта
 * выдаёт имя один раз; дальше генератор только читает её, новое имя получает только новая
 * часть, а расхождение с текущим деревом выходит предупреждением, а не тихим переименованием.
 * Карту можно править руками — генератор её уважает.
 *
 *   node tools/build-code.mjs --slug button
 *   node tools/build-code.mjs --all
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const ROOT = arg("--root", process.cwd());
const OUT = arg("--out", join(ROOT, "code"));
const NAMES = join(OUT, "_names.json");

/* ---------- имена ---------- */

// FocusVisible → focus-visible, "Show Icon" → show-icon, frame_142 → frame-142
const kebab = (s) =>
  String(s)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

/**
 * Имя, которое генератор ВЫВЕЛ БЫ сегодня: лист пути, расширяемый влево до уникальности.
 * Нужно только для новых частей и для сверки с замороженной картой.
 */
function derive(path, allPaths, taken) {
  const tail = (p, n) => p.split("/").slice(-n).map(kebab).join("-");
  const segs = path.split("/").length;
  let n = 1, name = tail(path, n);
  while (n < segs && allPaths.filter((q) => tail(q, n) === name).length > 1) { n++; name = tail(path, n); }
  if (!taken.has(name)) return name;
  while (n < segs) { n++; name = tail(path, n); if (!taken.has(name)) return name; }
  let i = 2;
  while (taken.has(`${name}-${i}`)) i++;
  return `${name}-${i}`;
}

/**
 * Классы частей: сначала замороженные из карты, потом выведенные для новых.
 * Возвращает карту path → class и список расхождений с сегодняшним выводом.
 */
function partClasses(paths, frozen) {
  const cls = new Map(), taken = new Set(), drift = [];
  for (const p of paths) if (frozen[p]) { cls.set(p, frozen[p]); taken.add(frozen[p]); }
  for (const p of paths) {
    if (cls.has(p)) continue;
    const name = derive(p, paths, taken);
    cls.set(p, name); taken.add(name);
  }
  for (const p of paths) {
    if (!frozen[p]) continue;
    const would = derive(p, paths, new Set([...taken].filter((t) => t !== frozen[p])));
    if (would !== frozen[p]) drift.push(`${p}: в карте «${frozen[p]}», дерево сейчас дало бы «${would}»`);
  }
  for (const p of Object.keys(frozen)) if (!paths.includes(p)) drift.push(`${p}: в карте есть, в дереве больше нет`);
  return { cls, drift };
}

/* ---------- состояния ---------- */

/**
 * Каждое значение оси State выходит дважды: статическим модификатором, чтобы витрина могла
 * показать все состояния разом, и псевдоклассом, чтобы компонент работал на живой странице.
 * Наведение и нажатие гасятся на выключенном элементе — иначе disabled ловил бы :hover.
 */
const NOT_DISABLED = ':not(:disabled):not([aria-disabled="true"])';
const PSEUDO = {
  hover: NOT_DISABLED + ":hover",
  pressed: NOT_DISABLED + ":active",
  active: NOT_DISABLED + ":active",
  focus: ":focus-visible",
  "focus-visible": ":focus-visible",
  focused: ":focus-visible",
  disabled: ':disabled, [aria-disabled="true"]',
};

/* ---------- экранирование ---------- */

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escTpl = (s) => String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

/* ---------- разбор спеки ---------- */

function walk(node, fn) { fn(node); for (const c of node.children || []) walk(c, fn); }

function collect(spec) {
  const paths = [];
  const styles = spec.variants.map(() => new Map());
  const shapes = new Map();
  spec.variants.forEach((v, i) => {
    walk(v.render, (n) => {
      if (!paths.includes(n.path)) paths.push(n.path);
      if (!shapes.has(n.path)) shapes.set(n.path, n);
      styles[i].set(n.path, n.style || {});
    });
  });
  return { paths, styles, shapes };
}

/** Свойство базовое, если оно есть во всех вариантах у этой части и всюду одинаково. */
function splitBase(paths, styles) {
  const base = new Map(), diff = styles.map(() => new Map());
  for (const p of paths) {
    const present = styles.filter((s) => s.has(p));
    const b = {};
    if (present.length && present.length === styles.length) {
      const first = present[0].get(p);
      for (const [k, val] of Object.entries(first)) {
        if (present.every((s) => s.get(p)[k] === val)) b[k] = val;
      }
    }
    base.set(p, b);
    styles.forEach((s, i) => {
      if (!s.has(p)) return;
      const d = {};
      for (const [k, val] of Object.entries(s.get(p))) if (b[k] !== val) d[k] = val;
      if (Object.keys(d).length) diff[i].set(p, d);
    });
  }
  return { base, diff };
}

/* ---------- общий сброс ---------- */

/**
 * Корнем компонента может быть button, input, select, textarea или a — у них есть собственные
 * стили браузера: рамка, фон, шрифт, подчёркивание. В листах index.html этого не было видно,
 * потому что там всё рисуется через div. Сброс завёрнут в :where(), поэтому его вес нулевой
 * и любое правило компонента его перебивает — включая базовое .oc-<slug> с одним классом.
 */
const BASE_CSS = `/* Общий сброс под корни компонентов. Сгенерировано build-code.mjs, руками не править. */

/* Размеры в спеке — фигмовские, то есть вместе с рамкой и внутренними отступами. При
   content-box, который у браузера по умолчанию, рамка в 1px даёт лишние 2px ширины, а
   padding в 12px — лишние 24px. Лист index.html ставит border-box глобально; здесь то же
   самое, но только на своих элементах, чтобы не переопределять чужую страницу. */
:where([class*="oc-"]) {
  box-sizing: border-box;
}

:where(button[class*="oc-"], input[class*="oc-"], select[class*="oc-"], textarea[class*="oc-"]) {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  text-align: inherit;
  -webkit-appearance: none;
  appearance: none;
}

:where(a[class*="oc-"]) {
  color: inherit;
  text-decoration: none;
}

:where(button[class*="oc-"]:not(:disabled)) {
  cursor: pointer;
}
`;

/* ---------- CSS ---------- */

const rule = (sel, decls) =>
  `${sel} {\n${Object.entries(decls).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`;

function buildCss(spec, ctx) {
  const { slug, name, cls, base, diff, axes, todos } = ctx;
  const L = [];
  L.push(`/* ${name} — сгенерировано из components/${slug}/spec.json. Руками не править: правку съест`);
  L.push(` * следующая пересборка. Требует ../../foundations/tokens.css и ../base.css.`);
  L.push(` * Значение без привязки к переменной Figma выходит литералом и помечается маркером ниже —`);
  L.push(` * подставить «ближайший» токен значило бы выбрать роль за человека. */`);
  L.push("");

  L.push([...(todos.get("root") || []).map((t) => `/* ${t} */`),
          rule(`.oc-${slug}`, base.get("root") || {})].join("\n"));
  for (const p of ctx.paths) {
    if (p === "root") continue;
    const b = base.get(p);
    if (!b || !Object.keys(b).length) continue;
    L.push("");
    L.push([...(todos.get(p) || []).map((x) => `/* ${x} */`),
            rule(`.oc-${slug}__${cls.get(p)}`, b)].join("\n"));
  }

  // TODO, чья часть не попала ни в одно правило — иначе запись из spec.unbound потерялась бы
  const placed = new Set(["root", ...ctx.paths.filter((p) => Object.keys(base.get(p) || {}).length)]);
  const orphan = [...todos.entries()].filter(([p]) => !placed.has(p)).flatMap(([, v]) => v);
  if (orphan.length) { L.push(""); L.push(orphan.map((t) => `/* ${t} */`).join("\n")); }

  if (!spec.variants.length) return L.join("\n") + "\n";

  L.push("");
  L.push("/* ---- варианты ---- */");
  const stateAxis = axes.find((a) => kebab(a.name) === "state");

  spec.variants.forEach((v, i) => {
    const d = diff[i];
    if (!d.size) return;
    const mods = axes.map((a) => `.oc-${slug}--${kebab(a.name)}-${kebab(v.match[a.name])}`).join("");
    const sels = [`.oc-${slug}${mods}`];
    if (stateAxis) {
      const pseudo = PSEUDO[kebab(v.match[stateAxis.name])];
      if (pseudo) {
        const other = axes.filter((a) => a !== stateAxis)
          .map((a) => `.oc-${slug}--${kebab(a.name)}-${kebab(v.match[a.name])}`).join("");
        for (const ps of pseudo.split(", ")) sels.push(`.oc-${slug}${other}${ps}`);
      }
    }
    L.push("");
    L.push(`/* ${v.key} */`);
    for (const [p, decls] of d) {
      const suffix = p === "root" ? "" : ` .oc-${slug}__${cls.get(p)}`;
      L.push(rule(sels.map((s) => s + suffix).join(",\n"), decls));
    }
  });
  return L.join("\n") + "\n";
}

/* ---------- разметка ---------- */

function markup(ctx, variant, indent = "") {
  const { slug, cls, axes, elements, root } = ctx;
  const render = (n, ind) => {
    const isRoot = n.path === "root";
    const classes = isRoot
      ? [`oc-${slug}`, ...axes.map((a) => `oc-${slug}--${kebab(a.name)}-${kebab(variant.match[a.name])}`)]
      : [`oc-${slug}__${cls.get(n.path)}`];
    const tag = isRoot ? (root.element || n.tag) : (elements.get(n.path) || n.tag);

    if (n.svg) {
      return ind + n.svg.replace(/\s*\n\s*/g, "")
        .replace(/^<svg/, `<svg class="${classes.join(" ")}" aria-hidden="true" focusable="false"`);
    }

    const attrs = [`class="${classes.join(" ")}"`];
    if (isRoot && tag === "button") {
      attrs.push('type="button"');
      const st = axes.find((a) => kebab(a.name) === "state");
      if (st && kebab(variant.match[st.name]) === "disabled") attrs.push("disabled");
    }
    const open = `<${tag} ${attrs.join(" ")}>`;
    const kids = n.children || [];
    if (!kids.length) return `${ind}${open}${n.text ? esc(n.text) : ""}</${tag}>`;
    return [ind + open, ...kids.map((c) => render(c, ind + "  ")), `${ind}</${tag}>`].join("\n");
  };
  return render(variant.render, indent);
}

function buildHtml(spec, ctx) {
  const L = [
    `<!-- ${ctx.name} — все варианты, сгенерировано из spec.json. -->`,
    `<link rel="stylesheet" href="../../foundations/fonts.css">`,
    `<link rel="stylesheet" href="../../foundations/tokens.css">`,
    `<link rel="stylesheet" href="../base.css">`,
    `<link rel="stylesheet" href="./${ctx.slug}.css">`,
    "",
  ];
  for (const v of spec.variants) {
    L.push(`<!-- ${ctx.name} / ${v.key} -->`);
    L.push(markup(ctx, v));
    L.push("");
  }
  return L.join("\n");
}

/* ---------- истории ---------- */

function buildStories(spec, ctx) {
  const { slug, name, axes, cls } = ctx;

  const entries = spec.variants.map((v) => {
    const key = axes.length ? axes.map((a) => v.match[a.name]).join("|") : name;
    return `  ${JSON.stringify(key)}: \`\n${escTpl(markup(ctx, v, "    "))}\n  \``;
  });

  // Свойства сверх осей: текст и переключаемые части. Дефолты — строго из props[].default.
  const extra = (spec.props || []).filter((p) => p.type === "text" || p.type === "boolean");
  const textParts = {}, optionalParts = {};
  for (const a of spec.anatomy || []) {
    if (a.textProp && cls.has(a.part)) textParts[`oc-${slug}__${cls.get(a.part)}`] = a.textProp;
    if (a.optional && a.controlledBy && cls.has(a.part)) optionalParts[`oc-${slug}__${cls.get(a.part)}`] = a.controlledBy;
  }

  const argType = (p) =>
    `    ${JSON.stringify(p.name)}: {
      description: ${JSON.stringify(
        p.type === "variant" ? `Свойство варианта Figma «${p.name}»` : `Свойство Figma «${p.name}» (${p.type})`)},
      control: { type: ${JSON.stringify(p.type === "variant" ? "inline-radio" : p.type === "boolean" ? "boolean" : "text")} },${
        p.values ? `\n      options: ${JSON.stringify(p.values)},` : ""}
    },`;

  const controlled = [...axes, ...extra];
  const pick = axes.length
    ? `VARIANTS[${axes.map((a) => `args[${JSON.stringify(a.name)}]`).join(' + "|" + ')}]`
    : `VARIANTS[${JSON.stringify(name)}]`;

  return `// ${name} — сгенерировано из components/${slug}/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./${slug}.css";

const VARIANTS = {
${entries.join(",\n")}
};

const CAPTIONS = ${JSON.stringify(spec.variants.map((v) => v.key))};

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = ${JSON.stringify(textParts)};
const OPTIONAL_PARTS = ${JSON.stringify(optionalParts)};

export default {
  title: ${JSON.stringify(`${spec.group}/${name}`)},
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: ${JSON.stringify(
      `${spec.description || `Компонент «${name}»`}\n\n` +
      `Собрано из спеки Figma \`${spec.figma?.nodeId ?? "—"}\` (страница ${spec.figma?.page ?? "—"}).\n` +
      `Корень \`<${ctx.root.element}>\`, базовый класс \`.oc-${slug}\`. Вариантов: ${spec.variants.length}.` +
      (spec.unbound?.length ? ` Непривязанных значений: ${spec.unbound.length} — см. маркеры TODO в CSS.` : "")
    )} } },
  },
  argTypes: {
${controlled.map(argType).join("\n")}
  },
  args: {
${controlled.map((p) => `    ${JSON.stringify(p.name)}: ${JSON.stringify(p.default ?? (p.values ? p.values[0] : ""))},`).join("\n")}
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = ${pick} ?? "<p>нет такой комбинации</p>";
    for (const [cls, prop] of Object.entries(TEXT_PARTS)) {
      if (!(prop in args)) continue;
      for (const el of wrap.getElementsByClassName(cls)) el.textContent = args[prop];
    }
    for (const [cls, prop] of Object.entries(OPTIONAL_PARTS)) {
      if (args[prop] !== false) continue;
      for (const el of [...wrap.getElementsByClassName(cls)]) el.remove();
    }
    return wrap.firstElementChild ?? wrap;
  },
};

// Витрина матрицы прибита к значениям из спеки: она же опора для замера габаритов в
// verify-code.mjs. Протёк бы сюда пользовательский Label — ширина поехала бы, и сверка с
// figmaSize начала бы врать.
export const AllVariants = {
  parameters: { controls: { disable: true } },
  render: () => Object.values(VARIANTS)
    .map((html, i) => \`<figure style="margin:0 0 24px">\${html}<figcaption style="font:12px/1.6 ui-monospace,monospace;color:#8a8987;margin-top:8px">\${CAPTIONS[i]}</figcaption></figure>\`)
    .join(""),
};
`;
}

/* ---------- README ---------- */

function buildReadme(spec, ctx) {
  const { slug, name, cls } = ctx;
  const L = [`# ${name}`, "", spec.description || `Сгенерировано из набора компонентов Figma \`${name}\`.`, ""];
  L.push(`- Разметка: [\`${slug}.html\`](${slug}.html) — все варианты по порядку, каждый с комментарием.`);
  L.push(`- Стили: [\`${slug}.css\`](${slug}.css) — требуют \`foundations/tokens.css\` и \`code/base.css\`.`);
  L.push(`- Корень: \`<${ctx.root.element}>\`, базовый класс \`.oc-${slug}\``);
  L.push(`- Группа ${spec.group}, уровень ${spec.level}, вариантов ${spec.variants.length}`);

  if (spec.props?.length) {
    L.push("", "## Свойства", "", "| Свойство | Значения | По умолчанию |", "|---|---|---|");
    for (const p of spec.props) {
      const vals = p.values ? p.values.map((v) => `\`${v}\``).join(", ")
        : p.type === "boolean" ? "`true`, `false`" : "свободный текст";
      L.push(`| \`${p.name}\` (${p.type}) | ${vals} | \`${JSON.stringify(p.default)}\` |`);
    }
  }

  if (ctx.axes.some((a) => kebab(a.name) === "state")) {
    L.push("", "## Состояния", "",
      `Каждое значение \`State\` выходит дважды: статическим модификатором (\`.oc-${slug}--state-hover\`),`,
      "чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,",
      "`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на",
      "выключенном элементе.");
  }

  L.push("", "## Классы", "",
    "Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и",
    "без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.",
    "", "| Класс | Слой Figma |", "|---|---|");
  L.push(`| \`.oc-${slug}\` | \`${ctx.root.name ?? "root"}\` |`);
  for (const p of ctx.paths) {
    if (p === "root") continue;
    const a = (spec.anatomy || []).find((x) => x.part === p);
    L.push(`| \`.oc-${slug}__${cls.get(p)}\` | \`${a?.name ?? p}\` |`);
  }

  if (spec.unbound?.length) {
    L.push("", "## Непривязанные значения", "",
      `${spec.unbound.length} шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в`,
      "библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.", "",
      "| Свойство | Значение | Почему |", "|---|---|---|");
    for (const u of spec.unbound) L.push(`| \`${u.prop}\` | \`${u.value}\` | ${u.reason} |`);
  }

  if (spec.usage?.length) L.push("", "## Где используется", "", ...spec.usage.map((u) => `- ${u}`));
  if (spec.avoid?.length) L.push("", "## Не делать", "", ...spec.avoid.map((u) => `- ${u}`));
  return L.join("\n") + "\n";
}

/* ---------- сборка одного ---------- */

function build(slug, names) {
  const spec = JSON.parse(readFileSync(join(ROOT, "components", slug, "spec.json"), "utf8"));
  const { paths, styles, shapes } = collect(spec);
  const { base, diff } = splitBase(paths, styles);
  const { cls, drift } = partClasses(paths.filter((p) => p !== "root"), names[slug] || {});
  const elements = new Map((spec.anatomy || []).map((a) => [a.part, a.element]));
  const root = (spec.anatomy || []).find((a) => a.part === "root") || { element: shapes.get("root")?.tag || "div" };
  const axes = (spec.props || []).filter((p) => p.type === "variant");

  const todos = new Map();
  for (const u of spec.unbound || []) {
    const at = (u.at && u.at[0]) || "root";
    if (!todos.has(at)) todos.set(at, []);
    todos.get(at).push(`TODO: unbound — ${u.prop} = ${u.value} — ${u.reason}`);
  }

  const ctx = { slug, name: spec.name, root, paths, cls, elements, base, diff, axes, todos };
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });
  const files = {
    [`${slug}.css`]: buildCss(spec, ctx),
    [`${slug}.html`]: buildHtml(spec, ctx),
    [`${slug}.stories.js`]: buildStories(spec, ctx),
    "README.md": buildReadme(spec, ctx),
  };
  for (const [f, body] of Object.entries(files)) writeFileSync(join(dir, f), body);

  names[slug] = Object.fromEntries([...cls.entries()].sort(([a], [b]) => (a < b ? -1 : 1)));

  const todo = (files[`${slug}.css`].match(/TODO: unbound/g) || []).length;
  return {
    slug, variants: spec.variants.length, parts: paths.length,
    unbound: (spec.unbound || []).length, todo, ok: todo === (spec.unbound || []).length, drift,
  };
}

/* ---------- запуск ---------- */

const only = arg("--slug", "");
const slugs = only ? [only]
  : argv.includes("--all")
    ? readdirSync(join(ROOT, "components")).filter((d) => existsSync(join(ROOT, "components", d, "spec.json"))).sort()
    : [];
if (!slugs.length) { console.error("нужен --slug <name> или --all"); process.exit(2); }

const names = existsSync(NAMES) ? JSON.parse(readFileSync(NAMES, "utf8")) : {};
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "base.css"), BASE_CSS);

const report = slugs.map((s) => build(s, names));
writeFileSync(NAMES, JSON.stringify(Object.fromEntries(Object.keys(names).sort().map((k) => [k, names[k]])), null, 2) + "\n");

const bad = report.filter((r) => !r.ok);
const drifted = report.filter((r) => r.drift.length);
for (const r of drifted) console.error(`ПРЕДУПРЕЖДЕНИЕ ${r.slug}: ${r.drift.join("; ")}`);
console.log(JSON.stringify(only ? report[0] : {
  built: report.length,
  mismatchedTodo: bad.length,
  driftedNames: drifted.length,
  report: report.map(({ slug, variants, parts, unbound, todo, ok }) => ({ slug, variants, parts, unbound, todo, ok })),
}, null, 2));
process.exit(bad.length ? 1 : 0);
