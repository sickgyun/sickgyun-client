import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaListResponse = {
  id: number;
  title: string;
  content: string;
  category: string;
  createTime: string;
  likeCount: number;
  commentCount: number;
};

export const QNA_LIST_QUERY_KEY = 'qnaList';

export const useGetQnaList = (categories?: string[]) => {
  const qnaListEndPoint = categories ? `api/qna?category=${categories}` : 'api/qna';

  const qnaListQuery = useSuspenseQuery<GetQnaListResponse[]>({
    queryKey: [QNA_LIST_QUERY_KEY, categories],
    queryFn: async () => await get<GetQnaListResponse[]>(qnaListEndPoint),
  });

  return { qnaList: qnaListQuery.data, ...qnaListQuery };
};
