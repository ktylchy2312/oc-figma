# FilterOption

Сгенерировано из набора компонентов Figma `FilterOption`.

- Разметка: [`filter-option.html`](filter-option.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`filter-option.css`](filter-option.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-filter-option`
- Группа Forms, уровень atom, вариантов 6

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Wszystkie"` |
| `Key` (variant) | `All`, `Ryzyko`, `Wygaslo` | `"All"` |
| `Selected` (variant) | `False`, `True` | `"False"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-filter-option` | `FilterOption` |
| `.oc-filter-option__ellipse` | `Ellipse` |
| `.oc-filter-option__label` | `Wszystkie` |
| `.oc-filter-option__icon-check` | `icon-check` |

## Непривязанные значения

4 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `200px` | нет шкалы размеров: ширина задана числом |
| `ellipse.width` | `8px` | нет шкалы размеров: ширина задана числом |
| `ellipse.height` | `8px` | нет шкалы размеров: высота задана числом |
| `icon-check.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
