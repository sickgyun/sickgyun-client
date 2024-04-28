import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export const INLINE_BANNER_STYLE_KEYS = {
  PRIMARY: 'primary',
  RED: 'red',
  YELLOW: 'yellow',
} as const;

export const getInlineBannerStyle = {
  primary: css`
    color: ${colors.primary};
    background-color: ${colors.primaryBackground};
  `,
  red: css`
    color: ${colors.red};
    background-color: ${colors.redBackgound};
  `,
  yellow: css`
    color: ${colors.yellow};
    background-color: ${colors.yellowBackground};
  `,
};

export type InlineBannerStyleType =
  (typeof INLINE_BANNER_STYLE_KEYS)[keyof typeof INLINE_BANNER_STYLE_KEYS];

type InlineBannerProps = {
  children: ReactNode;
  styleType?: InlineBannerStyleType;
} & HTMLAttributes<HTMLDivElement>;

export const InlineBanner = forwardRef(function InlineBanner(
  { children, styleType = 'primary', ...props }: InlineBannerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledInlineBanner ref={ref} styleType={styleType} {...props}>
      {children}
    </StyledInlineBanner>
  );
});

const StyledInlineBanner = styled.div<{ styleType: InlineBannerStyleType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  ${({ styleType }) => css`
    ${getInlineBannerStyle[styleType]}
  `}
`;
