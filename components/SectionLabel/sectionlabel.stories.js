// Generated from the Figma component "SectionLabel". Do not hand-edit.

const VARIANTS = {
  "": "<h3 class=\"oc-sectionlabel\">\n  <span class=\"oc-sectionlabel__label\">DOKUMENTY</span>\n</h3>"
};

const CAPTIONS = [
  "SectionLabel"
];

export default {
  title: "Separators/SectionLabel",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `SectionLabel` (page: Page 2).\n\nRoot element `<h3>`, base class `.oc-sectionlabel`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/SectionLabel/README.md)." } },
  },
};

export const AllVariants = {
  name: "SectionLabel",
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

