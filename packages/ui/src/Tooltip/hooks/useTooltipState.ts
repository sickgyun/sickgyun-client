import type { MouseEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

type UseTooltipsState = {
  onClose?: VoidFunction;
};

export const useTooltipState = ({ onClose }: UseTooltipsState) => {
  const onCloseRef = useRef<VoidFunction>();
  const [isOpen, setIsOpen] = useState(false);
  const openTooltip = useCallback((e?: MouseEvent<Element, MouseEvent>) => {
    e?.stopPropagation();
    setIsOpen(true);
  }, []);
  const closeTooltip = useCallback((e?: MouseEvent<Element, MouseEvent>) => {
    e?.stopPropagation();
    setIsOpen(false);
    onCloseRef.current?.();
  }, []);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  return [isOpen, setIsOpen, openTooltip, closeTooltip] as const;
};
