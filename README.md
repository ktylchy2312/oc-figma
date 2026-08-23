# OC-Kontrol design system — HTML + CSS

The OC-Kontrol design system, extracted from Figma and written out as plain HTML and CSS.
The components themselves have no build step, no framework and no dependencies: open
`index.html` in a browser and they work.

- **[index.html](index.html)** — every component, in every variant it has in Figma
- **[tokens/preview.html](tokens/preview.html)** — the palette, type scale, spacing and radius scales, shadows
- **Storybook** — the same components with per-variant controls: `npm install && npm run storybook`

53 components · 209 variants · 108 variables · 12 text styles · 3 effect styles

## How it was made

Everything in `tokens/` and `components/` is generated straight from the Figma document
through the Figma Plugin API — variables, styles, component sets, variant matrices, and the
icon SVGs. Colours, spacing, radii, shadows and type are read off the Figma bindings, so a
value in this repo is the value in Figma, not an approximation of it.

Where a Figma layer has a raw value with **no** variable or style attached, the generator emits
that literal value and marks it:

```css
padding: 10px 14px 10px 14px; /* TODO: spacing not bound to a Figma variable */
```

There are 98 such markers. Each one is a real gap in the Figma file, not a gap in this
repo — the fix is to bind the value in Figma and regenerate.

Two files are the exception, and both say so at the top: `base.css` (a reset — a Figma file has
no notion of a user-agent default) and the layout CSS embedded in the two preview pages.

## Storybook

```
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build into storybook-static/
```

Storybook is the only part of this repo that needs Node. It is a viewer laid over the same
files — the stories import nothing but the generated markup and `components/**/*.css`, so what
you see in Storybook and what you get from a plain `<link>` tag cannot drift apart.

Each component gets two stories:

- **Playground** — one control per Figma variant axis. The controls swap *markup*, not just a
  class: a Figma variant can differ in structure, not only in styling, so `State: Hover` shows
  the actual Hover variant rather than a guess at what hovering would do. Combinations that
  don't exist in Figma say so instead of rendering something invented.
- **All variants** — the full matrix at once, each labelled with its Figma variant name.

The toolbar has a Dark / Light / System switch wired to the same `data-theme` attribute the
components use, so light-theme gaps are visible here too.

Stories are generated alongside everything else; `<name>.stories.js` is not hand-written.

## Structure

```
tokens/
  tokens.css        CSS custom properties, grouped by category
  tokens.json       the same tokens for programmatic use, with Figma names kept
  preview.html      visual palette, type scale, spacing scale
components/
  <Name>/
    <name>.html        every variant, each preceded by a comment naming it
    <name>.css         styles, referencing tokens.css only
    <name>.stories.js  Storybook stories, generated
    README.md          property table: property | possible values | default
  manifest.json        index of all components, generated
base.css               minimal reset (the one non-Figma stylesheet)
index.html             showcase
.storybook/            Storybook config
```

## Using the tokens

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="components/Button/button.css">
```

```html
<button type="button" class="oc-button oc-button--variant-primary">
  <span class="oc-button__label">Dodaj samochód</span>
