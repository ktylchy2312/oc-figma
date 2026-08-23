// Generated from the Figma component "DeleteStageDialog". Do not hand-edit.

const VARIANTS = {
  "": "<dialog class=\"oc-deletestagedialog\">\n  <div class=\"oc-deletestagedialog__header\">\n    <div class=\"oc-deletestagedialog__icontile\">\n      <svg class=\"oc-deletestagedialog__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 11V17\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 11V17\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3 6H21\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n    </div>\n    <span class=\"oc-deletestagedialog__label\">Usunąć etap?</span>\n  </div>\n  <div class=\"oc-deletestagedialog__body\">\n    <span class=\"oc-deletestagedialog__label-2\">Czy na pewno chcesz usunąć etap KUPIONA? Tej operacji nie można cofnąć.</span>\n  </div>\n  <div class=\"oc-deletestagedialog__spacer\"></div>\n  <div class=\"oc-deletestagedialog__actions\">\n    <!-- instance of Button (Variant=Secondary, State=Default) - styling lives in components/Button/ -->\n    <div class=\"oc-deletestagedialog__button\">\n      <button class=\"oc-button\" type=\"button\">\n        <svg class=\"oc-button__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        <span class=\"oc-button__label\">Dodaj samochód</span>\n      </button>\n    </div>\n    <!-- instance of Button (Variant=Danger, State=Default) - styling lives in components/Button/ -->\n    <div class=\"oc-deletestagedialog__button-2\">\n      <button class=\"oc-button\" type=\"button\">\n        <svg class=\"oc-button__icon oc-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12H19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 5V19\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        <span class=\"oc-button__label\">Dodaj samochód</span>\n      </button>\n    </div>\n  </div>\n</dialog>"
};

const CAPTIONS = [
  "DeleteStageDialog"
];

export default {
  title: "Overlays/DeleteStageDialog",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `DeleteStageDialog` (page: Page 2).\n\nRoot element `<dialog>`, base class `.oc-deletestagedialog`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/DeleteStageDialog/README.md)." } },
  },
};

export const AllVariants = {
  name: "DeleteStageDialog",
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

