import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaCardResponse = {
  id: number;
  title: string;
  content: string;
  writer: {
    id: 2;
    name: string;
    email: string;
    isGraduated: boolean;
    cardinal: number;
    hasCreatedProfile: boolean;
    profileId: number;
  };
  category: string;
  createTime: string;
  likeCount: number;
  commentCount: number;
};

export const QNA_QUERY_KEY = 'qna';

export const useGetQnaCard = (id: number) => {
  const qnaCardQuery = useQuery<GetQnaCardResponse>({
    queryKey: [QNA_QUERY_KEY, id],
    queryFn: async () => await get(`/qna/${id}`),
  });

  return { qnaCard: qnaCardQuery.data, ...qnaCardQuery };
};
