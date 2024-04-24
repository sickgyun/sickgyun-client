import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type OutlineButtonProps = ButtonProps;

export const OutlineButton = forwardRef(function Button(
  { size = 'medium', children, ...props }: OutlineButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledOutlineButton ref={ref} size={size} {...props}>
      {children}
    </StyledOutlineButton>
  );
});

const StyledOutlineButton = styled.button<OutlineButtonProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 8px;
  cursor: pointer;

  ${({ theme, size }) => css`
    ${size && getButtonSize[size]}
    border: 1px solid ${theme.colors.gray300};
    background-color: ${theme.colors.white};
  `}
`;
