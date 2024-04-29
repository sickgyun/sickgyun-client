import styled from '@emotion/styled';
import type { ElementType, HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

export type CenterProps = {
  tag?: ElementType;
  width?: string;
  height?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Center = (
  { tag = 'div', children, width = '100%', height = '100%', ...props }: CenterProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledCenter ref={ref} as={tag} width={width} height={height} {...props}>
      {children}
    </StyledCenter>
  );
};

const ForwardRef = forwardRef(Center);
export default ForwardRef;

const StyledCenter = styled.div<CenterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: center;
`;
