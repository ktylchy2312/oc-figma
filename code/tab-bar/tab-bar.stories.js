// TabBar — сгенерировано из components/tab-bar/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./tab-bar.css";

const VARIANTS = {
  "TabBar": `
    <div class="oc-tab-bar">
      <div class="oc-tab-bar__tab">
        <div class="oc-tab-bar__tab-inner">
          <svg class="oc-tab-bar__tab-inner-icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-tab-bar__tab-inner-label">Lista</span>
        </div>
        <div class="oc-tab-bar__tab-spacer"></div>
        <div class="oc-tab-bar__tab-underline"></div>
      </div>
      <div class="oc-tab-bar__tab-2">
        <div class="oc-tab-bar__tab-2-inner">
          <svg class="oc-tab-bar__tab-2-inner-icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-tab-bar__tab-2-inner-label">Etapy</span>
        </div>
        <div class="oc-tab-bar__tab-2-spacer"></div>
        <div class="oc-tab-bar__tab-2-underline"></div>
      </div>
      <div class="oc-tab-bar__tab-3">
        <div class="oc-tab-bar__tab-3-inner">
          <svg class="oc-tab-bar__tab-3-inner-icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-tab-bar__tab-3-inner-label">Tab 3</span>
        </div>
        <div class="oc-tab-bar__tab-3-spacer"></div>
        <div class="oc-tab-bar__tab-3-underline"></div>
      </div>
      <div class="oc-tab-bar__tab-4">
        <div class="oc-tab-bar__tab-4-inner">
          <svg class="oc-tab-bar__tab-4-inner-icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-tab-bar__tab-4-inner-label">Tab 4</span>
        </div>
        <div class="oc-tab-bar__tab-4-spacer"></div>
        <div class="oc-tab-bar__tab-4-underline"></div>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-tab-bar__tab-inner-label":"Label","oc-tab-bar__tab-2-inner-label":"Label","oc-tab-bar__tab-3-inner-label":"Label","oc-tab-bar__tab-4-inner-label":"Label"};
const OPTIONAL_PARTS = {"oc-tab-bar__tab-3":"Show Tab 3","oc-tab-bar__tab-4":"Show Tab 4"};

export default {
  title: "Navigation/TabBar",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «TabBar»\n\nСобрано из спеки Figma `44:3315` (страница Core).\nКорень `<div>`, базовый класс `.oc-tab-bar`. Вариантов: 1. Непривязанных значений: 1 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Show Tab 3": {
      description: "Свойство Figma «Show Tab 3» (boolean)",
      control: { type: "boolean" },
    },
    "Show Tab 4": {
      description: "Свойство Figma «Show Tab 4» (boolean)",
      control: { type: "boolean" },
    },
    "Show Tab 5": {
      description: "Свойство Figma «Show Tab 5» (boolean)",
      control: { type: "boolean" },
    },
    "Show Tab 6": {
      description: "Свойство Figma «Show Tab 6» (boolean)",
      control: { type: "boolean" },
    },
    "Show Tab 7": {
      description: "Свойство Figma «Show Tab 7» (boolean)",
      control: { type: "boolean" },
    },
  },
  args: {
    "Show Tab 3": true,
    "Show Tab 4": true,
    "Show Tab 5": false,
    "Show Tab 6": false,
    "Show Tab 7": false,
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["TabBar"] ?? "<p>нет такой комбинации</p>";
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
