import type { HTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/common/useIsomorphicLayoutEffect';

type FullHeightProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const FullHeight = ({ children, ...props }: FullHeightProps) => {
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
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
