import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { CoffechatList, CoffeechatType } from '@/types/coffeechat';

type GetReceiveCoffechatListResponse = CoffechatList;

export const RECEIVE_COFFEE_CHAT_LIST = 'receiveCoffeechatList';

export const useGetReceiveCoffeechatList = (coffeechatType: CoffeechatType) => {
  const receiveCoffeechatListQuery = useSuspenseQuery<GetReceiveCoffechatListResponse[]>({
    queryKey: [RECEIVE_COFFEE_CHAT_LIST, coffeechatType],
    queryFn: async () =>
      await get<GetReceiveCoffechatListResponse[]>('/api/coffeechat/my/receive'),
  });

  return {
    receiveCoffeechatList: receiveCoffeechatListQuery.data,
    ...receiveCoffeechatListQuery,
  };
};
