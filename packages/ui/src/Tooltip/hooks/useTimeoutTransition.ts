import type { MouseEvent } from 'react';
import { useEffect } from 'react';

type UseTimeoutTransitionProps = {
  possible?: boolean;
  duration?: number;
  callback: (e?: MouseEvent<Element, MouseEvent>) => void;
};

export const useTimeoutTransition = ({
  possible,
  duration,
  callback,
}: UseTimeoutTransitionProps) => {
  useEffect(() => {
    if (possible && duration !== undefined) {
      const clearId = setTimeout(callback, duration);
      return () => {
        callback();
        clearTimeout(clearId);
      };
    }
  }, [possible, duration, callback]);
};
