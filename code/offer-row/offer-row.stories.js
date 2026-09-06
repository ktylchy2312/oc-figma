// OfferRow — сгенерировано из components/offer-row/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./offer-row.css";

const VARIANTS = {
  "Default": `
    <div class="oc-offer-row oc-offer-row--state-default">
      <div class="oc-offer-row__zdj-cie">
        <div class="oc-offer-row__thumb">
          <svg class="oc-offer-row__glyph" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10.1333C9.17821 10.1333 10.1333 9.17818 10.1333 7.99997C10.1333 6.82176 9.17821 5.86664 8 5.86664C6.82179 5.86664 5.86667 6.82176 5.86667 7.99997C5.86667 9.17818 6.82179 10.1333 8 10.1333Z" style="stroke:var(--text-tertiary)" stroke-width="1.5" stroke-linecap="round"/><path d="M8 2.66669V4.00002M8 12V13.3334M2.66667 8.00002H4M12 8.00002H13.3333" style="stroke:var(--text-tertiary)" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
      </div>
      <div class="oc-offer-row__sygnatura">
        <div class="oc-offer-row__pill">
          <span class="oc-offer-row__3-5">3/5</span>
        </div>
      </div>
      <div class="oc-offer-row__nazwa">
        <span class="oc-offer-row__nazwa-nazwa">Drzwi tylne prawe</span>
      </div>
      <div class="oc-offer-row__pojazd">
        <span class="oc-offer-row__marka">Skoda</span>
        <span class="oc-offer-row__model">Superb I 2003–2008</span>
      </div>
      <div class="oc-offer-row__kategoria">
        <span class="oc-offer-row__kategoria-kategoria">Drzwi</span>
      </div>
      <div class="oc-offer-row__stan">
        <span class="oc-offer-row__stan-stan">1 szt.</span>
      </div>
      <div class="oc-offer-row__rynki">
        <div class="oc-offer-row__market-a">
          <span class="oc-offer-row__market-a-letter">A</span>
        </div>
        <div class="oc-offer-row__market-x">
          <span class="oc-offer-row__market-x-letter">X</span>
        </div>
        <div class="oc-offer-row__market-e">
          <span class="oc-offer-row__market-e-letter">E</span>
        </div>
        <div class="oc-offer-row__market-o">
          <span class="oc-offer-row__market-o-letter">O</span>
        </div>
      </div>
      <div class="oc-offer-row__cena">
        <span class="oc-offer-row__cena-cena">480 zł</span>
      </div>
      <div class="oc-offer-row__status">
        <div class="oc-offer-row__status-pill">
          <div class="oc-offer-row__dot"></div>
          <span class="oc-offer-row__robocza">Robocza</span>
        </div>
      </div>
    </div>
  `,
  "Hover": `
    <div class="oc-offer-row oc-offer-row--state-hover">
      <div class="oc-offer-row__zdj-cie">
        <div class="oc-offer-row__thumb">
          <svg class="oc-offer-row__glyph" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10.1333C9.17821 10.1333 10.1333 9.17818 10.1333 7.99997C10.1333 6.82176 9.17821 5.86664 8 5.86664C6.82179 5.86664 5.86667 6.82176 5.86667 7.99997C5.86667 9.17818 6.82179 10.1333 8 10.1333Z" style="stroke:var(--text-tertiary)" stroke-width="1.5" stroke-linecap="round"/><path d="M8 2.66669V4.00002M8 12V13.3334M2.66667 8.00002H4M12 8.00002H13.3333" style="stroke:var(--text-tertiary)" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
      </div>
      <div class="oc-offer-row__sygnatura">
        <div class="oc-offer-row__pill">
          <span class="oc-offer-row__3-5">3/5</span>
        </div>
      </div>
      <div class="oc-offer-row__nazwa">
        <span class="oc-offer-row__nazwa-nazwa">Drzwi tylne prawe</span>
      </div>
      <div class="oc-offer-row__pojazd">
        <span class="oc-offer-row__marka">Skoda</span>
        <span class="oc-offer-row__model">Superb I 2003–2008</span>
      </div>
      <div class="oc-offer-row__kategoria">
        <span class="oc-offer-row__kategoria-kategoria">Drzwi</span>
      </div>
      <div class="oc-offer-row__stan">
        <span class="oc-offer-row__stan-stan">1 szt.</span>
      </div>
      <div class="oc-offer-row__rynki">
        <div class="oc-offer-row__market-a">
          <span class="oc-offer-row__market-a-letter">A</span>
        </div>
        <div class="oc-offer-row__market-x">
          <span class="oc-offer-row__market-x-letter">X</span>
        </div>
        <div class="oc-offer-row__market-e">
          <span class="oc-offer-row__market-e-letter">E</span>
        </div>
        <div class="oc-offer-row__market-o">
          <span class="oc-offer-row__market-o-letter">O</span>
        </div>
      </div>
      <div class="oc-offer-row__cena">
        <span class="oc-offer-row__cena-cena">480 zł</span>
      </div>
      <div class="oc-offer-row__status">
        <div class="oc-offer-row__status-pill">
          <div class="oc-offer-row__dot"></div>
          <span class="oc-offer-row__robocza">Robocza</span>
        </div>
      </div>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Hover"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-offer-row__nazwa-nazwa":"Nazwa","oc-offer-row__marka":"Marka","oc-offer-row__model":"Model","oc-offer-row__kategoria-kategoria":"Kategoria","oc-offer-row__stan-stan":"Stan","oc-offer-row__market-a-letter":"Letter","oc-offer-row__market-x-letter":"Letter","oc-offer-row__market-e-letter":"Letter","oc-offer-row__market-o-letter":"Letter","oc-offer-row__cena-cena":"Cena"};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/OfferRow",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "One offer inside OfferTable. Never used standalone — the table owns the container fill, border, radius and the column widths. Hover is the only affordance the source gives a row; there is no pressed or selected state.\n\nСобрано из спеки Figma `194:2953` (страница MAG-KONTROL).\nКорень `<div>`, базовый класс `.oc-offer-row`. Вариантов: 2. Непривязанных значений: 22 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover"],
    },
    "Nazwa": {
      description: "Свойство Figma «Nazwa» (text)",
      control: { type: "text" },
    },
    "Marka": {
      description: "Свойство Figma «Marka» (text)",
      control: { type: "text" },
    },
    "Model": {
      description: "Свойство Figma «Model» (text)",
      control: { type: "text" },
    },
    "Kategoria": {
      description: "Свойство Figma «Kategoria» (text)",
      control: { type: "text" },
    },
    "Stan": {
      description: "Свойство Figma «Stan» (text)",
      control: { type: "text" },
    },
    "Cena": {
      description: "Свойство Figma «Cena» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Nazwa": "Drzwi tylne prawe",
    "Marka": "Skoda",
    "Model": "Superb I 2003–2008",
    "Kategoria": "Drzwi",
    "Stan": "1 szt.",
    "Cena": "480 zł",
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
