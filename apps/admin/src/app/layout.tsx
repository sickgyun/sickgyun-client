'use client';

import type { PropsWithChildren } from 'react';
import { ChakraProvider, QueryClientProvider } from '@/providers';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
