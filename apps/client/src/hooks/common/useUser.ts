import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { userAtom } from '../../store/user/userAtom';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUser } from '@/hooks/api/user/useGetUser';
import { Storage } from '@/libs/api/storage';

export const useUser = () => {
  const userQuery = useGetUser();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

    if (userQuery.data) {
      const user = {
        isLogin: Boolean(accessToken),
        hasNotification: userQuery.data.hasNotification,
        ...userQuery.data.user,
      };
      setUser(user);
    }
  }, [setUser, userQuery.data]);

  useEffect(() => {
    if (userQuery.isSuccess) {
      setIsLoading(false);
    }
  }, [userQuery.isSuccess]);

  return { ...userQuery, isLoading, user: { ...user } };
};
