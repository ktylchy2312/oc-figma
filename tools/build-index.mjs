#!/usr/bin/env node
/**
 * build-index.mjs — `_index.json` и `README.md` пакета переноса.
 *
 *   node tools/ds/novo/build-index.mjs
 *
 * Собирается ИЗ СПЕК, лежащих на диске, а не из инвентаря: инвентарь говорит, что должно
 * быть, спека — что получилось. Компонент, у которого спеки нет, в индекс не попадает и
 * виден в отчёте отдельной строкой. `_ds_manifest.json` не создаётся: приложение соберёт
 * его само из маркеров @dsCard (контракт §1).
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { record } from "./stamp.mjs";

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const OUT = arg("--out", process.cwd());

const inventory = JSON.parse(readFileSync(join(OUT, "_inventory.json"), "utf8"));
const tokens = JSON.parse(readFileSync(join(OUT, "foundations/tokens.json"), "utf8"));
const typography = JSON.parse(readFileSync(join(OUT, "foundations/typography.json"), "utf8"));
const compDir = join(OUT, "components");
const slugs = readdirSync(compDir).filter((d) => existsSync(join(compDir, d, "spec.json"))).sort();

const items = [];
for (const slug of slugs) {
  const s = JSON.parse(readFileSync(join(compDir, slug, "spec.json"), "utf8"));
  const html = join(compDir, slug, "index.html");
  items.push({
    slug: s.slug,
    name: s.name,
    group: s.group,
    path: `components/${s.slug}/`,
    nodeId: s.figma.nodeId,
    level: s.level,
    variantCount: s.variants.length,
    role: s.role || "source",
    page: s.figma.page,
    props: s.props.map((p) => p.name),
    uses: [...new Set(s.anatomy.filter((a) => a.slug && a.slug !== s.slug).map((a) => a.slug))],
    unbound: s.unbound.length,
    documented: Boolean(s.documentation && s.documentation.present),
    sheetBytes: existsSync(html) ? statSync(html).size : 0,
  });
}

const missing = inventory.components.filter((c) => !items.some((i) => i.slug === c.slug)).map((c) => c.name);

const index = {
  system: "OC-Kontrol",
  source: { fileKey: inventory.source.fileKey, figmaFile: inventory.source.file },
  totals: {
    components: items.length,
    expected: inventory.components.length,
    missing,
    variants: items.reduce((a, i) => a + i.variantCount, 0),
    tokens: Object.keys(tokens).length,
    textStyles: typography.length,
    byGroup: items.reduce((a, i) => ((a[i.group] = (a[i.group] || 0) + 1), a), {}),
    byLevel: items.reduce((a, i) => ((a[i.level] = (a[i.level] || 0) + 1), a), {}),
    withoutFigmaDescription: items.filter((i) => !i.documented).length,
    withUnbound: items.filter((i) => i.unbound).length,
  },
  components: items,
};
writeFileSync(join(OUT, "_index.json"), JSON.stringify(index, null, 2) + "\n");

/* ------------------------------------------------------------------ README */

/**
 * Строка «последний прогон» берётся из _verify.json — а он остаётся и после проверки ОДНОГО
 * компонента: `node verify.mjs car-card` перезаписывает отчёт целиком. Собери README сразу
 * после такого прогона, и он честно скажет «прошло 1 из 1», а закоммитится это как состояние
 * всей системы. Наступал дважды за одну сессию.
 *
 * Поэтому строка пишется, только если отчёт покрывает все компоненты. Частичный прогон —
 * это не «плохой результат», это НЕ ТОТ ВОПРОС, и печатать его как ответ нельзя.
 */
const verifyRaw = existsSync(join(OUT, "_verify.json")) ? JSON.parse(readFileSync(join(OUT, "_verify.json"), "utf8")) : null;
const verify = verifyRaw && verifyRaw.total === slugs.length ? verifyRaw : null;
const undoc = items.filter((i) => !i.documented).map((i) => i.name);
const debt = items.filter((i) => i.unbound).sort((a, b) => b.unbound - a.unbound);

