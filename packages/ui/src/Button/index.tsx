import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import {
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from 'react';
import { GhostButton } from './GhostButton';
import { PrimaryButton } from './PrimaryButton';

export const BUTTON_STYLE_KEYS = {
  PRIMARY: 'primary',
  GHOST: 'ghost',
} as const;

export type ButtonStyleType = (typeof BUTTON_STYLE_KEYS)[keyof typeof BUTTON_STYLE_KEYS];
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonProps = {
  styleType?: ButtonStyleType;
  disabled?: boolean;
  width?: string;
  size?: ButtonSize;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(function Button(
  {
    width = '100%',
    styleType = 'primary',
    disabled = false,
    size = 'medium',
    children,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const buttonProps = { ref, width, styleType, disabled, size, children, ...props };

  switch (styleType) {
    case 'primary':
      return <PrimaryButton {...buttonProps} />;
    case 'ghost':
      return <GhostButton {...buttonProps} />;
    default:
      return <PrimaryButton {...buttonProps} />;
  }
});

export const getButtonSize = {
  large: (theme: Theme) => css`
    ${theme.fonts.body1}
    height: 54px;
  `,
  medium: (theme: Theme) => css`
    ${theme.fonts.body1}
    height: 48px;
  `,
  small: (theme: Theme) => css`
    ${theme.fonts.body2}
    height: 40px;
  `,
};
