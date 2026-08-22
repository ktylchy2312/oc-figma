# FormField

Generated from the Figma component set `FormField` (page: Page 2).

- Markup: [`formfield.html`](formfield.html) - every variant, in order, each preceded by a comment.
- Styles: [`formfield.css`](formfield.css) - requires `tokens/tokens.css`.
- Root element: `<div>`, base class `.oc-formfield`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Filled`, `Focus`, `Disabled`, `Error`, `Required`, `WithHint` | `Default` |
| `Value` (text) | free text | `"2004"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-formfield--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-formfield` | `State=Default` (COMPONENT) |
| `.oc-formfield__label` | `Label` (FRAME) |
| `.oc-formfield__label-2` | `Rok produkcji` (TEXT) |
| `.oc-formfield__spacer` | `Spacer` (FRAME) |
| `.oc-formfield__input` | `Input` (FRAME) |
| `.oc-formfield__label-3` | `2004` (TEXT) |

