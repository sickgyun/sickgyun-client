import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { get } from '@/libs/api/client';
import { LocalStorage } from '@/libs/api/storage';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { User } from '@/types/user';

type GetUserResponse = {
  user: User;
  hasNotification: boolean;
};

export const USER_QUERY_KEY = 'user';

export const useGetUser = () => {
  const accessToken = LocalStorage.getItem(LOCAL_STORAGE_KEY.accessToken);

  const userQuery = useQuery<GetUserResponse, AxiosError<ApiErrorScheme>>({
    queryKey: [USER_QUERY_KEY],
    queryFn: async () => await get('/user'),
    enabled: Boolean(accessToken),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  return {
    user: { hasNotification: userQuery.data?.hasNotification, ...userQuery.data?.user },
    ...userQuery,
  };
};
