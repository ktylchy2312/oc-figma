# DocRow

Generated from the Figma component set `DocRow` (page: Page 2).

- Markup: [`docrow.html`](docrow.html) - every variant, in order, each preceded by a comment.
- Styles: [`docrow.css`](docrow.css) - requires `tokens/tokens.css`.
- Root element: `<div>`, base class `.oc-docrow`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Status` (variant) | `Done`, `Warn`, `Pending` | `Done` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `Default` |
| `Label` (text) | free text | `"Dowód rejestracyjny"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-docrow--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-docrow` | `Status=Done, State=Default` (COMPONENT) |
| `.oc-docrow__icon` | `Icons` (INSTANCE) |
| `.oc-docrow__label` | `Dowód rejestracyjny` (TEXT) |
| `.oc-docrow__statuscheck` | `StatusCheck` (INSTANCE) |

