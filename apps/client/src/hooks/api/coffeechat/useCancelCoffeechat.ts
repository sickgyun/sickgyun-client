import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SEND_COFFEE_CHAT_LIST } from './useGetSendCoffeechatList';
import { del } from '@/libs/api/client';

export const useCancelCoffeechat = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => del(`/api/coffeechat/${userId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SEND_COFFEE_CHAT_LIST] });
      alert('커피챗 요청이 취소되었어요.');
    },
  });
};
