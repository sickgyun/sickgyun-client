import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { RECEIVE_COFFEE_CHAT_LIST } from './useGetReceiveCoffeechatList';
import { put } from '@/libs/api/client';

type UseAcceptCoffeechatProps = {
  coffeechatId: number;
  openCoffeechatMessageModal: (message: string) => void;
};

export const useAcceptCoffeechat = ({
  coffeechatId,
  openCoffeechatMessageModal,
}: UseAcceptCoffeechatProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => put(`/api/coffeechat/${coffeechatId}/accept`),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      openCoffeechatMessageModal(response?.message);
    },
  });
};
