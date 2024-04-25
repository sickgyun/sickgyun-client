import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const pathName = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
};

export default ScrollToTop;
