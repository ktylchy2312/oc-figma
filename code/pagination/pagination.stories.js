// Pagination — сгенерировано из components/pagination/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./pagination.css";

const VARIANTS = {
  "Pagination": `
    <div class="oc-pagination">
      <div class="oc-pagination__controls">
        <div class="oc-pagination__page-arrow">
          <svg class="oc-pagination__icon-chevron-left" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="oc-pagination__page-number">
          <span class="oc-pagination__page-number-label">1</span>
        </div>
        <div class="oc-pagination__page-number-2">
          <span class="oc-pagination__page-number-2-label">2</span>
        </div>
        <div class="oc-pagination__page-number-3">
          <span class="oc-pagination__page-number-3-label">3</span>
        </div>
        <div class="oc-pagination__page-arrow-2">
          <svg class="oc-pagination__icon-chevron-right" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <span class="oc-pagination__range-label">Wyświetlono 1–5 z 13</span>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-pagination__page-number-label":"Label","oc-pagination__page-number-2-label":"Label","oc-pagination__page-number-3-label":"Label","oc-pagination__range-label":"Range Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/Pagination",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «Pagination»\n\nСобрано из спеки Figma `32:1233` (страница Core).\nКорень `<div>`, базовый класс `.oc-pagination`. Вариантов: 1. Непривязанных значений: 4 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Range Label": {
      description: "Свойство Figma «Range Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Range Label": "Wyświetlono 1–5 z 13",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["Pagination"] ?? "<p>нет такой комбинации</p>";
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
