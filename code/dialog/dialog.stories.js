// Dialog — сгенерировано из components/dialog/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./dialog.css";

const VARIANTS = {
  "Dialog": `
    <div class="oc-dialog">
      <div class="oc-dialog__header">
        <span class="oc-dialog__title">Usunąć etap?</span>
      </div>
      <div class="oc-dialog__body">
        <span class="oc-dialog__text">Tej operacji nie można cofnąć.</span>
      </div>
      <div class="oc-dialog__footer">
        <div class="oc-dialog__actions">
          <div class="oc-dialog__secondary">
            <svg class="oc-dialog__secondary-icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="oc-dialog__secondary-label">Dodaj samochód</span>
          </div>
          <div class="oc-dialog__primary">
            <svg class="oc-dialog__primary-icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="oc-dialog__primary-label">Dodaj samochód</span>
          </div>
        </div>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-dialog__title":"Title","oc-dialog__text":"Text","oc-dialog__secondary-label":"Label","oc-dialog__primary-label":"Label"};
const OPTIONAL_PARTS = {"oc-dialog__secondary-icon-plus":"Show Icon","oc-dialog__primary-icon-plus":"Show Icon"};

export default {
  title: "Overlays/Dialog",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Оболочка диалога: шапка, тело, подвал. DeleteStageDialog собран как одна неразбираемая штука — из этого собираются все остальные: подтверждение, отправка, предпросмотр.\n\nСобрано из спеки Figma `334:3770` (страница Core).\nКорень `<div>`, базовый класс `.oc-dialog`. Вариантов: 1. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Title": {
      description: "Свойство Figma «Title» (text)",
      control: { type: "text" },
    },
    "Text": {
      description: "Свойство Figma «Text» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Title": "Usunąć etap?",
    "Text": "Tej operacji nie można cofnąć.",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["Dialog"] ?? "<p>нет такой комбинации</p>";
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
