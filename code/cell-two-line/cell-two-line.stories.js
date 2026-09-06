// CellTwoLine — сгенерировано из components/cell-two-line/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./cell-two-line.css";

const VARIANTS = {
  "CellTwoLine": `
    <div class="oc-cell-two-line">
      <span class="oc-cell-two-line__primary">Volkswagen Passat</span>
      <span class="oc-cell-two-line__secondary">WVWZZZ3CZJE123456</span>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-cell-two-line__primary":"Primary","oc-cell-two-line__secondary":"Secondary"};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/CellTwoLine",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Ячейка таблицы в две строки: главное сверху, уточнение снизу. Одинакова в обеих таблицах — поэтому общий атом, а не по копии на таблицу.\n\nСобрано из спеки Figma `333:3746` (страница Core).\nКорень `<div>`, базовый класс `.oc-cell-two-line`. Вариантов: 1." } },
  },
  argTypes: {
    "Primary": {
      description: "Свойство Figma «Primary» (text)",
      control: { type: "text" },
    },
    "Secondary": {
      description: "Свойство Figma «Secondary» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Primary": "Volkswagen Passat",
    "Secondary": "WVWZZZ3CZJE123456",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["CellTwoLine"] ?? "<p>нет такой комбинации</p>";
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
