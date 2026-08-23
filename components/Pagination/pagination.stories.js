// Generated from the Figma component "Pagination". Do not hand-edit.

const VARIANTS = {
  "": "<nav class=\"oc-pagination\" aria-label=\"Pagination\">\n  <div class=\"oc-pagination__controls\">\n    <!-- instance of PageArrow (Direction=Prev, State=Default) - styling lives in components/PageArrow/ -->\n    <div class=\"oc-pagination__pagearrow\">\n      <button class=\"oc-pagearrow\" type=\"button\">\n        <span class=\"oc-pagearrow__label\">‹</span>\n      </button>\n    </div>\n    <!-- instance of PageNumber (State=Active) - styling lives in components/PageNumber/ -->\n    <div class=\"oc-pagination__pagenumber\">\n      <button class=\"oc-pagenumber\" type=\"button\">\n        <span class=\"oc-pagenumber__label\">2</span>\n      </button>\n    </div>\n    <!-- instance of PageNumber (State=Default) - styling lives in components/PageNumber/ -->\n    <div class=\"oc-pagination__pagenumber-2\">\n      <button class=\"oc-pagenumber\" type=\"button\">\n        <span class=\"oc-pagenumber__label\">2</span>\n      </button>\n    </div>\n    <!-- instance of PageNumber (State=Default) - styling lives in components/PageNumber/ -->\n    <div class=\"oc-pagination__pagenumber-3\">\n      <button class=\"oc-pagenumber\" type=\"button\">\n        <span class=\"oc-pagenumber__label\">2</span>\n      </button>\n    </div>\n    <!-- instance of PageArrow (Direction=Next, State=Default) - styling lives in components/PageArrow/ -->\n    <div class=\"oc-pagination__pagearrow-2\">\n      <button class=\"oc-pagearrow\" type=\"button\">\n        <span class=\"oc-pagearrow__label\">›</span>\n      </button>\n    </div>\n  </div>\n  <span class=\"oc-pagination__label\">Wyświetlono 1–5 z 13</span>\n</nav>"
};

const CAPTIONS = [
  "Pagination"
];

export default {
  title: "Actions/Pagination",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `Pagination` (page: Page 2).\n\nRoot element `<nav>`, base class `.oc-pagination`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/Pagination/README.md)." } },
  },
};

export const AllVariants = {
  name: "Pagination",
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

