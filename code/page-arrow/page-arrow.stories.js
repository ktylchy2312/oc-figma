// PageArrow — сгенерировано из components/page-arrow/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./page-arrow.css";

const VARIANTS = {
  "Prev|Default": `
    <div class="oc-page-arrow oc-page-arrow--direction-prev oc-page-arrow--state-default">
      <svg class="oc-page-arrow__icon-chevron-left" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Prev|Hover": `
    <div class="oc-page-arrow oc-page-arrow--direction-prev oc-page-arrow--state-hover">
      <svg class="oc-page-arrow__icon-chevron-left" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Prev|Pressed": `
    <div class="oc-page-arrow oc-page-arrow--direction-prev oc-page-arrow--state-pressed">
      <svg class="oc-page-arrow__icon-chevron-left" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Prev|Disabled": `
    <div class="oc-page-arrow oc-page-arrow--direction-prev oc-page-arrow--state-disabled">
      <svg class="oc-page-arrow__icon-chevron-left" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Next|Default": `
    <div class="oc-page-arrow oc-page-arrow--direction-next oc-page-arrow--state-default">
      <svg class="oc-page-arrow__icon-chevron-right" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Next|Hover": `
    <div class="oc-page-arrow oc-page-arrow--direction-next oc-page-arrow--state-hover">
      <svg class="oc-page-arrow__icon-chevron-right" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Next|Pressed": `
    <div class="oc-page-arrow oc-page-arrow--direction-next oc-page-arrow--state-pressed">
      <svg class="oc-page-arrow__icon-chevron-right" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Next|Disabled": `
    <div class="oc-page-arrow oc-page-arrow--direction-next oc-page-arrow--state-disabled">
      <svg class="oc-page-arrow__icon-chevron-right" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = ["Direction=Prev, State=Default","Direction=Prev, State=Hover","Direction=Prev, State=Pressed","Direction=Prev, State=Disabled","Direction=Next, State=Default","Direction=Next, State=Hover","Direction=Next, State=Pressed","Direction=Next, State=Disabled"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/PageArrow",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «PageArrow»\n\nСобрано из спеки Figma `31:1204` (страница Core).\nКорень `<div>`, базовый класс `.oc-page-arrow`. Вариантов: 8. Непривязанных значений: 5 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Direction": {
      description: "Свойство варианта Figma «Direction»",
      control: { type: "inline-radio" },
      options: ["Prev","Next"],
    },
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Pressed","Disabled"],
    },
  },
  args: {
    "Direction": "Prev",
    "State": "Default",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Direction"] + "|" + args["State"]] ?? "<p>нет такой комбинации</p>";
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
