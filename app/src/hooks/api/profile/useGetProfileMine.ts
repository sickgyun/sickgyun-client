import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { Profile } from '@/types/profile';

export type GetProfileMineResponse = Profile;

export const PROFILE_MINE_QUERY_KEY = 'profileMine';

export const useGetProfileMine = () => {
  const profileMineQuery = useQuery<GetProfileMineResponse>({
    queryKey: [PROFILE_MINE_QUERY_KEY],
    queryFn: async () => await get<GetProfileMineResponse>('/api/profiles/mine'),
  });

  return { profileMine: profileMineQuery.data, ...profileMineQuery };
};
