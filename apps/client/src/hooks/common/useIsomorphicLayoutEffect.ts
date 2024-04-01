import { useEffect, useLayoutEffect } from 'react';
import { isClient } from '@/utils/isClient';

export const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;
