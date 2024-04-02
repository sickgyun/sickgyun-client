import styled from '@emotion/styled';
import type { CSSProperties, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Button } from '../Button';
import { ModalBody, ModalFooter, ModalHeader } from '../Modal';
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
  children?: ReactNode;
  style?: CSSProperties;
};

export const Alert = forwardRef(function Alert(
  {
    isOpen,
    onClose,
    onConfirm,
    confirmButtonText = '확인',
    title,
    description,
    children,
    style,
    ...props
  }: AlertProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledAlert ref={ref} isOpen={isOpen} onClose={onClose} style={style} {...props}>
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
      {children && <ModalBody>{children}</ModalBody>}
      <ModalFooter>
        <Button onClick={onConfirm} size="medium">
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
  width: 450px;
  height: auto;
`;
