import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from 'react';
import { Text } from '../Text';

type InputProps = {
  label?: string;
  bottomText?: string;
  width?: string;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(
  { label, bottomText, hasError = false, width = '100%', onChange, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledInputWrapper width={width}>
      {label && (
        <Text color="gray600" fontType="p3" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <StyledInput
        ref={ref}
        label={label}
        hasError={hasError}
        onChange={onChange}
        {...props}
      />
      {bottomText && (
        <Text
          color={hasError ? 'red' : 'gray600'}
          fontType="p3"
          style={{ marginTop: '4px' }}
        >
          {bottomText}
        </Text>
      )}
    </StyledInputWrapper>
  );
});

const StyledInputWrapper = styled.div<{ width?: string }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  ${({ theme, hasError }) => css`
    border: 1.5px solid ${hasError ? theme.colors.red : theme.colors.gray400};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    caret-color: ${hasError ? theme.colors.red : theme.colors.primary};
    ::placeholder {
      ${theme.fonts.body1}
      color: ${theme.colors.gray500};
    }
    &:focus {
      border: 1.5px solid ${hasError ? theme.colors.red : theme.colors.primary};
    }
  `}
`;
