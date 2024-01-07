import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useUserInformation } from '@/store/UserInformation';

export const withLogin = <Props,>(Component: (props: Props) => ReactNode) => {
  const WrappedComponent = (props: Props) => {
    const router = useRouter();
    const { isLogin, userInformation } = useUserInformation();

    if (isLogin) {
      return <Component userInformation={userInformation} {...props} />;
    } else {
      // TODO: Alert 모달
      alert('로그인 후 접근해주세요.');
      router.replace('/');
    }
  };

  return WrappedComponent;
};
