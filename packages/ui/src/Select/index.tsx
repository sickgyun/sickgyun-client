import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode, SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Text } from '../Text';

type SelectProps = {
  children: ReactNode;
  width?: string;
  label?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef(function Select(
  { children, label, width = '100%', ...props }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <StyledSelectWrapper width={width}>
      {label && (
        <Text color="gray600" fontType="p3">
          {label}
        </Text>
      )}
      <StyledSelect ref={ref} {...props}>
        {children}
      </StyledSelect>
    </StyledSelectWrapper>
  );
});

const StyledSelectWrapper = styled.div<{ width: string }>`
  display: inline-flex;
  flex-direction: column;

  ${({ width }) => css`
    width: ${width};
  `}
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  border: none;
  outline: none;
  ${({ theme }) => css`
    color: ${theme.colors.black};
    border: 1.5px solid ${theme.colors.gray400};
    background-color: ${theme.colors.white};
    ::placeholder {
      ${theme.fonts.body1}
      color: ${theme.colors.gray500};
    }
  `}
`;
