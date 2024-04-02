import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RECEIVE_COFFEE_CHAT_LIST } from './useGetReceiveCoffeechatList';
import { put } from '@/libs/api/client';

export const useAcceptCoffeechat = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => put(`/api/coffeechat/${userId}/accept`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      alert('커피챗 응답이 수락되었어요!');
    },
  });
};
