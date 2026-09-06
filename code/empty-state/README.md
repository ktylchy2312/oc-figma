# EmptyState

Сгенерировано из набора компонентов Figma `EmptyState`.

- Разметка: [`empty-state.html`](empty-state.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`empty-state.css`](empty-state.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-empty-state`
- Группа Feedback, уровень molecule, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `State` (variant) | `Default`, `DragOver` | `"Default"` |
| `Density` (variant) | `Default`, `Compact` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-empty-state--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-empty-state` | `EmptyState` |
| `.oc-empty-state__empty-art` | `EmptyArt` |
| `.oc-empty-state__doc1` | `doc1` |
| `.oc-empty-state__doc2` | `doc2` |
| `.oc-empty-state__cursor` | `cursor` |
| `.oc-empty-state__empty-title` | `EmptyTitle` |
| `.oc-empty-state__empty-title-label` | `Brak pojazdów na tym etapie` |
| `.oc-empty-state__empty-sub` | `EmptySub` |
| `.oc-empty-state__empty-sub-label` | `Przytrzymaj kartę lewym przyciskiem myszy i upuść ją tutaj.` |

## Непривязанные значения

2 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `280px` | нет шкалы размеров: ширина задана числом |
| `opacity` | `0.7` | непрозрачность без токена |

## Где используется

- Входит в состав других компонентов (1 шт. по графу Figma).
