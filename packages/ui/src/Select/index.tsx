import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ForwardedRef, ReactNode, SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Flex } from '../Flex';
import { ArrowDownIcon } from '../Icons';
import { Text } from '../Text';

type SelectProps = {
  children: ReactNode;
  width?: string;
  label?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef(function Select(
  { children, placeholder, label, width = '100%', ...props }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <StyledSelectWrapper width={width}>
      {label && (
        <Text color="gray600" fontType="p3" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <Flex align="center" style={{ position: 'relative' }}>
        <StyledSelect ref={ref} {...props}>
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </StyledSelect>
        <ArrowDownIcon
          width={24}
          height={24}
          cursor="pointer"
          style={{ position: 'absolute', right: '16px' }}
        />
      </Flex>
    </StyledSelectWrapper>
  );
});

const StyledSelectWrapper = styled.div<{ width: string }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  outline: none;
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none /* 화살표 없애기 */
    ${({ theme }) => css`
      color: ${theme.colors.black};
      border: 1.5px solid ${theme.colors.gray400};
      background-color: ${theme.colors.white};
      ::placeholder {
        ${theme.fonts.body1}
        color: ${theme.colors.gray500};
      }
      &:focus {
        border: 1.5px solid ${theme.colors.primary};
      }
    `};
`;
