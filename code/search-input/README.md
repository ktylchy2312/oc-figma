# SearchInput

Сгенерировано из набора компонентов Figma `SearchInput`.

- Разметка: [`search-input.html`](search-input.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`search-input.css`](search-input.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-search-input`
- Группа Forms, уровень molecule, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"VIN, numer, sprzedawca..."` |
| `Label2` (text) | свободный текст | `"VIN, numer, sprzedawca..."` |
| `State` (variant) | `Default`, `Filled`, `Focus`, `Disabled` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-search-input--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-search-input` | `SearchInput` |
| `.oc-search-input__icon-search` | `Icons` |
| `.oc-search-input__label2` | `VIN, numer, sprzedawca...` |
| `.oc-search-input__value` | `value` |
| `.oc-search-input__value-label2` | `value/label2` |
| `.oc-search-input__caret` | `value/caret` |

## Непривязанные значения

7 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `330px` | нет шкалы размеров: ширина задана числом |
| `height` | `40px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `icon-search.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `value/caret.width` | `1.5px` | нет шкалы размеров: ширина задана числом |
| `value/caret.height` | `20px` | нет шкалы размеров: высота задана числом |
| `opacity` | `0.5` | непрозрачность без токена |
