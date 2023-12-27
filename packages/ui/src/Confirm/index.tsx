import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Button } from '../Button';
import { Modal } from '../Modal';
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
  children: ReactNode;
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
    <StyledConfirm ref={ref} isOpen={isOpen} width={width} height={height} {...props}>
      <StyledConfirmHeader hasContent={Boolean(children)}>
        <Stack spacing={8}>
          <Text styleType="h2">{title}</Text>
          {description && (
            <Text styleType="p3" color="gray600">
              {description}
            </Text>
          )}
        </Stack>
      </StyledConfirmHeader>
      {children && <StyledConfirmContent>{children}</StyledConfirmContent>}
      <StyledConfirmFooter>
        <Stack direction="horizontal" spacing={16}>
          <Button onClick={onClose} styleType="ghost" size="small">
            {closeButtonText}
          </Button>
          <Button onClick={onConfirm} styleType="primary" size="small">
            {confirmButtonText}
          </Button>
        </Stack>
      </StyledConfirmFooter>
    </StyledConfirm>
  );
});

const StyledConfirm = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledConfirmHeader = styled.div<{ hasContent: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  ${({ theme, hasContent }) => css`
    border-bottom: 1px solid ${hasContent && theme.colors.gray200};
  `}
`;

const StyledConfirmContent = styled.div`
  padding: 20px 0;
`;

const StyledConfirmFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
