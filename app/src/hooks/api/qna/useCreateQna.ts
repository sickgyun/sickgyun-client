import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

export type CreateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useCreateQna = () => {
  return useMutation<unknown, unknown, CreateQnaRequest>({
    mutationFn: (data: CreateQnaRequest) => post('/api/qna', data),
    onSuccess: () => {
      alert('qna 등록 성공');
    },
    onError: () => {
      alert('qna 등록 실패');
    },
  });
};
