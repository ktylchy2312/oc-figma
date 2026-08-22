# AlertButton

Generated from the Figma component set `AlertButton` (page: Page 2).

- Markup: [`alertbutton.html`](alertbutton.html) - every variant, in order, each preceded by a comment.
- Styles: [`alertbutton.css`](alertbutton.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-alertbutton`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Tone` (variant) | `Danger`, `Warning`, `Neutral` | `Danger` |
| `State` (variant) | `Default`, `Hover`, `Pressed` | `Default` |
| `Label` (text) | free text | `"Alerty"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-alertbutton--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-alertbutton` | `Tone=Danger, State=Default` (COMPONENT) |
| `.oc-alertbutton__alertbell` | `AlertBell` (INSTANCE) |
| `.oc-alertbutton__label` | `Alerty` (TEXT) |

