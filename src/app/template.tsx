'use client';

import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

const Template = ({ children }: PropsWithChildren) => {
  return (
    <RecoilRoot>
      <OverlayProvider>{children}</OverlayProvider>
    </RecoilRoot>
  );
};

export default Template;
