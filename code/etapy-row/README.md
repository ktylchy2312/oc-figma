# EtapyRow

Wiersz rejestru pojazdów w obróbce. Używać wyłącznie wewnątrz EtapyTable.

- Разметка: [`etapy-row.html`](etapy-row.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`etapy-row.css`](etapy-row.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-etapy-row`
- Группа Stage, уровень molecule, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Marka` (text) | свободный текст | `"Skoda"` |
| `Model` (text) | свободный текст | `"Superb I 2003–2008"` |
| `Vin` (text) | свободный текст | `"WVWZZZ1KZ21836546"` |
| `Kupiona` (text) | свободный текст | `"03.08.2026"` |
| `OcDo` (text) | свободный текст | `"03.08.2026"` |
| `State` (variant) | `Default`, `Hover` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-etapy-row--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-etapy-row` | `EtapyRow` |
| `.oc-etapy-row__sygnatura` | `Sygnatura` |
| `.oc-etapy-row__pill` | `Pill` |
| `.oc-etapy-row__3-5` | `3/5` |
| `.oc-etapy-row__pojazd` | `Pojazd` |
| `.oc-etapy-row__marka` | `Marka` |
| `.oc-etapy-row__model` | `Model` |
| `.oc-etapy-row__vin` | `Vin` |
| `.oc-etapy-row__vin-vin` | `Vin` |
| `.oc-etapy-row__kupiona` | `Kupiona` |
| `.oc-etapy-row__kupiona-kupiona` | `Kupiona` |
| `.oc-etapy-row__status-oc` | `StatusOc` |
| `.oc-etapy-row__status-oc-status-oc` | `StatusOc` |
| `.oc-etapy-row__status-oc-dot` | `Dot` |
| `.oc-etapy-row__aktywna` | `Aktywna` |
| `.oc-etapy-row__oc-do` | `OcDo` |
| `.oc-etapy-row__oc-do-oc-do` | `OcDo` |
| `.oc-etapy-row__dokumenty` | `Dokumenty` |
| `.oc-etapy-row__doc-progress` | `DocProgress` |
| `.oc-etapy-row__bar` | `Bar` |
| `.oc-etapy-row__segment-1` | `Segment 1` |
| `.oc-etapy-row__segment-2` | `Segment 2` |
| `.oc-etapy-row__segment-3` | `Segment 3` |
| `.oc-etapy-row__segment-4` | `Segment 4` |
| `.oc-etapy-row__count` | `Count` |
| `.oc-etapy-row__etapy` | `Etapy` |
| `.oc-etapy-row__etapy-etapy` | `Etapy` |
| `.oc-etapy-row__etapy-dot` | `Dot` |
| `.oc-etapy-row__robocza` | `Robocza` |

## Непривязанные значения

8 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1658px` | нет шкалы размеров: ширина задана числом |
| `height` | `64px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `sygnatura.width` | `112px` | нет шкалы размеров: ширина задана числом |
| `pojazd.width` | `284px` | нет шкалы размеров: ширина задана числом |
| `vin.width` | `280px` | нет шкалы размеров: ширина задана числом |
| `status-oc/status-oc.borderWidth` | `1px` | нет токена под толщину обводки |
| `etapy/etapy.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Wiersz rejestru pojazdów w obróbce.
- Używać wyłącznie wewnątrz EtapyTable.
- Входит в состав других компонентов (1 шт. по графу Figma).
