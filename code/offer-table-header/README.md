# OfferTableHeader

Column header for OfferTable. Its column track must stay identical to OfferRow — widths live on the table, never per row.

- Разметка: [`offer-table-header.html`](offer-table-header.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`offer-table-header.css`](offer-table-header.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-offer-table-header`
- Группа Cards, уровень atom, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-offer-table-header` | `OfferTableHeader` |
| `.oc-offer-table-header__zdj-cie` | `ZDJĘCIE` |
| `.oc-offer-table-header__zdj-cie-zdj-cie` | `ZDJĘCIE` |
| `.oc-offer-table-header__sygnatura` | `SYGNATURA` |
| `.oc-offer-table-header__sygnatura-sygnatura` | `SYGNATURA` |
| `.oc-offer-table-header__nazwa` | `NAZWA` |
| `.oc-offer-table-header__nazwa-nazwa` | `NAZWA` |
| `.oc-offer-table-header__pojazd` | `POJAZD` |
| `.oc-offer-table-header__pojazd-pojazd` | `POJAZD` |
| `.oc-offer-table-header__kategoria` | `KATEGORIA` |
| `.oc-offer-table-header__kategoria-kategoria` | `KATEGORIA` |
| `.oc-offer-table-header__stan-mag` | `STAN MAG.` |
| `.oc-offer-table-header__stan-mag-stan-mag` | `STAN MAG.` |
| `.oc-offer-table-header__rynki` | `RYNKI` |
| `.oc-offer-table-header__rynki-rynki` | `RYNKI` |
| `.oc-offer-table-header__cena` | `CENA` |
| `.oc-offer-table-header__cena-cena` | `CENA` |
| `.oc-offer-table-header__status` | `STATUS` |
| `.oc-offer-table-header__status-status` | `STATUS` |

## Непривязанные значения

11 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1660px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `zdj-cie.width` | `52px` | нет шкалы размеров: ширина задана числом |
| `sygnatura.width` | `112px` | нет шкалы размеров: ширина задана числом |
| `nazwa.width` | `368px` | нет шкалы размеров: ширина задана числом |
| `pojazd.width` | `280px` | нет шкалы размеров: ширина задана числом |
| `kategoria.width` | `280px` | нет шкалы размеров: ширина задана числом |
| `stan-mag.width` | `84px` | нет шкалы размеров: ширина задана числом |
| `rynki.width` | `108px` | нет шкалы размеров: ширина задана числом |
| `cena.width` | `84px` | нет шкалы размеров: ширина задана числом |
| `status.width` | `132px` | нет шкалы размеров: ширина задана числом |

## Где используется

- Column header for OfferTable.
- Its column track must stay identical to OfferRow — widths live on the table, never per row.
- Входит в состав других компонентов (1 шт. по графу Figma).
