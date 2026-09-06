# ArchiveTable

Archiwum zamkniętych rekordów: nagłówek + N wierszy ArchiveRow. Szerokość stała 1660.

- Разметка: [`archive-table.html`](archive-table.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`archive-table.css`](archive-table.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-archive-table`
- Группа Cards, уровень organism, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-archive-table` | `ArchiveTable` |
| `.oc-archive-table__archive-table-header` | `ArchiveTableHeader` |
| `.oc-archive-table__archive-table-header-sygnatura` | `SYGNATURA` |
| `.oc-archive-table__sygnatura-sygnatura` | `SYGNATURA` |
| `.oc-archive-table__archive-table-header-pojazd` | `POJAZD` |
| `.oc-archive-table__pojazd-pojazd` | `POJAZD` |
| `.oc-archive-table__archive-table-header-vin` | `VIN` |
| `.oc-archive-table__archive-table-header-vin-vin` | `VIN` |
| `.oc-archive-table__archive-table-header-kupiona` | `KUPIONA` |
| `.oc-archive-table__archive-table-header-kupiona-kupiona` | `KUPIONA` |
| `.oc-archive-table__archive-table-header-utylizowana` | `UTYLIZOWANA` |
| `.oc-archive-table__archive-table-header-utylizowana-utylizowana` | `UTYLIZOWANA` |
| `.oc-archive-table__archive-table-header-dokumenty` | `DOKUMENTY` |
| `.oc-archive-table__dokumenty-dokumenty` | `DOKUMENTY` |
| `.oc-archive-table__archive-table-header-status` | `STATUS` |
| `.oc-archive-table__archive-table-header-status-status` | `STATUS` |
| `.oc-archive-table__sk00147` | `SK00147` |
| `.oc-archive-table__sk00147-sygnatura` | `Sygnatura` |
| `.oc-archive-table__sk00147-sygnatura-pill` | `Pill` |
| `.oc-archive-table__sk00147-sygnatura-pill-3-5` | `3/5` |
| `.oc-archive-table__sk00147-pojazd` | `Pojazd` |
| `.oc-archive-table__sk00147-pojazd-marka` | `Marka` |
| `.oc-archive-table__sk00147-pojazd-model` | `Model` |
| `.oc-archive-table__sk00147-vin` | `Vin` |
| `.oc-archive-table__sk00147-vin-vin` | `Vin` |
| `.oc-archive-table__sk00147-kupiona` | `Kupiona` |
| `.oc-archive-table__sk00147-kupiona-kupiona` | `Kupiona` |
| `.oc-archive-table__sk00147-utylizowana` | `Utylizowana` |
| `.oc-archive-table__sk00147-utylizowana-utylizowana` | `Utylizowana` |
| `.oc-archive-table__sk00147-dokumenty` | `Dokumenty` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress` | `DocProgress` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-archive-table__sk00147-dokumenty-doc-progress-count` | `Count` |
| `.oc-archive-table__sk00147-status` | `Status` |
| `.oc-archive-table__sk00147-status-status` | `Status` |
| `.oc-archive-table__sk00147-status-status-aktywna` | `Aktywna` |
| `.oc-archive-table__op00521` | `OP00521` |
| `.oc-archive-table__op00521-sygnatura` | `Sygnatura` |
| `.oc-archive-table__op00521-sygnatura-pill` | `Pill` |
| `.oc-archive-table__op00521-sygnatura-pill-3-5` | `3/5` |
| `.oc-archive-table__op00521-pojazd` | `Pojazd` |
| `.oc-archive-table__op00521-pojazd-marka` | `Marka` |
| `.oc-archive-table__op00521-pojazd-model` | `Model` |
| `.oc-archive-table__op00521-vin` | `Vin` |
| `.oc-archive-table__op00521-vin-vin` | `Vin` |
| `.oc-archive-table__op00521-kupiona` | `Kupiona` |
| `.oc-archive-table__op00521-kupiona-kupiona` | `Kupiona` |
| `.oc-archive-table__op00521-utylizowana` | `Utylizowana` |
| `.oc-archive-table__op00521-utylizowana-utylizowana` | `Utylizowana` |
| `.oc-archive-table__op00521-dokumenty` | `Dokumenty` |
| `.oc-archive-table__op00521-dokumenty-doc-progress` | `DocProgress` |
| `.oc-archive-table__op00521-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-archive-table__op00521-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-archive-table__op00521-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-archive-table__op00521-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-archive-table__op00521-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-archive-table__op00521-dokumenty-doc-progress-count` | `Count` |
| `.oc-archive-table__op00521-status` | `Status` |
| `.oc-archive-table__op00521-status-status` | `Status` |
| `.oc-archive-table__op00521-status-status-aktywna` | `Aktywna` |
| `.oc-archive-table__ft00056` | `FT00056` |
| `.oc-archive-table__ft00056-sygnatura` | `Sygnatura` |
| `.oc-archive-table__ft00056-sygnatura-pill` | `Pill` |
| `.oc-archive-table__ft00056-sygnatura-pill-3-5` | `3/5` |
| `.oc-archive-table__ft00056-pojazd` | `Pojazd` |
| `.oc-archive-table__ft00056-pojazd-marka` | `Marka` |
| `.oc-archive-table__ft00056-pojazd-model` | `Model` |
| `.oc-archive-table__ft00056-vin` | `Vin` |
| `.oc-archive-table__ft00056-vin-vin` | `Vin` |
| `.oc-archive-table__ft00056-kupiona` | `Kupiona` |
| `.oc-archive-table__ft00056-kupiona-kupiona` | `Kupiona` |
| `.oc-archive-table__ft00056-utylizowana` | `Utylizowana` |
| `.oc-archive-table__ft00056-utylizowana-utylizowana` | `Utylizowana` |
| `.oc-archive-table__ft00056-dokumenty` | `Dokumenty` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress` | `DocProgress` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-archive-table__ft00056-dokumenty-doc-progress-count` | `Count` |
| `.oc-archive-table__ft00056-status` | `Status` |
| `.oc-archive-table__ft00056-status-status` | `Status` |
| `.oc-archive-table__zam-wiona` | `Zamówiona` |
| `.oc-archive-table__rn00889` | `RN00889` |
| `.oc-archive-table__rn00889-sygnatura` | `Sygnatura` |
| `.oc-archive-table__rn00889-sygnatura-pill` | `Pill` |
| `.oc-archive-table__rn00889-sygnatura-pill-3-5` | `3/5` |
| `.oc-archive-table__rn00889-pojazd` | `Pojazd` |
| `.oc-archive-table__rn00889-pojazd-marka` | `Marka` |
| `.oc-archive-table__rn00889-pojazd-model` | `Model` |
| `.oc-archive-table__rn00889-vin` | `Vin` |
| `.oc-archive-table__rn00889-vin-vin` | `Vin` |
| `.oc-archive-table__rn00889-kupiona` | `Kupiona` |
| `.oc-archive-table__rn00889-kupiona-kupiona` | `Kupiona` |
| `.oc-archive-table__rn00889-utylizowana` | `Utylizowana` |
| `.oc-archive-table__rn00889-utylizowana-utylizowana` | `Utylizowana` |
| `.oc-archive-table__rn00889-dokumenty` | `Dokumenty` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress` | `DocProgress` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress-bar` | `Bar` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress-bar-segment-1` | `Segment 1` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress-bar-segment-2` | `Segment 2` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress-bar-segment-3` | `Segment 3` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress-bar-segment-4` | `Segment 4` |
| `.oc-archive-table__rn00889-dokumenty-doc-progress-count` | `Count` |
| `.oc-archive-table__rn00889-status` | `Status` |
| `.oc-archive-table__rn00889-status-status` | `Status` |
| `.oc-archive-table__b-d` | `Błąd` |

## Непривязанные значения

7 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1660px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `archive-table-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `sk00147.borderWidth` | `1px` | нет токена под толщину обводки |
| `op00521.borderWidth` | `1px` | нет токена под толщину обводки |
| `ft00056.borderWidth` | `1px` | нет токена под толщину обводки |
| `rn00889.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Archiwum zamkniętych rekordów: nagłówek + N wierszy ArchiveRow.
- Szerokość stała 1660.
