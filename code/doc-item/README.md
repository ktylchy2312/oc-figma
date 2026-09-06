# DocItem

Сгенерировано из набора компонентов Figma `DocItem`.

- Разметка: [`doc-item.html`](doc-item.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`doc-item.css`](doc-item.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-doc-item`
- Группа Cards, уровень molecule, вариантов 1

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Label` (text) | свободный текст | `"Dowód rejestracyjny"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-doc-item` | `DocItem` |
| `.oc-doc-item__icon-document` | `Icons` |
| `.oc-doc-item__label` | `Dowód rejestracyjny` |
| `.oc-doc-item__icon-button` | `IconButton` |
| `.oc-doc-item__icon-x` | `Icons` |

## Непривязанные значения

5 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `300px` | нет шкалы размеров: ширина задана числом |
| `icon-document.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-button.width` | `22px` | нет шкалы размеров: ширина задана числом |
| `icon-button.height` | `24px` | нет шкалы размеров: высота задана числом |
| `icon-button/icon-x.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
