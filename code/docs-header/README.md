# DocsHeader

Сгенерировано из набора компонентов Figma `DocsHeader`.

- Разметка: [`docs-header.html`](docs-header.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`docs-header.css`](docs-header.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-docs-header`
- Группа Cards, уровень molecule, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Count` (text) | свободный текст | `"3/5"` |
| `Status` (variant) | `Complete`, `Incomplete` | `"Complete"` |
| `Expanded` (variant) | `False`, `True` | `"False"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-docs-header` | `DocsHeader` |
| `.oc-docs-header__icon-document` | `Icons` |
| `.oc-docs-header__dokumenty` | `Dokumenty` |
| `.oc-docs-header__chip` | `Chip` |
| `.oc-docs-header__label` | `3/5` |
| `.oc-docs-header__icon-chevron-down` | `Icons` |
| `.oc-docs-header__icon-warning` | `icon-warning` |

## Непривязанные значения

6 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `280px` | нет шкалы размеров: ширина задана числом |
| `height` | `36px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `icon-document.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-chevron-down.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |
| `icon-warning.iconStrokeWidth` | `1` | нет токена под толщину линии иконки |

## Где используется

- Входит в состав других компонентов (1 шт. по графу Figma).
