import styled from '@emotion/styled';
import { type HTMLAttributes, type ReactNode, type Ref, forwardRef } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Stack, Text } from '..';
import { Button } from '../Button';

type ConfirmProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  closeButtonText?: string;
  confirmButtonText?: string;
  title: string;
  description?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Confirm = (
  {
    isOpen,
    onClose,
    onConfirm,
    closeButtonText = '취소',
    confirmButtonText = '확인',
    title,
    description,
    children,
    ...props
  }: ConfirmProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledConfirm ref={ref} isOpen={isOpen} onClose={onClose} {...props}>
      <ModalHeader>
        <Stack spacing={8}>
          <Text fontType="h3">{title}</Text>
          {description && (
            <Text fontType="p2" color="gray600">
              {description}
            </Text>
          )}
        </Stack>
      </ModalHeader>
      {children && <ModalBody>{children}</ModalBody>}
      <ModalFooter>
        <Stack direction="horizontal" spacing={16} style={{ width: '100%' }}>
          <Button onClick={onClose} styleType="secondary" size="medium">
            {closeButtonText}
          </Button>
          <Button onClick={onConfirm} size="medium">
            {confirmButtonText}
          </Button>
        </Stack>
      </ModalFooter>
    </StyledConfirm>
  );
};

const ForwardRef = forwardRef(Confirm);
export default ForwardRef;

const StyledConfirm = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: auto;
`;
