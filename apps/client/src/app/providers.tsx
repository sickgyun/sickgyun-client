'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { ReactNode } from 'react';
import ScrollToTop from '@/components/common/ScrollToTop';
import { QueryClientProvider } from '@/providers';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyleProvider>
      <QueryClientProvider>
        <OverlayProvider>
          <ScrollToTop>{children}</ScrollToTop>
        </OverlayProvider>
      </QueryClientProvider>
    </StyleProvider>
  );
};

export default Providers;
