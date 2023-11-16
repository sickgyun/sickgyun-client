import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { get } from '@/libs/api/client';

type StudentProfileData = {
  name: string;
  bio?: string;
  email?: string;
  profileUrl?: string;
  cardinal: number;
  githubId?: string;
  company?: string;
  position: string;
};

type StudentProfileResponse = {
  message: string;
  data: StudentProfileData;
};

export const STUDENT_PROFILE_QUERY_KEY = 'studentProfile';

export const useGetStudentProfile = (userCode: number) => {
  const [studentProfile, setStudentProfile] = useState<StudentProfileData>({
    name: '',
    bio: '',
    email: '',
    profileUrl: '',
    cardinal: 0,
    githubId: '',
    company: '',
    position: '',
  });

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
  }, [studentProfileQuery, studentProfileQuery.data]);

  return { studentProfile };
};
