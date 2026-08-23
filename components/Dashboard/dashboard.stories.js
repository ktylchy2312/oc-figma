// Generated from the Figma component "Dashboard". Do not hand-edit.

const VARIANTS = {
  "": "<section class=\"oc-dashboard\">\n  <!-- instance of DashboardStat (Variant=Neutral) - styling lives in components/DashboardStat/ -->\n  <div class=\"oc-dashboard__dashboardstat\">\n    <div class=\"oc-dashboardstat\">\n      <span class=\"oc-dashboardstat__label\">ŁĄCZNIE W TOKU</span>\n      <span class=\"oc-dashboardstat__label-2\">7</span>\n    </div>\n  </div>\n  <!-- instance of DashboardStat (Variant=Alert) - styling lives in components/DashboardStat/ -->\n  <div class=\"oc-dashboard__dashboardstat-2\">\n    <div class=\"oc-dashboardstat\">\n      <span class=\"oc-dashboardstat__label\">RYZYKO OC</span>\n      <span class=\"oc-dashboardstat__label-2\">6</span>\n    </div>\n  </div>\n  <!-- instance of DashboardStat (Variant=Neutral) - styling lives in components/DashboardStat/ -->\n  <div class=\"oc-dashboard__dashboardstat-3\">\n    <div class=\"oc-dashboardstat\">\n      <span class=\"oc-dashboardstat__label\">ŁĄCZNIE W TOKU</span>\n      <span class=\"oc-dashboardstat__label-2\">7</span>\n    </div>\n  </div>\n  <!-- instance of DashboardStat (Variant=Neutral) - styling lives in components/DashboardStat/ -->\n  <div class=\"oc-dashboard__dashboardstat-4\">\n    <div class=\"oc-dashboardstat\">\n      <span class=\"oc-dashboardstat__label\">ŁĄCZNIE W TOKU</span>\n      <span class=\"oc-dashboardstat__label-2\">7</span>\n    </div>\n  </div>\n</section>"
};

const CAPTIONS = [
  "Dashboard"
];

export default {
  title: "Dashboard/Dashboard",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `Dashboard` (page: Page 2).\n\nRoot element `<section>`, base class `.oc-dashboard`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/Dashboard/README.md)." } },
  },
};

export const AllVariants = {
  name: "Dashboard",
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

