import { useSuspenseQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export type Recurit = {
  id: number;
  company: string;
  imageSrc: string;
  reqruitName: string;
  href: string;
  admissionYear: number;
};

export const RECURIT_LIST_QUERY_KEY = 'recuritList';

export const useGetRecuritList = (size = 6) => {
  const recuritListQuery = useSuspenseQuery<Recurit[], AxiosError<ApiErrorScheme>>({
    queryKey: [RECURIT_LIST_QUERY_KEY],
    queryFn: async () => {
      return await get(`/recruit?size=${size}`);
    },
  });

  return {
    recuritList: recuritListQuery.data,
    ...recuritListQuery,
  };
};
