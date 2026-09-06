# Dialog

Оболочка диалога: шапка, тело, подвал. DeleteStageDialog собран как одна неразбираемая штука — из этого собираются все остальные: подтверждение, отправка, предпросмотр.

- Разметка: [`dialog.html`](dialog.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`dialog.css`](dialog.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-dialog`
- Группа Overlays, уровень organism, вариантов 1

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Title` (text) | свободный текст | `"Usunąć etap?"` |
| `Text` (text) | свободный текст | `"Tej operacji nie można cofnąć."` |

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-dialog` | `Dialog` |
| `.oc-dialog__header` | `Header` |
| `.oc-dialog__title` | `Title` |
| `.oc-dialog__body` | `Body` |
| `.oc-dialog__text` | `Text` |
| `.oc-dialog__footer` | `Footer` |
| `.oc-dialog__actions` | `Actions` |
| `.oc-dialog__secondary` | `Secondary` |
| `.oc-dialog__secondary-icon-plus` | `Icons` |
| `.oc-dialog__secondary-label` | `Dodaj samochód` |
| `.oc-dialog__primary` | `Primary` |
| `.oc-dialog__primary-icon-plus` | `Icons` |
| `.oc-dialog__primary-label` | `Dodaj samochód` |

## Непривязанные значения

2 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `440px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Оболочка диалога: шапка, тело, подвал.
- DeleteStageDialog собран как одна неразбираемая штука — из этого собираются все остальные: подтверждение, отправка, предпросмотр.
- Входит в состав других компонентов (1 шт. по графу Figma).
