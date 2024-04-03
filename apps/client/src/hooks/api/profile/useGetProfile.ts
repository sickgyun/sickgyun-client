import { useSuspenseQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { Profile } from '@/types/profile';

export type GetProfileResponse = Profile;

export const PROFILE_QUERY_KEY = 'profile';

export const useGetProfile = (profileId: number) => {
  const profileQuery = useSuspenseQuery<GetProfileResponse, AxiosError>({
    queryKey: [PROFILE_QUERY_KEY, profileId],
    queryFn: async () => await get(`/api/profiles/${profileId}`),
  });

  return { profile: profileQuery.data, ...profileQuery };
};
