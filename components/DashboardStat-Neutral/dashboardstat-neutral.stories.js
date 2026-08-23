// Generated from the Figma component "DashboardStat/Neutral". Do not hand-edit.

const VARIANTS = {
  "": "<div class=\"oc-dashboardstat-neutral\"></div>"
};

const CAPTIONS = [
  "DashboardStat/Neutral"
];

export default {
  title: "Dashboard/DashboardStat/Neutral",
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: "Generated from the Figma component  `DashboardStat/Neutral` (page: Page 2).\n\nRoot element `<div>`, base class `.oc-dashboardstat-neutral`.\n1 variant.\n\nValues come from the Figma bindings; nothing here is hand-tuned. Full property table in the\ncomponent's [README](../../components/DashboardStat-Neutral/README.md)." } },
  },
};

export const AllVariants = {
  name: "DashboardStat/Neutral",
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

