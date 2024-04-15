import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { RECEIVE_COFFEE_CHAT_LIST } from './useGetReceiveCoffeechatList';
import { put } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Contact } from '@/types/coffeechat';

type AcceptCoffeechatResponse = {
  message?: string;
  contact?: Contact;
};

type UseAcceptCoffeechatProps = {
  coffeechatId: number;
  openCoffeechatContactMessageModal: (message: string, contact: Contact) => void;
};

export const useAcceptCoffeechat = ({
  coffeechatId,
  openCoffeechatContactMessageModal,
}: UseAcceptCoffeechatProps) => {
  const queryClient = useQueryClient();

  return useMutation<AcceptCoffeechatResponse, AxiosError<ApiErrorScheme>>({
    mutationFn: () => put(`/coffeechat/${coffeechatId}/accept`),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      openCoffeechatContactMessageModal(response.message, response.contact);
    },
  });
};
