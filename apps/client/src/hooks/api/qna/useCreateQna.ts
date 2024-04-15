import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export type CreateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useCreateQna = () => {
  return useMutation<unknown, AxiosError<ApiErrorScheme>, CreateQnaRequest>({
    mutationFn: (data) => post('/qna', data),
    onSuccess: () => {
      alert('qna 등록 성공');
    },
    onError: () => {
      alert('qna 등록 실패');
    },
  });
};
