import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUserInformation } from '@/hooks/api/user/useGetUserInformation';

export const useUserInformation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const { userInformation } = useGetUserInformation();

  useEffect(() => {
    setIsLogin(Boolean(accessToken));
  }, [accessToken]);

  return { isLogin, userInformation };
};
