# OcStatus

Generated from the Figma component set `OcStatus` (page: Page 2).

- Markup: [`ocstatus.html`](ocstatus.html) - every variant, in order, each preceded by a comment.
- Styles: [`ocstatus.css`](ocstatus.css) - requires `tokens/tokens.css`.
- Root element: `<span>`, base class `.oc-ocstatus`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Active`, `Soon`, `Expired`, `None` | `Active` |
| `Label` (text) | free text | `"OC: 55 dni"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-ocstatus--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-ocstatus` | `State=Active` (COMPONENT) |
| `.oc-ocstatus__icon` | `Icons` (INSTANCE) |
| `.oc-ocstatus__label` | `OC: 55 dni` (TEXT) |