</button>
```

Naming follows the Figma variable path, lowercased, with `/` replaced by `-` and a category
prefix: `Color → Surface/Default` becomes `--color-surface-default`, `Spacing → space-4`
becomes `--space-4`, `Radius → md` becomes `--radius-md`. Every declaration in
`tokens.css` carries its original Figma name in a trailing comment.

Semantic colours alias the primitive ramps, exactly as in Figma:

```css
--color-surface-default: var(--color-neutral-850); /* Surface/Default -> Neutral/850 */
```

Bind components to the semantic layer (`--color-surface-*`, `--color-text-*`, `--color-accent-*`,
`--color-border-*`, `--color-status-*`). The `Primitives` ramps are hidden from publishing in
Figma and exist here only so the aliases resolve.

## Theming

The source file is dark-first: its Figma `Color` collection has a single mode, `Dark`. Light
lives in a separate collection, `Color (Light)`, because the file is on a plan capped at one
mode per collection. So `:root` carries the dark values and light is an override:

```html
<html data-theme="light">   <!-- force light -->
<html data-theme="dark">    <!-- force dark  -->
<html>                      <!-- follow prefers-color-scheme, defaulting to dark -->
```

Four tokens exist in the dark collection with no light counterpart —
`Surface/Raised-Hover`, `Surface/Raised-Pressed`, `Status/Error/Bg-Hover`,
`Status/Warning/Bg-Hover`. They keep their dark value under the light theme and are marked
with a TODO in `tokens.css`. Add them in Figma and regenerate rather than filling them in here.

## Variants and states

Each component's variant axes become modifier classes: `.oc-button--variant-primary`,
`.oc-button--state-hover`. A `State` axis is emitted twice — as that static modifier, so the
showcase can display every state at once, and as the matching CSS pseudo-class, so the
component behaves correctly in a real page:

```css
.oc-button.oc-button--variant-primary.oc-button--state-hover,
.oc-button.oc-button--variant-primary:not(:disabled):hover { background: var(--color-accent-hover); }
```

## Components

| Group | Components |
|---|---|
| **Actions** | [Button](components/Button/README.md), [IconButton](components/IconButton/README.md), [InsertStageButton](components/InsertStageButton/README.md), [AlertButton](components/AlertButton/README.md), [AlertBell](components/AlertBell/README.md), [FilterButton](components/FilterButton/README.md), [FilterOption](components/FilterOption/README.md), [PageArrow](components/PageArrow/README.md), [PageNumber](components/PageNumber/README.md), [Pagination](components/Pagination/README.md) |
| **Forms** | [FormField](components/FormField/README.md), [FormField — Types](components/FormField%20%E2%80%94%20Types/README.md), [SearchInput](components/SearchInput/README.md), [AddRow](components/AddRow/README.md), [ColumnHeader](components/ColumnHeader/README.md) |
| **Navigation** | [Sidebar](components/Sidebar/README.md), [SidebarFooter](components/SidebarFooter/README.md), [NavItem](components/NavItem/README.md), [NavIcon](components/NavIcon/README.md), [NavLabel](components/NavLabel/README.md), [Tab](components/Tab/README.md), [TabBar](components/TabBar/README.md), [TabIcon](components/TabIcon/README.md), [TabLabel](components/TabLabel/README.md), [Indicator](components/Indicator/README.md), [BrandMark](components/BrandMark/README.md) |
| **Cards and rows** | [CarCard](components/CarCard/README.md), [DocRow](components/DocRow/README.md), [DocsHeader](components/DocsHeader/README.md), [ActionRow](components/ActionRow/README.md), [DocItem](components/DocItem/README.md), [ActionItem](components/ActionItem/README.md), [StatusCheck](components/StatusCheck/README.md), [OcStatus](components/OcStatus/README.md), [Chip](components/Chip/README.md), [CountChip](components/CountChip/README.md) |
| **Dashboard** | [Dashboard](components/Dashboard/README.md), [DashboardStat](components/DashboardStat/README.md), [DashboardStat/Neutral](components/DashboardStat-Neutral/README.md), [BoardColumnHeader](components/BoardColumnHeader/README.md) |
| **Board and empty states** | [StageBody=Empty](components/StageBody%3DEmpty/README.md), [StageBody=DragOver](components/StageBody%3DDragOver/README.md), [EmptyState](components/EmptyState/README.md), [EmptyArt](components/EmptyArt/README.md), [EmptyTitle](components/EmptyTitle/README.md), [EmptySub](components/EmptySub/README.md), [DropZone](components/DropZone/README.md), [CardDragOverlay](components/CardDragOverlay/README.md) |
| **Overlays** | [DeleteStageDialog](components/DeleteStageDialog/README.md) |
| **Separators** | [Divider](components/Divider/README.md), [BarDivider](components/BarDivider/README.md), [SectionLabel](components/SectionLabel/README.md) |
| **Icons** | [Icons](components/Icons/README.md) |

## Icons

`Icons` is a set of 52 inline SVGs (26 icons × 2 styles), exported from Figma. Stroke and fill
are rewritten to `currentColor`, matching the rule the Figma file follows: an icon takes the
colour of the text beside it. Set `color` on the icon or any ancestor to recolour it.

## What is not here

The Figma file is a product design system for a specific application, not a general-purpose UI
kit. It has no Checkbox, Radio, Avatar, Link, Dropdown, Table, Toast, Tooltip or Breadcrumbs —
so neither does this repo. Nothing was invented to fill those gaps.
