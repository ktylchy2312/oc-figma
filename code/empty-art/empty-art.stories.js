// EmptyArt — сгенерировано из components/empty-art/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./empty-art.css";

const VARIANTS = {
  "EmptyArt": `
    <div class="oc-empty-art">
      <div class="oc-empty-art__doc1"></div>
      <div class="oc-empty-art__doc2"></div>
      <svg class="oc-empty-art__cursor" aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 11C24 6.58172 20.4183 3 16 3C11.5817 3 8 6.58172 8 11V21C8 25.4183 11.5817 29 16 29C20.4183 29 24 25.4183 24 21V11Z" style="fill:var(--surface-default);stroke:var(--text-secondary)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12H24" style="stroke:var(--text-secondary)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3V12" style="stroke:var(--text-secondary)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.40002 11.4V9.00002C8.40002 6.98438 9.20074 5.05129 10.626 3.62601C12.0513 2.20074 13.9844 1.40002 16 1.40002" style="fill:var(--accent-default)"/><path d="M8 12V9C8 6.87827 8.84285 4.84344 10.3431 3.34315C11.8434 1.84285 13.8783 1 16 1" style="stroke:var(--accent-default)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Feedback/EmptyArt",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «EmptyArt»\n\nСобрано из спеки Figma `32:1532` (страница Core).\nКорень `<div>`, базовый класс `.oc-empty-art`. Вариантов: 1. Непривязанных значений: 10 — см. маркеры TODO в CSS." } },
  },
  argTypes: {

  },
  args: {

  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["EmptyArt"] ?? "<p>нет такой комбинации</p>";
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
