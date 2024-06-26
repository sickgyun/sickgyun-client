import styled from '@emotion/styled';
import { type CSSProperties, type HTMLAttributes, type Ref, forwardRef } from 'react';

type StackProps = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: 'vertical' | 'horizontal';
  spacing?: number;
} & HTMLAttributes<HTMLDivElement>;

const Stack = (
  {
    children,
    spacing = 24,
    direction = 'vertical',
    align,
    justify,
    ...props
  }: StackProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledStack
      ref={ref}
      direction={direction}
      spacing={spacing}
      align={align}
      justify={justify}
      {...props}
    >
      {children}
    </StyledStack>
  );
};

const ForwardRef = forwardRef(Stack);
export default ForwardRef;

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  > * {
    ${({ direction, spacing }) =>
      direction === 'vertical'
        ? `margin-bottom: ${spacing}px`
        : `margin-right: ${spacing}px`};
  }

  > *:last-child {
    margin: 0;
  }
`;
