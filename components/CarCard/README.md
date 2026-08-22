# CarCard

Generated from the Figma component set `CarCard` (page: Page 2).

- Markup: [`carcard.html`](carcard.html) - every variant, in order, each preceded by a comment.
- Styles: [`carcard.css`](carcard.css) - requires `tokens/tokens.css`.
- Root element: `<article>`, base class `.oc-carcard`

## Properties

| Property | Possible values | Default |
|---|---|---|
| `Size` (variant) | `Full`, `Compact` | `Full` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `Default` |

## States

Each `State` value is emitted twice: as a static modifier class (`.oc-carcard--state-hover`)
so the showcase can render every state at once, and as the matching CSS pseudo-class
(`:hover`, `:active`, `:focus-visible`, `:disabled`) so the component behaves in a live page.

## Class names

| Class | Figma layer |
|---|---|
| `.oc-carcard` | `Size=Full, State=Default` (COMPONENT) |
| `.oc-carcard__content` | `Content` (FRAME) |
| `.oc-carcard__frame-142` | `Frame 142` (FRAME) |
| `.oc-carcard__frame-5` | `Frame 5` (FRAME) |
| `.oc-carcard__headerrow` | `HeaderRow` (FRAME) |
| `.oc-carcard__label` | `PO 1145X` (TEXT) |
| `.oc-carcard__ocstatus` | `OcStatus` (INSTANCE) |
| `.oc-carcard__metarow` | `MetaRow` (FRAME) |
| `.oc-carcard__label-2` | `Fiat Punto II, 2003 r.` (TEXT) |
| `.oc-carcard__label-3` | `Kupiona: 03.08.2026` (TEXT) |
| `.oc-carcard__label-4` | `VIN: ZFA1880000451256` (TEXT) |
| `.oc-carcard__divider` | `Divider` (FRAME) |
| `.oc-carcard__rows` | `Rows` (FRAME) |
| `.oc-carcard__actionrow` | `ActionRow` (INSTANCE) |
| `.oc-carcard__list` | `List` (FRAME) |
| `.oc-carcard__docsheader` | `DocsHeader` (INSTANCE) |
| `.oc-carcard__doclist` | `DocList` (FRAME) |
| `.oc-carcard__docrow` | `DocRow` (INSTANCE) |
| `.oc-carcard__docrow-2` | `DocRow` (INSTANCE) |
| `.oc-carcard__docrow-3` | `DocRow` (INSTANCE) |
| `.oc-carcard__docrow-4` | `DocRow` (INSTANCE) |

