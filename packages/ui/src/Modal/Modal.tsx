import styled from '@emotion/styled';
import type { HTMLAttributes, MouseEventHandler, ReactNode, Ref } from 'react';
import { forwardRef, useEffect } from 'react';
import Portal from '../Portal';

type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Modal = (
  { children, isOpen, onClose, ...props }: ModalProps,
  ref: Ref<HTMLDivElement>
) => {
  const onClickOutside: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <Portal isOpen={isOpen}>
      <StyledDIM onClick={onClickOutside}>
        <StyledModal ref={ref} {...props}>
          {children}
        </StyledModal>
      </StyledDIM>
    </Portal>
  );
};

const ForwardRef = forwardRef(Modal);
export default ForwardRef;

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
  background-color: ${({ theme }) => theme.colors.white};
  padding: 36px;
  border-radius: 16px;
  overflow-y: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
