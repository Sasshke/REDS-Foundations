import { palette } from './palette';
import { addOpacity, opacity } from './utils';

export const lightTheme = {
  // Утилитарные токены
  opacity: opacity,

  // Палитра и базовые цвета
  palette,

  // Базовые цвета контента (foreground)
  fg: {
    primary: palette.neutral[80], // основной контент
    secondary: palette.neutral[65], // второстепенный текст
    tertiary: palette.neutral[45], // третичный контент
    disabled: addOpacity(palette.neutral[80], opacity.soft), // отключенный контент
    muted: addOpacity(palette.neutral[80], opacity.muted), // приглушенный
    ghosty: addOpacity(palette.neutral[80], opacity.ghosty), // призрачный
  },

  // Базовые фоны (background)
  bg: {
    low: palette.neutral[15], // низкий уровень фона
    mid: palette.neutral[10], // средний уровень фона
    high: palette.neutral[5], // высокий уровень фона
    disabled: addOpacity(palette.neutral[50], opacity.muted), // отключенный фон
  },

  // Поверхности (surface) - контейнеры для создания иерархии
  surface: {
    lowest: palette.neutral[20], // самый низкий уровень
    low: palette.neutral[15], // низкий уровень
    mid: palette.neutral[10], // средний уровень
    high: palette.neutral[5], // высокий уровень
    highest: palette.neutral[0], // самый высокий уровень
  },

  // Фиксированные цвета
  fixed: {
    transparent: 'transparent', // прозрачный
    light: palette.neutral[0], // светлый
    dark: palette.neutral[100], // темный
    imageFill: palette.neutral[15], // заполнение под изображениями
  },

  // Инверсные цвета для использования на темных фонах
  inverse: {
    fg: {
      primary: palette.neutral[5], // основной контент на темном фоне
      secondary: palette.neutral[25], // второстепенный контент
      tertiary: palette.neutral[40], // третичный контент
      disabled: addOpacity(palette.neutral[5], opacity.tertiary), // отключенный контент
      muted: addOpacity(palette.neutral[5], opacity.muted), // приглушенный
      ghosty: addOpacity(palette.neutral[5], opacity.ghosty), // призрачный
    },
    bg: {
      low: palette.neutral[85], // низкий уровень фона
      mid: palette.neutral[80], // средний уровень фона
      high: palette.neutral[75], // высокий уровень фона
      disabled: addOpacity(palette.neutral[50], opacity.soft), // отключенный фон
    },
    surface: {
      lowest: palette.neutral[90], // самый низкий уровень
      low: palette.neutral[85], // низкий уровень
      mid: palette.neutral[80], // средний уровень
      high: palette.neutral[75], // высокий уровень
      highest: palette.neutral[70], // самый высокий уровень
    },
  },

  // Акцентные цвета - семантические цвета для различных контекстов
  accent: {
    // Lead - брендовые цвета
    lead: {
      enabled: palette.purple[50],
      hover: palette.purple[45],
      active: palette.purple[40],
      contrast: palette.purple[5],
      alt: palette.purple[20],
    },
    leadSurface: {
      enabled: palette.purple[0],
      hover: palette.purple[5],
      active: palette.purple[10],
      contrast: palette.purple[50],
      alt: palette.purple[30],
    },
    leadContainer: {
      enabled: palette.purple[10],
      hover: palette.purple[15],
      active: palette.purple[20],
      contrast: palette.purple[60],
      alt: palette.purple[40],
    },

    // Success - позитивные действия и состояния
    success: {
      enabled: palette.green[50],
      hover: palette.green[45],
      active: palette.green[40],
      contrast: palette.green[5],
      alt: palette.green[20],
    },
    successSurface: {
      enabled: palette.green[0],
      hover: palette.green[5],
      active: palette.green[10],
      contrast: palette.green[50],
      alt: palette.green[15],
    },
    successContainer: {
      enabled: palette.green[10],
      hover: palette.green[15],
      active: palette.green[20],
      contrast: palette.green[60],
      alt: palette.green[40],
    },

    // Info - информационные сообщения
    info: {
      enabled: palette.blue[50],
      hover: palette.blue[45],
      active: palette.blue[40],
      contrast: palette.blue[5],
      alt: palette.blue[20],
    },
    infoSurface: {
      enabled: palette.blue[0],
      hover: palette.blue[5],
      active: palette.blue[10],
      contrast: palette.blue[50],
      alt: palette.blue[30],
    },
    infoContainer: {
      enabled: palette.blue[10],
      hover: palette.blue[15],
      active: palette.blue[20],
      contrast: palette.blue[60],
      alt: palette.blue[40],
    },

    // Warning - предупреждения
    warning: {
      enabled: palette.orange[50],
      hover: palette.orange[45],
      active: palette.orange[40],
      contrast: palette.orange[5],
      alt: palette.orange[20],
    },
    warningSurface: {
      enabled: palette.orange[0],
      hover: palette.orange[5],
      active: palette.orange[10],
      contrast: palette.orange[50],
      alt: palette.orange[30],
    },
    warningContainer: {
      enabled: palette.orange[10],
      hover: palette.orange[15],
      active: palette.orange[20],
      contrast: palette.orange[60],
      alt: palette.orange[40],
    },

    // Error - ошибки и деструктивные действия
    error: {
      enabled: palette.red[50],
      hover: palette.red[45],
      active: palette.red[40],
      contrast: palette.red[5],
      alt: palette.red[20],
    },
    errorSurface: {
      enabled: palette.red[0],
      hover: palette.red[5],
      active: palette.red[10],
      contrast: palette.red[50],
      alt: palette.red[30],
    },
    errorContainer: {
      enabled: palette.red[10],
      hover: palette.red[15],
      active: palette.red[20],
      contrast: palette.red[60],
      alt: palette.red[40],
    },

    // Neutral - нейтральные цвета
    neutral: {
      enabled: palette.neutral[80],
      hover: palette.neutral[65],
      active: palette.neutral[50],
      contrast: palette.neutral[5],
      alt: palette.neutral[15],
    },
    neutralSurface: {
      enabled: palette.neutral[5],
      hover: palette.neutral[10],
      active: palette.neutral[15],
      contrast: palette.neutral[80],
      alt: palette.neutral[30],
    },
    neutralContainer: {
      enabled: palette.neutral[20],
      hover: palette.neutral[15],
      active: palette.neutral[25],
      contrast: palette.neutral[80],
      alt: palette.neutral[40],
    },
  },

  // Утилитарные токены для теней
  shadow: {
    base: 'rgba(0, 0, 0, 0.16)', // базовый цвет тени
    blur: 'rgba(0, 0, 0, 0.08)', // размытый цвет тени

    // Размеры теней для создания иерархии
    lowest: '0 1px 1px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',
    low: '0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 6px 0 rgba(0, 0, 0, 0.16)',
    mid: '0 12px 48px 0 rgba(0, 0, 0, 0.08), 2px 4px 12px 0 rgba(0, 0, 0, 0.16)',
    high: '0 20px 64px 0 rgba(0, 0, 0, 0.08), 2px 8px 20px 0 rgba(0, 0, 0, 0.16)',
    highest: '0 32px 96px 0 rgba(0, 0, 0, 0.08), 4px 16px 32px 0 rgba(0, 0, 0, 0.16)',
  },
};

// Темная тема (пока пустая заглушка)
export const darkTheme = {
  // TODO: Реализовать темную тему
  ...lightTheme,
};
