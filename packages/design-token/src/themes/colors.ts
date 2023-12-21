export type Colors = typeof colors;
export type ColorKeys = keyof typeof colors;

export const colors = {
  black: '#1F2128',
  white: '#ffffff',
  yellow: '#FEE500',

  primary: '#6557FF',
  primaryHover: '#7366FF',
  secondary: '#BAFF59',

  gray900: '#16181E',
  gray800: '#20242D',
  gray700: '#2B303B',
  gray600: '#353C4A',
  gray500: '#4B5568',
  gray400: '#79869F',
  greay300: '#A6AEBF',
  gray200: '#C4C9D4',
  gray100: '#E1E4EA',
  gray50: '#F0F2F4',
} as const;
