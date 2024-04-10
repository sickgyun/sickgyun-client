import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type GetQnaCommentResponse = {
  content: string;
};

export const QNA_COMMENT_QUERY_KEY = 'qnaComment';

export const useGetQnaComment = (id: number) => {
  const qnaCommentQuery = useQuery<GetQnaCommentResponse>({
    queryKey: [QNA_COMMENT_QUERY_KEY],
    queryFn: async () => await get(`/`),
  });
};
