import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ChangeEvent, ForwardedRef, HTMLAttributes } from 'react';
import { forwardRef, useCallback } from 'react';
import { Text } from '../Text';

type TextareaProps = {
  label?: string;
  width?: string;
  minHeight?: string;
  isAutoHeight?: boolean;
} & HTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(function Textarea(
  {
    label,
    width = '100%',
    minHeight = '150px',
    isAutoHeight = false,
    onChange,
    ...props
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const handleTextareaHeightChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    []
  );

  return (
    <StyledTextareaWrapper width={width}>
      {label && (
        <Text color="gray600" fontType="p3" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <StyledTextarea
        ref={ref}
        minHeight={minHeight}
        onChange={onChange}
        onInput={isAutoHeight ? handleTextareaHeightChange : undefined}
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

const StyledTextarea = styled.textarea<{ minHeight?: string }>`
  resize: none;
  outline: none;
  padding: 10px;
  border-radius: 16px;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight};
  font-size: 15px;
  ${({ theme }) => css`
    ${theme.fonts.body2}
    border: 1px solid ${theme.colors.gray400};
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray900};
    caret-color: ${theme.colors.primary};
    ::placeholder {
      ${theme.fonts.body2}
      color: ${theme.colors.gray500};
    }
    &:focus {
      border: 1px solid ${theme.colors.primary};
    }
  `};
`;
