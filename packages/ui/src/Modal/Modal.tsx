import styled from '@emotion/styled';
import type { ForwardedRef, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { forwardRef } from 'react';
import Portal from '../Portal';

type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Modal = forwardRef(function Modal(
  { children, isOpen, onClose, ...props }: ModalProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const onClickOutside: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    if (onClose) onClose();
  };

  return (
    <Portal isOpen={isOpen}>
      <StyledDIM onClick={onClickOutside}>
        <StyledModal ref={ref} {...props}>
          {children}
        </StyledModal>
      </StyledDIM>
    </Portal>
  );
});

const StyledDIM = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.page3};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledModal = styled.div`
  width: 450px;
  height: auto;
  min-height: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 36px;
  border-radius: 16px;
  overflow-y: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
