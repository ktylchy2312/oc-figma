#!/usr/bin/env node
/**
 * build-spec.mjs — дамп компонента из Figma -> components/<slug>/spec.json.
 *
 *   node tools/ds/novo/build-spec.mjs --dump ds/figma/novo/Button.json
 *
 * НАПРАВЛЕНИЕ ПРИНЦИПИАЛЬНО (контракт §7): первична спека, HTML из неё выводится. Поэтому
 * весь перевод Figma -> CSS живёт здесь, а build-html.mjs только сериализует готовое дерево
 * `render`. Если бы перевод жил в генераторе HTML, спека описывала бы одно, а лист показывал
 * другое, и проверка 4 шлюза ловила бы это уже постфактум.
 *
 * ТОКЕН СВЯЗЫВАЕТСЯ ПО ИДЕНТИФИКАТОРУ, не по имени. Переменная Radius/md зовётся в Figma
 * просто `md`, а в Color — `Surface/Default`: сопоставление по строке требует знать, из какой
 * она коллекции, и разваливается на первом переименовании. tokens.json держит figmaId.
 *
 * БЛИЖАЙШИЙ ТОКЕН НЕ ПОДСТАВЛЯЕТСЯ НИКОГДА. Сырое значение едет в лист литералом и записью
 * в `unbound`. Совпадение байт в байт с существующим токеном — не основание: `#30313a` это
 * и --neutral-550, и --surface-raised-pressed, и подмена молча выбирает роль за человека.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";
import { record as recordBuild } from "./stamp.mjs"; // локальный record ниже — про значения спеки, не про сборку

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const DUMP = arg("--dump", "");
const OUT = arg("--out", process.cwd());
const ICONS = arg("--icons", "figma-dump/icons");
const FILE_KEY = arg("--file-key", "9NPCCHVqzumBg7rprMCGIE");
if (!DUMP) { console.error("нужен --dump <path>"); process.exit(1); }

const tokens = JSON.parse(readFileSync(join(OUT, "foundations/tokens.json"), "utf8"));
const inventory = JSON.parse(readFileSync(join(OUT, "_inventory.json"), "utf8"));
const dump = JSON.parse(readFileSync(DUMP, "utf8")).result;
if (dump.error) { console.error(dump.error); process.exit(1); }

const inv = inventory.components.find((c) => c.name === dump.name);
if (!inv) { console.error(`${dump.name} нет в _inventory.json`); process.exit(1); }

const byFigmaId = new Map(Object.entries(tokens).map(([n, t]) => [t.figmaId, n]));
const byStyleName = new Map(Object.entries(tokens).filter(([, t]) => t.source).map(([n, t]) => [t.figmaName, n]));

/* ------------------------------------------------------------------ токены */

const unbound = [];
/** Замены и оговорки, которые не являются долгом по токенам, но обязаны быть видимыми. */
const notes = [];
/** ДОЛГ ПРИНАДЛЕЖИТ ВЛАДЕЛЬЦУ. Обход рисует и содержимое инстансов — листу нужна вся
 *  картинка, — но сырые значения внутри чужого мастера в ЭТОТ `unbound` не пишутся:
 *  иначе пять сырых векторов EmptyArt приезжают ещё и в EmptyState, и починка одного места
 *  роняет счётчик в двух компонентах, будто сделано две работы. Флаг снимается на входе
 *  в инстанс и возвращается на выходе. */
let ownDebt = true;
/** Одна запись на (свойство, значение, причина); пути копятся внутрь. Иначе у таблицы из
 *  сорока ячеек сорок одинаковых строк «нет токена под ширину», и список нечитаем. */
function addUnbound(prop, rawValue, reason, path) {
  if (!ownDebt) return;
  // Сравнение по НОРМАЛИЗОВАННОЙ строке. Первая версия сравнивала с сырым аргументом, а
  // складывала String(value) — число 1 никогда не совпадало со строкой "1", и один и тот же
  // долг иконки приезжал двенадцатью записями, по разу на вариант.
  const value = String(rawValue);
  const hit = unbound.find((u) => u.prop === prop && u.value === value && u.reason === reason);
  if (hit) { if (hit.at.length < 12 && !hit.at.includes(path)) hit.at.push(path); return; }
  unbound.push({ prop, value, reason, at: [path] });
}

