import { get } from '@/libs/api/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export type StudentProfileListData = {
  userCode: number;
  name: string;
  bio?: string;
  profileUrl?: string;
  cardinal: number;
  company?: string;
  position: string;
};

export type StudentProfileListResponse = {
  message: string;
  dataList: StudentProfileListData[];
};

export const STUDENT_PROFILE_LIST_QUERY_KEY = 'studentProfileList';

export const useGetStudentProfileList = (positionQueryParams: string) => {
  const studentProfileListQuery = useSuspenseQuery<StudentProfileListResponse>({
    queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY, positionQueryParams],
    queryFn: async () =>
      await get<StudentProfileListResponse>(`/student-profile/?position=${positionQueryParams}`),
  });

  return {
    studentProfileListData: studentProfileListQuery.data.dataList,
    ...studentProfileListQuery,
  };
};
