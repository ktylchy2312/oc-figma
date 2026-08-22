# ColumnHeader

Generated from the Figma component set `ColumnHeader` (page: Page 2).

- Markup: [`columnheader.html`](columnheader.html) - every variant, in order, each preceded by a comment.
- Styles: [`columnheader.css`](columnheader.css) - requires `tokens/tokens.css`.
- Root element: `<div>`, base class `.oc-columnheader`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Edit` | `Default` |
| `Label` (text) | free text | `"KUPIONA"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-columnheader--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-columnheader` | `State=Default` (COMPONENT) |
| `.oc-columnheader__label` | `KUPIONA` (TEXT) |
| `.oc-columnheader__iconbutton` | `IconButton` (FRAME) |
| `.oc-columnheader__icon` | `Icons` (INSTANCE) |
| `.oc-columnheader__iconbutton-2` | `IconButton` (FRAME) |
| `.oc-columnheader__icon-2` | `Icons` (INSTANCE) |

