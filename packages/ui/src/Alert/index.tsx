import styled from '@emotion/styled';
import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Stack, Text } from '..';
import { Button } from '../Button';

type AlertProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  confirmButtonText?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  style?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

const Alert = (
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
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledAlert ref={ref} isOpen={isOpen} onClose={onClose} style={style} {...props}>
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
        <Button onClick={onConfirm} size="medium">
          {confirmButtonText}
        </Button>
      </ModalFooter>
    </StyledAlert>
  );
};

const ForwardRef = forwardRef(Alert);
export default ForwardRef;

const StyledAlert = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: auto;
`;
