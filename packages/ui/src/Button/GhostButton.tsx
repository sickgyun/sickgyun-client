import styled from '@emotion/styled';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type GhostButtonProps = ButtonProps;

const GhostButton = (
  { size = 'medium', children, ...props }: GhostButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <StyledGhostButton ref={ref} size={size} {...props}>
      {children}
    </StyledGhostButton>
  );
};

const ForwardRef = forwardRef(GhostButton);
export default ForwardRef;

const StyledGhostButton = styled.button<GhostButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: 'pointer';
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.white};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
