import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';

type ModalHeaderProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalHeader = ({ children, ...props }: ModalHeaderProps) => {
  return <StyledModalHeader {...props}>{children}</StyledModalHeader>;
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
