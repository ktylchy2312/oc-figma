// DocsHeader — сгенерировано из components/docs-header/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./docs-header.css";

const VARIANTS = {
  "Complete|False": `
    <div class="oc-docs-header oc-docs-header--status-complete oc-docs-header--expanded-false">
      <svg class="oc-docs-header__icon-document" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 9H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-docs-header__dokumenty">Dokumenty</span>
      <div class="oc-docs-header__chip">
        <span class="oc-docs-header__label">3/5</span>
      </div>
      <svg class="oc-docs-header__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Complete|True": `
    <div class="oc-docs-header oc-docs-header--status-complete oc-docs-header--expanded-true">
      <svg class="oc-docs-header__icon-document" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 9H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-docs-header__dokumenty">Dokumenty</span>
      <div class="oc-docs-header__chip">
        <span class="oc-docs-header__label">3/5</span>
      </div>
      <svg class="oc-docs-header__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Incomplete|False": `
    <div class="oc-docs-header oc-docs-header--status-incomplete oc-docs-header--expanded-false">
      <svg class="oc-docs-header__icon-warning" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7299 18L13.7299 3.99998C13.5555 3.69218 13.3025 3.43617 12.9969 3.25805C12.6912 3.07993 12.3437 2.98608 11.9899 2.98608C11.6361 2.98608 11.2887 3.07993 10.983 3.25805C10.6773 3.43617 10.4244 3.69218 10.2499 3.99998L2.24993 18C2.07361 18.3053 1.98116 18.6519 1.98194 19.0045C1.98272 19.3571 2.07671 19.7032 2.25438 20.0078C2.43204 20.3124 2.68708 20.5646 2.99362 20.7388C3.30017 20.9131 3.64734 21.0032 3.99993 21H19.9999C20.3508 20.9996 20.6955 20.9069 20.9992 20.7313C21.303 20.5556 21.5551 20.3031 21.7304 19.9991C21.9057 19.6951 21.998 19.3504 21.9979 18.9995C21.9978 18.6486 21.9054 18.3039 21.7299 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17H12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-docs-header__dokumenty">Dokumenty</span>
      <div class="oc-docs-header__chip">
        <span class="oc-docs-header__label">3/5</span>
      </div>
      <svg class="oc-docs-header__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `,
  "Incomplete|True": `
    <div class="oc-docs-header oc-docs-header--status-incomplete oc-docs-header--expanded-true">
      <svg class="oc-docs-header__icon-warning" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7299 18L13.7299 3.99998C13.5555 3.69218 13.3025 3.43617 12.9969 3.25805C12.6912 3.07993 12.3437 2.98608 11.9899 2.98608C11.6361 2.98608 11.2887 3.07993 10.983 3.25805C10.6773 3.43617 10.4244 3.69218 10.2499 3.99998L2.24993 18C2.07361 18.3053 1.98116 18.6519 1.98194 19.0045C1.98272 19.3571 2.07671 19.7032 2.25438 20.0078C2.43204 20.3124 2.68708 20.5646 2.99362 20.7388C3.30017 20.9131 3.64734 21.0032 3.99993 21H19.9999C20.3508 20.9996 20.6955 20.9069 20.9992 20.7313C21.303 20.5556 21.5551 20.3031 21.7304 19.9991C21.9057 19.6951 21.998 19.3504 21.9979 18.9995C21.9978 18.6486 21.9054 18.3039 21.7299 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17H12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-docs-header__dokumenty">Dokumenty</span>
      <div class="oc-docs-header__chip">
        <span class="oc-docs-header__label">3/5</span>
      </div>
      <svg class="oc-docs-header__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = ["Status=Complete, Expanded=False","Status=Complete, Expanded=True","Status=Incomplete, Expanded=False","Status=Incomplete, Expanded=True"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-docs-header__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/DocsHeader",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «DocsHeader»\n\nСобрано из спеки Figma `25:268` (страница Core).\nКорень `<div>`, базовый класс `.oc-docs-header`. Вариантов: 4. Непривязанных значений: 6 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Status": {
      description: "Свойство варианта Figma «Status»",
      control: { type: "inline-radio" },
      options: ["Complete","Incomplete"],
    },
    "Expanded": {
      description: "Свойство варианта Figma «Expanded»",
      control: { type: "inline-radio" },
      options: ["False","True"],
    },
    "Count": {
      description: "Свойство Figma «Count» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Status": "Complete",
    "Expanded": "False",
    "Count": "3/5",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Status"] + "|" + args["Expanded"]] ?? "<p>нет такой комбинации</p>";
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
