# AddRow

Generated from the Figma component set `AddRow` (page: Page 2).

- Markup: [`addrow.html`](addrow.html) - every variant, in order, each preceded by a comment.
- Styles: [`addrow.css`](addrow.css) - requires `tokens/tokens.css`.
- Root element: `<div>`, base class `.oc-addrow`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Empty`, `Filled` | `Empty` |
| `Label` (text) | free text | `"Nazwa dokumentu"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-addrow--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-addrow` | `State=Empty` (COMPONENT) |
| `.oc-addrow__input` | `Input` (FRAME) |
| `.oc-addrow__label` | `Nazwa dokumentu` (TEXT) |
| `.oc-addrow__addbutton` | `AddButton` (FRAME) |
| `.oc-addrow__icon` | `Icons` (INSTANCE) |

