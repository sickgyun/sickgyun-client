import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ColorKeys, type FontKeys } from '@sickgyun/design-token';
import {
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react';

export type TextProps = {
  fontType?: FontKeys;
  tag?: 'p' | 'span';
  color?: ColorKeys;
  children: ReactNode;
  isEllipsis?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export const Text = forwardRef(function Text(
  {
    tag = 'span',
    children,
    fontType: textStyle = 'p1',
    color = 'gray900',
    isEllipsis = false,
    ...props
  }: TextProps,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return (
    <StyledText
      ref={ref}
      as={tag}
      color={color}
      fontType={textStyle}
      isEllipsis={isEllipsis}
      {...props}
    >
      {children}
    </StyledText>
  );
});

const StyledText = styled.span<{
  color: ColorKeys;
  fontType: FontKeys;
  isEllipsis: boolean;
}>`
  color: ${({ color, theme }) => color && theme.colors[color]};
  ${({ theme, fontType }) => theme.fonts[fontType]};
  ${({ isEllipsis }) =>
    isEllipsis &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;
