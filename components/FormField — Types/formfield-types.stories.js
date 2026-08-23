// Generated from the Figma component set "FormField — Types". Do not hand-edit.

const VARIANTS = {
  "Text": "<div class=\"oc-formfield-types oc-formfield-types--variant-text\">\n  <span class=\"oc-formfield-types__label\">Rok produkcji</span>\n  <div class=\"oc-formfield-types__frame\"></div>\n  <div class=\"oc-formfield-types__input\">\n    <span class=\"oc-formfield-types__label-2\">2004</span>\n  </div>\n</div>",
  "Select": "<div class=\"oc-formfield-types oc-formfield-types--variant-select\">\n  <span class=\"oc-formfield-types__label\">Typ dokumentu</span>\n  <div class=\"oc-formfield-types__frame\"></div>\n  <div class=\"oc-formfield-types__input\">\n    <input class=\"oc-formfield-types__label-2\" type=\"text\" value=\"— wybierz —\">\n    <svg class=\"oc-formfield-types__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 9L12 15L18 9\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  </div>\n</div>",
  "Textarea": "<div class=\"oc-formfield-types oc-formfield-types--variant-textarea\">\n  <span class=\"oc-formfield-types__label\">Uwagi</span>\n  <div class=\"oc-formfield-types__frame\"></div>\n  <div class=\"oc-formfield-types__textarea\">\n    <span class=\"oc-formfield-types__label-2\">Dodatkowe informacje...</span>\n  </div>\n</div>"
};

const CAPTIONS = [
  "FormField — Types / Variant: Text",
  "FormField — Types / Variant: Select",
  "FormField — Types / Variant: Textarea"
];

export default {
  title: "Forms/FormField — Types",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `FormField — Types` (page: Page 2).\n\nRoot element `<div>`, base class `.oc-formfield-types`.\n3 variants, axes: Variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/FormField%20%E2%80%94%20Types/README.md)." } },
  },
  argTypes: {
    "Variant": {
      description: "Figma variant property \"Variant\"",
      control: { type: 'inline-radio' },
      options: ["Text","Select","Textarea"],
    },
  },
  args: {
    "Variant": "Text",
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

