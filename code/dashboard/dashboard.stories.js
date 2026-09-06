// Dashboard — сгенерировано из components/dashboard/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./dashboard.css";

const VARIANTS = {
  "Dashboard": `
    <div class="oc-dashboard">
      <div class="oc-dashboard__dashboard-stat">
        <span class="oc-dashboard__dashboard-stat-cznie-w-toku">ŁĄCZNIE W TOKU</span>
        <span class="oc-dashboard__dashboard-stat-7">7</span>
      </div>
      <div class="oc-dashboard__dashboard-stat-2">
        <span class="oc-dashboard__ryzyko-oc">RYZYKO OC</span>
        <span class="oc-dashboard__6">6</span>
      </div>
      <div class="oc-dashboard__dashboard-stat-3">
        <span class="oc-dashboard__dashboard-stat-3-cznie-w-toku">ŁĄCZNIE W TOKU</span>
        <span class="oc-dashboard__dashboard-stat-3-7">7</span>
      </div>
      <div class="oc-dashboard__dashboard-stat-4">
        <span class="oc-dashboard__dashboard-stat-4-cznie-w-toku">ŁĄCZNIE W TOKU</span>
        <span class="oc-dashboard__dashboard-stat-4-7">7</span>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/Dashboard",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «Dashboard»\n\nСобрано из спеки Figma `448:8112` (страница Core).\nКорень `<div>`, базовый класс `.oc-dashboard`. Вариантов: 1. Непривязанных значений: 5 — см. маркеры TODO в CSS." } },
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
    wrap.innerHTML = VARIANTS["Dashboard"] ?? "<p>нет такой комбинации</p>";
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
