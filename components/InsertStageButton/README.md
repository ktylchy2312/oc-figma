# InsertStageButton

Generated from the Figma component set `InsertStageButton` (page: Page 2).

- Markup: [`insertstagebutton.html`](insertstagebutton.html) - every variant, in order, each preceded by a comment.
- Styles: [`insertstagebutton.css`](insertstagebutton.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-insertstagebutton`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Disabled` | `Default` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-insertstagebutton--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-insertstagebutton` | `State=Default` (COMPONENT) |
| `.oc-insertstagebutton__icon` | `Icons` (INSTANCE) |

