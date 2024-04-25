import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type GhostButtonProps = ButtonProps;

export const GhostButton = forwardRef(function Button(
  { size = 'medium', children, ...props }: GhostButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledGhostButton ref={ref} size={size} {...props}>
      {children}
    </StyledGhostButton>
  );
});

const StyledGhostButton = styled.button<GhostButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: 'pointer';
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.white};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
