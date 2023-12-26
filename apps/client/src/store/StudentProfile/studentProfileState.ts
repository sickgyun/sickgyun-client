import { atom } from 'jotai';
import type { StudentProfileData } from '@/hooks/api/student-profile/useGetStudentProfile';

export const studentProfileState = atom<StudentProfileData>({
  email: '',
  githubId: '',
  profileUrl: '',
  name: '',
  cardinal: 0,
  company: '',
  isGraduate: false,
  position: 'FRONTEND',
});
