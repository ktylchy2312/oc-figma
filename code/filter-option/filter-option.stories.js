// FilterOption — сгенерировано из components/filter-option/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./filter-option.css";

const VARIANTS = {
  "All|False": `
    <div class="oc-filter-option oc-filter-option--key-all oc-filter-option--selected-false">
      <div class="oc-filter-option__ellipse"></div>
      <span class="oc-filter-option__label">Wszystkie</span>
    </div>
  `,
  "All|True": `
    <div class="oc-filter-option oc-filter-option--key-all oc-filter-option--selected-true">
      <div class="oc-filter-option__ellipse"></div>
      <span class="oc-filter-option__label">Wszystkie</span>
      <svg class="oc-filter-option__icon-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Ryzyko|False": `
    <div class="oc-filter-option oc-filter-option--key-ryzyko oc-filter-option--selected-false">
      <div class="oc-filter-option__ellipse"></div>
      <span class="oc-filter-option__label">Wszystkie</span>
    </div>
  `,
  "Ryzyko|True": `
    <div class="oc-filter-option oc-filter-option--key-ryzyko oc-filter-option--selected-true">
      <div class="oc-filter-option__ellipse"></div>
      <span class="oc-filter-option__label">Wszystkie</span>
      <svg class="oc-filter-option__icon-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Wygaslo|False": `
    <div class="oc-filter-option oc-filter-option--key-wygaslo oc-filter-option--selected-false">
      <div class="oc-filter-option__ellipse"></div>
      <span class="oc-filter-option__label">Wszystkie</span>
    </div>
  `,
  "Wygaslo|True": `
    <div class="oc-filter-option oc-filter-option--key-wygaslo oc-filter-option--selected-true">
      <div class="oc-filter-option__ellipse"></div>
      <span class="oc-filter-option__label">Wszystkie</span>
      <svg class="oc-filter-option__icon-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = ["Key=All, Selected=False","Key=All, Selected=True","Key=Ryzyko, Selected=False","Key=Ryzyko, Selected=True","Key=Wygaslo, Selected=False","Key=Wygaslo, Selected=True"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-filter-option__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Forms/FilterOption",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «FilterOption»\n\nСобрано из спеки Figma `395:2659` (страница Core).\nКорень `<div>`, базовый класс `.oc-filter-option`. Вариантов: 6. Непривязанных значений: 4 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Key": {
      description: "Свойство варианта Figma «Key»",
      control: { type: "inline-radio" },
      options: ["All","Ryzyko","Wygaslo"],
    },
    "Selected": {
      description: "Свойство варианта Figma «Selected»",
      control: { type: "inline-radio" },
      options: ["False","True"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Key": "All",
    "Selected": "False",
    "Label": "Wszystkie",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Key"] + "|" + args["Selected"]] ?? "<p>нет такой комбинации</p>";
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
