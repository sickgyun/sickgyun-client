import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ForwardedRef, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type TertiaryButtonProps = ButtonProps;

const TertiaryButton = (
  { size = 'medium', isActive = false, children, ...props }: TertiaryButtonProps,

  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <StyledTertiaryButton ref={ref} size={size} isActive={isActive} {...props}>
      {children}
    </StyledTertiaryButton>
  );
};

const ForwardRef = forwardRef(TertiaryButton);
export default ForwardRef;

const StyledTertiaryButton = styled.button<TertiaryButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ size }) => size && getButtonSize[size]}
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.primary : theme.colors.gray700};
    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.gray100};
    }
  `}
`;
