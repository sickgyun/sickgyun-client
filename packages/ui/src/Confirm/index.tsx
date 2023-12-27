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
  width?: string;
  height?: string;
  children: ReactNode;
};

export const Confirm = forwardRef(function Confirm(
  { isOpen, width = '600px', height = 'auto', children, ...props }: ConfirmProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledConfirm ref={ref} isOpen={isOpen} width={width} height={height} {...props}>
      <StyledConfirmHeader>
        <Stack spacing={8}>
          <Text styleType="h2">타이틀</Text>
          <Text styleType="p3" color="gray600">
            설명입니다.
          </Text>
        </Stack>
      </StyledConfirmHeader>
      <StyledConfirmContent>{children}</StyledConfirmContent>
      <StyledConfirmFooter>
        <Stack spacing={16}>
          <Button styleType="ghost" size="small">
            취소
          </Button>
          <Button styleType="primary" size="small">
            확인
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

const StyledConfirmHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray200};
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
