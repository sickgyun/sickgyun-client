import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ChangeEvent, ForwardedRef, TextareaHTMLAttributes } from 'react';
import { forwardRef, useCallback } from 'react';
import { Text } from '../Text';
import { debounce } from 'lodash';

type TextareaProps = {
  label?: string;
  width?: string;
  minHeight?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(function Textarea(
  { label, width = '100%', minHeight = '150px', onChange, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const handleInput = useCallback(
    debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
      console.log('Input event debounced!');
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }, 300),
    []
  );

  return (
    <StyledTextareaWrapper width={width}>
      {label && (
        <Text color="gray600" fontType="body3" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <StyledTextarea
        ref={ref}
        label={label}
        minHeight={minHeight}
        onChange={onChange}
        onInput={handleInput}
        {...props}
      />
    </StyledTextareaWrapper>
  );
});

const StyledTextareaWrapper = styled.div<{ width?: string }>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledTextarea = styled.textarea<TextareaProps>`
  resize: none;
  outline: none;
  padding: 12px 16px;
  border-radius: 16px;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight};
  font-size: 15px;
  ${({ theme }) => css`
    border: 1.5px solid ${theme.colors.gray400};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    caret-color: ${theme.colors.primary};
    ::placeholder {
      ${theme.fonts.body2}
      color: ${theme.colors.gray500};
    }
    &:focus {
      border: 1.5px solid ${theme.colors.primary};
    }
  `};
`;
