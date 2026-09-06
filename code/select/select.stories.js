// Select — сгенерировано из components/select/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./select.css";

const VARIANTS = {
  "Default": `
    <div class="oc-select oc-select--state-default">
      <span class="oc-select__value">Wybierz</span>
      <svg class="oc-select__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Filled": `
    <div class="oc-select oc-select--state-filled">
      <span class="oc-select__value">Wybierz</span>
      <svg class="oc-select__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Focus": `
    <div class="oc-select oc-select--state-focus">
      <span class="oc-select__value">Wybierz</span>
      <svg class="oc-select__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Disabled": `
    <div class="oc-select oc-select--state-disabled">
      <span class="oc-select__value">Wybierz</span>
      <svg class="oc-select__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Filled","State=Focus","State=Disabled"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-select__value":"Value"};
const OPTIONAL_PARTS = {};

export default {
  title: "Forms/Select",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Поле выбора. Геометрия общая с SearchInput и FilterButton — одна семья контролов высотой 40. Filled означает выбранное значение против подсказки и различается цветом текста, а не рамкой.\n\nСобрано из спеки Figma `333:3738` (страница Core).\nКорень `<div>`, базовый класс `.oc-select`. Вариантов: 4. Непривязанных значений: 5 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Filled","Focus","Disabled"],
    },
    "Value": {
      description: "Свойство Figma «Value» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Value": "Wybierz",
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
