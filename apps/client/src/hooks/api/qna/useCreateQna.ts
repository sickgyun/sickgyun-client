import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '@/libs/api/client';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';

export type CreateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useCreateQna = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, CreateQnaRequest>({
    mutationFn: (data: CreateQnaRequest) => post('/api/qna', data),
    onSuccess: () => {
      alert('qna 등록 성공');
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
    },
    onError: () => {
      alert('qna 등록 실패');
    },
  });
};
