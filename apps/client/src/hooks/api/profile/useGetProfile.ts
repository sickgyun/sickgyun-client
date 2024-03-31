import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { Profile } from '@/types/profile';

export type GetProfileResponse = Profile;

export const PROFILE_QUERY_KEY = 'profile';

export const useGetProfile = (id: number) => {
  const profileQuery = useSuspenseQuery<GetProfileResponse>({
    queryKey: [PROFILE_QUERY_KEY, id],
    queryFn: async () => await get<GetProfileResponse>(`/api/profiles/${id}`),
  });

  return { profile: profileQuery.data, ...profileQuery };
};
