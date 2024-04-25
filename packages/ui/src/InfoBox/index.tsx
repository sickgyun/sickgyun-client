import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Text } from '../Text';

type InfoBoxProps = {
  label?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const InfoBox = forwardRef(function InfoBox(
  { label, children, ...props }: InfoBoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledInfoBoxWrapper>
      {label && (
        <Text color="gray600" fontType="p2" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <StyledInfoBox ref={ref} {...props}>
        {children}
      </StyledInfoBox>
    </StyledInfoBoxWrapper>
  );
});

const StyledInfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInfoBox = styled.div`
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  ${({ theme }) => css`
    ${theme.fonts.p1}
    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray900};
  `}
`;
