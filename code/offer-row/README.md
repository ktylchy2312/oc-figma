# OfferRow

One offer inside OfferTable. Never used standalone — the table owns the container fill, border, radius and the column widths. Hover is the only affordance the source gives a row; there is no pressed or selected state.

- Разметка: [`offer-row.html`](offer-row.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`offer-row.css`](offer-row.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-offer-row`
- Группа Cards, уровень molecule, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Nazwa` (text) | свободный текст | `"Drzwi tylne prawe"` |
| `Marka` (text) | свободный текст | `"Skoda"` |
| `Model` (text) | свободный текст | `"Superb I 2003–2008"` |
| `Kategoria` (text) | свободный текст | `"Drzwi"` |
| `Stan` (text) | свободный текст | `"1 szt."` |
| `Cena` (text) | свободный текст | `"480 zł"` |
| `State` (variant) | `Default`, `Hover` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-offer-row--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-offer-row` | `OfferRow` |
| `.oc-offer-row__zdj-cie` | `Zdjęcie` |
| `.oc-offer-row__thumb` | `Thumb` |
| `.oc-offer-row__glyph` | `glyph` |
| `.oc-offer-row__sygnatura` | `Sygnatura` |
| `.oc-offer-row__pill` | `Pill` |
| `.oc-offer-row__3-5` | `3/5` |
| `.oc-offer-row__nazwa` | `Nazwa` |
| `.oc-offer-row__nazwa-nazwa` | `Nazwa` |
| `.oc-offer-row__pojazd` | `Pojazd` |
| `.oc-offer-row__marka` | `Marka` |
| `.oc-offer-row__model` | `Model` |
| `.oc-offer-row__kategoria` | `Kategoria` |
| `.oc-offer-row__kategoria-kategoria` | `Kategoria` |
| `.oc-offer-row__stan` | `Stan` |
| `.oc-offer-row__stan-stan` | `Stan` |
| `.oc-offer-row__rynki` | `Rynki` |
| `.oc-offer-row__market-a` | `Market A` |
| `.oc-offer-row__market-a-letter` | `Letter` |
| `.oc-offer-row__market-x` | `Market X` |
| `.oc-offer-row__market-x-letter` | `Letter` |
| `.oc-offer-row__market-e` | `Market E` |
| `.oc-offer-row__market-e-letter` | `Letter` |
| `.oc-offer-row__market-o` | `Market O` |
| `.oc-offer-row__market-o-letter` | `Letter` |
| `.oc-offer-row__cena` | `Cena` |
| `.oc-offer-row__cena-cena` | `Cena` |
| `.oc-offer-row__status` | `Status` |
| `.oc-offer-row__status-pill` | `StatusPill` |
| `.oc-offer-row__dot` | `Dot` |
| `.oc-offer-row__robocza` | `Robocza` |

## Непривязанные значения

22 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1660px` | нет шкалы размеров: ширина задана числом |
| `height` | `64px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `zdj-cie.width` | `52px` | нет шкалы размеров: ширина задана числом |
| `zdj-cie/thumb.width` | `38px` | нет шкалы размеров: ширина задана числом |
| `zdj-cie/thumb.height` | `38px` | нет шкалы размеров: высота задана числом |
| `zdj-cie/thumb.borderWidth` | `1px` | нет токена под толщину обводки |
| `zdj-cie/thumb/glyph.width` | `16px` | нет шкалы размеров: ширина задана числом |
| `zdj-cie/thumb/glyph.height` | `16px` | нет шкалы размеров: высота задана числом |
| `sygnatura.width` | `112px` | нет шкалы размеров: ширина задана числом |
| `nazwa.width` | `368px` | нет шкалы размеров: ширина задана числом |
| `pojazd.width` | `280px` | нет шкалы размеров: ширина задана числом |
| `kategoria.width` | `280px` | нет шкалы размеров: ширина задана числом |
| `stan.width` | `84px` | нет шкалы размеров: ширина задана числом |
| `rynki.width` | `108px` | нет шкалы размеров: ширина задана числом |
| `rynki/market-a.borderWidth` | `1px` | нет токена под толщину обводки |
| `rynki/market-x.borderWidth` | `1px` | нет токена под толщину обводки |
| `rynki/market-e.borderWidth` | `1px` | нет токена под толщину обводки |
| `rynki/market-o.borderWidth` | `1px` | нет токена под толщину обводки |
| `cena.width` | `84px` | нет шкалы размеров: ширина задана числом |
| `status.width` | `132px` | нет шкалы размеров: ширина задана числом |
| `status/status-pill.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- One offer inside OfferTable.
- Hover is the only affordance the source gives a row; there is no pressed or selected state.
- Входит в состав других компонентов (1 шт. по графу Figma).

## Не делать

- Never used standalone — the table owns the container fill, border, radius and the column widths.
