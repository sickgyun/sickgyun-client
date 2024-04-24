import { useSuspenseQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Major } from '@/types/profile';

export type GetProfileListParams = {
  major: Major;
  isRecruited: boolean;
  cardinal?: number;
};

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

export const useGetProfileList = ({
  major,
  isRecruited,
  cardinal,
}: GetProfileListParams) => {
  const profileListQuery = useSuspenseQuery<
    GetProfileListResponse[],
    AxiosError<ApiErrorScheme>
  >({
    queryKey: [PROFILE_LIST_QUERY_KEY, [major, isRecruited, cardinal]],
    queryFn: async () =>
      await get('/profiles', {
        params: {
          major: major !== 'ALL' ? major : null,
          cardinal: cardinal !== 0 ? cardinal : null,
          isRecruited,
        },
      }),
  });

  return {
    profileList: profileListQuery.data,
    ...profileListQuery,
  };
};
