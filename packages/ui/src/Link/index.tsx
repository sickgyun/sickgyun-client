import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ColorKeys, FontKeys } from '@sickgyun/design-token';
import NextLink from 'next/link';
import { type ForwardedRef, type ReactNode, forwardRef } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
  color?: ColorKeys;
  fontType?: FontKeys;
};

export const Link = forwardRef(function Link(
  { children, href, fontType: textStyle = 'p1', color = 'black' }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <StyledLink href={href} color={color} fontType={textStyle} ref={ref}>
      {children}
    </StyledLink>
  );
});

const StyledLink = styled(NextLink)<{ color: ColorKeys; fontType: FontKeys }>`
  ${({ theme, color, fontType }) => css`
    ${theme.fonts[fontType]};
    color: ${theme.colors[color]};
  `};

  &:hover {
    text-decoration: underline;
  }
`;
