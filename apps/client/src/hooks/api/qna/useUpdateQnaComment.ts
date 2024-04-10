import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { put } from '@/libs/api/client';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';
import { QNA_COMMENT_LIST_QUERY_KEY } from './useGetComment';

export type UpdateQnaCommentRequest = {
  content: string;
};

export const useUpdateQnaComment = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, UpdateQnaCommentRequest>({
    mutationFn: (data) => put(`/comments/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_CARD_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_COMMENT_LIST_QUERY_KEY] });
    },
  });
};
