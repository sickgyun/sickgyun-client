import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useUserInformation } from '../UserInformation';
import { hasStudentProfileState } from './hasStudentProfileState';
import { studentProfileState } from './studentProfileState';
import { useGetStudentProfile } from '@/hooks/api/student-profile/useGetStudentProfile';

export const useStudentProfile = () => {
  const [studentProfile, setStudentProfile] = useAtom(studentProfileState);
  const [hasStudentProfile, setHasStudentProfile] = useAtom(hasStudentProfileState);

  const { userInformation } = useUserInformation();
  const { studentProfileData } = useGetStudentProfile(userInformation.userCode);

  useEffect(() => {
    if (studentProfileData) {
      setHasStudentProfile(Boolean(studentProfileData));
      setStudentProfile(studentProfileData);
    }
  }, [setHasStudentProfile, setStudentProfile, studentProfileData]);

  return { hasStudentProfile, studentProfile };
};
