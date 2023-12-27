'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren } from 'react';
import { ChakraProvider, QueryClientProvider } from '@/providers';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <OverlayProvider>
            <ChakraProvider>
              <StyleProvider>{children}</StyleProvider>
            </ChakraProvider>
          </OverlayProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
