import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { get } from '@/libs/api/client';

export type SeniorData = {
  userCode: number;
  name: string;
  bio?: string;
  profileUrl?: string;
  cardinal: number;
  company?: string;
  position: string;
};

export type SeniorListResponse = {
  message: string;
  dataList: SeniorData[];
};

export const SENIOR_LIST_QUERY_KEY = 'seniorList';

export const useGetSeniorList = (positionQueryParams: string) => {
  const [seniorList, setSeniorList] = useState<SeniorData[]>([]);

  const seniorListQuery = useQuery<SeniorListResponse>({
    queryKey: [SENIOR_LIST_QUERY_KEY, positionQueryParams],
    queryFn: async () =>
      await get<SeniorListResponse>(`/senior?position=${positionQueryParams}`),
  });

  useEffect(() => {
    const { data: seniorListQueryData } = seniorListQuery;

    if (seniorListQueryData) {
      setSeniorList(seniorListQueryData.dataList);
    }
  }, [setSeniorList, seniorList, seniorListQuery]);

  return { seniorList };
};
