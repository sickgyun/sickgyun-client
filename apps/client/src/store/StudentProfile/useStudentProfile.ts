import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useUserInformation } from '../UserInformation';
import { hasStudentProfileState } from './hasStudentProfileState';
import { useGetStudentProfile } from '@/hooks/api/student-profile/useGetStudentProfile';

export const useStudentProfile = () => {
  const [hasStudentProfile, setHasStudentProfile] =
    useRecoilState(hasStudentProfileState);

  const { userInformation } = useUserInformation();
  const { studentProfile } = useGetStudentProfile(userInformation.userCode);

  useEffect(() => {
    setHasStudentProfile(Boolean(studentProfile?.name));
  }, [setHasStudentProfile, studentProfile?.name]);

  return { hasStudentProfile, studentProfile };
};
