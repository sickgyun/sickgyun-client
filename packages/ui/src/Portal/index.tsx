import { useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useDidMount } from './hooks/useDidMount';

type PortalProps = {
  children: ReactNode;
  isOpen: boolean;
};

const Portal = ({ isOpen, children }: PortalProps) => {
  const [container, setContainer] = useState<Element | null>(null);

  useDidMount(() => {
    if (document) {
      setContainer(document.body);
    }
  });

  if (!container) {
    return null;
  }

  return createPortal(isOpen && children, container);
};

export default Portal;
