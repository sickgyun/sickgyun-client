import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { CoffeechatList, CoffeechatType } from '@/types/coffeechat';

type GetReceiveCoffeechatListResponse = CoffeechatList;

export const RECEIVE_COFFEE_CHAT_LIST = 'receiveCoffeechatList';

export const useGetReceiveCoffeechatList = (coffeechatType: CoffeechatType) => {
  const receiveCoffeechatListQuery = useSuspenseQuery<GetReceiveCoffeechatListResponse[]>(
    {
      queryKey: [RECEIVE_COFFEE_CHAT_LIST, coffeechatType],
      queryFn: async () =>
        await get<GetReceiveCoffeechatListResponse[]>('/api/coffeechat/my/receive'),
    }
  );

  return {
    receiveCoffeechatList: receiveCoffeechatListQuery.data,
    ...receiveCoffeechatListQuery,
  };
};
