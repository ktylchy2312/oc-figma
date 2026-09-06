// MarketChip — сгенерировано из components/market-chip/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./market-chip.css";

const VARIANTS = {
  "On": `
    <div class="oc-market-chip oc-market-chip--state-on">
      <span class="oc-market-chip__letter">A</span>
    </div>
  `,
  "Off": `
    <div class="oc-market-chip oc-market-chip--state-off">
      <span class="oc-market-chip__letter">A</span>
    </div>
  `
};

const CAPTIONS = ["State=On","State=Off"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-market-chip__letter":"Letter"};
const OPTIONAL_PARTS = {};

export default {
  title: "Forms/MarketChip",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "One marketplace square inside an OfferRow. On = the part is listed there. The four markets (A Allegro, X OLX, E eBay PL, O Ovoko) are fixed — never re-letter them per row.\n\nСобрано из спеки Figma `194:2029` (страница MAG-KONTROL).\nКорень `<div>`, базовый класс `.oc-market-chip`. Вариантов: 2. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["On","Off"],
    },
    "Letter": {
      description: "Свойство Figma «Letter» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "On",
    "Letter": "A",
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
