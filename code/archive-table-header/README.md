# ArchiveTableHeader

Wiersz nagłówka dla ArchiveTable. 7 kolumn, szerokość 1660. Nie używać samodzielnie.

- Разметка: [`archive-table-header.html`](archive-table-header.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`archive-table-header.css`](archive-table-header.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-archive-table-header`
- Группа Cards, уровень atom, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-archive-table-header` | `ArchiveTableHeader` |
| `.oc-archive-table-header__sygnatura` | `SYGNATURA` |
| `.oc-archive-table-header__sygnatura-sygnatura` | `SYGNATURA` |
| `.oc-archive-table-header__pojazd` | `POJAZD` |
| `.oc-archive-table-header__pojazd-pojazd` | `POJAZD` |
| `.oc-archive-table-header__vin` | `VIN` |
| `.oc-archive-table-header__vin-vin` | `VIN` |
| `.oc-archive-table-header__kupiona` | `KUPIONA` |
| `.oc-archive-table-header__kupiona-kupiona` | `KUPIONA` |
| `.oc-archive-table-header__utylizowana` | `UTYLIZOWANA` |
| `.oc-archive-table-header__utylizowana-utylizowana` | `UTYLIZOWANA` |
| `.oc-archive-table-header__dokumenty` | `DOKUMENTY` |
| `.oc-archive-table-header__dokumenty-dokumenty` | `DOKUMENTY` |
| `.oc-archive-table-header__status` | `STATUS` |
| `.oc-archive-table-header__status-status` | `STATUS` |

## Непривязанные значения

4 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `sygnatura.width` | `112px` | нет шкалы размеров: ширина задана числом |
| `pojazd.width` | `284px` | нет шкалы размеров: ширина задана числом |
| `vin.width` | `280px` | нет шкалы размеров: ширина задана числом |

## Где используется

- Wiersz nagłówka dla ArchiveTable.
- 7 kolumn, szerokość 1660.
- Nie używać samodzielnie.
- Входит в состав других компонентов (1 шт. по графу Figma).
