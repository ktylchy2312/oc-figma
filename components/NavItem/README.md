# NavItem

Generated from the Figma component set `NavItem` (page: Page 2).

- Markup: [`navitem.html`](navitem.html) - every variant, in order, each preceded by a comment.
- Styles: [`navitem.css`](navitem.css) - requires `tokens/tokens.css`.
- Root element: `<a>`, base class `.oc-navitem`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Active` | `Default` |
| `Collapsed` (variant) | `False`, `True` | `False` |
| `Label` (text) | free text | `"Etapy"` |
| `Icon` (instance swap) | any `Icons` variant | `"32:1258"` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-navitem--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-navitem` | `State=Default, Collapsed=False` (COMPONENT) |
| `.oc-navitem__icon` | `Icons` (INSTANCE) |
| `.oc-navitem__label` | `Etapy` (TEXT) |

