# Pagination

Сгенерировано из набора компонентов Figma `Pagination`.

- Разметка: [`pagination.html`](pagination.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`pagination.css`](pagination.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-pagination`
- Группа Navigation, уровень organism, вариантов 1

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Range Label` (text) | свободный текст | `"Wyświetlono 1–5 z 13"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-pagination` | `Pagination` |
| `.oc-pagination__controls` | `Controls` |
| `.oc-pagination__page-arrow` | `PageArrow` |
| `.oc-pagination__icon-chevron-left` | `‹` |
| `.oc-pagination__page-number` | `PageNumber` |
| `.oc-pagination__page-number-label` | `2` |
| `.oc-pagination__page-number-2` | `PageNumber` |
| `.oc-pagination__page-number-2-label` | `2` |
| `.oc-pagination__page-number-3` | `PageNumber` |
| `.oc-pagination__page-number-3-label` | `2` |
| `.oc-pagination__page-arrow-2` | `PageArrow` |
| `.oc-pagination__icon-chevron-right` | `›` |
| `.oc-pagination__range-label` | `Wyświetlono 1–5 z 13` |

## Непривязанные значения

4 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `controls/page-arrow.borderWidth` | `1px` | нет токена под толщину обводки |
| `controls/page-number-2.borderWidth` | `1px` | нет токена под толщину обводки |
| `controls/page-number-3.borderWidth` | `1px` | нет токена под толщину обводки |
| `controls/page-arrow-2.borderWidth` | `1px` | нет токена под толщину обводки |
