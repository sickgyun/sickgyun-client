import type { User } from './user';

export type CoffeechatType = 'RECEIVE' | 'SEND';

export type CoffeechatList = {
  id: number;
  state: 'ACCEPT' | 'PENDING' | 'REJECT';
  toUser: User;
  fromUser: User;
};
