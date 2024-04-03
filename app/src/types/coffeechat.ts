import type { User } from './user';

export type CoffeechatType = 'RECEIVE' | 'SEND';

export type CoffeechatState = 'ACCEPT' | 'PENDING' | 'REJECT';

export enum CoffeechatStateEnum {
  'PENDING' = '대기',
  'REJECT' = '거절',
  'ACCEPT' = '승인',
}

export type CoffeechatList = {
  id: number;
  state: CoffeechatState;
  toUser: User;
  fromUser: User;
};
