import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { HTMLAttributes, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';
import { Text } from '../Text';

type InfoBoxProps = {
  label?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const InfoBox = (
  { label, children, ...props }: InfoBoxProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledInfoBoxWrapper {...props}>
      {label && (
        <Text color="gray600" fontType="p2" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <StyledInfoBox ref={ref}>{children}</StyledInfoBox>
    </StyledInfoBoxWrapper>
  );
};

const ForwardRef = forwardRef(InfoBox);
export default ForwardRef;

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
