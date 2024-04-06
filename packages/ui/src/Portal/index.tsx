import { useEffect, useRef, useState } from 'react';
import type { EffectCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const Portal = ({ isOpen, children }: PortalProps) => {
  const [container, setContainer] = useState<Element | null>(null);

  useDidMount(() => {
    if (document) {
      setContainer(document.body);
    }
  });

  if (!container) return null;

  return createPortal(isOpen && children, container);
};

export default Portal;

const useDidMount = (callback: EffectCallback) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) return;
    didMountRef.current = true;

    callback();
  }, []);
};
