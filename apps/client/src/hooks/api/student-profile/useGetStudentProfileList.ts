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

export const useGetStudentProfileList = () => {
  const studentProfileListQuery = useSuspenseQuery<StudentProfileListResponse[]>({
    queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY],
    queryFn: async () => await get<StudentProfileListResponse[]>('/api/profiles'),
  });

  return {
    studentProfileList: studentProfileListQuery.data,
    ...studentProfileListQuery,
  };
};
