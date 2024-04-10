import { SetStateAction } from 'react';
import { useEffect, useRef } from 'react';
import type { Dispatch } from 'react';

export const useOutsideClick = (
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideModal = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutSideModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutSideModal);
    };
  }, [isOpen, setOpen]);

  return ref;
};
