import styled from '@emotion/styled';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode, Ref } from 'react';

type ModalFooterProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const ModalFooter = (
  { children, ...props }: ModalFooterProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledModalFooter ref={ref} {...props}>
      {children}
    </StyledModalFooter>
  );
};

const ForwardRef = forwardRef(ModalFooter);
export default ForwardRef;

const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
`;
