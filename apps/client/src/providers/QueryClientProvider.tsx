'use client';

import { QueryClientProvider as CheerUpQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';
import { queryClient } from '@/libs/api/queryClient';

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <CheerUpQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </CheerUpQueryClientProvider>
  );
};

export default QueryClientProvider;
