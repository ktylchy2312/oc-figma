// Generated from the Figma component "EmptySub". Do not hand-edit.

const VARIANTS = {
  "": "<p class=\"oc-emptysub\">\n  <span class=\"oc-emptysub__label\">Przytrzymaj kartę lewym przyciskiem myszy i upuść ją tutaj.</span>\n</p>"
};

const CAPTIONS = [
  "EmptySub"
];

export default {
  title: "Board and empty states/EmptySub",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `EmptySub` (page: Page 2).\n\nRoot element `<p>`, base class `.oc-emptysub`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/EmptySub/README.md)." } },
  },
};

export const AllVariants = {
  name: "EmptySub",
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

