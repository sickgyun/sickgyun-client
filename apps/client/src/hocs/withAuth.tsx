import { useOverlay } from '@toss/use-overlay';
import { type ReactNode, useEffect, useState } from 'react';
import AuthAlert from '@/components/common/AuthAlert';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { Storage } from '@/libs/api/storage';

export const withAuth = (Component: () => ReactNode) => {
  const WrappedComponent = () => {
    const overlay = useOverlay();
    const [mounted, setMounted] = useState(false);
    const isLogin = Boolean(Storage.getItem(LOCAL_STORAGE_KEY.accessToken));

    useEffect(() => {
      setMounted(true);
    }, []);

    const openAuthAlert = () => {
      overlay.open(({ isOpen, close }) => <AuthAlert isOpen={isOpen} onClose={close} />);
    };

    if (typeof window !== 'undefined') {
      if (mounted && isLogin) {
        return <Component />;
      } else {
        openAuthAlert();
      }
    }
  };

  return WrappedComponent;
};
