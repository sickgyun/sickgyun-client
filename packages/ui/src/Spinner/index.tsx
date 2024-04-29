import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import { forwardRef } from 'react';
import type { HTMLAttributes, Ref } from 'react';

type SpinnerProps = {
  size?: number;
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Spinner = (
  { size = 32, color = colors.primary, ...props }: SpinnerProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner ref={ref} color={color} size={size} {...props} />
    </StyledSpinnerWrapper>
  );
};

const ForwardRef = forwardRef(Spinner);
export default ForwardRef;

const StyledSpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 3px solid ${colors.gray100};
  border-top: 3px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
