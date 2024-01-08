'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import { useAtom } from 'jotai';
import type { PropsWithChildren } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ChakraProvider, QueryClientProvider } from '@/providers';
import { isFooterState, isHeaderState } from '@/store/LayoutInformation';

const RootLayout = ({ children }: PropsWithChildren) => {
  const [isHeader] = useAtom(isHeaderState);
  const [isFooter] = useAtom(isFooterState);

  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <ChakraProvider>
            <StyleProvider>
              <OverlayProvider>
                {isHeader && <Header />}
                {children}
                {isFooter && <Footer />}
              </OverlayProvider>
            </StyleProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
