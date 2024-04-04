import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { get } from '@/libs/api/client';
import type { CoffeechatList } from '@/types/coffeechat';

type GetSendCoffeechatListResponse = CoffeechatList;

export const SEND_COFFEE_CHAT_LIST = 'sendCoffeechatList';

export const useGetSendCoffeechatList = () => {
  const sendCoffeechatListQuery = useQuery<GetSendCoffeechatListResponse[], AxiosError>({
    queryKey: [SEND_COFFEE_CHAT_LIST],
    queryFn: async () => await get('/api/coffeechat/my/send'),
  });

  return {
    sendCoffeechatList: sendCoffeechatListQuery.data,
    ...sendCoffeechatListQuery,
  };
};
