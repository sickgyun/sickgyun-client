import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';

export type CreateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useCreateQna = () => {
  return useMutation<unknown, AxiosError, CreateQnaRequest>({
    mutationFn: (data) => post('/qna', data),
    onSuccess: () => {
      alert('qna 등록 성공');
    },
    onError: () => {
      alert('qna 등록 실패');
    },
  });
};
