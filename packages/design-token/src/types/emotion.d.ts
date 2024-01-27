import '@emotion/react';
import type { Colors, Fonts, ZIndex } from '..';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
    zIndex: ZIndex;
  }
}
