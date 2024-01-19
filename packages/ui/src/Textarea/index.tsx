import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ForwardedRef, TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Text } from '../Text';

type TextareaProps = {
  label?: string;
  width?: string;
  height?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(function Textarea(
  { label, width = '100%', height = '150px', onChange, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

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
        height={height}
        onChange={onChange}
        onInput={handleInput}
        {...props}
        rows={1}
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
  min-height: ${({ height }) => height};
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
