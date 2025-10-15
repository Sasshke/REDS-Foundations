/**
 * typography.ts — типографические токены дизайн-системы.
 *
 * Содержит:
 * - Шрифты (fonts)
 * - Типографические стили (typography)
 * - Размеры и интервалы для всех текстовых элементов
 */

export const fontFamily = {
  hero: 'Montserrat',
  body: 'Inter',
};

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const typography = {
  hero: {
    desktop: { fontSize: 64, lineHeight: 72, fontWeight: fontWeights.bold, letterSpacing: -2 },
    laptop: { fontSize: 44, lineHeight: 56, fontWeight: fontWeights.bold, letterSpacing: -1 },
    tablet: { fontSize: 36, lineHeight: 48, fontWeight: fontWeights.bold, letterSpacing: -1 },
    mobile: { fontSize: 28, lineHeight: 36, fontWeight: fontWeights.bold, letterSpacing: 0 },
  },
  head: {
    desktop: { fontSize: 44, lineHeight: 56, fontWeight: fontWeights.bold, letterSpacing: -1 },
    laptop: { fontSize: 36, lineHeight: 48, fontWeight: fontWeights.bold, letterSpacing: -1 },
    tablet: { fontSize: 32, lineHeight: 40, fontWeight: fontWeights.bold, letterSpacing: -0.5 },
    mobile: { fontSize: 24, lineHeight: 32, fontWeight: fontWeights.bold, letterSpacing: 0 },
  },
  subhead: {
    desktop: { fontSize: 32, lineHeight: 40, fontWeight: fontWeights.bold, letterSpacing: 0 },
    laptop: { fontSize: 28, lineHeight: 36, fontWeight: fontWeights.bold, letterSpacing: 0 },
    tablet: { fontSize: 28, lineHeight: 36, fontWeight: fontWeights.bold, letterSpacing: 0 },
    mobile: { fontSize: 24, lineHeight: 32, fontWeight: fontWeights.bold, letterSpacing: 0 },
  },

  title: { fontSize: 20, lineHeight: 28, fontWeight: fontWeights.bold, letterSpacing: 0 },
  subtitle: { fontSize: 16, lineHeight: 24, fontWeight: fontWeights.medium, letterSpacing: 0 },
  bodyLarge: { fontSize: 16, lineHeight: 24, fontWeight: fontWeights.regular, letterSpacing: 0.25 },
  bodyMedium: { fontSize: 14, lineHeight: 20, fontWeight: fontWeights.regular, letterSpacing: 0 },
  bodySmall: { fontSize: 12, lineHeight: 16, fontWeight: fontWeights.regular, letterSpacing: 0 },
  description: { fontSize: 10, lineHeight: 12, fontWeight: fontWeights.regular, letterSpacing: 0 },
  legal: { fontSize: 8, lineHeight: 10, fontWeight: fontWeights.regular, letterSpacing: -0.25 },

  // Типографика для кнопок
  button: {
    fontFamily: fontFamily.body,
    xs: { fontSize: 10, lineHeight: 12, fontWeight: fontWeights.medium, letterSpacing: 0 },
    sm: { fontSize: 12, lineHeight: 16, fontWeight: fontWeights.medium, letterSpacing: 0 },
    md: { fontSize: 14, lineHeight: 20, fontWeight: fontWeights.medium, letterSpacing: 0 },
    xl: { fontSize: 20, lineHeight: 24, fontWeight: fontWeights.medium, letterSpacing: 0 },
  },
};
