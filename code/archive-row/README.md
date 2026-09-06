# ArchiveRow

Wiersz archiwum. Rekordy zamknięte, tylko do odczytu. Używać wyłącznie wewnątrz ArchiveTable.

- Разметка: [`archive-row.html`](archive-row.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`archive-row.css`](archive-row.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-archive-row`
- Группа Cards, уровень molecule, вариантов 2

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `Marka` (text) | свободный текст | `"Skoda"` |
| `Model` (text) | свободный текст | `"Superb I 2003–2008"` |
| `Vin` (text) | свободный текст | `"TMBAB41U358123456"` |
| `Kupiona` (text) | свободный текст | `"03.08.2026"` |
| `Utylizowana` (text) | свободный текст | `"03.09.2026"` |
| `State` (variant) | `Default`, `Hover` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-archive-row--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-archive-row` | `ArchiveRow` |
| `.oc-archive-row__sygnatura` | `Sygnatura` |
| `.oc-archive-row__pill` | `Pill` |
| `.oc-archive-row__3-5` | `3/5` |
| `.oc-archive-row__pojazd` | `Pojazd` |
| `.oc-archive-row__marka` | `Marka` |
| `.oc-archive-row__model` | `Model` |
| `.oc-archive-row__vin` | `Vin` |
| `.oc-archive-row__vin-vin` | `Vin` |
| `.oc-archive-row__kupiona` | `Kupiona` |
| `.oc-archive-row__kupiona-kupiona` | `Kupiona` |
| `.oc-archive-row__utylizowana` | `Utylizowana` |
| `.oc-archive-row__utylizowana-utylizowana` | `Utylizowana` |
| `.oc-archive-row__dokumenty` | `Dokumenty` |
| `.oc-archive-row__doc-progress` | `DocProgress` |
| `.oc-archive-row__bar` | `Bar` |
| `.oc-archive-row__segment-1` | `Segment 1` |
| `.oc-archive-row__segment-2` | `Segment 2` |
| `.oc-archive-row__segment-3` | `Segment 3` |
| `.oc-archive-row__segment-4` | `Segment 4` |
| `.oc-archive-row__count` | `Count` |
| `.oc-archive-row__status` | `Status` |
| `.oc-archive-row__status-status` | `Status` |
| `.oc-archive-row__robocza` | `Robocza` |

## Непривязанные значения

7 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `1658px` | нет шкалы размеров: ширина задана числом |
| `height` | `64px` | нет шкалы размеров: высота задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `sygnatura.width` | `112px` | нет шкалы размеров: ширина задана числом |
| `pojazd.width` | `284px` | нет шкалы размеров: ширина задана числом |
| `vin.width` | `280px` | нет шкалы размеров: ширина задана числом |
| `status/status.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Wiersz archiwum.
- Rekordy zamknięte, tylko do odczytu.
- Używać wyłącznie wewnątrz ArchiveTable.
- Входит в состав других компонентов (1 шт. по графу Figma).
