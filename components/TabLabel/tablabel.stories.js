// Generated from the Figma component "TabLabel". Do not hand-edit.

const VARIANTS = {
  "": "<span class=\"oc-tablabel\">\n  <span class=\"oc-tablabel__label\">Lista</span>\n</span>"
};

const CAPTIONS = [
  "TabLabel"
];

export default {
  title: "Navigation/TabLabel",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `TabLabel` (page: Page 2).\n\nRoot element `<span>`, base class `.oc-tablabel`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/TabLabel/README.md)." } },
  },
};

export const AllVariants = {
  name: "TabLabel",
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

