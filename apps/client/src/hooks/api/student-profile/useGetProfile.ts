import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetProfileResponse = {
  id: number;
  name: string;
  cardinal: number;
  email: string;
  imageUrl: string;
  isGraduated: boolean;
  isRecruited: boolean;
  major: string;
  githubId?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
  company?: string;
  introduction?: string;
};

export const PROFILE_QUERY_KEY = 'profile';

export const useGetProfile = (profileId: number) => {
  const profileQuery = useSuspenseQuery<GetProfileResponse>({
    queryKey: [PROFILE_QUERY_KEY, profileId],
    queryFn: async () => await get<GetProfileResponse>(`/api/profiles/${profileId}`),
  });

  return { profile: profileQuery.data, ...profileQuery };
};
