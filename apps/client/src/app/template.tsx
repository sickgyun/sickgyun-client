'use client';

import { OverlayProvider } from '@toss/use-overlay';
import { RecoilRoot } from 'recoil';

const Template = ({ children }: StrictPropsWithChildren) => {
  return (
    <RecoilRoot>
      <OverlayProvider>{children}</OverlayProvider>
    </RecoilRoot>
  );
};

export default Template;
