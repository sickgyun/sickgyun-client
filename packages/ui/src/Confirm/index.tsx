import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Button } from '../Button';
import { ModalContent, ModalFooter, ModalHeader } from '../Modal';
import { Modal } from '../Modal/Modal';
import { Stack } from '../Stack';
import { Text } from '../Text';

type ConfirmProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  closeButtonText?: string;
  confirmButtonText?: string;
  title: string;
  description?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
};

export const Confirm = forwardRef(function Confirm(
  {
    isOpen,
    onClose,
    onConfirm,
    closeButtonText = '취소',
    confirmButtonText = '확인',
    title,
    description,
    width = '600px',
    height = 'auto',
    children,
    ...props
  }: ConfirmProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledConfirm
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      width={width}
      height={height}
      {...props}
    >
      <ModalHeader>
        <Stack spacing={8}>
          <Text styleType="h2">{title}</Text>
          {description && (
            <Text styleType="p3" color="gray600">
              {description}
            </Text>
          )}
        </Stack>
      </ModalHeader>
      {children && <ModalContent>{children}</ModalContent>}
      <ModalFooter>
        <Stack direction="horizontal" spacing={16}>
          <Button onClick={onClose} styleType="secondary" size="small">
            {closeButtonText}
          </Button>
          <Button onClick={onConfirm} styleType="primary" size="small">
            {confirmButtonText}
          </Button>
        </Stack>
      </ModalFooter>
    </StyledConfirm>
  );
});

const StyledConfirm = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
