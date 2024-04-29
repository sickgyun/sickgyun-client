import styled from '@emotion/styled';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { Button } from '../Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../Modal';
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
  style?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const Confirm = ({
  isOpen,
  onClose,
  onConfirm,
  closeButtonText = '취소',
  confirmButtonText = '확인',
  title,
  description,
  children,
  style,
  ...props
}: ConfirmProps) => {
  return (
    <StyledConfirm isOpen={isOpen} onClose={onClose} style={style} {...props}>
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

export default Confirm;

const StyledConfirm = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: auto;
`;
