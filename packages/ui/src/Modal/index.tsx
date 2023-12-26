import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  width?: string;
  height?: string;
  children: ReactNode;
};

export const Modal = forwardRef(function Modal(
  { isOpen, width = '600px', height = '350px', children, ...props }: ModalProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <StyledDIM isOpen={isOpen}>
      <StyledModal ref={ref} width={width} height={height} {...props}>
        {children}
      </StyledModal>
    </StyledDIM>
  );
});

const StyledDIM = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #d8e3ff99;
  backdrop-filter: blur(12.5px);
`;

const StyledModal = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 36px;
  border-radius: 16px;
`;
