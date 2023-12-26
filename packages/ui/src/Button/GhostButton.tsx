import styled from '@emotion/styled';
import {
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from 'react';

type GhostButtonProps = {
  width?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const GhostButton = forwardRef(function Button(
  { width = '100%', children, ...props }: GhostButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledGhostButton ref={ref} width={width} {...props}>
      {children}
    </StyledGhostButton>
  );
});

const StyledGhostButton = styled.button<GhostButtonProps>`
  ${({ theme }) => theme.fonts.h4}
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray200};
  width: ${({ width }) => width};
  height: 56px;
  cursor: 'pointer';
  border-radius: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
