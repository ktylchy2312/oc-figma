// SearchInput — сгенерировано из components/search-input/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./search-input.css";

const VARIANTS = {
  "Default": `
    <div class="oc-search-input oc-search-input--state-default">
      <svg class="oc-search-input__icon-search" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9999 20.9999L16.6599 16.6599" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-search-input__label2">VIN, numer, sprzedawca...</span>
    </div>
  `,
  "Filled": `
    <div class="oc-search-input oc-search-input--state-filled">
      <svg class="oc-search-input__icon-search" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9999 20.9999L16.6599 16.6599" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-search-input__label2">VIN, numer, sprzedawca...</span>
    </div>
  `,
  "Focus": `
    <div class="oc-search-input oc-search-input--state-focus">
      <svg class="oc-search-input__icon-search" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9999 20.9999L16.6599 16.6599" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <div class="oc-search-input__value">
        <span class="oc-search-input__value-label2">VIN, numer, sprzedawca...</span>
        <div class="oc-search-input__caret"></div>
      </div>
    </div>
  `,
  "Disabled": `
    <div class="oc-search-input oc-search-input--state-disabled">
      <svg class="oc-search-input__icon-search" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9999 20.9999L16.6599 16.6599" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-search-input__label2">VIN, numer, sprzedawca...</span>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Filled","State=Focus","State=Disabled"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-search-input__label2":"Label2"};
const OPTIONAL_PARTS = {};

export default {
  title: "Forms/SearchInput",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «SearchInput»\n\nСобрано из спеки Figma `62:10460` (страница Core).\nКорень `<div>`, базовый класс `.oc-search-input`. Вариантов: 4. Непривязанных значений: 7 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Filled","Focus","Disabled"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
    "Label2": {
      description: "Свойство Figma «Label2» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Label": "VIN, numer, sprzedawca...",
    "Label2": "VIN, numer, sprzedawca...",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["State"]] ?? "<p>нет такой комбинации</p>";
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
