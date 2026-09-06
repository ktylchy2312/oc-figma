// StatusPill — сгенерировано из components/status-pill/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./status-pill.css";

const VARIANTS = {
  "Aktywna": `
    <div class="oc-status-pill oc-status-pill--status-aktywna">
      <div class="oc-status-pill__dot"></div>
      <span class="oc-status-pill__aktywna">Aktywna</span>
    </div>
  `,
  "Robocza": `
    <div class="oc-status-pill oc-status-pill--status-robocza">
      <div class="oc-status-pill__dot"></div>
      <span class="oc-status-pill__robocza">Robocza</span>
    </div>
  `,
  "Zamówiona": `
    <div class="oc-status-pill oc-status-pill--status-zam-wiona">
      <div class="oc-status-pill__dot"></div>
      <span class="oc-status-pill__zam-wiona">Zamówiona</span>
    </div>
  `,
  "Błąd": `
    <div class="oc-status-pill oc-status-pill--status-b-d">
      <div class="oc-status-pill__dot"></div>
      <span class="oc-status-pill__b-d">Błąd</span>
    </div>
  `
};

const CAPTIONS = ["Status=Aktywna","Status=Robocza","Status=Zamówiona","Status=Błąd"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Feedback/StatusPill",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Listing status of one offer. The pill is the status, so its label is baked per variant rather than exposed as a text slot. Colour is never the only carrier — the label always reads.\n\nСобрано из спеки Figma `194:2046` (страница Core).\nКорень `<div>`, базовый класс `.oc-status-pill`. Вариантов: 4. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Status": {
      description: "Свойство варианта Figma «Status»",
      control: { type: "inline-radio" },
      options: ["Aktywna","Robocza","Zamówiona","Błąd"],
    },
  },
  args: {
    "Status": "Aktywna",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Status"]] ?? "<p>нет такой комбинации</p>";
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
