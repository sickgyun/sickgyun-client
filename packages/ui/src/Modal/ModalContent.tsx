import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

type ModalContentProps = PropsWithChildren;

export const ModalContent = ({ children }: ModalContentProps) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const StyledModalContent = styled.div`
  padding: 20px 0;
`;
