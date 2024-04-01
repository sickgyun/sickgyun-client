import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect =
  window !== undefined ? useLayoutEffect : useEffect;
