# FilterButton

Generated from the Figma component set `FilterButton` (page: Page 2).

- Markup: [`filterbutton.html`](filterbutton.html) - every variant, in order, each preceded by a comment.
- Styles: [`filterbutton.css`](filterbutton.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-filterbutton`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Active` | `Default` |
| `Label` (text) | free text | `"Wszystkie"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-filterbutton--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-filterbutton` | `State=Default` (COMPONENT) |
| `.oc-filterbutton__icon` | `Icons` (INSTANCE) |
| `.oc-filterbutton__label` | `Wszystkie` (TEXT) |
| `.oc-filterbutton__icon-2` | `Icons` (INSTANCE) |

