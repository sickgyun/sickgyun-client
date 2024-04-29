import styled from '@emotion/styled';
import type { Strategy } from '@floating-ui/react';
import type { ReactNode } from 'react';

type PositionWrapperProps = {
  strategy?: Strategy;
  children: ReactNode;
};

export const PositionWrapper = ({ children, strategy }: PositionWrapperProps) => {
  if (strategy === 'fixed') {
    return <>{children}</>;
  }
  return <StyledPositionWrapper>{children}</StyledPositionWrapper>;
};

const StyledPositionWrapper = styled.div`
  position: relative;
`;
