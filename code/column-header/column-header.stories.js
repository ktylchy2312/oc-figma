// ColumnHeader — сгенерировано из components/column-header/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./column-header.css";

const VARIANTS = {
  "Default": `
    <div class="oc-column-header oc-column-header--state-default">
      <span class="oc-column-header__label">KUPIONA</span>
      <div class="oc-column-header__icon-button">
        <svg class="oc-column-header__icon-edit" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1739 6.81189C21.7026 6.28332 21.9997 5.56636 21.9998 4.81875C21.9999 4.07113 21.703 3.3541 21.1744 2.82539C20.6459 2.29668 19.9289 1.99961 19.1813 1.99951C18.4337 1.99942 17.7166 2.29632 17.1879 2.82489L3.84193 16.1739C3.60975 16.4054 3.43805 16.6904 3.34193 17.0039L2.02093 21.3559C1.99509 21.4424 1.99314 21.5342 2.01529 21.6217C2.03743 21.7092 2.08285 21.7891 2.14673 21.8529C2.21061 21.9167 2.29055 21.962 2.37809 21.984C2.46563 22.006 2.55749 22.0039 2.64393 21.9779L6.99693 20.6579C7.3101 20.5626 7.59511 20.392 7.82693 20.1609L21.1739 6.81189Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="oc-column-header__icon-button-2">
        <svg class="oc-column-header__icon-button-2-icon-trash" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>
  `,
  "Edit": `
    <div class="oc-column-header oc-column-header--state-edit">
      <div class="oc-column-header__input">
        <span class="oc-column-header__input-label">KUPIONA</span>
      </div>
      <div class="oc-column-header__icon-button">
        <svg class="oc-column-header__icon-button-icon-trash" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Edit"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-column-header__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Stage/ColumnHeader",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «ColumnHeader»\n\nСобрано из спеки Figma `395:2624` (страница Core).\nКорень `<div>`, базовый класс `.oc-column-header`. Вариантов: 2. Непривязанных значений: 11 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Edit"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Label": "KUPIONA",
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
