import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { get } from '@/libs/api/client';
import { studentProfileState } from '@/store/StudentProfile';

export type StudentProfileData = {
  name: string;
  bio?: string;
  email?: string;
  profileUrl?: string;
  cardinal: number;
  githubId?: string;
  company?: string;
  position: string;
  isGraduate: boolean;
};

type StudentProfileResponse = {
  message: string;
  data: StudentProfileData;
};

export const STUDENT_PROFILE_QUERY_KEY = 'studentProfile';

export const useGetStudentProfile = (userCode: number) => {
  const [studentProfile, setStudentProfile] = useRecoilState(studentProfileState);

  const studentProfileQuery = useQuery<StudentProfileResponse>({
    queryKey: [STUDENT_PROFILE_QUERY_KEY, userCode],
    queryFn: async () =>
      await get<StudentProfileResponse>(`/student/profile/${userCode}`),
  });

  useEffect(() => {
    const { data: studentProfileQueryData } = studentProfileQuery;

    if (studentProfileQueryData) {
      setStudentProfile(studentProfileQueryData.data);
    }
  }, [setStudentProfile, studentProfileQuery]);

  return { studentProfile };
};
