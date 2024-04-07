import { useQuery } from '@tanstack/react-query';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';
import { get } from '@/libs/api/client';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';

export const useGetQnaLike = (id?: number) => {
  const qnaLikeQuery = useQuery({
    queryKey: [QNA_CARD_QUERY_KEY, QNA_LIST_QUERY_KEY],
    queryFn: async () => await get(`/api/likes/${id}`),
  });

  return { qnaLike: qnaLikeQuery.data, ...qnaLikeQuery };
};
