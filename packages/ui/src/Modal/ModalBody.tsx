import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

type ModalBodyProps = PropsWithChildren;

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
