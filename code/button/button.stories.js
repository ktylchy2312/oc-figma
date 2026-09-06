// Button — сгенерировано из components/button/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./button.css";

const VARIANTS = {
  "Primary|Default": `
    <button class="oc-button oc-button--variant-primary oc-button--state-default" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Primary|Hover": `
    <button class="oc-button oc-button--variant-primary oc-button--state-hover" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Primary|Pressed": `
    <button class="oc-button oc-button--variant-primary oc-button--state-pressed" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Primary|Disabled": `
    <button class="oc-button oc-button--variant-primary oc-button--state-disabled" type="button" disabled>
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Secondary|Default": `
    <button class="oc-button oc-button--variant-secondary oc-button--state-default" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Secondary|Hover": `
    <button class="oc-button oc-button--variant-secondary oc-button--state-hover" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Secondary|Pressed": `
    <button class="oc-button oc-button--variant-secondary oc-button--state-pressed" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Secondary|Disabled": `
    <button class="oc-button oc-button--variant-secondary oc-button--state-disabled" type="button" disabled>
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Danger|Default": `
    <button class="oc-button oc-button--variant-danger oc-button--state-default" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Danger|Hover": `
    <button class="oc-button oc-button--variant-danger oc-button--state-hover" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Danger|Pressed": `
    <button class="oc-button oc-button--variant-danger oc-button--state-pressed" type="button">
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `,
  "Danger|Disabled": `
    <button class="oc-button oc-button--variant-danger oc-button--state-disabled" type="button" disabled>
      <svg class="oc-button__icon-plus" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-button__label">Dodaj samochód</span>
    </button>
  `
};

const CAPTIONS = ["Variant=Primary, State=Default","Variant=Primary, State=Hover","Variant=Primary, State=Pressed","Variant=Primary, State=Disabled","Variant=Secondary, State=Default","Variant=Secondary, State=Hover","Variant=Secondary, State=Pressed","Variant=Secondary, State=Disabled","Variant=Danger, State=Default","Variant=Danger, State=Hover","Variant=Danger, State=Pressed","Variant=Danger, State=Disabled"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-button__label":"Label"};
const OPTIONAL_PARTS = {"oc-button__icon-plus":"Show Icon"};

export default {
  title: "Actions/Button",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «Button»\n\nСобрано из спеки Figma `27:1078` (страница Core).\nКорень `<button>`, базовый класс `.oc-button`. Вариантов: 12. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Variant": {
      description: "Свойство варианта Figma «Variant»",
      control: { type: "inline-radio" },
      options: ["Primary","Secondary","Danger"],
    },
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Pressed","Disabled"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
    "Show Icon": {
      description: "Свойство Figma «Show Icon» (boolean)",
      control: { type: "boolean" },
    },
  },
  args: {
    "Variant": "Primary",
    "State": "Default",
    "Label": "Dodaj samochód",
    "Show Icon": true,
  },
};

// Комбинация — это отдельный вариант Figma, поэтому переключатель выбирает разметку, а не
// навешивает класс: вариант может отличаться строением, а не только оформлением.
// Текст и переключаемые части накладываются поверх выбранного варианта.
export const Playground = {
  render: (args) => {
    const wrap = document.createElement("div");
    wrap.innerHTML = VARIANTS[args["Variant"] + "|" + args["State"]] ?? "<p>нет такой комбинации</p>";
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
