import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontKeys, type ColorKeys } from '@sickgyun/design-token';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
  color?: ColorKeys;
  fontType?: FontKeys;
};

export const Link = ({
  children,
  href,
  fontType: textStyle = 'p1',
  color = 'black',
}: LinkProps) => {
  return (
    <StyledLink href={href} color={color} fontType={textStyle}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(NextLink)<{ color: ColorKeys; fontType: FontKeys }>`
  ${({ theme, color, fontType }) => css`
    ${theme.fonts[fontType]};
    color: ${theme.colors[color]};
  `};

  &:hover {
    text-decoration: underline;
  }
`;
