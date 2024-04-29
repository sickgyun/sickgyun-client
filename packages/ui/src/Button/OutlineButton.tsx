import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type Ref, forwardRef } from 'react';
import { type ButtonProps, getButtonSize } from '.';

type OutlineButtonProps = ButtonProps;

const OutlineButton = (
  { size = 'medium', children, ...props }: OutlineButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <StyledOutlineButton ref={ref} size={size} {...props}>
      {children}
    </StyledOutlineButton>
  );
};

const ForwardRef = forwardRef(OutlineButton);
export default ForwardRef;

const StyledOutlineButton = styled.button<OutlineButtonProps>`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  ${({ theme, size }) => css`
    ${size && getButtonSize[size]}
    border: 1px solid ${theme.colors.gray300};
    background-color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.gray50};
    }
  `}
`;
