import '@emotion/react';
import type { Colors, Fonts } from '..';

declare module '@emotion/react' {
  export type Theme = {
    colors: Colors;
    fonts: Fonts;
  };
}
