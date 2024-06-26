import { Spinner } from '@sickgyun/ui';
import type { ReactNode } from 'react';
import React, { Suspense } from 'react';

export const withSuspense = <Props,>(
  Component: (props: Props) => ReactNode,
  Fallback?: (props: unknown) => ReactNode | null
) => {
  const WrappedComponent = (props: Props) => (
    <Suspense fallback={Fallback ? <Fallback /> : <Spinner />}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};
