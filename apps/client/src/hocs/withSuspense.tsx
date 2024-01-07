import { Spinner } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import React, { Suspense } from 'react';

export const withSuspense = <Props,>(
  Component: (props: Props) => ReactNode,
  FallbackComponent?: (props: unknown) => ReactNode | null
) => {
  const WrappedComponent = (props: Props) => (
    <Suspense
      fallback={FallbackComponent ? <FallbackComponent /> : <Spinner color="primary" />}
    >
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};
