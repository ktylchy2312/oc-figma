// Generated from the Figma component set "StatusCheck". Do not hand-edit.

const VARIANTS = {
  "Done": "<span class=\"oc-statuscheck oc-statuscheck--state-done\">\n  <svg class=\"oc-statuscheck__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9 12L11 14L15 10\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</span>",
  "Warn": "<span class=\"oc-statuscheck oc-statuscheck--state-warn\">\n  <svg class=\"oc-statuscheck__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.73 18L13.73 4.00001C13.5556 3.69222 13.3026 3.4362 12.9969 3.25808C12.6913 3.07996 12.3438 2.98611 11.99 2.98611C11.6362 2.98611 11.2888 3.07996 10.9831 3.25808C10.6774 3.4362 10.4244 3.69222 10.25 4.00001L2.25001 18C2.07369 18.3054 1.98123 18.6519 1.98201 19.0045C1.9828 19.3571 2.07678 19.7033 2.25445 20.0078C2.43212 20.3124 2.68715 20.5646 2.9937 20.7388C3.30025 20.9131 3.64741 21.0032 4.00001 21H20C20.3509 20.9997 20.6955 20.907 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.998 18.9995C21.9979 18.6486 21.9055 18.3039 21.73 18Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 9V13\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 17H12.01\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</span>",
  "Pending": "<span class=\"oc-statuscheck oc-statuscheck--state-pending\">\n  <svg class=\"oc-statuscheck__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n</span>"
};

const CAPTIONS = [
  "StatusCheck / State: Done",
  "StatusCheck / State: Warn",
  "StatusCheck / State: Pending"
];

export default {
  title: "Cards and rows/StatusCheck",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component set `StatusCheck` (page: Page 2).\n\nRoot element `<span>`, base class `.oc-statuscheck`.\n3 variants, axes: State.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/StatusCheck/README.md)." } },
  },
  argTypes: {
    "State": {
      description: "Figma variant property \"State\"",
      control: { type: 'inline-radio' },
      options: ["Done","Warn","Pending"],
    },
  },
  args: {
    "State": "Done",
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

