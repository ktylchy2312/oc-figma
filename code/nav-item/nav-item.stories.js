// NavItem — сгенерировано из components/nav-item/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./nav-item.css";

const VARIANTS = {
  "Default|False": `
    <div class="oc-nav-item oc-nav-item--state-default oc-nav-item--collapsed-false">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-nav-item__label">Etapy</span>
    </div>
  `,
  "Hover|False": `
    <div class="oc-nav-item oc-nav-item--state-hover oc-nav-item--collapsed-false">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-nav-item__label">Etapy</span>
    </div>
  `,
  "Pressed|False": `
    <div class="oc-nav-item oc-nav-item--state-pressed oc-nav-item--collapsed-false">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-nav-item__label">Etapy</span>
    </div>
  `,
  "Active|False": `
    <div class="oc-nav-item oc-nav-item--state-active oc-nav-item--collapsed-false">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-nav-item__label">Etapy</span>
    </div>
  `,
  "Default|True": `
    <div class="oc-nav-item oc-nav-item--state-default oc-nav-item--collapsed-true">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Hover|True": `
    <div class="oc-nav-item oc-nav-item--state-hover oc-nav-item--collapsed-true">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Pressed|True": `
    <div class="oc-nav-item oc-nav-item--state-pressed oc-nav-item--collapsed-true">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Active|True": `
    <div class="oc-nav-item oc-nav-item--state-active oc-nav-item--collapsed-true">
      <svg class="oc-nav-item__icon-grid" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = ["State=Default, Collapsed=False","State=Hover, Collapsed=False","State=Pressed, Collapsed=False","State=Active, Collapsed=False","State=Default, Collapsed=True","State=Hover, Collapsed=True","State=Pressed, Collapsed=True","State=Active, Collapsed=True"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-nav-item__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/NavItem",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «NavItem»\n\nСобрано из спеки Figma `32:1311` (страница Core).\nКорень `<div>`, базовый класс `.oc-nav-item`. Вариантов: 8. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Pressed","Active"],
    },
    "Collapsed": {
      description: "Свойство варианта Figma «Collapsed»",
      control: { type: "inline-radio" },
      options: ["False","True"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Collapsed": "False",
    "Label": "Etapy",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["State"] + "|" + args["Collapsed"]] ?? "<p>нет такой комбинации</p>";
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
