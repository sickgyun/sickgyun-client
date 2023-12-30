import styled from '@emotion/styled';
import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';

type ModalContentProps = PropsWithChildren<{ tag?: ElementType }> &
  HTMLAttributes<HTMLDivElement>;

export const ModalContent = ({ children, tag = 'div', ...props }: ModalContentProps) => {
  return (
    <StyledModalContent as={tag} {...props}>
      {children}
    </StyledModalContent>
  );
};

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;
