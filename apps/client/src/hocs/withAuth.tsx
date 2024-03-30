import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useUser } from '@/store/user';

export const withAuth = (Component: () => ReactNode) => {
  const WrappedComponent = () => {
    const router = useRouter();
    const { isLogin } = useUser();

    if (typeof window !== 'undefined') {
      if (isLogin) {
        return <Component />;
      } else {
        router.replace('/');
        // TODO: AuthAlert
      }
    }
  };

  return WrappedComponent;
};
