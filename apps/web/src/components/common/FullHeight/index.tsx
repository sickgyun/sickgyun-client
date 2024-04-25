import type { HTMLAttributes, ReactNode } from 'react';
import { useLayoutEffect, useState } from 'react';

type FullHeightProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const FullHeight = ({ children, ...props }: FullHeightProps) => {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div
      style={{
        height: `${height}px`,
        overflow: 'hidden',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default FullHeight;
