# DocProgress

Сгенерировано из набора компонентов Figma `DocProgress`.

- Разметка: [`doc-progress.html`](doc-progress.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`doc-progress.css`](doc-progress.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-doc-progress`
- Группа Cards, уровень atom, вариантов 5

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Show Count` (boolean) | `true`, `false` | `true` |
| `Filled` (variant) | `0`, `1`, `2`, `3`, `4` | `"0"` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-doc-progress` | `DocProgress` |
| `.oc-doc-progress__bar` | `Bar` |
| `.oc-doc-progress__segment-1` | `Segment 1` |
| `.oc-doc-progress__segment-2` | `Segment 2` |
| `.oc-doc-progress__segment-3` | `Segment 3` |
| `.oc-doc-progress__segment-4` | `Segment 4` |
| `.oc-doc-progress__count` | `Count` |

## Непривязанные значения

8 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `bar/segment-1.width` | `28px` | нет шкалы размеров: ширина задана числом |
| `bar/segment-1.height` | `7px` | нет шкалы размеров: высота задана числом |
| `bar/segment-2.width` | `28px` | нет шкалы размеров: ширина задана числом |
| `bar/segment-2.height` | `7px` | нет шкалы размеров: высота задана числом |
| `bar/segment-3.width` | `28px` | нет шкалы размеров: ширина задана числом |
| `bar/segment-3.height` | `7px` | нет шкалы размеров: высота задана числом |
| `bar/segment-4.width` | `28px` | нет шкалы размеров: ширина задана числом |
| `bar/segment-4.height` | `7px` | нет шкалы размеров: высота задана числом |

## Где используется

- Входит в состав других компонентов (2 шт. по графу Figma).
