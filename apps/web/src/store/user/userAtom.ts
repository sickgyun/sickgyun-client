import { atom } from 'jotai';
import type { User } from '@/types/user';

export type UserAtom = {
  hasNotification: boolean;
  isLogin: boolean;
} & User;

export const RESET_USER = {
  id: 0,
  name: '',
  email: '',
  cardinal: 0,
  isGraduated: false,
  hasCreatedProfile: false,
  profileId: 0,
  hasNotification: false,
  isLogin: false,
  phoneNumber: '',
  instagramId: '',
  kakaoId: '',
  hasNotContact: true,
};

export const userAtom = atom<UserAtom>(RESET_USER);
