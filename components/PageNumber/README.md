# PageNumber

Generated from the Figma component set `PageNumber` (page: Page 2).

- Markup: [`pagenumber.html`](pagenumber.html) - every variant, in order, each preceded by a comment.
- Styles: [`pagenumber.css`](pagenumber.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-pagenumber`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Hover`, `Active` | `Default` |
| `Label` (text) | free text | `"2"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-pagenumber--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-pagenumber` | `State=Default` (COMPONENT) |
| `.oc-pagenumber__label` | `2` (TEXT) |

