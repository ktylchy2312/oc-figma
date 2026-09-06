// FormField — сгенерировано из components/form-field/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./form-field.css";

const VARIANTS = {
  "Text|Default": `
    <div class="oc-form-field oc-form-field--variant-text oc-form-field--state-default">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Text|Focus": `
    <div class="oc-form-field oc-form-field--variant-text oc-form-field--state-focus">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
        <div class="oc-form-field__caret"></div>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Text|Disabled": `
    <div class="oc-form-field oc-form-field--variant-text oc-form-field--state-disabled">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Text|Error": `
    <div class="oc-form-field oc-form-field--variant-text oc-form-field--state-error">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
      </div>
      <div class="oc-form-field__frame"></div>
      <span class="oc-form-field__podaj-poprawny-rok-4-cyfry">Podaj poprawny rok (4 cyfry).</span>
    </div>
  `,
  "Select|Default": `
    <div class="oc-form-field oc-form-field--variant-select oc-form-field--state-default">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
        <svg class="oc-form-field__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Select|Focus": `
    <div class="oc-form-field oc-form-field--variant-select oc-form-field--state-focus">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
        <div class="oc-form-field__caret"></div>
        <svg class="oc-form-field__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Select|Disabled": `
    <div class="oc-form-field oc-form-field--variant-select oc-form-field--state-disabled">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
        <svg class="oc-form-field__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Select|Error": `
    <div class="oc-form-field oc-form-field--variant-select oc-form-field--state-error">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
        <svg class="oc-form-field__icon-chevron-down" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="oc-form-field__frame"></div>
      <span class="oc-form-field__podaj-poprawny-rok-4-cyfry">Podaj poprawny rok (4 cyfry).</span>
    </div>
  `,
  "Textarea|Default": `
    <div class="oc-form-field oc-form-field--variant-textarea oc-form-field--state-default">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Textarea|Focus": `
    <div class="oc-form-field oc-form-field--variant-textarea oc-form-field--state-focus">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
        <div class="oc-form-field__caret"></div>
      </div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Textarea|Disabled": `
    <div class="oc-form-field oc-form-field--variant-textarea oc-form-field--state-disabled">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input"></div>
      <div class="oc-form-field__hint-gap"></div>
      <span class="oc-form-field__hint">Rok pierwszej rejestracji pojazdu.</span>
    </div>
  `,
  "Textarea|Error": `
    <div class="oc-form-field oc-form-field--variant-textarea oc-form-field--state-error">
      <div class="oc-form-field__label">
        <span class="oc-form-field__rok-produkcji">Rok produkcji</span>
      </div>
      <div class="oc-form-field__spacer"></div>
      <div class="oc-form-field__input">
        <span class="oc-form-field__placeholder">2004</span>
      </div>
      <div class="oc-form-field__frame"></div>
      <span class="oc-form-field__podaj-poprawny-rok-4-cyfry">Podaj poprawny rok (4 cyfry).</span>
    </div>
  `
};

const CAPTIONS = ["Variant=Text, State=Default","Variant=Text, State=Focus","Variant=Text, State=Disabled","Variant=Text, State=Error","Variant=Select, State=Default","Variant=Select, State=Focus","Variant=Select, State=Disabled","Variant=Select, State=Error","Variant=Textarea, State=Default","Variant=Textarea, State=Focus","Variant=Textarea, State=Disabled","Variant=Textarea, State=Error"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {"oc-form-field__hint":"WithHint"};

export default {
  title: "Forms/FormField",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «FormField»\n\nСобрано из спеки Figma `41:1838` (страница Core).\nКорень `<div>`, базовый класс `.oc-form-field`. Вариантов: 12. Непривязанных значений: 11 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "Variant": {
      description: "Свойство варианта Figma «Variant»",
      control: { type: "inline-radio" },
      options: ["Text","Select","Textarea"],
    },
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Focus","Disabled","Error"],
    },
    "Value": {
      description: "Свойство Figma «Value» (text)",
      control: { type: "text" },
    },
    "Filled": {
      description: "Свойство Figma «Filled» (boolean)",
      control: { type: "boolean" },
    },
    "Required": {
      description: "Свойство Figma «Required» (boolean)",
      control: { type: "boolean" },
    },
    "WithHint": {
      description: "Свойство Figma «WithHint» (boolean)",
      control: { type: "boolean" },
    },
  },
  args: {
    "Variant": "Text",
    "State": "Default",
    "Value": "2004",
    "Filled": false,
    "Required": false,
    "WithHint": true,
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
