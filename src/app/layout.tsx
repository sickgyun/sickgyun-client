'use client';

import { ChakraProvider, QueryClientProvider } from '@/providers';
import type { PropsWithChildren } from 'react';

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
