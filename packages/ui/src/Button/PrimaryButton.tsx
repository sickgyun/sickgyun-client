import styled from '@emotion/styled';
import { type Ref, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type PrimaryButtonProps = ButtonProps;

const PrimaryButton = (
  { disabled = false, size = 'medium', children, ...props }: PrimaryButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <StyledPrimaryButton ref={ref} disabled={disabled} size={size} {...props}>
      {children}
    </StyledPrimaryButton>
  );
};

const ForwardRef = forwardRef(PrimaryButton);
export default ForwardRef;

const StyledPrimaryButton = styled.button<PrimaryButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray400 : theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray600 : theme.colors.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ size }) => size && getButtonSize[size]}

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled === false && theme.colors.primaryHover};
  }
`;
