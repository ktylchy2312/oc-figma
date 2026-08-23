// Generated from the Figma component "BarDivider". Do not hand-edit.

const VARIANTS = {
  "": "<hr class=\"oc-bardivider\">"
};

const CAPTIONS = [
  "BarDivider"
];

export default {
  title: "Separators/BarDivider",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `BarDivider` (page: Page 2).\n\nRoot element `<hr>`, base class `.oc-bardivider`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/BarDivider/README.md)." } },
  },
};

export const AllVariants = {
  name: "BarDivider",
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

