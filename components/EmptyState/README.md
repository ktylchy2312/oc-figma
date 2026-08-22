# EmptyState

Generated from the Figma component set `EmptyState` (page: Page 2).

- Markup: [`emptystate.html`](emptystate.html) - every variant, in order, each preceded by a comment.
- Styles: [`emptystate.css`](emptystate.css) - requires `tokens/tokens.css`.
- Root element: `<section>`, base class `.oc-emptystate`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `State` (variant) | `Default`, `DragOver` | `Default` |
| `Density` (variant) | `Default`, `Compact` | `Default` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-emptystate--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-emptystate` | `State=Default, Density=Default` (COMPONENT) |
| `.oc-emptystate__emptyart` | `EmptyArt` (INSTANCE) |
| `.oc-emptystate__emptytitle` | `EmptyTitle` (INSTANCE) |
| `.oc-emptystate__emptysub` | `EmptySub` (INSTANCE) |

