import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useUserInformation } from '@/store/UserInformation';

export const withAuth = (Component: () => ReactNode) => {
  const WrappedComponent = () => {
    const router = useRouter();
    const { isLogin } = useUserInformation();

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
