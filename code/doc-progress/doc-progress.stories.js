// DocProgress — сгенерировано из components/doc-progress/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./doc-progress.css";

const VARIANTS = {
  "0": `
    <div class="oc-doc-progress oc-doc-progress--filled-0">
      <div class="oc-doc-progress__bar">
        <div class="oc-doc-progress__segment-1"></div>
        <div class="oc-doc-progress__segment-2"></div>
        <div class="oc-doc-progress__segment-3"></div>
        <div class="oc-doc-progress__segment-4"></div>
      </div>
      <span class="oc-doc-progress__count">0/4</span>
    </div>
  `,
  "1": `
    <div class="oc-doc-progress oc-doc-progress--filled-1">
      <div class="oc-doc-progress__bar">
        <div class="oc-doc-progress__segment-1"></div>
        <div class="oc-doc-progress__segment-2"></div>
        <div class="oc-doc-progress__segment-3"></div>
        <div class="oc-doc-progress__segment-4"></div>
      </div>
      <span class="oc-doc-progress__count">1/4</span>
    </div>
  `,
  "2": `
    <div class="oc-doc-progress oc-doc-progress--filled-2">
      <div class="oc-doc-progress__bar">
        <div class="oc-doc-progress__segment-1"></div>
        <div class="oc-doc-progress__segment-2"></div>
        <div class="oc-doc-progress__segment-3"></div>
        <div class="oc-doc-progress__segment-4"></div>
      </div>
      <span class="oc-doc-progress__count">2/4</span>
    </div>
  `,
  "3": `
    <div class="oc-doc-progress oc-doc-progress--filled-3">
      <div class="oc-doc-progress__bar">
        <div class="oc-doc-progress__segment-1"></div>
        <div class="oc-doc-progress__segment-2"></div>
        <div class="oc-doc-progress__segment-3"></div>
        <div class="oc-doc-progress__segment-4"></div>
      </div>
      <span class="oc-doc-progress__count">3/4</span>
    </div>
  `,
  "4": `
    <div class="oc-doc-progress oc-doc-progress--filled-4">
      <div class="oc-doc-progress__bar">
        <div class="oc-doc-progress__segment-1"></div>
        <div class="oc-doc-progress__segment-2"></div>
        <div class="oc-doc-progress__segment-3"></div>
        <div class="oc-doc-progress__segment-4"></div>
      </div>
      <span class="oc-doc-progress__count">4/4</span>
    </div>
  `
};

const CAPTIONS = ["Filled=0","Filled=1","Filled=2","Filled=3","Filled=4"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {"oc-doc-progress__count":"Show Count"};

export default {
  title: "Cards/DocProgress",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «DocProgress»\n\nСобрано из спеки Figma `299:2127` (страница Core).\nКорень `<div>`, базовый класс `.oc-doc-progress`. Вариантов: 5. Непривязанных значений: 8 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Filled": {
      description: "Свойство варианта Figma «Filled»",
      control: { type: "inline-radio" },
      options: ["0","1","2","3","4"],
    },
    "Show Count": {
      description: "Свойство Figma «Show Count» (boolean)",
      control: { type: "boolean" },
    },
  },
  args: {
    "Filled": "0",
    "Show Count": true,
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Filled"]] ?? "<p>нет такой комбинации</p>";
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
