'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@/providers';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <OverlayProvider>
        <StyleProvider>{children}</StyleProvider>
      </OverlayProvider>
    </QueryClientProvider>
  );
};

export default Providers;
