import { Storage } from '@sickgyun/libs';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { isLoginState } from './isLoginState';
import { userInformationState } from './userInformationState';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUserInformation } from '@/hooks/api/user/useGetUserInformation';

export const useUserInformation = () => {
  const [userInformation, setUserInformation] = useAtom(userInformationState);
  const [isLogin, setIsLogin] = useAtom(isLoginState);

  const { userInformationData } = useGetUserInformation();

  useEffect(() => {
    const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

    setIsLogin(Boolean(accessToken));

    if (userInformationData) {
      setUserInformation(userInformationData);
    }
  }, [setIsLogin, setUserInformation, userInformationData]);

  return { isLogin, userInformation };
};
