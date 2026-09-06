# EtapyTableHeader

Wiersz nagłówka dla EtapyTable. 8 kolumn, szerokość 1660. Nie używać samodzielnie.

- Разметка: [`etapy-table-header.html`](etapy-table-header.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`etapy-table-header.css`](etapy-table-header.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-etapy-table-header`
- Группа Stage, уровень atom, вариантов 1

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-etapy-table-header` | `EtapyTableHeader` |
| `.oc-etapy-table-header__sygnatura` | `SYGNATURA` |
| `.oc-etapy-table-header__sygnatura-sygnatura` | `SYGNATURA` |
| `.oc-etapy-table-header__pojazd` | `POJAZD` |
| `.oc-etapy-table-header__pojazd-pojazd` | `POJAZD` |
| `.oc-etapy-table-header__vin` | `VIN` |
| `.oc-etapy-table-header__vin-vin` | `VIN` |
| `.oc-etapy-table-header__kupiona` | `KUPIONA` |
| `.oc-etapy-table-header__kupiona-kupiona` | `KUPIONA` |
| `.oc-etapy-table-header__status-oc` | `STATUS OC` |
| `.oc-etapy-table-header__status-oc-status-oc` | `STATUS OC` |
| `.oc-etapy-table-header__oc-do` | `OC DO` |
| `.oc-etapy-table-header__oc-do-oc-do` | `OC DO` |
| `.oc-etapy-table-header__dokumenty` | `DOKUMENTY` |
| `.oc-etapy-table-header__dokumenty-dokumenty` | `DOKUMENTY` |
| `.oc-etapy-table-header__etapy` | `ETAPY` |
| `.oc-etapy-table-header__etapy-etapy` | `ETAPY` |

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

- Wiersz nagłówka dla EtapyTable.
- 8 kolumn, szerokość 1660.
- Nie używać samodzielnie.
- Входит в состав других компонентов (1 шт. по графу Figma).
