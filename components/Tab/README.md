# Tab

Generated from the Figma component set `Tab` (page: Page 2).

- Markup: [`tab.html`](tab.html) - every variant, in order, each preceded by a comment.
- Styles: [`tab.css`](tab.css) - requires `tokens/tokens.css`.
- Root element: `<button>`, base class `.oc-tab`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Active` (variant) | `Idle`, `Active` | `Idle` |
| `State` (variant) | `Default`, `Hover`, `Pressed` | `Default` |
| `Label` (text) | free text | `"Lista"` |
| `Icon` (instance swap) | any `Icons` variant | `"56:2271"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-tab--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-tab` | `Active=Idle, State=Default` (COMPONENT) |
| `.oc-tab__inner` | `Inner` (FRAME) |
| `.oc-tab__icon` | `Icons` (INSTANCE) |
| `.oc-tab__label` | `Lista` (TEXT) |
| `.oc-tab__spacer` | `Spacer` (FRAME) |
| `.oc-tab__underline` | `Underline` (FRAME) |

