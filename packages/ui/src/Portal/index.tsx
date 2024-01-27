import { useEffect, useRef, useState } from 'react';
import type { EffectCallback, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ isOpen, children }: PropsWithChildren<{ isOpen: boolean }>) => {
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
