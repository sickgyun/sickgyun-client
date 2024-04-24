import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type TertiaryButtonProps = ButtonProps;

export const TertiaryButton = forwardRef(function Button(
  {
    width = '100%',
    size = 'medium',
    isActive = false,
    children,
    ...props
  }: TertiaryButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledTertiaryButton
      ref={ref}
      size={size}
      width={width}
      isActive={isActive}
      {...props}
    >
      {children}
    </StyledTertiaryButton>
  );
});

const StyledTertiaryButton = styled.button<TertiaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => width};
  ${({ size }) => size && getButtonSize[size]}
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.primary : theme.colors.gray700};
    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.gray100};
    }
  `}
`;
