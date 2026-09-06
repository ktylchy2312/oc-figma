// ActionRow — сгенерировано из components/action-row/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./action-row.css";

const VARIANTS = {
  "Default": `
    <button class="oc-action-row oc-action-row--state-default" type="button">
      <svg class="oc-action-row__icon-bolt" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9139 3.99991C16.0271 3.67928 16.0279 3.32971 15.9164 3.00853C15.8048 2.68734 15.5874 2.41359 15.2999 2.23215C15.0123 2.05071 14.6716 1.97235 14.3337 2.00992C13.9958 2.04749 13.6806 2.19875 13.4399 2.43891L4.43992 11.4389C4.23007 11.6486 4.08712 11.9159 4.02915 12.2068C3.97119 12.4978 4.00081 12.7994 4.11427 13.0736C4.22774 13.3477 4.41994 13.582 4.66659 13.7469C4.91324 13.9118 5.20324 13.9998 5.49992 13.9999H9.50192C9.5818 14 9.66049 14.0193 9.7314 14.056C9.80232 14.0928 9.86339 14.146 9.90951 14.2112C9.95564 14.2764 9.98546 14.3517 9.99649 14.4309C10.0075 14.51 9.99944 14.5906 9.97292 14.6659L8.08593 19.9999C7.97273 20.3207 7.97191 20.6704 8.0836 20.9916C8.19529 21.3129 8.41285 21.5867 8.7006 21.768C8.98834 21.9494 9.32919 22.0276 9.66721 21.9898C10.0052 21.952 10.3204 21.8004 10.5609 21.5599L19.5609 12.5599C19.7705 12.3501 19.9132 12.0828 19.9709 11.7919C20.0286 11.501 19.9989 11.1996 19.8853 10.9256C19.7718 10.6516 19.5795 10.4175 19.333 10.2527C19.0864 10.0879 18.7965 9.99997 18.4999 9.99991H14.5029C14.4228 10 14.3439 9.9809 14.2728 9.94415C14.2016 9.9074 14.1403 9.8541 14.0941 9.78873C14.0478 9.72336 14.0179 9.64784 14.0069 9.56852C13.996 9.4892 14.0042 9.40839 14.0309 9.33291L15.9139 3.99991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-action-row__label">Wycena pojazdu</span>
      <div class="oc-action-row__status-check">
        <svg class="oc-action-row__icon-circle-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </button>
  `,
  "Hover": `
    <button class="oc-action-row oc-action-row--state-hover" type="button">
      <svg class="oc-action-row__icon-bolt" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9139 3.99991C16.0271 3.67928 16.0279 3.32971 15.9164 3.00853C15.8048 2.68734 15.5874 2.41359 15.2999 2.23215C15.0123 2.05071 14.6716 1.97235 14.3337 2.00992C13.9958 2.04749 13.6806 2.19875 13.4399 2.43891L4.43992 11.4389C4.23007 11.6486 4.08712 11.9159 4.02915 12.2068C3.97119 12.4978 4.00081 12.7994 4.11427 13.0736C4.22774 13.3477 4.41994 13.582 4.66659 13.7469C4.91324 13.9118 5.20324 13.9998 5.49992 13.9999H9.50192C9.5818 14 9.66049 14.0193 9.7314 14.056C9.80232 14.0928 9.86339 14.146 9.90951 14.2112C9.95564 14.2764 9.98546 14.3517 9.99649 14.4309C10.0075 14.51 9.99944 14.5906 9.97292 14.6659L8.08593 19.9999C7.97273 20.3207 7.97191 20.6704 8.0836 20.9916C8.19529 21.3129 8.41285 21.5867 8.7006 21.768C8.98834 21.9494 9.32919 22.0276 9.66721 21.9898C10.0052 21.952 10.3204 21.8004 10.5609 21.5599L19.5609 12.5599C19.7705 12.3501 19.9132 12.0828 19.9709 11.7919C20.0286 11.501 19.9989 11.1996 19.8853 10.9256C19.7718 10.6516 19.5795 10.4175 19.333 10.2527C19.0864 10.0879 18.7965 9.99997 18.4999 9.99991H14.5029C14.4228 10 14.3439 9.9809 14.2728 9.94415C14.2016 9.9074 14.1403 9.8541 14.0941 9.78873C14.0478 9.72336 14.0179 9.64784 14.0069 9.56852C13.996 9.4892 14.0042 9.40839 14.0309 9.33291L15.9139 3.99991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-action-row__label">Wycena pojazdu</span>
      <div class="oc-action-row__status-check">
        <svg class="oc-action-row__icon-circle-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </button>
  `,
  "Pressed": `
    <button class="oc-action-row oc-action-row--state-pressed" type="button">
      <svg class="oc-action-row__icon-bolt" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9139 3.99991C16.0271 3.67928 16.0279 3.32971 15.9164 3.00853C15.8048 2.68734 15.5874 2.41359 15.2999 2.23215C15.0123 2.05071 14.6716 1.97235 14.3337 2.00992C13.9958 2.04749 13.6806 2.19875 13.4399 2.43891L4.43992 11.4389C4.23007 11.6486 4.08712 11.9159 4.02915 12.2068C3.97119 12.4978 4.00081 12.7994 4.11427 13.0736C4.22774 13.3477 4.41994 13.582 4.66659 13.7469C4.91324 13.9118 5.20324 13.9998 5.49992 13.9999H9.50192C9.5818 14 9.66049 14.0193 9.7314 14.056C9.80232 14.0928 9.86339 14.146 9.90951 14.2112C9.95564 14.2764 9.98546 14.3517 9.99649 14.4309C10.0075 14.51 9.99944 14.5906 9.97292 14.6659L8.08593 19.9999C7.97273 20.3207 7.97191 20.6704 8.0836 20.9916C8.19529 21.3129 8.41285 21.5867 8.7006 21.768C8.98834 21.9494 9.32919 22.0276 9.66721 21.9898C10.0052 21.952 10.3204 21.8004 10.5609 21.5599L19.5609 12.5599C19.7705 12.3501 19.9132 12.0828 19.9709 11.7919C20.0286 11.501 19.9989 11.1996 19.8853 10.9256C19.7718 10.6516 19.5795 10.4175 19.333 10.2527C19.0864 10.0879 18.7965 9.99997 18.4999 9.99991H14.5029C14.4228 10 14.3439 9.9809 14.2728 9.94415C14.2016 9.9074 14.1403 9.8541 14.0941 9.78873C14.0478 9.72336 14.0179 9.64784 14.0069 9.56852C13.996 9.4892 14.0042 9.40839 14.0309 9.33291L15.9139 3.99991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-action-row__label">Wycena pojazdu</span>
      <div class="oc-action-row__status-check">
        <svg class="oc-action-row__icon-circle-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </button>
  `,
  "Focus": `
    <button class="oc-action-row oc-action-row--state-focus" type="button">
      <svg class="oc-action-row__icon-bolt" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9139 3.99991C16.0271 3.67928 16.0279 3.32971 15.9164 3.00853C15.8048 2.68734 15.5874 2.41359 15.2999 2.23215C15.0123 2.05071 14.6716 1.97235 14.3337 2.00992C13.9958 2.04749 13.6806 2.19875 13.4399 2.43891L4.43992 11.4389C4.23007 11.6486 4.08712 11.9159 4.02915 12.2068C3.97119 12.4978 4.00081 12.7994 4.11427 13.0736C4.22774 13.3477 4.41994 13.582 4.66659 13.7469C4.91324 13.9118 5.20324 13.9998 5.49992 13.9999H9.50192C9.5818 14 9.66049 14.0193 9.7314 14.056C9.80232 14.0928 9.86339 14.146 9.90951 14.2112C9.95564 14.2764 9.98546 14.3517 9.99649 14.4309C10.0075 14.51 9.99944 14.5906 9.97292 14.6659L8.08593 19.9999C7.97273 20.3207 7.97191 20.6704 8.0836 20.9916C8.19529 21.3129 8.41285 21.5867 8.7006 21.768C8.98834 21.9494 9.32919 22.0276 9.66721 21.9898C10.0052 21.952 10.3204 21.8004 10.5609 21.5599L19.5609 12.5599C19.7705 12.3501 19.9132 12.0828 19.9709 11.7919C20.0286 11.501 19.9989 11.1996 19.8853 10.9256C19.7718 10.6516 19.5795 10.4175 19.333 10.2527C19.0864 10.0879 18.7965 9.99997 18.4999 9.99991H14.5029C14.4228 10 14.3439 9.9809 14.2728 9.94415C14.2016 9.9074 14.1403 9.8541 14.0941 9.78873C14.0478 9.72336 14.0179 9.64784 14.0069 9.56852C13.996 9.4892 14.0042 9.40839 14.0309 9.33291L15.9139 3.99991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="oc-action-row__label">Wycena pojazdu</span>
      <div class="oc-action-row__status-check">
        <svg class="oc-action-row__icon-circle-check" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </button>
  `
};

const CAPTIONS = ["State=Default","State=Hover","State=Pressed","State=Focus"];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {"oc-action-row__label":"Label"};
const OPTIONAL_PARTS = {};

export default {
  title: "Actions/ActionRow",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «ActionRow»\n\nСобрано из спеки Figma `25:97` (страница Core).\nКорень `<button>`, базовый класс `.oc-action-row`. Вариантов: 4. Непривязанных значений: 3 — см. маркеры TODO в CSS." } },
  },
  argTypes: {
    "State": {
      description: "Свойство варианта Figma «State»",
      control: { type: "inline-radio" },
      options: ["Default","Hover","Pressed","Focus"],
    },
    "Label": {
      description: "Свойство Figma «Label» (text)",
      control: { type: "text" },
    },
  },
  args: {
    "State": "Default",
    "Label": "Wycena pojazdu",
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
