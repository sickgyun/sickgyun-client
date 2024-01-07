import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useUserInformation } from '@/store/UserInformation';

export const withLogin = (Component: () => ReactNode) => {
  const WrappedComponent = () => {
    const router = useRouter();
    const { isLogin } = useUserInformation();

    if (isLogin) {
      return <Component />;
    } else {
      // TODO: Alert 모달
      alert('로그인 후 접근해주세요.');
      router.replace('/');
    }
  };

  return WrappedComponent;
};
