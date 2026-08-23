// Generated from the Figma component "StageBody=Empty". Do not hand-edit.

const VARIANTS = {
  "": "<section class=\"oc-stagebody-empty\">\n  <!-- instance of EmptyState (State=Default, Density=Default) - styling lives in components/EmptyState/ -->\n  <div class=\"oc-stagebody-empty__emptystate\">\n    <section class=\"oc-emptystate\">\n      <!-- instance of EmptyArt (EmptyArt) - styling lives in components/EmptyArt/ -->\n      <div class=\"oc-emptystate__emptyart\">\n        <div class=\"oc-emptyart\">\n          <div class=\"oc-emptyart__doc1\"></div>\n          <div class=\"oc-emptyart__doc2\"></div>\n          <div class=\"oc-emptyart__cursor\">\n            <span class=\"oc-emptyart__vector\"></span>\n            <span class=\"oc-emptyart__vector-2\"></span>\n            <span class=\"oc-emptyart__vector-3\"></span>\n            <span class=\"oc-emptyart__vector-4\"></span>\n            <span class=\"oc-emptyart__vector-5\"></span>\n          </div>\n        </div>\n      </div>\n      <!-- instance of EmptyTitle (EmptyTitle) - styling lives in components/EmptyTitle/ -->\n      <div class=\"oc-emptystate__emptytitle\">\n        <p class=\"oc-emptytitle\">\n          <span class=\"oc-emptytitle__label\">Brak pojazdów na tym etapie</span>\n        </p>\n      </div>\n      <!-- instance of EmptySub (EmptySub) - styling lives in components/EmptySub/ -->\n      <div class=\"oc-emptystate__emptysub\">\n        <p class=\"oc-emptysub\">\n          <span class=\"oc-emptysub__label\">Przytrzymaj kartę lewym przyciskiem myszy i upuść ją tutaj.</span>\n        </p>\n      </div>\n    </section>\n  </div>\n</section>"
};

const CAPTIONS = [
  "StageBody=Empty"
];

export default {
  title: "Board and empty states/StageBody=Empty",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `StageBody=Empty` (page: Page 2).\n\nRoot element `<section>`, base class `.oc-stagebody-empty`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/StageBody%3DEmpty/README.md)." } },
  },
};

export const AllVariants = {
  name: "StageBody=Empty",
  parameters: { controls: { disable: true } },
  render: () => {
    const keys = Object.keys(VARIANTS);
    return `<div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">${keys
      .map(
        (k, i) =>
          `<figure style="margin:0;display:flex;flex-direction:column;gap:8px;align-items:flex-start">${VARIANTS[k]}<figcaption style="font:12px ui-monospace,monospace;color:var(--color-text-tertiary)">${CAPTIONS[i]}</figcaption></figure>`
      )
      .join('')}</div>`;
  },
};

