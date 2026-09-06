# ButtonGroup

Обойма кнопок: футер диалога, подвал формы. Существует ради того, чтобы порядок кнопок и зазор не решались заново на каждом экране. Главное действие справа.

- Разметка: [`button-group.html`](button-group.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`button-group.css`](button-group.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<button>`, базовый класс `.oc-button-group`
- Группа Actions, уровень organism, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-button-group` | `ButtonGroup` |
| `.oc-button-group__secondary` | `Secondary` |
| `.oc-button-group__secondary-icon-plus` | `Icons` |
| `.oc-button-group__secondary-label` | `Dodaj samochód` |
| `.oc-button-group__primary` | `Primary` |
| `.oc-button-group__primary-icon-plus` | `Icons` |
| `.oc-button-group__primary-label` | `Dodaj samochód` |

## Где используется

- Обойма кнопок: футер диалога, подвал формы.
- Существует ради того, чтобы порядок кнопок и зазор не решались заново на каждом экране.
- Главное действие справа.
- Входит в состав других компонентов (1 шт. по графу Figma).
