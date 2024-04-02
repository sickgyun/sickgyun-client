import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';
import type { CoffeechatList, CoffeechatType } from '@/types/coffeechat';

type GetSendCoffeechatListResponse = CoffeechatList;

export const SEND_COFFEE_CHAT_LIST = 'sendCoffeechatList';

export const useGetSendCoffeechatList = (coffeechatType: CoffeechatType) => {
  const sendCoffeechatListQuery = useSuspenseQuery<GetSendCoffeechatListResponse[]>({
    queryKey: [SEND_COFFEE_CHAT_LIST, coffeechatType],
    queryFn: async () =>
      await get<GetSendCoffeechatListResponse[]>('/api/coffeechat/my/send'),
  });

  return {
    sendCoffeechatList: sendCoffeechatListQuery.data,
    ...sendCoffeechatListQuery,
  };
};
