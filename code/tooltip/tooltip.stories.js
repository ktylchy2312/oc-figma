// Tooltip — сгенерировано из components/tooltip/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./tooltip.css";

const VARIANTS = {
  "Tooltip": `
    <div class="oc-tooltip">
      <span class="oc-tooltip__text">Brakuje: polisa OC, dowód</span>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-tooltip__text":"Text"};
const OPTIONAL_PARTS = {};

export default {
  title: "Feedback/Tooltip",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Всплывающая подсказка. В библиотеке не было ни одной всплывашки как класса. Тень берётся стилем Elevation: своя тень не умеет обновляться вместе с системой.\n\nСобрано из спеки Figma `333:3768` (страница Core).\nКорень `<div>`, базовый класс `.oc-tooltip`. Вариантов: 1. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Text": {
      description: "Свойство Figma «Text» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Text": "Brakuje: polisa OC, dowód",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["Tooltip"] ?? "<p>нет такой комбинации</p>";
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
    .map((html, i) => `<figure style="margin:0 0 24px">${html}<figcaption style="font:12px/1.6 ui-monospace,monospace;color:#8a8987;margin-top:8px">${CAPTIONS[i]}</figcaption></figure>`)
    .join(""),
};
