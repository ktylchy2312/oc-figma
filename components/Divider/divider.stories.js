// Generated from the Figma component "Divider". Do not hand-edit.

const VARIANTS = {
  "": "<hr class=\"oc-divider\">"
};

const CAPTIONS = [
  "Divider"
];

export default {
  title: "Separators/Divider",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `Divider` (page: Page 2).\n\nRoot element `<hr>`, base class `.oc-divider`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/Divider/README.md)." } },
  },
};

export const AllVariants = {
  name: "Divider",
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

