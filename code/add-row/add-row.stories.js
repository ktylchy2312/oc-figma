// AddRow — сгенерировано из components/add-row/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./add-row.css";

const VARIANTS = {
  "Empty": `
    <button class="oc-add-row oc-add-row--state-empty" type="button">
      <div class="oc-add-row__input">
        <span class="oc-add-row__label">Nazwa dokumentu</span>
      </div>
      <div class="oc-add-row__add-button">
        <svg class="oc-add-row__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </button>
  `,
  "Filled": `
    <button class="oc-add-row oc-add-row--state-filled" type="button">
      <div class="oc-add-row__input">
        <span class="oc-add-row__label">Nazwa dokumentu</span>
      </div>
      <div class="oc-add-row__add-button">
        <svg class="oc-add-row__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </button>
  `
};

const CAPTIONS = ["State=Empty","State=Filled"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-add-row__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Actions/AddRow",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «AddRow»\n\nСобрано из спеки Figma `395:2738` (страница Core).\nКорень `<button>`, базовый класс `.oc-add-row`. Вариантов: 2. Непривязанных значений: 8 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Empty","Filled"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Empty",
    "Label": "Nazwa dokumentu",
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
