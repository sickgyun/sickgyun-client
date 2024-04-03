'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@/providers';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyleProvider>
      <QueryClientProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </QueryClientProvider>
    </StyleProvider>
  );
};

export default Providers;
