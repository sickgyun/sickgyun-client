import { atom } from 'jotai';
import type { User } from '@/types/user';

export const userAtom = atom<User>({
  id: 0,
  name: '',
  email: '',
  cardinal: 0,
  isGraduated: false,
  hasCreatedProfile: false,
  profileId: 0,
});
