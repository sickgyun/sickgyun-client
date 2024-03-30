import { useQuery } from '@tanstack/react-query';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { get } from '@/libs/api/client';
import { Storage } from '@/libs/api/storage';

export type User = {
  id: number;
  name?: string;
  email: string;
  isGraduated?: boolean;
  cardinal?: number;
};

export const USER_QUERY_KEY = 'user';

export const useGetUser = () => {
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

  const userQuery = useQuery<User>({
    queryKey: [USER_QUERY_KEY],
    queryFn: async () => await get<User>('/api/user'),
    enabled: Boolean(accessToken),
  });

  return {
    user: userQuery.data,
    ...userQuery,
  };
};
