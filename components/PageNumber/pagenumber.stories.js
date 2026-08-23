// Generated from the Figma component set "PageNumber". Do not hand-edit.

const VARIANTS = {
  "Default": "<button class=\"oc-pagenumber oc-pagenumber--state-default\" type=\"button\">\n  <span class=\"oc-pagenumber__label\">2</span>\n</button>",
  "Hover": "<button class=\"oc-pagenumber oc-pagenumber--state-hover\" type=\"button\">\n  <span class=\"oc-pagenumber__label\">2</span>\n</button>",
  "Active": "<button class=\"oc-pagenumber oc-pagenumber--state-active\" type=\"button\">\n  <span class=\"oc-pagenumber__label\">2</span>\n</button>"
};

const CAPTIONS = [
  "PageNumber / State: Default",
  "PageNumber / State: Hover",
  "PageNumber / State: Active"
];

export default {
  title: "Actions/PageNumber",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `PageNumber` (page: Page 2).\n\nRoot element `<button>`, base class `.oc-pagenumber`.\n3 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/PageNumber/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Default","Hover","Active"],
    },
  },
  args: {
    "State": "Default",
  },
};

// Each combination is a real Figma variant, so the control picks markup rather than
// toggling a class - a variant can differ in structure, not just in styling.
export const Playground = {
  render: (args) => {
    const key = ["State"].map((a) => args[a]).join('|');
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

