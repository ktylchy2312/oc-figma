# MarketChip

One marketplace square inside an OfferRow. On = the part is listed there. The four markets (A Allegro, X OLX, E eBay PL, O Ovoko) are fixed — never re-letter them per row.

- Разметка: [`market-chip.html`](market-chip.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`market-chip.css`](market-chip.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-market-chip`
- Группа Forms, уровень atom, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Letter` (text) | свободный текст | `"A"` |
| `State` (variant) | `On`, `Off` | `"On"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-market-chip--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-market-chip` | `MarketChip` |
| `.oc-market-chip__letter` | `Letter` |

## Непривязанные значения

3 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `22px` | нет шкалы размеров: ширина задана числом |
| `height` | `22px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- One marketplace square inside an OfferRow.
- On = the part is listed there.
- The four markets (A Allegro, X OLX, E eBay PL, O Ovoko) are fixed — never re-letter them per row.
- Входит в состав других компонентов (1 шт. по графу Figma).
