import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaCardResponse = {
  id: number;
  title: string;
  content: string;
  writer: string;
  category: string;
  createTime: string;
  likeCount: number;
  commentCount: number;
};

export const QNA_CARD_QUERY_KEY = 'qnaCard';

export const useGetQnaCard = (id?: number) => {
  const qnaCardQuery = useQuery<GetQnaCardResponse>({
    queryKey: [QNA_CARD_QUERY_KEY, id],
    queryFn: async () => await get(`api/qna/${id}`),
  });

  return { qnaCard: qnaCardQuery.data, ...qnaCardQuery };
};
