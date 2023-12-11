import type { StudentProfileData } from '@/hooks/api/student-profile/useGetStudentProfile';
import { atom } from 'recoil';

export const studentProfileState = atom<StudentProfileData>({
  key: 'studentProfileState',
  default: {
    email: '',
    githubId: '',
    profileUrl: '',
    name: '',
    cardinal: 0,
    company: '',
    isGraduate: false,
    position: 'FRONTEND',
  },
});
