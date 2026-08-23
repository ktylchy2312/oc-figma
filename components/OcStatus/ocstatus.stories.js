// Generated from the Figma component set "OcStatus". Do not hand-edit.

const VARIANTS = {
  "Active": "<span class=\"oc-ocstatus oc-ocstatus--state-active\">\n  <svg class=\"oc-ocstatus__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 6V12L16 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <span class=\"oc-ocstatus__label\">OC: 55 dni</span>\n</span>",
  "Soon": "<span class=\"oc-ocstatus oc-ocstatus--state-soon\">\n  <svg class=\"oc-ocstatus__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 6V12L16 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <span class=\"oc-ocstatus__label\">OC: 55 dni</span>\n</span>",
  "Expired": "<span class=\"oc-ocstatus oc-ocstatus--state-expired\">\n  <svg class=\"oc-ocstatus__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 6V12L16 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <span class=\"oc-ocstatus__label\">OC: 55 dni</span>\n</span>",
  "None": "<span class=\"oc-ocstatus oc-ocstatus--state-none\">\n  <svg class=\"oc-ocstatus__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  <span class=\"oc-ocstatus__label\">OC: 55 dni</span>\n</span>"
};

const CAPTIONS = [
  "OcStatus / State: Active",
  "OcStatus / State: Soon",
  "OcStatus / State: Expired",
  "OcStatus / State: None"
];

export default {
  title: "Cards and rows/OcStatus",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `OcStatus` (page: Page 2).\n\nRoot element `<span>`, base class `.oc-ocstatus`.\n4 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/OcStatus/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Active","Soon","Expired","None"],
    },
  },
  args: {
    "State": "Active",
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

