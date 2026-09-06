# StatusCheck

Сгенерировано из набора компонентов Figma `StatusCheck`.

- Разметка: [`status-check.html`](status-check.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`status-check.css`](status-check.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-status-check`
- Группа Feedback, уровень molecule, вариантов 3

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `State` (variant) | `Done`, `Warn`, `Pending` | `"Done"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-status-check--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-status-check` | `StatusCheck` |
| `.oc-status-check__icon-circle-check` | `Icons` |
| `.oc-status-check__icon-warning` | `icon-warning` |
| `.oc-status-check__icon-circle` | `icon-circle` |

## Непривязанные значения

3 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `icon-circle-check.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-warning.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-circle.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |

## Где используется

- Входит в состав других компонентов (2 шт. по графу Figma).
