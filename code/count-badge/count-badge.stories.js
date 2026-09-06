// CountBadge — сгенерировано из components/count-badge/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./count-badge.css";

const VARIANTS = {
  "Accent": `
    <div class="oc-count-badge oc-count-badge--tone-accent">
      <span class="oc-count-badge__count">3</span>
    </div>
  `,
  "Error": `
    <div class="oc-count-badge oc-count-badge--tone-error">
      <span class="oc-count-badge__count">3</span>
    </div>
  `,
  "Warning": `
    <div class="oc-count-badge oc-count-badge--tone-warning">
      <span class="oc-count-badge__count">3</span>
    </div>
  `
};

const CAPTIONS = ["Tone=Accent","Tone=Error","Tone=Warning"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-count-badge__count":"Count"};
const OPTIONAL_PARTS = {};

export default {
  title: "Feedback/CountBadge",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Счётчик на углу иконки: требует внимания. Не путать с CountChip — тот стоит в заголовке колонки и считает содержимое. Вешается абсолютом, поэтому у родителя должна быть авторазметка.\n\nСобрано из спеки Figma `327:3703` (страница Core).\nКорень `<div>`, базовый класс `.oc-count-badge`. Вариантов: 3. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Tone": {
      description: "Свойство варианта Figma «Tone»",
      control: { type: "inline-radio" },
      options: ["Accent","Error","Warning"],
    },
    "Count": {
      description: "Свойство Figma «Count» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Tone": "Accent",
    "Count": "3",
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
