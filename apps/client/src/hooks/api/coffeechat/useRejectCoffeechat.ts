import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { RECEIVE_COFFEE_CHAT_LIST } from './useGetReceiveCoffeechatList';
import { put } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export type RejectCoffeechatRequest = {
  message: string;
};

export const useRejectCoffeechat = (coffeechatId: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError<ApiErrorScheme>, RejectCoffeechatRequest>({
    mutationFn: (data) => put(`/coffeechat/${coffeechatId}/reject`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      alert('커피챗 신청을 거절했어요.');
    },
  });
};
