import styled from '@emotion/styled';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode, Ref } from 'react';

type ModalBodyProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = (
  { children, ...props }: ModalBodyProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledModalBody ref={ref} {...props}>
      {children}
    </StyledModalBody>
  );
};

const ForwardRef = forwardRef(ModalBody);
export default ForwardRef;

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;
