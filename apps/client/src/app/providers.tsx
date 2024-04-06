'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { ReactNode } from 'react';
import { QueryClientProvider } from '@/providers';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyleProvider>
      <QueryClientProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </QueryClientProvider>
    </StyleProvider>
  );
};

export default Providers;
