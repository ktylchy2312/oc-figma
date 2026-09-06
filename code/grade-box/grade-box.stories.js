// GradeBox — сгенерировано из components/grade-box/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./grade-box.css";

const VARIANTS = {
  "Inactive": `
    <div class="oc-grade-box oc-grade-box--state-inactive">
      <span class="oc-grade-box__label">A</span>
    </div>
  `,
  "Active": `
    <div class="oc-grade-box oc-grade-box--state-active">
      <span class="oc-grade-box__label">A</span>
    </div>
  `
};

const CAPTIONS = ["State=Inactive","State=Active"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-grade-box__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/GradeBox",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «GradeBox»\n\nСобрано из спеки Figma `395:3224` (страница Core).\nКорень `<div>`, базовый класс `.oc-grade-box`. Вариантов: 2. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Inactive","Active"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Inactive",
    "Label": "A",
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
