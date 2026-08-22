# SearchInput

Generated from the Figma component set `SearchInput` (page: Page 2).

- Markup: [`searchinput.html`](searchinput.html) - every variant, in order, each preceded by a comment.
- Styles: [`searchinput.css`](searchinput.css) - requires `tokens/tokens.css`.
- Root element: `<div>`, base class `.oc-searchinput`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Filled`, `Focus`, `Disabled` | `Default` |
| `Label` (text) | free text | `"VIN, numer, sprzedawca..."` |
| `Label2` (text) | free text | `"VIN, numer, sprzedawca..."` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-searchinput--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-searchinput` | `State=Default` (COMPONENT) |
| `.oc-searchinput__icon` | `Icons` (INSTANCE) |
| `.oc-searchinput__label` | `VIN, numer, sprzedawca...` (TEXT) |

