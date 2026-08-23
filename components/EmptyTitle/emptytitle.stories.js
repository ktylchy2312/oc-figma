// Generated from the Figma component "EmptyTitle". Do not hand-edit.

const VARIANTS = {
  "": "<p class=\"oc-emptytitle\">\n  <span class=\"oc-emptytitle__label\">Brak pojazdów na tym etapie</span>\n</p>"
};

const CAPTIONS = [
  "EmptyTitle"
];

export default {
  title: "Board and empty states/EmptyTitle",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `EmptyTitle` (page: Page 2).\n\nRoot element `<p>`, base class `.oc-emptytitle`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/EmptyTitle/README.md)." } },
  },
};

export const AllVariants = {
  name: "EmptyTitle",
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

