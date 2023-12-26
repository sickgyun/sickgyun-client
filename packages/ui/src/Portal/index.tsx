import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import useDidMount from './useDidMount';

type PortalProps = PropsWithChildren;

export const Portal = ({ children }: PortalProps) => {
  const [container, setContainer] = useState<Element | null>(null);

  useDidMount(() => {
    if (document) {
      setContainer(document.body);
    }
  });

  if (!container) return null;

  return createPortal(children, container);
};
