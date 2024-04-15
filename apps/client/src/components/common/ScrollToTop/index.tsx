import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

type ScrollToTopProps = {
  children: ReactNode;
};

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathName = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return <>{children}</>;
};

export default ScrollToTop;
