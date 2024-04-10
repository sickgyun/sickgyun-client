import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { QNA_QUERY_KEY } from './useGetQna';
import { QNA_LIKE_QUERY_KEY } from './useGetQnaLike';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { del } from '@/libs/api/client';

export const useDeleteQnaLike = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`/likes/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIKE_QUERY_KEY] });
    },
    onError: () => {
      alert('좋아요 삭제 실패');
    },
  });
};
