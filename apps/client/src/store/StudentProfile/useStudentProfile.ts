import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useUser } from '../User';
import { hasStudentProfileState } from './hasStudentProfileState';
import { studentProfileState } from './studentProfileState';
import { useGetStudentProfile } from '@/hooks/api/student-profile/useGetStudentProfile';

export const useStudentProfile = () => {
  const [studentProfile, setStudentProfile] = useAtom(studentProfileState);
  const [hasStudentProfile, setHasStudentProfile] = useAtom(hasStudentProfileState);

  const { user } = useUser();
  const { studentProfileData } = useGetStudentProfile(user.id);

  useEffect(() => {
    if (studentProfileData) {
      setHasStudentProfile(Boolean(studentProfileData));
      setStudentProfile(studentProfileData);
    }
  }, [setHasStudentProfile, setStudentProfile, studentProfileData]);

  return { hasStudentProfile, studentProfile };
};
