// ArchiveRow — сгенерировано из components/archive-row/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./archive-row.css";

const VARIANTS = {
  "Default": `
    <div class="oc-archive-row oc-archive-row--state-default">
      <div class="oc-archive-row__sygnatura">
        <div class="oc-archive-row__pill">
          <span class="oc-archive-row__3-5">3/5</span>
        </div>
      </div>
      <div class="oc-archive-row__pojazd">
        <span class="oc-archive-row__marka">Skoda</span>
        <span class="oc-archive-row__model">Superb I 2003–2008</span>
      </div>
      <div class="oc-archive-row__vin">
        <span class="oc-archive-row__vin-vin">TMBAB41U358123456</span>
      </div>
      <div class="oc-archive-row__kupiona">
        <span class="oc-archive-row__kupiona-kupiona">03.08.2026</span>
      </div>
      <div class="oc-archive-row__utylizowana">
        <span class="oc-archive-row__utylizowana-utylizowana">03.09.2026</span>
      </div>
      <div class="oc-archive-row__dokumenty">
        <div class="oc-archive-row__doc-progress">
          <div class="oc-archive-row__bar">
            <div class="oc-archive-row__segment-1"></div>
            <div class="oc-archive-row__segment-2"></div>
            <div class="oc-archive-row__segment-3"></div>
            <div class="oc-archive-row__segment-4"></div>
          </div>
          <span class="oc-archive-row__count">4/4</span>
        </div>
      </div>
      <div class="oc-archive-row__status">
        <div class="oc-archive-row__status-status">
          <span class="oc-archive-row__robocza">Zamknenta</span>
        </div>
      </div>
    </div>
  `,
  "Hover": `
    <div class="oc-archive-row oc-archive-row--state-hover">
      <div class="oc-archive-row__sygnatura">
        <div class="oc-archive-row__pill">
          <span class="oc-archive-row__3-5">3/5</span>
        </div>
      </div>
      <div class="oc-archive-row__pojazd">
        <span class="oc-archive-row__marka">Skoda</span>
        <span class="oc-archive-row__model">Superb I 2003–2008</span>
      </div>
      <div class="oc-archive-row__vin">
        <span class="oc-archive-row__vin-vin">TMBAB41U358123456</span>
      </div>
      <div class="oc-archive-row__kupiona">
        <span class="oc-archive-row__kupiona-kupiona">03.08.2026</span>
      </div>
      <div class="oc-archive-row__utylizowana">
        <span class="oc-archive-row__utylizowana-utylizowana">03.09.2026</span>
      </div>
      <div class="oc-archive-row__dokumenty">
        <div class="oc-archive-row__doc-progress">
          <div class="oc-archive-row__bar">
            <div class="oc-archive-row__segment-1"></div>
            <div class="oc-archive-row__segment-2"></div>
            <div class="oc-archive-row__segment-3"></div>
            <div class="oc-archive-row__segment-4"></div>
          </div>
          <span class="oc-archive-row__count">4/4</span>
        </div>
      </div>
      <div class="oc-archive-row__status">
        <div class="oc-archive-row__status-status">
          <span class="oc-archive-row__robocza">Zamknenta</span>
        </div>
      </div>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Hover"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-archive-row__marka":"Marka","oc-archive-row__model":"Model","oc-archive-row__vin-vin":"Vin","oc-archive-row__kupiona-kupiona":"Kupiona","oc-archive-row__utylizowana-utylizowana":"Utylizowana"};
const OPTIONAL_PARTS = {"oc-archive-row__count":"Show Count"};

export default {
  title: "Cards/ArchiveRow",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Wiersz archiwum. Rekordy zamknięte, tylko do odczytu. Używać wyłącznie wewnątrz ArchiveTable.\n\nСобрано из спеки Figma `395:2815` (страница Core).\nКорень `<div>`, базовый класс `.oc-archive-row`. Вариантов: 2. Непривязанных значений: 7 — см. маркеры TODO в CSS." } },
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
    "Utylizowana": {
      description: "Свойство Figma «Utylizowana» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Marka": "Skoda",
    "Model": "Superb I 2003–2008",
    "Vin": "TMBAB41U358123456",
    "Kupiona": "03.08.2026",
    "Utylizowana": "03.09.2026",
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
