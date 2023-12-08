import type { Metadata } from 'next';
import { StyleProvider, SuspensiveProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Connect',
  description: "Let's Connect!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <SuspensiveProvider>
          <StyleProvider>{children}</StyleProvider>
        </SuspensiveProvider>
      </body>
    </html>
  );
}
