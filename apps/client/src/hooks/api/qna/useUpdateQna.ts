import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { QNA_QUERY_KEY } from './useGetQna';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { put } from '@/libs/api/client';

export type UpdateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useUpdateQna = (id: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, UpdateQnaRequest>({
    mutationFn: (data) => put(`/qna/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_QUERY_KEY] });
      router.replace('/qna');
    },
  });
};
