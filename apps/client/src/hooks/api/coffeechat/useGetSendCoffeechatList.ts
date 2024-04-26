import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Coffeechat } from '@/types/coffeechat';

type GetSendCoffeechatListResponse = Coffeechat;

export const SEND_COFFEE_CHAT_LIST = 'sendCoffeechatList';

export const useGetSendCoffeechatList = () => {
  const sendCoffeechatListQuery = useQuery<
    GetSendCoffeechatListResponse[],
    AxiosError<ApiErrorScheme>
  >({
    queryKey: [SEND_COFFEE_CHAT_LIST],
    queryFn: async () => await get('/coffeechat/my/send'),
  });

  return {
    sendCoffeechatList: sendCoffeechatListQuery.data,
    ...sendCoffeechatListQuery,
  };
};
