import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type GhostButtonProps = ButtonProps;

export const GhostButton = forwardRef(function Button(
  {
    width = '100%',
    disabled = false,
    size = 'medium',
    children,
    ...props
  }: GhostButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledGhostButton ref={ref} disabled={disabled} size={size} width={width} {...props}>
      {children}
    </StyledGhostButton>
  );
});

const StyledGhostButton = styled.button<GhostButtonProps>`
  ${({ theme }) => theme.fonts.h4}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: 'pointer';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray900};
  width: ${({ width }) => width};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;
