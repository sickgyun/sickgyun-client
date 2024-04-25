import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ChangeEvent, ForwardedRef, TextareaHTMLAttributes } from 'react';
import { forwardRef, useCallback } from 'react';
import { Text } from '../Text';

type TextareaProps = {
  label?: string;
  minHeight?: string;
  isAutoHeight?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(function Textarea(
  { label, isAutoHeight = false, onChange, ...props }: TextareaProps,
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
    <StyledTextareaWrapper>
      {label && (
        <Text color="gray600" fontType="p2" style={{ marginBottom: '8px' }}>
          {label}
        </Text>
      )}
      <StyledTextarea
        ref={ref}
        onChange={onChange}
        onInput={isAutoHeight ? handleTextareaHeightChange : undefined}
        {...props}
      />
    </StyledTextareaWrapper>
  );
});

const StyledTextareaWrapper = styled.div`
  flex: 1;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  outline: none;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  min-height: 150px;
  font-size: 15px;
  ${({ theme }) => css`
    ${theme.fonts.body2}
    border: 1px solid ${theme.colors.gray300};
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
