export type Colors = typeof colors;
export type ColorKeys = keyof typeof colors;

export const colors = {
  black: '#1D1D1F',
  white: '#FFFFFF',

  red: '#F44336',
  redBackgound: '#FFF0EF',

  yellow: '#FEE500',
  yellowBackground: '#FFFDEB',

  primary: '#7046F7',
  primaryHover: '#673AF7',
  primaryBackground: '#F4F1FF',

  gray50: '#FAFAFB',
  gray100: '#F8F8F9',
  gray200: '#EEF0F2',
  gray300: '#DDDEE3',
  gray400: '#BBBCC2',
  gray500: '#9497A0',
  gray600: '#70737C',
  gray700: '#595B66',
  gray750: '#414550',
  gray800: '#373B44',
  gray850: '#2B2E36',
  gray900: '#21242C',
} as const;
