// FilterButton — сгенерировано из components/filter-button/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./filter-button.css";

const VARIANTS = {
  "Default": `
    <button class="oc-filter-button oc-filter-button--state-default" type="button">
      <svg class="oc-filter-button__icon-filter" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99988 20C9.9998 20.1858 10.0515 20.368 10.1492 20.5261C10.2469 20.6842 10.3867 20.8119 10.5529 20.895L12.5529 21.895C12.7054 21.9712 12.8748 22.0072 13.0451 21.9994C13.2154 21.9917 13.3809 21.9406 13.5259 21.8509C13.6709 21.7613 13.7905 21.636 13.8735 21.4871C13.9565 21.3381 14 21.1705 13.9999 21V14C14.0001 13.5044 14.1843 13.0265 14.5169 12.659L21.7399 4.67C21.8693 4.52656 21.9545 4.34868 21.985 4.15788C22.0155 3.96708 21.9901 3.77153 21.9118 3.59487C21.8335 3.41822 21.7057 3.26802 21.5439 3.16245C21.3821 3.05688 21.1931 3.00046 20.9999 3H2.99988C2.80649 3.00007 2.61727 3.05622 2.45513 3.16164C2.293 3.26706 2.16491 3.41723 2.08639 3.59396C2.00786 3.7707 1.98227 3.96641 2.01271 4.15739C2.04315 4.34837 2.12831 4.52643 2.25788 4.67L9.48288 12.659C9.81542 13.0265 9.99966 13.5044 9.99988 14V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-filter-button__label">Wszystkie</span>
      <svg class="oc-filter-button__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `,
  "Active": `
    <button class="oc-filter-button oc-filter-button--state-active" type="button">
      <svg class="oc-filter-button__icon-filter" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99988 20C9.9998 20.1858 10.0515 20.368 10.1492 20.5261C10.2469 20.6842 10.3867 20.8119 10.5529 20.895L12.5529 21.895C12.7054 21.9712 12.8748 22.0072 13.0451 21.9994C13.2154 21.9917 13.3809 21.9406 13.5259 21.8509C13.6709 21.7613 13.7905 21.636 13.8735 21.4871C13.9565 21.3381 14 21.1705 13.9999 21V14C14.0001 13.5044 14.1843 13.0265 14.5169 12.659L21.7399 4.67C21.8693 4.52656 21.9545 4.34868 21.985 4.15788C22.0155 3.96708 21.9901 3.77153 21.9118 3.59487C21.8335 3.41822 21.7057 3.26802 21.5439 3.16245C21.3821 3.05688 21.1931 3.00046 20.9999 3H2.99988C2.80649 3.00007 2.61727 3.05622 2.45513 3.16164C2.293 3.26706 2.16491 3.41723 2.08639 3.59396C2.00786 3.7707 1.98227 3.96641 2.01271 4.15739C2.04315 4.34837 2.12831 4.52643 2.25788 4.67L9.48288 12.659C9.81542 13.0265 9.99966 13.5044 9.99988 14V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-filter-button__label">Wszystkie</span>
      <svg class="oc-filter-button__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `
};

const CAPTIONS = ["State=Default","State=Active"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-filter-button__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Actions/FilterButton",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «FilterButton»\n\nСобрано из спеки Figma `79:10531` (страница MAG-KONTROL).\nКорень `<button>`, базовый класс `.oc-filter-button`. Вариантов: 2. Непривязанных значений: 4 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Active"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Label": "Wszystkie",
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
