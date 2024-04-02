import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RECEIVE_COFFEE_CHAT_LIST } from './useGetReceiveCoffeechatList';
import { put } from '@/libs/api/client';

export type RejectCoffeechatRequest = {
  message?: string;
};

export const useRejectCoffeechat = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RejectCoffeechatRequest) =>
      put(`/api/coffeechat/${userId}/reject`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      alert('커피챗 응답이 거절되었어요.');
    },
  });
};
