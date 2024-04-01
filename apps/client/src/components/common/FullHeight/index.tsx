import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { isClient } from '@/utils/isClient';

type FullHeightProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;

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
