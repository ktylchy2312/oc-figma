# StatusPill

Listing status of one offer. The pill is the status, so its label is baked per variant rather than exposed as a text slot. Colour is never the only carrier — the label always reads.

- Разметка: [`status-pill.html`](status-pill.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`status-pill.css`](status-pill.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-status-pill`
- Группа Feedback, уровень atom, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Status` (variant) | `Aktywna`, `Robocza`, `Zamówiona`, `Błąd` | `"Aktywna"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-status-pill` | `StatusPill` |
| `.oc-status-pill__dot` | `Dot` |
| `.oc-status-pill__aktywna` | `Aktywna` |
| `.oc-status-pill__robocza` | `robocza` |
| `.oc-status-pill__zam-wiona` | `zam-wiona` |
| `.oc-status-pill__b-d` | `b-d` |

## Непривязанные значения

3 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `dot.width` | `7px` | нет шкалы размеров: ширина задана числом |
| `dot.height` | `7px` | нет шкалы размеров: высота задана числом |

## Где используется

- Listing status of one offer.
- The pill is the status, so its label is baked per variant rather than exposed as a text slot.
- Colour is never the only carrier — the label always reads.
- Входит в состав других компонентов (3 шт. по графу Figma).
