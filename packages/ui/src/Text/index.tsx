import styled from '@emotion/styled';
import { type ColorKeys, type FontKeys } from '@sickgyun/design-token';
import { type HTMLAttributes, type ReactNode, type Ref, forwardRef } from 'react';

export type TextProps = {
  fontType?: FontKeys;
  tag?: 'p' | 'span';
  color?: ColorKeys;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export const Text = (
  {
    tag = 'span',
    children,
    fontType: textStyle = 'p1',
    color = 'gray900',
    ...props
  }: TextProps,
  ref: Ref<HTMLSpanElement>
) => {
  return (
    <StyledText ref={ref} as={tag} color={color} fontType={textStyle} {...props}>
      {children}
    </StyledText>
  );
};

const ForwardRef = forwardRef(Text);
export default ForwardRef;

const StyledText = styled.span<{
  color: ColorKeys;
  fontType: FontKeys;
}>`
  color: ${({ color, theme }) => color && theme.colors[color]};
  ${({ theme, fontType }) => theme.fonts[fontType]};
`;
