import type { EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

export const useDidMount = (callback: EffectCallback) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return;
    }
    didMountRef.current = true;

    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
