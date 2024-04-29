import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type InputHTMLAttributes, type Ref, forwardRef } from 'react';
import { Text } from '..';

type InputProps = {
  label?: string;
  bottomText?: string;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (
  { label, bottomText, hasError = false, onChange, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <StyledInputWrapper>
      {label && (
        <Text color="gray600" fontType="p2" style={{ marginBottom: '8px' }}>
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
};

const ForwardRef = forwardRef(Input);
export default ForwardRef;

const StyledInputWrapper = styled.div<{ width?: string }>`
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  ${({ theme, hasError }) => css`
    ${theme.fonts.body1}
    border: 1px solid ${hasError ? theme.colors.red : theme.colors.gray300};
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray900};
    caret-color: ${hasError ? theme.colors.red : theme.colors.primary};
    ::placeholder {
      ${theme.fonts.body1}
      color: ${theme.colors.gray500};
    }
    &:focus {
      border: 1px solid ${hasError ? theme.colors.red : theme.colors.primary};
    }
  `}
`;
