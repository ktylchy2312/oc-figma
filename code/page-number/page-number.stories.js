// PageNumber — сгенерировано из components/page-number/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./page-number.css";

const VARIANTS = {
  "Default": `
    <div class="oc-page-number oc-page-number--state-default">
      <span class="oc-page-number__label">2</span>
    </div>
  `,
  "Hover": `
    <div class="oc-page-number oc-page-number--state-hover">
      <span class="oc-page-number__label">2</span>
    </div>
  `,
  "Active": `
    <div class="oc-page-number oc-page-number--state-active">
      <span class="oc-page-number__label">2</span>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Hover","State=Active"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-page-number__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/PageNumber",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «PageNumber»\n\nСобрано из спеки Figma `32:1224` (страница Core).\nКорень `<div>`, базовый класс `.oc-page-number`. Вариантов: 3. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Active"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Label": "2",
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
