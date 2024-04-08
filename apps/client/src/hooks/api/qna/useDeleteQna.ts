import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { del } from '@/libs/api/client';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';

export const useDeleteQna = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`/api/qna/${id}`),
    onSuccess: () => {
      alert('qna 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
    },
    onError: () => {
      alert('qna 삭제 실패');
    },
  });
};
