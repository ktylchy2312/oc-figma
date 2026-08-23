// Generated from the Figma component set "Chip". Do not hand-edit.

const VARIANTS = {
  "Neutral": "<span class=\"oc-chip oc-chip--variant-neutral\">\n  <span class=\"oc-chip__label\">3/5</span>\n</span>"
};

const CAPTIONS = [
  "Chip / Variant: Neutral"
];

export default {
  title: "Cards and rows/Chip",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `Chip` (page: Page 2).\n\nRoot element `<span>`, base class `.oc-chip`.\n1 variant, axes: Variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/Chip/README.md)." } },
  },
  argTypes: {
    "Variant": {
      description: "Figma variant property \"Variant\"",
      control: { type: 'inline-radio' },
      options: ["Neutral"],
    },
  },
  args: {
    "Variant": "Neutral",
  },
};

// Each combination is a real Figma variant, so the control picks markup rather than
// toggling a class - a variant can differ in structure, not just in styling.
export const Playground = {
  render: (args) => {
    const key = ["Variant"].map((a) => args[a]).join('|');
    return (
      VARIANTS[key] ||
      '<p style="color: var(--color-text-tertiary)">This combination does not exist in Figma.</p>'
    );
  },
};

export const AllVariants = {
  name: "All variants",
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

