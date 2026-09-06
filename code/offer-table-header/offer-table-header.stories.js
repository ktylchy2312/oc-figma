// OfferTableHeader — сгенерировано из components/offer-table-header/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./offer-table-header.css";

const VARIANTS = {
  "OfferTableHeader": `
    <div class="oc-offer-table-header">
      <div class="oc-offer-table-header__zdj-cie">
        <span class="oc-offer-table-header__zdj-cie-zdj-cie">ZDJĘCIE</span>
      </div>
      <div class="oc-offer-table-header__sygnatura">
        <span class="oc-offer-table-header__sygnatura-sygnatura">SYGNATURA</span>
      </div>
      <div class="oc-offer-table-header__nazwa">
        <span class="oc-offer-table-header__nazwa-nazwa">NAZWA</span>
      </div>
      <div class="oc-offer-table-header__pojazd">
        <span class="oc-offer-table-header__pojazd-pojazd">POJAZD</span>
      </div>
      <div class="oc-offer-table-header__kategoria">
        <span class="oc-offer-table-header__kategoria-kategoria">KATEGORIA</span>
      </div>
      <div class="oc-offer-table-header__stan-mag">
        <span class="oc-offer-table-header__stan-mag-stan-mag">STAN MAG.</span>
      </div>
      <div class="oc-offer-table-header__rynki">
        <span class="oc-offer-table-header__rynki-rynki">RYNKI</span>
      </div>
      <div class="oc-offer-table-header__cena">
        <span class="oc-offer-table-header__cena-cena">CENA</span>
      </div>
      <div class="oc-offer-table-header__status">
        <span class="oc-offer-table-header__status-status">STATUS</span>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/OfferTableHeader",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Column header for OfferTable. Its column track must stay identical to OfferRow — widths live on the table, never per row.\n\nСобрано из спеки Figma `194:2066` (страница MAG-KONTROL).\nКорень `<div>`, базовый класс `.oc-offer-table-header`. Вариантов: 1. Непривязанных значений: 11 — см. маркеры TODO в CSS." } },
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
    wrap.innerHTML = VARIANTS["OfferTableHeader"] ?? "<p>нет такой комбинации</p>";
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
