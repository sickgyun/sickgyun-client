import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type StudentProfileListResponse = {
  userId: number;
  name: string;
  admissionYear: number;
  imageUrl: string;
  major: string;
  introduction: string;
  company: string;
  isRecruited: boolean;
};

export const STUDENT_PROFILE_LIST_QUERY_KEY = 'studentProfileList';

export const useGetStudentProfileList = (majors: string[]) => {
  const studentProfileListEndPoint = majors.includes('ALL')
    ? '/api/profiles'
    : `/api/profiles?majors=${majors}`;

  const studentProfileListQuery = useSuspenseQuery<StudentProfileListResponse[]>({
    queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY, majors],
    queryFn: async () =>
      await get<StudentProfileListResponse[]>(studentProfileListEndPoint),
  });

  return {
    studentProfileList: studentProfileListQuery.data,
    ...studentProfileListQuery,
  };
};
