# PageArrow

Generated from the Figma component set `PageArrow` (page: Page 2).

- Markup: [`pagearrow.html`](pagearrow.html) - every variant, in order, each preceded by a comment.
- Styles: [`pagearrow.css`](pagearrow.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-pagearrow`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Direction` (variant) | `Prev`, `Next` | `Prev` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Disabled` | `Default` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-pagearrow--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-pagearrow` | `Direction=Prev, State=Default` (COMPONENT) |
| `.oc-pagearrow__label` | `‹` (TEXT) |

