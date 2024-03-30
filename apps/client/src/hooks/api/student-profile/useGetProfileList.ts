import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetProfileListResponse = {
  id: number;
  name: string;
  admissionYear: number;
  imageUrl: string;
  major: string;
  introduction: string;
  company: string;
  isRecruited: boolean;
  cardinal: number;
};

export const PROFILE_LIST_QUERY_KEY = 'profileList';

export const useGetProfileList = (majors: string[]) => {
  const profileListEndPoint = majors.includes('ALL')
    ? '/api/profiles'
    : `/api/profiles?majors=${majors}`;

  const profileListQuery = useSuspenseQuery<GetProfileListResponse[]>({
    queryKey: [PROFILE_LIST_QUERY_KEY, majors],
    queryFn: async () => await get<GetProfileListResponse[]>(profileListEndPoint),
  });

  return {
    profileList: profileListQuery.data,
    ...profileListQuery,
  };
};
