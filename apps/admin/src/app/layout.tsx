'use client';

import type { ReactNode } from 'react';
import { QueryClientProvider } from '@/providers';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
