import { useSuspenseQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Major } from '@/types/profile';

export type GetProfileListResponse = {
  id: number;
  userId: number;
  name: string;
  admissionYear: number;
  imageUrl: string;
  major: Major;
  introduction: string;
  company: string;
  isRecruited: boolean;
  cardinal: number;
};

export const PROFILE_LIST_QUERY_KEY = 'profileList';

export const useGetProfileList = (majors: string[]) => {
  const profileListEndPoint = majors.includes('ALL')
    ? '/profiles'
    : `/profiles?majors=${majors}`;

  const profileListQuery = useSuspenseQuery<
    GetProfileListResponse[],
    AxiosError<ApiErrorScheme>
  >({
    queryKey: [PROFILE_LIST_QUERY_KEY, majors],
    queryFn: async () => await get(profileListEndPoint),
  });

  return {
    profileList: profileListQuery.data,
    ...profileListQuery,
  };
};
