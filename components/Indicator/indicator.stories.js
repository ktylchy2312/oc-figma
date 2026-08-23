// Generated from the Figma component "Indicator". Do not hand-edit.

const VARIANTS = {
  "": "<span class=\"oc-indicator\"></span>"
};

const CAPTIONS = [
  "Indicator"
];

export default {
  title: "Navigation/Indicator",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `Indicator` (page: Page 2).\n\nRoot element `<span>`, base class `.oc-indicator`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/Indicator/README.md)." } },
  },
};

export const AllVariants = {
  name: "Indicator",
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

