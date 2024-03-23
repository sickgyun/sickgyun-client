import { atom } from 'jotai';
import type { User } from '@/hooks/api/user/useGetUser';

export const userAtomState = atom<User>({
  id: 0,
  name: '',
  email: '',
});
