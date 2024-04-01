import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Button } from '../Button';
import { ModalContent, ModalFooter, ModalHeader } from '../Modal';
import { Modal } from '../Modal/Modal';
import { Stack } from '../Stack';
import { Text } from '../Text';

type AlertProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  confirmButtonText?: string;
  title: string;
  description?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
};

export const Alert = forwardRef(function Alert(
  {
    isOpen,
    onClose,
    onConfirm,
    confirmButtonText = '확인',
    title,
    description,
    width = '450px',
    height = 'auto',
    children,
    ...props
  }: AlertProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledAlert
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      style={{ width, height }}
      {...props}
    >
      <ModalHeader>
        <Stack spacing={8}>
          <Text fontType="h2">{title}</Text>
          {description && (
            <Text fontType="p2" color="gray600">
              {description}
            </Text>
          )}
        </Stack>
      </ModalHeader>
      {children && <ModalContent>{children}</ModalContent>}
      <ModalFooter>
        <Button onClick={onConfirm} styleType="primary" size="small">
          {confirmButtonText}
        </Button>
      </ModalFooter>
    </StyledAlert>
  );
});

const StyledAlert = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
