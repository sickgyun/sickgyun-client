import type { ThemeProviderProps } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '..';

type StyleProviderProps = Omit<ThemeProviderProps, 'theme'>;

export const StyleProvider = ({ children }: StyleProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
