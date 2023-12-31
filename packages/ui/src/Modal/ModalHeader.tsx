import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

type ModalHeaderProps = PropsWithChildren;

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <StyledModalHeader>{children}</StyledModalHeader>;
};

const StyledModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-bottom: 20px;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray200};
  `}
`;
