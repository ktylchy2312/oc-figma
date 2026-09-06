// EtapyRow — сгенерировано из components/etapy-row/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./etapy-row.css";

const VARIANTS = {
  "Default": `
    <div class="oc-etapy-row oc-etapy-row--state-default">
      <div class="oc-etapy-row__sygnatura">
        <div class="oc-etapy-row__pill">
          <span class="oc-etapy-row__3-5">3/5</span>
        </div>
      </div>
      <div class="oc-etapy-row__pojazd">
        <span class="oc-etapy-row__marka">Skoda</span>
        <span class="oc-etapy-row__model">Superb I 2003–2008</span>
      </div>
      <div class="oc-etapy-row__vin">
        <span class="oc-etapy-row__vin-vin">WVWZZZ1KZ21836546</span>
      </div>
      <div class="oc-etapy-row__kupiona">
        <span class="oc-etapy-row__kupiona-kupiona">03.08.2026</span>
      </div>
      <div class="oc-etapy-row__status-oc">
        <div class="oc-etapy-row__status-oc-status-oc">
          <div class="oc-etapy-row__status-oc-dot"></div>
          <span class="oc-etapy-row__aktywna">Aktywna</span>
        </div>
      </div>
      <div class="oc-etapy-row__oc-do">
        <span class="oc-etapy-row__oc-do-oc-do">03.08.2026</span>
      </div>
      <div class="oc-etapy-row__dokumenty">
        <div class="oc-etapy-row__doc-progress">
          <div class="oc-etapy-row__bar">
            <div class="oc-etapy-row__segment-1"></div>
            <div class="oc-etapy-row__segment-2"></div>
            <div class="oc-etapy-row__segment-3"></div>
            <div class="oc-etapy-row__segment-4"></div>
          </div>
          <span class="oc-etapy-row__count">2/4</span>
        </div>
      </div>
      <div class="oc-etapy-row__etapy">
        <div class="oc-etapy-row__etapy-etapy">
          <div class="oc-etapy-row__etapy-dot"></div>
          <span class="oc-etapy-row__robocza">Robocza</span>
        </div>
      </div>
    </div>
  `,
  "Hover": `
    <div class="oc-etapy-row oc-etapy-row--state-hover">
      <div class="oc-etapy-row__sygnatura">
        <div class="oc-etapy-row__pill">
          <span class="oc-etapy-row__3-5">3/5</span>
        </div>
      </div>
      <div class="oc-etapy-row__pojazd">
        <span class="oc-etapy-row__marka">Skoda</span>
        <span class="oc-etapy-row__model">Superb I 2003–2008</span>
      </div>
      <div class="oc-etapy-row__vin">
        <span class="oc-etapy-row__vin-vin">WVWZZZ1KZ21836546</span>
      </div>
      <div class="oc-etapy-row__kupiona">
        <span class="oc-etapy-row__kupiona-kupiona">03.08.2026</span>
      </div>
      <div class="oc-etapy-row__status-oc">
        <div class="oc-etapy-row__status-oc-status-oc">
          <div class="oc-etapy-row__status-oc-dot"></div>
          <span class="oc-etapy-row__aktywna">Aktywna</span>
        </div>
      </div>
      <div class="oc-etapy-row__oc-do">
        <span class="oc-etapy-row__oc-do-oc-do">03.08.2026</span>
      </div>
      <div class="oc-etapy-row__dokumenty">
        <div class="oc-etapy-row__doc-progress">
          <div class="oc-etapy-row__bar">
            <div class="oc-etapy-row__segment-1"></div>
            <div class="oc-etapy-row__segment-2"></div>
            <div class="oc-etapy-row__segment-3"></div>
            <div class="oc-etapy-row__segment-4"></div>
          </div>
          <span class="oc-etapy-row__count">2/4</span>
        </div>
      </div>
      <div class="oc-etapy-row__etapy">
        <div class="oc-etapy-row__etapy-etapy">
          <div class="oc-etapy-row__etapy-dot"></div>
          <span class="oc-etapy-row__robocza">Robocza</span>
        </div>
      </div>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Hover"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-etapy-row__marka":"Marka","oc-etapy-row__model":"Model","oc-etapy-row__vin-vin":"Vin","oc-etapy-row__kupiona-kupiona":"Kupiona","oc-etapy-row__oc-do-oc-do":"OcDo"};
const OPTIONAL_PARTS = {"oc-etapy-row__count":"Show Count"};

export default {
  title: "Stage/EtapyRow",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Wiersz rejestru pojazdów w obróbce. Używać wyłącznie wewnątrz EtapyTable.\n\nСобрано из спеки Figma `299:3068` (страница Core).\nКорень `<div>`, базовый класс `.oc-etapy-row`. Вариантов: 2. Непривязанных значений: 8 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover"],
    },
    "Marka": {
      description: "Свойство Figma «Marka» (text)",
      control: { type: "text" },
    },
    "Model": {
      description: "Свойство Figma «Model» (text)",
      control: { type: "text" },
    },
    "Vin": {
      description: "Свойство Figma «Vin» (text)",
      control: { type: "text" },
    },
    "Kupiona": {
      description: "Свойство Figma «Kupiona» (text)",
      control: { type: "text" },
    },
    "OcDo": {
      description: "Свойство Figma «OcDo» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Marka": "Skoda",
    "Model": "Superb I 2003–2008",
    "Vin": "WVWZZZ1KZ21836546",
    "Kupiona": "03.08.2026",
    "OcDo": "03.08.2026",
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
