# ActionRow

Generated from the Figma component set `ActionRow` (page: Page 2).

- Markup: [`actionrow.html`](actionrow.html) - every variant, in order, each preceded by a comment.
- Styles: [`actionrow.css`](actionrow.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-actionrow`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `Default` |
| `Label` (text) | free text | `"Wycena pojazdu"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-actionrow--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-actionrow` | `State=Default` (COMPONENT) |
| `.oc-actionrow__icon` | `Icons` (INSTANCE) |
| `.oc-actionrow__label` | `Wycena pojazdu` (TEXT) |
| `.oc-actionrow__statuscheck` | `StatusCheck` (INSTANCE) |

