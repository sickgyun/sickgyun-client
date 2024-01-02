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
} & HTMLAttributes<HTMLSpanElement>;

export const Text = forwardRef(function Text(
  {
    tag = 'span',
    children,
    fontType: textStyle = 'p1',
    color = 'black',
    ...props
  }: TextProps,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return (
    <StyledText ref={ref} as={tag} color={color} fontType={textStyle} {...props}>
      {children}
    </StyledText>
  );
});

const StyledText = styled.span<{ color: ColorKeys; fontType: FontKeys }>`
  color: ${({ color, theme }) => color && theme.colors[color]};
  ${({ theme, fontType }) => theme.fonts[fontType]};
`;
