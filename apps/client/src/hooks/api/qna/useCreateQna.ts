import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { QNA_QUERY_KEY } from './useGetQna';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { post } from '@/libs/api/client';

export type CreateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useCreateQna = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, CreateQnaRequest>({
    mutationFn: (data) => post('/qna', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_QUERY_KEY] });
    },
    onError: () => {
      alert('qna 등록 실패');
    },
  });
};
