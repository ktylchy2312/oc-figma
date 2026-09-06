# AlertButton

Сгенерировано из набора компонентов Figma `AlertButton`.

- Разметка: [`alert-button.html`](alert-button.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`alert-button.css`](alert-button.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<button>`, базовый класс `.oc-alert-button`
- Группа Actions, уровень organism, вариантов 9

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Alerty"` |
| `Tone` (variant) | `Danger`, `Warning`, `Neutral` | `"Danger"` |
| `State` (variant) | `Default`, `Hover`, `Pressed` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-alert-button--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-alert-button` | `AlertButton` |
| `.oc-alert-button__alert-bell` | `AlertBell` |
| `.oc-alert-button__icon-bell` | `Icons` |
| `.oc-alert-button__badge` | `Badge` |
| `.oc-alert-button__count` | `3` |
| `.oc-alert-button__label` | `Alerty` |

## Непривязанные значения

2 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `height` | `44px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
