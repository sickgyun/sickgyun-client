import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { CoffeechatList } from '@/types/coffeechat';

type GetReceiveCoffeechatListResponse = CoffeechatList;

export const RECEIVE_COFFEE_CHAT_LIST = 'receiveCoffeechatList';

export const useGetReceiveCoffeechatList = () => {
  const receiveCoffeechatListQuery = useQuery<
    GetReceiveCoffeechatListResponse[],
    AxiosError<ApiErrorScheme>
  >({
    queryKey: [RECEIVE_COFFEE_CHAT_LIST],
    queryFn: async () => await get('/coffeechat/my/receive'),
  });

  return {
    receiveCoffeechatList: receiveCoffeechatListQuery.data,
    ...receiveCoffeechatListQuery,
  };
};
