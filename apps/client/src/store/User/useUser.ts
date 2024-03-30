import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { isLoginAtom } from './isLoginAtom';
import { userAtom } from './userAtom';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUser } from '@/hooks/api/user/useGetUser';
import { Storage } from '@/libs/api/storage';

export const useUser = () => {
  const userQuery = useGetUser();
  const [user, setUser] = useAtom(userAtom);
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);

  useEffect(() => {
    const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
    setIsLogin(Boolean(accessToken));

    if (userQuery.data) {
      setUser(userQuery.data);
    }
  }, [setIsLogin, setUser, userQuery.data]);

  return { isLogin, ...user };
};
