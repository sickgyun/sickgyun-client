import { isNumber } from 'lodash';
import { forwardRef } from 'react';
import type { HTMLAttributes, Ref } from 'react';

type SpacerProps = {
  width?: number;
  height?: number;
} & HTMLAttributes<HTMLDivElement>;

const Spacer = ({ width, height, ...props }: SpacerProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      style={{
        width: isNumber(width) ? `${width}px` : '100%',
        height: isNumber(height) ? `${height}px` : '100%',
      }}
      {...props}
    />
  );
};

const ForwardRef = forwardRef(Spacer);
export default ForwardRef;
