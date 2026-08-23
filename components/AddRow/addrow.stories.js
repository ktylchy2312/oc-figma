// Generated from the Figma component set "AddRow". Do not hand-edit.

const VARIANTS = {
  "Empty": "<div class=\"oc-addrow oc-addrow--state-empty\">\n  <div class=\"oc-addrow__input\">\n    <input class=\"oc-addrow__label\" type=\"text\" value=\"Nazwa dokumentu\">\n  </div>\n  <div class=\"oc-addrow__addbutton\">\n    <svg class=\"oc-addrow__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  </div>\n</div>",
  "Filled": "<div class=\"oc-addrow oc-addrow--state-filled\">\n  <div class=\"oc-addrow__input\">\n    <input class=\"oc-addrow__label\" type=\"text\" value=\"Nazwa dokumentu\">\n  </div>\n  <div class=\"oc-addrow__addbutton\">\n    <svg class=\"oc-addrow__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  </div>\n</div>"
};

const CAPTIONS = [
  "AddRow / State: Empty",
  "AddRow / State: Filled"
];

export default {
  title: "Forms/AddRow",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `AddRow` (page: Page 2).\n\nRoot element `<div>`, base class `.oc-addrow`.\n2 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/AddRow/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Empty","Filled"],
    },
  },
  args: {
    "State": "Empty",
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

