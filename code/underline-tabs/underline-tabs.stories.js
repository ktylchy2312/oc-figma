// UnderlineTabs — сгенерировано из components/underline-tabs/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./underline-tabs.css";

const VARIANTS = {
  "UnderlineTabs": `
    <div class="oc-underline-tabs">
      <div class="oc-underline-tabs__tab-1">
        <span class="oc-underline-tabs__tab-1-label">Ogólne</span>
        <div class="oc-underline-tabs__tab-1-underline"></div>
      </div>
      <div class="oc-underline-tabs__tab-2">
        <span class="oc-underline-tabs__tab-2-label">Ogólne</span>
        <div class="oc-underline-tabs__tab-2-underline"></div>
      </div>
      <div class="oc-underline-tabs__tab-3">
        <span class="oc-underline-tabs__tab-3-label">Ogólne</span>
        <div class="oc-underline-tabs__tab-3-underline"></div>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-underline-tabs__tab-1-label":"Label","oc-underline-tabs__tab-2-label":"Label","oc-underline-tabs__tab-3-label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/UnderlineTabs",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Обойма подчёркнутых вкладок: экран настроек. Нижняя грань принадлежит обойме, а не вкладке — иначе линия рвётся в зазорах между ними. Зазор 24: прототипные 28 не на шкале.\n\nСобрано из спеки Figma `335:3835` (страница Core).\nКорень `<div>`, базовый класс `.oc-underline-tabs`. Вариантов: 1. Непривязанных значений: 2 — см. маркеры TODO в CSS." } },
  },
  argTypes: {

  },
  args: {

  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS["UnderlineTabs"] ?? "<p>нет такой комбинации</p>";
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
