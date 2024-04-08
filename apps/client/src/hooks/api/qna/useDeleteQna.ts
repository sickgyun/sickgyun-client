import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { del } from '@/libs/api/client';
import { QNA_LIST_QUERY_KEY } from './useGetQnaList';
import { useRouter } from 'next/navigation';

export const useDeleteQna = (id: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`/api/qna/${id}`),
    onSuccess: () => {
      router.push('/qna');
      queryClient.invalidateQueries({ queryKey: [QNA_LIST_QUERY_KEY] });
    },
    onError: () => {
      alert('qna 삭제 실패');
    },
  });
};
