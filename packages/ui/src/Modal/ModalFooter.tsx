import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';

type ModalFooterProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>;
};

const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
`;
