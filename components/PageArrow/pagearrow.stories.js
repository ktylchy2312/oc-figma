// Generated from the Figma component set "PageArrow". Do not hand-edit.

const VARIANTS = {
  "Prev|Default": "<button class=\"oc-pagearrow oc-pagearrow--direction-prev oc-pagearrow--state-default\" type=\"button\">\n  <span class=\"oc-pagearrow__label\">‹</span>\n</button>",
  "Prev|Hover": "<button class=\"oc-pagearrow oc-pagearrow--direction-prev oc-pagearrow--state-hover\" type=\"button\">\n  <span class=\"oc-pagearrow__label\">‹</span>\n</button>",
  "Prev|Pressed": "<button class=\"oc-pagearrow oc-pagearrow--direction-prev oc-pagearrow--state-pressed\" type=\"button\">\n  <span class=\"oc-pagearrow__label\">‹</span>\n</button>",
  "Prev|Disabled": "<button class=\"oc-pagearrow oc-pagearrow--direction-prev oc-pagearrow--state-disabled\" type=\"button\" disabled>\n  <span class=\"oc-pagearrow__label\">‹</span>\n</button>",
  "Next|Default": "<button class=\"oc-pagearrow oc-pagearrow--direction-next oc-pagearrow--state-default\" type=\"button\">\n  <span class=\"oc-pagearrow__label\">›</span>\n</button>",
  "Next|Hover": "<button class=\"oc-pagearrow oc-pagearrow--direction-next oc-pagearrow--state-hover\" type=\"button\">\n  <span class=\"oc-pagearrow__label\">›</span>\n</button>",
  "Next|Pressed": "<button class=\"oc-pagearrow oc-pagearrow--direction-next oc-pagearrow--state-pressed\" type=\"button\">\n  <span class=\"oc-pagearrow__label\">›</span>\n</button>",
  "Next|Disabled": "<button class=\"oc-pagearrow oc-pagearrow--direction-next oc-pagearrow--state-disabled\" type=\"button\" disabled>\n  <span class=\"oc-pagearrow__label\">›</span>\n</button>"
};

const CAPTIONS = [
  "PageArrow / Direction: Prev / State: Default",
  "PageArrow / Direction: Prev / State: Hover",
  "PageArrow / Direction: Prev / State: Pressed",
  "PageArrow / Direction: Prev / State: Disabled",
  "PageArrow / Direction: Next / State: Default",
  "PageArrow / Direction: Next / State: Hover",
  "PageArrow / Direction: Next / State: Pressed",
  "PageArrow / Direction: Next / State: Disabled"
];

export default {
  title: "Actions/PageArrow",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `PageArrow` (page: Page 2).\n\nRoot element `<button>`, base class `.oc-pagearrow`.\n8 variants, axes: Direction × State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/PageArrow/README.md)." } },
  },
  argTypes: {
    "Direction": {
      description: "Figma variant property \"Direction\"",
      control: { type: 'inline-radio' },
      options: ["Prev","Next"],
    },
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Default","Hover","Pressed","Disabled"],
    },
  },
  args: {
    "Direction": "Prev",
    "State": "Default",
  },
};

// Each combination is a real Figma variant, so the control picks markup rather than
// toggling a class - a variant can differ in structure, not just in styling.
export const Playground = {
  render: (args) => {
    const key = ["Direction","State"].map((a) => args[a]).join('|');
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

