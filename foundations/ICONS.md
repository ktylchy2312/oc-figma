# Иконки

Набор — **Lucide** (лицензия ISC), имена глифов взяты из Figma-файла OC-Kontrol.

## Почему собран заново

В спеках лежали 24 глифа, из них **16 были обведены в контур** (в Figma применён
Outline stroke): штрих превратился в заливку. Такие иконки не слушаются толщины —
утолщать в них нечего. Отсюда 37 записей в `unbound` вида
«нет токена под толщину линии иконки»: токен есть, применять не к чему.

Происхождение доказано сопоставлением строения: у Lucide `circle` — у нас путь,
у Lucide четыре `rect` в `layout-grid` — у нас четыре пути, и так по всем 24.
Совпадение по числу фигур полное. Различалась только запись: `M5 12H19` против
`M5 12h14` — одна геометрия в абсолютных и относительных координатах.

Побочно: `Settings` весил 2300 символов пути, теперь 327.

## Состав

| файл | что |
|---|---|
| `icons.svg` | спрайт: 24 `<symbol>`, 13.3 КБ, толщина НЕ зашита |
| `icons.css` | размеры и веса штриха через переменные |
| `icons.index.json` | соответствие «глиф Figma → id в спрайте → имя в Lucide» |

## Как пользоваться

```html
<link rel="stylesheet" href="foundations/icons.css">
<!-- спрайт подключается один раз на страницу -->

<svg class="oc-icon oc-icon--md"><use href="foundations/icons.svg#plus"/></svg>
<svg class="oc-icon oc-icon--sm oc-icon--thin"><use href="foundations/icons.svg#clock"/></svg>
<svg class="oc-icon oc-icon--lg oc-icon--accent"><use href="foundations/icons.svg#zap"/></svg>
```

Цвет — `currentColor`, наследуется от родителя. Размер и толщина — классами.

## Правило

**Инлайновые копии контуров в разметку не вставляются.** Ни одной. В прототипе
их было 291 на 24 глифа — по десятку копий каждого. Иконка ставится ссылкой
на спрайт; если нужного глифа нет, он заводится в Figma и набор пересобирается,
а не дорисовывается на месте.

Толщину не задавать числом. Три веса — `--icon-stroke-thin` 1.5,
`--icon-stroke-regular` 1.8, `--icon-stroke-accent` 2.25. Значения предложены
по тому, что стоит в прототипе сегодня; после привязки в Figma заменить
на выгруженные.

## Соответствие имён

Глиф Figma → id в спрайте → иконка Lucide. Полный список в `icons.index.json`.

| Figma | id | Lucide |
|---|---|---|
| Plus | `plus` | plus |
| Document | `document` | file-text |
| CircleCheck | `circle-check` | circle-check-big |
| Warning | `warning` | triangle-alert |
| Bolt | `bolt` | zap |
| Grid | `grid` | layout-grid |
| Trash | `trash` | trash-2 |
| Filter | `filter` | funnel |
| Edit | `edit` | square-pen |
| Board | `board` | kanban |

Остальные четырнадцать совпадают по имени.
