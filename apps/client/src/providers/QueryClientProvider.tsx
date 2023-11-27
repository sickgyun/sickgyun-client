'use client';

import {
  QueryClientProvider as CheerUpQueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
    <CheerUpQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </CheerUpQueryClientProvider>
  );
};

export default QueryClientProvider;
