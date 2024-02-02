import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

type RecuritListResponse = {
  id: number;
  company: string;
  imageSrc: string;
  reqruitName: string;
  href: string;
};

export const RECURIT_LIST_QUERY_KEY = 'recuritList';

export const useGetRecuritList = (size = 6) => {
  const recuritListQuery = useSuspenseQuery<RecuritListResponse[]>({
    queryKey: [RECURIT_LIST_QUERY_KEY],
    queryFn: async () => {
      return await get<RecuritListResponse[]>(`/api/reqruit?size=${size}`);
    },
  });

  return {
    recuritList: recuritListQuery.data,
    ...recuritListQuery,
  };
};
