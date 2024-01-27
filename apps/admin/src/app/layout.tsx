'use client';

import type { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@/providers';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
