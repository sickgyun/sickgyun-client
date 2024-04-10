import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaCommentListResponse = {
  id: number;
  content: string;
  userResponse: {
    id: number;
    name: string;
    email: string;
    isGraduated: boolean;
    cardinal: number;
    hasCreatedProfile: boolean;
    profileId: number;
  };
};

export const QNA_COMMENT_LIST_QUERY_KEY = 'qnaCommentList';

export const useGetQnaCommentList = (id: number) => {
  const qnaCommentListQuery = useQuery<GetQnaCommentListResponse[]>({
    queryKey: [QNA_COMMENT_LIST_QUERY_KEY, id],
    queryFn: async () => await get(`/comments/${id}`),
  });

  return { qnaCommentList: qnaCommentListQuery.data, ...qnaCommentListQuery };
};
