import styled from '@emotion/styled';
import { type CSSProperties, type HTMLAttributes, type Ref, forwardRef } from 'react';

type FlexOptions = {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
};

type FlexProps = FlexOptions & HTMLAttributes<HTMLDivElement>;

export const Flex = (
  { children, direction, align, justify, wrap, basis, grow, shrink, ...props }: FlexProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <StyledFlex
      ref={ref}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      basis={basis}
      grow={grow}
      shrink={shrink}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};

const ForwardRef = forwardRef(Flex);
export default ForwardRef;

const StyledFlex = styled.div<FlexOptions>`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  align-items: ${({ align }) => align && align};
  justify-content: ${({ justify }) => justify && justify};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  flex-basis: ${({ basis }) => basis && basis};
  flex-grow: ${({ grow }) => grow && grow};
  flex-shrink: ${({ shrink }) => shrink && shrink};
`;
