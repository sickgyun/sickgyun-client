import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { isLoginState } from './isLoginState';
import { userAtomState } from './userAtomState';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUser } from '@/hooks/api/user/useGetUser';
import { Storage } from '@/libs/storage';

export const useUser = () => {
  const { user } = useGetUser();
  const [userAtom, setUserAtom] = useAtom(userAtomState);
  const [isLogin, setIsLogin] = useAtom(isLoginState);

  useEffect(() => {
    const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

    setIsLogin(Boolean(accessToken));

    if (user) {
      setUserAtom(user);
    }
  }, [setIsLogin, setUserAtom, user]);

  return { isLogin, user: userAtom };
};
