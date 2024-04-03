import { atom } from 'jotai';
import type { User } from '@/types/user';

type UserAtom = {
  hasNotification: boolean;
} & User;

export const userAtom = atom<UserAtom>({
  id: 0,
  name: '',
  email: '',
  cardinal: 0,
  isGraduated: false,
  hasCreatedProfile: false,
  profileId: 0,
  hasNotification: false,
});
