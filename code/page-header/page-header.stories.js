// PageHeader — сгенерировано из components/page-header/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./page-header.css";

const VARIANTS = {
  "PageHeader": `
    <div class="oc-page-header">
      <div class="oc-page-header__titles">
        <span class="oc-page-header__title">Etapy</span>
        <span class="oc-page-header__subtitle">12 pojazdów w toku</span>
      </div>
      <div class="oc-page-header__actions"></div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-page-header__title":"Title","oc-page-header__subtitle":"Subtitle"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/PageHeader",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Шапка экрана: заголовок, необязательный подзаголовок, слот действий справа. Есть на всех четырёх экранах и до сих пор рисовался заново на каждом.\n\nСобрано из спеки Figma `333:3760` (страница Core).\nКорень `<div>`, базовый класс `.oc-page-header`. Вариантов: 1. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Title": {
      description: "Свойство Figma «Title» (text)",
      control: { type: "text" },
    },
    "Subtitle": {
      description: "Свойство Figma «Subtitle» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Title": "Etapy",
    "Subtitle": "12 pojazdów w toku",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["PageHeader"] ?? "<p>нет такой комбинации</p>";
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
