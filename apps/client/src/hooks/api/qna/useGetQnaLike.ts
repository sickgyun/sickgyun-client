import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export const QNA_LIKE_QUERY_KEY = 'qnaLike';

export const useGetQnaLike = (id?: number) => {
  const qnaLikeQuery = useQuery({
    queryKey: [QNA_LIKE_QUERY_KEY, id],
    queryFn: async () => await get(`/api/likes/${id}`),
  });

  return { qnaLike: qnaLikeQuery.data, ...qnaLikeQuery };
};
