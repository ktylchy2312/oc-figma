// Generated from the Figma component set "InsertStageButton". Do not hand-edit.

const VARIANTS = {
  "Default": "<button class=\"oc-insertstagebutton oc-insertstagebutton--state-default\" type=\"button\">\n  <svg class=\"oc-insertstagebutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Hover": "<button class=\"oc-insertstagebutton oc-insertstagebutton--state-hover\" type=\"button\">\n  <svg class=\"oc-insertstagebutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Pressed": "<button class=\"oc-insertstagebutton oc-insertstagebutton--state-pressed\" type=\"button\">\n  <svg class=\"oc-insertstagebutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Disabled": "<button class=\"oc-insertstagebutton oc-insertstagebutton--state-disabled\" type=\"button\" disabled>\n  <svg class=\"oc-insertstagebutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>"
};

const CAPTIONS = [
  "InsertStageButton / State: Default",
  "InsertStageButton / State: Hover",
  "InsertStageButton / State: Pressed",
  "InsertStageButton / State: Disabled"
];

export default {
  title: "Actions/InsertStageButton",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `InsertStageButton` (page: Page 2).\n\nRoot element `<button>`, base class `.oc-insertstagebutton`.\n4 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/InsertStageButton/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Default","Hover","Pressed","Disabled"],
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

