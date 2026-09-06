# ActionRow

Сгенерировано из набора компонентов Figma `ActionRow`.

- Разметка: [`action-row.html`](action-row.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`action-row.css`](action-row.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<button>`, базовый класс `.oc-action-row`
- Группа Actions, уровень organism, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Wycena pojazdu"` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-action-row--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-action-row` | `ActionRow` |
| `.oc-action-row__icon-bolt` | `Icons` |
| `.oc-action-row__label` | `Wycena pojazdu` |
| `.oc-action-row__status-check` | `StatusCheck` |
| `.oc-action-row__icon-circle-check` | `Icons` |

## Непривязанные значения

3 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `280px` | нет шкалы размеров: ширина задана числом |
| `icon-bolt.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Входит в состав других компонентов (1 шт. по графу Figma).
