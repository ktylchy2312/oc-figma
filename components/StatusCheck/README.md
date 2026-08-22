# StatusCheck

Generated from the Figma component set `StatusCheck` (page: Page 2).

- Markup: [`statuscheck.html`](statuscheck.html) - every variant, in order, each preceded by a comment.
- Styles: [`statuscheck.css`](statuscheck.css) - requires `tokens/tokens.css`.
- Root element: `<span>`, base class `.oc-statuscheck`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Done`, `Warn`, `Pending` | `Done` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-statuscheck--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-statuscheck` | `State=Done` (COMPONENT) |
| `.oc-statuscheck__icon` | `Icons` (INSTANCE) |

