'use client';

import {
  QueryClientProvider as ConnectQueryClientProvider,
  QueryClient,
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
    <ConnectQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </ConnectQueryClientProvider>
  );
};

export default QueryClientProvider;
