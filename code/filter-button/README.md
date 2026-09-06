# FilterButton

Сгенерировано из набора компонентов Figma `FilterButton`.

- Разметка: [`filter-button.html`](filter-button.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`filter-button.css`](filter-button.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<button>`, базовый класс `.oc-filter-button`
- Группа Actions, уровень molecule, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Wszystkie"` |
| `State` (variant) | `Default`, `Active` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-filter-button--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-filter-button` | `FilterButton` |
| `.oc-filter-button__icon-filter` | `Icons` |
| `.oc-filter-button__label` | `Wszystkie` |
| `.oc-filter-button__icon-chevron-down` | `Icons` |

## Непривязанные значения

4 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `height` | `40px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `icon-filter.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-chevron-down.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
