import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from 'react';
import { Text } from '../Text';

type InputProps = {
  label?: string;
  bottomText?: string;
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(
  { label, bottomText, width = '100%', onChange, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledInputWrapper width={width}>
      {label && (
        <Text color="gray500" styleType="p2">
          {label}
        </Text>
      )}
      <StyledInput ref={ref} label={label} onChange={onChange} {...props} />
      {bottomText && (
        <Text color="gray500" styleType="p2" style={{ marginTop: '4px' }}>
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
  margin-top: ${({ label }) => (label ? '8px' : '0px')};
  width: 100%;
  height: 48px;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray400};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    caret-color: ${theme.colors.primary};
    ::placeholder {
      ${theme.fonts.body1}
      color: ${theme.colors.gray500};
    }
    &:focus {
      border: 1px solid ${theme.colors.primary};
    }
  `}
`;
