/**
 * Тема здесь тёмная не по вкусу, а по данным: единственный режим коллекции Color в Figma
 * называется Dark, и --surface-background равен #0b0e16. Показывать компоненты на белом
 * значило бы показывать их в условиях, которых в системе не существует.
 */
import "../foundations/fonts.css";
import "../foundations/tokens.css";
// Двенадцать текстовых стилей Figma — переменные --type-* и классы .oc-type-*. Без этого
// импорта классы в витрине не подхватятся, и роль будет выглядеть как «шрифт по умолчанию».
import "../foundations/typography.css";
import "../code/base.css";

export default {
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    controls: { expanded: true },
    options: {
      // Порядок групп — как в контракте §5, а не по алфавиту: сначала основания, потом
      // то, из чего собирают, и только потом крупные сборки.
      storySort: {
        order: ["Foundations", "Actions", "Forms", "Navigation", "Cards", "Feedback", "Stage", "Overlays", "Overview"],
      },
    },
  },
  decorators: [
    (story) => {
      const box = document.createElement("div");
      box.style.cssText =
        "background: var(--surface-background); color: var(--text-primary);" +
        "font-family: 'Roboto', system-ui, sans-serif; padding: 32px; min-height: 100vh;" +
        "display: flex; flex-direction: column; align-items: flex-start; gap: 16px;";
      const out = story();
      box.append(typeof out === "string" ? document.createRange().createContextualFragment(out) : out);
      return box;
    },
  ],
};
