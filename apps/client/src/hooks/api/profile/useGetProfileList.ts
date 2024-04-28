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
    // NOTE: cardinal이 number 타입일 경우 0이면 false로 인식되어 쿼리 업데이트가 진행되지 않기 때문에 string으로 강제 형 변환을 진행해 줍니다.
    queryKey: [PROFILE_LIST_QUERY_KEY, [major, isRecruited, String(cardinal)]],
    queryFn: async () =>
      await get('/profiles', {
        params: {
          major: major !== 'ALL' ? major : null,
          cardinal: cardinal !== 0 ? cardinal : null,
          isRecruited: isRecruited ? true : null,
        },
      }),
  });

  return {
    profileList: profileListQuery.data,
    ...profileListQuery,
  };
};
