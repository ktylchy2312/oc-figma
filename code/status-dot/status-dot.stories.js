// StatusDot — сгенерировано из components/status-dot/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./status-dot.css";

const VARIANTS = {
  "Success": `
    <div class="oc-status-dot oc-status-dot--tone-success"></div>
  `,
  "Warning": `
    <div class="oc-status-dot oc-status-dot--tone-warning"></div>
  `,
  "Error": `
    <div class="oc-status-dot oc-status-dot--tone-error"></div>
  `,
  "Neutral": `
    <div class="oc-status-dot oc-status-dot--tone-neutral"></div>
  `
};

const CAPTIONS = ["Tone=Success","Tone=Warning","Tone=Error","Tone=Neutral"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Feedback/StatusDot",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Точка статуса 8×8. Живёт внутри пилюли статуса и в строках таблиц. Цвет означает состояние, поэтому статус никогда не передаётся только ей — рядом всегда есть текст.\n\nСобрано из спеки Figma `323:3670` (страница Core).\nКорень `<div>`, базовый класс `.oc-status-dot`. Вариантов: 4. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Tone": {
      description: "Свойство варианта Figma «Tone»",
      control: { type: "inline-radio" },
      options: ["Success","Warning","Error","Neutral"],
    },
  },
  args: {
    "Tone": "Success",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Tone"]] ?? "<p>нет такой комбинации</p>";
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
