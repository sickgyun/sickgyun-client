import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { get } from '@/libs/api/client';

export type SeniorProfileData = {
  userCode: number;
  name: string;
  bio?: string;
  profileUrl?: string;
  cardinal: number;
  company?: string;
  position: string;
};

export type SeniorProfileListResponse = {
  message: string;
  dataList: SeniorProfileData[];
};

export const SENIOR_PROFILE_LIST_QUERY_KEY = 'seniorProfileList';

export const useGetSeniorProfileList = (positionQueryParams: string) => {
  const [seniorProfileList, setSeniorProfileList] = useState<SeniorProfileData[]>([]);

  const seniorProfileListQuery = useQuery<SeniorProfileListResponse>({
    queryKey: [SENIOR_PROFILE_LIST_QUERY_KEY, positionQueryParams],
    queryFn: async () =>
      await get<SeniorProfileListResponse>(
        `/student/profile/?position=${positionQueryParams}`
      ),
  });

  useEffect(() => {
    const { data: seniorProfileListQueryData } = seniorProfileListQuery;

    if (seniorProfileListQueryData) {
      setSeniorProfileList(seniorProfileListQueryData.dataList);
    }
  }, [seniorProfileListQuery]);

  return { seniorProfileList };
};
