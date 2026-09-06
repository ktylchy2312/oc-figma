// Tab — сгенерировано из components/tab/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./tab.css";

const VARIANTS = {
  "Idle|Default": `
    <div class="oc-tab oc-tab--active-idle oc-tab--state-default">
      <div class="oc-tab__inner">
        <svg class="oc-tab__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-tab__label">Lista</span>
      </div>
      <div class="oc-tab__spacer"></div>
      <div class="oc-tab__underline"></div>
    </div>
  `,
  "Idle|Hover": `
    <div class="oc-tab oc-tab--active-idle oc-tab--state-hover">
      <div class="oc-tab__inner">
        <svg class="oc-tab__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-tab__label">Lista</span>
      </div>
      <div class="oc-tab__spacer"></div>
      <div class="oc-tab__underline"></div>
    </div>
  `,
  "Idle|Pressed": `
    <div class="oc-tab oc-tab--active-idle oc-tab--state-pressed">
      <div class="oc-tab__inner">
        <svg class="oc-tab__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-tab__label">Lista</span>
      </div>
      <div class="oc-tab__spacer"></div>
      <div class="oc-tab__underline"></div>
    </div>
  `,
  "Active|Default": `
    <div class="oc-tab oc-tab--active-active oc-tab--state-default">
      <div class="oc-tab__inner">
        <svg class="oc-tab__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-tab__label">Lista</span>
      </div>
      <div class="oc-tab__spacer"></div>
      <div class="oc-tab__underline"></div>
    </div>
  `,
  "Active|Hover": `
    <div class="oc-tab oc-tab--active-active oc-tab--state-hover">
      <div class="oc-tab__inner">
        <svg class="oc-tab__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-tab__label">Lista</span>
      </div>
      <div class="oc-tab__spacer"></div>
      <div class="oc-tab__underline"></div>
    </div>
  `,
  "Active|Pressed": `
    <div class="oc-tab oc-tab--active-active oc-tab--state-pressed">
      <div class="oc-tab__inner">
        <svg class="oc-tab__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-tab__label">Lista</span>
      </div>
      <div class="oc-tab__spacer"></div>
      <div class="oc-tab__underline"></div>
    </div>
  `
};

const CAPTIONS = ["Active=Idle, State=Default","Active=Idle, State=Hover","Active=Idle, State=Pressed","Active=Active, State=Default","Active=Active, State=Hover","Active=Active, State=Pressed"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-tab__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/Tab",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «Tab»\n\nСобрано из спеки Figma `32:1415` (страница Core).\nКорень `<div>`, базовый класс `.oc-tab`. Вариантов: 6. Непривязанных значений: 4 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Active": {
      description: "Свойство варианта Figma «Active»",
      control: { type: "inline-radio" },
      options: ["Idle","Active"],
    },
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Pressed"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Active": "Idle",
    "State": "Default",
    "Label": "Lista",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Active"] + "|" + args["State"]] ?? "<p>нет такой комбинации</p>";
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
