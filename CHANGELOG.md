# Рефакторинг системы тем

## 28.10 — Добавление breakpoints и CSS версии

- ✅ Добавлен файл `breakpoints.ts` в Education и FTData
- ✅ В FTData добавлена CSS версия токенов в папке `css/`
- ⚠️ Выбрать вариант `colors.css` с маппингом или без

## 16.10 — Изменение типографики

- 🔄 Уменьшен `letterSpacing` для `hero` и `head`

## Синк палитры с фигмой

- ✅ Синхронизированы цветовые палитры с Figma (обновлена neutral палитра: оттенки 40-85)

## Изменения

- 🔄 Уменьшен letterSpacing у legal

## Изменения

- ❌ Разгруппирована группа `fixed` - `transparent`, `fixed.light`, `fixed.dark` и `imageFill` вынесены на верхний уровень
- ❌ Удалена вся группа `inverse` (компенсируем управлением темой на уровне компонентов)
- ✅ Доавлены токены `bg.muted`, `bg.ghosty` для консистентности с группой fg
- 🔄 Заменена функция `addOpacity` на `rgba` из библиотеки `polished`
- 🔄 `utils.ts` → `opacity.ts` (убрана функция `addOpacity`)
- 🔄 `theme.ts` → `colors.ts`
- 🔄 `lightTheme`/`darkTheme` → `lightColors`/`darkColors`
- 🛠 Для тестов созданы темные темы для FTData и Education, некоторые значения полюбому плохо настроены

## TODO

- [ ] **Токены теней**: Можно как-то более элегентно описать тени?
