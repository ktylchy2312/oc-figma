// InlineNote — сгенерировано из components/inline-note/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./inline-note.css";

const VARIANTS = {
  "InlineNote": `
    <div class="oc-inline-note">
      <span class="oc-inline-note__text">Brakuje: 2 dokumentów</span>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-inline-note__text":"Text"};
const OPTIONAL_PARTS = {};

export default {
  title: "Feedback/InlineNote",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Врезка в диалоге: чего не хватает, что произойдёт. Не для ошибок — у ошибки свой тон и своя иконка. Ширина тянется по родителю.\n\nСобрано из спеки Figma `333:3744` (страница Core).\nКорень `<div>`, базовый класс `.oc-inline-note`. Вариантов: 1. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Text": {
      description: "Свойство Figma «Text» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Text": "Brakuje: 2 dokumentów",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["InlineNote"] ?? "<p>нет такой комбинации</p>";
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
