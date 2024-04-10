import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';
import { QNA_LIKE_QUERY_KEY } from './useGetQnaLike';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { post } from '@/libs/api/client';

export const useCreateQnaLike = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => post(`/likes/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_CARD_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_LIKE_QUERY_KEY] });
    },
    onError: () => {
      alert('좋아요 등록 실패');
    },
  });
};
