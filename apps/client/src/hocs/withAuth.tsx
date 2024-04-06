import { useOverlay } from '@toss/use-overlay';
import type { ReactNode } from 'react';
import AuthAlert from '@/components/common/AuthAlert';
import { useUser } from '@/hooks/common/useUser';

export const withAuth = (Component: () => ReactNode) => {
  const WrappedComponent = () => {
    const overlay = useOverlay();
    const { user } = useUser();

    const openAuthAlert = () => {
      overlay.open(({ isOpen, close }) => <AuthAlert isOpen={isOpen} onClose={close} />);
    };

    if (typeof window !== 'undefined') {
      if (user.isLogin) {
        return <Component />;
      } else {
        openAuthAlert();
      }
    }
  };

  return WrappedComponent;
};
