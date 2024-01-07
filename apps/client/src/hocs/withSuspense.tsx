import { Spinner } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import React, { Suspense } from 'react';

type WithSuspenseProps<Props> = {
  Comp: (props: Props) => ReactNode;
  FallbackComponent?: (props: unknown) => ReactNode | null;
};

export const withSuspense = <Props,>({
  Comp,
  FallbackComponent,
}: WithSuspenseProps<Props>): ((props: Props) => ReactNode) => {
  const WrappedComponent = (props: Props) => (
    <Suspense
      fallback={FallbackComponent ? <FallbackComponent /> : <Spinner color="primary" />}
    >
      <Comp {...props} />
    </Suspense>
  );

  return WrappedComponent;
};
