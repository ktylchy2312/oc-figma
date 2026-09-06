// PartCard — сгенерировано из components/part-card/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../../foundations/typography.css";
import "../base.css";
import "./part-card.css";

const VARIANTS = {
  "Default": `
    <div class="oc-part-card oc-part-card--state-default">
      <div class="oc-part-card__hero">
        <svg class="oc-part-card__photo-placeholder" aria-hidden="true" focusable="false" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.3"><path d="M44 80.6667C64.2504 80.6667 80.6667 64.2505 80.6667 44C80.6667 23.7496 64.2504 7.33337 44 7.33337C23.7496 7.33337 7.33333 23.7496 7.33333 44C7.33333 64.2505 23.7496 80.6667 44 80.6667Z" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M80.6667 44H66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 44H7.33333" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 22V7.33337" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 80.6667V66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        <div class="oc-part-card__hero-part-number">
          <span class="oc-part-card__part-number-part-number">PT-000482</span>
        </div>
        <div class="oc-part-card__hero-status">
          <div class="oc-part-card__status-dot"></div>
          <span class="oc-part-card__status-status">Aktywna</span>
        </div>
        <div class="oc-part-card__hero-photo-count">
          <svg class="oc-part-card__camera" aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9985 2C7.1789 2 7.35593 2.04879 7.51086 2.14122C7.66578 2.23364 7.79281 2.36625 7.8785 2.525L8.1215 2.975C8.20719 3.13375 8.33422 3.26636 8.48914 3.35878C8.64407 3.45121 8.8211 3.5 9.0015 3.5H10C10.2652 3.5 10.5196 3.60536 10.7071 3.79289C10.8946 3.98043 11 4.23478 11 4.5V9C11 9.26522 10.8946 9.51957 10.7071 9.70711C10.5196 9.89464 10.2652 10 10 10H2C1.73478 10 1.48043 9.89464 1.29289 9.70711C1.10536 9.51957 1 9.26522 1 9V4.5C1 4.23478 1.10536 3.98043 1.29289 3.79289C1.48043 3.60536 1.73478 3.5 2 3.5H2.9985C3.17871 3.50001 3.35557 3.45132 3.51039 3.35908C3.66521 3.26684 3.79222 3.13449 3.878 2.976L4.1225 2.524C4.20828 2.36551 4.33529 2.23316 4.49011 2.14092C4.64493 2.04868 4.82179 1.99999 5.002 2H6.9985Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8C6.82843 8 7.5 7.32843 7.5 6.5C7.5 5.67157 6.82843 5 6 5C5.17157 5 4.5 5.67157 4.5 6.5C4.5 7.32843 5.17157 8 6 8Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-part-card__photo-count-photo-count">5</span>
        </div>
      </div>
      <div class="oc-part-card__body">
        <div class="oc-part-card__info">
          <div class="oc-part-card__title-block">
            <span class="oc-part-card__title">Alternator Bosch 90A</span>
            <div class="oc-part-card__title-block-vehicle">
              <span class="oc-part-card__vehicle-vehicle">BMW E90 2.0d</span>
              <div class="oc-part-card__vehicle-dot"></div>
              <span class="oc-part-card__years">2005–2008</span>
            </div>
          </div>
          <div class="oc-part-card__meta">
            <div class="oc-part-card__category-qty">
              <span class="oc-part-card__category">Elektryka</span>
              <div class="oc-part-card__category-qty-dot"></div>
              <span class="oc-part-card__quantity">3 szt.</span>
            </div>
            <span class="oc-part-card__price">320 zł</span>
          </div>
        </div>
        <div class="oc-part-card__divider"></div>
        <div class="oc-part-card__footer">
          <div class="oc-part-card__condition">
            <div class="oc-part-card__grade-a">
              <span class="oc-part-card__grade-a-label">A</span>
            </div>
            <div class="oc-part-card__grade-e">
              <span class="oc-part-card__grade-e-label">E</span>
            </div>
            <div class="oc-part-card__grade-o">
              <span class="oc-part-card__grade-o-label">O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  "Hover": `
    <div class="oc-part-card oc-part-card--state-hover">
      <div class="oc-part-card__hero">
        <svg class="oc-part-card__photo-placeholder" aria-hidden="true" focusable="false" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.3"><path d="M44 80.6667C64.2504 80.6667 80.6666 64.2505 80.6666 44C80.6666 23.7496 64.2504 7.33337 44 7.33337C23.7495 7.33337 7.33331 23.7496 7.33331 44C7.33331 64.2505 23.7495 80.6667 44 80.6667Z" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M80.6667 44H66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 44H7.33331" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 22V7.33337" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 80.6667V66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        <div class="oc-part-card__hero-part-number">
          <span class="oc-part-card__part-number-part-number">PT-000482</span>
        </div>
        <div class="oc-part-card__hero-status">
          <div class="oc-part-card__status-dot"></div>
          <span class="oc-part-card__status-status">Aktywna</span>
        </div>
        <div class="oc-part-card__hero-photo-count">
          <svg class="oc-part-card__camera" aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9985 2C7.1789 2 7.35593 2.04879 7.51086 2.14122C7.66578 2.23364 7.79281 2.36625 7.8785 2.525L8.1215 2.975C8.20719 3.13375 8.33422 3.26636 8.48914 3.35878C8.64407 3.45121 8.8211 3.5 9.0015 3.5H10C10.2652 3.5 10.5196 3.60536 10.7071 3.79289C10.8946 3.98043 11 4.23478 11 4.5V9C11 9.26522 10.8946 9.51957 10.7071 9.70711C10.5196 9.89464 10.2652 10 10 10H2C1.73478 10 1.48043 9.89464 1.29289 9.70711C1.10536 9.51957 1 9.26522 1 9V4.5C1 4.23478 1.10536 3.98043 1.29289 3.79289C1.48043 3.60536 1.73478 3.5 2 3.5H2.9985C3.17871 3.50001 3.35557 3.45132 3.51039 3.35908C3.66521 3.26684 3.79222 3.13449 3.878 2.976L4.1225 2.524C4.20828 2.36551 4.33529 2.23316 4.49011 2.14092C4.64493 2.04868 4.82179 1.99999 5.002 2H6.9985Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8C6.82843 8 7.5 7.32843 7.5 6.5C7.5 5.67157 6.82843 5 6 5C5.17157 5 4.5 5.67157 4.5 6.5C4.5 7.32843 5.17157 8 6 8Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-part-card__photo-count-photo-count">5</span>
        </div>
      </div>
      <div class="oc-part-card__body">
        <div class="oc-part-card__info">
          <div class="oc-part-card__title-block">
            <span class="oc-part-card__title">Alternator Bosch 90A</span>
            <div class="oc-part-card__title-block-vehicle">
              <span class="oc-part-card__vehicle-vehicle">BMW E90 2.0d</span>
              <div class="oc-part-card__vehicle-dot"></div>
              <span class="oc-part-card__years">2005–2008</span>
            </div>
          </div>
          <div class="oc-part-card__meta">
            <div class="oc-part-card__category-qty">
              <span class="oc-part-card__category">Elektryka</span>
              <div class="oc-part-card__category-qty-dot"></div>
              <span class="oc-part-card__quantity">3 szt.</span>
            </div>
            <span class="oc-part-card__price">320 zł</span>
          </div>
        </div>
        <div class="oc-part-card__divider"></div>
        <div class="oc-part-card__footer">
          <div class="oc-part-card__condition">
            <div class="oc-part-card__grade-a">
              <span class="oc-part-card__grade-a-label">A</span>
            </div>
            <div class="oc-part-card__grade-e">
              <span class="oc-part-card__grade-e-label">E</span>
            </div>
            <div class="oc-part-card__grade-o">
              <span class="oc-part-card__grade-o-label">O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  "Pressed": `
    <div class="oc-part-card oc-part-card--state-pressed">
      <div class="oc-part-card__hero">
        <svg class="oc-part-card__photo-placeholder" aria-hidden="true" focusable="false" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.3"><path d="M44 80.6666C64.2504 80.6666 80.6667 64.2504 80.6667 43.9999C80.6667 23.7495 64.2504 7.33325 44 7.33325C23.7496 7.33325 7.33333 23.7495 7.33333 43.9999C7.33333 64.2504 23.7496 80.6666 44 80.6666Z" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M80.6667 44H66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 44H7.33333" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 21.9999V7.33325" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 80.6667V66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        <div class="oc-part-card__hero-part-number">
          <span class="oc-part-card__part-number-part-number">PT-000482</span>
        </div>
        <div class="oc-part-card__hero-status">
          <div class="oc-part-card__status-dot"></div>
          <span class="oc-part-card__status-status">Aktywna</span>
        </div>
        <div class="oc-part-card__hero-photo-count">
          <svg class="oc-part-card__camera" aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9985 2C7.1789 2 7.35593 2.04879 7.51086 2.14122C7.66578 2.23364 7.79281 2.36625 7.8785 2.525L8.1215 2.975C8.20719 3.13375 8.33422 3.26636 8.48914 3.35878C8.64407 3.45121 8.8211 3.5 9.0015 3.5H10C10.2652 3.5 10.5196 3.60536 10.7071 3.79289C10.8946 3.98043 11 4.23478 11 4.5V9C11 9.26522 10.8946 9.51957 10.7071 9.70711C10.5196 9.89464 10.2652 10 10 10H2C1.73478 10 1.48043 9.89464 1.29289 9.70711C1.10536 9.51957 1 9.26522 1 9V4.5C1 4.23478 1.10536 3.98043 1.29289 3.79289C1.48043 3.60536 1.73478 3.5 2 3.5H2.9985C3.17871 3.50001 3.35557 3.45132 3.51039 3.35908C3.66521 3.26684 3.79222 3.13449 3.878 2.976L4.1225 2.524C4.20828 2.36551 4.33529 2.23316 4.49011 2.14092C4.64493 2.04868 4.82179 1.99999 5.002 2H6.9985Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8C6.82843 8 7.5 7.32843 7.5 6.5C7.5 5.67157 6.82843 5 6 5C5.17157 5 4.5 5.67157 4.5 6.5C4.5 7.32843 5.17157 8 6 8Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-part-card__photo-count-photo-count">5</span>
        </div>
      </div>
      <div class="oc-part-card__body">
        <div class="oc-part-card__info">
          <div class="oc-part-card__title-block">
            <span class="oc-part-card__title">Alternator Bosch 90A</span>
            <div class="oc-part-card__title-block-vehicle">
              <span class="oc-part-card__vehicle-vehicle">BMW E90 2.0d</span>
              <div class="oc-part-card__vehicle-dot"></div>
              <span class="oc-part-card__years">2005–2008</span>
            </div>
          </div>
          <div class="oc-part-card__meta">
            <div class="oc-part-card__category-qty">
              <span class="oc-part-card__category">Elektryka</span>
              <div class="oc-part-card__category-qty-dot"></div>
              <span class="oc-part-card__quantity">3 szt.</span>
            </div>
            <span class="oc-part-card__price">320 zł</span>
          </div>
        </div>
        <div class="oc-part-card__divider"></div>
        <div class="oc-part-card__footer">
          <div class="oc-part-card__condition">
            <div class="oc-part-card__grade-a">
              <span class="oc-part-card__grade-a-label">A</span>
            </div>
            <div class="oc-part-card__grade-e">
              <span class="oc-part-card__grade-e-label">E</span>
            </div>
            <div class="oc-part-card__grade-o">
              <span class="oc-part-card__grade-o-label">O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  "Focus": `
    <div class="oc-part-card oc-part-card--state-focus">
      <div class="oc-part-card__hero">
        <svg class="oc-part-card__photo-placeholder" aria-hidden="true" focusable="false" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.3"><path d="M44 80.6666C64.2504 80.6666 80.6666 64.2504 80.6666 43.9999C80.6666 23.7495 64.2504 7.33325 44 7.33325C23.7495 7.33325 7.33331 23.7495 7.33331 43.9999C7.33331 64.2504 23.7495 80.6666 44 80.6666Z" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M80.6667 44H66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 44H7.33331" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 21.9999V7.33325" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 80.6667V66" style="stroke:var(--text-tertiary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        <div class="oc-part-card__hero-part-number">
          <span class="oc-part-card__part-number-part-number">PT-000482</span>
        </div>
        <div class="oc-part-card__hero-status">
          <div class="oc-part-card__status-dot"></div>
          <span class="oc-part-card__status-status">Aktywna</span>
        </div>
        <div class="oc-part-card__hero-photo-count">
          <svg class="oc-part-card__camera" aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9985 2C7.1789 2 7.35593 2.04879 7.51086 2.14122C7.66578 2.23364 7.79281 2.36625 7.8785 2.525L8.1215 2.975C8.20719 3.13375 8.33422 3.26636 8.48914 3.35878C8.64407 3.45121 8.8211 3.5 9.0015 3.5H10C10.2652 3.5 10.5196 3.60536 10.7071 3.79289C10.8946 3.98043 11 4.23478 11 4.5V9C11 9.26522 10.8946 9.51957 10.7071 9.70711C10.5196 9.89464 10.2652 10 10 10H2C1.73478 10 1.48043 9.89464 1.29289 9.70711C1.10536 9.51957 1 9.26522 1 9V4.5C1 4.23478 1.10536 3.98043 1.29289 3.79289C1.48043 3.60536 1.73478 3.5 2 3.5H2.9985C3.17871 3.50001 3.35557 3.45132 3.51039 3.35908C3.66521 3.26684 3.79222 3.13449 3.878 2.976L4.1225 2.524C4.20828 2.36551 4.33529 2.23316 4.49011 2.14092C4.64493 2.04868 4.82179 1.99999 5.002 2H6.9985Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8C6.82843 8 7.5 7.32843 7.5 6.5C7.5 5.67157 6.82843 5 6 5C5.17157 5 4.5 5.67157 4.5 6.5C4.5 7.32843 5.17157 8 6 8Z" style="stroke:var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="oc-part-card__photo-count-photo-count">5</span>
        </div>
      </div>
      <div class="oc-part-card__body">
        <div class="oc-part-card__info">
          <div class="oc-part-card__title-block">
            <span class="oc-part-card__title">Alternator Bosch 90A</span>
            <div class="oc-part-card__title-block-vehicle">
              <span class="oc-part-card__vehicle-vehicle">BMW E90 2.0d</span>
              <div class="oc-part-card__vehicle-dot"></div>
              <span class="oc-part-card__years">2005–2008</span>
            </div>
          </div>
          <div class="oc-part-card__meta">
            <div class="oc-part-card__category-qty">
              <span class="oc-part-card__category">Elektryka</span>
              <div class="oc-part-card__category-qty-dot"></div>
              <span class="oc-part-card__quantity">3 szt.</span>
            </div>
            <span class="oc-part-card__price">320 zł</span>
          </div>
        </div>
        <div class="oc-part-card__divider"></div>
        <div class="oc-part-card__footer">
          <div class="oc-part-card__condition">
            <div class="oc-part-card__grade-a">
              <span class="oc-part-card__grade-a-label">A</span>
            </div>
            <div class="oc-part-card__grade-e">
              <span class="oc-part-card__grade-e-label">E</span>
            </div>
            <div class="oc-part-card__grade-o">
              <span class="oc-part-card__grade-o-label">O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

const CAPTIONS = ["State=Default","State=Hover","State=Pressed","State=Focus"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-part-card__part-number-part-number":"PartNumber","oc-part-card__status-status":"Status","oc-part-card__photo-count-photo-count":"PhotoCount","oc-part-card__title":"Title","oc-part-card__vehicle-vehicle":"Vehicle","oc-part-card__years":"Years","oc-part-card__category":"Category","oc-part-card__quantity":"Quantity","oc-part-card__price":"Price","oc-part-card__grade-a-label":"Label","oc-part-card__grade-e-label":"Label","oc-part-card__grade-o-label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Cards/PartCard",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Karta części na magazynie. Cała karta jest celem kliknięcia — stąd stan Focus. Stany zgodne z CarCard.\n\nСобрано из спеки Figma `395:2449` (страница MAG-KONTROL).\nКорень `<div>`, базовый класс `.oc-part-card`. Вариантов: 4. Непривязанных значений: 27 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Pressed","Focus"],
    },
    "PartNumber": {
      description: "Свойство Figma «PartNumber» (text)",
      control: { type: "text" },
    },
    "Status": {
      description: "Свойство Figma «Status» (text)",
      control: { type: "text" },
    },
    "PhotoCount": {
      description: "Свойство Figma «PhotoCount» (text)",
      control: { type: "text" },
    },
    "Title": {
      description: "Свойство Figma «Title» (text)",
      control: { type: "text" },
    },
    "Vehicle": {
      description: "Свойство Figma «Vehicle» (text)",
      control: { type: "text" },
    },
    "Years": {
      description: "Свойство Figma «Years» (text)",
      control: { type: "text" },
    },
    "Category": {
      description: "Свойство Figma «Category» (text)",
      control: { type: "text" },
    },
    "Quantity": {
      description: "Свойство Figma «Quantity» (text)",
      control: { type: "text" },
    },
    "Price": {
      description: "Свойство Figma «Price» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "PartNumber": "PT-000482",
    "Status": "Aktywna",
    "PhotoCount": "5",
    "Title": "Alternator Bosch 90A",
    "Vehicle": "BMW E90 2.0d",
    "Years": "2005–2008",
    "Category": "Elektryka",
    "Quantity": "3 szt.",
    "Price": "320 zł",
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
