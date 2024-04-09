import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode } from 'react';

type ModalBodyProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <StyledModalBody>{children}</StyledModalBody>;
};

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 48px;
`;
