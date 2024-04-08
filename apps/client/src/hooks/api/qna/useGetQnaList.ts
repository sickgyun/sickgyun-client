import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaListResponse = {
  id: number;
  title: string;
  content: string;
  category: string;
  writer: string;
  createTime: string;
  likeCount: number;
  commentCount: number;
};

export const QNA_LIST_QUERY_KEY = 'qnaList';

export const useGetQnaList = (categories?: string[], criteria?: string) => {
  let qnaListEndPoint = categories ? `api/qna?category=${categories}` : 'api/qna';

  if (criteria) {
    qnaListEndPoint += `&criteria=${criteria}`;
  }

  const qnaListQuery = useSuspenseQuery<GetQnaListResponse[]>({
    queryKey: [QNA_LIST_QUERY_KEY, categories, criteria],
    queryFn: async () => await get(qnaListEndPoint),
  });

  return { qnaList: qnaListQuery.data, ...qnaListQuery };
};
