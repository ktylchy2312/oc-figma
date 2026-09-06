// SettingsCard — сгенерировано из components/settings-card/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./settings-card.css";

const VARIANTS = {
  "SettingsCard": `
    <div class="oc-settings-card">
      <span class="oc-settings-card__title">Synchronizacja</span>
      <div class="oc-settings-card__content"></div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-settings-card__title":"Title"};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/SettingsCard",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Панель с содержимым — она же общий контейнер приложения: инвентаризация звала его самым переиспользуемым и не находила в библиотеке. Заголовок необязателен.\n\nСобрано из спеки Figma `333:3765` (страница Core).\nКорень `<div>`, базовый класс `.oc-settings-card`. Вариантов: 1. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Title": {
      description: "Свойство Figma «Title» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "Title": "Synchronizacja",
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["SettingsCard"] ?? "<p>нет такой комбинации</p>";
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
