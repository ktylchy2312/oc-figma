# UnderlineTabs

Обойма подчёркнутых вкладок: экран настроек. Нижняя грань принадлежит обойме, а не вкладке — иначе линия рвётся в зазорах между ними. Зазор 24: прототипные 28 не на шкале.

- Разметка: [`underline-tabs.html`](underline-tabs.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`underline-tabs.css`](underline-tabs.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-underline-tabs`
- Группа Navigation, уровень molecule, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-underline-tabs` | `UnderlineTabs` |
| `.oc-underline-tabs__tab-1` | `Tab 1` |
| `.oc-underline-tabs__tab-1-label` | `Label` |
| `.oc-underline-tabs__tab-1-underline` | `Underline` |
| `.oc-underline-tabs__tab-2` | `Tab 2` |
| `.oc-underline-tabs__tab-2-label` | `Label` |
| `.oc-underline-tabs__tab-2-underline` | `Underline` |
| `.oc-underline-tabs__tab-3` | `Tab 3` |
| `.oc-underline-tabs__tab-3-label` | `Label` |
| `.oc-underline-tabs__tab-3-underline` | `Underline` |

## Непривязанные значения

2 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `520px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Обойма подчёркнутых вкладок: экран настроек.
- Нижняя грань принадлежит обойме, а не вкладке — иначе линия рвётся в зазорах между ними.
- Зазор 24: прототипные 28 не на шкале.
