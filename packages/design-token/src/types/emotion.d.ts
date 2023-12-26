import '@emotion/react';
import type { Colors, Fonts } from '..';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
}
