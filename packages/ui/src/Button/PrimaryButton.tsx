import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type PrimaryButtonProps = ButtonProps;

export const PrimaryButton = forwardRef(function PrimaryButton(
  {
    width = '100%',
    disabled = false,
    size = 'medium',
    children,
    ...props
  }: PrimaryButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledPrimaryButton
      ref={ref}
      disabled={disabled}
      size={size}
      width={width}
      {...props}
    >
      {children}
    </StyledPrimaryButton>
  );
});

const StyledPrimaryButton = styled.button<PrimaryButtonProps>`
  ${({ theme }) => theme.fonts.h4}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray400 : theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray600 : theme.colors.primary};
  width: ${({ width }) => width};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled === false && theme.colors.primaryHover};
  }
`;
