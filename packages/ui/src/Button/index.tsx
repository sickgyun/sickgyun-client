import { css } from '@emotion/react';
import { fonts } from '@sickgyun/design-token';
import {
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
} from 'react';
import { GhostButton } from './GhostButton';
import { OutlineButton } from './OutlineButton';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { TertiaryButton } from './TertiaryButton';

export const BUTTON_STYLE_KEYS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  TERTIARY: 'tertiary',
  OUTLINE: 'outline',
} as const;

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

export type ButtonStyleType = (typeof BUTTON_STYLE_KEYS)[keyof typeof BUTTON_STYLE_KEYS];

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  styleType?: ButtonStyleType;
  disabled?: boolean;
  size?: ButtonSize;
  children: ReactNode;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(function Button(
  {
    styleType = 'primary',
    disabled = false,
    size = 'medium',
    type = 'button',
    children,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const buttonProps = { ref, styleType, disabled, size, type, children, ...props };

  switch (styleType) {
    case 'primary':
      return <PrimaryButton {...buttonProps} />;
    case 'secondary':
      return <SecondaryButton {...buttonProps} />;
    case 'ghost':
      return <GhostButton {...buttonProps} />;
    case 'tertiary':
      return <TertiaryButton {...buttonProps} />;
    case 'outline':
      return <OutlineButton {...buttonProps} />;
    default:
      return <PrimaryButton {...buttonProps} />;
  }
});
