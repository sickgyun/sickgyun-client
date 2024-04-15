import type { ReactNode } from 'react';
import Providers from './providers';
import { getMetadata } from '@/utils/getMetadata';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = getMetadata();

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="kr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
