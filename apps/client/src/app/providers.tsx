'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren } from 'react';
import { ChakraProvider, QueryClientProvider } from '@/providers';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <ChakraProvider>
        <OverlayProvider>
          <StyleProvider>{children}</StyleProvider>
        </OverlayProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Providers;
