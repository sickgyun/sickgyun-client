import { useSuspenseQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Profile } from '@/types/profile';

export type GetProfileResponse = Profile;

export const PROFILE_QUERY_KEY = 'profile';

export const useGetProfile = (profileId: number) => {
  const profileQuery = useSuspenseQuery<GetProfileResponse, AxiosError<ApiErrorScheme>>({
    queryKey: [PROFILE_QUERY_KEY, profileId],
    queryFn: async () => await get(`/profiles/${profileId}`),
  });

  return { profile: profileQuery.data, ...profileQuery };
};
