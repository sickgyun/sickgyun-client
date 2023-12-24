import { atom } from 'jotai';
import type { UserInformationData } from '@/hooks/api/user/useGetUserInformation';

export const userInformationState = atom<UserInformationData>({
  userCode: 0,
  email: '',
  githubId: '',
  profileUrl: '',
  name: '',
  cardinal: 0,
  role: 'STUDENT',
  company: '',
  isGraduate: false,
});
