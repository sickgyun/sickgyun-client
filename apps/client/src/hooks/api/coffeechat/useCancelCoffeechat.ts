import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { SEND_COFFEE_CHAT_LIST } from './useGetSendCoffeechatList';
import { del } from '@/libs/api/client';

export const useCancelCoffeechat = (coffeechatId: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError>({
    mutationFn: () => del(`/coffeechat/${coffeechatId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SEND_COFFEE_CHAT_LIST] });
      alert('커피챗 요청을 취소했어요!');
    },
  });
};
