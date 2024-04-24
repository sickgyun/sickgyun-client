import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconExpandMoreFill } from '@seed-design/icon';
import { fonts } from '@sickgyun/design-token';
import type { ForwardedRef, ReactNode, SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';

const getSelectSize = {
  large: css`
    ${fonts.body1}
    height: 54px;
  `,
  medium: css`
    ${fonts.body1}
    height: 48px;
  `,
  small: css`
    ${fonts.body2}
    height: 40px;
  `,
};

type SelectSize = 'small' | 'medium' | 'large';

type SelectProps = {
  children: ReactNode;
  width?: string;
  label?: string;
  placeholder?: string;
  size?: SelectSize;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

export const Select = forwardRef(function Select(
  {
    children,
    size = 'medium',
    placeholder,
    label,
    width = '100%',
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <StyledSelectContainer width={width}>
      {label && (
        <Text color="gray600" fontType="p3" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <Flex align="center" style={{ position: 'relative' }}>
        <StyledSelect selectSize={size} ref={ref} {...props}>
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </StyledSelect>
        <StyledIconExpandMoreFill />
      </Flex>
    </StyledSelectContainer>
  );
});

const StyledSelectContainer = styled.div<{ width: string }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledSelect = styled.select<{ selectSize: SelectSize }>`
  width: 100%;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ${({ theme, selectSize }) => css`
    ${theme.fonts.body1}
    ${getSelectSize[selectSize]}
    color: ${theme.colors.gray900};
    border: 1px solid ${theme.colors.gray300};
    background-color: ${theme.colors.white};
    ::placeholder {
      ${theme.fonts.body1}
      color: ${theme.colors.gray500};
    }
    &:focus {
      border: 1px solid ${theme.colors.primary};
    }
  `};
`;

const StyledIconExpandMoreFill = styled(IconExpandMoreFill)`
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
`;
