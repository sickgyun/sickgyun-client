'use client';

import { ChakraProvider, QueryClientProvider } from '@/providers';

const RootLayout = ({ children }: StrictPropsWithChildren) => {
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
