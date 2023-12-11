import { atom } from 'recoil';
import type { UserInformationData } from '@/hooks/api/user/useGetUserInformation';

export const userInformationState = atom<UserInformationData>({
  key: 'userInformationState',
  default: {
    userCode: 0,
    email: '',
    githubId: '',
    profileUrl: '',
    name: '',
    cardinal: 0,
    role: 'STUDENT',
    company: '',
    isGraduate: false,
  },
});
