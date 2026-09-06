# DeleteStageDialog

Подтверждение удаления этапа. Собран из Dialog — своей разметки не держит: правка Dialog доезжает сюда сама. Тексты живут в слотах инстанса.

- Разметка: [`delete-stage-dialog.html`](delete-stage-dialog.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`delete-stage-dialog.css`](delete-stage-dialog.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-delete-stage-dialog`
- Группа Overlays, уровень organism, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-delete-stage-dialog` | `DeleteStageDialog` |
| `.oc-delete-stage-dialog__dialog` | `Dialog` |
| `.oc-delete-stage-dialog__header` | `Header` |
| `.oc-delete-stage-dialog__title` | `Title` |
| `.oc-delete-stage-dialog__body` | `Body` |
| `.oc-delete-stage-dialog__text` | `Text` |
| `.oc-delete-stage-dialog__footer` | `Footer` |
| `.oc-delete-stage-dialog__actions` | `Actions` |
| `.oc-delete-stage-dialog__secondary` | `Secondary` |
| `.oc-delete-stage-dialog__secondary-icon-plus` | `Icons` |
| `.oc-delete-stage-dialog__secondary-label` | `Dodaj samochód` |
| `.oc-delete-stage-dialog__primary` | `Primary` |
| `.oc-delete-stage-dialog__primary-icon-plus` | `Icons` |
| `.oc-delete-stage-dialog__primary-label` | `Dodaj samochód` |

## Непривязанные значения

2 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `dialog.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Подтверждение удаления этапа.
- Собран из Dialog — своей разметки не держит: правка Dialog доезжает сюда сама.
- Тексты живут в слотах инстанса.
