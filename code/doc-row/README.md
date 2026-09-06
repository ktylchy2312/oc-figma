# DocRow

Сгенерировано из набора компонентов Figma `DocRow`.

- Разметка: [`doc-row.html`](doc-row.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`doc-row.css`](doc-row.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-doc-row`
- Группа Cards, уровень organism, вариантов 12

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Dowód rejestracyjny"` |
| `Status` (variant) | `Done`, `Warn`, `Pending` | `"Done"` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-doc-row--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-doc-row` | `DocRow` |
| `.oc-doc-row__icon-document` | `Icons` |
| `.oc-doc-row__label` | `Dowód rejestracyjny` |
| `.oc-doc-row__status-check` | `StatusCheck` |
| `.oc-doc-row__icon-circle-check` | `Icons` |
| `.oc-doc-row__icon-warning` | `status-check/icon-warning` |
| `.oc-doc-row__icon-circle` | `status-check/icon-circle` |

## Непривязанные значения

4 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `280px` | нет шкалы размеров: ширина задана числом |
| `height` | `36px` | нет шкалы размеров: высота задана числом |
| `icon-document.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Входит в состав других компонентов (1 шт. по графу Figma).
