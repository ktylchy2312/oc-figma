// Generated from the Figma component "NavLabel". Do not hand-edit.

const VARIANTS = {
  "": "<span class=\"oc-navlabel\">\n  <span class=\"oc-navlabel__label\">Etapy</span>\n</span>"
};

const CAPTIONS = [
  "NavLabel"
];

export default {
  title: "Navigation/NavLabel",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `NavLabel` (page: Page 2).\n\nRoot element `<span>`, base class `.oc-navlabel`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/NavLabel/README.md)." } },
  },
};

export const AllVariants = {
  name: "NavLabel",
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

