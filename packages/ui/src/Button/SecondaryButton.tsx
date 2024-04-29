import styled from '@emotion/styled';
import { type Ref, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type SecondaryButtonProps = ButtonProps;

export const SecondaryButton = (
  { size = 'medium', children, ...props }: SecondaryButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <StyledSecondaryButton ref={ref} size={size} {...props}>
      {children}
    </StyledSecondaryButton>
  );
};

const ForwardRef = forwardRef(SecondaryButton);
export default ForwardRef;

const StyledSecondaryButton = styled.button<SecondaryButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: 'pointer';
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.gray200};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray300};
  }
`;
