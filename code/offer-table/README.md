# OfferTable

Towary → Tabela: the warehouse list of offers. Owns the container fill, border, radius and the column widths; OfferRow and OfferTableHeader read the same track and must never be resized independently.

- Разметка: [`offer-table.html`](offer-table.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`offer-table.css`](offer-table.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-offer-table`
- Группа Cards, уровень organism, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-offer-table` | `OfferTable` |
| `.oc-offer-table__offer-table-header` | `OfferTableHeader` |
| `.oc-offer-table__offer-table-header-zdj-cie` | `ZDJĘCIE` |
| `.oc-offer-table__zdj-cie-zdj-cie` | `ZDJĘCIE` |
| `.oc-offer-table__offer-table-header-sygnatura` | `SYGNATURA` |
| `.oc-offer-table__sygnatura-sygnatura` | `SYGNATURA` |
| `.oc-offer-table__offer-table-header-nazwa` | `NAZWA` |
| `.oc-offer-table__offer-table-header-nazwa-nazwa` | `NAZWA` |
| `.oc-offer-table__offer-table-header-pojazd` | `POJAZD` |
| `.oc-offer-table__pojazd-pojazd` | `POJAZD` |
| `.oc-offer-table__offer-table-header-kategoria` | `KATEGORIA` |
| `.oc-offer-table__offer-table-header-kategoria-kategoria` | `KATEGORIA` |
| `.oc-offer-table__offer-table-header-stan-mag` | `STAN MAG.` |
| `.oc-offer-table__stan-mag-stan-mag` | `STAN MAG.` |
| `.oc-offer-table__offer-table-header-rynki` | `RYNKI` |
| `.oc-offer-table__rynki-rynki` | `RYNKI` |
| `.oc-offer-table__offer-table-header-cena` | `CENA` |
| `.oc-offer-table__offer-table-header-cena-cena` | `CENA` |
| `.oc-offer-table__offer-table-header-status` | `STATUS` |
| `.oc-offer-table__status-status` | `STATUS` |
| `.oc-offer-table__sk00147` | `SK00147` |
| `.oc-offer-table__sk00147-zdj-cie` | `Zdjęcie` |
| `.oc-offer-table__sk00147-zdj-cie-thumb` | `Thumb` |
| `.oc-offer-table__sk00147-zdj-cie-thumb-glyph` | `glyph` |
| `.oc-offer-table__sk00147-sygnatura` | `Sygnatura` |
| `.oc-offer-table__sk00147-sygnatura-pill` | `Pill` |
| `.oc-offer-table__sk00147-sygnatura-pill-3-5` | `3/5` |
| `.oc-offer-table__sk00147-nazwa` | `Nazwa` |
| `.oc-offer-table__sk00147-nazwa-nazwa` | `Nazwa` |
| `.oc-offer-table__sk00147-pojazd` | `Pojazd` |
| `.oc-offer-table__sk00147-pojazd-marka` | `Marka` |
| `.oc-offer-table__sk00147-pojazd-model` | `Model` |
| `.oc-offer-table__sk00147-kategoria` | `Kategoria` |
| `.oc-offer-table__sk00147-kategoria-kategoria` | `Kategoria` |
| `.oc-offer-table__sk00147-stan` | `Stan` |
| `.oc-offer-table__sk00147-stan-stan` | `Stan` |
| `.oc-offer-table__sk00147-rynki` | `Rynki` |
| `.oc-offer-table__sk00147-rynki-market-a` | `Market A` |
| `.oc-offer-table__sk00147-rynki-market-a-letter` | `Letter` |
| `.oc-offer-table__sk00147-rynki-market-x` | `Market X` |
| `.oc-offer-table__sk00147-rynki-market-x-letter` | `Letter` |
| `.oc-offer-table__sk00147-rynki-market-e` | `Market E` |
| `.oc-offer-table__sk00147-rynki-market-e-letter` | `Letter` |
| `.oc-offer-table__sk00147-rynki-market-o` | `Market O` |
| `.oc-offer-table__sk00147-rynki-market-o-letter` | `Letter` |
| `.oc-offer-table__sk00147-cena` | `Cena` |
| `.oc-offer-table__sk00147-cena-cena` | `Cena` |
| `.oc-offer-table__sk00147-status` | `Status` |
| `.oc-offer-table__sk00147-status-status-pill` | `StatusPill` |
| `.oc-offer-table__sk00147-status-status-pill-dot` | `Dot` |
| `.oc-offer-table__sk00147-status-status-pill-robocza` | `Robocza` |
| `.oc-offer-table__vw00312` | `VW00312` |
| `.oc-offer-table__vw00312-zdj-cie` | `Zdjęcie` |
| `.oc-offer-table__vw00312-zdj-cie-thumb` | `Thumb` |
| `.oc-offer-table__vw00312-zdj-cie-thumb-glyph` | `glyph` |
| `.oc-offer-table__vw00312-sygnatura` | `Sygnatura` |
| `.oc-offer-table__vw00312-sygnatura-pill` | `Pill` |
| `.oc-offer-table__vw00312-sygnatura-pill-3-5` | `3/5` |
| `.oc-offer-table__vw00312-nazwa` | `Nazwa` |
| `.oc-offer-table__vw00312-nazwa-nazwa` | `Nazwa` |
| `.oc-offer-table__vw00312-pojazd` | `Pojazd` |
| `.oc-offer-table__vw00312-pojazd-marka` | `Marka` |
| `.oc-offer-table__vw00312-pojazd-model` | `Model` |
| `.oc-offer-table__vw00312-kategoria` | `Kategoria` |
| `.oc-offer-table__vw00312-kategoria-kategoria` | `Kategoria` |
| `.oc-offer-table__vw00312-stan` | `Stan` |
| `.oc-offer-table__vw00312-stan-stan` | `Stan` |
| `.oc-offer-table__vw00312-rynki` | `Rynki` |
| `.oc-offer-table__vw00312-rynki-market-a` | `Market A` |
| `.oc-offer-table__vw00312-rynki-market-a-letter` | `Letter` |
| `.oc-offer-table__vw00312-rynki-market-x` | `Market X` |
| `.oc-offer-table__vw00312-rynki-market-x-letter` | `Letter` |
| `.oc-offer-table__vw00312-rynki-market-e` | `Market E` |
| `.oc-offer-table__vw00312-rynki-market-e-letter` | `Letter` |
| `.oc-offer-table__vw00312-rynki-market-o` | `Market O` |
| `.oc-offer-table__vw00312-rynki-market-o-letter` | `Letter` |
| `.oc-offer-table__vw00312-cena` | `Cena` |
| `.oc-offer-table__vw00312-cena-cena` | `Cena` |
| `.oc-offer-table__vw00312-status` | `Status` |
| `.oc-offer-table__vw00312-status-status-pill` | `StatusPill` |
| `.oc-offer-table__vw00312-status-status-pill-dot` | `Dot` |
| `.oc-offer-table__vw00312-status-status-pill-robocza` | `Robocza` |
| `.oc-offer-table__rn00889` | `RN00889` |
| `.oc-offer-table__rn00889-zdj-cie` | `Zdjęcie` |
| `.oc-offer-table__rn00889-zdj-cie-thumb` | `Thumb` |
| `.oc-offer-table__rn00889-zdj-cie-thumb-glyph` | `glyph` |
| `.oc-offer-table__rn00889-sygnatura` | `Sygnatura` |
| `.oc-offer-table__rn00889-sygnatura-pill` | `Pill` |
| `.oc-offer-table__rn00889-sygnatura-pill-3-5` | `3/5` |
| `.oc-offer-table__rn00889-nazwa` | `Nazwa` |
| `.oc-offer-table__rn00889-nazwa-nazwa` | `Nazwa` |
| `.oc-offer-table__rn00889-pojazd` | `Pojazd` |
| `.oc-offer-table__rn00889-pojazd-marka` | `Marka` |
| `.oc-offer-table__rn00889-pojazd-model` | `Model` |
| `.oc-offer-table__rn00889-kategoria` | `Kategoria` |
| `.oc-offer-table__rn00889-kategoria-kategoria` | `Kategoria` |
| `.oc-offer-table__rn00889-stan` | `Stan` |
| `.oc-offer-table__rn00889-stan-stan` | `Stan` |
| `.oc-offer-table__rn00889-rynki` | `Rynki` |
| `.oc-offer-table__rn00889-rynki-market-a` | `Market A` |
| `.oc-offer-table__rn00889-rynki-market-a-letter` | `Letter` |
| `.oc-offer-table__rn00889-rynki-market-x` | `Market X` |
| `.oc-offer-table__rn00889-rynki-market-x-letter` | `Letter` |
| `.oc-offer-table__rn00889-rynki-market-e` | `Market E` |
| `.oc-offer-table__rn00889-rynki-market-e-letter` | `Letter` |
| `.oc-offer-table__rn00889-rynki-market-o` | `Market O` |
| `.oc-offer-table__rn00889-rynki-market-o-letter` | `Letter` |
| `.oc-offer-table__rn00889-cena` | `Cena` |
| `.oc-offer-table__rn00889-cena-cena` | `Cena` |
| `.oc-offer-table__rn00889-status` | `Status` |
| `.oc-offer-table__rn00889-status-status-pill` | `StatusPill` |
| `.oc-offer-table__rn00889-status-status-pill-dot` | `Dot` |
| `.oc-offer-table__rn00889-status-status-pill-robocza` | `Robocza` |
| `.oc-offer-table__bm00234` | `BM00234` |
| `.oc-offer-table__bm00234-zdj-cie` | `Zdjęcie` |
| `.oc-offer-table__bm00234-zdj-cie-thumb` | `Thumb` |
| `.oc-offer-table__bm00234-zdj-cie-thumb-glyph` | `glyph` |
| `.oc-offer-table__bm00234-sygnatura` | `Sygnatura` |
| `.oc-offer-table__bm00234-sygnatura-pill` | `Pill` |
| `.oc-offer-table__bm00234-sygnatura-pill-3-5` | `3/5` |
| `.oc-offer-table__bm00234-nazwa` | `Nazwa` |
| `.oc-offer-table__bm00234-nazwa-nazwa` | `Nazwa` |
| `.oc-offer-table__bm00234-pojazd` | `Pojazd` |
| `.oc-offer-table__bm00234-pojazd-marka` | `Marka` |
| `.oc-offer-table__bm00234-pojazd-model` | `Model` |
| `.oc-offer-table__bm00234-kategoria` | `Kategoria` |
| `.oc-offer-table__bm00234-kategoria-kategoria` | `Kategoria` |
| `.oc-offer-table__bm00234-stan` | `Stan` |
| `.oc-offer-table__bm00234-stan-stan` | `Stan` |
| `.oc-offer-table__bm00234-rynki` | `Rynki` |
| `.oc-offer-table__bm00234-rynki-market-a` | `Market A` |
| `.oc-offer-table__bm00234-rynki-market-a-letter` | `Letter` |
| `.oc-offer-table__bm00234-rynki-market-x` | `Market X` |
| `.oc-offer-table__bm00234-rynki-market-x-letter` | `Letter` |
| `.oc-offer-table__bm00234-rynki-market-e` | `Market E` |
| `.oc-offer-table__bm00234-rynki-market-e-letter` | `Letter` |
| `.oc-offer-table__bm00234-rynki-market-o` | `Market O` |
| `.oc-offer-table__bm00234-rynki-market-o-letter` | `Letter` |
| `.oc-offer-table__bm00234-cena` | `Cena` |
| `.oc-offer-table__bm00234-cena-cena` | `Cena` |
| `.oc-offer-table__bm00234-status` | `Status` |
| `.oc-offer-table__bm00234-status-status-pill` | `StatusPill` |
| `.oc-offer-table__bm00234-status-status-pill-dot` | `Dot` |
| `.oc-offer-table__bm00234-status-status-pill-robocza` | `Robocza` |
| `.oc-offer-table__ft00056` | `FT00056` |
| `.oc-offer-table__ft00056-zdj-cie` | `Zdjęcie` |
| `.oc-offer-table__ft00056-zdj-cie-thumb` | `Thumb` |
| `.oc-offer-table__ft00056-zdj-cie-thumb-glyph` | `glyph` |
| `.oc-offer-table__ft00056-sygnatura` | `Sygnatura` |
| `.oc-offer-table__ft00056-sygnatura-pill` | `Pill` |
| `.oc-offer-table__ft00056-sygnatura-pill-3-5` | `3/5` |
| `.oc-offer-table__ft00056-nazwa` | `Nazwa` |
| `.oc-offer-table__ft00056-nazwa-nazwa` | `Nazwa` |
| `.oc-offer-table__ft00056-pojazd` | `Pojazd` |
| `.oc-offer-table__ft00056-pojazd-marka` | `Marka` |
| `.oc-offer-table__ft00056-pojazd-model` | `Model` |
| `.oc-offer-table__ft00056-kategoria` | `Kategoria` |
| `.oc-offer-table__ft00056-kategoria-kategoria` | `Kategoria` |
| `.oc-offer-table__ft00056-stan` | `Stan` |
| `.oc-offer-table__ft00056-stan-stan` | `Stan` |
| `.oc-offer-table__ft00056-rynki` | `Rynki` |
| `.oc-offer-table__ft00056-rynki-market-a` | `Market A` |
| `.oc-offer-table__ft00056-rynki-market-a-letter` | `Letter` |
| `.oc-offer-table__ft00056-rynki-market-x` | `Market X` |
| `.oc-offer-table__ft00056-rynki-market-x-letter` | `Letter` |
| `.oc-offer-table__ft00056-rynki-market-e` | `Market E` |
| `.oc-offer-table__ft00056-rynki-market-e-letter` | `Letter` |
| `.oc-offer-table__ft00056-rynki-market-o` | `Market O` |
| `.oc-offer-table__ft00056-rynki-market-o-letter` | `Letter` |
| `.oc-offer-table__ft00056-cena` | `Cena` |
| `.oc-offer-table__ft00056-cena-cena` | `Cena` |
| `.oc-offer-table__ft00056-status` | `Status` |
| `.oc-offer-table__ft00056-status-status-pill` | `StatusPill` |
| `.oc-offer-table__ft00056-status-status-pill-dot` | `Dot` |
| `.oc-offer-table__ft00056-status-status-pill-robocza` | `Robocza` |

## Непривязанные значения

8 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1660px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `offer-table-header.borderWidth` | `1px` | нет токена под толщину обводки |
| `sk00147.borderWidth` | `1px` | нет токена под толщину обводки |
| `vw00312.borderWidth` | `1px` | нет токена под толщину обводки |
| `rn00889.borderWidth` | `1px` | нет токена под толщину обводки |
| `bm00234.borderWidth` | `1px` | нет токена под толщину обводки |
| `ft00056.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Towary → Tabela: the warehouse list of offers.
- Owns the container fill, border, radius and the column widths; OfferRow and OfferTableHeader read the same track and must never be resized independently.
