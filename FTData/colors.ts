import { palette } from './palette';
import { opacity } from './opacity';
import { rgba } from 'polished';

export const lightColors = {
  // Токены прозрачности
  opacity: opacity,

  // Палитра и базовые цвета
  palette,

  // Базовые цвета контента (foreground)
  fg: {
    primary: palette.neutral[80], // основной контент
    secondary: palette.neutral[65], // второстепенный текст
    tertiary: palette.neutral[45], // третичный контент
    disabled: rgba(palette.neutral[80], opacity.tertiary), // отключенный контент
    muted: rgba(palette.neutral[80], opacity.muted), // приглушенный
    ghosty: rgba(palette.neutral[80], opacity.ghosty), // призрачный
  },

  // Базовые фоны (background)
  bg: {
    low: palette.neutral[15], // низкий уровень фона
    mid: palette.neutral[10], // средний уровень фона
    high: palette.neutral[5], // высокий уровень фона
    disabled: rgba(palette.neutral[50], opacity.muted), // отключенный фон
    muted: rgba(palette.neutral[15], opacity.muted), // приглушенный
    ghosty: rgba(palette.neutral[15], opacity.ghosty), // призрачный
  },

  // Поверхности (surface) - контейнеры для создания иерархии
  surface: {
    lowest: palette.neutral[20], // самый низкий уровень
    low: palette.neutral[15], // низкий уровень
    mid: palette.neutral[10], // средний уровень
    high: palette.neutral[5], // высокий уровень
    highest: palette.neutral[0], // самый высокий уровень
  },

  // Акцентные цвета - семантические цвета для различных контекстов
  accent: {
    // Lead - брендовые цвета
    lead: {
      enabled: palette.indigo[50],
      hover: palette.indigo[45],
      active: palette.indigo[40],
      contrast: palette.indigo[5],
      alt: palette.indigo[20],
    },
    leadSurface: {
      enabled: palette.indigo[0],
      hover: palette.indigo[5],
      active: palette.indigo[10],
      contrast: palette.indigo[50],
      alt: palette.indigo[30],
    },
    leadContainer: {
      enabled: palette.indigo[10],
      hover: palette.indigo[15],
      active: palette.indigo[20],
      contrast: palette.indigo[60],
      alt: palette.indigo[40],
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
      alt: palette.green[30],
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
      alt: palette.neutral[20],
    },
    neutralSurface: {
      enabled: palette.neutral[5],
      hover: palette.neutral[10],
      active: palette.neutral[15],
      contrast: palette.neutral[80],
      alt: palette.neutral[30],
    },
    neutralContainer: {
      enabled: palette.neutral[10],
      hover: palette.neutral[15],
      active: palette.neutral[20],
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

  // Оверлеи - полупрозрачные заливки для перекрывающих интерфейс элементов
  overlay: {
    primary: 'rgba(0, 0, 0, 0.6)', // основной оверлей
    secondary: 'rgba(0, 0, 0, 0.4)', // вторичный оверлей
    blur: 'rgba(0, 0, 0, 0.2)', // оверлей с блюром
  },
  transparent: 'transparent', // прозрачный
  light: palette.neutral[0], // светлый
  dark: palette.neutral[100], // темный
  imageFill: '#1C1C4A', // заполнение под изображениями
};

export const darkColors = {
  opacity,
  palette,
  fg: {
    primary: palette.neutral[5],
    secondary: palette.neutral[30],
    tertiary: palette.neutral[50],
    disabled: rgba(palette.neutral[5], opacity.tertiary),
    muted: rgba(palette.neutral[5], opacity.muted),
    ghosty: rgba(palette.neutral[5], opacity.ghosty),
  },
  bg: {
    low: palette.neutral[80],
    mid: palette.neutral[75],
    high: palette.neutral[70],
    disabled: rgba(palette.neutral[50], opacity.muted),
    muted: rgba(palette.neutral[80], opacity.muted),
    ghosty: rgba(palette.neutral[80], opacity.ghosty),
  },
  surface: {
    lowest: palette.neutral[85],
    low: palette.neutral[80],
    mid: palette.neutral[75],
    high: palette.neutral[70],
    highest: palette.neutral[65],
  },
  accent: {
    lead: {
      enabled: palette.indigo[35],
      hover: palette.indigo[40],
      active: palette.indigo[45],
      contrast: palette.indigo[80],
      alt: palette.indigo[60],
    },
    leadSurface: {
      enabled: palette.indigo[75],
      hover: palette.indigo[70],
      active: palette.indigo[65],
      contrast: palette.indigo[20],
      alt: palette.indigo[50],
    },
    leadContainer: {
      enabled: palette.indigo[50],
      hover: palette.indigo[65],
      active: palette.indigo[60],
      contrast: palette.indigo[10],
      alt: palette.indigo[30],
    },
    success: {
      enabled: palette.green[35],
      hover: palette.green[40],
      active: palette.green[45],
      contrast: palette.green[80],
      alt: palette.green[60],
    },
    successSurface: {
      enabled: palette.green[75],
      hover: palette.green[70],
      active: palette.green[65],
      contrast: palette.green[20],
      alt: palette.green[50],
    },
    successContainer: {
      enabled: palette.green[50],
      hover: palette.green[65],
      active: palette.green[60],
      contrast: palette.green[10],
      alt: palette.green[30],
    },
    info: {
      enabled: palette.blue[35],
      hover: palette.blue[40],
      active: palette.blue[45],
      contrast: palette.blue[80],
      alt: palette.blue[60],
    },
    infoSurface: {
      enabled: palette.blue[75],
      hover: palette.blue[70],
      active: palette.blue[65],
      contrast: palette.blue[20],
      alt: palette.blue[50],
    },
    infoContainer: {
      enabled: palette.blue[50],
      hover: palette.blue[65],
      active: palette.blue[60],
      contrast: palette.blue[10],
      alt: palette.blue[30],
    },
    warning: {
      enabled: palette.orange[35],
      hover: palette.orange[40],
      active: palette.orange[45],
      contrast: palette.orange[80],
      alt: palette.orange[60],
    },
    warningSurface: {
      enabled: palette.orange[75],
      hover: palette.orange[70],
      active: palette.orange[65],
      contrast: palette.orange[20],
      alt: palette.orange[50],
    },
    warningContainer: {
      enabled: palette.orange[50],
      hover: palette.orange[65],
      active: palette.orange[60],
      contrast: palette.orange[10],
      alt: palette.orange[30],
    },
    error: {
      enabled: palette.red[35],
      hover: palette.red[40],
      active: palette.red[45],
      contrast: palette.red[80],
      alt: palette.red[60],
    },
    errorSurface: {
      enabled: palette.red[75],
      hover: palette.red[70],
      active: palette.red[65],
      contrast: palette.red[20],
      alt: palette.red[50],
    },
    errorContainer: {
      enabled: palette.red[50],
      hover: palette.red[65],
      active: palette.red[60],
      contrast: palette.red[10],
      alt: palette.red[30],
    },

    neutral: {
      enabled: palette.neutral[10],
      hover: palette.neutral[30],
      active: palette.neutral[40],
      contrast: palette.neutral[100],
      alt: palette.neutral[60],
    },
    neutralSurface: {
      enabled: palette.neutral[80],
      hover: palette.neutral[75],
      active: palette.neutral[70],
      contrast: palette.neutral[20],
      alt: palette.neutral[50],
    },
    neutralContainer: {
      enabled: palette.neutral[60],
      hover: palette.neutral[55],
      active: palette.neutral[50],
      contrast: palette.neutral[20],
      alt: palette.neutral[30],
    },
  },
  shadow: {
    base: 'rgba(0, 0, 0, 0.32)',
    blur: 'rgba(0, 0, 0, 0.16)',
    lowest: '0 1px 1px 0 rgba(0, 0, 0, 0.48), 0 1px 2px 0 rgba(0, 0, 0, 0.32)',
    low: '0 4px 16px 0 rgba(0, 0, 0, 0.48), 0 2px 6px 0 rgba(0, 0, 0, 0.32)',
    mid: '0 12px 48px 0 rgba(0, 0, 0, 0.48), 2px 4px 12px 0 rgba(0, 0, 0, 0.32)',
    high: '0 20px 64px 0 rgba(0, 0, 0, 0.48), 2px 8px 20px 0 rgba(0, 0, 0, 0.32)',
    highest: '0 32px 96px 0 rgba(0, 0, 0, 0.48), 4px 16px 32px 0 rgba(0, 0, 0, 0.32)',
  },
  overlay: {
    primary: 'rgba(0, 0, 0, 0.4)',
    secondary: 'rgba(0, 0, 0, 0.32)',
    blur: 'rgba(0, 0, 0, 0.12)',
  },
  transparent: 'transparent', // прозрачный
  light: palette.neutral[0], // светлый
  dark: palette.neutral[100], // темный
  imageFill: '#1C1C4A', // заполнение под изображениями
};
