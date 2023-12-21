'use client';

import {
  QueryClient,
  QueryClientProvider as SickgyunQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <SickgyunQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </SickgyunQueryClientProvider>
  );
};

export default QueryClientProvider;
