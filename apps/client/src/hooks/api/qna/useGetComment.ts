import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaCommentResponse = {
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

export const QNA_COMMENT_QUERY_KEY = 'qnaComment';

export const useGetQnaComment = (id: number) => {
  const qnaCommentQuery = useQuery<GetQnaCommentResponse[]>({
    queryKey: [QNA_COMMENT_QUERY_KEY, id],
    queryFn: async () => await get(`/comments/${id}`),
  });

  return { qnaComment: qnaCommentQuery.data, ...qnaCommentQuery };
};
