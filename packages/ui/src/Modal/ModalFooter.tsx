import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

export const ModalFooter = ({ children }: PropsWithChildren) => {
  return <StyledModalFooter>{children}</StyledModalFooter>;
};

const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
`;
