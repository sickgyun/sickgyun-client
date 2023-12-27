import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

type ModalFooterProps = PropsWithChildren;

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <StyledModalFooter>{children}</StyledModalFooter>;
};

const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
