import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

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
  const studentProfileQuery = useQuery<StudentProfileResponse>({
    queryKey: [STUDENT_PROFILE_QUERY_KEY, userCode],
    queryFn: async () =>
      await get<StudentProfileResponse>(`/student/profile/${userCode}`),
  });

  return { studentProfileData: studentProfileQuery.data?.data, ...studentProfileQuery };
};
