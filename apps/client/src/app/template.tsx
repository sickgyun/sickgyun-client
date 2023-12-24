'use client';

import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren } from 'react';

const Template = ({ children }: PropsWithChildren) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default Template;
