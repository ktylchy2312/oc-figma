# FormField

Сгенерировано из набора компонентов Figma `FormField`.

- Разметка: [`form-field.html`](form-field.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`form-field.css`](form-field.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-form-field`
- Группа Forms, уровень atom, вариантов 12

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Value` (text) | свободный текст | `"2004"` |
| `Filled` (boolean) | `true`, `false` | `false` |
| `Required` (boolean) | `true`, `false` | `false` |
| `WithHint` (boolean) | `true`, `false` | `true` |
| `Variant` (variant) | `Text`, `Select`, `Textarea` | `"Text"` |
| `State` (variant) | `Default`, `Focus`, `Disabled`, `Error` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-form-field--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-form-field` | `FormField` |
| `.oc-form-field__label` | `Label` |
| `.oc-form-field__rok-produkcji` | `Rok produkcji` |
| `.oc-form-field__spacer` | `Spacer` |
| `.oc-form-field__input` | `Input` |
| `.oc-form-field__placeholder` | `Placeholder` |
| `.oc-form-field__hint` | `Hint` |
| `.oc-form-field__caret` | `input/caret` |
| `.oc-form-field__frame` | `frame` |
| `.oc-form-field__podaj-poprawny-rok-4-cyfry` | `podaj-poprawny-rok-4-cyfry` |
| `.oc-form-field__icon-chevron-down` | `input/icon-chevron-down` |
| `.oc-form-field__hint-gap` | `hint-gap` |

## Непривязанные значения

11 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `280px` | нет шкалы размеров: ширина задана числом |
| `spacer.height` | `8px` | нет шкалы размеров: высота задана числом |
| `input.height` | `40px` | нет шкалы размеров: высота задана числом |
| `input.borderWidth` | `1px` | нет токена под толщину обводки |
| `input/caret.width` | `1.5px` | нет шкалы размеров: ширина задана числом |
| `input/caret.height` | `20px` | нет шкалы размеров: высота задана числом |
| `opacity` | `0.6` | непрозрачность без токена |
| `frame.height` | `6px` | нет шкалы размеров: высота задана числом |
| `input/icon-chevron-down.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `input.height` | `96px` | нет шкалы размеров: высота задана числом |
| `hint-gap.height` | `6px` | нет шкалы размеров: высота задана числом |
