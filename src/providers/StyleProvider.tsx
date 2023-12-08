'use client';

import { GlobalStyle, theme } from '@/styles';
import { ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';

type StyleProviderProps = PropsWithChildren;

export const StyleProvider = ({ children }: StyleProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
