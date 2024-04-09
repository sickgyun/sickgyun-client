'use client';

import type { ReactNode } from 'react';
import Providers from './providers';
import ScrollToTop from '@/components/common/ScrollToTop';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="kr">
      <title>식견</title>
      <body>
        <ScrollToTop />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
