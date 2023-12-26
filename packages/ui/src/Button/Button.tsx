import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fonts } from '@sickgyun/design-token';
import {
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
type ButtonProps = {
  disabled?: boolean;
  width?: string;
  size?: ButtonSize;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(function Button(
  { width = '100%', disabled = false, size = 'medium', children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledButton ref={ref} disabled={disabled} size={size} width={width} {...props}>
      {children}
    </StyledButton>
  );
});

const StyledButton = styled.button<ButtonProps>`
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

export const getButtonSize = {
  large: css`
    ${fonts.body1}
    height: 54px;
  `,
  medium: css`
    ${fonts.body1}
    height: 48px;
  `,
  small: css`
    ${fonts.body2}
    height: 40px;
  `,
};
