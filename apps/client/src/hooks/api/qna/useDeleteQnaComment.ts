import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { QNA_QUERY_KEY } from './useGetQna';
import { QNA_COMMENT_LIST_QUERY_KEY } from './useGetQnaCommentList';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { del } from '@/libs/api/client';

export const useDeleteQnaComment = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`/comments/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_COMMENT_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_QUERY_KEY] });
    },
    onError: () => {
      alert('좋아요 삭제 실패');
    },
  });
};
