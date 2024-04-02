import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { CoffechatList, CoffeechatType } from '@/types/coffeechat';

type GetSendCoffechatListResponse = CoffechatList;

export const SEND_COFFEE_CHAT_LIST = 'sendCoffeechatList';

export const useGetSendCoffeechatList = (coffeechatType: CoffeechatType) => {
  const sendCoffeechatListQuery = useSuspenseQuery<GetSendCoffechatListResponse[]>({
    queryKey: [SEND_COFFEE_CHAT_LIST, coffeechatType],
    queryFn: async () =>
      await get<GetSendCoffechatListResponse[]>('/api/coffeechat/my/send'),
  });

  return {
    sendCoffeechatList: sendCoffeechatListQuery.data,
    ...sendCoffeechatListQuery,
  };
};
