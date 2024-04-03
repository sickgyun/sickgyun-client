import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { cache } from 'react';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { get } from '@/libs/api/client';
import { Storage } from '@/libs/api/storage';
import type { User } from '@/types/user';

type GetUserResponse = {
  user: User;
  hasNotification: boolean;
};

export const USER_QUERY_KEY = 'user';

export const useGetUser = () => {
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

  const userQuery = useQuery<GetUserResponse, AxiosError>({
    queryKey: [USER_QUERY_KEY],
    queryFn: cache(async () => await get('/api/user')),
    enabled: Boolean(accessToken),
  });

  return {
    user: userQuery.data,
    ...userQuery,
  };
};
