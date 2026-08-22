# Button

Generated from the Figma component set `Button` (page: Page 2).

- Markup: [`button.html`](button.html) - every variant, in order, each preceded by a comment.
- Styles: [`button.css`](button.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-button`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Variant` (variant) | `Primary`, `Secondary`, `Danger` | `Primary` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Disabled` | `Default` |
| `Label` (text) | free text | `"Dodaj samochód"` |
| `Show Icon` (boolean) | `true`, `false` | `true` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-button--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-button` | `Variant=Primary, State=Default` (COMPONENT) |
| `.oc-button__icon` | `Icons` (INSTANCE) |
| `.oc-button__label` | `Dodaj samochód` (TEXT) |

