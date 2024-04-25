import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Profile } from '@/types/profile';

export type GetProfileMineResponse = Profile;

export const PROFILE_MINE_QUERY_KEY = 'profileMine';

export const useGetProfileMine = () => {
  const profileMineQuery = useQuery<GetProfileMineResponse, AxiosError<ApiErrorScheme>>({
    queryKey: [PROFILE_MINE_QUERY_KEY],
    queryFn: async () => await get('/profiles/mine'),
  });

  return { profileMine: profileMineQuery.data, ...profileMineQuery };
};
