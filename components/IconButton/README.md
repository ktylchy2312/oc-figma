# IconButton

Generated from the Figma component set `IconButton` (page: Page 2).

- Markup: [`iconbutton.html`](iconbutton.html) - every variant, in order, each preceded by a comment.
- Styles: [`iconbutton.css`](iconbutton.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-iconbutton`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Tone` (variant) | `Neutral`, `Danger` | `Neutral` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Disabled` | `Default` |
| `Icon` (instance swap) | any `Icons` variant | `"27:1098"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-iconbutton--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-iconbutton` | `Tone=Neutral, State=Default` (COMPONENT) |
| `.oc-iconbutton__icon` | `Icons` (INSTANCE) |

