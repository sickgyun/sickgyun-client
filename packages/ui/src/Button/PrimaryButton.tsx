import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type PrimaryButtonProps = ButtonProps;

export const PrimaryButton = forwardRef(function PrimaryButton(
  { disabled = false, size = 'medium', children, ...props }: PrimaryButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledPrimaryButton ref={ref} disabled={disabled} size={size} {...props}>
      {children}
    </StyledPrimaryButton>
  );
});

const StyledPrimaryButton = styled.button<PrimaryButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray400 : theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray600 : theme.colors.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled === false && theme.colors.primaryHover};
  }
`;
