import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ColorKeys, FontKeys } from '@sickgyun/design-token';
import NextLink from 'next/link';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ForwardedRef, ReactNode } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
  color?: ColorKeys;
  fontType?: FontKeys;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef(function Link(
  { children, href, fontType: textStyle = 'p1', color = 'black', ...props }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <StyledLink ref={ref} href={href} color={color} fontType={textStyle} {...props}>
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