const readme = `# OC-Kontrol — пакет переноса дизайн-системы

Собрано из Figma \`${index.source.fileKey}\` через локальный мост.
Источник один: живой файл Figma. Существующие \`*.html\` источником не были — ни одно значение
из них не взято. Исключений два, оба про шрифт, оба названы ниже.

## Что внутри

\`\`\`
figma-dump/      снимки Figma: переменные, узлы, глифы, исходник шрифта
foundations/     tokens.json  tokens.css  fonts.css  typography.json
foundations/fonts/  завендоренные подмножества Roboto — ВХОД сборки, см. SOURCE.md
components/      ${items.length} папок, в каждой index.html и spec.json — лист вариантов
code/            ${items.length} папок, в каждой css, html, stories.js и README — рабочий код
tools/           генераторы: из дампа в основания, спеки, листы и код
.storybook/      витрина над code/
_index.json      список компонентов для приложения
_inventory.json  снимок библиотеки Figma: что есть, сколько вариантов, какого уровня
verify.mjs       шлюз листов, девять проверок на компонент
verify-code.mjs  шлюз кода, пять проверок на компонент
\`\`\`

## Числа

| | |
|---|---|
| компонентов | ${items.length} |
| комбинаций вариантов | ${index.totals.variants} |
| токенов | ${index.totals.tokens} |
| текстовых стилей | ${index.totals.textStyles} |
| без описания в Figma | ${index.totals.withoutFigmaDescription} |
| с непривязанными значениями | ${index.totals.withUnbound} |

По группам: ${Object.entries(index.totals.byGroup).map(([g, n]) => `${g} ${n}`).join(", ")}.
По уровням: ${Object.entries(index.totals.byLevel).map(([g, n]) => `${g} ${n}`).join(", ")}.

## Чем проверено

\`node verify.mjs\` — девять проверок на компонент, шесть из контракта и три сверх него.
Компонент, не прошедший хотя бы одну, в папку не кладётся; скрипт возвращает ненулевой код.

1. \`<script>\` — 0.
2. Внешние \`href\`/\`src\`/\`url(\` по http — 0.
3. Рендер в headless Chrome **с закрытой сетью**: высота > 400px, текста > 100 символов,
   Roboto загружен, 0 ошибок JS, 0 сетевых запросов. Любой запрос наружу перехватывается
   и считается нарушением, а не медленной загрузкой.
4. Каждое проверяемое значение из \`spec.base\` и \`spec.variants\` найдено в разметке дословно.
   Проверяются имена токенов, пиксели и hex; описательные значения («HORIZONTAL») считаются
   отдельно и показываются в отчёте.
5. Число подписанных ячеек равно длине \`spec.variants\`.
6. Первая строка — \`@dsCard\` с группой из фиксированного списка §5, совпадающей со спекой.
7. **Вес шрифта работает.** Roboto вшит одним вариативным файлом на подмножество вместо
   двенадцати копий. Будь файл статическим, 400 и 700 отрисовались бы одинаково — лист
   выглядел бы правдоподобно и был бы неверен. Меряется ширина строки в 400 против 700.
8. **Габарит отрисованного против Figma.** Все шесть проверок контракта проходит и лист,
   у которого кнопка на десять пикселей уже. Допуск разный по причине: размер, записанный
   числом, — 0.5px; размер по содержимому — max(1.5px, 1%), потому что ширины глифов Figma
   и Chrome округляют по-разному.
9. **Покрытие шрифта.** Проверка 7 спрашивает, вариативный ли шрифт, но не спрашивает, есть
   ли в нём нужные глифы. Польская \`ł\` провалилась не потому что польская, а потому что
   этого вопроса не задавали никому: она рисовалась системным шрифтом, на Windows случайно
   попадала в допуск, на Linux нет. Проверка собирает кодовые точки, которые лист просит
   нарисовать, разбирает \`unicode-range\` из \`@font-face\` и требует полного включения.
   Непокрытая точка — провал с указанием символа и подмножества, которого не хватает.

${verify ? `Последний прогон: прошло ${verify.passed} из ${verify.total}.` : ""}

## Как это собрано

Направление принципиально: **первична спека, лист выводится из неё.**

\`\`\`
Figma --(мост)--> figma-dump/ --> spec.json --> index.html --> шлюз листов
                                           --> code/       --> шлюз кода --> Storybook
\`\`\`

Генератор листа читает только \`spec.json\` и \`foundations/\`; доступа к Figma и к старому
HTML у него нет физически. Поэтому расхождение спеки и картинки невозможно по устройству,
а не по договорённости. То же и у генератора кода: \`code/\` выводится из спеки, а не
переписывается с листа.

Снимки Figma лежат в репозитории, поэтому вся цепочка от дампа до кода воспроизводится
без Figma и без моста: \`npm run build\`. Мост нужен только чтобы снять новый дамп.

Токен связывается **по идентификатору переменной**, не по имени: \`Radius/md\` зовётся в Figma
просто \`md\`, а \`Color/Surface/Default\` — \`Surface/Default\`, и сопоставление по строке
разваливается на первом переименовании.

**Ближайший токен не подставляется никогда.** Совпадение байт в байт основанием не является:
\`#30313a\` — это и \`--neutral-550\`, и \`--surface-raised-pressed\`, и подмена выбрала бы роль
за человека. Сырое значение едет в лист литералом и записью в \`unbound\`.

## Два заимствования не из Figma

Оба про шрифт и оба названы. Из Figma его взять нельзя: это бинарный ассет, которого там нет.
Значений дизайна ни одно из них не приносит.

**Первое — исходник из прошлой сборки.** Roboto в \`data:font/woff2\`, вынут из уже вшитого
листа предыдущей версии. Там он лежал двенадцатью блоками — три подмножества × четыре веса, —
и в каждой четвёрке был байт в байт один и тот же файл. Свёрнуто в \`@font-face\` с
\`font-weight: 100 900\`: **550 КБ → 139 КБ**.

**Второе — latin-ext и symbols из Google Fonts**, завендорены в \`foundations/fonts/\`, URL,
версия и sha256 записаны в \`foundations/fonts/SOURCE.md\`. Причина: в исходнике прошлой сборки
latin-ext не было, а продукт польский — \`ł ą ę ż ś ć\` рисовались тем, что нашлось в системе.
На Windows запасной шрифт случайно укладывался в допуск по ширине, на Linux не уложился, и CI
поймал это на первом прогоне. \`symbols\` добавлено ради \`→\` в описании OfferTable.

\`cyrillic-ext\` при этом **снято**: проверка 9 показала для него ноль кодовых точек на всех
${items.length} листах при 2112 у \`cyrillic\`. Итог — 159 КБ на четыре подмножества, которыми
система действительно пользуется.

Сеть нужна была ровно в момент скачивания. Сборка и оба шлюза работают офлайн и обязаны
продолжать работать офлайн.

## Что осталось сделать в Figma

**Без описания — ${undoc.length} компонентов.** У них \`usage\` и \`avoid\` пусты, и это намеренно:
правило использования, выдуманное генератором, хуже отсутствующего, потому что выглядит
как факт. Описание пишется в Figma, дальше приезжает само.

${undoc.length ? "```\n" + undoc.join(", ") + "\n```" : ""}

**Непривязанные значения — ${debt.reduce((a, i) => a + i.unbound, 0)} записей в ${debt.length} компонентах.**
Это честный список мест, где стоит сырое значение и токена нет. Повторяются четыре причины:
нет шкалы размеров контролов, нет токена под толщину обводки, нет токена под толщину линии
иконки, пустой контейнер с HUG держит размер из Figma.

Первые десять по объёму долга: ${debt.slice(0, 10).map((i) => `${i.name} (${i.unbound})`).join(", ")}.

## Как этим пользоваться

\`\`\`
npm install
npm run build       пересобрать всё из figma-dump/
npm run verify      три шлюза: пути, листы, код
npm run storybook   витрина на localhost:6006
\`\`\`

Лист компонента по умолчанию подключает шрифт и токены относительной ссылкой на
\`foundations/\`: один Roboto весит 138 КБ, и вшитый в каждый из ${items.length} листов он давал 9.9 МБ
из 10.8 МБ при том, что файл ровно один. Если лист нужно вырвать из папки — утащить на холст,
вставить в чат, открыть как gist preview, — соберите его самодостаточным:
\`node tools/build-html.mjs --slug button --inline\`.

Сборка детерминирована: второй прогон подряд даёт побайтово те же файлы, поэтому
\`git diff --exit-code\` после \`npm run build\` — рабочий тест на дрейф генератора. Ради
этого в выходах нет ни одной метки времени: «когда собрано» пишется в \`_build.json\`,
который в git не едет.

Правила работы с системой — в \`DS-RULES.md\`, устройство репозитория — в \`CLAUDE.md\`.
`;
writeFileSync(join(OUT, "README.md"), readme);

console.log(JSON.stringify({ components: items.length, expected: inventory.components.length, missing, variants: index.totals.variants, undocumented: undoc.length, unboundTotal: debt.reduce((a, i) => a + i.unbound, 0) }, null, 2));

record("build-index", { out: OUT }, OUT);
