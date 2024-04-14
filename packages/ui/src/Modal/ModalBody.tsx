import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';

type ModalBodyProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return <StyledModalBody {...props}>{children}</StyledModalBody>;
};

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;
