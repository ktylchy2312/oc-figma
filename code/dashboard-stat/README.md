# DashboardStat

Сгенерировано из набора компонентов Figma `DashboardStat`.

- Разметка: [`dashboard-stat.html`](dashboard-stat.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`dashboard-stat.css`](dashboard-stat.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-dashboard-stat`
- Группа Cards, уровень atom, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"ŁĄCZNIE W TOKU"` |
| `Value` (text) | свободный текст | `"7"` |
| `Variant` (variant) | `Neutral`, `Alert` | `"Neutral"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-dashboard-stat` | `DashboardStat` |
| `.oc-dashboard-stat__cznie-w-toku` | `ŁĄCZNIE W TOKU` |
| `.oc-dashboard-stat__7` | `7` |
| `.oc-dashboard-stat__ryzyko-oc` | `ryzyko-oc` |
| `.oc-dashboard-stat__6` | `6` |

## Непривязанные значения

1 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Входит в состав других компонентов (1 шт. по графу Figma).
