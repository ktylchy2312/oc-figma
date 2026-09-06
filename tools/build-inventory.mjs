#!/usr/bin/env node
/**
 * build-inventory.mjs — инвентаризация компонентов Figma для пакета переноса.
 *
 *   node tools/build-inventory.mjs
 *
 * Пути по умолчанию — от корня репозитория: --index figma-dump/components-index.json, --out .
 *
 * Пишет `_inventory.json` — состояние фазы 2 на диске, а не в разговоре: после /clear
 * список из 72 строк восстанавливается чтением файла, а не повторным обходом Figma.
 *
 * Группа НАЗНАЧАЕТСЯ ЗДЕСЬ И ТОЛЬКО ЗДЕСЬ, по фиксированному списку §5 контракта.
 * Отдельной картой, а не эвристикой по имени: «ArchiveRow» и «EtapyRow» отличаются
 * не суффиксом, а тем, что первое — таблица архива, второе — этап процесса, и никакое
 * правило по подстроке этого не знает. Компонент, которого нет в карте, получает
 * группу null и попадает в отчёт — молча в «Cards» он не уедет.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { record } from "./stamp.mjs";

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const INDEX = arg("--index", "figma-dump/components-index.json");
const OUT = arg("--out", process.cwd());
const FILE_KEY = arg("--file-key", "9NPCCHVqzumBg7rprMCGIE");

const d = JSON.parse(readFileSync(INDEX, "utf8")).result;

/** `CarCard` -> `car-card`, `OcStatus` -> `oc-status`, `DocsHeader` -> `docs-header`. */
const slugify = (n) => n
  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
  .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
  .replace(/[^A-Za-z0-9]+/g, "-")
  .toLowerCase().replace(/^-|-$/g, "");

const GROUP = {
  // Foundations — то, из чего собрано остальное и что само по себе не действие.
  Icons: "Foundations", Divider: "Foundations", BrandMark: "Foundations",

  // Actions — всё, что нажимают.
  Button: "Actions", IconButton: "Actions", ButtonGroup: "Actions", AlertButton: "Actions",
  AddRow: "Actions", InsertStageButton: "Actions", FilterButton: "Actions",
  ActionItem: "Actions", ActionRow: "Actions",

  // Forms — ввод и выбор.
  FormField: "Forms", SearchInput: "Forms", Select: "Forms", DropZone: "Forms",
  FilterOption: "Forms", Chip: "Forms", MarketChip: "Forms",

  // Navigation — перемещение по приложению.
  NavItem: "Navigation", Sidebar: "Navigation", SidebarFooter: "Navigation",
  Tab: "Navigation", TabBar: "Navigation", TabIcon: "Navigation",
  UnderlineTab: "Navigation", UnderlineTabs: "Navigation",
  ViewToggle: "Navigation", SegmentOption: "Navigation",
  Pagination: "Navigation", PageNumber: "Navigation", PageArrow: "Navigation",
  PageHeader: "Navigation", Dashboard: "Navigation",

  // Cards — контейнеры данных: карточки, строки таблиц и их шапки.
  CarCard: "Cards", PartCard: "Cards", SettingsCard: "Cards", DashboardStat: "Cards",
  GradeBox: "Cards", CellTwoLine: "Cards",
  ArchiveRow: "Cards", ArchiveTable: "Cards", ArchiveTableHeader: "Cards",
  OfferRow: "Cards", OfferTable: "Cards", OfferTableHeader: "Cards",
  DocRow: "Cards", DocsHeader: "Cards", DocItem: "Cards", DocProgress: "Cards",

  // Feedback — состояние системы, а не её управление.
  StatusCheck: "Feedback", StatusDot: "Feedback", StatusPill: "Feedback", OcStatus: "Feedback",
  CountBadge: "Feedback", CountChip: "Feedback", AlertBell: "Feedback",
  EmptyState: "Feedback", EmptyArt: "Feedback", EmptyTitle: "Feedback", EmptySub: "Feedback",
  InlineNote: "Feedback", Tooltip: "Feedback",

  // Stage — доска этапов: то, что существует только внутри процесса OC.
  BoardColumnHeader: "Stage", ColumnHeader: "Stage", StageBody: "Stage",
  EtapyRow: "Stage", EtapyTable: "Stage", EtapyTableHeader: "Stage",

  // Overlays — то, что лежит поверх.
  Dialog: "Overlays", DeleteStageDialog: "Overlays", CardDragOverlay: "Overlays",
};

const items = d.components.map((c) => ({
  slug: slugify(c.name),
  name: c.name,
  group: GROUP[c.name] ?? null,
  path: `components/${slugify(c.name)}/`,
  nodeId: c.id,
  kind: c.kind,
  level: c.level,
  variantCount: c.variantCount,
  axes: c.axes,
  page: c.page,
  usedBy: c.usedBy,
  uses: c.inside ? c.inside.uses : [],
  role: "source",
}));

const dupes = items.filter((a, i) => items.findIndex((b) => b.slug === a.slug) !== i).map((a) => a.slug);
const ungrouped = items.filter((i) => !i.group).map((i) => i.name);

mkdirSync(OUT, { recursive: true });
const inventory = {
  source: { fileKey: FILE_KEY, file: d.file, index: INDEX },
  totals: {
    components: items.length,
    sets: items.filter((i) => i.kind === "SET").length,
    singles: items.filter((i) => i.kind === "ONE").length,
    byLevel: items.reduce((a, i) => ((a[i.level] = (a[i.level] || 0) + 1), a), {}),
    byGroup: items.reduce((a, i) => ((a[i.group ?? "(нет)"] = (a[i.group ?? "(нет)"] || 0) + 1), a), {}),
    byPage: items.reduce((a, i) => ((a[i.page] = (a[i.page] || 0) + 1), a), {}),
    variantObjectsTotal: items.reduce((a, i) => a + i.variantCount, 0),
  },
  problems: { duplicateSlugs: dupes, ungrouped },
  components: items.sort((a, b) => a.name.localeCompare(b.name)),
};
writeFileSync(join(OUT, "_inventory.json"), JSON.stringify(inventory, null, 2) + "\n");
console.log(JSON.stringify({ totals: inventory.totals, problems: inventory.problems }, null, 2));

record("build-inventory", { index: INDEX }, OUT);
