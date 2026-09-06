// SidebarFooter — сгенерировано из components/sidebar-footer/spec.json. Руками не править.
import "../../foundations/fonts.css";
import "../../foundations/tokens.css";
import "../base.css";
import "./sidebar-footer.css";

const VARIANTS = {
  "SidebarFooter": `
    <div class="oc-sidebar-footer">
      <div class="oc-sidebar-footer__divider"></div>
      <div class="oc-sidebar-footer__frame-166">
        <span class="oc-sidebar-footer__oc-kontrol">OC-KONTROL</span>
        <div class="oc-sidebar-footer__frame-165">
          <span class="oc-sidebar-footer__wersja-1-4-2-build-2026-08">Wersja 1.4.2 · build 2026.08</span>
          <span class="oc-sidebar-footer__2026-oc-kontrol">© 2026 OC-KONTROL</span>
        </div>
      </div>
    </div>
  `
};

const CAPTIONS = [""];

// класс части → имя свойства Figma, которое ею управляет
const TEXT_PARTS = {};
const OPTIONAL_PARTS = {};

export default {
  title: "Navigation/SidebarFooter",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Компонент «SidebarFooter»\n\nСобрано из спеки Figma `448:8087` (страница Core).\nКорень `<div>`, базовый класс `.oc-sidebar-footer`. Вариантов: 1." } },
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
    wrap.innerHTML = VARIANTS["SidebarFooter"] ?? "<p>нет такой комбинации</p>";
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
