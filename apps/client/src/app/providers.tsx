'use client';

import { StyleProvider } from '@sickgyun/design-token';
import { OverlayProvider } from '@toss/use-overlay';
import type { ElementType, PropsWithChildren } from 'react';
import { QueryClientProvider } from '@/providers';

const buildProvidersTree = (
  componentsWithProps: [ElementType, Record<string, unknown>][]
) => {
  const initialComponent = ({ children }: PropsWithChildren) => <>{children}</>;

  return componentsWithProps.reduce(
    (
      AccumulatedComponents: ElementType,
      [Provider, props = {}]: [ElementType, Record<string, unknown>]
    ) => {
      const ProviderWrapper = ({ children }: PropsWithChildren) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };

      return ProviderWrapper;
    },
    initialComponent
  );
};

const ProviderTree = buildProvidersTree([
  [QueryClientProvider, {}],
  [OverlayProvider, {}],
  [StyleProvider, {}],
]);

const Providers = ({ children }: PropsWithChildren) => {
  return <ProviderTree>{children}</ProviderTree>;
};

export default Providers;
