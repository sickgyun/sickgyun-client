import { useEffect, useState } from 'react';
import { useGetUser } from '@/hooks/api/user/useGetUser';
import { LocalStorage } from '@/libs/api/storage';

export const useUser = () => {
  const { user, ...userQuery } = useGetUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const accessToken = LocalStorage.getItem('siac');

  useEffect(() => {
    if (user) {
      setIsLogin(Boolean(accessToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  useEffect(() => {
    if (!userQuery.isLoading || !userQuery.isFetching) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [userQuery.isFetching, userQuery.isLoading]);

  return { user, isLogin, ...userQuery, isLoading };
};
