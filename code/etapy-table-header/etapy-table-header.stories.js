// EtapyTableHeader — сгенерировано из components/etapy-table-header/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./etapy-table-header.css";

const VARIANTS = {
  "EtapyTableHeader": `
    <div class="oc-etapy-table-header">
      <div class="oc-etapy-table-header__sygnatura">
        <span class="oc-etapy-table-header__sygnatura-sygnatura">SYGNATURA</span>
      </div>
      <div class="oc-etapy-table-header__pojazd">
        <span class="oc-etapy-table-header__pojazd-pojazd">POJAZD</span>
      </div>
      <div class="oc-etapy-table-header__vin">
        <span class="oc-etapy-table-header__vin-vin">VIN</span>
      </div>
      <div class="oc-etapy-table-header__kupiona">
        <span class="oc-etapy-table-header__kupiona-kupiona">KUPIONA</span>
      </div>
      <div class="oc-etapy-table-header__status-oc">
        <span class="oc-etapy-table-header__status-oc-status-oc">STATUS OC</span>
      </div>
      <div class="oc-etapy-table-header__oc-do">
        <span class="oc-etapy-table-header__oc-do-oc-do">OC DO</span>
      </div>
      <div class="oc-etapy-table-header__dokumenty">
        <span class="oc-etapy-table-header__dokumenty-dokumenty">DOKUMENTY</span>
      </div>
      <div class="oc-etapy-table-header__etapy">
        <span class="oc-etapy-table-header__etapy-etapy">ETAPY</span>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Stage/EtapyTableHeader",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Wiersz nagłówka dla EtapyTable. 8 kolumn, szerokość 1660. Nie używać samodzielnie.\n\nСобрано из спеки Figma `448:11277` (страница Core).\nКорень `<div>`, базовый класс `.oc-etapy-table-header`. Вариантов: 1. Непривязанных значений: 4 — см. маркеры TODO в CSS." } },
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
    wrap.innerHTML = VARIANTS["EtapyTableHeader"] ?? "<p>нет такой комбинации</p>";
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
