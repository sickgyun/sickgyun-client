'use client';

import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider as ConnectQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';

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
    <ConnectQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </ConnectQueryClientProvider>
  );
};

export default QueryClientProvider;
