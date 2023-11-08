import { atom } from 'recoil';
import type { UserInformationData } from '@/hooks/api/user/useGetUserInformation';

export const userInformationState = atom<UserInformationData>({
  key: 'userInformationState',
  default: {
    email: '',
    github_id: '',
    profile_url: '',
    name: '',
    cardinal: 0,
    role: 'STUDENT',
    isGraduate: false,
  },
});
