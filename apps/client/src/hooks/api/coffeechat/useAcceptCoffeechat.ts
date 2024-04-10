import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { RECEIVE_COFFEE_CHAT_LIST } from './useGetReceiveCoffeechatList';
import { put } from '@/libs/api/client';

type AcceptCoffeechatResponse = {
  message?: string;
};

type UseAcceptCoffeechatProps = {
  coffeechatId: number;
  openCoffeechatMessageModal: (message: string) => void;
};

export const useAcceptCoffeechat = ({
  coffeechatId,
  openCoffeechatMessageModal,
}: UseAcceptCoffeechatProps) => {
  const queryClient = useQueryClient();

  return useMutation<AcceptCoffeechatResponse, AxiosError>({
    mutationFn: () => put(`/coffeechat/${coffeechatId}/accept`),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      openCoffeechatMessageModal(response.message);
    },
  });
};
