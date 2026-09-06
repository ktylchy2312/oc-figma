// ViewToggle — сгенерировано из components/view-toggle/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./view-toggle.css";

const VARIANTS = {
  "List": `
    <div class="oc-view-toggle oc-view-toggle--value-list">
      <div class="oc-view-toggle__lista">
        <svg class="oc-view-toggle__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-view-toggle__lista-label">Lista</span>
      </div>
      <div class="oc-view-toggle__etapy">
        <svg class="oc-view-toggle__icon-board" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.77778 2H2V9.77778H9.77778V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2H14.2222V9.77778H22V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.77778 14.2222H2V22H9.77778V14.2222Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 14.2222H14.2222V22H22V14.2222Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-view-toggle__etapy-label">Etapy</span>
      </div>
    </div>
  `,
  "Board": `
    <div class="oc-view-toggle oc-view-toggle--value-board">
      <div class="oc-view-toggle__lista">
        <svg class="oc-view-toggle__icon-list" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19H3.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-view-toggle__lista-label">Lista</span>
      </div>
      <div class="oc-view-toggle__etapy">
        <svg class="oc-view-toggle__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-view-toggle__etapy-label">Etapy</span>
      </div>
    </div>
  `
};

const CAPTIONS = ["Value=List","Value=Board"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-view-toggle__lista-label":"Label","oc-view-toggle__etapy-label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/ViewToggle",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Переключатель вида: список или доска. Обойма 40 с гранью и радиусом md, внутри два SegmentOption. Отступ обоймы 2, не 3: при 3 сегмент вылезал на грань по пикселю сверху и снизу (1+2+34+2+1 = 40). Начертание подписи одно на оба состояния — разная жирность меняет ширину подписи, и обойма дёргалась бы при переключении.\n\nСобрано из спеки Figma `401:7851` (страница Core).\nКорень `<div>`, базовый класс `.oc-view-toggle`. Вариантов: 2. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Value": {
      description: "Свойство варианта Figma «Value»",
      control: { type: "inline-radio" },
      options: ["List","Board"],
    },
  },
  args: {
    "Value": "List",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Value"]] ?? "<p>нет такой комбинации</p>";
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
