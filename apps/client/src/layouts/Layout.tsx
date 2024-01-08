import type { ReactNode } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

type LayoutProps = {
  header?: boolean;
  footer?: boolean;
  children: ReactNode;
};

const Layout = ({ children, header = false, footer = false }: LayoutProps) => {
  return (
    <>
      {header && <Header />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
