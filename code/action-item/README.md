# ActionItem

Сгенерировано из набора компонентов Figma `ActionItem`.

- Разметка: [`action-item.html`](action-item.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`action-item.css`](action-item.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<button>`, базовый класс `.oc-action-item`
- Группа Actions, уровень molecule, вариантов 1

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Generuj umowę kupna"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-action-item` | `ActionItem` |
| `.oc-action-item__icon-bolt` | `Icons` |
| `.oc-action-item__label` | `Generuj umowę kupna` |
| `.oc-action-item__icon-button` | `IconButton` |
| `.oc-action-item__icon-settings` | `Icons` |
| `.oc-action-item__icon-button-2` | `IconButton` |
| `.oc-action-item__icon-x` | `Icons` |

## Непривязанные значения

8 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `300px` | нет шкалы размеров: ширина задана числом |
| `icon-bolt.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-button.width` | `22px` | нет шкалы размеров: ширина задана числом |
| `icon-button.height` | `24px` | нет шкалы размеров: высота задана числом |
| `icon-button/icon-settings.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-button-2.width` | `22px` | нет шкалы размеров: ширина задана числом |
| `icon-button-2.height` | `24px` | нет шкалы размеров: высота задана числом |
| `icon-button-2/icon-x.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
