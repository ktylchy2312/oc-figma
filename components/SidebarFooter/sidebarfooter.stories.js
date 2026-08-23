// Generated from the Figma component "SidebarFooter". Do not hand-edit.

const VARIANTS = {
  "": "<footer class=\"oc-sidebarfooter\">\n  <!-- instance of Divider (Divider) - styling lives in components/Divider/ -->\n  <div class=\"oc-sidebarfooter__divider\">\n    <hr class=\"oc-divider\">\n  </div>\n  <div class=\"oc-sidebarfooter__frame-166\">\n    <span class=\"oc-sidebarfooter__label\">OC-KONTROL</span>\n    <div class=\"oc-sidebarfooter__frame-165\">\n      <span class=\"oc-sidebarfooter__label-2\">Wersja 1.4.2 · build 2026.08</span>\n      <span class=\"oc-sidebarfooter__label-3\">© 2026 OC-KONTROL</span>\n    </div>\n  </div>\n</footer>"
};

const CAPTIONS = [
  "SidebarFooter"
];

export default {
  title: "Navigation/SidebarFooter",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `SidebarFooter` (page: Page 2).\n\nRoot element `<footer>`, base class `.oc-sidebarfooter`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/SidebarFooter/README.md)." } },
  },
};

export const AllVariants = {
  name: "SidebarFooter",
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

