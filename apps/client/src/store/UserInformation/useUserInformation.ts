import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginState } from './isLoginState';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUserInformation } from '@/hooks/api/user/useGetUserInformation';
import { Storage } from '@/libs/localStorage/storage';

export const useUserInformation = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const { userInformation } = useGetUserInformation();

  useEffect(() => {
    const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

    setIsLogin(Boolean(accessToken));
  }, [setIsLogin]);

  return { isLogin, userInformation };
};