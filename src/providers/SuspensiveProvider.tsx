'use client';

import { type PropsWithChildren } from 'react';
import { Suspensive, SuspensiveProvider as ConnectSuspensiveProvider } from '@suspensive/react';

const suspensive = new Suspensive({
  defaultOptions: {
    suspense: {
      fallback: <span>로딩중...</span>,
    },
  },
});

export const SuspensiveProvider = ({ children }: PropsWithChildren) => {
  return <ConnectSuspensiveProvider value={suspensive}>{children}</ConnectSuspensiveProvider>;
};
