import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { QNA_QUERY_KEY } from './useGetQna';
import { QNA_COMMENT_LIST_QUERY_KEY } from './useGetQnaCommentList';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { post } from '@/libs/api/client';

export type CreateQnaCommentRequest = {
  content: string;
  parentId?: number;
};

export const useCreateQnaComment = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, CreateQnaCommentRequest>({
    mutationFn: (data) => post(`/comments/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_COMMENT_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_QUERY_KEY] });
    },
    onError: () => {
      alert('댓글 등록 실패');
    },
  });
};
