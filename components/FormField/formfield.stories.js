// Generated from the Figma component set "FormField". Do not hand-edit.

const VARIANTS = {
  "Default": "<div class=\"oc-formfield oc-formfield--state-default\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-3\">2004</span>\n  </div>\n</div>",
  "Filled": "<div class=\"oc-formfield oc-formfield--state-filled\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-3\">2004</span>\n  </div>\n</div>",
  "Focus": "<div class=\"oc-formfield oc-formfield--state-focus\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-3\">2004</span>\n    <div class=\"oc-formfield__caret\"></div>\n  </div>\n</div>",
  "Disabled": "<div class=\"oc-formfield oc-formfield--state-disabled\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-3\">2004</span>\n  </div>\n</div>",
  "Error": "<div class=\"oc-formfield oc-formfield--state-error\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-3\">2004</span>\n  </div>\n  <div class=\"oc-formfield__frame\"></div>\n  <input class=\"oc-formfield__label-4\" type=\"text\" value=\"Podaj poprawny rok (4 cyfry).\">\n</div>",
  "Required": "<div class=\"oc-formfield oc-formfield--state-required\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n    <span class=\"oc-formfield__label-3\">*</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-4\">2004</span>\n  </div>\n</div>",
  "WithHint": "<div class=\"oc-formfield oc-formfield--state-withhint\">\n  <div class=\"oc-formfield__label\">\n    <span class=\"oc-formfield__label-2\">Rok produkcji</span>\n  </div>\n  <div class=\"oc-formfield__spacer\"></div>\n  <div class=\"oc-formfield__input\">\n    <span class=\"oc-formfield__label-3\">2004</span>\n  </div>\n  <div class=\"oc-formfield__frame\"></div>\n  <input class=\"oc-formfield__label-4\" type=\"text\" value=\"Rok pierwszej rejestracji pojazdu.\">\n</div>"
};

const CAPTIONS = [
  "FormField / State: Default",
  "FormField / State: Filled",
  "FormField / State: Focus",
  "FormField / State: Disabled",
  "FormField / State: Error",
  "FormField / State: Required",
  "FormField / State: WithHint"
];

export default {
  title: "Forms/FormField",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `FormField` (page: Page 2).\n\nRoot element `<div>`, base class `.oc-formfield`.\n7 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/FormField/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'select' },
      options: ["Default","Filled","Focus","Disabled","Error","Required","WithHint"],
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

