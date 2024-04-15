import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { Qna } from '@/types/qna';

export type GetQnaListResponse = {
  id: number;
  title: string;
  content: string;
  category: Qna;
  writer: {
    id: number;
    name: string;
    email: string;
    isGraduated: boolean;
    cardinal: number;
    hasCreatedProfile: boolean;
    profileId: number;
  };
  createTime: string;
  likeCount: number;
  commentCount: number;
};

export const QNA_LIST_QUERY_KEY = 'qnaList';

export const useGetQnaList = (categories?: string[], criteria?: string) => {
  let qnaListEndPoint = categories ? `/qna?category=${categories}` : '/qna';

  if (criteria) {
    qnaListEndPoint += `&criteria=${criteria}`;
  }

  const qnaListQuery = useQuery<GetQnaListResponse[]>({
    queryKey: [QNA_LIST_QUERY_KEY, categories, criteria],
    queryFn: async () => await get(qnaListEndPoint),
  });

  return { qnaList: qnaListQuery.data, ...qnaListQuery };
};
