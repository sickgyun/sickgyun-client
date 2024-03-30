import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useUser } from '@/store/user';

export const withAuth = (Component: () => ReactNode) => {
  const WrappedComponent = () => {
    const router = useRouter();
    const user = useUser();

    if (typeof window !== 'undefined') {
      if (user.isLogin) {
        return <Component />;
      } else {
        router.replace('/');
        // TODO: AuthAlert
      }
    }
  };

  return WrappedComponent;
};