const tokenOf = (ref) => (ref && ref.id && byFigmaId.get(ref.id)) || null;
const styleToken = (name) => byStyleName.get(name) || null;

/** УГОЛ ГРАДИЕНТА В РЕАЛЬНЫХ СТОРОНАХ УЗЛА. Figma держит градиент в нормированном квадрате:
 *  обратная матрица даёт направление в долях ширины и высоты. CSS считает угол по реальным
 *  сторонам, поэтому доли надо умножить на w и h. Один и тот же стиль на 200×40 даёт 282°,
 *  а на квадрате — 317°: взять угол из токена значило бы положить градиент почти поперёк. */
function gradientAngleFor(t, w, h) {
  if (!t || !w || !h) return null;
  const a = t[0][0], b = t[0][1], d = t[1][0], e = t[1][1];
  const det = a * e - b * d;
  if (!det) return null;
  const dx = (e / det) * w, dy = (-d / det) * h;
  return Math.round(((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360);
}

/** Цвет: `var(--token)` либо литерал плюс запись долга. Третьего не дано. */
function color(p, prop, path, node) {
  if (!p) return null;

  if (p.stops) {
    const t = p.style ? styleToken(p.style) : null;
    const ang = gradientAngleFor(p.gradientTransform, node && node.w, node && node.h);
    if (t && tokens[t + "-stops"]) {
      // Цвета из общего токена, угол — свой. Разделение объяснено в build-foundations.mjs.
      return `linear-gradient(${ang === null ? 180 : ang}deg, var(${t}-stops))`;
    }
    const mul = p.opacity === undefined ? 1 : p.opacity;
    const v = `linear-gradient(${ang === null ? 180 : ang}deg, ${p.stops.map((s) => `${withAlpha(s.color, mul)} ${Math.round(s.pos * 100)}%`).join(", ")})`;
    addUnbound(prop, v, "градиент на узле без стиля заливки: переменная стопы не принимает, роль обязана жить стилем", path);
    return v;
  }

  if (p.style) {
    const t = styleToken(p.style);
    if (t) return `var(${t})`;
    addUnbound(prop, p.style, "стиль заливки без токена в tokens.json", path);
    return null;
  }

  const t = tokenOf(p.token);
  const mul = p.opacity === undefined ? 1 : p.opacity;
  // НЕПРОЗРАЧНОСТЬ ЗАЛИВКИ — не непрозрачность узла. `opacity` на элементе погасила бы и
  // текст, и иконку внутри. color-mix гасит только сам цвет и при этом сохраняет токен:
  // выбирать между «видно роль» и «верный цвет» не приходится.
  if (t) return mul < 1 ? `color-mix(in srgb, var(${t}) ${Math.round(mul * 100)}%, transparent)` : `var(${t})`;
  if (p.raw) {
    const v = withAlpha(p.raw, mul);
    addUnbound(prop, v, "сырой цвет: переменная не привязана", path);
    return v;
  }
  return null;
}

/** #rrggbb(aa), домноженный на непрозрачность заливки. */
function withAlpha(hexColor, mul) {
  if (mul >= 0.999) return hexColor;
  const h = String(hexColor).replace("#", "");
  const base = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  const a = Math.max(0, Math.min(1, base * mul));
  return "#" + h.slice(0, 6) + Math.round(a * 255).toString(16).padStart(2, "0");
}

/** Число: `var(--token)` либо `Npx` плюс долг, если reason задан. Ноль долгом не считается —
 *  привязывать нечего и незачем (то же правило, что в index-components.js). */
function len(n, prop, path, reason) {
  if (!n) return null;
  const t = tokenOf(n.token);
  if (t) return `var(${t})`;
  if (n.px === 0) return "0";
  if (reason) addUnbound(prop, n.px + "px", reason, path);
  return n.px + "px";
}

/* ------------------------------------------------------------------ иконки */

const VECTORS = arg("--vectors", "figma-dump/vectors.json");
const vectors = existsSync(VECTORS) ? JSON.parse(readFileSync(VECTORS, "utf8")) : {};

const iconIndex = existsSync(join(ICONS, "index.json")) ? JSON.parse(readFileSync(join(ICONS, "index.json"), "utf8")) : {};
const iconCache = new Map();
function iconSvg(glyph) {
  if (iconCache.has(glyph)) return iconCache.get(glyph);
  const file = iconIndex[glyph];
  if (!file || !existsSync(join(ICONS, file))) throw new Error(`нет глифа ${glyph} в ${ICONS} — лист собирать нельзя, внешней ссылки быть не должно`);
  const svg = readFileSync(join(ICONS, file), "utf8").replace(/<\?xml[\s\S]*?\?>/, "").replace(/\s+width="\d+"\s+height="\d+"/, "").trim();
  iconCache.set(glyph, svg);
  return svg;
}

/* ---------------------------------------------------------------- раскладка */

const JUSTIFY = { MIN: "flex-start", CENTER: "center", MAX: "flex-end", SPACE_BETWEEN: "space-between" };
const ALIGN = { MIN: "flex-start", CENTER: "center", MAX: "flex-end", BASELINE: "baseline" };
const WEIGHT = { Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 };
const slug = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[^A-Za-z0-9]+/g, "-").toLowerCase().replace(/^-|-$/g, "") || "part";

/** Плоская карта «путь.свойство -> значение» одного варианта. По ней считается, что общее
 *  (уезжает в base), а что различается (уезжает в variants). Сравнение строковое: значения
 *  уже приведены к финальному CSS, и `var(--accent-default)` против `var(--accent-hover)`
 *  различаются ровно тогда, когда различается картинка. */
function keyFor(path, prop) {
  const FRIENDLY = { fill: "background", stroke: "borderColor", strokeWeight: "borderWidth", color: "color" };
  if (path === "root") return FRIENDLY[prop] || prop;
  return `${path}.${FRIENDLY[prop] || prop}`;
}

function buildNode(node, parentLayout, path, flat, depth) {
  const st = {};
  const put = (k, v) => { if (v !== null && v !== undefined) st[k] = v; };
  const record = (prop, v) => { if (v !== null && v !== undefined) flat[keyFor(path, prop)] = v; };

  /* положение */
  if (node.absolute) {
    put("position", "absolute");
    put("left", node.x + "px");
    put("top", node.y + "px");
  }

  /* размеры */
  const inFlex = parentLayout && parentLayout.dir;
  const primaryIsH = inFlex && parentLayout.dir === "HORIZONTAL";

  /* ПУСТОЙ КОНТЕЙНЕР С HUG — расхождение Figma и CSS, а не ошибка перевода. Figma держит
     последний размер, каким фрейм был, когда в нём ещё что-то лежало: `Actions` в PageHeader
     стоит 100×100 без единого ребёнка. Во flex такой контейнер схлопывается в ноль, и лист
     теряет 32 пикселя высоты — ровно это поймала проверка 8. Размер фиксируется числом,
     потому что лист обязан повторить Figma; сам факт — дефект файла, и он уезжает в unbound. */
  const emptyBox = !node.text && !node.icon && !node.vector && !(node.children && node.children.length);
  if (emptyBox && (node.sizeH === "HUG" || node.sizeV === "HUG")) {
    if (node.sizeH === "HUG") put("width", node.w + "px");
    if (node.sizeV === "HUG") put("height", node.h + "px");
    addUnbound(keyFor(path, "emptyHug"), `${node.w}×${node.h}`,
      "пустой контейнер с HUG: Figma держит прежний размер, CSS схлопывает в ноль — размер зафиксирован числом", path);
  }

  /* КОРЕНЬ С FILL НЕКУДА ТЯНУТЬ. В Figma DashboardStat растягивается по родителю и меряется
     как 240; в ячейке листа родителя нет, flex-контекста нет, и он схлопывается по содержимому
     — 186 против 240. Ширина мастера из Figma и есть то, что человек видит на канвасе, поэтому
     корню она проставляется числом. Намерение «тянется по родителю» не теряется: оно записано
     в anatomy.root.figmaSizing и адресовано генератору кода, а не листу. */
  if (depth === 0 && node.sizeH === "FILL") { put("width", node.w + "px"); record("width", node.w + "px"); }
  if (depth === 0 && node.sizeV === "FILL") { put("height", node.h + "px"); record("height", node.h + "px"); }

  if (node.sizeH === "FIXED" || node.absolute) {
    put("width", node.w + "px");
    record("width", node.w + "px");
    if (node.type !== "INSTANCE" && node.type !== "TEXT") addUnbound(keyFor(path, "width"), node.w + "px", "нет шкалы размеров: ширина задана числом", path);
  } else if (node.sizeH === "FILL") {
    if (primaryIsH) put("flex", "1 1 0%"); else put("align-self", "stretch");
  } else if (node.sizeH === "HUG" && !inFlex) put("width", "fit-content");
  if (node.sizeV === "FIXED" || node.absolute) {
    put("height", node.h + "px");
    record("height", node.h + "px");
    if (node.type !== "INSTANCE" && node.type !== "TEXT") addUnbound(keyFor(path, "height"), node.h + "px", "нет шкалы размеров: высота задана числом", path);
  } else if (node.sizeV === "FILL") {
    if (inFlex && !primaryIsH) put("flex", "1 1 0%"); else if (inFlex) put("align-self", "stretch");
  }
  if (node.minW != null) put("min-width", node.minW + "px");
  if (node.maxW != null) put("max-width", node.maxW + "px");
  if (node.minH != null) put("min-height", node.minH + "px");
  if (node.maxH != null) put("max-height", node.maxH + "px");
  if (node.grow) put("flex-grow", String(node.grow));
  if (node.selfAlign === "STRETCH") put("align-self", "stretch");

  /* заливка, обводка, радиус, тень, прозрачность */
  // У текста заливка означает цвет глифов. Записать её как background — получить в base
  // ключ label.background рядом с label.color и одно и то же значение в двух ролях.
  const fill = node.text ? null : color(node.fill, keyFor(path, "fill"), path, node);
  if (fill) {
    put(fill.startsWith("linear-gradient") ? "background-image" : "background", fill);
    record("fill", fill);
  }
  if (node.stroke) {
    const c = color(node.stroke, keyFor(path, "stroke"), path, node);

    /* ОБВОДКА ПО ОДНОЙ СТОРОНЕ — не край случая, а норма для полосок вкладок и шапок таблиц.
       В Figma это strokeWeight === mixed с четырьмя весами; первая версия такой узел просто
       пропускала, и TabBar приезжал 40 пикселей высотой вместо 42 — нижняя граница исчезала
       вместе с двумя пикселями. Проверка 8 это и поймала. */
    if (c && node.strokeWeight && node.strokeWeight.mixed) {
      const SIDES = { top: "border-top", right: "border-right", bottom: "border-bottom", left: "border-left" };
      const parts = [];
      for (const [k, prop] of Object.entries(SIDES)) {
        const px = node.strokeWeight[k];
        if (!px) continue;
        put(prop, `${px}px solid ${c}`);
        parts.push(`${k} ${px}px`);
        addUnbound(keyFor(path, "strokeWeight"), px + "px", "нет токена под толщину обводки", path);
      }
      if (parts.length) { record("stroke", c); record("strokeWeight", parts.join(" ")); }
    }

    const w = node.strokeWeight && node.strokeWeight.mixed ? null : node.strokeWeight;
    const wv = w ? len(w, keyFor(path, "strokeWeight"), path, "нет токена под толщину обводки") : null;
    if (c && wv) {
      // INSIDE — единственное выравнивание, совпадающее с border-box; CENTER и OUTSIDE в Figma
      // добавляют половину/всю толщину к габариту, и в CSS их честно даёт только outline.
      if (node.strokeAlign === "OUTSIDE") { put("outline", `${wv} solid ${c}`); put("outline-offset", "0px"); }
      else put("border", `${wv} solid ${c}`);
      record("stroke", c);
      record("strokeWeight", wv);
      if (node.strokeAlign === "CENTER") addUnbound(keyFor(path, "strokeAlign"), "CENTER", "обводка по центру: в CSS точного аналога нет, взят border (INSIDE)", path);
    }
    if (node.dashPattern) put("border-style", "dashed");
  }
  if (node.radius) {
    if (node.radius.mixed) {
      const parts = node.radius.px.map((p, i) => len({ px: p, token: node.radius.token[i] }, keyFor(path, "radius"), path, "радиус без токена") || "0");
      put("border-radius", parts.join(" "));
      record("radius", parts.join(" "));
    } else if (node.radius.px) {
      const v = len(node.radius, keyFor(path, "radius"), path, "радиус без токена");
      put("border-radius", v);
      record("radius", v);
    }
  }
  if (node.effectStyle) {
    const t = styleToken(node.effectStyle);
    if (t) { put("box-shadow", `var(${t})`); record("shadow", `var(${t})`); }
    else addUnbound(keyFor(path, "shadow"), node.effectStyle, "стиль эффекта без токена в tokens.json", path);
  } else if (node.effects) {
    const v = node.effects.filter((e) => e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW")
      .map((e) => `${e.type === "INNER_SHADOW" ? "inset " : ""}${e.offset.x}px ${e.offset.y}px ${e.radius}px ${e.spread}px ${e.color}`).join(", ");
    if (v) { put("box-shadow", v); record("shadow", v); addUnbound(keyFor(path, "shadow"), v, "тень на узле без стиля эффекта", path); }
  }
  if (node.opacity) {
    const t = tokenOf(node.opacity.token);
    const v = t ? `var(${t})` : String(node.opacity.value);
    put("opacity", v);
    record("opacity", v);
    if (!t) addUnbound(keyFor(path, "opacity"), node.opacity.value, "непрозрачность без токена", path);
  }
  if (node.clips) put("overflow", "hidden");
  // Знак противоположный: в Figma положительный поворот против часовой, в CSS — по часовой.
  // Начало координат — центр: все встреченные случаи это 180° на квадратной иконке, где
  // центр единственно верен; для непрямых углов на неквадратном узле это надо перепроверить.
  if (node.rotation) { put("transform", `rotate(${-node.rotation}deg)`); put("transform-origin", "center"); record("rotation", node.rotation + "deg"); }
  // Эллипс приезжает обычным узлом и рисуется кругом: форма — дело CSS, цвет остаётся токеном.
  if (node.type === "ELLIPSE") put("border-radius", "50%");

  /* авторазметка */
  if (node.layout) {
    const L = node.layout;
    put("display", "flex");
    put("flex-direction", L.dir === "VERTICAL" ? "column" : "row");
    const gap = len(L.gap, keyFor(path, "gap"), path, "зазор без токена");
    if (gap) { put("gap", gap); record("gap", gap); }
    const pads = ["pt", "pr", "pb", "pl"].map((k) => len(L[k], keyFor(path, "padding"), path, "внутренний отступ без токена") || "0");
    if (pads.some((p) => p !== "0")) { put("padding", pads.join(" ")); record("padding", pads.join(" ")); }
    put("justify-content", JUSTIFY[L.justify] || "flex-start");
    put("align-items", ALIGN[L.align] || "flex-start");
    record("direction", L.dir);
    record("justify", L.justify);
    record("align", L.align);
    if (L.wrap) put("flex-wrap", "wrap");
  }
  // Дети по координатам требуют системы отсчёта: без position:relative абсолют уедет к листу.
  if (node.children && node.children.some((c) => c.absolute) && !st.position) put("position", "relative");

  const out = { part: node.name, path, tag: "div", style: st };
  if (node.propRef) out.propRef = node.propRef;
  if (node.hidden) out.hidden = true;

  /* текст */
  if (node.text) {
    const T = node.text;
    out.tag = "span";
    out.text = T.chars;
    st.display = "block";
    put("font-family", "'Roboto', system-ui, sans-serif");
    put("font-size", T.size + "px");
    put("font-weight", String(WEIGHT[String(T.weight).replace(/\s+/g, "")] ?? 400));
    put("line-height", T.lineHeight === "auto" ? "normal" : T.lineHeight);
    put("letter-spacing", T.letterSpacing);
    if (T.case === "UPPER") put("text-transform", "uppercase");
    if (T.case === "LOWER") put("text-transform", "lowercase");
    if (T.decoration === "UNDERLINE") put("text-decoration", "underline");
    if (T.alignH && T.alignH !== "LEFT") put("text-align", T.alignH.toLowerCase());
    if (T.autoResize === "WIDTH_AND_HEIGHT") put("white-space", "nowrap");

    /* ТЕКСТ С ФИКСИРОВАННОЙ ШИРИНОЙ ПРИБИВАЕТСЯ ЧИСЛОМ. `autoResize: HEIGHT` в Figma значит
       «ширина задана, высота по содержимому» — перенос строк уже посчитан, и 370 пикселей
       здесь такой же факт, как размер шрифта. В CSS этот же узел стоит FILL внутри цепочки
       HUG-родителей, а такую цепочку CSS разрешает в другую сторону: ширину задаёт содержимое.
       DeleteStageDialog из-за этого разворачивался в одну строку и выходил 558×184 вместо
       422×208 — на строку ниже и на 136 пикселей шире. Ширина из Figma круг размыкает. */
    if (T.autoResize === "HEIGHT" || T.autoResize === "NONE") {
      put("width", node.w + "px");
      put("flex", "none");
      record("width", node.w + "px");
      if (T.autoResize === "NONE") put("height", node.h + "px");
    }
    if (T.truncation === "ENDING") { put("overflow", "hidden"); put("text-overflow", "ellipsis"); put("white-space", "nowrap"); }
    const c = color(node.fill, keyFor(path, "color"), path, node);
    if (c) { st.color = c; delete st.background; record("color", c); }
    record("font", `${T.style || "(без стиля)"} ${T.size}/${T.lineHeight} ${WEIGHT[String(T.weight).replace(/\s+/g, "")] ?? 400}`);
    if (!T.style) addUnbound(keyFor(path, "font"), `${T.size}px ${T.weight}`, "текст без текстового стиля Figma", path);
    out.font = { style: T.style, size: T.size, weight: WEIGHT[String(T.weight).replace(/\s+/g, "")] ?? 400, lineHeight: T.lineHeight, letterSpacing: T.letterSpacing };
    return out;
  }

  /* иконка */
  if (node.icon) {
    out.tag = "svg";
    out.icon = node.icon;
    out.iconStyle = node.iconStyle;
    out.svg = iconSvg(node.icon);
    const c = color(node.iconColor, keyFor(path, "iconColor"), path, node);
    if (c) { st.color = c; record("iconColor", c); }
    delete st.background;
    st["stroke-width"] = String(node.iconStrokeWeight ?? 1);
    // Толщина линии наследуется на контуры, а вот vector-effect — нет, и правилом для него
    // занимается лист (build-html.mjs). Держать его в инлайне бессмысленно: на <svg> он не
    // применяется, а выглядит применённым.
    st.flex = "none";
    record("icon", node.icon);
    if (node.iconStrokeWeight != null) addUnbound(keyFor(path, "iconStrokeWidth"), node.iconStrokeWeight, "нет токена под толщину линии иконки", path);
    return out;
  }

  /* вектор: геометрия берётся выгрузкой узла, потому что больше её взять негде */
  const v = node.vector ? vectors[node.id] : null;
  if (node.vector && !v && !(node.children && node.children.length)) {
    throw new Error(`нет выгрузки вектора ${node.id} (${node.name}) и нет поддерева для запасного пути — пустой div вместо формы шлюз не поймает, он меряет коробки`);
  }
  if (v) {
    out.tag = "svg";
    out.vector = true;
    // Геометрия, взятая у побуквенно совпавшего близнеца, помечается явно: замена должна
    // читаться в спеке, а не жить в голове того, кто её сделал.
    if (v.twinOf) {
      out.geometryFrom = v.twinOf;
      notes.push({ kind: "vector-twin", at: path, node: node.id, takenFrom: v.twinOf, signature: v.twinSignature,
        reason: "Figma отказалась экспортировать этот узел; геометрия взята у узла с совпадающими путём, именем и размером" });
    }

    /* ПРИВЯЗКА ВОЗВРАЩАЕТСЯ В SVG ПО ТОЧНОМУ СОВПАДЕНИЮ, а не по похожести. Выгрузка запекает
       цвет литералом; из дампа известно, что у ЭТОГО узла обводка была привязана к Text/Secondary,
       и что разрешённое значение переменной — ровно этот литерал. Замена литерала обратно на
       var(--text-secondary) восстанавливает прочитанную в Figma связь, а не угадывает её.
       Двусмысленность запрещена: если один и тот же hex в палитре принадлежит двум разным
       токенам (общее значение под двумя ролями), не подставляется ни один — цвет остаётся
       запечённым и уезжает в unbound. Выбирать роль за человека нельзя даже при совпадении
       байт в байт. */
    const palette = node.palette || [
      node.fill && { hex: node.fill.hex, token: node.fill.token },
      node.stroke && { hex: node.stroke.hex, token: node.stroke.token },
    ].filter(Boolean);
    const byHex = new Map();
    for (const e of palette) {
      if (!e.hex) continue;
      const t = tokenOf(e.token);
      const key = e.hex.toLowerCase();
      if (!byHex.has(key)) byHex.set(key, new Set());
      byHex.get(key).add(t);
    }
    let svg = v.svg;
    const remapped = [];
    for (const [hexValue, set] of byHex) {
      const list = [...set];
      if (list.length !== 1 || !list[0]) {
        addUnbound(keyFor(path, "vectorColor"), hexValue, list.length > 1
          ? "цвет вектора запечён: один литерал под несколькими токенами, роль выбрать нельзя"
          : "цвет вектора запечён: переменная не привязана", path);
        continue;
      }
      const re = new RegExp(hexValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      if (!re.test(svg)) continue;
      svg = svg.replace(re, `var(${list[0]})`);
      remapped.push(list[0]);
    }
    // fill="var(--x)" как АТРИБУТ не работает — переменные живут только в CSS. Презентационные
    // атрибуты переписываются в style, иначе цвет молча становится чёрным по умолчанию.
    if (remapped.length) svg = svg.replace(/\s(fill|stroke)="(var\(--[a-z0-9-]+\))"/gi, ' style="$1:$2"')
      .replace(/style="(fill|stroke):(var\(--[a-z0-9-]+\))"\s+style="(fill|stroke):(var\(--[a-z0-9-]+\))"/gi, 'style="$1:$2;$3:$4"');
    out.svg = svg;
    for (const t of remapped) record("vectorToken:" + t, `var(${t})`);
    delete st.background;
    delete st.border;
    st.flex = "none";
    st.overflow = "visible";
    return out;
  }

  if (node.children && node.children.length) {
    const used = new Map();
    const wasOwn = ownDebt;
    if (node.type === "INSTANCE") ownDebt = false;
    out.children = node.children.map((c) => {
      // Имя текстового слоя в Figma — это его содержимое: «Dodaj samochód» дало бы путь
      // dodaj-samoch-d, который меняется вместе с подписью. Слот компонента устойчив.
      const label = c.propRef && c.propRef.characters ? c.propRef.characters.split("#")[0]
        : c.icon ? "icon-" + c.icon : c.name;
      let p = slug(label);
      const n = (used.get(p) || 0) + 1; used.set(p, n);
      if (n > 1) p += "-" + n;
      return buildNode(c, node.layout, path === "root" ? p : `${path}/${p}`, flat, depth + 1);
    });
    ownDebt = wasOwn;
  }
  return out;
}

/* ----------------------------------------------------------------- сборка */

const variantsRaw = dump.variants.map((v) => {
  const flat = {};
  const render = buildNode(v.node, null, "root", flat, 0);
  // Габарит из Figma едет в спеку не для красоты: по нему шлюз сверяет то, что реально
  // отрисовал браузер. Без этого «пиксель-в-пиксель» остаётся утверждением, а не проверкой.
  return { key: v.key, nodeId: v.id, match: v.props, description: v.description, figmaSize: { w: v.node.w, h: v.node.h }, flat, render };
});

/* base — то, что одинаково во ВСЕХ вариантах; остальное различает варианты. */
const allKeys = [...new Set(variantsRaw.flatMap((v) => Object.keys(v.flat)))].sort();
const base = {}, varying = [];
for (const k of allKeys) {
  const vals = variantsRaw.map((v) => v.flat[k]);
  if (vals.every((x) => x === vals[0]) && vals[0] !== undefined) base[k] = vals[0];
  else varying.push(k);
}

/* anatomy — все узлы варианта по умолчанию: путь, роль, элемент, вложенный компонент. */
const ELEMENT_BY_GROUP = { Actions: "button", Forms: "div", Overlays: "div" };
const defIndex = Math.max(0, dump.variants.findIndex((v) => Object.entries(dump.properties)
  .filter(([, d]) => d.type === "VARIANT").every(([k, d]) => v.props[k] === d.defaultValue)));
const anatomy = [];
(function collect(n, node) {
  // Имя корневого узла в Figma — это ключ варианта («Variant=Primary, State=Default»),
  // а не имя компонента: в анатомии оно бессмысленно и меняется от варианта к варианту.
  const item = { part: n.path === "root" ? "root" : n.path, name: n.path === "root" ? dump.name : n.part };
  if (n.path === "root") {
    item.element = ELEMENT_BY_GROUP[inv.group] || "div";
    // Как компонент ведёт себя в чужой раскладке. Листу это не нужно — там он один в ячейке, —
    // а генератору кода нужно: FILL значит «ширину задаёт родитель», и в коде это не 240px.
    item.figmaSizing = { horizontal: dump.variants[defIndex].node.sizeH || null, vertical: dump.variants[defIndex].node.sizeV || null };
  }
  else if (n.tag === "span") item.element = "span";
  else if (n.icon) { item.element = "svg"; item.component = "Icons"; item.glyph = n.icon; item.slug = "icons"; }
  else item.element = "div";
  if (node && node.instanceOf && node.instanceOf !== "Icons") { item.component = node.instanceOf; item.slug = slug(node.instanceOf); }
  if (n.propRef && n.propRef.visible) { item.optional = true; item.controlledBy = n.propRef.visible.split("#")[0]; }
  if (n.propRef && n.propRef.characters) item.textProp = n.propRef.characters.split("#")[0];
  anatomy.push(item);
  const kids = n.children || [];
  const src = (node && node.children) || [];
  kids.forEach((k, i) => collect(k, src[i]));
})(variantsRaw[defIndex].render, dump.variants[defIndex].node);

/* props — оси вариантов и слоты. Суффикс `#27:41` — внутренний идентификатор Figma, наружу
   он не нужен, но и терять его нельзя: по нему инстанс переопределяют программно. */
const props = Object.entries(dump.properties).map(([raw, def]) => {
  const name = raw.split("#")[0];
  const p = { name, type: def.type === "VARIANT" ? "variant" : def.type.toLowerCase().replace("_", "-"), figmaKey: raw };
  if (def.variantOptions) p.values = def.variantOptions;
  if (def.defaultValue !== undefined) p.default = def.defaultValue;
  if (def.preferredValues) p.preferredValues = def.preferredValues;
  return p;
});

/* usage / avoid — ТОЛЬКО из описания компонента в Figma. Пусто там — пусто здесь: правило
   использования, выдуманное генератором, хуже отсутствующего, потому что выглядит как факт. */
const desc = (dump.description || "").trim();
const sentences = desc ? desc.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean) : [];
const isAvoid = (s) => /^(не\s|никогда|нельзя|not\s|never|don't|do not|avoid)/i.test(s) || /\bне путать\b/i.test(s);
const usage = sentences.filter((s) => !isAvoid(s));
const avoid = sentences.filter(isAvoid);
if (inv.usedBy > 0) usage.push(`Входит в состав других компонентов (${inv.usedBy} шт. по графу Figma).`);

const spec = {
  name: dump.name,
  slug: inv.slug,
  group: inv.group,
  level: inv.level,
  role: inv.role,
  figma: { fileKey: FILE_KEY, nodeId: dump.id, page: inv.page, kind: dump.kind },
  description: desc,
  documentation: { source: "figma component description", present: Boolean(desc) },
  props,
  anatomy,
  base,
  variants: variantsRaw.map((v) => ({
    key: v.key,
    match: v.match,
    nodeId: v.nodeId,
    figmaSize: v.figmaSize,
    tokens: Object.fromEntries(varying.filter((k) => v.flat[k] !== undefined).map((k) => [k, v.flat[k]])),
    render: v.render,
  })),
  motion: [],
  usage,
  avoid,
  unbound,
  notes,
};
/* Анимации в файле нет: обход всех узлов вернул 0 prototype reactions. Пустой `motion` —
   факт, а не пропуск, и он должен читаться так же однозначно, как пустой `unbound`. */
spec.motion = [];
spec.motionSource = "figma reactions: 0";

const dir = join(OUT, "components", inv.slug);
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "spec.json"), JSON.stringify(spec, null, 2) + "\n");

console.log(JSON.stringify({
  name: spec.name, slug: spec.slug, group: spec.group, level: spec.level,
  variants: spec.variants.length, baseKeys: Object.keys(base).length, varyingKeys: varying.length,
  anatomy: anatomy.length, props: props.length,
  unbound: unbound.length, usage: usage.length, avoid: avoid.length,
  bytes: JSON.stringify(spec).length,
}, null, 2));

recordBuild("build-spec", { dump: DUMP }, OUT);
