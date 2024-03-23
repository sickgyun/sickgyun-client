import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type RecuritList = {
  id: number;
  company: string;
  imageSrc: string;
  reqruitName: string;
  href: string;
  admissionYear: number;
};

export const RECURIT_LIST_QUERY_KEY = 'recuritList';

export const useGetRecuritList = (size = 6) => {
  const recuritListQuery = useSuspenseQuery<RecuritList[]>({
    queryKey: [RECURIT_LIST_QUERY_KEY],
    queryFn: async () => {
      return await get<RecuritList[]>(`/api/recruit?size=${size}`);
    },
  });

  return {
    recuritList: recuritListQuery.data,
    ...recuritListQuery,
  };
};
