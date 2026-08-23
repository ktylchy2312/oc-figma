// Generated from the Figma component set "SearchInput". Do not hand-edit.

const VARIANTS = {
  "Default": "<div class=\"oc-searchinput oc-searchinput--state-default\">\n  <svg class=\"oc-searchinput__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 21L16.66 16.66\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <input class=\"oc-searchinput__label\" type=\"text\" placeholder=\"VIN, numer, sprzedawca...\">\n</div>",
  "Filled": "<div class=\"oc-searchinput oc-searchinput--state-filled\">\n  <svg class=\"oc-searchinput__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 21L16.66 16.66\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <input class=\"oc-searchinput__label\" type=\"text\" placeholder=\"VIN, numer, sprzedawca...\">\n</div>",
  "Focus": "<div class=\"oc-searchinput oc-searchinput--state-focus\">\n  <svg class=\"oc-searchinput__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 21L16.66 16.66\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <div class=\"oc-searchinput__value\">\n    <input class=\"oc-searchinput__label\" type=\"text\" placeholder=\"VIN, numer, sprzedawca...\">\n    <div class=\"oc-searchinput__caret\"></div>\n  </div>\n</div>",
  "Disabled": "<div class=\"oc-searchinput oc-searchinput--state-disabled\">\n  <svg class=\"oc-searchinput__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 21L16.66 16.66\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <input class=\"oc-searchinput__label\" type=\"text\" placeholder=\"VIN, numer, sprzedawca...\" disabled>\n</div>"
};

const CAPTIONS = [
  "SearchInput / State: Default",
  "SearchInput / State: Filled",
  "SearchInput / State: Focus",
  "SearchInput / State: Disabled"
];

export default {
  title: "Forms/SearchInput",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `SearchInput` (page: Page 2).\n\nRoot element `<div>`, base class `.oc-searchinput`.\n4 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/SearchInput/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Default","Filled","Focus","Disabled"],
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

