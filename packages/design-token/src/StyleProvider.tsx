import { CacheProvider, ThemeProvider } from '@emotion/react';
import type { EmotionCache, Theme, ThemeProviderProps } from '@emotion/react';
import { GlobalStyle } from './global';
import { theme as sickgyunTheme } from './themes';

type StyleProviderProps = {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
} & Omit<ThemeProviderProps, 'theme'>;
type UseSSRProps = {
  isSSR: true;
  cache: EmotionCache;
} & StyleProviderProps;
type UseCSRProps = {
  isSSR?: false;
  cache?: never;
} & StyleProviderProps;

type SickgyunStyleProviderProps = UseSSRProps | UseCSRProps;

export const StyleProvider = ({
  isSSR = false,
  cache,
  children,
  theme = sickgyunTheme,
}: SickgyunStyleProviderProps) => {
  if (isSSR && cache) {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </CacheProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  }
};
