# CarCard

Сгенерировано из набора компонентов Figma `CarCard`.

- Разметка: [`car-card.html`](car-card.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`car-card.css`](car-card.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-car-card`
- Группа Cards, уровень organism, вариантов 8

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Signature` (text) | свободный текст | `"PO 1145X"` |
| `Model` (text) | свободный текст | `"Fiat Punto II, 2003 r."` |
| `Bought` (text) | свободный текст | `"Kupiona: 03.08.2026"` |
| `Vin` (text) | свободный текст | `"VIN: ZFA1880000451256"` |
| `Size` (variant) | `Full`, `Compact` | `"Full"` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-car-card--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-car-card` | `CarCard` |
| `.oc-car-card__content` | `Content` |
| `.oc-car-card__frame-142` | `Frame 142` |
| `.oc-car-card__frame-142-frame-5` | `Frame 5` |
| `.oc-car-card__frame-142-frame-5-header-row` | `HeaderRow` |
| `.oc-car-card__frame-142-frame-5-header-row-signature` | `PO 1145X` |
| `.oc-car-card__frame-142-frame-5-header-row-oc-status` | `OcStatus` |
| `.oc-car-card__frame-142-frame-5-header-row-oc-status-icon-clock` | `Icons` |
| `.oc-car-card__frame-142-frame-5-header-row-oc-status-label` | `OC: 55 dni` |
| `.oc-car-card__frame-142-frame-5-meta-row` | `MetaRow` |
| `.oc-car-card__frame-142-frame-5-meta-row-model` | `Fiat Punto II, 2003 r.` |
| `.oc-car-card__frame-142-frame-5-meta-row-bought` | `Kupiona: 03.08.2026` |
| `.oc-car-card__frame-142-frame-5-vin` | `VIN: ZFA1880000451256` |
| `.oc-car-card__frame-142-divider` | `Divider` |
| `.oc-car-card__frame-142-rows` | `Rows` |
| `.oc-car-card__frame-142-rows-action-row` | `ActionRow` |
| `.oc-car-card__frame-142-rows-action-row-icon-bolt` | `Icons` |
| `.oc-car-card__frame-142-rows-action-row-label` | `Wycena pojazdu` |
| `.oc-car-card__frame-142-rows-action-row-status-check` | `StatusCheck` |
| `.oc-car-card__frame-142-rows-action-row-status-check-icon-circle-check` | `Icons` |
| `.oc-car-card__frame-142-rows-list` | `List` |
| `.oc-car-card__frame-142-rows-list-docs-header` | `DocsHeader` |
| `.oc-car-card__frame-142-rows-list-docs-header-icon-warning` | `Icons` |
| `.oc-car-card__frame-142-rows-list-docs-header-dokumenty` | `Dokumenty` |
| `.oc-car-card__frame-142-rows-list-docs-header-chip` | `Chip` |
| `.oc-car-card__frame-142-rows-list-docs-header-chip-label` | `3/5` |
| `.oc-car-card__frame-142-rows-list-docs-header-icon-chevron-down` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list` | `DocList` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row` | `DocRow` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-icon-document` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-label` | `Dowód rejestracyjny` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-status-check` | `StatusCheck` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-status-check-icon-circle-check` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-2` | `DocRow` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-2-icon-document` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-2-label` | `Dowód rejestracyjny` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-2-status-check` | `StatusCheck` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-2-status-check-icon-circle-check` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-3` | `DocRow` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-3-icon-document` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-3-label` | `Dowód rejestracyjny` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-3-status-check` | `StatusCheck` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-3-status-check-icon-warning` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-4` | `DocRow` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-4-icon-document` | `Icons` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-4-label` | `Dowód rejestracyjny` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-4-status-check` | `StatusCheck` |
| `.oc-car-card__frame-142-rows-list-doc-list-doc-row-4-status-check-icon-circle` | `Icons` |
| `.oc-car-card__frame-151` | `content/frame-151` |
| `.oc-car-card__frame-151-frame-5` | `content/frame-151/frame-5` |
| `.oc-car-card__frame-151-frame-5-header-row` | `content/frame-151/frame-5/header-row` |
| `.oc-car-card__frame-151-frame-5-header-row-signature` | `content/frame-151/frame-5/header-row/signature` |
| `.oc-car-card__frame-151-frame-5-header-row-oc-status` | `content/frame-151/frame-5/header-row/oc-status` |
| `.oc-car-card__frame-151-frame-5-header-row-oc-status-icon-clock` | `content/frame-151/frame-5/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-151-frame-5-header-row-oc-status-label` | `content/frame-151/frame-5/header-row/oc-status/label` |
| `.oc-car-card__frame-151-frame-5-meta-row` | `content/frame-151/frame-5/meta-row` |
| `.oc-car-card__frame-151-frame-5-meta-row-model` | `content/frame-151/frame-5/meta-row/model` |
| `.oc-car-card__frame-151-frame-5-meta-row-bought` | `content/frame-151/frame-5/meta-row/bought` |
| `.oc-car-card__frame-151-frame-5-vin` | `content/frame-151/frame-5/vin` |
| `.oc-car-card__frame-151-divider` | `content/frame-151/divider` |
| `.oc-car-card__frame-151-rows` | `content/frame-151/rows` |
| `.oc-car-card__frame-151-rows-action-row` | `content/frame-151/rows/action-row` |
| `.oc-car-card__frame-151-rows-action-row-icon-bolt` | `content/frame-151/rows/action-row/icon-bolt` |
| `.oc-car-card__frame-151-rows-action-row-label` | `content/frame-151/rows/action-row/label` |
| `.oc-car-card__frame-151-rows-action-row-status-check` | `content/frame-151/rows/action-row/status-check` |
| `.oc-car-card__frame-151-rows-action-row-status-check-icon-circle-check` | `content/frame-151/rows/action-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-151-rows-list` | `content/frame-151/rows/list` |
| `.oc-car-card__frame-151-rows-list-docs-header` | `content/frame-151/rows/list/docs-header` |
| `.oc-car-card__frame-151-rows-list-docs-header-icon-warning` | `content/frame-151/rows/list/docs-header/icon-warning` |
| `.oc-car-card__frame-151-rows-list-docs-header-dokumenty` | `content/frame-151/rows/list/docs-header/dokumenty` |
| `.oc-car-card__frame-151-rows-list-docs-header-chip` | `content/frame-151/rows/list/docs-header/chip` |
| `.oc-car-card__frame-151-rows-list-docs-header-chip-label` | `content/frame-151/rows/list/docs-header/chip/label` |
| `.oc-car-card__frame-151-rows-list-docs-header-icon-chevron-down` | `content/frame-151/rows/list/docs-header/icon-chevron-down` |
| `.oc-car-card__frame-151-rows-list-doc-list` | `content/frame-151/rows/list/doc-list` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row` | `content/frame-151/rows/list/doc-list/doc-row` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-icon-document` | `content/frame-151/rows/list/doc-list/doc-row/icon-document` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-label` | `content/frame-151/rows/list/doc-list/doc-row/label` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-status-check` | `content/frame-151/rows/list/doc-list/doc-row/status-check` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-151/rows/list/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-2` | `content/frame-151/rows/list/doc-list/doc-row-2` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-2-icon-document` | `content/frame-151/rows/list/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-2-label` | `content/frame-151/rows/list/doc-list/doc-row-2/label` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-2-status-check` | `content/frame-151/rows/list/doc-list/doc-row-2/status-check` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-151/rows/list/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-3` | `content/frame-151/rows/list/doc-list/doc-row-3` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-3-icon-document` | `content/frame-151/rows/list/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-3-label` | `content/frame-151/rows/list/doc-list/doc-row-3/label` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-3-status-check` | `content/frame-151/rows/list/doc-list/doc-row-3/status-check` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-151/rows/list/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-4` | `content/frame-151/rows/list/doc-list/doc-row-4` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-4-icon-document` | `content/frame-151/rows/list/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-4-label` | `content/frame-151/rows/list/doc-list/doc-row-4/label` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-4-status-check` | `content/frame-151/rows/list/doc-list/doc-row-4/status-check` |
| `.oc-car-card__frame-151-rows-list-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-151/rows/list/doc-list/doc-row-4/status-check/icon-circle` |
| `.oc-car-card__frame-152` | `content/frame-152` |
| `.oc-car-card__frame-152-frame-5` | `content/frame-152/frame-5` |
| `.oc-car-card__frame-152-frame-5-header-row` | `content/frame-152/frame-5/header-row` |
| `.oc-car-card__frame-152-frame-5-header-row-signature` | `content/frame-152/frame-5/header-row/signature` |
| `.oc-car-card__frame-152-frame-5-header-row-oc-status` | `content/frame-152/frame-5/header-row/oc-status` |
| `.oc-car-card__frame-152-frame-5-header-row-oc-status-icon-clock` | `content/frame-152/frame-5/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-152-frame-5-header-row-oc-status-label` | `content/frame-152/frame-5/header-row/oc-status/label` |
| `.oc-car-card__frame-152-frame-5-meta-row` | `content/frame-152/frame-5/meta-row` |
| `.oc-car-card__frame-152-frame-5-meta-row-model` | `content/frame-152/frame-5/meta-row/model` |
| `.oc-car-card__frame-152-frame-5-meta-row-bought` | `content/frame-152/frame-5/meta-row/bought` |
| `.oc-car-card__frame-152-frame-5-vin` | `content/frame-152/frame-5/vin` |
| `.oc-car-card__frame-152-divider` | `content/frame-152/divider` |
| `.oc-car-card__frame-152-rows` | `content/frame-152/rows` |
| `.oc-car-card__frame-152-rows-action-row` | `content/frame-152/rows/action-row` |
| `.oc-car-card__frame-152-rows-action-row-icon-bolt` | `content/frame-152/rows/action-row/icon-bolt` |
| `.oc-car-card__frame-152-rows-action-row-label` | `content/frame-152/rows/action-row/label` |
| `.oc-car-card__frame-152-rows-action-row-status-check` | `content/frame-152/rows/action-row/status-check` |
| `.oc-car-card__frame-152-rows-action-row-status-check-icon-circle-check` | `content/frame-152/rows/action-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-152-rows-list` | `content/frame-152/rows/list` |
| `.oc-car-card__frame-152-rows-list-docs-header` | `content/frame-152/rows/list/docs-header` |
| `.oc-car-card__frame-152-rows-list-docs-header-icon-warning` | `content/frame-152/rows/list/docs-header/icon-warning` |
| `.oc-car-card__frame-152-rows-list-docs-header-dokumenty` | `content/frame-152/rows/list/docs-header/dokumenty` |
| `.oc-car-card__frame-152-rows-list-docs-header-chip` | `content/frame-152/rows/list/docs-header/chip` |
| `.oc-car-card__frame-152-rows-list-docs-header-chip-label` | `content/frame-152/rows/list/docs-header/chip/label` |
| `.oc-car-card__frame-152-rows-list-docs-header-icon-chevron-down` | `content/frame-152/rows/list/docs-header/icon-chevron-down` |
| `.oc-car-card__frame-152-rows-list-doc-list` | `content/frame-152/rows/list/doc-list` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row` | `content/frame-152/rows/list/doc-list/doc-row` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-icon-document` | `content/frame-152/rows/list/doc-list/doc-row/icon-document` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-label` | `content/frame-152/rows/list/doc-list/doc-row/label` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-status-check` | `content/frame-152/rows/list/doc-list/doc-row/status-check` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-152/rows/list/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-2` | `content/frame-152/rows/list/doc-list/doc-row-2` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-2-icon-document` | `content/frame-152/rows/list/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-2-label` | `content/frame-152/rows/list/doc-list/doc-row-2/label` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-2-status-check` | `content/frame-152/rows/list/doc-list/doc-row-2/status-check` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-152/rows/list/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-3` | `content/frame-152/rows/list/doc-list/doc-row-3` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-3-icon-document` | `content/frame-152/rows/list/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-3-label` | `content/frame-152/rows/list/doc-list/doc-row-3/label` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-3-status-check` | `content/frame-152/rows/list/doc-list/doc-row-3/status-check` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-152/rows/list/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-4` | `content/frame-152/rows/list/doc-list/doc-row-4` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-4-icon-document` | `content/frame-152/rows/list/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-4-label` | `content/frame-152/rows/list/doc-list/doc-row-4/label` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-4-status-check` | `content/frame-152/rows/list/doc-list/doc-row-4/status-check` |
| `.oc-car-card__frame-152-rows-list-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-152/rows/list/doc-list/doc-row-4/status-check/icon-circle` |
| `.oc-car-card__frame-153` | `content/frame-153` |
| `.oc-car-card__frame-153-frame-5` | `content/frame-153/frame-5` |
| `.oc-car-card__frame-153-frame-5-header-row` | `content/frame-153/frame-5/header-row` |
| `.oc-car-card__frame-153-frame-5-header-row-signature` | `content/frame-153/frame-5/header-row/signature` |
| `.oc-car-card__frame-153-frame-5-header-row-oc-status` | `content/frame-153/frame-5/header-row/oc-status` |
| `.oc-car-card__frame-153-frame-5-header-row-oc-status-icon-clock` | `content/frame-153/frame-5/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-153-frame-5-header-row-oc-status-label` | `content/frame-153/frame-5/header-row/oc-status/label` |
| `.oc-car-card__frame-153-frame-5-meta-row` | `content/frame-153/frame-5/meta-row` |
| `.oc-car-card__frame-153-frame-5-meta-row-model` | `content/frame-153/frame-5/meta-row/model` |
| `.oc-car-card__frame-153-frame-5-meta-row-bought` | `content/frame-153/frame-5/meta-row/bought` |
| `.oc-car-card__frame-153-frame-5-vin` | `content/frame-153/frame-5/vin` |
| `.oc-car-card__frame-153-divider` | `content/frame-153/divider` |
| `.oc-car-card__frame-153-rows` | `content/frame-153/rows` |
| `.oc-car-card__frame-153-rows-action-row` | `content/frame-153/rows/action-row` |
| `.oc-car-card__frame-153-rows-action-row-icon-bolt` | `content/frame-153/rows/action-row/icon-bolt` |
| `.oc-car-card__frame-153-rows-action-row-label` | `content/frame-153/rows/action-row/label` |
| `.oc-car-card__frame-153-rows-action-row-status-check` | `content/frame-153/rows/action-row/status-check` |
| `.oc-car-card__frame-153-rows-action-row-status-check-icon-circle-check` | `content/frame-153/rows/action-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-153-rows-list` | `content/frame-153/rows/list` |
| `.oc-car-card__frame-153-rows-list-docs-header` | `content/frame-153/rows/list/docs-header` |
| `.oc-car-card__frame-153-rows-list-docs-header-icon-warning` | `content/frame-153/rows/list/docs-header/icon-warning` |
| `.oc-car-card__frame-153-rows-list-docs-header-dokumenty` | `content/frame-153/rows/list/docs-header/dokumenty` |
| `.oc-car-card__frame-153-rows-list-docs-header-chip` | `content/frame-153/rows/list/docs-header/chip` |
| `.oc-car-card__frame-153-rows-list-docs-header-chip-label` | `content/frame-153/rows/list/docs-header/chip/label` |
| `.oc-car-card__frame-153-rows-list-docs-header-icon-chevron-down` | `content/frame-153/rows/list/docs-header/icon-chevron-down` |
| `.oc-car-card__frame-153-rows-list-doc-list` | `content/frame-153/rows/list/doc-list` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row` | `content/frame-153/rows/list/doc-list/doc-row` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-icon-document` | `content/frame-153/rows/list/doc-list/doc-row/icon-document` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-label` | `content/frame-153/rows/list/doc-list/doc-row/label` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-status-check` | `content/frame-153/rows/list/doc-list/doc-row/status-check` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-153/rows/list/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-2` | `content/frame-153/rows/list/doc-list/doc-row-2` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-2-icon-document` | `content/frame-153/rows/list/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-2-label` | `content/frame-153/rows/list/doc-list/doc-row-2/label` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-2-status-check` | `content/frame-153/rows/list/doc-list/doc-row-2/status-check` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-153/rows/list/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-3` | `content/frame-153/rows/list/doc-list/doc-row-3` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-3-icon-document` | `content/frame-153/rows/list/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-3-label` | `content/frame-153/rows/list/doc-list/doc-row-3/label` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-3-status-check` | `content/frame-153/rows/list/doc-list/doc-row-3/status-check` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-153/rows/list/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-4` | `content/frame-153/rows/list/doc-list/doc-row-4` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-4-icon-document` | `content/frame-153/rows/list/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-4-label` | `content/frame-153/rows/list/doc-list/doc-row-4/label` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-4-status-check` | `content/frame-153/rows/list/doc-list/doc-row-4/status-check` |
| `.oc-car-card__frame-153-rows-list-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-153/rows/list/doc-list/doc-row-4/status-check/icon-circle` |
| `.oc-car-card__frame-147` | `content/frame-147` |
| `.oc-car-card__frame-147-frame-144` | `content/frame-147/frame-144` |
| `.oc-car-card__frame-147-frame-144-header-row` | `content/frame-147/frame-144/header-row` |
| `.oc-car-card__frame-147-frame-144-header-row-signature` | `content/frame-147/frame-144/header-row/signature` |
| `.oc-car-card__frame-147-frame-144-header-row-oc-status` | `content/frame-147/frame-144/header-row/oc-status` |
| `.oc-car-card__frame-147-frame-144-header-row-oc-status-icon-clock` | `content/frame-147/frame-144/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-147-frame-144-header-row-oc-status-label` | `content/frame-147/frame-144/header-row/oc-status/label` |
| `.oc-car-card__frame-147-frame-144-meta-row` | `content/frame-147/frame-144/meta-row` |
| `.oc-car-card__frame-147-frame-144-meta-row-model` | `content/frame-147/frame-144/meta-row/model` |
| `.oc-car-card__frame-147-frame-144-meta-row-bought` | `content/frame-147/frame-144/meta-row/bought` |
| `.oc-car-card__frame-147-frame-144-meta-row-vin` | `content/frame-147/frame-144/meta-row/vin` |
| `.oc-car-card__frame-147-divider` | `content/frame-147/divider` |
| `.oc-car-card__frame-147-frame-146` | `content/frame-147/frame-146` |
| `.oc-car-card__frame-147-frame-146-action-row` | `content/frame-147/frame-146/action-row` |
| `.oc-car-card__frame-147-frame-146-action-row-icon-bolt` | `content/frame-147/frame-146/action-row/icon-bolt` |
| `.oc-car-card__frame-147-frame-146-action-row-label` | `content/frame-147/frame-146/action-row/label` |
| `.oc-car-card__frame-147-frame-146-action-row-status-check` | `content/frame-147/frame-146/action-row/status-check` |
| `.oc-car-card__frame-147-frame-146-action-row-status-check-icon-circle-check` | `content/frame-147/frame-146/action-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-147-frame-146-frame-145` | `content/frame-147/frame-146/frame-145` |
| `.oc-car-card__frame-147-frame-146-frame-145-docs-header` | `content/frame-147/frame-146/frame-145/docs-header` |
| `.oc-car-card__frame-147-frame-146-frame-145-docs-header-icon-warning` | `content/frame-147/frame-146/frame-145/docs-header/icon-warning` |
| `.oc-car-card__frame-147-frame-146-frame-145-docs-header-dokumenty` | `content/frame-147/frame-146/frame-145/docs-header/dokumenty` |
| `.oc-car-card__frame-147-frame-146-frame-145-docs-header-chip` | `content/frame-147/frame-146/frame-145/docs-header/chip` |
| `.oc-car-card__frame-147-frame-146-frame-145-docs-header-chip-label` | `content/frame-147/frame-146/frame-145/docs-header/chip/label` |
| `.oc-car-card__frame-147-frame-146-frame-145-docs-header-icon-chevron-down` | `content/frame-147/frame-146/frame-145/docs-header/icon-chevron-down` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list` | `content/frame-147/frame-146/frame-145/doc-list` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row` | `content/frame-147/frame-146/frame-145/doc-list/doc-row` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-icon-document` | `content/frame-147/frame-146/frame-145/doc-list/doc-row/icon-document` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-label` | `content/frame-147/frame-146/frame-145/doc-list/doc-row/label` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-status-check` | `content/frame-147/frame-146/frame-145/doc-list/doc-row/status-check` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-147/frame-146/frame-145/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-2` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-2` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-2-icon-document` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-2-label` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-2/label` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-2-status-check` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-2/status-check` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-3` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-3` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-3-icon-document` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-3-label` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-3/label` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-3-status-check` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-3/status-check` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-4` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-4` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-4-icon-document` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-4-label` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-4/label` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-4-status-check` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-4/status-check` |
| `.oc-car-card__frame-147-frame-146-frame-145-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-147/frame-146/frame-145/doc-list/doc-row-4/status-check/icon-circle` |
| `.oc-car-card__frame-154` | `content/frame-154` |
| `.oc-car-card__frame-154-frame-144` | `content/frame-154/frame-144` |
| `.oc-car-card__frame-154-frame-144-header-row` | `content/frame-154/frame-144/header-row` |
| `.oc-car-card__frame-154-frame-144-header-row-signature` | `content/frame-154/frame-144/header-row/signature` |
| `.oc-car-card__frame-154-frame-144-header-row-oc-status` | `content/frame-154/frame-144/header-row/oc-status` |
| `.oc-car-card__frame-154-frame-144-header-row-oc-status-icon-clock` | `content/frame-154/frame-144/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-154-frame-144-header-row-oc-status-label` | `content/frame-154/frame-144/header-row/oc-status/label` |
| `.oc-car-card__frame-154-frame-144-meta-row` | `content/frame-154/frame-144/meta-row` |
| `.oc-car-card__frame-154-frame-144-meta-row-model` | `content/frame-154/frame-144/meta-row/model` |
| `.oc-car-card__frame-154-frame-144-meta-row-bought` | `content/frame-154/frame-144/meta-row/bought` |
| `.oc-car-card__frame-154-frame-144-meta-row-vin` | `content/frame-154/frame-144/meta-row/vin` |
| `.oc-car-card__frame-154-divider` | `content/frame-154/divider` |
| `.oc-car-card__frame-154-frame-146` | `content/frame-154/frame-146` |
| `.oc-car-card__frame-154-frame-146-action-row` | `content/frame-154/frame-146/action-row` |
| `.oc-car-card__frame-154-frame-146-action-row-icon-bolt` | `content/frame-154/frame-146/action-row/icon-bolt` |
| `.oc-car-card__frame-154-frame-146-action-row-label` | `content/frame-154/frame-146/action-row/label` |
| `.oc-car-card__frame-154-frame-146-action-row-status-check` | `content/frame-154/frame-146/action-row/status-check` |
| `.oc-car-card__frame-154-frame-146-action-row-status-check-icon-circle-check` | `content/frame-154/frame-146/action-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-154-frame-146-frame-145` | `content/frame-154/frame-146/frame-145` |
| `.oc-car-card__frame-154-frame-146-frame-145-docs-header` | `content/frame-154/frame-146/frame-145/docs-header` |
| `.oc-car-card__frame-154-frame-146-frame-145-docs-header-icon-warning` | `content/frame-154/frame-146/frame-145/docs-header/icon-warning` |
| `.oc-car-card__frame-154-frame-146-frame-145-docs-header-dokumenty` | `content/frame-154/frame-146/frame-145/docs-header/dokumenty` |
| `.oc-car-card__frame-154-frame-146-frame-145-docs-header-chip` | `content/frame-154/frame-146/frame-145/docs-header/chip` |
| `.oc-car-card__frame-154-frame-146-frame-145-docs-header-chip-label` | `content/frame-154/frame-146/frame-145/docs-header/chip/label` |
| `.oc-car-card__frame-154-frame-146-frame-145-docs-header-icon-chevron-down` | `content/frame-154/frame-146/frame-145/docs-header/icon-chevron-down` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list` | `content/frame-154/frame-146/frame-145/doc-list` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row` | `content/frame-154/frame-146/frame-145/doc-list/doc-row` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-icon-document` | `content/frame-154/frame-146/frame-145/doc-list/doc-row/icon-document` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-label` | `content/frame-154/frame-146/frame-145/doc-list/doc-row/label` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-status-check` | `content/frame-154/frame-146/frame-145/doc-list/doc-row/status-check` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-154/frame-146/frame-145/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-2` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-2` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-2-icon-document` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-2-label` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-2/label` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-2-status-check` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-2/status-check` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-3` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-3` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-3-icon-document` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-3-label` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-3/label` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-3-status-check` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-3/status-check` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-4` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-4` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-4-icon-document` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-4-label` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-4/label` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-4-status-check` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-4/status-check` |
| `.oc-car-card__frame-154-frame-146-frame-145-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-154/frame-146/frame-145/doc-list/doc-row-4/status-check/icon-circle` |
| `.oc-car-card__frame-155` | `content/frame-155` |
| `.oc-car-card__frame-155-frame-144` | `content/frame-155/frame-144` |
| `.oc-car-card__frame-155-frame-144-header-row` | `content/frame-155/frame-144/header-row` |
| `.oc-car-card__frame-155-frame-144-header-row-signature` | `content/frame-155/frame-144/header-row/signature` |
| `.oc-car-card__frame-155-frame-144-header-row-oc-status` | `content/frame-155/frame-144/header-row/oc-status` |
| `.oc-car-card__frame-155-frame-144-header-row-oc-status-icon-clock` | `content/frame-155/frame-144/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-155-frame-144-header-row-oc-status-label` | `content/frame-155/frame-144/header-row/oc-status/label` |
| `.oc-car-card__frame-155-frame-144-meta-row` | `content/frame-155/frame-144/meta-row` |
| `.oc-car-card__frame-155-frame-144-meta-row-model` | `content/frame-155/frame-144/meta-row/model` |
| `.oc-car-card__frame-155-frame-144-meta-row-bought` | `content/frame-155/frame-144/meta-row/bought` |
| `.oc-car-card__frame-155-frame-144-meta-row-vin` | `content/frame-155/frame-144/meta-row/vin` |
| `.oc-car-card__frame-155-divider` | `content/frame-155/divider` |
| `.oc-car-card__frame-155-frame-156` | `content/frame-155/frame-156` |
| `.oc-car-card__frame-155-frame-156-frame-146` | `content/frame-155/frame-156/frame-146` |
| `.oc-car-card__frame-155-frame-156-frame-146-action-row` | `content/frame-155/frame-156/frame-146/action-row` |
| `.oc-car-card__frame-155-frame-156-frame-146-action-row-icon-bolt` | `content/frame-155/frame-156/frame-146/action-row/icon-bolt` |
| `.oc-car-card__frame-155-frame-156-frame-146-action-row-label` | `content/frame-155/frame-156/frame-146/action-row/label` |
| `.oc-car-card__frame-155-frame-156-frame-146-action-row-status-check` | `content/frame-155/frame-156/frame-146/action-row/status-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-action-row-status-check-icon-circle-check` | `content/frame-155/frame-156/frame-146/action-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145` | `content/frame-155/frame-156/frame-146/frame-145` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-docs-header` | `content/frame-155/frame-156/frame-146/frame-145/docs-header` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-docs-header-icon-warning` | `content/frame-155/frame-156/frame-146/frame-145/docs-header/icon-warning` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-docs-header-dokumenty` | `content/frame-155/frame-156/frame-146/frame-145/docs-header/dokumenty` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-docs-header-chip` | `content/frame-155/frame-156/frame-146/frame-145/docs-header/chip` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-docs-header-chip-label` | `content/frame-155/frame-156/frame-146/frame-145/docs-header/chip/label` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-docs-header-icon-chevron-down` | `content/frame-155/frame-156/frame-146/frame-145/docs-header/icon-chevron-down` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list` | `content/frame-155/frame-156/frame-146/frame-145/doc-list` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-icon-document` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row/icon-document` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-label` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row/label` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-status-check` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row/status-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-2` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-2` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-2-icon-document` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-2-label` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-2/label` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-2-status-check` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-2/status-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-3` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-3` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-3-icon-document` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-3-label` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-3/label` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-3-status-check` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-3/status-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-4` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-4` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-4-icon-document` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-4-label` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-4/label` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-4-status-check` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-4/status-check` |
| `.oc-car-card__frame-155-frame-156-frame-146-frame-145-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-155/frame-156/frame-146/frame-145/doc-list/doc-row-4/status-check/icon-circle` |
| `.oc-car-card__content-frame-156` | `content/frame-156` |
| `.oc-car-card__frame-156-frame-144` | `content/frame-156/frame-144` |
| `.oc-car-card__frame-156-frame-144-header-row` | `content/frame-156/frame-144/header-row` |
| `.oc-car-card__frame-156-frame-144-header-row-signature` | `content/frame-156/frame-144/header-row/signature` |
| `.oc-car-card__frame-156-frame-144-header-row-oc-status` | `content/frame-156/frame-144/header-row/oc-status` |
| `.oc-car-card__frame-156-frame-144-header-row-oc-status-icon-clock` | `content/frame-156/frame-144/header-row/oc-status/icon-clock` |
| `.oc-car-card__frame-156-frame-144-header-row-oc-status-label` | `content/frame-156/frame-144/header-row/oc-status/label` |
| `.oc-car-card__frame-156-frame-144-meta-row` | `content/frame-156/frame-144/meta-row` |
| `.oc-car-card__frame-156-frame-144-meta-row-model` | `content/frame-156/frame-144/meta-row/model` |
| `.oc-car-card__frame-156-frame-144-meta-row-bought` | `content/frame-156/frame-144/meta-row/bought` |
| `.oc-car-card__frame-156-frame-144-meta-row-vin` | `content/frame-156/frame-144/meta-row/vin` |
| `.oc-car-card__frame-156-divider` | `content/frame-156/divider` |
| `.oc-car-card__content-frame-156-frame-146` | `content/frame-156/frame-146` |
| `.oc-car-card__content-frame-156-frame-146-action-row` | `content/frame-156/frame-146/action-row` |
| `.oc-car-card__content-frame-156-frame-146-action-row-icon-bolt` | `content/frame-156/frame-146/action-row/icon-bolt` |
| `.oc-car-card__content-frame-156-frame-146-action-row-label` | `content/frame-156/frame-146/action-row/label` |
| `.oc-car-card__content-frame-156-frame-146-action-row-status-check` | `content/frame-156/frame-146/action-row/status-check` |
| `.oc-car-card__content-frame-156-frame-146-action-row-status-check-icon-circle-check` | `content/frame-156/frame-146/action-row/status-check/icon-circle-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145` | `content/frame-156/frame-146/frame-145` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-docs-header` | `content/frame-156/frame-146/frame-145/docs-header` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-docs-header-icon-warning` | `content/frame-156/frame-146/frame-145/docs-header/icon-warning` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-docs-header-dokumenty` | `content/frame-156/frame-146/frame-145/docs-header/dokumenty` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-docs-header-chip` | `content/frame-156/frame-146/frame-145/docs-header/chip` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-docs-header-chip-label` | `content/frame-156/frame-146/frame-145/docs-header/chip/label` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-docs-header-icon-chevron-down` | `content/frame-156/frame-146/frame-145/docs-header/icon-chevron-down` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list` | `content/frame-156/frame-146/frame-145/doc-list` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row` | `content/frame-156/frame-146/frame-145/doc-list/doc-row` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-icon-document` | `content/frame-156/frame-146/frame-145/doc-list/doc-row/icon-document` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-label` | `content/frame-156/frame-146/frame-145/doc-list/doc-row/label` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-status-check` | `content/frame-156/frame-146/frame-145/doc-list/doc-row/status-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-status-check-icon-circle-check` | `content/frame-156/frame-146/frame-145/doc-list/doc-row/status-check/icon-circle-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-2` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-2` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-2-icon-document` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-2/icon-document` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-2-label` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-2/label` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-2-status-check` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-2/status-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-2-status-check-icon-circle-check` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-2/status-check/icon-circle-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-3` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-3` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-3-icon-document` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-3/icon-document` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-3-label` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-3/label` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-3-status-check` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-3/status-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-3-status-check-icon-warning` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-3/status-check/icon-warning` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-4` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-4` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-4-icon-document` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-4/icon-document` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-4-label` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-4/label` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-4-status-check` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-4/status-check` |
| `.oc-car-card__content-frame-156-frame-146-frame-145-doc-list-doc-row-4-status-check-icon-circle` | `content/frame-156/frame-146/frame-145/doc-list/doc-row-4/status-check/icon-circle` |

## Непривязанные значения

19 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `403px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-142/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-142/rows/list/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-151/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-151/rows/list/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-152/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-152/rows/list/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-153/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-153/rows/list/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content.width` | `250px` | нет шкалы размеров: ширина задана числом |
| `content/frame-147/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-147/frame-146/frame-145/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-154/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-154/frame-146/frame-145/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-155/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-155/frame-156/frame-146/frame-145/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `content/frame-156/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `content/frame-156/frame-146/frame-145/docs-header.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Входит в состав других компонентов (1 шт. по графу Figma).
