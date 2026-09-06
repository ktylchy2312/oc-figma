# EtapyTable

Rejestr pojazdów w obróbce: nagłówek + N wierszy EtapyRow. Szerokość stała 1660.

- Разметка: [`etapy-table.html`](etapy-table.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`etapy-table.css`](etapy-table.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-etapy-table`
- Группа Stage, уровень organism, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-etapy-table` | `EtapyTable` |
| `.oc-etapy-table__etapy-table-header` | `EtapyTableHeader` |
| `.oc-etapy-table__etapy-table-header-sygnatura` | `SYGNATURA` |
| `.oc-etapy-table__sygnatura-sygnatura` | `SYGNATURA` |
| `.oc-etapy-table__etapy-table-header-pojazd` | `POJAZD` |
| `.oc-etapy-table__pojazd-pojazd` | `POJAZD` |
| `.oc-etapy-table__etapy-table-header-vin` | `VIN` |
| `.oc-etapy-table__etapy-table-header-vin-vin` | `VIN` |
| `.oc-etapy-table__etapy-table-header-kupiona` | `KUPIONA` |
| `.oc-etapy-table__etapy-table-header-kupiona-kupiona` | `KUPIONA` |
| `.oc-etapy-table__etapy-table-header-status-oc` | `STATUS OC` |
| `.oc-etapy-table__etapy-table-header-status-oc-status-oc` | `STATUS OC` |
| `.oc-etapy-table__etapy-table-header-oc-do` | `OC DO` |
| `.oc-etapy-table__etapy-table-header-oc-do-oc-do` | `OC DO` |
| `.oc-etapy-table__etapy-table-header-dokumenty` | `DOKUMENTY` |
| `.oc-etapy-table__dokumenty-dokumenty` | `DOKUMENTY` |
| `.oc-etapy-table__etapy-table-header-etapy` | `ETAPY` |
| `.oc-etapy-table__etapy-table-header-etapy-etapy` | `ETAPY` |
| `.oc-etapy-table__sk00147` | `SK00147` |
| `.oc-etapy-table__sk00147-sygnatura` | `Sygnatura` |
| `.oc-etapy-table__sk00147-sygnatura-pill` | `Pill` |
| `.oc-etapy-table__sk00147-sygnatura-pill-3-5` | `3/5` |
| `.oc-etapy-table__sk00147-pojazd` | `Pojazd` |
| `.oc-etapy-table__sk00147-pojazd-marka` | `Marka` |
| `.oc-etapy-table__sk00147-pojazd-model` | `Model` |
| `.oc-etapy-table__sk00147-vin` | `Vin` |
| `.oc-etapy-table__sk00147-vin-vin` | `Vin` |
| `.oc-etapy-table__sk00147-kupiona` | `Kupiona` |
| `.oc-etapy-table__sk00147-kupiona-kupiona` | `Kupiona` |
| `.oc-etapy-table__sk00147-status-oc` | `StatusOc` |
| `.oc-etapy-table__sk00147-status-oc-status-oc` | `StatusOc` |
| `.oc-etapy-table__sk00147-status-oc-status-oc-dot` | `Dot` |
| `.oc-etapy-table__sk00147-status-oc-status-oc-aktywna` | `Aktywna` |
| `.oc-etapy-table__sk00147-oc-do` | `OcDo` |
| `.oc-etapy-table__sk00147-oc-do-oc-do` | `OcDo` |
| `.oc-etapy-table__sk00147-dokumenty` | `Dokumenty` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress` | `DocProgress` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-etapy-table__sk00147-dokumenty-doc-progress-count` | `Count` |
| `.oc-etapy-table__sk00147-etapy` | `Etapy` |
| `.oc-etapy-table__sk00147-etapy-etapy` | `Etapy` |
| `.oc-etapy-table__sk00147-etapy-etapy-dot` | `Dot` |
| `.oc-etapy-table__sk00147-etapy-etapy-robocza` | `Robocza` |
| `.oc-etapy-table__vw00312` | `VW00312` |
| `.oc-etapy-table__vw00312-sygnatura` | `Sygnatura` |
| `.oc-etapy-table__vw00312-sygnatura-pill` | `Pill` |
| `.oc-etapy-table__vw00312-sygnatura-pill-3-5` | `3/5` |
| `.oc-etapy-table__vw00312-pojazd` | `Pojazd` |
| `.oc-etapy-table__vw00312-pojazd-marka` | `Marka` |
| `.oc-etapy-table__vw00312-pojazd-model` | `Model` |
| `.oc-etapy-table__vw00312-vin` | `Vin` |
| `.oc-etapy-table__vw00312-vin-vin` | `Vin` |
| `.oc-etapy-table__vw00312-kupiona` | `Kupiona` |
| `.oc-etapy-table__vw00312-kupiona-kupiona` | `Kupiona` |
| `.oc-etapy-table__vw00312-status-oc` | `StatusOc` |
| `.oc-etapy-table__vw00312-status-oc-status-oc` | `StatusOc` |
| `.oc-etapy-table__vw00312-status-oc-status-oc-dot` | `Dot` |
| `.oc-etapy-table__vw00312-status-oc-status-oc-aktywna` | `Aktywna` |
| `.oc-etapy-table__vw00312-oc-do` | `OcDo` |
| `.oc-etapy-table__vw00312-oc-do-oc-do` | `OcDo` |
| `.oc-etapy-table__vw00312-dokumenty` | `Dokumenty` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress` | `DocProgress` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-etapy-table__vw00312-dokumenty-doc-progress-count` | `Count` |
| `.oc-etapy-table__vw00312-etapy` | `Etapy` |
| `.oc-etapy-table__vw00312-etapy-etapy` | `Etapy` |
| `.oc-etapy-table__vw00312-etapy-etapy-dot` | `Dot` |
| `.oc-etapy-table__etapy-aktywna` | `Aktywna` |
| `.oc-etapy-table__rn00889` | `RN00889` |
| `.oc-etapy-table__rn00889-sygnatura` | `Sygnatura` |
| `.oc-etapy-table__rn00889-sygnatura-pill` | `Pill` |
| `.oc-etapy-table__rn00889-sygnatura-pill-3-5` | `3/5` |
| `.oc-etapy-table__rn00889-pojazd` | `Pojazd` |
| `.oc-etapy-table__rn00889-pojazd-marka` | `Marka` |
| `.oc-etapy-table__rn00889-pojazd-model` | `Model` |
| `.oc-etapy-table__rn00889-vin` | `Vin` |
| `.oc-etapy-table__rn00889-vin-vin` | `Vin` |
| `.oc-etapy-table__rn00889-kupiona` | `Kupiona` |
| `.oc-etapy-table__rn00889-kupiona-kupiona` | `Kupiona` |
| `.oc-etapy-table__rn00889-status-oc` | `StatusOc` |
| `.oc-etapy-table__rn00889-status-oc-status-oc` | `StatusOc` |
| `.oc-etapy-table__rn00889-status-oc-status-oc-dot` | `Dot` |
| `.oc-etapy-table__zam-wiona` | `Zamówiona` |
| `.oc-etapy-table__rn00889-oc-do` | `OcDo` |
| `.oc-etapy-table__rn00889-oc-do-oc-do` | `OcDo` |
| `.oc-etapy-table__rn00889-dokumenty` | `Dokumenty` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress` | `DocProgress` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-etapy-table__rn00889-dokumenty-doc-progress-count` | `Count` |
| `.oc-etapy-table__rn00889-etapy` | `Etapy` |
| `.oc-etapy-table__rn00889-etapy-etapy` | `Etapy` |
| `.oc-etapy-table__rn00889-etapy-etapy-dot` | `Dot` |
| `.oc-etapy-table__rn00889-etapy-etapy-robocza` | `Robocza` |
| `.oc-etapy-table__bm00234` | `BM00234` |
| `.oc-etapy-table__bm00234-sygnatura` | `Sygnatura` |
| `.oc-etapy-table__bm00234-sygnatura-pill` | `Pill` |
| `.oc-etapy-table__bm00234-sygnatura-pill-3-5` | `3/5` |
| `.oc-etapy-table__bm00234-pojazd` | `Pojazd` |
| `.oc-etapy-table__bm00234-pojazd-marka` | `Marka` |
| `.oc-etapy-table__bm00234-pojazd-model` | `Model` |
| `.oc-etapy-table__bm00234-vin` | `Vin` |
| `.oc-etapy-table__bm00234-vin-vin` | `Vin` |
| `.oc-etapy-table__bm00234-kupiona` | `Kupiona` |
| `.oc-etapy-table__bm00234-kupiona-kupiona` | `Kupiona` |
| `.oc-etapy-table__bm00234-status-oc` | `StatusOc` |
| `.oc-etapy-table__bm00234-status-oc-status-oc` | `StatusOc` |
| `.oc-etapy-table__bm00234-status-oc-status-oc-dot` | `Dot` |
| `.oc-etapy-table__b-d` | `Błąd` |
| `.oc-etapy-table__bm00234-oc-do` | `OcDo` |
| `.oc-etapy-table__bm00234-oc-do-oc-do` | `OcDo` |
| `.oc-etapy-table__bm00234-dokumenty` | `Dokumenty` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress` | `DocProgress` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-etapy-table__bm00234-dokumenty-doc-progress-count` | `Count` |
| `.oc-etapy-table__bm00234-etapy` | `Etapy` |
| `.oc-etapy-table__bm00234-etapy-etapy` | `Etapy` |
| `.oc-etapy-table__bm00234-etapy-etapy-dot` | `Dot` |
| `.oc-etapy-table__bm00234-etapy-etapy-robocza` | `Robocza` |

## Непривязанные значения

7 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1660px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `etapy-table-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `sk00147.borderWidth` | `1px` | нет токена под толщину обводки |
| `vw00312.borderWidth` | `1px` | нет токена под толщину обводки |
| `rn00889.borderWidth` | `1px` | нет токена под толщину обводки |
| `bm00234.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Rejestr pojazdów w obróbce: nagłówek + N wierszy EtapyRow.
- Szerokość stała 1660.
