# InsertStageButton

Сгенерировано из набора компонентов Figma `InsertStageButton`.

- Разметка: [`insert-stage-button.html`](insert-stage-button.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`insert-stage-button.css`](insert-stage-button.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<button>`, базовый класс `.oc-insert-stage-button`
- Группа Actions, уровень molecule, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Disabled` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-insert-stage-button--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-insert-stage-button` | `InsertStageButton` |
| `.oc-insert-stage-button__icon-plus` | `Icons` |

## Непривязанные значения

3 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `40px` | нет шкалы размеров: ширина задана числом |
| `height` | `40px` | нет шкалы размеров: высота задана числом |
| `icon-plus.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
