import { atom } from 'recoil';
import type { UserInformationResponse } from '@/hooks/api/user/useGetUserInformation';

export const userInformationState = atom<UserInformationResponse>({
  key: 'userInformationState',
  default: {
    github_id: '',
    profile_url: '',
    name: '',
    cardinal: 0,
    role: 'STUDENT',
    isGraduate: false,
  },
});
