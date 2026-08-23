// Generated from the Figma component set "FilterOption". Do not hand-edit.

const VARIANTS = {
  "All|False": "<button class=\"oc-filteroption oc-filteroption--key-all oc-filteroption--selected-false\" type=\"button\">\n  <div class=\"oc-filteroption__ellipse\"></div>\n  <span class=\"oc-filteroption__label\">Wszystkie</span>\n</button>",
  "All|True": "<button class=\"oc-filteroption oc-filteroption--key-all oc-filteroption--selected-true\" type=\"button\">\n  <div class=\"oc-filteroption__ellipse\"></div>\n  <span class=\"oc-filteroption__label\">Wszystkie</span>\n  <svg class=\"oc-filteroption__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6L9 17L4 12\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Ryzyko|False": "<button class=\"oc-filteroption oc-filteroption--key-ryzyko oc-filteroption--selected-false\" type=\"button\">\n  <div class=\"oc-filteroption__ellipse\"></div>\n  <span class=\"oc-filteroption__label\">Ryzyko OC</span>\n</button>",
  "Ryzyko|True": "<button class=\"oc-filteroption oc-filteroption--key-ryzyko oc-filteroption--selected-true\" type=\"button\">\n  <div class=\"oc-filteroption__ellipse\"></div>\n  <span class=\"oc-filteroption__label\">Ryzyko OC</span>\n  <svg class=\"oc-filteroption__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6L9 17L4 12\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Wygaslo|False": "<button class=\"oc-filteroption oc-filteroption--key-wygaslo oc-filteroption--selected-false\" type=\"button\">\n  <div class=\"oc-filteroption__ellipse\"></div>\n  <span class=\"oc-filteroption__label\">OC wygasło</span>\n</button>",
  "Wygaslo|True": "<button class=\"oc-filteroption oc-filteroption--key-wygaslo oc-filteroption--selected-true\" type=\"button\">\n  <div class=\"oc-filteroption__ellipse\"></div>\n  <span class=\"oc-filteroption__label\">OC wygasło</span>\n  <svg class=\"oc-filteroption__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6L9 17L4 12\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>"
};

const CAPTIONS = [
  "FilterOption / Key: All / Selected: False",
  "FilterOption / Key: All / Selected: True",
  "FilterOption / Key: Ryzyko / Selected: False",
  "FilterOption / Key: Ryzyko / Selected: True",
  "FilterOption / Key: Wygaslo / Selected: False",
  "FilterOption / Key: Wygaslo / Selected: True"
];

export default {
  title: "Actions/FilterOption",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `FilterOption` (page: Page 2).\n\nRoot element `<button>`, base class `.oc-filteroption`.\n6 variants, axes: Key × Selected.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/FilterOption/README.md)." } },
  },
  argTypes: {
    "Key": {
      description: "Figma variant property \"Key\"",
      control: { type: 'inline-radio' },
      options: ["All","Ryzyko","Wygaslo"],
    },
    "Selected": {
      description: "Figma variant property \"Selected\"",
      control: { type: 'inline-radio' },
      options: ["False","True"],
    },
  },
  args: {
    "Key": "All",
    "Selected": "False",
  },
};

// Each combination is a real Figma variant, so the control picks markup rather than
// toggling a class - a variant can differ in structure, not just in styling.
export const Playground = {
  render: (args) => {
    const key = ["Key","Selected"].map((a) => args[a]).join('|');
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

