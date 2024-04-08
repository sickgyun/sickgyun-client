import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { put } from '@/libs/api/client';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { QNA_CARD_QUERY_KEY } from './useGetQnaCard';

export type UpdateQnaRequest = {
  title: string;
  content: string;
  category: string;
};

export const useUpdateQna = (id: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, UpdateQnaRequest>({
    mutationFn: (data) => put(`/api/qna/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QNA_CARD_QUERY_KEY] });
      router.replace('/qna');
    },
  });
};
