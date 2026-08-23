// Generated from the Figma component "EmptyArt". Do not hand-edit.

const VARIANTS = {
  "": "<div class=\"oc-emptyart\">\n  <div class=\"oc-emptyart__doc1\"></div>\n  <div class=\"oc-emptyart__doc2\"></div>\n  <div class=\"oc-emptyart__cursor\">\n    <span class=\"oc-emptyart__vector\"></span>\n    <span class=\"oc-emptyart__vector-2\"></span>\n    <span class=\"oc-emptyart__vector-3\"></span>\n    <span class=\"oc-emptyart__vector-4\"></span>\n    <span class=\"oc-emptyart__vector-5\"></span>\n  </div>\n</div>"
};

const CAPTIONS = [
  "EmptyArt"
];

export default {
  title: "Board and empty states/EmptyArt",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `EmptyArt` (page: Page 2).\n\nRoot element `<div>`, base class `.oc-emptyart`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/EmptyArt/README.md)." } },
  },
};

export const AllVariants = {
  name: "EmptyArt",
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

