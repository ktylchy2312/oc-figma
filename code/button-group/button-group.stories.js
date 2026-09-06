// ButtonGroup — сгенерировано из components/button-group/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./button-group.css";

const VARIANTS = {
  "ButtonGroup": `
    <button class="oc-button-group" type="button">
      <div class="oc-button-group__secondary">
        <svg class="oc-button-group__secondary-icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-button-group__secondary-label">Dodaj samochód</span>
      </div>
      <div class="oc-button-group__primary">
        <svg class="oc-button-group__primary-icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="oc-button-group__primary-label">Dodaj samochód</span>
      </div>
    </button>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-button-group__secondary-label":"Label","oc-button-group__primary-label":"Label"};
const OPTIONAL_PARTS = {"oc-button-group__secondary-icon-plus":"Show Icon","oc-button-group__primary-icon-plus":"Show Icon"};

export default {
  title: "Actions/ButtonGroup",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Обойма кнопок: футер диалога, подвал формы. Существует ради того, чтобы порядок кнопок и зазор не решались заново на каждом экране. Главное действие справа.\n\nСобрано из спеки Figma `333:3749` (страница Core).\nКорень `<button>`, базовый класс `.oc-button-group`. Вариантов: 1." } },
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
    wrap.innerHTML = VARIANTS["ButtonGroup"] ?? "<p>нет такой комбинации</p>";
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
