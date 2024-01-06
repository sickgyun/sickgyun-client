import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type GhostButtonProps = ButtonProps;

export const GhostButton = forwardRef(function Button(
  { width = '100%', size = 'medium', children, ...props }: GhostButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledGhostButton ref={ref} size={size} width={width} {...props}>
      {children}
    </StyledGhostButton>
  );
});

const StyledGhostButton = styled.button<GhostButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 8px;
  cursor: 'pointer';
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => width};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
