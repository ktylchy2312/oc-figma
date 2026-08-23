// Generated from the Figma component set "IconButton". Do not hand-edit.

const VARIANTS = {
  "Neutral|Default": "<button class=\"oc-iconbutton oc-iconbutton--tone-neutral oc-iconbutton--state-default\" type=\"button\">\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Neutral|Hover": "<button class=\"oc-iconbutton oc-iconbutton--tone-neutral oc-iconbutton--state-hover\" type=\"button\">\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Neutral|Pressed": "<button class=\"oc-iconbutton oc-iconbutton--tone-neutral oc-iconbutton--state-pressed\" type=\"button\">\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Neutral|Disabled": "<button class=\"oc-iconbutton oc-iconbutton--tone-neutral oc-iconbutton--state-disabled\" type=\"button\" disabled>\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Danger|Default": "<button class=\"oc-iconbutton oc-iconbutton--tone-danger oc-iconbutton--state-default\" type=\"button\">\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Danger|Hover": "<button class=\"oc-iconbutton oc-iconbutton--tone-danger oc-iconbutton--state-hover\" type=\"button\">\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Danger|Pressed": "<button class=\"oc-iconbutton oc-iconbutton--tone-danger oc-iconbutton--state-pressed\" type=\"button\">\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>",
  "Danger|Disabled": "<button class=\"oc-iconbutton oc-iconbutton--tone-danger oc-iconbutton--state-disabled\" type=\"button\" disabled>\n  <svg class=\"oc-iconbutton__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 6L18 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</button>"
};

const CAPTIONS = [
  "IconButton / Tone: Neutral / State: Default",
  "IconButton / Tone: Neutral / State: Hover",
  "IconButton / Tone: Neutral / State: Pressed",
  "IconButton / Tone: Neutral / State: Disabled",
  "IconButton / Tone: Danger / State: Default",
  "IconButton / Tone: Danger / State: Hover",
  "IconButton / Tone: Danger / State: Pressed",
  "IconButton / Tone: Danger / State: Disabled"
];

export default {
  title: "Actions/IconButton",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `IconButton` (page: Page 2).\n\nRoot element `<button>`, base class `.oc-iconbutton`.\n8 variants, axes: Tone × State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/IconButton/README.md)." } },
  },
  argTypes: {
    "Tone": {
      description: "Figma variant property \"Tone\"",
      control: { type: 'inline-radio' },
      options: ["Neutral","Danger"],
    },
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Default","Hover","Pressed","Disabled"],
    },
  },
  args: {
    "Tone": "Neutral",
    "State": "Default",
  },
};

// Each combination is a real Figma variant, so the control picks markup rather than
// toggling a class - a variant can differ in structure, not just in styling.
export const Playground = {
  render: (args) => {
    const key = ["Tone","State"].map((a) => args[a]).join('|');
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

