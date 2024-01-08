import type { ReactNode } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

type LayoutProps = {
  isHeader?: boolean;
  isFooter?: boolean;
  children: ReactNode;
};

const Layout = ({ children, isHeader = false, isFooter = false }: LayoutProps) => {
  return (
    <>
      {isHeader && <Header />}
      <main>{children}</main>
      {isFooter && <Footer />}
    </>
  );
};

export default Layout;
