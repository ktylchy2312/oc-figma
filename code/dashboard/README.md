# Dashboard

Сгенерировано из набора компонентов Figma `Dashboard`.

- Разметка: [`dashboard.html`](dashboard.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`dashboard.css`](dashboard.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-dashboard`
- Группа Navigation, уровень molecule, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-dashboard` | `Dashboard` |
| `.oc-dashboard__dashboard-stat` | `DashboardStat` |
| `.oc-dashboard__dashboard-stat-cznie-w-toku` | `ŁĄCZNIE W TOKU` |
| `.oc-dashboard__dashboard-stat-7` | `7` |
| `.oc-dashboard__dashboard-stat-2` | `DashboardStat` |
| `.oc-dashboard__ryzyko-oc` | `RYZYKO OC` |
| `.oc-dashboard__6` | `6` |
| `.oc-dashboard__dashboard-stat-3` | `DashboardStat` |
| `.oc-dashboard__dashboard-stat-3-cznie-w-toku` | `ŁĄCZNIE W TOKU` |
| `.oc-dashboard__dashboard-stat-3-7` | `7` |
| `.oc-dashboard__dashboard-stat-4` | `DashboardStat` |
| `.oc-dashboard__dashboard-stat-4-cznie-w-toku` | `ŁĄCZNIE W TOKU` |
| `.oc-dashboard__dashboard-stat-4-7` | `7` |

## Непривязанные значения

5 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `972px` | нет шкалы размеров: ширина задана числом |
| `dashboard-stat.borderWidth` | `1px` | нет токена под толщину обводки |
| `dashboard-stat-2.borderWidth` | `1px` | нет токена под толщину обводки |
| `dashboard-stat-3.borderWidth` | `1px` | нет токена под толщину обводки |
| `dashboard-stat-4.borderWidth` | `1px` | нет токена под толщину обводки |
