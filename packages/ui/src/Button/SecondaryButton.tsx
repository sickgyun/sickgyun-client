import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type SecondaryButtonProps = ButtonProps;

export const SecondaryButton = forwardRef(function Button(
  { size = 'medium', children, ...props }: SecondaryButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledSecondaryButton ref={ref} size={size} {...props}>
      {children}
    </StyledSecondaryButton>
  );
});

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
