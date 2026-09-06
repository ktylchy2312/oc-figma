# ColumnHeader

Сгенерировано из набора компонентов Figma `ColumnHeader`.

- Разметка: [`column-header.html`](column-header.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`column-header.css`](column-header.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-column-header`
- Группа Stage, уровень molecule, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"KUPIONA"` |
| `State` (variant) | `Default`, `Edit` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-column-header--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-column-header` | `ColumnHeader` |
| `.oc-column-header__label` | `KUPIONA` |
| `.oc-column-header__icon-button` | `IconButton` |
| `.oc-column-header__icon-edit` | `Icons` |
| `.oc-column-header__icon-button-2` | `IconButton` |
| `.oc-column-header__icon-button-2-icon-trash` | `Icons` |
| `.oc-column-header__input` | `input` |
| `.oc-column-header__input-label` | `input/label` |
| `.oc-column-header__icon-button-icon-trash` | `icon-button/icon-trash` |

## Непривязанные значения

11 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `300px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `icon-button.width` | `26px` | нет шкалы размеров: ширина задана числом |
| `icon-button.height` | `28px` | нет шкалы размеров: высота задана числом |
| `icon-button/icon-edit.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-button-2.width` | `26px` | нет шкалы размеров: ширина задана числом |
| `icon-button-2.height` | `28px` | нет шкалы размеров: высота задана числом |
| `icon-button-2/icon-trash.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `input.height` | `32px` | нет шкалы размеров: высота задана числом |
| `input.borderWidth` | `1px` | нет токена под толщину обводки |
| `icon-button/icon-trash.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
