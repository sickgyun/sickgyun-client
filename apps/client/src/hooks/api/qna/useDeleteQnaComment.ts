import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { del } from '@/libs/api/client';
import { QNA_COMMENT_QUERY_KEY } from './useGetComment';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';

export const useDeleteQnaComment = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`/comments/${id}`),
    onSuccess: () => {
      alert('댓글 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [QNA_COMMENT_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_CARD_QUERY_KEY] });
    },
    onError: () => {
      alert('좋아요 삭제 실패');
    },
  });
};
