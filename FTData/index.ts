/**
 * index.ts — экспорт базовых токенов дизайн-системы.
 *
 * Структура:
 * - types.ts — базовые типы и интерфейсы
 * - rootColors.ts — корневые цвета бренда
 * - palette.ts — тональные растяжки
 * - theme.ts — семантические токены для светлой и темной темы
 * - typography.ts — типографические токены
 */

// Корневые цвета
export { rootColors } from './rootColors';

// Палитра
export { palette } from './palette';

// Темы
export { lightTheme, darkTheme } from './theme';

// Типографика
export { fontFamily, fontWeights, typography } from './typography';

// Утилиты
export { addOpacity, opacity } from './utils';
