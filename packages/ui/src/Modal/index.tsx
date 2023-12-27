import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import Portal from '../Portal';

type ModalProps = {
  isOpen: boolean;
  width?: string;
  height?: string;
  children: ReactNode;
};

export const Modal = forwardRef(function Modal(
  { isOpen, width = '450px', height = 'auto', children, ...props }: ModalProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Portal isOpen={isOpen}>
      <StyledDIM>
        <StyledModal ref={ref} width={width} height={height} {...props}>
          {children}
        </StyledModal>
      </StyledDIM>
    </Portal>
  );
});

const StyledDIM = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
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
  min-height: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 36px;
  border-radius: 16px;
`;
