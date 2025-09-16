/**
 * utils.ts — утилитарные функции для работы с цветами и темами
 */

/**
 * Функция для добавления прозрачности к цвету
 * @param color - HEX цвет
 * @param opacity - прозрачность от 0 до 1
 * @returns цвет с прозрачностью в формате HEX8
 */
export const addOpacity = (color: string, opacity: number): string => {
  // Преобразуем прозрачность в hex значение (0-255)
  const alpha = Math.round(opacity * 255);
  const hex = alpha.toString(16).padStart(2, '0');
  return `${color}${hex}`;
};

/**
 * Утилитарные токены прозрачности
 */
export const opacity = {
  invisible: 0, // невидимый
  ghosty: 0.08, // призрачный
  muted: 0.16, // приглушенный
  faded: 0.24, // выцветший
  soft: 0.32, // мягкий
  tertiary: 0.4, // третичный
  secondary: 0.6, // вторичный
  primary: 0.8, // основной
  strong: 1, // сильный
} as const;
