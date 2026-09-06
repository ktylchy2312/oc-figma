# PartCard

Karta części na magazynie. Cała karta jest celem kliknięcia — stąd stan Focus. Stany zgodne z CarCard.

- Разметка: [`part-card.html`](part-card.html) — все варианты по порядку, каждый с комментарием.
- Стили: [`part-card.css`](part-card.css) — требуют `foundations/tokens.css` и `code/base.css`.
- Корень: `<div>`, базовый класс `.oc-part-card`
- Группа Cards, уровень molecule, вариантов 4

## Свойства

| Свойство | Значения | По умолчанию |
|---|---|---|
| `PartNumber` (text) | свободный текст | `"PT-000482"` |
| `Status` (text) | свободный текст | `"Aktywna"` |
| `PhotoCount` (text) | свободный текст | `"5"` |
| `Title` (text) | свободный текст | `"Alternator Bosch 90A"` |
| `Vehicle` (text) | свободный текст | `"BMW E90 2.0d"` |
| `Years` (text) | свободный текст | `"2005–2008"` |
| `Category` (text) | свободный текст | `"Elektryka"` |
| `Quantity` (text) | свободный текст | `"3 szt."` |
| `Price` (text) | свободный текст | `"320 zł"` |
| `State` (variant) | `Default`, `Hover`, `Pressed`, `Focus` | `"Default"` |

## Состояния

Каждое значение `State` выходит дважды: статическим модификатором (`.oc-part-card--state-hover`),
чтобы витрина показала все состояния разом, и псевдоклассом (`:hover`, `:active`, `:focus-visible`,
`:disabled`), чтобы компонент работал на живой странице. Наведение и нажатие гасятся на
выключенном элементе.

## Классы

Имена заморожены в [`../_names.json`](../_names.json): пути частей принадлежат дереву Figma, и
без карты вставленный соседний слой переименовал бы класс у части, которую никто не трогал.

| Класс | Слой Figma |
|---|---|
| `.oc-part-card` | `PartCard` |
| `.oc-part-card__hero` | `Hero` |
| `.oc-part-card__photo-placeholder` | `PhotoPlaceholder` |
| `.oc-part-card__hero-part-number` | `PartNumber` |
| `.oc-part-card__part-number-part-number` | `PartNumber` |
| `.oc-part-card__hero-status` | `Status` |
| `.oc-part-card__status-dot` | `Dot` |
| `.oc-part-card__status-status` | `Status` |
| `.oc-part-card__hero-photo-count` | `PhotoCount` |
| `.oc-part-card__camera` | `camera` |
| `.oc-part-card__photo-count-photo-count` | `PhotoCount` |
| `.oc-part-card__body` | `Body` |
| `.oc-part-card__info` | `Info` |
| `.oc-part-card__title-block` | `TitleBlock` |
| `.oc-part-card__title` | `Title` |
| `.oc-part-card__title-block-vehicle` | `Vehicle` |
| `.oc-part-card__vehicle-vehicle` | `Vehicle` |
| `.oc-part-card__vehicle-dot` | `Dot` |
| `.oc-part-card__years` | `Years` |
| `.oc-part-card__meta` | `Meta` |
| `.oc-part-card__category-qty` | `CategoryQty` |
| `.oc-part-card__category` | `Category` |
| `.oc-part-card__category-qty-dot` | `Dot` |
| `.oc-part-card__quantity` | `Quantity` |
| `.oc-part-card__price` | `Price` |
| `.oc-part-card__divider` | `Divider` |
| `.oc-part-card__footer` | `Footer` |
| `.oc-part-card__condition` | `Condition` |
| `.oc-part-card__grade-a` | `Grade A` |
| `.oc-part-card__grade-a-label` | `A` |
| `.oc-part-card__grade-e` | `Grade E` |
| `.oc-part-card__grade-e-label` | `A` |
| `.oc-part-card__grade-o` | `Grade O` |
| `.oc-part-card__grade-o-label` | `A` |

## Непривязанные значения

27 шт. Значение уехало в CSS литералом и помечено маркером TODO. Это дыра в
библиотеке Figma, а не в коде: пока переменной нет, подставлять «похожую» нельзя.

| Свойство | Значение | Почему |
|---|---|---|
| `width` | `320px` | нет шкалы размеров: ширина задана числом |
| `borderWidth` | `1px` | нет токена под толщину обводки |
| `hero.width` | `320px` | нет шкалы размеров: ширина задана числом |
| `hero.height` | `168px` | нет шкалы размеров: высота задана числом |
| `hero/photo-placeholder.width` | `88px` | нет шкалы размеров: ширина задана числом |
| `hero/photo-placeholder.height` | `88px` | нет шкалы размеров: высота задана числом |
| `hero/photo-placeholder.opacity` | `0.3` | непрозрачность без токена |
| `hero/part-number.width` | `83px` | нет шкалы размеров: ширина задана числом |
| `hero/part-number.height` | `26px` | нет шкалы размеров: высота задана числом |
| `hero/part-number.borderWidth` | `1px` | нет токена под толщину обводки |
| `hero/status.width` | `86px` | нет шкалы размеров: ширина задана числом |
| `hero/status.height` | `26px` | нет шкалы размеров: высота задана числом |
| `hero/status.borderWidth` | `1px` | нет токена под толщину обводки |
| `hero/status/dot.width` | `6px` | нет шкалы размеров: ширина задана числом |
| `hero/status/dot.height` | `6px` | нет шкалы размеров: высота задана числом |
| `hero/photo-count.width` | `39px` | нет шкалы размеров: ширина задана числом |
| `hero/photo-count.height` | `24px` | нет шкалы размеров: высота задана числом |
| `hero/photo-count/camera.width` | `12px` | нет шкалы размеров: ширина задана числом |
| `hero/photo-count/camera.height` | `12px` | нет шкалы размеров: высота задана числом |
| `body/info/title-block/vehicle/dot.width` | `4px` | нет шкалы размеров: ширина задана числом |
| `body/info/title-block/vehicle/dot.height` | `4px` | нет шкалы размеров: высота задана числом |
| `body/info/meta/category-qty/dot.width` | `2px` | нет шкалы размеров: ширина задана числом |
| `body/info/meta/category-qty/dot.height` | `2px` | нет шкалы размеров: высота задана числом |
| `body/divider.height` | `1px` | нет шкалы размеров: высота задана числом |
| `body/footer/condition/grade-a.borderWidth` | `1px` | нет токена под толщину обводки |
| `body/footer/condition/grade-e.borderWidth` | `1px` | нет токена под толщину обводки |
| `body/footer/condition/grade-o.borderWidth` | `1px` | нет токена под толщину обводки |

## Где используется

- Karta części na magazynie.
- Cała karta jest celem kliknięcia — stąd stan Focus.
- Stany zgodne z CarCard.
