// DashboardStat — сгенерировано из components/dashboard-stat/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./dashboard-stat.css";

const VARIANTS = {
  "Neutral": `
    <div class="oc-dashboard-stat oc-dashboard-stat--variant-neutral">
      <span class="oc-dashboard-stat__cznie-w-toku">ŁĄCZNIE W TOKU</span>
      <span class="oc-dashboard-stat__7">7</span>
    </div>
  `,
  "Alert": `
    <div class="oc-dashboard-stat oc-dashboard-stat--variant-alert">
      <span class="oc-dashboard-stat__ryzyko-oc">RYZYKO OC</span>
      <span class="oc-dashboard-stat__6">6</span>
    </div>
  `
};

const CAPTIONS = ["Variant=Neutral","Variant=Alert"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/DashboardStat",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «DashboardStat»\n\nСобрано из спеки Figma `395:3055` (страница Core).\nКорень `<div>`, базовый класс `.oc-dashboard-stat`. Вариантов: 2. Непривязанных значений: 1 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Variant": {
      description: "Свойство варианта Figma «Variant»",
      control: { type: "inline-radio" },
      options: ["Neutral","Alert"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
    "Value": {
      description: "Свойство Figma «Value» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Variant": "Neutral",
    "Label": "ŁĄCZNIE W TOKU",
    "Value": "7",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Variant"]] ?? "<p>нет такой комбинации</p>";
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
