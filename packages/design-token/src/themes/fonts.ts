export type Fonts = typeof fonts;
export type FontKeys = keyof typeof fonts;

export const fonts = {
  h1: `font-size: 32px; font-weight: 700; line-height: 140%;`,
  h2: `font-size: 28px; font-weight: 600; line-height: 140%;`,
  h3: `font-size: 24px; font-weight: 600; line-height: 140%;`,
  h4: `font-size: 20px; font-weight: 600; line-height: 140%;`,
  h5: `font-size: 18px; font-weight: 600; line-height: 140%;`,
  body1: `font-size: 16px; font-weight: 500; line-height: 140%;`,
  body2: `font-size: 14px; font-weight: 500; line-height: 140%;`,
  body3: `font-size: 12px; font-weight: 500; line-height: 140%;`,
  p1: `font-size: 16px; font-weight: 400; line-height: 140%;`,
  p2: `font-size: 14px; font-weight: 400; line-height: 140%;`,
  p3: `font-size: 12px; font-weight: 400; line-height: 140%;`,
} as const;
