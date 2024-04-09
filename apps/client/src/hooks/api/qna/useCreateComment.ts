import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { post } from '@/libs/api/client';
import { QNA_COMMENT_QUERY_KEY } from './useGetComment';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';

export type CreateQnaCommentRequest = {
  content: string;
};

export const useCreateQnaComment = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, CreateQnaCommentRequest>({
    mutationFn: (data) => post(`/comments/${id}`, data),
    onSuccess: () => {
      alert('댓글 등록 성공');
      queryClient.invalidateQueries({ queryKey: [QNA_COMMENT_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_CARD_QUERY_KEY] });
    },
    onError: () => {
      alert('댓글 등록 실패');
    },
  });
};
